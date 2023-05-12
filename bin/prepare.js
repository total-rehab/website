const path = require('path');
const fs = require('fs');
const appRoot = require('app-root-path');
const dotenv = require('dotenv');
const { execSync } = require('child_process');
const { createClient } = require('@supabase/supabase-js');

dotenv.config({ path: path.join(appRoot.path, `.env.local`) });
dotenv.config({ path: path.join(appRoot.path, `.env`) });

execSync(`yarn oac ${process.env.API_BASE_URL}/docs.json`, {
  stdio: [0, 1, 2],
});

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  throw new Error('Supabase not initialised');
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
);

const getImageSources = async (from) => {
  const [heroRes, thumbnailRes] = await Promise.all([
    supabase.from(from).select('heroImageId'),
    supabase.from(from).select('thumbnailImageId'),
  ]);

  if (heroRes.error) {
    throw new Error(heroRes.error.message);
  }

  if (thumbnailRes.error) {
    throw new Error(thumbnailRes.error.message);
  }

  const allImageIds = new Set();

  [...heroRes.data, ...thumbnailRes.data].forEach((item) => {
    allImageIds.add(Object.values(item)[0]);
  });

  const mediaRes = await supabase
    .from('Media')
    .select('src')
    .in('id', [...allImageIds]);

  if (mediaRes.error) {
    throw new Error(mediaRes.error.message);
  }

  return mediaRes.data.map(({ src }) => src);
};

const getRemoteImageSources = async () => {
  const [planSources, blogPostSources] = await Promise.all([
    await getImageSources('Plan'),
    await getImageSources('BlogPost'),
  ]);

  return [...new Set([...planSources, ...blogPostSources])];
};

// Generate file for optimising (relevant) remote images
// @see https://github.com/Niels-IO/next-image-export-optimizer
(async () => {
  const remoteImageSources = await getRemoteImageSources();

  fs.writeFileSync(
    path.join(appRoot.path, 'remoteOptimizedImages.js'),
    `module.exports = [\n${remoteImageSources
      .map((src) => `  '${src}'`)
      .join(',\n')},\n];\n`,
  );
})();
