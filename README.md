# Total Rehab admin

The admin interface for the Total Rehab app, built using
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
