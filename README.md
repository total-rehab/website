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

In remote environments the app is configured via `env.staging` and `env.production`
files. For local development (i.e. when using `yarn dev`) we use the `env.development`
file. You can also override settings by creating a `.env.local` file.

Note that no secret values should be committed to these files.

### Backend API

By default, the local URL for the backend API is used during local development.
If you want to override this you can add the `API_BASE_URL` to your `.env.local`
file.

### Authentication

To enable authentication you will need to add the `SUPABASE_URL` and
`SUPABASE_ANON_KEY` environment variables to your `.env.local` file. These can
be retrieved from the Supabase dashboard.

## Media library

To enable image uploads you will need to make sure that Supabase storage has
a public bucket called "images", containing a filter called "public" for a given
environment.
