# HomeBase Marking Site

A React + Vite application with TypeScript and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.

## Build for Production

Build the static site:

```bash
npm run build
```

This will create a `dist` directory with all the static files ready for deployment.

## Deploy on GitHub Pages

This app is configured for static export and can be deployed to GitHub Pages:

1. Build the static site:
   ```bash
   npm run build
   ```

2. The `dist` directory contains all the static files.

3. Configure GitHub Pages to serve from the `dist` directory:
   - Go to your repository Settings → Pages
   - Set Source to "GitHub Actions" (recommended) or "Deploy from a branch"
   - If using branch deployment, select the branch and set the folder to `/dist`

4. Alternatively, you can use a GitHub Action to automatically build and deploy. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Learn More

- [Vite Documentation](https://vitejs.dev/) - learn about Vite features and API
- [React Documentation](https://react.dev/) - learn about React
- [Tailwind CSS Documentation](https://tailwindcss.com/) - learn about Tailwind CSS
# HomeBaseSite
