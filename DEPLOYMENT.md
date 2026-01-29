# Time Flow - Deployment Guide

## 🚨 Important: File Structure

The site MUST maintain this exact structure:

```
time-flow/
├── index.html
├── test.html (for testing)
├── debug.html (for debugging)
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── logo.png
└── views/
    ├── progress-bar.html
    ├── radial-ring.html
    └── ... (other HTML files)
```

## Local Testing

### Option 1: Using Python (Recommended)

```bash
cd time-flow
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

### Option 2: Using Node.js

```bash
cd time-flow
npx serve
```

### Option 3: Using PHP

```bash
cd time-flow
php -S localhost:8000
```

## ⚠️ DO NOT open `index.html` directly!

Opening `file:///path/to/index.html` in your browser will cause:
- CSS not loading
- JavaScript errors
- CORS issues

Always use a local server!

## Deployment to Web Host

### Upload Files:
1. Upload the entire `time-flow` folder to your web server
2. Ensure file permissions are correct (644 for files, 755 for folders)
3. Keep the folder structure intact

### Common Hosts:

**Netlify (Easiest):**
1. Drag and drop the `time-flow` folder to Netlify
2. Done! Your site is live

**Vercel:**
1. `vercel --prod`
2. Deploy the `time-flow` folder

**GitHub Pages:**
1. Push to GitHub
2. Enable Pages in Settings
3. Set source to main branch

**Traditional cPanel:**
1. Upload via FTP to `public_html/`
2. Access via `yourdomain.com`

## Troubleshooting

### CSS Not Loading?
- Check: Is CSS file at `assets/css/style.css`?
- Check: Are you using a local server (not file://)?
- Check browser console for errors

### JavaScript Not Working?
1. Open `test.html` in browser
2. Check console for errors
3. Verify `timeFlow` object initializes

### Stats Showing 0?
- Open browser console (F12)
- Type: `timeFlow`
- Should show object with current data
- If undefined, JS not loading properly

## Browser Cache

After updates, hard refresh:
- Chrome/Firefox: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Safari: `Cmd + Option + R`

## Need Help?

1. Check `test.html` first
2. Check `debug.html` for calculations
3. Open browser console (F12)
4. Check Network tab for failed requests
