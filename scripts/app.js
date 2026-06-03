/* =========================================================
   app.js — orchestrateur : modes, vues, routing, raccourcis
   Modes : home (par défaut) · simple · advanced
   ========================================================= */
(function () {
  const VIEWS = ["home","simple","mindmap","parcours","compare","liste"];
  const ADVANCED_VIEWS = ["mindmap","parcours","compare","liste"];

  const state = {
    mode: "home",
    view: "home",
    filters: new Set(["maternelle","elementaire","college","lycee"])
  };

  const viewEls = {};
  VIEWS.forEach(v => viewEls[v] = document.getElementById("view-" + v));
  const tabs = document.querySelectorAll('.view-switch button[data-view]');
  const header = document.querySelector(".app-header");
  const modeBtns = document.querySelectorAll(".mode-btn");

  function setMode(mode) {
    state.mode = mode;
    header.setAttribute("data-mode", mode);

    modeBtns.forEach(b => b.classList.toggle("is-active", b.getAttribute("data-mode") === mode));

    if (mode === "home") {
      showView("home");
      history.replaceState(null, "", "#home");
    } else if (mode === "simple") {
      showView("simple");
      window.Simple && window.Simple.render();
      history.replaceState(null, "", "#simple");
    } else if (mode === "advanced") {
      showView(state.view && ADVANCED_VIEWS.includes(state.view) ? state.view : "mindmap");
      history.replaceState(null, "", "#" + (ADVANCED_VIEWS.includes(state.view) ? state.view : "mindmap"));
    }
  }

  function showView(v) {
    state.view = v;
    VIEWS.forEach(k => viewEls[k].hidden = (k !== v));
    tabs.forEach(t => {
      t.setAttribute("aria-selected", t.getAttribute("data-view") === v ? "true" : "false");
    });
    renderCurrent();
  }

  function switchView(v) {
    if (!ADVANCED_VIEWS.includes(v)) return;
    state.mode = "advanced";
    header.setAttribute("data-mode", "advanced");
    modeBtns.forEach(b => b.classList.toggle("is-active", b.getAttribute("data-mode") === "advanced"));
    showView(v);
    history.replaceState(null, "", "#" + v);
  }

  function renderCurrent() {
    const v = state.view;
    if (v === "home")     window.Home     && window.Home.render();
    if (v === "simple")   window.Simple   && window.Simple.render();
    if (v === "mindmap")  window.Mindmap  && window.Mindmap.render(state.filters);
    if (v === "parcours") window.Parcours && window.Parcours.render();
    if (v === "compare")  window.Compare  && window.Compare.render(state.filters);
    if (v === "liste")    window.Liste    && window.Liste.render(state.filters);
  }

  function openDetails(id) {
    window.Details && window.Details.open(id);
    history.replaceState(null, "", "#fiche=" + id);
  }

  function parseHash() {
    const h = (location.hash || "").replace(/^#/, "");
    if (!h) return { mode: "home" };
    if (h.startsWith("fiche=")) return { id: h.slice(6) };
    if (h === "home") return { mode: "home" };
    if (h === "simple") return { mode: "simple" };
    if (h === "advanced") return { mode: "advanced" };
    if (h.startsWith("simple/")) return { mode: "simple", scenario: h.slice(7) };
    if (ADVANCED_VIEWS.includes(h)) return { mode: "advanced", view: h };
    return { mode: "home" };
  }

  // Tabs (vue avancée)
  tabs.forEach(t => {
    t.addEventListener("click", () => switchView(t.getAttribute("data-view")));
  });

  // Boutons de mode
  modeBtns.forEach(b => {
    b.addEventListener("click", () => setMode(b.getAttribute("data-mode")));
  });

  // Lien brand → home
  document.getElementById("brand-link").addEventListener("click", e => {
    e.preventDefault();
    setMode("home");
  });

  // Filtres degré
  document.querySelectorAll('.filter-group input[type=checkbox]').forEach(cb => {
    cb.addEventListener("change", () => {
      state.filters.clear();
      document.querySelectorAll('.filter-group input:checked').forEach(x => state.filters.add(x.value));
      renderCurrent();
    });
  });

  // Imprimer
  document.getElementById("print-btn").addEventListener("click", () => {
    const previousMode = state.mode;
    const previousView = state.view;
    setMode("advanced");
    switchView("liste");
    setTimeout(() => {
      viewEls.liste.querySelectorAll("details").forEach(d => d.open = true);
      window.print();
      setTimeout(() => {
        if (previousMode !== "advanced") setMode(previousMode);
        else switchView(previousView);
      }, 200);
    }, 200);
  });

  // Aide
  const helpDialog = document.getElementById("help-dialog");
  document.getElementById("help-btn").addEventListener("click", () => helpDialog.showModal());
  helpDialog.querySelector('button[aria-label="Fermer"]').addEventListener("click", () => helpDialog.close());

  // Raccourcis 1-4 (uniquement en mode avancé)
  document.addEventListener("keydown", e => {
    if (e.target.matches("input, textarea, [contenteditable]")) return;
    if (e.target.closest("dialog")) return;
    const idx = parseInt(e.key, 10);
    if (idx >= 1 && idx <= ADVANCED_VIEWS.length && state.mode === "advanced") {
      switchView(ADVANCED_VIEWS[idx - 1]);
    }
    if (e.key === "?") {
      helpDialog.showModal();
    }
    if (e.key.toLowerCase() === "h" && !e.ctrlKey && !e.metaKey) {
      // Raccourci H = home
      setMode("home");
    }
  });

  // Routing
  window.addEventListener("hashchange", routeFromHash);

  function routeFromHash() {
    const p = parseHash();
    if (p.id) {
      // Lien direct vers une fiche → mode avancé + ouverture
      if (state.mode === "home") setMode("advanced");
      openDetails(p.id);
      return;
    }
    if (p.mode === "simple" && p.scenario) {
      state.mode = "simple";
      header.setAttribute("data-mode", "simple");
      modeBtns.forEach(b => b.classList.toggle("is-active", b.getAttribute("data-mode") === "simple"));
      showView("simple");
      window.Simple && window.Simple.render(p.scenario);
      return;
    }
    if (p.mode === "advanced" && p.view) {
      switchView(p.view);
      return;
    }
    if (p.mode) setMode(p.mode);
  }

  // API
  window.App = {
    setMode,
    switchView,
    openDetails,
    renderMindmap: () => window.Mindmap && window.Mindmap.render(state.filters),
    getFilters: () => state.filters,
    state
  };

  // Synchronise la date de dernière mise à jour avec DATA.meta.lastUpdate
  const updateEl = document.getElementById("footer-last-update");
  if (updateEl && DATA.meta && DATA.meta.lastUpdate) {
    updateEl.textContent = DATA.meta.lastUpdate;
  }

  // Boot
  routeFromHash();
})();
