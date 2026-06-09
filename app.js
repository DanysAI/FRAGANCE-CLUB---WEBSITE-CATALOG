/* ═══════════════════════════════════════
   FRAGANCE CLUB — APP.JS v4
   Ordenado: Marca A-Z → Línea → Nombre A-Z
   ═══════════════════════════════════════ */

const PERFUMES = [

  // ── AFNAN ─────────────────────────────────────────────────────
  {
    id:"arabe-036", nombre:"9PM Clásico", marca:"Afnan", linea:"9PM",
    categoria:"arabe", ml:100, precio:33.50, precio_promo:null,
    en_promo:false, disponible:true, foto:"",
    descripcion:"Tabaco · Vainilla · Ámbar cálido"
  },
  {
    id:"arabe-037", nombre:"Collectors Edition", marca:"Afnan", linea:"Afnan",
    categoria:"arabe", ml:100, precio:55, precio_promo:null,
    en_promo:false, disponible:true, foto:"",
    descripcion:"Oud · Rosa árabe · Ámbar dorado"
  },

  // ── AHMED AL MAGHRIBI ─────────────────────────────────────────
  {
    id:"arabe-001", nombre:"KAAF", marca:"Ahmed Al Maghribi", linea:"Kaaf",
    categoria:"arabe", ml:100, precio:40, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/kaaf.jpg",
    descripcion:"Oud ahumado · Ámbar · Especias orientales"
  },
  {
    id:"arabe-002", nombre:"KAAF NOIR", marca:"Ahmed Al Maghribi", linea:"Kaaf",
    categoria:"arabe", ml:100, precio:40, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/kaaf-noir.webp",
    descripcion:"Oud oscuro · Vetiver · Cuero árabe"
  },

  // ── AL HARAMAIN ───────────────────────────────────────────────
  {
    id:"arabe-003", nombre:"Amber Oud Gold Edition", marca:"Al Haramain", linea:"Amber Oud",
    categoria:"arabe", ml:100, precio:45, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/al-haramain-amber-oud-gold.webp",
    descripcion:"Oud real · Ámbar dorado · Sándalo"
  },
  {
    id:"arabe-004", nombre:"Aqua Dubai", marca:"Al Haramain", linea:"Aqua",
    categoria:"arabe", ml:100, precio:50, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/al-haramain-aqua-dubai.webp",
    descripcion:"Bergamota · Almizcle acuático · Oud suave"
  },

  // ── ARABIYAT PRESTIGE ─────────────────────────────────────────
  {
    id:"arabe-005", nombre:"Mahad Al Dhahab", marca:"Arabiyat Prestige", linea:"Arabiyat Prestige",
    categoria:"arabe", ml:100, precio:45, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/arabiyat-mahad-al-dhahab.webp",
    descripcion:"Oud dorado · Ámbar · Rosa de Taif"
  },
  {
    id:"arabe-006", nombre:"MARWA", marca:"Arabiyat Prestige", linea:"Arabiyat Prestige",
    categoria:"arabe", ml:100, precio:40, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/arabiyat-marwa.jpg",
    descripcion:"Rosa · Jazmín · Almizcle blanco"
  },
  {
    id:"arabe-007", nombre:"UHUD", marca:"Arabiyat Prestige", linea:"Arabiyat Prestige",
    categoria:"arabe", ml:100, precio:45, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/arabiyat-uhud.webp",
    descripcion:"Oud · Vainilla · Especias ambarinas"
  },

  // ── ARMAF ─────────────────────────────────────────────────────
  {
    id:"arabe-008", nombre:"Club de Nuit Iconic", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:100, precio:40, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-cdni-iconic.webp",
    descripcion:"Bergamota · Manzana · Patchouli · Almizcle"
  },
  {
    id:"arabe-009", nombre:"Club de Nuit Intense Man", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:100, precio:32, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-cdni-intense.jpg",
    descripcion:"Limón · Pino · Patchouli · Almizcle"
  },
  {
    id:"arabe-010", nombre:"Club de Nuit Milestone", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:100, precio:37, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-cdni-milestone.jpg",
    descripcion:"Bergamota · Coco · Almizcle blanco"
  },
  {
    id:"arabe-038", nombre:"Club de Nuit Précieux", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:100, precio:46, precio_promo:null,
    en_promo:false, disponible:true, foto:"",
    descripcion:"Oud · Patchouli · Cuero · Almizcle"
  },
  {
    id:"arabe-011", nombre:"Club de Nuit Sillage", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:100, precio:37, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-cdni-sillage.webp",
    descripcion:"Manzana · Rosa · Patchouli · Ámbar"
  },
  {
    id:"arabe-012", nombre:"Club de Nuit Urban Man Elixir", marca:"Armaf", linea:"Club de Nuit",
    categoria:"arabe", ml:100, precio:37, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-cdni-urban-elixir.jpg",
    descripcion:"Especias · Oud · Madera de sándalo"
  },
  {
    id:"arabe-013", nombre:"Dunescape", marca:"Armaf", linea:"Otras",
    categoria:"arabe", ml:100, precio:45, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/armaf-dunescape.webp",
    descripcion:"Arena dorada · Ámbar cálido · Madera"
  },

  // ── EMPER ─────────────────────────────────────────────────────
  {
    id:"arabe-014", nombre:"Intimation", marca:"Emper", linea:"Emper",
    categoria:"arabe", ml:100, precio:18, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/emper-intimation.webp",
    descripcion:"Floral · Almizcle · Ámbar suave"
  },
  {
    id:"arabe-015", nombre:"Ocean Breeze", marca:"Emper", linea:"Emper",
    categoria:"arabe", ml:100, precio:25, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/emper-ocean-breeze.webp",
    descripcion:"Aguamarina · Cítricos · Almizcle marino"
  },
  {
    id:"arabe-016", nombre:"Phantom By Hero", marca:"Emper", linea:"Emper",
    categoria:"arabe", ml:100, precio:18, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/emper-phantom-hero.webp",
    descripcion:"Lavanda · Vainilla · Notas metálicas"
  },
  {
    id:"arabe-017", nombre:"Shinning City", marca:"Emper", linea:"Emper",
    categoria:"arabe", ml:100, precio:18, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/emper-shinning-city.webp",
    descripcion:"Cítricos · Almizcle limpio · Cedro"
  },
  {
    id:"arabe-018", nombre:"The Immencity", marca:"Emper", linea:"Emper",
    categoria:"arabe", ml:100, precio:18, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/emper-immencity.webp",
    descripcion:"Oud · Ámbar negro · Especias oscuras"
  },

  // ── FRENCH AVENUE ─────────────────────────────────────────────
  {
    id:"arabe-019", nombre:"Liquid Brun", marca:"French Avenue", linea:"French Avenue",
    categoria:"arabe", ml:100, precio:38, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/french-liquid-brun.webp",
    descripcion:"Caramelo · Vainilla café · Madera cálida"
  },

  // ── KHADLAJ ───────────────────────────────────────────────────
  {
    id:"arabe-020", nombre:"ShiyaKa Shadow", marca:"Khadlaj", linea:"ShiyaKa",
    categoria:"arabe", ml:100, precio:35, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/khadlaj-shiyaka-shadow.webp",
    descripcion:"Oud negro · Cuero · Incienso"
  },
  {
    id:"arabe-021", nombre:"ShiyaKa Snow", marca:"Khadlaj", linea:"ShiyaKa",
    categoria:"arabe", ml:100, precio:35, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/khadlaj-shiyaka-snow.webp",
    descripcion:"Almizcle blanco · Bergamota · Notas glaciales"
  },

  // ── LATTAFA ───────────────────────────────────────────────────
  {
    id:"arabe-022", nombre:"ASAD", marca:"Lattafa", linea:"Asad",
    categoria:"arabe", ml:100, precio:27, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/lattafa-asad.jpg",
    descripcion:"Oud · Ámbar · Cuero real"
  },
  {
    id:"arabe-023", nombre:"Asad Bourbon", marca:"Lattafa", linea:"Asad",
    categoria:"arabe", ml:100, precio:31, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/lattafa-asad-bourbon.jpg",
    descripcion:"Whisky · Oud · Vainilla · Madera"
  },
  {
    id:"arabe-039", nombre:"Khamrah Qahwa", marca:"Lattafa", linea:"Khamrah",
    categoria:"arabe", ml:100, precio:31, precio_promo:null,
    en_promo:false, disponible:true, foto:"",
    descripcion:"Café · Cardamomo · Ámbar oriental"
  },
  {
    id:"arabe-040", nombre:"Khamrah Tradicional", marca:"Lattafa", linea:"Khamrah",
    categoria:"arabe", ml:100, precio:31, precio_promo:null,
    en_promo:false, disponible:true, foto:"",
    descripcion:"Oud · Ámbar · Vainilla especiada"
  },
  {
    id:"arabe-025", nombre:"Now EDP", marca:"Lattafa", linea:"Now",
    categoria:"arabe", ml:100, precio:25, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/lattafa-now-edp.jpg",
    descripcion:"Bergamota · Pimienta · Ambroxan"
  },
  {
    id:"arabe-026", nombre:"Now White", marca:"Lattafa", linea:"Now",
    categoria:"arabe", ml:100, precio:25, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/lattafa-now-white.png",
    descripcion:"Almizcle blanco · Bergamota · Cedro"
  },
  {
    id:"arabe-024", nombre:"Oud for Glory", marca:"Lattafa", linea:"Bade'e Al Oud",
    categoria:"arabe", ml:100, precio:45, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/lattafa-oud-for-glory.jpg",
    descripcion:"Gran Oud · Rosa árabe · Especias sagradas"
  },

  // ── RASASI ────────────────────────────────────────────────────
  {
    id:"arabe-027", nombre:"Hawas Classic", marca:"Rasasi", linea:"Hawas",
    categoria:"arabe", ml:100, precio:35, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/rasasi-hawas-classic.webp",
    descripcion:"Notas marinas · Cítricos · Madera acuática"
  },
  {
    id:"arabe-028", nombre:"Hawas Fire", marca:"Rasasi", linea:"Hawas",
    categoria:"arabe", ml:100, precio:45, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/rasasi-hawas-fire.webp",
    descripcion:"Pimienta roja · Especias · Madera ardiente"
  },
  {
    id:"arabe-029", nombre:"Hawas Malibu", marca:"Rasasi", linea:"Hawas",
    categoria:"arabe", ml:100, precio:45, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/rasasi-hawas-malibu.jpg",
    descripcion:"Coco · Sal marina · Ylang ylang"
  },
  {
    id:"arabe-030", nombre:"Hawas Tropical", marca:"Rasasi", linea:"Hawas",
    categoria:"arabe", ml:100, precio:45, precio_promo:null,
    en_promo:false, disponible:true, foto:"fotos/arabe/rasasi-hawas-tropical.webp",
    descripcion:"Frutos tropicales · Madera · Almizcle"
  }
];

/* ── INIT ───────────────────────────────── */
function init() {
  buildCatalog('arabe',     'arabeGrid',     'arabeBrandFilter',     'arabeNothing',     'arabeSearch');
  buildCatalog('disenador', 'disenadorGrid', 'disenadorBrandFilter', 'disenadorPlaceholder', 'disenadorSearch');
  buildCatalog('nicho',     'nichoGrid',     'nichoBrandFilter',     'nichoPlaceholder',     'nichoSearch');
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
    ph?.style.setProperty('display', 'none');
    buildSection(items, gridId, filterId, searchId);
  }
}

/* ── BUILD SECTION ──────────────────────── */
function buildSection(items, gridId, filterId, searchId) {
  const grid = document.getElementById(gridId);
  if (!grid || !items.length) return;
  buildSearch(items, searchId, grid, filterId);
  buildFilter(items, filterId, grid, searchId);
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
    // Reset brand filter active state
    document.getElementById(filterId)?.querySelectorAll('.fp').forEach((b,i) => {
      b.classList.toggle('active', i === 0);
    });
    const filtered = q
      ? items.filter(p =>
          p.nombre.toLowerCase().includes(q) ||
          p.marca.toLowerCase().includes(q) ||
          p.descripcion.toLowerCase().includes(q)
        )
      : items;
    renderCards(filtered, grid);
  });
}

/* ── RENDER ─────────────────────────────── */
function renderCards(items, grid) {
  grid.innerHTML = items.map((p, i) => cardHTML(p, i)).join('');
  setTimeout(observeCards, 60);
}

function cardHTML(p, i) {
  const delay      = `${Math.min(i % 8, 7) * 50}ms`;
  const badgePromo = p.en_promo ? `<span class="badge-promo">Promo</span>` : '';
  const badgeSold  = !p.disponible
    ? `<div class="badge-sold"><span>Agotado</span></div>` : '';
  const priceHTML  = p.en_promo && p.precio_promo
    ? `<span class="card-price-old">$${p.precio}</span><span class="card-price">$${p.precio_promo}</span>`
    : `<span class="card-price">$${p.precio % 1 === 0 ? p.precio : p.precio.toFixed(2)}</span>`;

  const imgSrc = p.foto
    ? `<img src="${esc(p.foto)}" alt="${esc(p.nombre)}" loading="lazy"
         onerror="this.closest('.card-img-zone').classList.add('no-img');this.remove()">`
    : '';

  return `
<article class="card" data-brand="${esc(p.marca)}" style="transition-delay:${delay}">
  <div class="card-img-zone${p.foto ? '' : ' no-img'}">
    ${badgePromo}
    ${imgSrc}
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

  const brands = ['all', ...new Set(items.map(p => p.marca))];
  wrap.innerHTML = brands.map(b =>
    `<button class="fp${b === 'all' ? ' active' : ''}" data-brand="${esc(b)}">
      ${b === 'all' ? 'Todas las marcas' : esc(b)}
    </button>`
  ).join('');

  wrap._items = items;

  wrap.addEventListener('click', e => {
    const btn = e.target.closest('.fp');
    if (!btn) return;
    // Clear search input
    const searchInput = document.getElementById(searchId)?.querySelector('.search-input');
    if (searchInput) searchInput.value = '';

    wrap.querySelectorAll('.fp').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const brand    = btn.dataset.brand;
    const filtered = brand === 'all' ? wrap._items : wrap._items.filter(p => p.marca === brand);
    renderCards(filtered, grid);
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
    cx = lerp(cx, tx, 0.07);
    cy = lerp(cy, ty, 0.07);
    bg.style.setProperty('--gx', (50 + cx * 34) + '%');
    bg.style.setProperty('--gy', (50 + cy * 34) + '%');
    body.style.transform = `perspective(900px) rotateX(${(-cy*10).toFixed(2)}deg) rotateY(${(cx*10).toFixed(2)}deg)`;
    if (!active && Math.abs(cx) < 0.003 && Math.abs(cy) < 0.003) {
      cx = cy = 0;
      body.style.transform = '';
      bg.style.setProperty('--gx','50%');
      bg.style.setProperty('--gy','50%');
      cancelAnimationFrame(rafId); rafId = null; return;
    }
    rafId = requestAnimationFrame(tick);
  }

  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    tx = (e.clientX - r.left) / r.width  - 0.5;
    ty = (e.clientY - r.top)  / r.height - 0.5;
    active = true;
    if (!rafId) rafId = requestAnimationFrame(tick);
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
