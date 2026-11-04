/* ===== Projekt-Daten =====
   view bestimmt, was im Overlay links gezeigt wird:
     view: "video"   -> video: "../videos/xyz.mp4"
     view: "model"   -> model: "../models/xyz.glb"   (3D-Ansicht, drehbar)
     view: "images"  -> images: ["../images/a.webp", { src: "../images/b.webp", caption: { de: "…", en: "…" } }]
                        (Vertical Slice / Bildergalerie mit Pfeilen, Punkten und Tastatur)
   Ohne view wird automatisch erkannt: model > video > images > poster.
   poster bleibt immer das Vorschaubild der Kachel. */
const projects = [
  {
    title: "First Time Unreal Engine",
    cat: "Game",
    text: { de: "Mein erstes Projekt in der Unreal Engine, entstanden als Schulprojekt.", en: "My first project in Unreal Engine, created as a school project." },
    tags: { de: ["Unreal Engine", "Schulprojekt"], en: ["Unreal Engine", "School project"] },
    view: "video", poster: "../images/SchoolProject.webp", gif: "", video: "../videos/Project-david.mp4"
  },
  {
    title: "Entry Project (HFU)",
    cat: "Game",
    text: { de: "Mein Einstiegsprojekt an der Hochschule Furtwangen (HFU).", en: "My entry project at Furtwangen University (HFU)." },
    tags: { de: ["HFU", "Studium"], en: ["HFU", "Studies"] },
    view: "video", poster: "../images/image.png", gif: "", video: "../videos/Cat.mp4"
  },
  {
    title: "Sound Project 2 (HFU)",
    cat: "Audio",
    text: { de: "Fortgeschrittenes Projekt in immersivem Game-Audio.", en: "Advanced project in immersive game audio." },
    tags: { de: ["Sounddesign", "Unreal Engine"], en: ["Sound design", "Unreal Engine"] },
    view: "video", poster: "../images/Sound2.1.webp", gif: "", video: "../videos/Cat.mp4"
  },
  {
    title: "Theory 2 Project (HFU)",
    cat: "Game",
    text: { de: "Projekt immersiver physiologischer Wahrnehmung (HFU).", en: "Project on immersive physiological perception (HFU)." },
    tags: { de: ["HFU", "Studium"], en: ["HFU", "Studies"] },
    view: "video", poster: "../images/Theory2.webp", gif: "", video: "../videos/Cat.mp4"
  },
{
    title: "Sound Project 1 (HFU)",
    cat: "Audio",
    text: { de: "Einfaches Projekt immersiver Audio-Visualer Wahrnehmung (HFU).", en: "Simple project on immersive audio-visual perception (HFU)." },
    tags: { de: ["Sounddesign", "Unreal Engine"], en: ["Sound design", "Unreal Engine"] },
    view: "video", poster: "../images/Sound1.webp", gif: "", video: "../videos/Cat.mp4"
},
  {
    title: "Project 2 (physical game) (HFU)",
    cat: "Game",
    text: { de: "Projekt der erstellung eines physischen spiels (HFU).", en: "Project for creating a physical game (HFU)." },
    tags: { de: ["HFU", "Studium"], en: ["HFU", "Studies"] },
    view: "images", images: ["../images/image.webp", "../images/image.webp", "../images/image.webp"]
  },
  {
    title: "Visual 2 Project (HFU)",
    cat: "Art",
    text: { de: "Projekt zur visuellen Gestaltung (HFU).", en: "Project on visual design (HFU)." },
    tags: { de: ["Kunst", "Design"], en: ["Art", "Design"] },
    view: "model", poster: "../images/Visual2.webp", 
    model: "../models/Map 1.glb"
  },
  {
    title: "Project 3 Level (HFU)",
    cat: "Art",
    text: { de: "Projekt 3 Level (snippet) (HFU).", en: "Project 3 Level (snippet) (HFU)." },
    tags: { de: ["Kunst", "Design"], en: ["Art", "Design"] },
    view: "model", poster: "../images/Visual2.webp", 
    model: "../models/Map 1.glb"
  }
];



/* ===== Übersetzungen / Translations ===== */
const i18n = {
  de: {
    title: "Zinnatullin – Portfolio", nav_projects: "Projekte", nav_about: "Über mich", nav_career: "Projekt timeline", nav_contact: "Kontakt",
    h1: "",
    hero_p: "Hey, ich bin David Zinnatullin. Ich bin Student an der Hochschule Furtwangen (HFU) und interessiere mich für Game-Entwicklung und immersives Game-Audio.",
    btn_projects: "Projekte ansehen", btn_contact: "Kontakt aufnehmen", h_projects: "Projekte", h_about: "Über mich", photo: "Ich",
    about_p1: "Ich studiere an der Hochschule Furtwangen (HFU) und entwickle Spiele-Projekte. Mich begeistert, wie Bild und Ton zusammen eine Welt glaubwürdig machen.",
    about_p2: "Audio und Game Design sind meine Hauptinteressen. Ich freue mich über Möglichkeiten, an immersivem Game-Audio und Sounddesign zu arbeiten.",
    sk1_h: "Game-Entwicklung",
    sk1_p: "Unreal Engine, Godot Engine",
    sk2_h: "Audio",
    sk2_p: "Basics über die Menschliche Auditive Wahrnehmung, FMOD, UE Mega Sounds, ableton, reaper",
    sk3_h: "Web",
    sk3_p: "HTML, CSS, JavaScript/TypeScript",
    sk4_h: "3D",
    sk4_p: "Blender",
    sk5_h: "Programmiersprachen",
    sk5_p: "C# , Java, GDscript, C++ (grundlagen)",
    h_career: "Projekt timeline",
    t_time: "",
    t1_h: "Studium, Hochschule Furtwangen (HFU)",  t1_p: "Einstiegsprojekt und Sound Project (Grundlagen in immersivem Game-Audio).",
    t2_h: "Schule",  t2_p: "Erstes Projekt in der Unreal Engine.",
    t3_h: "Studium, Hochschule Furtwangen (HFU)",  t3_p: "Theory 2 Project (Audio-Visual Perception).",
    t4_h: "Studium, Hochschule Furtwangen (HFU)",  t4_p: "Sound 1 Project (Audio-Visuale Wahrnehmung).",
    t5_h: "Studium, Hochschule Furtwangen (HFU)",  t5_p: "Projekt 2 (Physisches Spiel).",
    h_contact: "Schreib mir.", contact_p: "Du hast eine Frage oder möchtest zusammenarbeiten? Ich freue mich auf deine Nachricht.",
    all: "Alle", cats: { Art: "Kunstprojekte", Game: "Game Projekte", Audio: "Sound Projekte" },
    open: t => t + " öffnen", preview: t => "Vorschau " + t, close: "Schließen", filter: "Projekte filtern",
    langLabel: "Sprache wechseln", langBtn: "EN", themeLabel: "Farbschema wechseln"
  },
  en: {
    title: "Zinnatullin – Portfolio", nav_projects: "Projects", nav_about: "About", nav_career: "Project Timeline", nav_contact: "Contact",
    h1: "Games and sound you can feel.",
    hero_p: "Hey, I’m David Zinnatullin. I study at Furtwangen University (HFU) and I’m interested in game development and immersive game audio.",
    btn_projects: "View projects", btn_contact: "Get in touch", h_projects: "Projects", h_about: "About me", photo: "Me",
    about_p1: "I study at Furtwangen University (HFU) and build game projects. I’m fascinated by how visuals and sound together make a world believable.",
    about_p2: "Audio and game Design are my main interests. I’m happy to explore opportunities to work on immersive game audio and sound design.",
    sk1_h: "Game development", sk1_p: "Unreal Engine, Godot Engine", 
    sk2_h: "Audio", sk2_p: "Basics about Human Auditive Perception, FMOD, UE Mega Sounds, ableton, reaper", 
    sk3_h: "Web", sk3_p: "HTML, CSS, JavaScript/TypeScript",
    sk4_h: "3D", sk4_p: "Blender, MaterialMaker",
    sk5_h: "coding languages", sk5_p: "C# , Java, GDscript, C++ (basics)",
    h_career: "Project Timeline", t_time: "", 
    t1_h: "Studies, Furtwangen University (HFU)", t1_p: "Entry project.", 
    t2_h: "School", t2_p: "First project in Unreal Engine.",

    t3_h: "Studies, Furtwangen University (HFU)",  t3_p: "Theory 2 Project (Audio-Visual Perception).",
    t4_h: "Studies, Furtwangen University (HFU)", t4_p: "Sound 1 Project.",
    t5_h: "Studies, Furtwangen University (HFU)", t5_p: "Project 2 (Physical game).",
    h_contact: "Get in touch.", contact_p: "Have a question or want to work together? I’d love to hear from you.",
    all: "All", cats: { Art: "Art Projects", Game: "Game Projects", Audio: "Sound Projects" },
    open: t => "Open " + t, preview: t => "Preview of " + t, close: "Close", filter: "Filter projects",
    langLabel: "Switch language", langBtn: "DE", themeLabel: "Toggle colour scheme"
    
  }
};
let lang = 'de', cat = 'Alle', current = null;
try { lang = localStorage.getItem('lang') || (navigator.language || 'de').slice(0, 2); } catch (e) { lang = (navigator.language || 'de').slice(0, 2); }
if (!i18n[lang]) lang = 'en';
const T = () => i18n[lang];
const categoryLabel = key => T().cats?.[key] ?? key;

const grid = document.getElementById('grid'), filters = document.getElementById('filters');
const dlg = document.getElementById('dlg'), dmedia = document.getElementById('dmedia');
const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9.5v5l4-2.5z" fill="currentColor"/></svg>';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));



function render() {
  grid.innerHTML = '';
  projects.filter(p => cat === 'Alle' || p.cat === cat).forEach(p => {
    const b = document.createElement('button');
    b.className = 'tile'; b.type = 'button'; b.setAttribute('aria-label', T().open(p.title));
    const still = p.poster || p.gif;
    b.innerHTML = `<div class="media">
        ${still ? `<img src="${esc(still)}" alt="${esc(T().preview(p.title))}" loading="lazy">` : `<div class="ph">${icon}</div>`}
        ${!p.gif && p.video ? `<video muted loop playsinline preload="none"></video>` : ''}
        <span class="badge">${esc(categoryLabel(p.cat))}</span></div>
      <div class="info"><h3>${esc(p.title)}</h3><p>${esc(p.text[lang])}</p>
      <div class="tags">${p.tags[lang].map(t => `<span>${esc(t)}</span>`).join('')}</div></div>`;

    const img = b.querySelector('img'), vid = b.querySelector('video');
    let start = () => { }, stop = () => { };
    if (p.gif && img) {                       // GIF-Vorschau
      start = () => { img.src = p.gif; };
      stop = () => { img.src = p.poster || p.gif; };
    } else if (vid) {                         // Video-Vorschau (wirkt wie ein GIF)
      start = () => { if (!vid.src) vid.src = p.video; vid.classList.add('on'); vid.play().catch(() => { }); };
      stop = () => { vid.classList.remove('on'); vid.pause(); };
    }
    b.addEventListener('mouseenter', start); b.addEventListener('mouseleave', stop);
    b.addEventListener('focus', start); b.addEventListener('blur', stop);
    b.addEventListener('touchstart', start, { passive: true });
    b.addEventListener('click', () => openProject(p));
    grid.appendChild(b);
  });
}

/* ===== Ausführliche Beschreibungen (Overlay, linke Seite) =====
   Absätze mit \n\n trennen. Texte gerne durch eigene Details ersetzen. */
const longText = {
  "First Time Unreal Engine": {
    de: "Dieses Projekt war mein allererster Kontakt mit der Unreal Engine und entstand im Rahmen eines Schulprojekts. Ich habe dabei die Grundlagen des Editors kennengelernt: Level aufbauen, Assets platzieren, Beleuchtung setzen und erste Spielmechaniken umsetzen.\n\nDas Projekt war für mich der Startpunkt, aus dem mein Interesse an Game-Entwicklung entstanden ist. Es zeigt, wie ich mir die Engine selbstständig erarbeitet habe.",
    en: "This project was my very first contact with Unreal Engine and was created as a school project. I learned the basics of the editor: building levels, placing assets, setting up lighting and implementing first gameplay mechanics.\n\nIt was the starting point of my interest in game development. It shows how I taught myself the engine."
  },
  "Entry Project (HFU)": {
    de: "Mein Einstiegsprojekt an der Hochschule Furtwangen. Hier ging es darum, in einem kleinen Team den Ablauf eines Spiels zu durchlaufen: von der Idee über den Prototyp bis zur präsentierbaren Version.\n\nIch habe dabei Erfahrung mit Teamarbeit, Zeitplanung und dem Zusammenspiel von Design, Programmierung und Audio gesammelt.",
    en: "My entry project at Furtwangen University. The goal was to go through the process of making a game in a small team: from the initial idea to a prototype and finally a presentable version.\n\nI gained experience in teamwork, planning and in how design, programming and audio work together."
  },
  "Sound Project 2 (HFU)": {
    de: "Ein fortgeschrittenes Projekt zu immersivem Game-Audio. Im Mittelpunkt stand die Frage, wie Klang einen Raum glaubwürdig macht: Atmosphären, räumliche Positionierung, Reaktion auf das Spielgeschehen und die Mischung der einzelnen Ebenen.\n\nUmgesetzt wurde das Ganze in der Unreal Engine. Ziel war es, dass Spielende den Ton nicht nur hören, sondern die Welt durch ihn fühlen.",
    en: "An advanced project on immersive game audio. The focus was on how sound makes a space believable: ambiences, spatial positioning, reacting to gameplay and mixing the individual layers.\n\nIt was implemented in Unreal Engine. The aim was for players not just to hear the audio, but to feel the world through it."
  },
  "Theory 2 Project (HFU)": {
    de: "In diesem Projekt habe ich mich mit der audio-visuellen Wahrnehmung des Menschen beschäftigt: Wie verarbeiten wir Bild und Ton, und wie lässt sich dieses Wissen nutzen, um immersivere Spielerlebnisse zu gestalten?\n\nDie theoretischen Grundlagen wurden anschließend praktisch angewendet und getestet.",
    en: "In this project I explored human audio-visual perception: how we process image and sound, and how this knowledge can be used to design more immersive play experiences.\n\nThe theoretical foundations were then applied and tested in practice."
  },
  "Sound Project 1 (HFU)": {
    de: "Mein erstes Sound-Projekt an der HFU und der Einstieg in immersives Game-Audio. Ich habe die Grundlagen von Sounddesign und der Implementierung in der Unreal Engine kennengelernt.\n\nDas Projekt legte die Basis für meine späteren, komplexeren Audio-Arbeiten.",
    en: "My first sound project at HFU and my introduction to immersive game audio. I learned the fundamentals of sound design and implementation in Unreal Engine.\n\nThe project laid the foundation for my later, more complex audio work."
  },
  "Project 2 (physical game) (HFU)": {
    de: "Bei diesem Projekt ging es um die Entwicklung eines physischen Spiels. Anders als bei digitalen Spielen musste alles greifbar funktionieren: Regeln, Material, Spielfluss und Balancing.\n\nDurch wiederholtes Testen mit echten Spielenden wurde das Konzept Schritt für Schritt verbessert.",
    en: "This project was about developing a physical game. Unlike digital games, everything had to work tangibly: rules, materials, game flow and balancing.\n\nThrough repeated playtesting with real players the concept was improved step by step."
  },
  "Visual 2 Project (HFU)": {
    de: "Ein Projekt zur visuellen Gestaltung. Die Szene liegt als 3D-Modell vor und lässt sich hier direkt im Browser drehen und von allen Seiten betrachten.\n\nSchwerpunkte waren Komposition, Formensprache und Materialien.",
    en: "A project on visual design. The scene is available as a 3D model and can be rotated and viewed from all sides right here in the browser.\n\nThe focus was on composition, shape language and materials."
  },
  "Project 3 Level (HFU)": {
    de: "Ein Ausschnitt aus dem Level meines dritten Projekts an der HFU. Zu sehen ist ein Teil der Spielwelt als 3D-Modell, das du frei drehen und erkunden kannst.\n\nBeim Leveldesign habe ich darauf geachtet, Wegführung, Atmosphäre und Spielbarkeit zu verbinden.",
    en: "A snippet of the level from my third project at HFU. You can see part of the game world as a 3D model that you can freely rotate and explore.\n\nIn the level design I focused on combining guidance, atmosphere and playability."
  }
};
const longHtml = p => {
  const t = (longText[p.title] || {})[lang] || '';
  return t.split(/\n\n+/).filter(Boolean).map(x => `<p>${esc(x)}</p>`).join('');
};
function fillInfo(p) {
  document.getElementById('dtitle').textContent = p.title;
  document.getElementById('dtext').textContent = p.text[lang];
  document.getElementById('dlong').innerHTML = longHtml(p);
  document.getElementById('dtags').innerHTML = p.tags[lang].map(t => `<span>${esc(t)}</span>`).join('');
}

/* ===== Overlay-Medium: 3D / Video / Bildergalerie ===== */
let galleryStep = null;
function pickView(p) {
  const v = p.view || (p.model ? 'model' : p.video ? 'video' : p.images?.length ? 'images' : 'poster');
  if (v === 'model' && !p.model) return 'poster';
  if (v === 'video' && !p.video) return 'poster';
  if (v === 'images' && !p.images?.length) return 'poster';
  return v;
}
function mediaHtml(p) {
  switch (pickView(p)) {
    case 'model':
      return `<model-viewer src="${esc(p.model)}" poster="${esc(p.poster)}" alt="3D: ${esc(p.title)}"
         camera-controls auto-rotate touch-action="pan-y" shadow-intensity="1"
         environment-image="neutral"></model-viewer>`;
    case 'video':
      return `<video src="${esc(p.video)}" poster="${esc(p.poster)}" controls autoplay muted loop playsinline></video>`;
    case 'images':
      return `<div class="gallery"><div class="gstage"><img class="gimg" alt="">
          ${p.images.length > 1 ? `<button class="gnav prev" type="button" aria-label="‹">‹</button><button class="gnav next" type="button" aria-label="›">›</button>` : ''}
        </div>
        <div class="gbar"><span class="gcap"></span>
          <div class="gdots">${p.images.length > 1 ? p.images.map((_, i) => `<button type="button" aria-label="${i + 1}"></button>`).join('') : ''}</div>
        </div></div>`;
    default:
      return p.poster || p.gif ? `<img src="${esc(p.gif || p.poster)}" alt="">` : `<div class="ph">${icon}</div>`;
  }
}
function galleryCaption(item) {
  const c = item.caption;
  return c ? (typeof c === 'string' ? c : c[lang] || '') : '';
}
function initGallery(p) {
  galleryStep = null;
  const g = dmedia.querySelector('.gallery');
  if (!g || pickView(p) !== 'images') return;
  const items = p.images.map(x => typeof x === 'string' ? { src: x } : x);
  const img = g.querySelector('.gimg'), cap = g.querySelector('.gcap');
  const dots = [...g.querySelectorAll('.gdots button')];
  let i = 0;
  const show = n => {
    i = (n + items.length) % items.length;
    img.src = items[i].src;
    img.alt = `${p.title} ${i + 1}/${items.length}`;
    cap.textContent = galleryCaption(items[i]);
    dots.forEach((d, k) => d.setAttribute('aria-current', k === i));
  };
  dots.forEach((d, k) => d.onclick = () => show(k));
  g.querySelector('.prev')?.addEventListener('click', () => show(i - 1));
  g.querySelector('.next')?.addEventListener('click', () => show(i + 1));
  galleryStep = d => items.length > 1 && show(i + d);
  show(0);
}
dlg.addEventListener('keydown', e => {
  if (!galleryStep) return;
  if (e.key === 'ArrowLeft') galleryStep(-1);
  if (e.key === 'ArrowRight') galleryStep(1);
});
function openProject(p) {
  current = p;
  dmedia.innerHTML = mediaHtml(p);
  initGallery(p);
  fillInfo(p);
  dlg.showModal();
}
function closeDlg() { dlg.close(); }
document.getElementById('dclose').onclick = closeDlg;
dlg.addEventListener('click', e => { if (e.target === dlg) closeDlg(); });
dlg.addEventListener('close', () => { dmedia.innerHTML = ''; galleryStep = null; });

function buildFilters() {
  filters.innerHTML = '';
  ['Alle', ...new Set(projects.map(p => p.cat))].forEach(c => {
    const b = document.createElement('button');
    b.textContent = c === 'Alle' ? T().all : categoryLabel(c);
    b.setAttribute('aria-pressed', c === cat);
    b.onclick = () => { cat = c; buildFilters(); render(); };
    filters.appendChild(b);
  });
}

function setLang(l) {
  lang = l;
  try { localStorage.setItem('lang', l); } catch (e) { }
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = T()[el.dataset.i18n]; });
  document.title = T().title;
  const lb = document.getElementById('lang');
  lb.textContent = T().langBtn; lb.setAttribute('aria-label', T().langLabel);
  document.getElementById('theme').setAttribute('aria-label', T().themeLabel);
  document.getElementById('dclose').setAttribute('aria-label', T().close);
  filters.setAttribute('aria-label', T().filter);
  buildFilters(); render();
  if (dlg.open && current) {
    fillInfo(current);
    initGallery(current);
  }
}
document.getElementById('lang').onclick = () => setLang(lang === 'de' ? 'en' : 'de');
setLang(lang);

document.getElementById('yr').textContent = new Date().getFullYear();
document.getElementById('theme').onclick = () => {
  const r = document.documentElement, dark = matchMedia('(prefers-color-scheme:dark)').matches;
  const cur = r.dataset.theme || (dark ? 'dark' : 'light');
  r.dataset.theme = cur === 'dark' ? 'light' : 'dark';
};
