// Weight presets
const W9 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const W8 = [200, 300, 400, 500, 600, 700, 800];
const W7 = [300, 400, 500, 600, 700];
const W6 = [400, 500, 600, 700, 800, 900];
const W5 = [400, 500, 600, 700, 800];
const W4 = [400, 500, 600, 700];
const W3 = [400, 600, 700];
const W2 = [400, 700];
const W1 = [400];

// Multi-weight families
const multiWeightFamilies = {
    'Montserrat': W9, 'Roboto': [100, 300, 400, 500, 700, 900],
    'Open Sans': [300, 400, 500, 600, 700, 800], 'Lato': [100, 300, 400, 700, 900],
    'Poppins': W9, 'Raleway': W9, 'Nunito': [200, 300, 400, 500, 600, 700, 800, 900],
    'Work Sans': W9, 'Rubik': [300, 400, 500, 600, 700, 800, 900],
    'Manrope': W8, 'Space Grotesk': W7, 'DM Sans': [100, 200, 300, 400, 500, 600, 700],
    'Plus Jakarta Sans': W8, 'Outfit': W9, 'Sora': [100, 200, 300, 400, 500, 600, 700, 800],
    'Inter': W9, 'Urbanist': W9, 'Figtree': [300, 400, 500, 600, 700, 800, 900],
    'Albert Sans': W9, 'Noto Sans': W9, 'Source Sans 3': [200, 300, 400, 500, 600, 700, 800, 900],
    'Libre Franklin': W9, 'IBM Plex Sans': [100, 200, 300, 400, 500, 600, 700],
    'Fira Sans': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Josefin Sans': [100, 200, 300, 400, 500, 600, 700],
    'Barlow': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Cabin': [400, 500, 600, 700], 'Karla': [200, 300, 400, 500, 600, 700, 800],
    'Mulish': [200, 300, 400, 500, 600, 700, 800, 900],
    'Oxygen': [300, 400, 700], 'Ubuntu': [300, 400, 500, 700],
    'Exo 2': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Quicksand': [300, 400, 500, 600, 700], 'Comfortaa': [300, 400, 500, 600, 700],
    'Lexend': W9, 'Overpass': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Red Hat Display': [300, 400, 500, 600, 700, 800, 900],
    'Asap': [100, 200, 300, 400, 500, 600, 700],
    'Cairo': [200, 300, 400, 500, 600, 700, 800, 900],
    'Chakra Petch': [300, 400, 500, 600, 700], 'Dosis': [200, 300, 400, 500, 600, 700, 800],
    'Jost': W9, 'Kanit': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Karma': [300, 400, 500, 600, 700], 'Maven Pro': [400, 500, 600, 700, 800, 900],
    'Nunito Sans': [200, 300, 400, 500, 600, 700, 800, 900],
    'Oswald': [200, 300, 400, 500, 600, 700], 'Rajdhani': [300, 400, 500, 600, 700],
    'Signika': [300, 400, 500, 600, 700], 'Signika Negative': [300, 400, 500, 600, 700],
    'Tourney': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Varela Round': W1, 'Varta': [300, 400, 500, 600, 700],
    'Merriweather': [300, 400, 700, 900], 'Lora': [400, 500, 600, 700],
    'Playfair Display': [400, 500, 600, 700, 800, 900],
    'Crimson Pro': [200, 300, 400, 500, 600, 700, 800, 900],
    'EB Garamond': [400, 500, 600, 700, 800], 'Bitter': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Cormorant Garamond': [300, 400, 500, 600, 700],
    'Spectral': [200, 300, 400, 500, 600, 700, 800],
    'Vollkorn': [400, 500, 600, 700, 800, 900],
    'Zilla Slab': [300, 400, 500, 600, 700],
    'Noto Serif': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Source Serif 4': [200, 300, 400, 500, 600, 700, 800, 900],
    'Alegreya': [400, 500, 700, 800, 900],
    'Bodoni Moda': [400, 500, 600, 700, 800, 900],
    'Fraunces': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Fira Code': [300, 400, 500, 600, 700],
    'Source Code Pro': [200, 300, 400, 500, 600, 700, 800, 900],
    'IBM Plex Mono': [100, 200, 300, 400, 500, 600, 700],
    'JetBrains Mono': [100, 200, 300, 400, 500, 600, 700, 800],
    'Space Mono': W2, 'Inconsolata': [200, 300, 400, 500, 600, 700, 800, 900],
    'Ubuntu Mono': W2, 'Courier Prime': W2,
    'Martian Mono': [100, 200, 300, 400, 500, 600, 700, 800],
    'Big Shoulders Display': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Orbitron': [400, 500, 600, 700, 800, 900],
    'Unbounded': [200, 300, 400, 500, 600, 700, 800, 900],
    'Dancing Script': [400, 500, 600, 700],
    'Caveat': [400, 500, 600, 700], 'Kalam': [300, 400, 700],
    'Amatic SC': [400, 700],
};

// Single-weight display fonts
const displayFonts = [
    'Abril Fatface','Architects Daughter','Atomic Age','Bad Script','BenchNine',
    'Bungee','Cabin Sketch','Cantata One','Capriola','Cardo','Chango','Chewy',
    'Cinzel','Codystar','Cuprum','Electrolize','Engagement','Fjalla One',
    'Fontdiner Swanky','Glegoo','Gugi','Habibi','Hanalei Fill','Homemade Apple',
    'Imprima','Inika','Irish Grover','Julee','Khand','Knewave','Kotta One',
    'Krona One','Lakki Reddy','Lilita One','Loved by the King','Macondo',
    'Marcellus','Marmelad','Michroma','Miltonian Tattoo','Modak','Monoton',
    'Monsieur La Doulaise','Mouse Memoirs','Mr Dafoe','Mrs Saint Delafield',
    'Nanum Myeongjo','Neuton','Niconne','Nixie One','Pangolin','Passion One',
    'Pattaya','Permanent Marker','Ramaraja','Reem Kufi','Rozha One','Russo One',
    'Saira Stencil One','Satisfy','Sawarabi Mincho','Secular One','Sen','Six Caps',
    'Sofia','Tapestry','Teko','Tenor Sans','Tillana','Tinos','Titan One','Trirong',
    'UnifrakturMaguntia','Unkempt','Vast Shadow','Water Brush','Wellfleet',
    'Yatra One','ZCOOL KuaiLe','Alfa Slab One','Anton','Bangers','Lobster',
    'Pacifico','Press Start 2P','Righteous','Staatliches','Fugaz One','Acme',
    'Bebas Neue','Black Ops One','Bree Serif','Cairo','Cambay','Comfortaa',
    'Cormorant Garamond','Courier Prime','Crimson Text','DM Serif Display',
    'Dela Gothic One','Domine','Dosis','EB Garamond','Economica','Exo 2',
    'Fredoka','Gelasio','Gidole','Gorditas','Great Vibes','Gruppo',
    'Indie Flower','Kanit','Kaushan Script','Kelly Slab','Kenia','Lato',
    'Libre Baskerville','Lora','Manrope','Markazi Text','Maven Pro',
    'MedievalSharp','Merriweather','Mina','Montserrat','Mukta','Nunito',
    'Old Standard TT','Open Sans','Orbitron','Oswald','Outfit','Overpass',
    'Playfair Display','Playfair Display SC','Poppins','Prata','Pridi',
    'Protest Revolution','PT Serif','Quicksand','Rajdhani','Rakkas','Raleway',
    'Red Hat Display','Redressed','Rubik','Saira','Shadows Into Light',
    'Slabo 27px','Source Code Pro','Source Serif Pro','Space Grotesk','Space Mono',
    'Spectral','Stick No Bills','Suez One','Taviraj','Ubuntu Mono','Unbounded',
    'Varela Round','Vollkorn','Work Sans','Zilla Slab'
];

// Generate all font variations
const allVariations = [];
for (const [family, weights] of Object.entries(multiWeightFamilies)) {
    for (const weight of weights) {
        allVariations.push({ family, weight });
    }
}
for (const family of displayFonts) {
    allVariations.push({ family, weight: 400 });
}

// Shuffle
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const shuffled = shuffle(allVariations);

// Create elements
const container = document.getElementById('s-container');
const loading = document.getElementById('loading');
const game = document.getElementById('game');
const elements = [];

shuffled.forEach((font, i) => {
    const div = document.createElement('div');
    div.className = 's-letter';
    div.textContent = 'S';
    div.style.fontFamily = `'${font.family}', serif`;
    div.style.fontWeight = font.weight;
    div.style.opacity = i === 0 ? '1' : '0';
    container.appendChild(div);
    elements.push(div);
});

// Progressive loading: load fonts in batches
const batchSize = 20;
const batches = [];
for (let i = 0; i < shuffled.length; i += batchSize) {
    batches.push(shuffled.slice(i, i + batchSize));
}

let loadedBatches = 0;

function loadBatch(batch) {
    return new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        const families = batch.map(f => `family=${encodeURIComponent(f.family)}:wght@${f.weight}`).join('&');
        link.href = `https://fonts.googleapis.com/css2?${families}&text=S&display=swap`;
        link.onload = resolve;
        link.onerror = resolve;
        document.head.appendChild(link);
    });
}

// Load first 3 batches (60 variations) then start the game
Promise.all(batches.slice(0, 3).map(batch => loadBatch(batch))).then(() => {
    document.fonts.ready.then(() => {
        loading.style.display = 'none';
        game.style.display = 'block';
        ready = true;
    });
});

// Continue loading remaining batches in background
function loadRemaining() {
    if (loadedBatches >= batches.length) return;
    const batch = batches[loadedBatches];
    if (!batch) return;
    loadBatch(batch).then(() => {
        loadedBatches++;
        setTimeout(loadRemaining, 100);
    });
}

// Start loading remaining after game starts
loadedBatches = 3;
setTimeout(loadRemaining, 500);

let currentIndex = 0;
let ready = false;
let tapLocked = false;
let lastTouchTime = 0;

function handleTap() {
    if (!ready || tapLocked) return;
    tapLocked = true;
    
    // Hide current, show next
    elements[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % shuffled.length;
    
    // If we've looped back to start, reshuffle
    if (currentIndex === 0) {
        const newOrder = shuffle(shuffled);
        newOrder.forEach((font, i) => {
            elements[i].style.fontFamily = `'${font.family}', serif`;
            elements[i].style.fontWeight = font.weight;
        });
        shuffled.length = 0;
        newOrder.forEach(f => shuffled.push(f));
    }
    
    elements[currentIndex].style.opacity = '1';
    
    setTimeout(() => { tapLocked = false; }, 100);
}

document.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    lastTouchTime = Date.now();
    handleTap();
}, { passive: false, capture: true });

document.addEventListener('click', () => {
    if (Date.now() - lastTouchTime < 500) return;
    handleTap();
});
