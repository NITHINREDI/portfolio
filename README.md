# Nithin · Portfolio

Personal portfolio built with **Vite + React**, deployed on **Netlify**.

## Local dev

```bash
npm install
npm run dev          # http://localhost:5173
```

## Build

```bash
npm run build        # outputs to dist/
npm run preview      # preview the production build locally
```

## Deploy to Netlify (CLI)

### One-time setup

```bash
# 1. Install the Netlify CLI globally
npm install -g netlify-cli

# 2. Log in (opens a browser)
netlify login

# 3. From the project root, link this folder to a new Netlify site
netlify init
# Choose: "Create & configure a new site"
# Team: <your team>
# Site name: nithin-portfolio  (or leave blank for a random one)
# Build command: npm run build
# Publish directory: dist
```

`netlify init` will write a `.netlify/state.json` file linking your local folder
to the Netlify site. `netlify.toml` already has the build config, so it will
just confirm those values.

### Deploy

```bash
# Build + deploy a preview (gets a unique preview URL)
netlify deploy --build

# When you're happy, ship to production
netlify deploy --build --prod
```

Your production URL will be `https://<site-name>.netlify.app`.
You can attach a custom domain later via `netlify domains:add yourdomain.com`.

## Customize

- **Projects**: edit the `projects` array in `src/App.jsx`
- **Skills**: edit the `skills` object in `src/App.jsx`
- **Bio / hero copy**: edit the JSX in `src/App.jsx`
- **Colors / fonts**: edit CSS variables at the top of `src/styles.css`
- **Résumé**: drop a `resume.pdf` into `public/` so the header button works

## Structure

```
.
├── index.html
├── netlify.toml          # Netlify build config + SPA redirect
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx           # all content lives here
    ├── main.jsx
    └── styles.css        # editorial dark theme
```
