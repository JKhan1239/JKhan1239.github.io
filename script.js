/* =========================================================
   Junaid Khan — Portfolio behaviour
   Content lives in data.js; this file only renders + animates it.
   ========================================================= */
(function () {
  "use strict";
  var D = window.PORTFOLIO;
  var C = D.config;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Icons (inline SVG, no library) ---------- */
  var P = {
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.5 3.3 6.7 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
    up: '<path d="m18 15-6-6-6 6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    server: '<rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01M6 17h.01"/>',
    plug: '<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 0 1 0 9z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    "arrow-right": '<path d="M5 12h14M12 5l7 7-7 7"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    send: '<path d="m22 2-11 11M22 2l-7 20-4-9-9-4z"/>',
    star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
    fork: '<circle cx="6" cy="4" r="2"/><circle cx="18" cy="4" r="2"/><circle cx="12" cy="20" r="2"/><path d="M6 6v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6M12 12v6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    repo: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>'
  };
  var FILLED = { linkedin: 1 };
  function icon(name) {
    var fill = FILLED[name] ? "currentColor" : "none";
    return '<svg viewBox="0 0 24 24" fill="' + fill + '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (P[name] || "") + "</svg>";
  }
  function paintIcons(root) {
    $$("[data-icon]", root).forEach(function (el) { if (!el.firstChild) el.innerHTML = icon(el.dataset.icon); });
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function isPlaceholder(u) { return !u || u === "#"; }

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("show"); }, 3200);
  }

  /* ---------- Links (social + resume) ---------- */
  function wireLinks() {
    var map = { github: C.github, linkedin: C.linkedin, email: "mailto:" + C.email, phone: "tel:" + C.phone.replace(/[^\d+]/g, "") };
    $$("[data-social]").forEach(function (a) {
      var key = a.dataset.social, url = map[key];
      if (key === "github" || key === "linkedin") {
        if (isPlaceholder(url)) {
          a.setAttribute("href", "#"); a.removeAttribute("target");
          a.setAttribute("aria-label", (a.getAttribute("aria-label") || key) + " (link not set yet)");
          a.addEventListener("click", function (e) { e.preventDefault(); toast("Add your " + (key === "github" ? "GitHub" : "LinkedIn") + " URL in data.js (config)."); });
          return;
        }
      }
      a.setAttribute("href", url);
    });
    $$("[data-resume]").forEach(function (a) {
      a.setAttribute("href", C.resumePath);
      a.setAttribute("download", "");
    });
    $("#c-email").textContent = C.email; $("#c-phone").textContent = C.phone;
  }

  /* ---------- Theme ---------- */
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("theme", t); } catch (e) {}
    var b = $("#theme-toggle");
    b.innerHTML = icon(t === "dark" ? "sun" : "moon");
    b.setAttribute("aria-label", "Switch to " + (t === "dark" ? "light" : "dark") + " theme");
    var m = $('meta[name="theme-color"]'); if (m) m.content = t === "dark" ? "#070b18" : "#f3f6ff";
  }
  function initTheme() {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
    $("#theme-toggle").addEventListener("click", function () {
      setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    var btn = $("#menu-btn"), nav = $("#primary-nav");
    btn.innerHTML = icon("menu");
    function close() { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-label", "Open menu"); btn.innerHTML = icon("menu"); }
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open); btn.setAttribute("aria-label", open ? "Close menu" : "Open menu"); btn.innerHTML = icon(open ? "x" : "menu");
    });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { close(); btn.focus(); } });
    window.matchMedia("(min-width: 901px)").addEventListener("change", close);
  }

  /* ---------- Scroll effects: nav state, progress, back-to-top, active link ---------- */
  function initScroll() {
    var nav = $("#nav"), bar = $("#progress"), top = $("#to-top");
    top.innerHTML = icon("up"); top.hidden = false;
    top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); });
    var ticking = false;
    function update() {
      var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
      nav.classList.toggle("scrolled", y > 12);
      bar.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
      top.classList.toggle("show", y > 600);
      ticking = false;
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();

    var links = $$("a[data-link]"), ids = links.map(function (a) { return a.getAttribute("href").slice(1); });
    var secs = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) {
            var on = a.getAttribute("href") === "#" + en.target.id;
            a.classList.toggle("active", on);
            if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secs.forEach(function (s) { io.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealIO;
  function reveal(root) {
    var els = $$(".reveal:not(.in), .timeline:not(.in), .section-head:not(.in)", root);
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); revealIO.unobserve(en.target); var c = en.target.dataset.count; if (c) countUp(en.target, +c); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    els.forEach(function (el, i) {
      if (!el.style.getPropertyValue("--d")) el.style.setProperty("--d", (i % 4) * 90 + "ms");
      revealIO.observe(el);
    });
  }
  function countUp(el, to) {
    if (reduceMotion) return;
    var suffix = el.dataset.suffix || "", start = performance.now(), dur = 1200;
    (function tick(now) {
      var p = Math.min((now - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * e) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }

  /* ---------- Card spotlight (cursor glow) ---------- */
  function initSpotlight() {
    document.addEventListener("pointermove", function (e) {
      var card = e.target.closest && e.target.closest(".card");
      if (!card) return;
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    }, { passive: true });
  }

  /* ---------- 3D tilt on project cards ---------- */
  function tilt(card) {
    if (reduceMotion || !window.matchMedia("(hover: hover)").matches) return;
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = "rotateX(" + (-y * 7).toFixed(2) + "deg) rotateY(" + (x * 9).toFixed(2) + "deg) translateY(-6px)";
    });
    card.addEventListener("pointerleave", function () { card.style.transform = ""; });
    card.addEventListener("pointerenter", function () { card.classList.add("tilt"); });
  }

  /* ---------- Hero: typed text + floating tech ---------- */
  function initHero() {
    var el = $("#typed"), words = D.roles, wi = 0, ci = 0, del = false;
    if (reduceMotion) { el.textContent = words[0]; }
    else (function type() {
      var w = words[wi];
      el.textContent = w.slice(0, ci);
      if (!del && ci === w.length) { del = true; return setTimeout(type, 1700); }
      if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; return setTimeout(type, 350); }
      ci += del ? -1 : 1;
      setTimeout(type, del ? 28 : 65);
    })();

    var wrap = $("#tech-float"), n = D.heroTech.length;
    D.heroTech.forEach(function (t, i) {
      var a = (i / n) * Math.PI * 2 - Math.PI / 2, rx = i % 2 ? 42 : 30, ry = rx;
      var chip = document.createElement("span");
      chip.className = "tech-chip"; chip.textContent = t;
      chip.style.setProperty("--x", (Math.cos(a) * rx).toFixed(1) + "%");
      chip.style.setProperty("--y", (Math.sin(a) * ry * 0.9).toFixed(1) + "%");
      chip.style.setProperty("--delay", (-i * 0.7).toFixed(1) + "s");
      wrap.appendChild(chip);
    });

    // gentle parallax on the visual
    var vis = $(".orbit-wrap");
    if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
      $(".hero").addEventListener("pointermove", function (e) {
        var x = (e.clientX / window.innerWidth - 0.5) * 14, y = (e.clientY / window.innerHeight - 0.5) * 14;
        vis.style.transform = "translate(" + x + "px," + y + "px)";
      });
      vis.style.transition = "transform .4s ease-out";
    }
  }

  /* ---------- What I do ---------- */
  function renderDo() {
    $("#what-i-do").innerHTML = D.whatIDo.map(function (d, i) {
      return '<article class="card do-card reveal" style="--d:' + (i % 3) * 90 + 'ms"><div class="do-ico">' + icon(d.icon) + "</div><h4>" + esc(d.title) + "</h4><p>" + esc(d.text) + "</p></article>";
    }).join("");
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    var f = $("#skill-filters"), g = $("#skills-grid"), active = "All";
    f.innerHTML = D.skillFilters.map(function (n) { return '<button type="button" class="chip" aria-pressed="' + (n === "All") + '" data-f="' + n + '">' + n + "</button>"; }).join("");
    function draw() {
      var groups = D.skills.filter(function (s) { return active === "All" || s.filter === active; });
      g.innerHTML = groups.map(function (s, gi) {
        return '<article class="card skill-group" style="--d:' + gi * 70 + 'ms"><h3>' + esc(s.group) + "<small>" + s.items.length + '</small></h3><ul class="badges">' +
          s.items.map(function (it, i) { return '<li class="badge" style="--d:' + (gi * 70 + i * 35) + 'ms">' + esc(it) + "</li>"; }).join("") + "</ul></article>";
      }).join("");
    }
    f.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      active = b.dataset.f;
      $$("button", f).forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      draw();
    });
    draw();
  }

  /* ---------- Experience timeline ---------- */
  var PREVIEW = 4;
  function renderExperience() {
    var tl = $("#timeline");
    tl.innerHTML = D.experience.map(function (x, i) {
      var id = "exp-" + i, hasMore = x.responsibilities.length > PREVIEW;
      return '<li class="tl-item reveal' + (i === 0 ? " open" : "") + '" style="--d:' + i * 80 + 'ms">' +
        '<div class="card tl-card">' +
        '<button class="tl-head" type="button" aria-expanded="' + (i === 0) + '" aria-controls="' + id + '">' +
        "<div><h3>" + esc(x.company) + '</h3><p class="role">' + esc(x.role) + "</p>" +
        '<div class="tl-meta"><span>' + icon("pin") + esc(x.location) + "</span><span>" + icon("clock") + esc(x.dates) + "</span></div></div>" +
        '<span class="chev">' + icon("chevron") + "</span></button>" +
        '<div class="tl-preview">' + x.highlights.slice(0, 4).map(function (h) { return '<span class="badge sm">' + esc(h) + "</span>"; }).join("") + "</div>" +
        '<div class="acc" id="' + id + '" role="region" aria-label="' + esc(x.company) + ' details"><div class="acc-inner"><div class="tl-body">' +
        '<h4>Project</h4><p class="tl-project">' + esc(x.project) + "</p>" +
        '<h4>Project Description</h4><p class="desc">' + esc(x.description) + "</p>" +
        '<h4>Technology Stack</h4><ul class="badges">' + x.stack.map(function (t) { return '<li class="badge sm">' + esc(t) + "</li>"; }).join("") + "</ul>" +
        '<h4>Key Responsibilities</h4><ul class="resp">' + x.responsibilities.slice(0, PREVIEW).map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>" +
        (hasMore ? '<div class="acc" id="' + id + '-more"><div class="acc-inner"><ul class="resp" style="margin-top:.6rem">' + x.responsibilities.slice(PREVIEW).map(function (r) { return '<li class="extra">' + esc(r) + "</li>"; }).join("") + "</ul></div></div>" +
          '<button type="button" class="more-btn" aria-expanded="false" aria-controls="' + id + '-more"><span>View Responsibilities (' + x.responsibilities.length + ")</span>" + icon("chevron") + "</button>" : "") +
        "</div></div></div></div></li>";
    }).join("");

    tl.addEventListener("click", function (e) {
      var head = e.target.closest(".tl-head"), more = e.target.closest(".more-btn");
      if (head) {
        var item = head.closest(".tl-item"), open = item.classList.toggle("open");
        head.setAttribute("aria-expanded", open);
      } else if (more) {
        var box = document.getElementById(more.getAttribute("aria-controls")), on = !box.classList.contains("open");
        box.classList.toggle("open", on); more.setAttribute("aria-expanded", on);
        var total = more.closest(".tl-body").querySelectorAll(".resp li").length;
        more.firstElementChild.textContent = on ? "Show fewer" : "View Responsibilities (" + total + ")";
      }
    });
  }

  /* ---------- Projects ---------- */
  var pFilter = "All", pQuery = "";
  function renderProjectFilters() {
    var f = $("#project-filters");
    f.innerHTML = D.projectFilters.map(function (n) { return '<button type="button" class="chip" aria-pressed="' + (n === "All") + '" data-f="' + n + '">' + n + "</button>"; }).join("");
    f.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      pFilter = b.dataset.f;
      $$("button", f).forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      drawProjects();
    });
    var t; $("#project-search").addEventListener("input", function (e) { clearTimeout(t); t = setTimeout(function () { pQuery = e.target.value.trim().toLowerCase(); drawProjects(); }, 120); });
  }
  function linkBtn(href, label, ic, cls) {
    var ph = isPlaceholder(href);
    return '<a class="btn ' + cls + ' btn-sm" href="' + (ph ? "#" : esc(href)) + '"' + (ph ? ' data-ph="' + label + '" aria-disabled="true" title="Link not set yet"' : ' target="_blank" rel="noopener noreferrer"') + ">" + icon(ic) + "<span>" + label + "</span></a>";
  }
  function drawProjects() {
    var g = $("#projects-grid");
    var list = D.projects.filter(function (p) {
      var okF = pFilter === "All" || p.tags.indexOf(pFilter) > -1;
      var hay = (p.title + " " + p.short + " " + p.stack.join(" ") + " " + p.features.join(" ")).toLowerCase();
      return okF && (!pQuery || hay.indexOf(pQuery) > -1);
    });
    $("#projects-empty").hidden = list.length > 0;
    g.innerHTML = list.map(function (p, i) {
      return '<article class="card p-card" data-id="' + p.id + '" style="--d:' + i * 80 + 'ms" tabindex="0" role="button" aria-label="Open details for ' + esc(p.title) + '">' +
        '<div class="p-top"><span class="p-num">0' + (D.projects.indexOf(p) + 1) + '</span><span class="p-tag">Sample project</span></div>' +
        "<h3>" + esc(p.title) + "</h3><p>" + esc(p.short) + "</p>" +
        '<ul class="badges">' + p.stack.map(function (t) { return '<li class="badge sm">' + esc(t) + "</li>"; }).join("") + "</ul>" +
        '<ul class="p-feats">' + p.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
        '<div class="p-actions">' + linkBtn(p.demo, "Live Demo", "external", "btn-primary") + linkBtn(p.repo, "GitHub", "github", "btn-outline") +
        '<button class="details" type="button" tabindex="-1" aria-hidden="true">Details ' + icon("arrow-right") + "</button></div></article>";
    }).join("");
    $$(".p-card", g).forEach(tilt);
  }
  function initProjectEvents() {
    var g = $("#projects-grid");
    g.addEventListener("click", function (e) {
      var a = e.target.closest("a.btn");
      if (a) { if (a.dataset.ph) { e.preventDefault(); toast(a.dataset.ph + " link not set yet. Add it in data.js."); } e.stopPropagation(); return; }
      var card = e.target.closest(".p-card"); if (card) openModal(card.dataset.id, card);
    });
    g.addEventListener("keydown", function (e) {
      if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("p-card")) { e.preventDefault(); openModal(e.target.dataset.id, e.target); }
    });
  }

  /* ---------- Project modal ---------- */
  var lastFocus = null;
  function openModal(id, trigger) {
    var p = D.projects.filter(function (x) { return x.id === id; })[0]; if (!p) return;
    lastFocus = trigger || document.activeElement;
    var m = $("#modal"), body = $("#modal-body");
    var sec = function (t, c) { return '<section class="m-sec"><h3>' + t + "</h3>" + c + "</section>"; };
    var list = function (a) { return '<ul class="m-list">' + a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; };
    body.innerHTML =
      '<h2 class="m-title" id="modal-title">' + esc(p.title) + "</h2>" +
      '<p class="m-note">Sample portfolio project · illustrative architecture</p>' +
      '<ul class="badges">' + p.stack.map(function (t) { return '<li class="badge sm">' + esc(t) + "</li>"; }).join("") + "</ul>" +
      sec("Project Overview", "<p>" + esc(p.overview) + "</p>") +
      '<div class="m-cols">' + sec("Problem", "<p>" + esc(p.problem) + "</p>") + sec("Solution", "<p>" + esc(p.solution) + "</p>") + "</div>" +
      sec("Architecture", '<div class="arch" role="list">' + p.arch.map(function (a, i) {
        return (i ? '<div class="arch-arrow" aria-hidden="true"></div>' : "") + '<button type="button" class="arch-node" role="listitem" data-i="' + i + '">' + esc(a[0]) + "</button>";
      }).join("") + '</div><p class="arch-detail" id="arch-detail" aria-live="polite">Hover or select a layer to see what it does.</p>') +
      '<div class="m-cols">' + sec("Technology Stack", list(p.stack)) + sec("Key Features", list(p.features)) + "</div>" +
      '<div class="m-cols">' + sec("Challenges", list(p.challenges)) + sec("Future Improvements", list(p.future)) + "</div>" +
      '<div class="modal-actions">' + linkBtn(p.demo, "Live Demo", "external", "btn-primary") + linkBtn(p.repo, "GitHub", "github", "btn-outline") + "</div>";
    var detail = $("#arch-detail", body), nodes = $$(".arch-node", body);
    function show(n) { nodes.forEach(function (x) { x.classList.toggle("active", x === n); }); detail.textContent = p.arch[+n.dataset.i][1]; }
    nodes.forEach(function (n) { n.addEventListener("mouseenter", function () { show(n); }); n.addEventListener("focus", function () { show(n); }); n.addEventListener("click", function () { show(n); }); });
    body.onclick = function (e) { var a = e.target.closest("a.btn"); if (a && a.dataset.ph) { e.preventDefault(); toast(a.dataset.ph + " link not set yet. Add it in data.js."); } };
    m.hidden = false; document.body.style.overflow = "hidden";
    var panel = $(".modal-panel", m); panel.scrollTop = 0; panel.focus();
  }
  function closeModal() {
    var m = $("#modal"); if (m.hidden) return;
    m.hidden = true; document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function initModal() {
    var m = $("#modal");
    $(".modal-close", m).innerHTML = icon("x");
    m.addEventListener("click", function (e) { if (e.target.closest("[data-close]")) closeModal(); });
    document.addEventListener("keydown", function (e) {
      if (m.hidden) return;
      if (e.key === "Escape") return closeModal();
      if (e.key === "Tab") { // focus trap
        var f = $$('a[href],button:not([disabled]),[tabindex="0"]', $(".modal-panel", m)).filter(function (x) { return x.offsetParent !== null; });
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === $(".modal-panel", m))) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---------- GitHub repositories (optional) ---------- */
  function initGithub() {
    var user = (C.githubUsername || "").trim();
    if (!user) return; // graceful fallback: featured projects only
    var sec = $("#github-section"), grid = $("#repo-grid");
    fetch("https://api.github.com/users/" + encodeURIComponent(user) + "/repos?sort=updated&per_page=30&type=owner", { headers: { Accept: "application/vnd.github+json" } })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (repos) {
        repos = repos.filter(function (r) { return !r.fork && !r.archived; }).slice(0, C.githubRepoLimit || 6);
        if (!repos.length) return;
        grid.innerHTML = repos.map(function (r, i) {
          return '<a class="card repo reveal" href="' + esc(r.html_url) + '" target="_blank" rel="noopener noreferrer" style="--d:' + i * 70 + 'ms">' +
            "<h4>" + icon("repo") + esc(r.name) + "</h4><p>" + esc(r.description || "No description provided.") + "</p>" +
            '<div class="repo-meta">' + (r.language ? "<span>● " + esc(r.language) + "</span>" : "") +
            "<span>" + icon("star") + r.stargazers_count + "</span><span>" + icon("fork") + r.forks_count + "</span>" +
            "<span>" + icon("clock") + new Date(r.updated_at).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) + "</span></div></a>";
        }).join("");
        sec.hidden = false; reveal(sec);
      })
      .catch(function () { /* fail silently: featured projects remain */ });
  }

  /* ---------- Education ---------- */
  function renderEducation() {
    $("#edu-timeline").innerHTML = D.education.map(function (e, i) {
      return '<li class="card edu-item reveal" style="--d:' + i * 100 + 'ms"><h3>' + esc(e.degree) + '</h3><p class="school">' + esc(e.school) + '</p><p class="place">' + esc(e.place) + "</p></li>";
    }).join("");
  }

  /* ---------- Contact form ---------- */
  function initForm() {
    var form = $("#contact-form"), status = $("#form-status"), btn = $("#send-btn"), label = $("#send-label");
    var rules = {
      name: function (v) { return v.length < 2 ? "Please enter your name." : ""; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Please enter a valid email address."; },
      subject: function (v) { return v.length < 3 ? "Please add a subject." : ""; },
      message: function (v) { return v.length < 10 ? "Please write at least 10 characters." : ""; }
    };
    function check(name) {
      var input = form.elements[name], msg = rules[name](input.value.trim()), field = input.closest(".field");
      field.classList.toggle("invalid", !!msg); input.setAttribute("aria-invalid", !!msg); $("#e-" + name).textContent = msg;
      return !msg;
    }
    Object.keys(rules).forEach(function (n) {
      form.elements[n].addEventListener("blur", function () { check(n); });
      form.elements[n].addEventListener("input", function () { if (form.elements[n].closest(".field").classList.contains("invalid")) check(n); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault(); status.className = "form-status"; status.textContent = "";
      var ok = Object.keys(rules).map(check).every(Boolean);
      if (!ok) { var bad = form.querySelector(".invalid input, .invalid textarea"); if (bad) bad.focus(); return; }
      if (form.elements._gotcha.value) return; // honeypot
      var data = { name: form.elements.name.value.trim(), email: form.elements.email.value.trim(), subject: form.elements.subject.value.trim(), message: form.elements.message.value.trim() };

      if (!C.formEndpoint) { // no endpoint configured: open the visitor's mail app
        var body = encodeURIComponent(data.message + "\n\n— " + data.name + " (" + data.email + ")");
        window.location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent(data.subject) + "&body=" + body;
        status.className = "form-status ok"; status.textContent = "Opening your email app… (no form endpoint configured yet).";
        return;
      }
      btn.disabled = true; label.textContent = "Sending…";
      fetch(C.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error(r.status); form.reset(); status.className = "form-status ok"; status.textContent = "Thanks! Your message was sent. I'll get back to you soon."; })
        .catch(function () { status.className = "form-status bad"; status.textContent = "Sorry, something went wrong. Please email me directly at " + C.email + "."; })
        .then(function () { btn.disabled = false; label.textContent = "Send Message"; });
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderDo(); renderSkills(); renderExperience(); renderProjectFilters(); drawProjects(); renderEducation();
    paintIcons(document); wireLinks();
    initTheme(); initNav(); initScroll(); initSpotlight(); initHero(); initProjectEvents(); initModal(); initForm(); initGithub();
    reveal(document);
  });
})();
