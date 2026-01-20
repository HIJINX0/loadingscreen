// HIJINX Loading Screen - HIJINX Style JavaScript

const CONFIG = {
    backgroundMedia: {
        enabled: true,
        type: 'slideshow',
        slideshow: {
            images: [
                'https://wallpapers.com/images/hd/red-dead-redemption-2-pc-red-dead-redemption-2-ba0obids97iy3bbo.jpg',
                'https://www.itl.cat/pngfile/big/35-353372_red-dead-redemption-2-wallpapers-red-dead-redemption.png',
                'https://wallpaper.forfun.com/fetch/7a/7ab9974fa4bb9bb1dfb34c7f6cd282a4.jpeg'
            ],
            interval: 5000
        }
    },
    hints: [
        'Press F1 to open the help menu once you\'ve loaded in.',
        'Use /help for a list of commands.',
        'Join our Discord for whitelist access!',
        'Respect all players and staff members.',
        'Report bugs to staff immediately.',
        'Have fun and enjoy your time in the Old West!'
    ],
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
};

let currentProgress = 0;
let backgroundIndex = 0;
let hintIndex = 0;
let quoteIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    console.log('[HIJINX Loading Screen] Initializing...');
    initializeNavigation();
    initializeBackground();
    startHintRotation();
    startQuoteRotation();
    initializeMouseTracking();
    initializeParticles();
});

// Navigation Tab Switching
function initializeNavigation() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const content = tab.getAttribute('data-content');
            document.querySelectorAll('.content-panel').forEach(panel => panel.classList.remove('active'));
            document.getElementById(content + '-content').classList.add('active');
        });
    });
}

// Background Slideshow
function initializeBackground() {
    if (CONFIG.backgroundMedia.enabled && CONFIG.backgroundMedia.type === 'slideshow') {
        const images = CONFIG.backgroundMedia.slideshow.images;
        setBackgroundImage(images[0]);
        
        setInterval(() => {
            backgroundIndex = (backgroundIndex + 1) % images.length;
            setBackgroundImage(images[backgroundIndex]);
        }, CONFIG.backgroundMedia.slideshow.interval);
    }
}

function setBackgroundImage(url) {
    const container = document.getElementById('background-media');
    const img = document.createElement('img');
    img.src = url;
    img.style.opacity = '0';
    container.innerHTML = '';
    container.appendChild(img);
    
    setTimeout(() => {
        img.style.transition = 'opacity 1s';
        img.style.opacity = '1';
    }, 50);
}

// Hint Rotation
function startHintRotation() {
    setInterval(() => {
        hintIndex = (hintIndex + 1) % CONFIG.hints.length;
        document.getElementById('hint-text').textContent = CONFIG.hints[hintIndex];
    }, 8000);
}

// RDR2 Quote Rotation
function startQuoteRotation() {
    const quoteElement = document.getElementById('rdr2-quote');
    if (quoteElement) {
        setInterval(() => {
            quoteIndex = (quoteIndex + 1) % CONFIG.rdr2Quotes.length;
            quoteElement.style.opacity = '0';
            setTimeout(() => {
                quoteElement.textContent = CONFIG.rdr2Quotes[quoteIndex];
                quoteElement.style.opacity = '1';
            }, 500);
        }, 10000);
    }
}

// Mouse Tracking
function initializeMouseTracking() {
    const trackElements = document.querySelectorAll('.main-title, .logo-section, .hint-section');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        trackElements.forEach((element, index) => {
            const speed = (index + 1) * 5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Particle Effects
function initializeParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const startX = Math.random() * 100;
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        left: ${startX}%;
        width: ${size}px;
        height: ${size}px;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
    `;
    
    container.appendChild(particle);
    
    particle.addEventListener('animationiteration', () => {
        particle.style.left = Math.random() * 100 + '%';
    });
}

// Progress Bar Updates
function updateProgress(progress) {
    currentProgress = progress;
    const fill = document.getElementById('progress-bar-fill');
    const percentage = document.getElementById('loading-percentage');
    
    if (fill && percentage) {
        fill.style.width = progress + '%';
        percentage.textContent = progress + '%';
    }
}

// FiveM Loading Events
window.addEventListener('message', (event) => {
    const data = event.data;
    
    switch (data.eventName) {
        case 'loadProgress':
            handleLoadProgress(data);
            break;
        case 'startInitFunction':
        case 'startInitFunctionOrder':
        case 'startDataFileEntries':
        case 'performMapLoadFunction':
        case 'endInitFunction':
            // Handle loading status updates
            break;
    }
});

function handleLoadProgress(data) {
    let progress = 0;
    
    if (data.loadFraction !== undefined) {
        progress = Math.round(data.loadFraction * 100);
    } else if (data.count !== undefined && data.total !== undefined) {
        progress = Math.round((data.count / data.total) * 100);
    }
    
    progress = Math.max(0, Math.min(100, progress));
    updateProgress(progress);
    
    // Shutdown loading screen when complete
    if (progress >= 100) {
        setTimeout(() => {
            window.invokeNative('shutdown');
        }, 1500);
    }
}

console.log('%c HIJINX Loading Screen ', 'background: #E74C3C; color: #fff; font-size: 16px; font-weight: bold; padding: 5px;');
console.log('%c HIJINX Loading Screen - Red Dead Redemption 2 ', 'color: #E74C3C; font-size: 12px;');
