# Time Flow

A beautiful, minimalist website that visualizes how much of the current year has passed. Watch time flow in calm, elegant ways.

## ✨ Features

- **10 Unique Visualizations**: Multiple ways to see your year's progress
- **Real-Time Calculations**: Automatically updates based on the current date
- **Smooth Animations**: Carefully crafted transitions and micro-interactions
- **Light/Dark Mode**: Toggle between themes with persistent storage
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile
- **Share Functionality**: Share your progress with others
- **Fullscreen Mode**: Immersive viewing for each visualization
- **Zero Dependencies**: Pure HTML, CSS, and vanilla JavaScript
- **Fast Loading**: Optimized performance with no external libraries

## 🎨 Visualizations

1. **Progress Bar** - A simple, elegant bar filling as the year progresses
2. **Radial Ring** - A circular journey around the year
3. **Year in Weeks** - 52 boxes representing each week
4. **Calendar Fill** - Every day of the year laid out in a grid
5. **Hourglass** - Time draining from top to bottom
6. **Candle** - A candle burning down through the year
7. **Mountain Climb** - Ascending the year's peak
8. **Battery** - The year's energy level draining
9. **Timeline** - A linear journey with a marker for today
10. **Life Bar** - A game-style HP bar showing year progress

## 🚀 Quick Start

Simply open `index.html` in any modern web browser. No build process, no installation required.

```bash
# Clone or download the files
# Then open in browser
open index.html
```

## 📁 File Structure

```
time-flow/
├── index.html              # Homepage with visualization gallery
├── assets/
│   ├── css/
│   │   └── style.css      # Global styles and design system
│   └── js/
│       └── main.js        # Core JavaScript functionality
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

## 🎯 How It Works

The site automatically calculates:
- Current date
- Day of the year (1-365/366)
- Percentage of year complete
- Days remaining
- Current week number
- All date-related information

All visualizations use the same real-time data, ensuring consistency across views.

## 🎨 Design Philosophy

Time Flow embraces a calm, refined minimalism with these principles:

- **Typography**: Sophisticated serif headings (Crimson Pro) paired with clean sans-serif body text (DM Sans)
- **Colors**: Soft earth tones with warm accents (#d4a574, #e8c9a3)
- **Motion**: Slow, deliberate animations that feel meditative
- **Space**: Generous whitespace and breathing room
- **Emotion**: Subtle emotional depth - watching time physically flow

## 🛠️ Technical Details

- **No Build Process**: Works directly in the browser
- **No Framework**: Pure vanilla JavaScript
- **CSS Variables**: Comprehensive design system
- **SVG Animations**: Smooth, performant visualizations
- **LocalStorage**: Theme preference persistence
- **Semantic HTML**: Proper accessibility and SEO

## 🌐 Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📱 Responsive Design

Fully responsive with breakpoints at:
- Desktop: 1400px+
- Tablet: 768px - 1399px
- Mobile: < 768px

## 🎨 Customization

Easy to customize by editing CSS variables in `assets/css/style.css`:

```css
:root {
  --accent-primary: #d4a574;    /* Main accent color */
  --accent-secondary: #e8c9a3;  /* Secondary accent */
  --bg-primary: #faf8f5;        /* Background color */
  --text-primary: #2d2a26;      /* Text color */
  /* ... and more */
}
```

## 📄 License

Free to use for personal and commercial projects.

## 🙏 Credits

Created with intention and care.
Fonts: Google Fonts (Crimson Pro, DM Sans)

---

**Time Flow** - A mindful way to visualize your year

Made with ⏳ and intention
