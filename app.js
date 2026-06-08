/* ═══════════════════════════════════════
   FRAGANCE CLUB — APP.JS v3
   Datos inline — funciona sin servidor
   ═══════════════════════════════════════ */

const PERFUMES = [
  {
    id: "arabe-001", nombre: "KAAF", marca: "Ahmed Al Maghribi", linea: "Kaaf",
    categoria: "arabe", ml: 100, precio: 52, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/kaaf.jpg",
    descripcion: "Oud ahumado · Ámbar · Especias orientales"
  },
  {
    id: "arabe-002", nombre: "KAAF NOIR", marca: "Ahmed Al Maghribi", linea: "Kaaf",
    categoria: "arabe", ml: 100, precio: 58, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/kaaf-noir.webp",
    descripcion: "Oud oscuro · Vetiver · Cuero árabe"
  },
  {
    id: "arabe-003", nombre: "Amber Oud Gold Edition", marca: "Al Haramain", linea: "Amber Oud",
    categoria: "arabe", ml: 60, precio: 48, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/al-haramain-amber-oud-gold.webp",
    descripcion: "Oud real · Ámbar dorado · Sándalo"
  },
  {
    id: "arabe-004", nombre: "Aqua Dubai", marca: "Al Haramain", linea: "Aqua",
    categoria: "arabe", ml: 100, precio: 38, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/al-haramain-aqua-dubai.webp",
    descripcion: "Bergamota · Almizcle acuático · Oud suave"
  },
  {
    id: "arabe-005", nombre: "Mahad Al Dhahab", marca: "Arabiyat Prestige", linea: "Arabiyat Prestige",
    categoria: "arabe", ml: 100, precio: 28, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/arabiyat-mahad-al-dhahab.webp",
    descripcion: "Oud dorado · Ámbar · Rosa de Taif"
  },
  {
    id: "arabe-006", nombre: "MARWA", marca: "Arabiyat Prestige", linea: "Arabiyat Prestige",
    categoria: "arabe", ml: 100, precio: 28, precio_promo: 22,
    en_promo: true, disponible: true,
    foto: "fotos/arabe/arabiyat-marwa.jpg",
    descripcion: "Rosa · Jazmín · Almizcle blanco"
  },
  {
    id: "arabe-007", nombre: "UHUD", marca: "Arabiyat Prestige", linea: "Arabiyat Prestige",
    categoria: "arabe", ml: 100, precio: 32, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/arabiyat-uhud.webp",
    descripcion: "Oud · Vainilla · Especias ambarinas"
  },
  {
    id: "arabe-008", nombre: "Club de Nuit Iconic", marca: "Armaf", linea: "Club de Nuit",
    categoria: "arabe", ml: 105, precio: 38, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/armaf-cdni-iconic.webp",
    descripcion: "Bergamota · Manzana · Patchouli · Almizcle"
  },
  {
    id: "arabe-009", nombre: "Club de Nuit Intense Man", marca: "Armaf", linea: "Club de Nuit",
    categoria: "arabe", ml: 105, precio: 35, precio_promo: 28,
    en_promo: true, disponible: true,
    foto: "fotos/arabe/armaf-cdni-intense.jpg",
    descripcion: "Limón · Pino · Patchouli · Almizcle"
  },
  {
    id: "arabe-010", nombre: "Club de Nuit Milestone", marca: "Armaf", linea: "Club de Nuit",
    categoria: "arabe", ml: 100, precio: 42, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/armaf-cdni-milestone.jpg",
    descripcion: "Bergamota · Coco · Almizcle blanco"
  },
  {
    id: "arabe-011", nombre: "Club de Nuit Sillage", marca: "Armaf", linea: "Club de Nuit",
    categoria: "arabe", ml: 100, precio: 40, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/armaf-cdni-sillage.webp",
    descripcion: "Manzana · Rosa · Patchouli · Ámbar"
  },
  {
    id: "arabe-012", nombre: "Club de Nuit Urban Man Elixir", marca: "Armaf", linea: "Club de Nuit",
    categoria: "arabe", ml: 105, precio: 38, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/armaf-cdni-urban-elixir.jpg",
    descripcion: "Especias · Oud · Madera de sándalo"
  },
  {
    id: "arabe-013", nombre: "Dunescape", marca: "Armaf", linea: "Otras Referencias",
    categoria: "arabe", ml: 100, precio: 30, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/armaf-dunescape.webp",
    descripcion: "Arena dorada · Ámbar cálido · Madera"
  },
  {
    id: "arabe-014", nombre: "Intimation", marca: "Emper", linea: "Emper",
    categoria: "arabe", ml: 100, precio: 22, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/emper-intimation.webp",
    descripcion: "Floral · Almizcle · Ámbar suave"
  },
  {
    id: "arabe-015", nombre: "Ocean Breeze", marca: "Emper", linea: "Emper",
    categoria: "arabe", ml: 100, precio: 20, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/emper-ocean-breeze.webp",
    descripcion: "Aguamarina · Cítricos · Almizcle marino"
  },
  {
    id: "arabe-016", nombre: "Phantom By Hero", marca: "Emper", linea: "Emper",
    categoria: "arabe", ml: 100, precio: 25, precio_promo: 18,
    en_promo: true, disponible: true,
    foto: "fotos/arabe/emper-phantom-hero.webp",
    descripcion: "Lavanda · Vainilla · Notas metálicas"
  },
  {
    id: "arabe-017", nombre: "Shinning City", marca: "Emper", linea: "Emper",
    categoria: "arabe", ml: 100, precio: 20, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/emper-shinning-city.webp",
    descripcion: "Cítricos · Almizcle limpio · Cedro"
  },
  {
    id: "arabe-018", nombre: "The Immencity", marca: "Emper", linea: "Emper",
    categoria: "arabe", ml: 100, precio: 22, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/emper-immencity.webp",
    descripcion: "Oud · Ámbar negro · Especias oscuras"
  },
  {
    id: "arabe-019", nombre: "Liquid Brun", marca: "French Avenue", linea: "French Avenue",
    categoria: "arabe", ml: 100, precio: 28, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/french-liquid-brun.webp",
    descripcion: "Caramelo · Vainilla café · Madera cálida"
  },
  {
    id: "arabe-020", nombre: "ShiyaKa Shadow", marca: "Khadlaj", linea: "ShiyaKa",
    categoria: "arabe", ml: 100, precio: 30, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/khadlaj-shiyaka-shadow.webp",
    descripcion: "Oud negro · Cuero · Incienso"
  },
  {
    id: "arabe-021", nombre: "ShiyaKa Snow", marca: "Khadlaj", linea: "ShiyaKa",
    categoria: "arabe", ml: 100, precio: 28, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/khadlaj-shiyaka-snow.webp",
    descripcion: "Almizcle blanco · Bergamota · Notas glaciales"
  },
  {
    id: "arabe-022", nombre: "ASAD", marca: "Lattafa", linea: "Asad",
    categoria: "arabe", ml: 100, precio: 28, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/lattafa-asad.jpg",
    descripcion: "Oud · Ámbar · Cuero real"
  },
  {
    id: "arabe-023", nombre: "Asad Bourbon", marca: "Lattafa", linea: "Asad",
    categoria: "arabe", ml: 100, precio: 32, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/lattafa-asad-bourbon.jpg",
    descripcion: "Whisky · Oud · Vainilla · Madera"
  },
  {
    id: "arabe-024", nombre: "Oud for Glory", marca: "Lattafa", linea: "Bade'e Al Oud",
    categoria: "arabe", ml: 100, precio: 35, precio_promo: null,
    en_promo: false, disponible: false,
    foto: "fotos/arabe/lattafa-oud-for-glory.jpg",
    descripcion: "Gran Oud · Rosa árabe · Especias sagradas"
  },
  {
    id: "arabe-025", nombre: "Now EDP", marca: "Lattafa", linea: "Rave",
    categoria: "arabe", ml: 100, precio: 25, precio_promo: 20,
    en_promo: true, disponible: true,
    foto: "fotos/arabe/lattafa-now-edp.jpg",
    descripcion: "Bergamota · Pimienta · Ambroxan"
  },
  {
    id: "arabe-026", nombre: "Now White", marca: "Lattafa", linea: "Rave",
    categoria: "arabe", ml: 100, precio: 25, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/lattafa-now-white.png",
    descripcion: "Almizcle blanco · Bergamota · Cedro"
  },
  {
    id: "arabe-027", nombre: "Hawas Classic", marca: "Rasasi", linea: "Hawas",
    categoria: "arabe", ml: 100, precio: 38, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/rasasi-hawas-classic.webp",
    descripcion: "Notas marinas · Cítricos · Madera acuática"
  },
  {
    id: "arabe-028", nombre: "Hawas Fire", marca: "Rasasi", linea: "Hawas",
    categoria: "arabe", ml: 100, precio: 40, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/rasasi-hawas-fire.webp",
    descripcion: "Pimienta roja · Especias · Madera ardiente"
  },
  {
    id: "arabe-029", nombre: "Hawas Malibu", marca: "Rasasi", linea: "Hawas",
    categoria: "arabe", ml: 100, precio: 40, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/rasasi-hawas-malibu.jpg",
    descripcion: "Coco · Sal marina · Ylang ylang"
  },
  {
    id: "arabe-030", nombre: "Hawas Tropical", marca: "Rasasi", linea: "Hawas",
    categoria: "arabe", ml: 100, precio: 40, precio_promo: null,
    en_promo: false, disponible: true,
    foto: "fotos/arabe/rasasi-hawas-tropical.webp",
    descripcion: "Frutos tropicales · Madera · Almizcle"
  }
];

/* ── INIT ───────────────────────────────── */
function init() {
  buildCatalog('arabe',     'arabeGrid',     'arabeBrandFilter',     'arabeNothing');
  buildCatalog('disenador', 'disenadorGrid', 'disenadorBrandFilter', 'disenadorPlaceholder');
  buildCatalog('nicho',     'nichoGrid',     'nichoBrandFilter',     'nichoPlaceholder');
  buildPromo(PERFUMES.filter(p => p.en_promo));
  setupNav();
  setupMenu();
  observeCards();
  setupCursorFX();
}

function buildCatalog(categoria, gridId, filterId, placeholderId) {
  const items = PERFUMES.filter(p => p.categoria === categoria);
  const ph    = document.getElementById(placeholderId);
  if (items.length) {
    ph?.style.setProperty('display', 'none');
    buildSection(items, gridId, filterId);
  }
  // si no hay productos el placeholder se mantiene visible
}

/* ── BUILD SECTION ──────────────────────── */
function buildSection(items, gridId, filterId) {
  const grid = document.getElementById(gridId);
  if (!grid || !items.length) return;
  buildFilter(items, filterId, grid);
  renderCards(items, grid);
}

function buildPromo(promos) {
  const grid = document.getElementById('promoGrid');
  if (!grid) return;
  if (!promos.length) {
    document.getElementById('promociones')?.style.setProperty('display', 'none');
    return;
  }
  renderCards(promos, grid);
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
    : `<span class="card-price">$${p.precio}</span>`;

  return `
<article class="card" data-brand="${esc(p.marca)}" style="transition-delay:${delay}">
  <div class="card-img-zone">
    ${badgePromo}
    <img src="${esc(p.foto)}"
         alt="${esc(p.nombre)}"
         loading="lazy"
         onerror="this.closest('.card-img-zone').style.background='#1a1a1a';this.style.opacity='.2'">
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
function buildFilter(items, filterId, grid) {
  const wrap = document.getElementById(filterId);
  if (!wrap) return;

  const brands = ['all', ...new Set(items.map(p => p.marca))];
  wrap.innerHTML = brands.map(b =>
    `<button class="fp${b === 'all' ? ' active' : ''}" data-brand="${esc(b)}">
      ${b === 'all' ? 'Todas' : esc(b)}
    </button>`
  ).join('');

  wrap._items = items;

  wrap.addEventListener('click', e => {
    const btn = e.target.closest('.fp');
    if (!btn) return;
    wrap.querySelectorAll('.fp').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const brand = btn.dataset.brand;
    const filtered = brand === 'all' ? wrap._items : wrap._items.filter(p => p.marca === brand);
    renderCards(filtered, grid);
  });
}

/* ── NAV ────────────────────────────────── */
function setupNav() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  const links    = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    });
  }, { threshold: .25, rootMargin: '-64px 0px -60% 0px' });
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
  }, { threshold: .08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.card:not(.visible)').forEach(c => io.observe(c));
}

/* ── CURSOR 3D FX ───────────────────────── */
function setupCursorFX() {
  const hero = document.querySelector('.hero');
  const bg   = document.querySelector('.hero-bg');
  const body = document.querySelector('.hero-body');
  if (!hero || !bg || !body) return;

  let rafId  = null;
  let tx = 0, ty = 0;   // mouse target  (-0.5 → 0.5)
  let cx = 0, cy = 0;   // current lerped value
  let active = false;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick() {
    cx = lerp(cx, tx, 0.07);
    cy = lerp(cy, ty, 0.07);

    // Radial glow follows cursor
    bg.style.setProperty('--gx', (50 + cx * 34) + '%');
    bg.style.setProperty('--gy', (50 + cy * 34) + '%');

    // 3D perspective tilt on hero content
    const rx = (-cy * 10).toFixed(2);
    const ry = ( cx * 10).toFixed(2);
    body.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;

    // Stop loop once cursor is gone and we've returned to center
    if (!active && Math.abs(cx) < 0.003 && Math.abs(cy) < 0.003) {
      cx = 0; cy = 0;
      body.style.transform = '';
      bg.style.setProperty('--gx', '50%');
      bg.style.setProperty('--gy', '50%');
      cancelAnimationFrame(rafId);
      rafId = null;
      return;
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
    tx = 0; ty = 0;
    active = false;
    if (!rafId) rafId = requestAnimationFrame(tick);
  });
}

/* ── UTILS ──────────────────────────────── */
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

init();
