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

By default the local URL of the Vibefind API will be used. If you want to point
at staging, for example, you export the following environment variable before
running the app (or write it to a local `.env` file):

```text
export API_BASE_URL=http://example.com
```
