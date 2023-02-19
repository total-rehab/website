# Total Rehab website

The public website and admin interface for the Total Rehab app, built using
[Next.js](https://nextjs.org/docs) and [React Admin](https://marmelab.com/react-admin/),
with a custom data provider that integrates with the Total Rehab API.

## Getting Started

Install dependencies:

```text
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

In remote environments the app is configured via `env.staging` and
`env.production` files. You can use the settings from these files by running,
for example:

```text
APP_ENV=staging yarn dev
```

If you want to override these settings you can do so by creating a `.env.local`
file and running `yarn dev`.

Note that no secret values should be committed to these files (with the
exception of the `.env.local`, which does not get committed to version control).

### Backend API

The backend API to be used is set via the `API_BASE_URL` environment variable.

### Authentication

Supabase authentication is set via the `SUPABASE_URL` and `SUPABASE_ANON_KEY`
environment variables. These can be retrieved from the Supabase dashboard.

### Media library

To enable image uploads you will need to make sure that Supabase storage has
a public bucket called "images", containing a filter called "public" for a given
environment.

## Deployments

We deploy to the staging environment when a change is merged into the `main`
branch, which is set as the default branch in GitHub. To deploy to production
[manually trigger](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow)
the `Deploy` workflow, selecting "production" as the environment.

If you're not sure what version of the code is currently running in a given
environment see the API `/healthcheck` endpoint, which exposes a `version` that
contains the current commit hash. Before deploying to production it is worth
checking this `version` to make sure we are running the latest code and are
happy that it has been sufficiently tested.
