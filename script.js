"use strict";
document.documentElement.classList.add("js");

/* ===== EDIT YOUR CONTENT HERE ===== */
const hobbies = [
  { icon: "🎮", name: "Playing Video Games", text: "I love playing souls like games like Dark Souls and Sekiro." },
  { icon: "🏋️", name: "Running", text: "I enjoy lifting weights for exercise and relaxation." },
  { icon: "🎧", name: "Listening to Music", text: "I like exploring different genres and discovering new artists. Sabrina Carpenter is on top though!" },
  { icon: "📖", name: "Reading", text: "I love getting lost in a good book and exploring different worlds." }
];

const skills = [
  { group: "Frontend", items: [
    { icon: "🌐", name: "HTML/CSS", text: "Structure and style web pages", tag: "[TAG]" },
    { icon: "🎨", name: "JavaScript", text: "Add interactivity and dynamic behavior to websites", tag: "[TAG]" }] },
  { group: "Mobile", items: [
    { icon: "📱", name: "Flutter", text: "Build natively compiled applications for mobile, web, and desktop", tag: "[TAG]" },
    { icon: "🧩", name: "Dart", text: "Programming language for building mobile, web, and desktop applications", tag: "[TAG]" }] },
  { group: "Backend / Database", items: [
    { icon: "🗄️", name: "Python", text: "General-purpose programming language for web development and data analysis", tag: "[TAG]" }] },
  { group: "Tools", items: [
    { icon: "🛠️", name: "Git", text: "Version control system for tracking changes in source code", tag: "[TAG]" }] }
];

const languages = [
  { short: "[L1]", name: "Python", use: "Web development, data analysis" },
  { short: "[L2]", name: "JavaScript", use: "Frontend and backend development" },
  { short: "[L3]", name: "Dart", use: "Mobile app development with Flutter" }
];

/* embed: true shows a live iframe in the modal (the project's host must allow framing).
   device: "phone" shows the screenshot in a phone frame, otherwise a browser frame. */
const projects = [
  { title: "Student Profile Card", category: "School activity · DOM events",
    description: "A profile card that reacts to a click, a double click and live typing. Type a name to update the card instantly.",
    image: "assets/projects/profile-card.png", technologies: ["HTML", "CSS", "JavaScript"],
    projectUrl: "assets/projects/profile-card/index.html", githubUrl: "", embed: true, device: "browser", year: 2026 },
  { title: "Async Dashboard Loader", category: "School activity · Promises",
    description: "Press Load and three Promises (profile, grades, schedule) resolve together before the dashboard reports ready.",
    image: "assets/projects/async-dashboard.png", technologies: ["HTML", "JavaScript", "Promises"],
    projectUrl: "assets/projects/async-dashboard/index.html", githubUrl: "", embed: true, device: "browser", year: 2026 },
  { title: "DOM Sample", category: "School activity · DOM manipulation",
    description: "A playground for selecting and changing elements: swap titles, colors and images, and try click, double click, hover and input events.",
    image: "assets/projects/dom-sample.png", technologies: ["HTML", "JavaScript", "DOM"],
    projectUrl: "assets/projects/dom-sample/index.html", githubUrl: "", embed: true, device: "browser", year: 2026 }
];

const likes = [
  ["Favorite game", "Sekiro, Elden Ring, Dark Souls"], ["Favorite music", "Sabrina Carpenter, Aurora, Yaelokre, Sawyer Hills, The Weeknd"], ["Favorite book", "Any Cultivation Novel"],
  ["Favorite food", "Adobo, Sisig, Any Protein"], ["Favorite sport", "Weights and Running"],
  ["Favorite technology", "JavaScript, Python"], ["Favorite movie", "Bridge of Terrabithia, some Marvel movies, The Hunger Games"], ["Favorite color", "Black, White, Blue, Red"],["Favorite animal", "Hamster"]
];
/* ===== END CONTENT ===== */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const isLive = u => !!u && u !== "#";

function renderContent() {
  $("#hobbies").append(...hobbies.map(h => el("article", "card glow lift reveal",
    `<span class="ico">${h.icon}</span><h3>${esc(h.name)}</h3><p>${esc(h.text)}</p>`)));

  const sg = $("#skills-grid");
  skills.forEach(g => {
    sg.append(el("p", "group-title", esc(g.group)));
    g.items.forEach(s => sg.append(el("article", "card glow lift reveal",
      `<span class="ico">${s.icon}</span><h3>${esc(s.name)}</h3><p>${esc(s.text)}</p><span class="tag">${esc(s.tag)}</span>`)));
  });

  $("#langs").append(...languages.map(l => el("article", "card glow lift lang reveal",
    `<b>${esc(l.short)}</b><h3>${esc(l.name)}</h3><p>${esc(l.use)}</p>`)));

  $("#likes-grid").append(...likes.map(([k, v]) => el("article", "card glow lift reveal",
    `<p>${esc(k)}</p><h3>${esc(v)}</h3>`)));

  const years = [...new Set(projects.map(p => p.year))].sort((a, b) => b - a);
  $("#timeline").append(...years.flatMap(y => [
    el("li", "reveal", `<b>${y}</b>`),
    ...projects.filter(p => p.year === y).map(p => el("li", "reveal", `<b>${esc(p.title)}</b><br><span class="muted">${esc(p.category)}</span>`))
  ]));
}

function shotHTML(p) {
  const img = `<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy" onerror="this.remove()">`;
  return p.device === "phone"
    ? `<div class="shot phone">${img}</div>`
    : `<div class="shot"><div class="bar">● ● ●</div>${img}</div>`;
}

function initNavigation() {
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const links = $$(".links a");
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => io.observe(s));
}

function initMobileMenu() {
  const b = $("#burger"), l = $("#links");
  const set = open => { l.classList.toggle("open", open); b.setAttribute("aria-expanded", open); b.textContent = open ? "✕" : "☰"; };
  b.addEventListener("click", () => set(!l.classList.contains("open")));
  l.addEventListener("click", e => { if (e.target.closest("a")) set(false); });
  addEventListener("keydown", e => { if (e.key === "Escape") set(false); });
}

function initTheme() {
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  root.dataset.theme = saved || "dark";
  $("#theme").addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}

function initScrollReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  $$(".reveal").forEach(n => io.observe(n));
}

let openProject = () => {};
function initProjects() {
  const grid = $("#project-grid");
  projects.forEach((p, i) => {
    const card = el("button", "card glow lift reveal",
      `${shotHTML(p)}<h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>
       <span>${p.technologies.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</span>
       <span class="link">View project →</span>`);
    card.type = "button";
    card.setAttribute("aria-label", `View project: ${p.title}`);
    card.addEventListener("click", () => openProject(i, card));
    grid.append(card);
  });
}

function initProjectModal() {
  const m = $("#modal");
  let opener = null;
  const close = () => {
    m.classList.remove("open"); document.body.classList.remove("lock");
    $("#m-frame").innerHTML = "";
    setTimeout(() => { m.hidden = true; opener && opener.focus(); }, 250);
  };
  openProject = (i, trigger) => {
    const p = projects[i]; opener = trigger;
    $("#m-cat").textContent = p.category;
    $("#m-title").textContent = p.title;
    $("#m-desc").textContent = p.description;
    $("#m-tags").innerHTML = p.technologies.map(t => `<span class="tag">${esc(t)}</span>`).join("");
    $("#m-frame").innerHTML = p.embed && isLive(p.projectUrl)
      ? `<iframe src="${esc(p.projectUrl)}" title="${esc(p.title)} preview" loading="lazy"></iframe>` : shotHTML(p);
    [["#m-open", p.projectUrl], ["#m-git", p.githubUrl]].forEach(([s, u]) => {
      const a = $(s);
      if (isLive(u)) { a.href = u; a.hidden = false; } else { a.removeAttribute("href"); a.hidden = true; }
    });
    m.hidden = false; document.body.classList.add("lock");
    requestAnimationFrame(() => { m.classList.add("open"); $("#m-close").focus(); });
  };
  $("#m-close").addEventListener("click", close);
  m.addEventListener("click", e => { if (e.target === m) close(); });
  addEventListener("keydown", e => { if (e.key === "Escape" && !m.hidden) close(); });
}

function initCursor() {
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  if (!fine || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const c = $(".cursor"); c.classList.add("on");
  addEventListener("pointermove", e => {
    c.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    c.classList.toggle("big", !!e.target.closest("a,button,.card"));
  }, { passive: true });
}

function initCardGlow() {
  document.addEventListener("pointermove", e => {
    const card = e.target.closest(".glow");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", e.clientX - r.left + "px");
    card.style.setProperty("--mouse-y", e.clientY - r.top + "px");
  }, { passive: true });
}

function initCopyEmail() {
  const btn = $("#copy-email"), toast = $("#toast");
  const show = msg => { toast.textContent = msg; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2200); };
  btn.addEventListener("click", async () => {
    const email = btn.dataset.email;
    try { await navigator.clipboard.writeText(email); show("✓ Email copied"); }
    catch (e) { location.href = "mailto:" + email; }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderContent();
  initNavigation();
  initMobileMenu();
  initTheme();
  initProjects();
  initScrollReveal();
  initProjectModal();
  initCursor();
  initCardGlow();
  initCopyEmail();
});
