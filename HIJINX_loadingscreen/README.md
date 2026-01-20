# HIJINX Loading Screen

Professional standalone loading screen for RedM/FiveM servers with advanced features and customization options.

---

## Features

- **100% Standalone** - No framework dependencies required (VORP, ESX, QBCore)
- **HIJINX-Inspired Design** - Modern torn-edge styling with Red Dead Redemption 2 theme
- **Interactive Elements** - Mouse tracking, particle effects, and dynamic color cycling
- **Tab Navigation** - Three content sections (Updates, Events, News)
- **Background Slideshow** - Automatic image rotation with fade transitions
- **RDR2 Quotes** - Famous character quotes that rotate during loading
- **Progress Tracking** - Real-time loading progress with animated skull icon
- **Social Media Integration** - Clickable social icons with hover effects
- **Hint Rotation** - Helpful tips that cycle every 8 seconds
- **Responsive Design** - Optimized for all screen sizes
- **Color Animation** - Gradual color transitions through RDR2-themed palette
- **Cursor Enabled** - Interactive loading screen with clickable elements

---

## Installation

### Step 1: Download and Extract
Place the `HIJINX_loadingscreen` folder in your server's resources directory:
```
resources/[standalone]/HIJINX_loadingscreen/
```

### Step 2: Add to Server Configuration
Open your `server.cfg` file and add:
```cfg
ensure HIJINX_loadingscreen
```

### Step 3: Restart Server
Restart your server or use the console command:
```
restart HIJINX_loadingscreen
```

---

## Customization Guide

### Changing Background Images

**Location:** `js/script.js` (Lines 8-12)

The loading screen uses Unsplash API for Red Dead Redemption 2 themed backgrounds. You can replace these with your own images:

```javascript
slideshow: {
    images: [
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920',
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920'
    ],
    interval: 5000  // Time in milliseconds (5000 = 5 seconds)
}
```

**To use local images:**
1. Save your images to `media/images/` folder
2. Replace URLs with local paths:
```javascript
images: [
    'media/images/background1.jpg',
    'media/images/background2.jpg',
    'media/images/background3.jpg'
]
```

**Recommended image specifications:**
- Format: JPG or PNG
- Resolution: 1920x1080 (Full HD)
- File size: Under 2MB per image
- Aspect ratio: 16:9

---

### Changing the Logo

**Location:** `media/images/logo.png`

1. Prepare your logo image (PNG format with transparent background recommended)
2. Save as `logo.png` in the `media/images/` folder
3. Size recommendation: 512x512 pixels or smaller

The logo automatically scales to 150x150 pixels on the loading screen.

**To adjust logo size:**

**Location:** `css/style.css` (Search for `.logo-icon`)

```css
.logo-icon{
    width:150px;    /* Change this value */
    height:150px;   /* Change this value */
    background:transparent;
    border-radius:0;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2rem
}
```

---

### Customizing Colors

The loading screen features automatic color cycling through Red Dead Redemption themed colors.

**Location:** `css/style.css` (Search for `@keyframes colorCycle`)

**Current color palette:**
- Red: #E74C3C
- Burnt Orange: #D35400
- Saddle Brown: #CA6F1E
- Golden Brown: #B9770E
- Dark Brown: #935116
- Dark Goldenrod: #7E5109
- Crimson: #DC143C

**To change the base red color:**

**Location:** `css/style.css` (Line 2)

```css
:root{
    --primary-red:#E74C3C;  /* Change this hex color */
}
```

**To disable color cycling:**

Remove `animation:colorCycle 15s infinite` from these elements in `css/style.css`:
- `.logo-text h1`
- `.main-title`
- `.loading-percentage`

---

### Modifying Text Content

#### Server Title and Description

**Location:** `index.html` (Lines 54-60)

```html
<h1 class="main-title">HIJINX LOADING SCREEN</h1>
<p class="main-description">
    Welcome to HIJINX Roleplay - An immersive Red Dead Redemption 2 experience.<br>
    Join our community for authentic Old West roleplay, custom content, and dedicated staff.<br>
    Your adventure in the frontier awaits.
</p>
```

#### Logo Text

**Location:** `index.html` (Lines 21-24)

```html
<div class="logo-text">
    <h1>HIJINX</h1>
    <p>Scripts</p>
</div>
```

---

### Changing Hints

**Location:** `js/script.js` (Lines 16-23)

```javascript
hints: [
    'Press F1 to open the help menu once you\'ve loaded in.',
    'Use /help for a list of commands.',
    'Join our Discord for whitelist access!',
    'Respect all players and staff members.',
    'Report bugs to staff immediately.',
    'Have fun and enjoy your time in the Old West!'
]
```

Add or remove hints as needed. They rotate every 8 seconds.

---

### Changing RDR2 Quotes

**Location:** `js/script.js` (Lines 24-33)

```javascript
rdr2Quotes: [
    '"We\'re more ghosts than people." - Arthur Morgan',
    '"You don\'t get to live a bad life and have good things happen to you." - Arthur Morgan',
    '"I\'m afraid. I\'m afraid." - Arthur Morgan',
    '"Revenge is a fool\'s game." - Arthur Morgan',
    '"Be loyal to what matters." - Arthur Morgan',
    '"We can\'t always fight nature. We can\'t fight change." - Dutch van der Linde',
    '"I gave you all I had." - Arthur Morgan',
    '"In the end, they always win." - Arthur Morgan'
]
```

Quotes rotate every 10 seconds with a fade effect.

---

### Changing the Progress Bar Icon

**Current icon:** Skull (💀)

**Location:** `index.html` (Line 127)

```html
<div class="horse-icon">💀</div>
```

**To change to a different emoji:**
1. Press `Win + .` (Windows emoji picker)
2. Select your emoji
3. Replace 💀 with your chosen emoji

**Popular alternatives:**
- Horse: 🐴
- Star: ⭐
- Fire: 🔥
- Gun: 🔫
- Hat: 🤠

**To use Font Awesome icon instead:**
```html
<div class="horse-icon"><i class="fas fa-skull"></i></div>
```

Browse icons at: https://fontawesome.com/icons

---

### Modifying Content Panels

The loading screen has three content tabs: Updates, Events, and Newspaper.

**Location:** `index.html` (Lines 64-106)

#### Updates Tab Example:
```html
<div class="update-item">
    <h3>Server Launch</h3>
    <p>Welcome to HIJINX Roleplay! We're excited to have you join our community.</p>
</div>
```

#### Events Tab Example:
```html
<div class="update-item">
    <h3>Weekly Poker Tournament</h3>
    <p>Every Saturday at 8 PM EST. Big prizes for winners!</p>
</div>
```

#### Newspaper Tab Example:
```html
<div class="update-item">
    <h3>Sheriff's Report</h3>
    <p>Increased bandit activity near Valentine. Stay vigilant, citizens!</p>
</div>
```

---

### Configuring Social Media Links

**Location:** `index.html` (Lines 113-117)

```html
<a href="https://discord.gg/yourserver" class="social-icon discord" target="_blank">
    <i class="fab fa-discord"></i>
</a>
<a href="https://youtube.com/@yourchannel" class="social-icon youtube" target="_blank">
    <i class="fab fa-youtube"></i>
</a>
<a href="https://instagram.com/yourpage" class="social-icon instagram" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
<a href="https://tiktok.com/@yourpage" class="social-icon tiktok" target="_blank">
    <i class="fab fa-tiktok"></i>
</a>
<a href="https://yourwebsite.com" class="social-icon" target="_blank">
    <i class="fas fa-globe"></i>
</a>
```

Replace the URLs with your actual social media links.

---


### Adjusting Loading Screen Shutdown Delay

**Location:** `js/script.js` (Line 210)

```javascript
if (progress >= 100) {
    setTimeout(() => {
        window.invokeNative('shutdown');
    }, 1500);  // Change 1500 to desired milliseconds
}
```

Default is 1.5 seconds (1500ms) after reaching 100%.

---

---

## Browser Preview

To preview the loading screen in a web browser:
1. Open `preview.html` in your browser
2. Note: Progress bar auto-animates in preview (disabled on live server)
3. All features work except actual FiveM integration

---

## Support and Credits

**Developer:** HIJINX Development Team  
**Version:** 2.0.0  
**Last Updated:** January 20, 2026  
**License:** Free to use and modify  

**Design Inspiration:** HIJINX Loading Screen  
**Theme:** Red Dead Redemption 2  

---

## Changelog

### Version 2.0.0 (January 20, 2026)
- Complete redesign with HIJINX-inspired styling
- Added torn-edge effects on all panels
- Implemented RDR2 quote rotation system
- Added floating particle effects (embers/dust)
- Implemented mouse tracking parallax effects
- Added automatic color cycling animations
- Changed to Red Dead Redemption themed colors
- Integrated custom logo support
- Added skull icon to progress bar
- Enabled cursor interaction
- Removed music player UI
- Updated to responsive design
- Added comprehensive documentation

### Version 1.0.0
- Initial release
- Basic loading screen functionality

---

## Additional Resources

**Font Awesome Icons:** https://fontawesome.com/icons  
**Color Picker:** https://htmlcolorcodes.com/  
**Image Compression:** https://tinypng.com/  
**Unsplash Images:** https://unsplash.com/  
**CSS Clip-Path Generator:** https://bennettfeely.com/clippy/  

---

**End of Documentation**
