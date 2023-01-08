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

## Environments

By default the staging versions of the Vibefind API and Supabase database will
by used when you run `yarn dev` and the production versions when you run
`yarn build && yarn start`.

If you want to override this behaviour to point at your locally running version
of the API you can add the following environment variable to you `.env.local` file:

```text
API_BASE_URL=http://127.0.0.1:7000
```

You can disable Supabase auth by adding the following to your `.env.local` file:

```text
SUPABASE_URL=
SUPABASE_ANON_KEY=
```
