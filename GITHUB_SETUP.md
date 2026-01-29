# GitHub Upload Instructions

## Complete File List to Upload

Upload ALL these files and folders to GitHub:

```
time-flow/
├── .gitignore
├── .htaccess
├── README.md
├── LICENSE.txt
├── DEPLOYMENT.md
├── index.html
├── test.html
├── assets/
│   ├── logo.png
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── views/
    ├── progress-bar.html
    ├── radial-ring.html
    ├── year-in-weeks.html
    ├── calendar-fill.html
    ├── hourglass.html
    ├── candle.html
    ├── mountain-climb.html
    ├── battery.html
    ├── timeline.html
    └── life-bar.html
```

**Total: 21 files**

## Quick Upload Method

### Option 1: GitHub Web Interface (Easiest)

1. Go to github.com and create a new repository
2. Name it: `time-flow`
3. Description: "A beautiful, minimalist time visualization website"
4. **IMPORTANT**: Make it **Private** if you don't want others to copy
5. Don't initialize with README (we have our own)
6. Click "uploading an existing file"
7. Drag the entire `time-flow` folder contents
8. Commit!

### Option 2: Command Line

```bash
cd time-flow

# Initialize git
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Time Flow visualization site"

# Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/time-flow.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Enable GitHub Pages (Free Hosting)

After uploading:

1. Go to your repository Settings
2. Scroll to "Pages" section
3. Source: Deploy from branch `main`
4. Folder: `/ (root)`
5. Click Save
6. Your site will be live at: `https://YOUR-USERNAME.github.io/time-flow/`

## Repository Settings

### Recommended Settings:

**Visibility:**
- ✅ Private (if you don't want others copying)
- ❌ Public (only if you want to share openly)

**About Section:**
- Description: "A mindful time visualization tool"
- Website: Your GitHub Pages URL
- Topics: `javascript`, `visualization`, `time`, `mindfulness`, `web-design`

**Features to Enable:**
- ✅ Issues (for your own tracking)
- ❌ Wikis (not needed)
- ❌ Projects (not needed)

## Keep Your Code Private

If you want to keep your site private but still deploy it:

**Option A: GitHub Private Repo + Netlify**
1. Make repo private on GitHub
2. Connect to Netlify
3. Netlify will build from private repo
4. Site is public, code is private

**Option B: GitHub Private Repo + Vercel**
1. Keep repo private
2. Connect to Vercel
3. Same result - public site, private code

**Option C: Just use GitHub Pages**
- Even private repos can enable Pages
- Site will be public, repo stays private

## After Upload

Test your deployment:

```bash
# Clone to verify
git clone https://github.com/YOUR-USERNAME/time-flow.git test-clone
cd test-clone

# Run local server
python3 -m http.server 8000

# Open http://localhost:8000
```

## Common Issues

**"permission denied"** - Use HTTPS URL or set up SSH keys
**"repository not found"** - Check repository name and your username
**"failed to push"** - Pull first: `git pull origin main --rebase`

## Repository Description Template

```
🌊 Time Flow - A beautiful, minimalist website that visualizes how much of the year has passed

✨ Features:
• 10 unique time visualizations
• Real-time calculations
• Light/dark mode
• Fully responsive
• Pure vanilla JavaScript

⚡ Tech: HTML, CSS, JavaScript (no frameworks)
```

## Tags to Add

```
time-visualization
javascript
css
html
web-app
responsive-design
mindfulness
productivity
year-progress
```

Done! Your site will be on GitHub and optionally live on GitHub Pages.
