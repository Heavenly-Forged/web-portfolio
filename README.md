# Jiro's Portfolio — React + Tailwind

A production-ready personal portfolio built with **Vite + React + Tailwind CSS**.

## Project structure

```
portfolio/
├── index.html                  # HTML shell + anti-flash dark mode script
├── src/
│   ├── main.jsx                 # React entry point, wraps App in ThemeProvider
│   ├── App.jsx                  # Composes all sections in order
│   ├── index.css                # Tailwind directives + base styles
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/light mode state + localStorage persistence
│   ├── data/
│   │   └── portfolioData.js     # ALL your content lives here — edit this file
│   └── components/
│       ├── Navbar.jsx
│       ├── ThemeToggle.jsx
│       ├── Hero.jsx
│       ├── SectionHeading.jsx   # Shared heading used by every section
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx         # Includes the drag-and-drop upload preview
│       ├── Certifications.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── tailwind.config.js           # Design tokens (colors, fonts) live here
└── package.json
```

---

## 1. Local setup

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
# Install dependencies
npm install

# Start the dev server (hot-reloads as you edit)
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

To edit your info — name, bio, skills, certs, contact links — open
**`src/data/portfolioData.js`**. You generally won't need to touch
component files unless you want to change layout or add a section.

---

## 2. Build for production

```bash
npm run build
```

This outputs a static `dist/` folder — plain HTML/CSS/JS, deployable
anywhere that serves static files.

```bash
npm run preview   # sanity-check the production build locally
```

---

## 3. Deploy — Vercel (recommended, free, ~2 minutes)

**Option A: via GitHub (recommended)**
1. Push this project to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub → **Add New Project**.
3. Import your repo. Vercel auto-detects Vite — leave defaults as-is.
4. Click **Deploy**. You'll get a live URL (e.g. `jiro-portfolio.vercel.app`) in under a minute.
5. Every future `git push` to `main` auto-redeploys.

**Option B: via CLI**
```bash
npm install -g vercel
vercel        # follow prompts, deploys a preview
vercel --prod # promotes to your production URL
```

---

## 4. Deploy — GitHub Pages (alternative, free)

1. Install the gh-pages helper:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `package.json`, add:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.js`, set the `base` option to match your repo name:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/<repo-name>/',
   })
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repo settings → Pages, make sure the source is set to the `gh-pages` branch.

> Note: if you deploy to a **custom domain** or `<username>.github.io` root repo, you can leave `base` as `/`.

---

## 5. Adding your first real project

There's deliberately **no upload button anywhere on the site** — not
for visitors, not even for you. Projects are added by editing a file
and pushing to Git, which is simpler and has zero attack surface (no
login system to secure, no backend to misuse).

**Steps:**

1. If your project has a screenshot or a file to offer (PDF, zip,
   etc.), drop it into `public/projects/`, e.g.:
   ```
   public/projects/tarsi-cover.png
   public/projects/tarsi-writeup.pdf
   ```

2. Open `src/data/portfolioData.js` and add an entry:
   ```js
   export const projects = [
     {
       name: 'Tarsi',
       description: 'Offline-first budgeting app with AI-assisted categorization.',
       link: 'https://github.com/you/tarsi',      // optional
       image: '/projects/tarsi-cover.png',          // optional
       file: '/projects/tarsi-writeup.pdf',          // optional
     },
   ];
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "Add Tarsi project"
   git push
   ```

Vercel (or GitHub Pages) rebuilds automatically, and the project is
live for every visitor within a minute or two — no login step, no
runtime upload, nothing exposed on the live site that anyone besides
you could ever trigger.

---

## Concepts used (for reference)

| Concept | Where | Why |
|---|---|---|
| `useState` | `Projects.jsx`, `ThemeContext.jsx` | Local, changeable data (theme, uploaded files) |
| `useEffect` | `ThemeContext.jsx` | Sync React state → DOM (`<html class="dark">`) and `localStorage` |
| `useContext` + custom hook | `ThemeContext.jsx` | Share theme globally without prop drilling |
| `useRef` | `Projects.jsx` | Reference a DOM node without triggering re-renders |
| Component composition | `App.jsx` | Keep each section self-contained and reorderable |
| Data/UI separation | `data/portfolioData.js` | Edit content without touching component code |
