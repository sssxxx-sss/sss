const allFonts = [
    'Abril Fatface','Acme','Alfa Slab One','Amatic SC','Anton','Architects Daughter',
    'Arima','Asap','Atomic Age','Audiowide','B612 Mono','Bad Script','Bangers',
    'Bebas Neue','BenchNine','Big Shoulders Display','Bitter','Black Ops One',
    'Bodoni Moda','Bree Serif','Bungee','Cabin Sketch','Cairo','Cambay','Cantata One',
    'Capriola','Cardo','Caveat','Chakra Petch','Chango','Chewy','Cinzel','Codystar',
    'Comfortaa','Cormorant Garamond','Courier Prime','Crimson Pro','Crimson Text',
    'Cuprum','DM Serif Display','Dancing Script','Dela Gothic One','Domine','Dosis',
    'EB Garamond','Economica','Electrolize','Engagement','Exo 2','Familjen Grotesk',
    'Fira Code','Fjalla One','Fontdiner Swanky','Fraunces','Fredoka','Fugaz One',
    'Gelasio','Gidole','Glegoo','Gorditas','Great Vibes','Gruppo','Gugi','Habibi',
    'Hanalei Fill','Homemade Apple','IBM Plex Mono','IBM Plex Serif','Imprima',
    'Inconsolata','Indie Flower','Inika','Irish Grover','Jost','Julee','Kanit',
    'Karma','Kaushan Script','Kelly Slab','Kenia','Khand','Knewave','Kotta One',
    'Krona One','Lakki Reddy','Lato','Libre Baskerville','Libre Caslon Display',
    'Lilita One','Lobster','Lora','Loved by the King','Macondo','Manrope','Marcellus',
    'Markazi Text','Marmelad','Martian Mono','Maven Pro','MedievalSharp','Merriweather',
    'Michroma','Miltonian Tattoo','Mina','Modak','Monoton','Monsieur La Doulaise',
    'Montserrat','Mouse Memoirs','Mr Dafoe','Mrs Saint Delafield','Mukta','Nanum Myeongjo',
    'Neuton','Niconne','Nixie One','Noto Serif','Nunito','Old Standard TT','Open Sans',
    'Orbitron','Oswald','Outfit','Overpass','Pacifico','Pangolin','Passion One',
    'Patrick Hand','Pattaya','Permanent Marker','Playfair Display','Playfair Display SC',
    'Plus Jakarta Sans','Poppins','Prata','Press Start 2P','Pridi','Protest Revolution',
    'PT Serif','Quicksand','Rajdhani','Rakkas','Raleway','Ramaraja','Red Hat Display',
    'Redressed','Reem Kufi','Righteous','Rozha One','Rubik','Russo One','Saira',
    'Saira Stencil One','Satisfy','Sawarabi Mincho','Secular One','Sen','Shadows Into Light',
    'Signika Negative','Six Caps','Slabo 27px','Sofia','Source Code Pro','Source Serif Pro',
    'Space Grotesk','Space Mono','Spectral','Staatliches','Stick No Bills','Suez One',
    'Tapestry','Taviraj','Teko','Tenor Sans','Tillana','Tinos','Titan One','Trirong',
    'Ubuntu Mono','Unbounded','UnifrakturMaguntia','Unkempt','Varela Round','Vast Shadow',
    'Vollkorn','Water Brush','Wellfleet','Work Sans','Yatra One','ZCOOL KuaiLe',
    'Zilla Slab'
];

let currentIndex = 0;
let loadedFonts = new Set();
let tapCount = 0;
const sElement = document.getElementById('s');
const counterElement = document.getElementById('counter');

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const fonts = shuffle(allFonts);

function loadFont(fontName) {
    if (loadedFonts.has(fontName)) return Promise.resolve();
    
    return new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}&text=S&display=swap`;
        link.onload = () => {
            loadedFonts.add(fontName);
            resolve();
        };
        link.onerror = () => {
            resolve();
        };
        document.head.appendChild(link);
    });
}

loadFont(fonts[0]).then(() => {
    sElement.style.fontFamily = `'${fonts[0]}', serif`;
});

for (let i = 1; i < 5; i++) {
    loadFont(fonts[i]);
}

let lastTapTime = 0;
let lastTouchTime = 0;

function handleTap() {
    const now = Date.now();
    if (now - lastTapTime < 300) return;
    lastTapTime = now;
    
    tapCount++;
    counterElement.textContent = tapCount;
    
    currentIndex = (currentIndex + 1) % fonts.length;
    const fontName = fonts[currentIndex];
    
    loadFont(fontName).then(() => {
        sElement.style.fontFamily = `'${fontName}', serif`;
    });
    
    for (let i = 1; i <= 3; i++) {
        loadFont(fonts[(currentIndex + i) % fonts.length]);
    }
}

document.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    lastTouchTime = Date.now();
    handleTap();
}, { passive: false, capture: true });

document.addEventListener('click', (e) => {
    if (Date.now() - lastTouchTime < 500) return;
    handleTap();
});
