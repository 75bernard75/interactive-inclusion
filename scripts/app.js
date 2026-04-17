/* =========================================================
   app.js — orchestrateur : vues, état, routing, raccourcis
   ========================================================= */
(function () {
  const VIEWS = ["mindmap","parcours","compare","liste"];

  const state = {
    view: "mindmap",
    filters: new Set(["maternelle","elementaire","college","lycee"])
  };

  const viewEls = {};
  VIEWS.forEach(v => viewEls[v] = document.getElementById("view-" + v));
  const tabs = document.querySelectorAll('.view-switch button[data-view]');

  function switchView(v) {
    if (!VIEWS.includes(v)) return;
    state.view = v;
    VIEWS.forEach(k => {
      viewEls[k].hidden = (k !== v);
    });
    tabs.forEach(t => {
      t.setAttribute("aria-selected", t.getAttribute("data-view") === v ? "true" : "false");
    });
    renderCurrent();
    const hashId = parseHash().id;
    if (!hashId) history.replaceState(null, "", "#" + v);
  }

  function renderCurrent() {
    if (state.view === "mindmap") window.Mindmap && window.Mindmap.render(state.filters);
    if (state.view === "parcours") window.Parcours && window.Parcours.render();
    if (state.view === "compare")  window.Compare  && window.Compare.render(state.filters);
    if (state.view === "liste")    window.Liste    && window.Liste.render(state.filters);
  }

  function openDetails(id) {
    window.Details && window.Details.open(id);
    history.replaceState(null, "", "#fiche=" + id);
  }

  function parseHash() {
    const h = (location.hash || "").replace(/^#/, "");
    if (!h) return {};
    if (h.startsWith("fiche=")) return { id: h.slice(6) };
    if (VIEWS.includes(h)) return { view: h };
    return {};
  }

  // --- init des contrôles ---
  tabs.forEach(t => {
    t.addEventListener("click", () => switchView(t.getAttribute("data-view")));
  });

  document.querySelectorAll('.filter-group input[type=checkbox]').forEach(cb => {
    cb.addEventListener("change", () => {
      state.filters.clear();
      document.querySelectorAll('.filter-group input:checked').forEach(x => state.filters.add(x.value));
      renderCurrent();
    });
  });

  document.getElementById("print-btn").addEventListener("click", () => {
    const previousView = state.view;
    switchView("liste");
    // Tout déplier avant impression
    setTimeout(() => {
      viewEls.liste.querySelectorAll("details").forEach(d => d.open = true);
      window.print();
      // Restaurer la vue précédente après le dialogue d'impression
      setTimeout(() => switchView(previousView), 200);
    }, 200);
  });

  const helpDialog = document.getElementById("help-dialog");
  document.getElementById("help-btn").addEventListener("click", () => helpDialog.showModal());
  helpDialog.querySelector('button[aria-label="Fermer"]').addEventListener("click", () => helpDialog.close());

  // --- raccourcis 1-4 ---
  document.addEventListener("keydown", e => {
    if (e.target.matches("input, textarea, [contenteditable]")) return;
    if (e.target.closest("dialog")) return;
    const idx = parseInt(e.key, 10);
    if (idx >= 1 && idx <= VIEWS.length) {
      switchView(VIEWS[idx - 1]);
    }
    if (e.key === "?") {
      helpDialog.showModal();
    }
  });

  // --- routing initial ---
  window.addEventListener("hashchange", () => {
    const p = parseHash();
    if (p.view) switchView(p.view);
    if (p.id)   openDetails(p.id);
  });

  // --- API ---
  window.App = {
    switchView,
    openDetails,
    renderMindmap: () => window.Mindmap && window.Mindmap.render(state.filters),
    getFilters: () => state.filters,
    state
  };

  // --- boot ---
  const initial = parseHash();
  switchView(initial.view || "mindmap");
  if (initial.id) openDetails(initial.id);
})();
