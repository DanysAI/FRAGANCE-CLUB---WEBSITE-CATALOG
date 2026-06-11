/* ═══════════════════════════════════════
   FRAGANCE CLUB — APP.JS v6
   Ordenado: Marca A-Z → Línea A-Z → Nombre A-Z
   Notas verificadas en Fragrantica
   ═══════════════════════════════════════ */

const PERFUMES = [

  // ── AFNAN ─────────────────────────────────────────────────────
  {
    id:"a-001", nombre:"9AM Dive", marca:"Afnan", linea:"9AM",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/afnan-9am-dive.webp",
    descripcion:"Limón · Menta · Manzana · Sándalo"
  },
  {
    id:"a-002", nombre:"9PM Clásico", marca:"Afnan", linea:"9PM",
    categoria:"arabe", ml:100, precio:33.50,
    en_promo:false, disponible:true, foto:"fotos/arabe/afnan-9pm-clasico.jpg",
    descripcion:"Manzana · Canela · Lavanda · Vainilla"
  },
  {
    id:"a-003", nombre:"9PM Night Out", marca:"Afnan", linea:"9PM",
    categoria:"arabe", ml:100, precio:45,
    en_promo:false, disponible:true, foto:"fotos/arabe/afnan-9pm-night-out.jpg",
    descripcion:"Pitahaya · Coñac · Toffee · Suede"
  },
  {
    id:"a-004", nombre:"Supremacy Collectors Edition", marca:"Afnan", linea:"Supremacy",
    categoria:"arabe", ml:100, precio:55,
    en_promo:false, disponible:true, foto:"fotos/arabe/afnan-collectors-edition.webp",
    descripcion:"Piña · Bergamota · Flor de Naranjo · Ámbar"
  },

  // ── AHMED AL MAGHRIBI ─────────────────────────────────────────
  {
    id:"b-001", nombre:"KAAF", marca:"Ahmed Al Maghribi", linea:"Kaaf",
    categoria:"arabe", ml:100, precio:40,
    en_promo:false, disponible:true, foto:"fotos/arabe/kaaf.jpg",
    descripcion:"Lavanda · Sandía · Jazmín · Sándalo"
  },
  {
    id:"b-002", nombre:"KAAF NOIR", marca:"Ahmed Al Maghribi", linea:"Kaaf",
    categoria:"arabe", ml:100, precio:40,
    en_promo:false, disponible:true, foto:"fotos/arabe/kaaf-noir.webp",
    descripcion:"Cardamomo · Lavanda · Cedro · Ambroxan"
  },

  // ── AL HARAMAIN ───────────────────────────────────────────────
  {
    id:"c-001", nombre:"Amber Oud Gold Edition", marca:"Al Haramain", linea:"Amber Oud",
    categoria:"arabe", ml:100, precio:45,
    en_promo:false, disponible:true, foto:"fotos/arabe/al-haramain-amber-oud-gold.webp",
    descripcion:"Melón · Piña · Ámbar · Vainilla"
  },
  {
    id:"c-002", nombre:"Aqua Dubai", marca:"Al Haramain", linea:"Amber Oud",
    categoria:"arabe", ml:100, precio:50,
    en_promo:false, disponible:true, foto:"fotos/arabe/al-haramain-aqua-dubai.webp",
    descripcion:"Bergamota · Melón · Piña · Almizcle"
  },

  // ── ARABIYAT PRESTIGE ─────────────────────────────────────────
  {
    id:"d-001", nombre:"Mahad Al Dhahab", marca:"Arabiyat Prestige", linea:"Arabiyat",
    categoria:"arabe", ml:100, precio:45,
    en_promo:false, disponible:true, foto:"fotos/arabe/arabiyat-mahad-al-dhahab.webp",
    descripcion:"Bergamota · Oud · Ámbar · Vainilla"
  },
  {
    id:"d-002", nombre:"MARWA", marca:"Arabiyat Prestige", linea:"Arabiyat",
    categoria:"arabe", ml:100, precio:40,
    en_promo:false, disponible:true, foto:"fotos/arabe/arabiyat-marwa.jpg",
    descripcion:"Bergamota · Jengibre · Neroli · Ambroxan"
  },
  {
    id:"d-003", nombre:"UHUD", marca:"Arabiyat Prestige", linea:"Arabiyat",
    categoria:"arabe", ml:100, precio:45,
    en_promo:false, disponible:true, foto:"fotos/arabe/arabiyat-uhud.webp",
    descripcion:"Caramelo · Miel · Rosa · Vainilla"
  },

  // ── ARMAF ─────────────────────────────────────────────────────
  {
    id:"e-001", nombre:"Arabian Sky", marca:"Armaf", linea:"Eter",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/eter-arabian-sky.webp",
    descripcion:"Bergamota · Caramelo · Lavanda · Cedro"
  },
  {
    id:"e-002", nombre:"Club de Nuit Iconic", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:100, precio:40,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-cdni-iconic.webp",
    descripcion:"Toronja · Menta · Incienso · Ámbar"
  },
  {
    id:"e-003", nombre:"Club de Nuit Intense Man", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:100, precio:32,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-cdni-intense.jpg",
    descripcion:"Piña · Bergamota · Abedul · Ambergris"
  },
  {
    id:"e-004", nombre:"Club de Nuit Intense Man Extrait", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:50, precio:45,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-cdni-intense-extrait.webp",
    descripcion:"Piña · Bergamota · Abedul · Vainilla"
  },
  {
    id:"e-005", nombre:"Club de Nuit Milestone", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:100, precio:37,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-cdni-milestone.jpg",
    descripcion:"Notas Marinas · Violeta · Sándalo · Ambroxan"
  },
  {
    id:"e-006", nombre:"Club de Nuit Précieux", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:100, precio:46,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-cdni-precieux.webp",
    descripcion:"Caramelo · Piña · Jazmín · Ambroxan"
  },
  {
    id:"e-007", nombre:"Club de Nuit Sillage", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:100, precio:37,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-cdni-sillage.webp",
    descripcion:"Bergamota · Rosa · Iris · Ambroxan"
  },
  {
    id:"e-008", nombre:"Club de Nuit Urban Man Elixir", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:100, precio:37,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-cdni-urban-elixir.jpg",
    descripcion:"Bergamota · Azafrán · Lavanda · Ambroxan"
  },
  {
    id:"e-009", nombre:"Dunescape", marca:"Armaf", linea:"Otras",
    categoria:"arabe", ml:100, precio:45,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-dunescape.webp",
    descripcion:"Bergamota · Manzana · Notas Ozónicas · Ámbar"
  },
  {
    id:"e-010", nombre:"Mandarin Sky", marca:"Armaf", linea:"Odyssey",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/armaf-mandarin-sky.jpg",
    descripcion:"Mandarina · Azafrán · Caramelo · Tonka"
  },
  {
    id:"e-011", nombre:"Odyssey Aqua", marca:"Armaf", linea:"Odyssey",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/armaf-odyssey-aqua.webp",
    descripcion:"Naranja · Lavanda · Menta · Ambroxan"
  },
  {
    id:"e-012", nombre:"Yum Yum", marca:"Armaf", linea:"Otras",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/armaf-yum-yum.jpg",
    descripcion:"Cereza · Rosa · Vainilla · Almizcle"
  },

  // ── BHARARA ───────────────────────────────────────────────────
  {
    id:"f-001", nombre:"Bharara King", marca:"Bharara", linea:"Bharara",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/bharara-king.webp",
    descripcion:"Naranja · Bergamota · Vainilla · Ámbar"
  },

  // ── DUMONT PARIS ──────────────────────────────────────────────
  {
    id:"g-001", nombre:"Nitro Elixir", marca:"Dumont Paris", linea:"Nitro",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/dumont-nitro-elixir.webp",
    descripcion:"Cardamomo · Praliné · Tonka · Ambergris"
  },
  {
    id:"g-002", nombre:"Nitro Red", marca:"Dumont Paris", linea:"Nitro",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/dumont-nitro-red.jpg",
    descripcion:"Manzana · Lavanda · Sandía · Ámbar"
  },
  {
    id:"g-003", nombre:"Nitro Red Intensly", marca:"Dumont Paris", linea:"Nitro",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/dumont-nitro-red-intensly.webp",
    descripcion:"Durazno · Manzana · Cedro · Ámbar"
  },

  // ── EMPER ─────────────────────────────────────────────────────
  {
    id:"h-001", nombre:"Intimation", marca:"Emper", linea:"Emper",
    categoria:"arabe", ml:100, precio:18,
    en_promo:false, disponible:true, foto:"fotos/arabe/emper-intimation.webp",
    descripcion:"Bergamota · Jengibre · Neroli · Ambroxan"
  },
  {
    id:"h-002", nombre:"Ocean Breeze", marca:"Emper", linea:"Emper",
    categoria:"arabe", ml:100, precio:25,
    en_promo:false, disponible:true, foto:"fotos/arabe/emper-ocean-breeze.webp",
    descripcion:"Menta · Cítricos · Rosa · Albaricoque"
  },
  {
    id:"h-003", nombre:"Phantom By Hero", marca:"Emper", linea:"Emper",
    categoria:"arabe", ml:100, precio:18,
    en_promo:false, disponible:true, foto:"fotos/arabe/emper-phantom-hero.webp",
    descripcion:"Almendra · Chocolate · Ron · Café"
  },
  {
    id:"h-004", nombre:"Shinning City", marca:"Emper", linea:"Emper",
    categoria:"arabe", ml:100, precio:18,
    en_promo:false, disponible:true, foto:"fotos/arabe/emper-shinning-city.webp",
    descripcion:"Yuzu · Neroli · Romero · Pimienta Rosa"
  },
  {
    id:"h-005", nombre:"The Immencity", marca:"Emper", linea:"Emper",
    categoria:"arabe", ml:100, precio:18,
    en_promo:false, disponible:true, foto:"fotos/arabe/emper-immencity.webp",
    descripcion:"Toronja · Bergamota · Notas Acuáticas · Ambroxan"
  },

  // ── FRENCH AVENUE ─────────────────────────────────────────────
  {
    id:"j-001", nombre:"Aether Extrait", marca:"French Avenue", linea:"Aether",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/french-aether-extrait.webp",
    descripcion:"Manzana Verde · Bergamota · Cashmeran · Almizcle"
  },
  {
    id:"j-002", nombre:"Liquid Brun", marca:"French Avenue", linea:"Liquid",
    categoria:"arabe", ml:100, precio:38,
    en_promo:false, disponible:true, foto:"fotos/arabe/french-liquid-brun.webp",
    descripcion:"Canela · Cardamomo · Vainilla Bourbon · Praliné"
  },
  {
    id:"j-003", nombre:"Vulcan Feu", marca:"French Avenue", linea:"Vulcan",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/french-vulcan-feu.webp",
    descripcion:"Mango · Jengibre · Praliné · Tonka"
  },

  // ── JO MILANO PARIS ───────────────────────────────────────────
  {
    id:"k-001", nombre:"No Limits", marca:"Jo Milano Paris", linea:"Game of Spades",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/jo-milano-no-limits.webp",
    descripcion:"Cítricos · Iris · Amyris · Tonka"
  },
  {
    id:"k-002", nombre:"Wildcard", marca:"Jo Milano Paris", linea:"Game of Spades",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/jo-milano-wildcard.webp",
    descripcion:"Bergamota · Manzana · Vainilla · Tonka"
  },

  // ── KHADLAJ ───────────────────────────────────────────────────
  {
    id:"l-001", nombre:"ShiyaKa Shadow", marca:"Khadlaj", linea:"ShiyaKa",
    categoria:"arabe", ml:100, precio:35,
    en_promo:false, disponible:true, foto:"fotos/arabe/khadlaj-shiyaka-shadow.webp",
    descripcion:"Toronja · Lavanda · Cedro · Patchouli"
  },
  {
    id:"l-002", nombre:"ShiyaKa Snow", marca:"Khadlaj", linea:"ShiyaKa",
    categoria:"arabe", ml:100, precio:35,
    en_promo:false, disponible:true, foto:"fotos/arabe/khadlaj-shiyaka-snow.webp",
    descripcion:"Bergamota · Neroli · Pimienta Rosa · Vetiver"
  },

  // ── LATTAFA ───────────────────────────────────────────────────
  {
    id:"m-001", nombre:"ASAD", marca:"Lattafa", linea:"Asad",
    categoria:"arabe", ml:100, precio:27,
    en_promo:false, disponible:true, foto:"fotos/arabe/lattafa-asad.jpg",
    descripcion:"Piña · Tabaco · Café · Vainilla"
  },
  {
    id:"m-002", nombre:"Asad Bourbon", marca:"Lattafa", linea:"Asad",
    categoria:"arabe", ml:100, precio:31,
    en_promo:false, disponible:true, foto:"fotos/arabe/lattafa-asad-bourbon.jpg",
    descripcion:"Lavanda · Cacao · Nuez Moscada · Vainilla Bourbon"
  },
  {
    id:"m-003", nombre:"Khamrah Clásico", marca:"Lattafa", linea:"Khamrah",
    categoria:"arabe", ml:100, precio:31,
    en_promo:false, disponible:true, foto:"fotos/arabe/lattafa-khamrah-clasico.webp",
    descripcion:"Canela · Praliné · Vainilla · Oud"
  },
  {
    id:"m-004", nombre:"Khamrah Qahwa", marca:"Lattafa", linea:"Khamrah",
    categoria:"arabe", ml:100, precio:31,
    en_promo:false, disponible:true, foto:"fotos/arabe/lattafa-khamrah-qahwa.webp",
    descripcion:"Cardamomo · Canela · Café · Praliné"
  },
  {
    id:"m-005", nombre:"Now EDP", marca:"Lattafa", linea:"Now",
    categoria:"arabe", ml:100, precio:25,
    en_promo:false, disponible:true, foto:"fotos/arabe/lattafa-now-edp.jpg",
    descripcion:"Piña · Bergamota · Abedul · Vainilla"
  },
  {
    id:"m-006", nombre:"Now White", marca:"Lattafa", linea:"Now",
    categoria:"arabe", ml:100, precio:25,
    en_promo:false, disponible:true, foto:"fotos/arabe/lattafa-now-white.png",
    descripcion:"Toronja · Bergamota · Patchouli · Almizcle"
  },
  {
    id:"m-007", nombre:"Oud for Glory", marca:"Lattafa", linea:"Bade'e Al Oud",
    categoria:"arabe", ml:100, precio:45,
    en_promo:false, disponible:true, foto:"fotos/arabe/lattafa-oud-for-glory.jpg",
    descripcion:"Azafrán · Nuez Moscada · Oud · Almizcle"
  },
  {
    id:"m-008", nombre:"Yara", marca:"Lattafa", linea:"Yara",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/lattafa-yara.webp",
    descripcion:"Orquídea · Frutas Tropicales · Vainilla · Almizcle"
  },
  {
    id:"m-009", nombre:"Yara Elixir", marca:"Lattafa", linea:"Yara",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/lattafa-yara-elixir.webp",
    descripcion:"Fresa · Jazmín · Caramelo · Vainilla"
  },

  // ── PARIS CORNER ──────────────────────────────────────────────
  {
    id:"n-001", nombre:"Rifaqaat", marca:"Paris Corner", linea:"Paris Corner",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/paris-corner-rifaqaat.webp",
    descripcion:"Pimienta Negra · Azafrán · Olíbano · Vainilla"
  },

  // ── RASASI ────────────────────────────────────────────────────
  {
    id:"o-001", nombre:"Hawas Classic", marca:"Rasasi", linea:"Hawas",
    categoria:"arabe", ml:100, precio:35,
    en_promo:false, disponible:true, foto:"fotos/arabe/rasasi-hawas-classic.webp",
    descripcion:"Bergamota · Canela · Flor de Naranjo · Sándalo"
  },
  {
    id:"o-002", nombre:"Hawas Fire", marca:"Rasasi", linea:"Hawas",
    categoria:"arabe", ml:100, precio:45,
    en_promo:false, disponible:true, foto:"fotos/arabe/rasasi-hawas-fire.webp",
    descripcion:"Salvia · Notas Marinas · Ámbar · Ambergris"
  },
  {
    id:"o-003", nombre:"Hawas Kobra", marca:"Rasasi", linea:"Hawas",
    categoria:"arabe", ml:100, precio:38,
    en_promo:false, disponible:false, foto:"fotos/arabe/rasasi-hawas-kobra.webp",
    descripcion:"Jengibre · Té Verde · Canela · Ámbar"
  },
  {
    id:"o-004", nombre:"Hawas Malibu", marca:"Rasasi", linea:"Hawas",
    categoria:"arabe", ml:100, precio:45,
    en_promo:false, disponible:true, foto:"fotos/arabe/rasasi-hawas-malibu.jpg",
    descripcion:"Piña · Lavanda · Tonka · Almizcle"
  },
  {
    id:"o-005", nombre:"Hawas Tropical", marca:"Rasasi", linea:"Hawas",
    categoria:"arabe", ml:100, precio:45,
    en_promo:false, disponible:true, foto:"fotos/arabe/rasasi-hawas-tropical.webp",
    descripcion:"Coco · Higo · Jengibre · Sándalo"
  },

  // ── RAYHAAN ───────────────────────────────────────────────────
  {
    id:"p-001", nombre:"Aquatica", marca:"Rayhaan", linea:"Rayhaan",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/rayhaan-aquatica.webp",
    descripcion:"Lima · Coco · Jazmín · Ron"
  },
  {
    id:"p-002", nombre:"Italia", marca:"Rayhaan", linea:"Rayhaan",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/rayhaan-italia.jpg",
    descripcion:"Lavanda · Miel · Canela · Vainilla"
  },
  {
    id:"p-003", nombre:"Jungle Vibe", marca:"Rayhaan", linea:"Rayhaan",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/rayhaan-jungle-vibe.webp",
    descripcion:"Higo · Toronja · Notas Verdes · Sándalo"
  },
  {
    id:"p-004", nombre:"Tropical Vibe", marca:"Rayhaan", linea:"Rayhaan",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/rayhaan-tropical-vibe.webp",
    descripcion:"Mango · Piña · Coco · Almizcle"
  },
  {
    id:"p-005", nombre:"Valhalla", marca:"Rayhaan", linea:"Rayhaan",
    categoria:"arabe", ml:100, precio:0,
    en_promo:false, disponible:false, foto:"fotos/arabe/rayhaan-valhalla.webp",
    descripcion:"Frambuesa · Coñac · Rosa · Praliné"
  }
];

/* ── INIT ───────────────────────────────── */
function init() {
  buildCatalog('arabe',     'arabeGrid',     'arabeBrandFilter',     'arabeNothing',        'arabeSearch');
  buildCatalog('disenador', 'disenadorGrid', 'disenadorBrandFilter', 'disenadorPlaceholder','disenadorSearch');
  buildCatalog('nicho',     'nichoGrid',     'nichoBrandFilter',     'nichoPlaceholder',    'nichoSearch');
  buildPromo(PERFUMES.filter(p => p.en_promo));
  setupNav();
  setupMenu();
  observeCards();
  setupCursorFX();
}

function buildCatalog(categoria, gridId, filterId, placeholderId, searchId) {
  const items = PERFUMES.filter(p => p.categoria === categoria);
  const ph    = document.getElementById(placeholderId);
  if (items.length) {
    ph?.style.setProperty('display','none');
    buildSection(items, gridId, filterId, searchId);
  }
}

/* ── BUILD SECTION ──────────────────────── */
function buildSection(items, gridId, filterId, searchId) {
  const grid = document.getElementById(gridId);
  if (!grid || !items.length) return;
  buildFilter(items, filterId, grid, searchId); // filter first so _apply exists
  buildSearch(items, searchId, grid, filterId);
  renderCards(items, grid);
}

function buildPromo(promos) {
  const grid = document.getElementById('promoGrid');
  if (!grid) return;
  if (!promos.length) {
    document.getElementById('promociones')?.style.setProperty('display','none');
    return;
  }
  renderCards(promos, grid);
}

/* ── SEARCH ─────────────────────────────── */
function buildSearch(items, searchId, grid, filterId) {
  const wrap = document.getElementById(searchId);
  if (!wrap) return;
  wrap.innerHTML = `
    <div class="search-wrap">
      <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <input type="text" class="search-input" placeholder="Buscar fragancia, marca o nota…" autocomplete="off" spellcheck="false">
    </div>`;

  const input = wrap.querySelector('.search-input');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const fw = document.getElementById(filterId);
    if (!fw) return;
    // reset brand dropdown to "all"
    fw._brand = 'all';
    const trigger = fw.querySelector('.fp--brand-btn');
    if (trigger) { trigger.textContent = 'Marcas ▾'; trigger.classList.remove('fp--brand-sel'); }
    fw.querySelectorAll('.fp-opt').forEach((o,i) => o.classList.toggle('active', i === 0));
    fw._apply(q);
  });
}

/* ── RENDER ─────────────────────────────── */
function renderCards(items, grid) {
  grid.innerHTML = items.map((p, i) => cardHTML(p, i)).join('');
  setTimeout(observeCards, 60);
}

function cardHTML(p, i) {
  const delay     = `${Math.min(i % 8, 7) * 50}ms`;
  const badgePromo = p.en_promo ? `<span class="badge-promo">Promo</span>` : '';

  const agotado = !p.disponible || p.precio === 0;
  const badgeSold = agotado
    ? `<div class="badge-sold"><span>Agotado</span></div>` : '';

  const priceHTML = agotado
    ? `<span class="card-price card-price--na">Agotado</span>`
    : p.en_promo && p.precio_promo
      ? `<span class="card-price-old">$${p.precio}</span><span class="card-price">$${p.precio_promo}</span>`
      : `<span class="card-price">$${p.precio % 1 === 0 ? p.precio : p.precio.toFixed(2)}</span>`;

  const imgZone = p.foto
    ? `<img src="${esc(p.foto)}" alt="${esc(p.nombre)}" loading="lazy"
         onerror="this.closest('.card-img-zone').classList.add('no-img');this.remove()">`
    : '';

  return `
<article class="card" data-brand="${esc(p.marca)}" style="transition-delay:${delay}">
  <div class="card-img-zone${p.foto ? '' : ' no-img'}">
    ${badgePromo}
    ${imgZone}
    ${badgeSold}
  </div>
  <div class="card-info">
    <p class="card-brand">${esc(p.marca)}</p>
    <h3 class="card-name">${esc(p.nombre)}</h3>
    <p class="card-notes">${esc(p.descripcion)}</p>
    <div class="card-foot">
      <span class="card-ml">${p.ml}ml</span>
      <div class="card-prices">${priceHTML}</div>
    </div>
  </div>
</article>`;
}

/* ── FILTER ─────────────────────────────── */
function buildFilter(items, filterId, grid, searchId) {
  const wrap = document.getElementById(filterId);
  if (!wrap) return;
  wrap._items     = items;
  wrap._brand     = 'all';
  wrap._availOnly = false;

  wrap._apply = function(q = '') {
    let result = wrap._items;
    if (wrap._brand !== 'all') result = result.filter(p => p.marca === wrap._brand);
    if (wrap._availOnly)       result = result.filter(p => p.disponible && p.precio > 0);
    if (q) result = result.filter(p =>
      p.nombre.toLowerCase().includes(q) ||
      p.marca.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q));
    renderCards(result, grid);
  };

  const brands = [...new Set(items.map(p => p.marca))];

  wrap.innerHTML = `
    <button class="fp fp--avail" data-avail="1">✓ Solo disponibles</button>
    <div class="brand-drop">
      <button class="fp fp--brand-btn">Marcas ▾</button>
      <div class="brand-panel">
        <button class="fp-opt active" data-brand="all">Todas las marcas</button>
        ${brands.map(b => `<button class="fp-opt" data-brand="${esc(b)}">${esc(b)}</button>`).join('')}
      </div>
    </div>`;

  const availBtn = wrap.querySelector('.fp--avail');
  const trigger  = wrap.querySelector('.fp--brand-btn');
  const panel    = wrap.querySelector('.brand-panel');

  // Toggle dropdown
  trigger.addEventListener('click', e => {
    e.stopPropagation();
    panel.classList.toggle('open');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => panel.classList.remove('open'));
  panel.addEventListener('click', e => e.stopPropagation());

  // Solo disponibles toggle
  availBtn.addEventListener('click', () => {
    wrap._availOnly = !wrap._availOnly;
    availBtn.classList.toggle('active', wrap._availOnly);
    const si = document.getElementById(searchId)?.querySelector('.search-input');
    if (si) si.value = '';
    wrap._apply('');
  });

  // Brand selection
  panel.addEventListener('click', e => {
    const opt = e.target.closest('.fp-opt');
    if (!opt) return;
    panel.querySelectorAll('.fp-opt').forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
    wrap._brand = opt.dataset.brand;
    trigger.textContent = (wrap._brand === 'all' ? 'Marcas' : wrap._brand) + ' ▾';
    trigger.classList.toggle('fp--brand-sel', wrap._brand !== 'all');
    panel.classList.remove('open');
    const si = document.getElementById(searchId)?.querySelector('.search-input');
    if (si) si.value = '';
    wrap._apply('');
  });
}

/* ── NAV ────────────────────────────────── */
function setupNav() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive:true });
  const links    = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    });
  }, { threshold:.25, rootMargin:'-64px 0px -60% 0px' });
  sections.forEach(s => io.observe(s));
}

function setupMenu() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    btn.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

/* ── INTERSECTION OBSERVER ──────────────── */
function observeCards() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold:.08, rootMargin:'0px 0px -30px 0px' });
  document.querySelectorAll('.card:not(.visible)').forEach(c => io.observe(c));
}

/* ── CURSOR 3D FX ───────────────────────── */
function setupCursorFX() {
  const hero = document.querySelector('.hero');
  const bg   = document.querySelector('.hero-bg');
  const body = document.querySelector('.hero-body');
  if (!hero || !bg || !body) return;
  let rafId = null, tx = 0, ty = 0, cx = 0, cy = 0, active = false;
  const lerp = (a, b, t) => a + (b - a) * t;
  function tick() {
    cx = lerp(cx, tx, 0.07); cy = lerp(cy, ty, 0.07);
    bg.style.setProperty('--gx', (50 + cx * 34) + '%');
    bg.style.setProperty('--gy', (50 + cy * 34) + '%');
    body.style.transform = `perspective(900px) rotateX(${(-cy*10).toFixed(2)}deg) rotateY(${(cx*10).toFixed(2)}deg)`;
    if (!active && Math.abs(cx) < 0.003 && Math.abs(cy) < 0.003) {
      cx = cy = 0; body.style.transform = '';
      bg.style.setProperty('--gx','50%'); bg.style.setProperty('--gy','50%');
      cancelAnimationFrame(rafId); rafId = null; return;
    }
    rafId = requestAnimationFrame(tick);
  }
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    tx = (e.clientX - r.left) / r.width  - 0.5;
    ty = (e.clientY - r.top)  / r.height - 0.5;
    active = true; if (!rafId) rafId = requestAnimationFrame(tick);
  });
  hero.addEventListener('mouseleave', () => {
    tx = 0; ty = 0; active = false;
    if (!rafId) rafId = requestAnimationFrame(tick);
  });
}

/* ── UTILS ──────────────────────────────── */
function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

init();
