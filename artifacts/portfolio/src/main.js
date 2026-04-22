// =========================================
// Portfolio — vanilla JS interactions
// =========================================

// ---------- Data ----------
const skills = [
  { name: 'JavaScript', cat: 'Language', icon: 'JS', color: '#f7df1e' },
  { name: 'TypeScript', cat: 'Language', icon: 'TS', color: '#3178c6' },
  { name: 'React', cat: 'Framework', icon: '⚛', color: '#61dafb' },
  { name: 'Vue', cat: 'Framework', icon: 'V', color: '#42b883' },
  { name: 'Next.js', cat: 'Framework', icon: 'N', color: '#ffffff' },
  { name: 'Node.js', cat: 'Runtime', icon: 'N', color: '#339933' },
  { name: 'GSAP', cat: 'Animation', icon: '∿', color: '#88ce02' },
  { name: 'Three.js', cat: '3D', icon: '◢', color: '#ffffff' },
  { name: 'Tailwind', cat: 'Styling', icon: '~', color: '#38bdf8' },
  { name: 'Figma', cat: 'Design', icon: '◇', color: '#f24e1e' },
  { name: 'Webflow', cat: 'No-code', icon: 'W', color: '#4353ff' },
  { name: 'Git', cat: 'Tooling', icon: '⎇', color: '#f05033' },
];

const projects = [
  {
    name: 'Lumen Studio',
    desc: 'A bespoke portfolio site for an indie photo studio in Porto, with scroll-jacked galleries and a custom WebGL transition.',
    year: '2025',
    role: 'Design + Dev',
    tags: ['Next.js', 'GSAP', 'WebGL'],
    bg: 'linear-gradient(135deg, #ff5c39, #ffb347)',
    initials: 'LS',
  },
  {
    name: 'Drift Audio',
    desc: 'E-commerce experience for a boutique headphone brand. Product configurator, 3D previews, Stripe checkout.',
    year: '2024',
    role: 'Lead Frontend',
    tags: ['React', 'Three.js', 'Stripe'],
    bg: 'linear-gradient(135deg, #d8ff3c, #88ce02)',
    initials: 'DA',
  },
  {
    name: 'Folio CMS',
    desc: 'A self-hosted content tool for designers who refuse to wrestle with WordPress. Open source, 4k+ stars on GitHub.',
    year: '2024',
    role: 'Founder',
    tags: ['TypeScript', 'Node', 'Postgres'],
    bg: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
    initials: 'FC',
  },
  {
    name: 'North Coast',
    desc: 'A non-profit microsite documenting coastal erosion in northern Portugal. Editorial layout, data visualisations, multilingual.',
    year: '2023',
    role: 'Design + Dev',
    tags: ['Astro', 'D3', 'i18n'],
    bg: 'linear-gradient(135deg, #00b8d9, #0984e3)',
    initials: 'NC',
  },
];

const socials = [
  {
    name: 'GitHub', href: 'https://github.com',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.8-1.4-3.8-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.7 2.7 1.2 3.4.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
  },
  {
    name: 'Twitter', href: 'https://twitter.com',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  },
  {
    name: 'LinkedIn', href: 'https://linkedin.com',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>',
  },
  {
    name: 'Dribbble', href: 'https://dribbble.com',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.616c1.146 1.405 1.847 3.18 1.892 5.121-2.785-.535-5.518-.535-7.95-.16-.226-.535-.475-1.07-.74-1.605 2.74-1.103 4.95-2.55 6.798-3.356zM12 3.99c2.265 0 4.346.831 5.95 2.205-1.722.756-3.785 2.077-6.371 3.097a39.5 39.5 0 00-3.78-5.86c1.32-.275 2.733-.275 4.201.558zM5.872 5.207c1.305 1.61 2.505 3.297 3.628 5.061C6.21 11.43 3.43 11.945 1.992 12.18c.318-2.835 1.83-5.318 3.88-6.973zm-3.69 8.97c1.605-.32 4.69-.91 8.252-2.232.215.535.43 1.07.62 1.605-3.65 1.21-6.62 3.78-7.96 5.105-.535-1.35-.83-2.785-.91-4.478zm2.355 6.11c1.16-1.21 3.81-3.585 7.198-4.69 1.166 3.297 1.69 6.045 1.892 7.156a8.013 8.013 0 01-9.09-2.466zm10.886 1.83c-.16-.943-.66-3.42-1.706-6.45 2.35-.375 4.84-.105 6.62.16-.32 2.62-1.78 4.95-4.914 6.29z"/></svg>',
  },
  {
    name: 'Instagram', href: 'https://instagram.com',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58 0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33 0 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C0 8.33 0 8.74 0 12s0 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 24 8.74 24 12 24s3.67 0 4.95-.07c4.36-.2 6.78-2.62 6.98-6.98C24 15.67 24 15.26 24 12s0-3.67-.07-4.95C23.74 2.7 21.32.27 16.95.07 15.67 0 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.85a1.44 1.44 0 101.44 1.44 1.44 1.44 0 00-1.44-1.44z"/></svg>',
  },
];

// ---------- Render: Skills ----------
const skillsGrid = document.querySelector('.skills__grid');
skills.forEach((s, i) => {
  const el = document.createElement('div');
  el.className = 'skill reveal';
  el.dataset.reveal = '';
  el.style.transitionDelay = `${(i % 6) * 60}ms`;
  el.dataset.cursor = 'card';
  el.innerHTML = `
    <div class="skill__icon" style="color:${s.color}">${s.icon}</div>
    <div class="skill__name">${s.name}</div>
    <div class="skill__cat">${s.cat}</div>
  `;
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
  skillsGrid.appendChild(el);
});

// ---------- Render: Projects ----------
const projectsGrid = document.querySelector('.projects__grid');
projects.forEach((p) => {
  const el = document.createElement('article');
  el.className = 'project reveal';
  el.dataset.reveal = '';
  el.dataset.cursor = 'card';
  el.innerHTML = `
    <div class="project__visual" style="background:${p.bg}">${p.initials}</div>
    <div class="project__body">
      <div class="project__meta"><span>${p.role}</span><span>${p.year}</span></div>
      <h3 class="project__name">${p.name}</h3>
      <p class="project__desc">${p.desc}</p>
      <div class="project__tags">
        ${p.tags.map(t => `<span class="project__tag">${t}</span>`).join('')}
      </div>
    </div>
  `;
  projectsGrid.appendChild(el);
});

// ---------- Render: Socials ----------
const socialsList = document.querySelector('.socials');
socials.forEach((s) => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="${s.href}" target="_blank" rel="noopener" data-cursor="button">${s.icon}<span>${s.name}</span></a>`;
  socialsList.appendChild(li);
});

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('[data-reveal]').forEach((el) => {
  if (el.classList.contains('reveal-line')) {
    el.classList.add('reveal-line');
  }
  io.observe(el);
});

// Hero lines fire after a beat
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal-line, .hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('is-in'), 120 + i * 120);
  });
});

// ---------- Counter animation ----------
const counters = document.querySelectorAll('[data-count]');
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.4 });
counters.forEach((c) => counterIO.observe(c));

// ---------- Custom cursor ----------
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = window.innerWidth / 2, my = window.innerHeight / 2;
let rx = mx, ry = my;

window.addEventListener('mousemove', (e) => {
  mx = e.clientX; my = e.clientY;
  dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
});

const loop = () => {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
  requestAnimationFrame(loop);
};
loop();

document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    ring.classList.add('is-hover');
    dot.classList.add('is-hover');
  });
  el.addEventListener('mouseleave', () => {
    ring.classList.remove('is-hover');
    dot.classList.remove('is-hover');
  });
});

// ---------- Theme toggle ----------
const themeToggle = document.getElementById('themeToggle');
const STORAGE_KEY = 'portfolio-theme';
const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  themeToggle?.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
};
const stored = localStorage.getItem(STORAGE_KEY);
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
applyTheme(stored || (prefersLight ? 'light' : 'dark'));
themeToggle?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
});

// ---------- Hero parallax on grid ----------
const grid = document.querySelector('.hero__grid');
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  if (grid) grid.style.transform = `translate(${x}px, ${y}px)`;
});
