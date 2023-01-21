const path = require('path');
const fs = require('fs');
const core = require('@actions/core');
const Handlebars = require('handlebars');
const fetch = require('node-fetch');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const isCI = require('is-ci');

const { argv } = yargs(hideBin(process.argv));
const requiredVars = ['appName', 'appEnv', 'subDomain'];

requiredVars.forEach((requiredVar) => {
  if (!(requiredVar in argv)) {
    throw new Error(
      `The --${requiredVar} argument is required to prepare the app spec`,
    );
  }
});

const writeAppSpec = () => {
  const digitalOceanDir = path.join(__dirname, '..', '.do');
  const templatePath = path.join(digitalOceanDir, 'app.template.yaml');
  const appSpecPath = path.join(digitalOceanDir, 'app.yaml');
  const source = fs.readFileSync(templatePath).toString();
  const template = Handlebars.compile(source);
  const compiledContent = template({
    appEnv: argv.appEnv,
    subDomain: `${argv.subDomain}${
      argv.appEnv === 'production' ? '' : '-staging'
    }`,
  });

  fs.writeFileSync(appSpecPath, Buffer.from(compiledContent));
};

const getAppId = async () => {
  const token = process.env.DIGITALOCEAN_ACCESS_TOKEN;

  if (!token) {
    if (isCI) {
      throw new Error(
        'The DIGITALOCEAN_ACCESS_TOKEN env var is required when running as part of a CI process',
      );
    }
  }

  const res = await fetch('https://api.digitalocean.com/v2/apps?per_page=200', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { apps } = await res.json();
  const app = apps.find(({ spec }) => spec.name === argv.appName);

  return app.id;
};

const setGhActionsOutput = (appId) => {
  if (!isCI) {
    return;
  }

  // Set the DigitalOcean app ID for use in later GH Actions steps
  core.setOutput('digitalocean-app-id', appId);
};

(async () => {
  writeAppSpec();

  const appId = await getAppId();

  setGhActionsOutput(appId);
})();
