// ============================================
// TIME FLOW - Main JavaScript
// ============================================

// ============================================
// TIME CALCULATIONS
// ============================================

class TimeFlow {
  constructor() {
    this.currentDate = new Date();
    this.year = this.currentDate.getFullYear();
    this.calculate();
  }

  calculate() {
    // Start and end of year
    const startOfYear = new Date(this.year, 0, 1);
    const endOfYear = new Date(this.year, 11, 31, 23, 59, 59);
    
    // Calculate day of year
    const diffTime = this.currentDate - startOfYear;
    this.dayOfYear = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    // Total days in year
    this.totalDays = this.isLeapYear(this.year) ? 366 : 365;
    
    // Days remaining
    this.daysRemaining = this.totalDays - this.dayOfYear;
    
    // Percentage complete
    this.percentComplete = (this.dayOfYear / this.totalDays) * 100;
    
    // Weeks
    this.totalWeeks = 52;
    this.currentWeek = Math.ceil(this.dayOfYear / 7);
    
    // Month info
    this.currentMonth = this.currentDate.getMonth() + 1;
    this.currentDay = this.currentDate.getDate();
    
    return this;
  }

  isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  getFormattedDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return this.currentDate.toLocaleDateString('en-US', options);
  }

  refresh() {
    this.currentDate = new Date();
    this.year = this.currentDate.getFullYear();
    return this.calculate();
  }
}

// Global instance
const timeFlow = new TimeFlow();

// ============================================
// THEME MANAGEMENT
// ============================================

class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.apply();
  }

  apply() {
    document.documentElement.setAttribute('data-theme', this.theme);
    this.updateIcon();
  }

  toggle() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.apply();
  }

  updateIcon() {
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(icon => {
      if (this.theme === 'dark') {
        icon.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `;
      } else {
        icon.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `;
      }
    });
  }
}

const themeManager = new ThemeManager();

// ============================================
// SHARE FUNCTIONALITY
// ============================================

async function shareTimeFlow() {
  const shareData = {
    title: 'Time Flow',
    text: `${timeFlow.percentComplete.toFixed(1)}% of ${timeFlow.year} has already passed. ${timeFlow.daysRemaining} days remaining.`,
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
      showNotification('Link copied to clipboard!');
    }
  } catch (err) {
    console.log('Share cancelled or failed');
  }
}

// ============================================
// FULLSCREEN FUNCTIONALITY
// ============================================

function toggleFullscreen() {
  const fullscreenEl = document.getElementById('fullscreen');
  if (fullscreenEl) {
    fullscreenEl.classList.toggle('active');
  }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--bg-card);
    color: var(--text-primary);
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px var(--shadow-md);
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
    font-family: var(--font-body);
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// Add animations for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatNumber(num) {
  return num.toFixed(1);
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animateNumber(element, start, end, duration = 1000) {
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);
    const current = start + (end - start) * easedProgress;
    
    element.textContent = formatNumber(current);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// ============================================
// VISUALIZATION HELPERS
// ============================================

function createProgressRing(percent, size = 200, strokeWidth = 20) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="transform: rotate(-90deg);">
      <circle
        cx="${size / 2}"
        cy="${size / 2}"
        r="${radius}"
        fill="none"
        stroke="var(--border-color)"
        stroke-width="${strokeWidth}"
      />
      <circle
        cx="${size / 2}"
        cy="${size / 2}"
        r="${radius}"
        fill="none"
        stroke="var(--accent-primary)"
        stroke-width="${strokeWidth}"
        stroke-dasharray="${circumference}"
        stroke-dashoffset="${offset}"
        stroke-linecap="round"
        style="transition: stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1);"
      />
    </svg>
  `;
}

// ============================================
// PAGE INITIALIZATION
// ============================================

function initHomePage() {
  // Update stats
  const percentEl = document.getElementById('percent-complete');
  const daysUsedEl = document.getElementById('days-used');
  const daysLeftEl = document.getElementById('days-remaining');
  
  if (percentEl) animateNumber(percentEl, 0, timeFlow.percentComplete, 1500);
  if (daysUsedEl) animateNumber(daysUsedEl, 0, timeFlow.dayOfYear, 1500);
  if (daysLeftEl) animateNumber(daysLeftEl, 0, timeFlow.daysRemaining, 1500);
  
  // Animate cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(20px)';
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 50);
        }, index * 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.viz-card').forEach(card => {
    observer.observe(card);
  });
}

function initVizPage() {
  // Update info display
  const percentEl = document.getElementById('info-percent');
  const daysUsedEl = document.getElementById('info-days-used');
  const daysLeftEl = document.getElementById('info-days-left');
  
  if (percentEl) animateNumber(percentEl, 0, timeFlow.percentComplete, 1500);
  if (daysUsedEl) animateNumber(daysUsedEl, 0, timeFlow.dayOfYear, 1500);
  if (daysLeftEl) animateNumber(daysLeftEl, 0, timeFlow.daysRemaining, 1500);
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => themeManager.toggle());
  });
  
  // Share buttons
  document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', shareTimeFlow);
  });
  
  // Fullscreen buttons
  document.querySelectorAll('.fullscreen-btn').forEach(btn => {
    btn.addEventListener('click', toggleFullscreen);
  });
  
  document.querySelectorAll('.fullscreen-close').forEach(btn => {
    btn.addEventListener('click', toggleFullscreen);
  });
  
  // Initialize appropriate page
  if (document.querySelector('.hero')) {
    initHomePage();
  } else if (document.querySelector('.viz-page')) {
    initVizPage();
  }
  
  // Refresh time data every minute
  setInterval(() => {
    timeFlow.refresh();
  }, 60000);
});

// ============================================
// EXPORT FOR USE IN VISUALIZATIONS
// ============================================

window.TimeFlow = TimeFlow;
window.timeFlow = timeFlow;
window.themeManager = themeManager;
window.shareTimeFlow = shareTimeFlow;
window.toggleFullscreen = toggleFullscreen;
window.showNotification = showNotification;
window.createProgressRing = createProgressRing;
window.animateNumber = animateNumber;
