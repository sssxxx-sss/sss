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
    // Sans-serif
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
    'Cabin': [400, 500, 600, 700], 'Kantumruy': [300, 400, 500, 600, 700],
    'Karla': [200, 300, 400, 500, 600, 700, 800], 'Mulish': [200, 300, 400, 500, 600, 700, 800, 900],
    'Oxygen': [300, 400, 700], 'Ubuntu': [300, 400, 500, 700],
    'Exo 2': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Quicksand': [300, 400, 500, 600, 700], 'Comfortaa': [300, 400, 500, 600, 700],
    'Lexend': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Overpass': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Red Hat Display': [300, 400, 500, 600, 700, 800, 900],
    'Red Hat Text': [300, 400, 500, 600, 700], 'Asap': [100, 200, 300, 400, 500, 600, 700],
    'B612': [400, 700], 'Cairo': [200, 300, 400, 500, 600, 700, 800, 900],
    'Chakra Petch': [300, 400, 500, 600, 700], 'Dosis': [200, 300, 400, 500, 600, 700, 800],
    'Economica': [400, 700], 'Electrolize': W1, 'Familjen Grotesk': [400, 500, 600, 700],
    'Gidole': W1, 'Gordita': [400, 500, 600, 700], 'Jost': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Kanit': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Karma': [300, 400, 500, 600, 700], 'Maven Pro': [400, 500, 600, 700, 800, 900],
    'Nunito Sans': [200, 300, 400, 500, 600, 700, 800, 900],
    'Oswald': [200, 300, 400, 500, 600, 700], 'Rajdhani': [300, 400, 500, 600, 700],
    'Signika': [300, 400, 500, 600, 700], 'Signika Negative': [300, 400, 500, 600, 700],
    'Sora': [100, 200, 300, 400, 500, 600, 700, 800],
    'Spartan': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Tenor Sans': W1, 'Titillium Web': [200, 300, 400, 600, 700, 900],
    'Tourney': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Urbanist': W9, 'Varela Round': W1, 'Varta': [300, 400, 500, 600, 700],
    'Vujahday': [400, 500, 600, 700], 'Wix Madefor Display': [400, 500, 600, 700, 800],
    'Wix Madefor Text': [400, 500, 600, 700, 800], 'Yantramanav': [100, 300, 400, 500, 700, 900],
    // Serif
    'Merriweather': [300, 400, 700, 900], 'Lora': [400, 500, 600, 700],
    'Playfair Display': [400, 500, 600, 700, 800, 900],
    'Crimson Pro': [200, 300, 400, 500, 600, 700, 800, 900],
    'EB Garamond': [400, 500, 600, 700, 800], 'Bitter': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Cormorant Garamond': [300, 400, 500, 600, 700],
    'Spectral': [200, 300, 400, 500, 600, 700, 800],
    'Vollkorn': [400, 500, 600, 700, 800, 900],
    'Zilla Slab': [300, 400, 500, 600, 700],
    'Libre Baskerville': W2, 'PT Serif': W2,
    'Noto Serif': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Source Serif 4': [200, 300, 400, 500, 600, 700, 800, 900],
    'DM Serif Display': W1, 'Alegreya': [400, 500, 700, 800, 900],
    'Bodoni Moda': [400, 500, 600, 700, 800, 900],
    'Source Serif Pro': [200, 300, 400, 600, 700, 900],
    'Slabo 27px': W1, 'Crimson Text': [400, 600, 700],
    'Libre Caslon Display': W1, 'Prata': W1, 'Suez One': W1,
    'Taviraj': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Cormorant': [300, 400, 500, 600, 700], 'Cormorant SC': [300, 400, 500, 600, 700],
    'Cormorant Infant': [300, 400, 500, 600, 700],
    'Fraunces': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Gelasio': [400, 500, 600, 700], 'Lora': [400, 500, 600, 700],
    // Monospace
    'Fira Code': [300, 400, 500, 600, 700],
    'Source Code Pro': [200, 300, 400, 500, 600, 700, 800, 900],
    'IBM Plex Mono': [100, 200, 300, 400, 500, 600, 700],
    'JetBrains Mono': [100, 200, 300, 400, 500, 600, 700, 800],
    'Space Mono': W2, 'Inconsolata': [200, 300, 400, 500, 600, 700, 800, 900],
    'Ubuntu Mono': W2, 'Courier Prime': W2, 'VT323': W1,
    'B612 Mono': [400, 700], 'Martian Mono': [100, 200, 300, 400, 500, 600, 700, 800],
    // More display/fun
    'Big Shoulders Display': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    'Orbitron': [400, 500, 600, 700, 800, 900],
    'Unbounded': [200, 300, 400, 500, 600, 700, 800, 900],
    'Stick No Bills': [200, 300, 400, 500, 600, 700, 800],
    'Dela Gothic One': W1, 'Fredoka': [300, 400, 500, 600, 700],
    'Arima': [100, 200, 300, 400, 500, 600, 700],
    'Audiowide': W1, 'Bungee': W1, 'Bebas Neue': W1,
    'Press Start 2P': W1, 'Monoton': W1, 'Righteous': W1,
    'Staatliches': W1, 'Titan One': W1, 'Fugaz One': W1,
    'Saira Stencil One': W1, 'Acme': W1, 'Alfa Slab One': W1,
    'Anton': W1, 'Bangers': W1, 'Lobster': W1,
    'Pacifico': W1, 'Permanent Marker': W1, 'Great Vibes': W1,
    'Dancing Script': [400, 500, 600, 700], 'Kaushan Script': W1,
    'Satisfy': W1, 'Shadows Into Light': W1, 'Amatic SC': [400, 700],
    'Caveat': [400, 500, 600, 700], 'Kalam': [300, 400, 700],
    'Indie Flower': W1, 'Architects Daughter': W1, 'Patrick Hand': W1,
};

// Single-weight display fonts
const displayFonts = [
    'Abril Fatface','Architects Daughter','Atomic Age','Bad Script','BenchNine',
    'Bodoni Moda','Bree Serif','Cabin Sketch','Cantata One','Capriola','Cardo',
    'Chango','Chewy','Cinzel','Codystar','Cuprum','Electrolize','Engagement',
    'Fjalla One','Fontdiner Swanky','Glegoo','Gugi','Habibi','Hanalei Fill',
    'Homemade Apple','Imprima','Inika','Irish Grover','Julee','Khand','Knewave',
    'Kotta One','Krona One','Lakki Reddy','Lilita One','Loved by the King',
    'Macondo','Marcellus','Marmelad','Michroma','Miltonian Tattoo','Mina','Modak',
    'Monsieur La Doulaise','Mouse Memoirs','Mr Dafoe','Mrs Saint Delafield',
    'Nanum Myeongjo','Neuton','Niconne','Nixie One','Pangolin','Passion One',
    'Pattaya','Ramaraja','Reem Kufi','Rozha One','Russo One','Sawarabi Mincho',
    'Secular One','Sen','Six Caps','Sofia','Tapestry','Teko','Tenor Sans',
    'Tillana','Tinos','Trirong','UnifrakturMaguntia','Unkempt','Vast Shadow',
    'Water Brush','Wellfleet','Yatra One','ZCOOL KuaiLe','Zilla Slab',
    'Afacad','Afacad Clarendon','Afacad Flare','Alata','Alexandria','Almarai',
    'Andada Pro','Andika','Anek Bangla','Anek Devanagari','Anek Gujarati',
    'Anek Gurmukhi','Anek Kannada','Anek Latin','Anek Malayalam','Anek Odia',
    'Anek Tamil','Anek Telugu','Anonymous Pro','Aref Ruqaa','Arsenal','Arvo',
    'Asset','Aubrey','Balthazar','Barrio','Basic','Bellota','Bellota Text',
    'Benne','Boogaloo','Bowlby One SC','Brawler','Bungee Shade','Cagliostro',
    'Calligraffitti','Cambo','Cantarell','Carattere','Carrois Gothic','Catamaran',
    'Caveat Brush','Cedarville Cursive','Chathura','Chela One','Chelsea Market',
    'Chenla','Chilanka','Chivo','Coupland','Creepster','Croissant One',
    'Cutive Mono','Darker Grotesque','David Libre','Dekko','Denk One','Devonshire',
    'Dhurjati','Diplomata','Dokdo','DotGothic16','Duru Sans','Dynalight',
    'East Sea Dokdo','Eater','El Messiri','El Swash','Encode Sans','Ephesis',
    'Ermilov','Espresso','Euphoria Script','Ewert','Fahkwang','Farro','Fauna One',
    'Faustina','Federant','Federo','Fenix','Finger Paint','Flamenco','Flavors',
    'Fondamento','Forum','Frank Ruhl Libre','Francois One','Fresca','Frijole',
    'Fruktur','GFS Didot','GFS Neohellenic','Galindo','Gayathri',
    'Gentium Book Plus','Gentium Plus','Geo','Geostar','Geostar Fill',
    'Glass Antiqua','Gochi Hand','Gothic A1','Gotu','Graduate','Grand Hotel',
    'Gravitas One','Griffy','Gudea','Gulzar','Gurajada','Hahmlet','Halant',
    'Hammersmith One','Hanuman','Harmattan','Headland One','Hedvig Letters',
    'Heebo','Hepta Slab','Herr Von Muellerhoff','Hi Melody','Hind','Hind Madurai',
    'Hind Siliguri','Hind Vadodara','Holtwood One SC','Hubballi','Hurricane',
    'Ibarra Real Nova','Imbue','Inder','Ingrid Darling','Inknut Antiqua',
    'Iosevka','Istok Web','Italiana','Italianno','Itim','Jacques Francois',
    'Jacques Francois Shadow','Jaldi','Jomhuria','Jomolhari','Josefin Slab',
    'Jura','Just Another Hand','K2D','Kadwa','Kalnia','Kameron','Kantumruy',
    'Karumbi','Katibeh','Kavivanar','Kavoon','Keania One','Klee One','Kodchasan',
    'Kolker Brush','Konkhmer Sleokchher','Kosugi','Kosugi Maru','Kowalk','Kranky',
    'Kreon','Kristi','Krub','Kulim Park','Kumar One','Kurale','La Belle Aurore',
    'Lacquer','Laila','Lalezar','Lancelot','Langar','Lateef','League Script',
    'Ledger','Leckerli One','Lemon','Lemonada','Licorice','Ligurini','Lily Script One',
    'Limelight','Linden Hill','Liu Jian Mao Cao','Livvic','Lobster Two',
    'Londrina Outline','Londrina Shadow','Londrina Sketch','Londrina Solid',
    'Long Cang','Love Light','Lovers Quarrel','Luckiest Guy','Lusitana','Lustria',
    'Ma Shan Zheng','Magra','Maid Orange','Maitree','Major Mono Display','Mako',
    'Mali','Mallanna','Mandali','Manjari','Mansalva','Manuale','Marck Script',
    'Margarine','Marko One','Martel','Mate','Mate SC','McLaren','Meddon',
    'Medula One','Meera Inimai','Megrim','Meie Script','Merienda',
    'Merriweather Sans','Metal','Metal Mania','Metamorphous','Metrophobic',
    'Milonga','Mingzat','Miniver','Miriam Libre','Mirza','Miss Fajardose',
    'Mitr','Mochiy Pop One','Mogra','Molengo','Molle','Mona Sans',
    'Monomaniac One','Montagu Slab','Montserrat Alternates','Montserrat Subrayada',
    'Moo Lah Lah','Moon Dance','Moul','Moulpali','Mountains of Christmas',
    'Mr Bedfort','Mr De Haviland','Mrs Sheppards','Mukta Malar','Mukta Vaani',
    'Murecho','MuseModerna','My Soul','Mynerve','Nabla','Namdhinggo',
    'Nanum Brush Script','Nanum Gothic','Nanum Gothic Coding','Neonderthaw',
    'Nerko One','New Rocker','Newsreader','Nico Moji','Nikukyu','Niramit',
    'Nova Cut','Nova Flat','Nova Mono','Nova Oval','Nova Round','Nova Script',
    'Nova Slim','Nova Square','Numans','Odibar Sans','Offside','Oi','Oldenburg',
    'Ole','Ole Script','Oooh Baby','Oregano','Orienta','Original Surfer',
    'Over the Rainbow','Overlock','Ovo','Oxanium','Padauk','Palanquin',
    'Palanquin Dark','Paprika','Parisienne','Passero One','Pathway Gothic One',
    'Patrick Hand SC','Patua One','Pavanam','Paytone One','Peddana','Peralta',
    'Petemoss','Petit Formal Script','Petrona','Phetsarath','Philosopher',
    'Piazzolla','Piedra','Pinyon Script','Pirata One','Plaster','Play','Playball',
    'Podkova','Poiret One','Poller One','Poly','Pompiere','Pontano Sans',
    'Port Lligat Sans','Port Lligat Slab','Potta One','Pragati Narrow','Praise',
    'Preahvihear','Princess Sofia','Prociono','Prompt','Prosto One',
    'Protest Guerrilla','Protest Revolution','Protest Strike','Public Sans',
    'Puritan','Purple Purse','Qahiri','Quando','Quantico','Quattrocento',
    'Quattrocento Sans','Questrial','Qwigley','Racing Sans One','Radley',
    'Rakkas','Ranchers','Rancho','Rasa','Rationale','Ravi Prakash','Reem Kufi Fun',
    'Reem Kufi Ink','Revalia','Rhodium Libre','Ribeye','Ribeye Marrow','Risque',
    'Road Rage','Roberto','Rock 3D','Rock Salt','RocknRoll One','Rokkitt',
    'Romanesco','Ropa Sans','Rosario','Rosarivo','Rouge Script','Rowdies',
    'Rubik Beastly','Rubik Bubbles','Rubik Broken Fax','Rubik Burned','Rubik Dirt',
    'Rubik Distressed','Rubik Glitch','Rubik Iso','Rubik Marker Hatch','Rubik Maze',
    'Rubik Microbe','Rubik Mono One','Rubik Moonrocks','Rubik Puddles',
    'Rubik Spray Paint','Rubik Storm','Rubik Vinyl','Rubik Wet Paint','Ruda',
    'Rufina','Ruge Boogie','Ruluko','Rum Raisin','Ruslan Display','Ruthie','Rye',
    'Salsa','Sanchez','Sancreek','Sansita','Sansita Swashed','Sarabun','Sarala',
    'Sarina','Sarpanch','Sawarabi Gothic','Scada','Scheherazade New','Schoolbell',
    'Scope One','Seaweed Script','Send Flowers','Sevillana','Seymour One',
    'Shadows Into Light Two','Shalimar','Shanti','Share','Share Tech','Share Tech Mono',
    'Shippori Antique','Shippori Mincho','Shojumaru','Short Stack','Shrikhand',
    'Siemreap','Sigmar One','Simonetta','Single Day','Sintony','Sirin Stencil',
    'Skranji','Slabo 13px','Slackey','Smokum','Smythe','Sniglet','Snippet',
    'Snowburst One','Sofadi One','Solway','Song Myung','Sonsie One',
    'Sorts Mill Goudy','Spicy Rice','Spinnaker','Spirax','Spline Sans',
    'Squada One','Sree Krushnadevaraya','Sriracha','Srisakdi','Stalemate',
    'Stardos Stencil','Stint Ultra Condensed','Stint Ultra Expanded','Stoke',
    'Strait','Style Script','Sue Ellen Francisco','Sulphur Point','Sumana',
    'Sunflower','Sunshiney','Supermercado','Sura','Suranna','Suravaram',
    'Suwannaphum','Swanky and Moo Moo','Syncopate','Syne','Tac One','Tajawal',
    'Tangerine','Taprom','Tauri','Telex','Tenali Ramakrishna','Texturina',
    'Texturina Alt','Thasadith','The Nautigal','Tienne','Tilt Neon','Tilt Prism',
    'Tilt Warp','Timmana','Trispace','Trocchi','Trochut','Truculenta','Trykker',
    'Tulpen One','Turret Road','Twinkle Star','Uchen','Ultra','Uncial Antiqua',
    'Underdog','Unica One','UnifrakturCook','Unlock','Unna','Updock',
    'Vampiro One','Varela','Varta','Vecna','Vesper Libre','Viaoda Libre','Vibes',
    'Vibur','Vidaloka','Viga','Vina Sans','Voces','Vollkorn SC','Voltaire',
    'Waiting for the Sunrise','Wallpoet','Walter Turncoat','Warnes','Wendy One',
    'Whisper','WindSong','Wire One','Work Sans','Xanh Mono','Yalta',
    'Yanone Kaffeesatz','Yellowtail','Yeseva One','Yesteryear','Yomogi','Young Serif',
    'Yrsa','Yuji Boku','Yuji Hentaigana Akari','Yuji Mai','Yuji Syuku',
    'ZCOOL QingKe HuangYou','ZCOOL XiaoWei','Zen Antique','Zen Antique Soft',
    'Zen Dots','Zen Kaku Gothic Antique','Zen Kaku Gothic New','Zen Kurenaido',
    'Zen Loop','Zen Maru Gothic','Zen Old Mincho','Zen Tokyo','Zhi Mang Xing',
    'Zilla Slab Highlight'
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

// Create lookup map
const variationMap = new Map();
shuffled.forEach((v, i) => {
    variationMap.set(`${v.family}:${v.weight}`, i);
});

// Create elements
const container = document.getElementById('s-container');
const elements = [];
shuffled.forEach((font, i) => {
    const div = document.createElement('div');
    div.className = 's-letter';
    div.textContent = 'S';
    div.style.fontFamily = `'\${font.family}', serif`;
    div.style.fontWeight = font.weight;
    container.appendChild(div);
    elements.push({ element: div, font, ready: false });
});

// Track ready variations
const ready
