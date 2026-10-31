
const projects = [
  {
    title: "First Time Unreal Engine",
    cat: "School",
    text: { de: "Mein erstes Projekt in der Unreal Engine, entstanden als Schulprojekt.", en: "My first project in Unreal Engine, created as a school project." },
    tags: { de: ["Unreal Engine", "Schulprojekt"], en: ["Unreal Engine", "School project"] },
    poster: "../images/SchoolProject.webp", gif: "", video: "../videos/Project-david.mp4"
  },
  {
    title: "Entry Project (HFU)",
    cat: "Game",
    text: { de: "Mein Einstiegsprojekt an der Hochschule Furtwangen (HFU).", en: "My entry project at Furtwangen University (HFU)." },
    tags: { de: ["HFU", "Studium"], en: ["HFU", "Studies"] },
    poster: "../images/image.png", gif: "", video: "../videos/Cat.mp4"
  },
  {
    title: "Sound Project 2 (HFU)",
    cat: "Audio",
    text: { de: "Fortgeschrittenes Projekt in immersivem Game-Audio.", en: "Advanced project in immersive game audio." },
    tags: { de: ["Sounddesign", "Unreal Engine"], en: ["Sound design", "Unreal Engine"] },
    poster: "../images/Sound2.1.webp", gif: "", video: "../videos/Cat.mp4"
  },
  {
    title: "Sound Project 1 (HFU)",
    cat: "Audio",
    text: { de: "Grundlagen von immersivem Game-Audio.", en: "Basics of immersive game audio." },
    tags: { de: ["Sounddesign", "Unreal Engine"], en: ["Sound design", "Unreal Engine"] },
    poster: "../images/Sound2.2.webp", gif: "", video: "../videos/Cat.mp4"
  },
  {
    title: "Theory 2 Project (HFU)",
    cat: "Game",
    text: { de: "Projekt im Rahmen des Theory 2 Moduls an der Hochschule Furtwangen (HFU).", en: "Project as part of the Theory 2 module at Furtwangen University (HFU)." },
    tags: { de: ["HFU", "Studium"], en: ["HFU", "Studies"] },
    poster: "../images/Theory2.webp", gif: "", video: "../videos/Cat.mp4"
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
    sk2_p: "Basics über die Menschliche Auditive Wahrnehmung, FMOD, UE Mega Sounds",
    sk3_h: "Web",
    sk3_p: "HTML, CSS, JavaScript/TypeScript",
    h_career: "Projekt timeline",
    
    t1_h: "Studium, Hochschule Furtwangen (HFU)",  t1_p: "Einstiegsprojekt und Sound Project (Grundlagen in immersivem Game-Audio).",
    t2_h: "Schule",  t2_p: "Erstes Projekt in der Unreal Engine.",
    t3_h: "Studium, Hochschule Furtwangen (HFU)",  t3_p: "Theory 2 Project (Audio-Visual Perception).",
    t4_h: "Studium, Hochschule Furtwangen (HFU)",  t4_p: "Sound 1 Project (Audio-Visuale Wahrnehmung).",
    t5_h: "Studium, Hochschule Furtwangen (HFU)",  t5_p: "Projekt 2 (Physisches Spiel).",
    h_contact: "Schreib mir.", contact_p: "Du hast eine Frage oder möchtest zusammenarbeiten? Ich freue mich auf deine Nachricht.",
    all: "Alle", cats: { School: "Schule", Game: "Game Projekte", Audio: "Sound Projekte" },
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
    sk1_h: "Game development", sk1_p: "Unreal Engine, Godot Engine", sk2_h: "Audio", sk2_p: "Basics about Human Auditive Perception, FMOD, UE Mega Sounds", sk3_h: "Web", sk3_p: "HTML, CSS, JavaScript/TypeScript",
    h_career: "Project Timeline", t_time: "", 
    t1_h: "Studies, Furtwangen University (HFU)", t1_p: "Entry project.", 
    t2_h: "School", t2_p: "First project in Unreal Engine.",

    t3_h: "Studies, Furtwangen University (HFU)",  t3_p: "Theory 2 Project (Audio-Visual Perception).",
    t4_h: "Studies, Furtwangen University (HFU)", t4_p: "Sound 1 Project.",
    t5_h: "Studies, Furtwangen University (HFU)", t5_p: "Project 2 (Physical game).",
    h_contact: "Get in touch.", contact_p: "Have a question or want to work together? I’d love to hear from you.",
    all: "All", cats: { School: "School", Game: "Game Projects", Audio: "Sound Projects" },
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

function openProject(p) {
  current = p;
  dmedia.innerHTML = p.video
    ? `<video src="${esc(p.video)}" poster="${esc(p.poster)}" controls autoplay muted loop playsinline></video>`
    : (p.gif || p.poster ? `<img src="${esc(p.gif || p.poster)}" alt="">` : `<div class="ph">${icon}</div>`);
  document.getElementById('dtitle').textContent = p.title;
  document.getElementById('dtext').textContent = p.text[lang];
  document.getElementById('dtags').innerHTML = p.tags[lang].map(t => `<span>${esc(t)}</span>`).join('');
  dlg.showModal();
}
function closeDlg() { dlg.close(); }
document.getElementById('dclose').onclick = closeDlg;
dlg.addEventListener('click', e => { if (e.target === dlg) closeDlg(); });
dlg.addEventListener('close', () => { dmedia.innerHTML = ''; });

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
    document.getElementById('dtext').textContent = current.text[lang];
    document.getElementById('dtags').innerHTML = current.tags[lang].map(t => `<span>${esc(t)}</span>`).join('');
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
