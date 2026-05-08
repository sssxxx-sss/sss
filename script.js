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
    'Zilla Slab','Afacad','Afacad Clarendon','Afacad Flare','Alata','Alegreya',
    'Alegreya SC','Alexandria','Almarai','Andada Pro','Andika','Anek Bangla',
    'Anek Devanagari','Anek Gujarati','Anek Gurmukhi','Anek Kannada','Anek Latin',
    'Anek Malayalam','Anek Odia','Anek Tamil','Anek Telugu','Anonymous Pro','Aref Ruqaa',
    'Arsenal','Arvo','Asap Condensed','Asset','Aubrey','B612','Balthazar','Barlow',
    'Barlow Condensed','Barrio','Basic','Bellota','Bellota Text','Benne','Bitter',
    'Boogaloo','Bowlby One SC','Brawler','Bungee Shade','Cabin','Cagliostro','Calligraffitti',
    'Cambo','Cantarell','Carattere','Carrois Gothic','Catamaran','Caveat Brush',
    'Cedarville Cursive','Chathura','Chau Philo','Chela One','Chelsea Market',
    'Chenla','Chilanka','Chivo','Cormorant','Cormorant Infant','Cormorant SC',
    'Cormorant Unicase','Coupland','Creepster','Croissant One','Cutive Mono','Darker Grotesque',
    'David Libre','Dekko','Denk One','Devonshire','Dhurjati','Diplomata','Dokdo',
    'DotGothic16','Duru Sans','Dynalight','East Sea Dokdo','Eater','El Messiri',
    'El Swash','Encode Sans','Ephesis','Ermilov','Espresso','Euphoria Script',
    'Ewert','Exo','Fahkwang','Farro','Fauna One','Faustina','Federant','Federo',
    'Fenix','Finger Paint','Fira Sans','Flamenco','Flavors','Fondamento','Forum',
    'Frank Ruhl Libre','Francois One','Franklin Gothic','Fresca','Frijole','Fruktur',
    'GFS Didot','GFS Neohellenic','Galindo','Gayathri','Gentium Book Plus','Gentium Plus',
    'Geo','Geostar','Geostar Fill','Glass Antiqua','Gochi Hand','Gordita','Gothic A1',
    'Gotu','Graduate','Grand Hotel','Gravitas One','Griffy','Gruppo','Gudea','Gulzar',
    'Gurajada','Hahmlet','Halant','Hammersmith One','Hanuman','Harmattan','Headland One',
    'Hedvig Letters','Heebo','Hepta Slab','Herr Von Muellerhoff','Hi Melody','Hind',
    'Hind Madurai','Hind Siliguri','Hind Vadodara','Holtwood One SC','Homemade Apple',
    'Hubballi','Hujih','Huninn','Hurricane','IBM Plex Sans','IBM Plex Sans Condensed',
    'Iceberg','Iceland','Ibarra Real Nova','Imbue','Inder','Ingrid Darling','Inknut Antiqua',
    'Inter','Iosevka','Istok Web','Italiana','Italianno','Itim','Jacques Francois',
    'Jacques Francois Shadow','Jaldi','JetBrains Mono','Jomhuria','Jomolhari','Josefin Sans',
    'Josefin Slab','Jura','Just Another Hand','K2D','Kadwa','Kalnia','Kameron',
    'Kantumruy','Karla','Karumbi','KathVil','Katibeh','Kavivanar','Kavoon','Kdam Thmor',
    'Keania One','Klee One','Kodchasan','Kolker Brush','Konkhmer Sleokchher','Kosugi',
    'Kosugi Maru','Kotta One','Kowalk','Kranky','Kreon','Kristi','Krub','Kulim Park',
    'Kumar One','Kurale','La Belle Aurore','Lacquer','Laila','Lakki Reddy','Lalezar',
    'Lancelot','Langar','Lateef','Lato','League Script','Ledger','Leckerli One',
    'Lemon','Lemonada','Lexend','Lexend Deca','Lexend Exa','Lexend Giga','Lexend Mega',
    'Lexend Peta','Lexend Tera','Lexend Zetta','Libre Barcode EAN13 Text','Libre Barcode Text',
    'Libre Franklin','Licorice','Ligurini','Lilita One','Lily Script One','Limelight',
    'Linden Hill','Liu Jian Mao Cao','Livvic','Lobster Two','Londrina Outline',
    'Londrina Shadow','Londrina Sketch','Londrina Solid','Long Cang','Lora','Love Light',
    'Loved by the King','Lovers Quarrel','Luckiest Guy','Lusitana','Lustria','M PLUS 1',
    'M PLUS 1 Code','M PLUS 2','M PLUS Code Latin','Ma Shan Zheng','Macondo',
    'Magra','Maid Orange','Maitree','Major Mono Display','Mako','Mali','Mallanna',
    'Mandali','Manjari','Mansalva','Manuale','Marcellus','Marck Script','Margarine',
    'Markazi Text','Marko One','Marmelad','Martel','Martian Mono','Mate','Mate SC',
    'Maven Pro','McLaren','Meddon','MedievalSharp','Medula One','Meera Inimai',
    'Megrim','Meie Script','Merienda','Merriweather','Merriweather Sans','Metal',
    'Metal Mania','Metamorphous','Metrophobic','Michroma','Milonga','Miltonian',
    'Miltonian Tattoo','Mina','Mingzat','Miniver','Miriam Libre','Mirza','Miss Fajardose',
    'Mitr','Mochiy Pop One','Modak','Mogra','Molengo','Molle','Mona Sans',
    'Monomaniac One','Monoton','Monsieur La Doulaise','Montagu Slab','Montserrat',
    'Montserrat Alternates','Montserrat Subrayada','Moo Lah Lah','Moon Dance',
    'Moul','Moulpali','Mountains of Christmas','Mouse Memoirs','Mr Bedfort',
    'Mr Dafoe','Mr De Haviland','Mrs Saint Delafield','Mrs Sheppards','Mukta',
    'Mukta Malar','Mukta Vaani','Mulish','Murecho','MuseModerna','Museo Sans',
    'Museo Slab','My Soul','Mynerve','NTR','Nabla','Namdhinggo','Nanum Brush Script',
    'Nanum Gothic','Nanum Gothic Coding','Nanum Myeongjo','Neonderthaw','Nerko One',
    'Neuton','New Rocker','Newsreader','Nico Moji','Niconne','Nikukyu','Niramit',
    'Nixie One','Noto Sans','Noto Serif','Nova Cut','Nova Flat','Nova Mono',
    'Nova Oval','Nova Round','Nova Script','Nova Slim','Nova Square','Numans',
    'Nunito','Nunito Sans','Odibar Sans','Odor Mean Cheny','Offside','Oi',
    'Old Standard TT','Oldenburg','Ole','Ole Script','Oooh Baby','Open Sans',
    'Orbitron','Oregano','Orienta','Original Surfer','Oswald','Outfit','Over the Rainbow',
    'Overlock','Overpass','Overpass Mono','Ovo','Oxanium','Oxygen','Oxygen Mono',
    'PT Mono','PT Sans','PT Sans Caption','PT Sans Narrow','PT Serif','Padauk',
    'Palanquin','Palanquin Dark','Pangolin','Paprika','Parisienne','Passero One',
    'Passion One','Pathway Gothic One','Patrick Hand','Patrick Hand SC','Pattaya',
    'Patua One','Pavanam','Paytone One','Peddana','Peralta','Permanent Marker',
    'Petemoss','Petit Formal Script','Petrona','Phetsarath','Philosopher','Piazzolla',
    'Piedra','Pinyon Script','Pirata One','Plaster','Play','Playball','Playfair Display',
    'Playfair Display SC','Plus Jakarta Sans','Podkova','Poiret One','Poller One',
    'Poly','Pompiere','Pontano Sans','Poppins','Port Lligat Sans','Port Lligat Slab',
    'Potta One','Pragati Narrow','Praise','Prata','Preahvihear','Press Start 2P',
    'Pridi','Princess Sofia','Prociono','Prompt','Prosto One','Protest Guerrilla',
    'Protest Revolution','Protest Strike','Public Sans','Puritan','Purple Purse',
    'Qahiri','Quando','Quantico','Quattrocento','Quattrocento Sans','Questrial',
    'Quicksand','Qwigley','Racing Sans One','Radley','Rajdhani','Rakkas','Raleway',
    'Ranchers','Rancho','Rasa','Rationale','Ravi Prakash','Reem Kufi','Reem Kufi Fun',
    'Reem Kufi Ink','Revalia','Rhodium Libre','Ribeye','Ribeye Marrow','Righteous',
    'Risque','Road Rage','Roberto','Roboto','Roboto Condensed','Roboto Flex',
    'Roboto Mono','Roboto Serif','Roboto Slab','Rochester','Rock 3D','Rock Salt',
    'RocknRoll One','Rokkitt','Romanesco','Ropa Sans','Rosario','Rosarivo',
    'Rouge Script','Rowdies','Rozha One','Rubik','Rubik Beastly','Rubik Bubbles',
    'Rubik Broken Fax','Rubik Burned','Rubik Dirt','Rubik Distressed','Rubik Glitch',
    'Rubik Iso','Rubik Marker Hatch','Rubik Maze','Rubik Microbe','Rubik Mono One',
    'Rubik Moonrocks','Rubik Puddles','Rubik Spray Paint','Rubik Storm','Rubik Vinyl',
    'Rubik Wet Paint','Ruda','Rufina','Ruge Boogie','Ruluko','Rum Raisin','Ruslan Display',
    'Russo One','Ruthie','Rye','Saira','Saira Condensed','Saira Extra Condensed',
    'Saira Semi Condensed','Saira Semi Expanded','Saira Stencil One','Salsa',
    'Sanchez','Sancreek','Sansita','Sansita Swashed','Sarabun','Sarala','Sarina',
    'Sarpanch','Satisfy','Sawarabi Gothic','Sawarabi Mincho','Scada','Scheherazade New',
    'Schoolbell','Scope One','Seaweed Script','Secular One','Sen','Send Flowers',
    'Sevillana','Seymour One','Shadows Into Light','Shadows Into Light Two','Shalimar',
    'Shanti','Share','Share Tech','Share Tech Mono','Shippori Antique','Shippori Mincho',
    'Shojumaru','Short Stack','Shrikhand','Siemreap','Sigmar One','Signika',
    'Signika Negative','Simonetta','Single Day','Sintony','Sirin Stencil','Six Caps',
    'Skranji','Slabo 13px','Slabo 27px','Slackey','Smokum','Smythe','Sniglet',
    'Snippet','Snowburst One','Sofadi One','Sofia','Solway','Song Myung','Sonsie One',
    'Sorts Mill Goudy','Source Code Pro','Source Sans 3','Source Serif 4','Source Serif Pro',
    'Space Grotesk','Space Mono','Spartan','Special Elite','Spectral','Spectral SC',
    'Spicy Rice','Spinnaker','Spirax','Spline Sans','Squada One','Sree Krushnadevaraya',
    'Sriracha','Srisakdi','Staatliches','Stalemate','Stardos Stencil','Stick No Bills',
    'Stint Ultra Condensed','Stint Ultra Expanded','Stoke','Strait','Style Script',
    'Sue Ellen Francisco','Suez One','Sulphur Point','Sumana','Sunflower','Sunshiney',
    'Supermercado','Sura','Suranna','Suravaram','Suwannaphum','Swanky and Moo Moo',
    'Syncopate','Syne','Tac One','Tajawal','Tangerine','Taprom','Tauri','Taviraj',
    'Teko','Telex','Tenali Ramakrishna','Tenor Sans','Texturina','Texturina Alt',
    'Thasadith','The Nautigal','Tienne','Tillana','Tilt Neon','Tilt Prism',
    'Tilt Warp','Timmana','Tinos','Titan One','Titillium Web','Tourney','Trade Winds',
    'Train One','Trebuchet','Trirong','Trispace','Trocchi','Trochut','Truculenta',
    'Trykker','Tulpen One','Turret Road','Twinkle Star','Ubuntu','Ubuntu Condensed',
    'Ubuntu Mono','Uchen','Ultra','Uncial Antiqua','Underdog','Unica One','UnifrakturCook',
    'UnifrakturMaguntia','Unkempt','Unlock','Unna','Updock','Urbanist','VT323','Vampiro One',
    'Varela','Varela Round','Varta','Vast Shadow','Vazirmatn','Vecna','Vesper Libre',
    'Viaoda Libre','Vibes','Vibur','Vidaloka','Viga','Vina Sans','Voces','Vollkorn',
    'Vollkorn SC','Voltaire','Vujahday','Waiting for the Sunrise','Wallpoet','Walter Turncoat',
    'Warnes','Water Brush','Wellfleet','Wendy One','Whisper','WindSong','Wire One',
    'Wix Madefor Display','Wix Madefor Text','Work Sans','Xanh Mono','Yalta','Yanone Kaffeesatz',
    'Yantramanav','Yatra One','Yellowtail','Yeseva One','Yesteryear','Yomogi','Young Serif',
    'Yrsa','Yuji Boku','Yuji Hentaigana Akari','Yuji Mai','Yuji Syuku','ZCOOL KuaiLe',
    'ZCOOL QingKe HuangYou','ZCOOL XiaoWei','Zen Antique','Zen Antique Soft',
    'Zen Dots','Zen Kaku Gothic Antique','Zen Kaku Gothic New','Zen Kurenaido',
    'Zen Loop','Zen Maru Gothic','Zen Old Mincho','Zen Tokyo','Zhi Mang Xing','Zilla Slab',
    'Zilla Slab Highlight'
];

let currentIndex = 0;
let loadedFonts = new Set();
const sElement = document.getElementById('s');

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

document.addEventListener('pointerdown', (e) => {
    const now = Date.now();
    if (now - lastTapTime < 100) return;
    lastTapTime = now;
    
    e.preventDefault();
    currentIndex = (currentIndex + 1) % fonts.length;
    const fontName = fonts[currentIndex];
    
    loadFont(fontName).then(() => {
        sElement.style.fontFamily = `'${fontName}', serif`;
    });
    
    for (let i = 1; i <= 3; i++) {
        loadFont(fonts[(currentIndex + i) % fonts.length]);
    }
});
