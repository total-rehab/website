# Total Rehab website

The public website for the Total Rehab app, built using [Next.js](https://nextjs.org/docs).

The site is built statically using GitHub Actions and served on GitHub Pages.
Supabase webhooks are used to trigger a rebuild, currently whenever a blog post
or plan is updated.

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

### Backend API

The backend API to be used is set via the `API_BASE_URL` environment variable.

## Deployments

We deploy to the static site to production whenever a change is merged into the
`main` branch, which is set as the default branch in GitHub.

At the time of writing there is no staging environment, primarily due to the
size of the project, the fact that there was only a single developer working
on it, and to save on costs. However, you can target a staging environment while
developing locally (see below).

## Staging

If you want to target a staging environment during local development create a
`.env` file and add in the `API_BASE_URL`, `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
