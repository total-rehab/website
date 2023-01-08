const path = require('path');
const fs = require('fs');
const core = require('@actions/core');
const Handlebars = require('handlebars');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const { argv } = yargs(hideBin(process.argv));
const requiredVars = ['appEnv'];

requiredVars.forEach((requiredVar) => {
  if (!(requiredVar in argv)) {
    throw new Error(
      `The --${requiredVar} argument is required to prepare the app spec.`,
    );
  }
});

const digitalOceanDir = path.join(__dirname, '..', '.do');
const templatePath = path.join(digitalOceanDir, 'app.template.yaml');
const appSpecPath = path.join(digitalOceanDir, 'app.yaml');
const source = fs.readFileSync(templatePath).toString();
const template = Handlebars.compile(source);
const compiledContent = template({
  appEnv: argv.appEnv,
});

// Write the app spec
fs.writeFileSync(appSpecPath, Buffer.from(compiledContent));

// Set the DigitalOcean app ID for use in later GH Actions steps
core.setOutput(
  'digitalocean-app-id',
  process.env[`${argv.appEnv.toUpperCase()}_DIGITALOCEAN_APP_ID`],
);
