# GitHub Pages Deployment Guide

Follow these steps in order. No prior GitHub experience required.

---

## Step 1 — Create a GitHub account

Go to [https://github.com/signup](https://github.com/signup) and create a free account if you do not have one.

---

## Step 2 — Create a new repository

1. Click the **+** icon (top right) → **New repository**
2. Name it: `hunt-showdown-cheats-site` (must match the repo name in `next.config.ts`)
3. Set visibility to **Public** (required for free GitHub Pages)
4. Do **not** add README, .gitignore, or license (we already have these)
5. Click **Create repository**

---

## Step 3 — Install Git (if needed)

Download from [https://git-scm.com/download/win](https://git-scm.com/download/win) and install with default options.

---

## Step 4 — Install Git LFS (for the hero video)

The hero video is ~100 MB. Git LFS handles large files:

```powershell
# Install Git LFS from https://git-lfs.com/
git lfs install
```

---

## Step 5 — Push your project to GitHub

Open PowerShell in the project folder:

```powershell
cd C:\Users\USER\Desktop\website\hunt-showdown-cheats-site

git init
git lfs install
git lfs track "public/videos/*.mp4"
git add .
git commit -m "Initial commit: Hunt Showdown cheats site"

# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/hunt-showdown-cheats-site.git
git branch -M main
git push -u origin main
```

GitHub will ask you to sign in. Use a **Personal Access Token** if prompted for a password:
- GitHub → Settings → Developer settings → Personal access tokens → Generate new token
- Enable `repo` scope

---

## Step 6 — Enable GitHub Pages

1. Open your repository on GitHub
2. Go to **Settings** → **Pages** (left sidebar)
3. Under **Build and deployment**:
   - **Source:** GitHub Actions
4. Save — the workflow in `.github/workflows/deploy.yml` runs automatically on every push to `main`

---

## Step 7 — Wait for deployment

1. Go to the **Actions** tab in your repository
2. Click the latest **Deploy to GitHub Pages** workflow run
3. Wait until it shows a green checkmark (~2–3 minutes)
4. Your site will be live at:

```
https://YOUR_USERNAME.github.io/hunt-showdown-cheats-site/
```

---

## Step 8 — Update site URL (optional)

After first deploy, edit `src/lib/site.ts` and set `SITE_URL` to your actual GitHub Pages URL, then push again.

---

## Local preview before deploying

```powershell
cd C:\Users\USER\Desktop\website\hunt-showdown-cheats-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| 404 on all pages | Ensure repo name matches `GITHUB_REPO_NAME` in workflow |
| Video not loading | Confirm `public/videos/hero.mp4` exists and Git LFS pushed it |
| Build fails in Actions | Check Actions log; run `npm run build:gh-pages` locally first |
| Styles missing | Ensure `GITHUB_PAGES=true` during build (workflow sets this) |

---

## Re-deploy after changes

Every time you push to `main`, GitHub Actions rebuilds and redeploys automatically:

```powershell
git add .
git commit -m "Describe your change"
git push
```
