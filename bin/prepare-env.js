const path = require('path');
const fs = require('fs');
const appRoot = require('app-root-path');
const dotenv = require('dotenv');

const appEnvConfigPath = process.env.APP_ENV
  ? path.join(appRoot.path, `.env.${process.env.APP_ENV}`)
  : null;

const localConfigPath = path.join(appRoot.path, '.env.local');

dotenv.config({ path: localConfigPath });

if (appEnvConfigPath) {
  dotenv.config({ path: appEnvConfigPath });
  fs.writeFileSync(
    localConfigPath,
    fs.readFileSync(appEnvConfigPath).toString(),
  );
}

const { execSync } = require('child_process');

execSync(`yarn oac ${process.env.API_BASE_URL}/docs.json`, {
  stdio: [0, 1, 2],
});
