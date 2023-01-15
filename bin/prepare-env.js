const path = require('path');
const fs = require('fs');
const appRoot = require('app-root-path');

const appEnvConfigPath = process.env.APP_ENV
  ? path.join(appRoot.path, `.env.${process.env.APP_ENV}`)
  : null;

const localConfigPath = path.join(appRoot.path, '.env.local');

if (appEnvConfigPath) {
  fs.writeFileSync(
    localConfigPath,
    fs.readFileSync(appEnvConfigPath).toString(),
  );
}
