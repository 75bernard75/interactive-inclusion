/* =========================================================
   parcours.js — vue chaîne d'escalade (timeline)
   ========================================================= */
(function () {
  const view = document.getElementById("view-parcours");

  function render() {
    view.innerHTML = "";

    const h = document.createElement("h2");
    h.className = "parcours-title";
    h.textContent = "La chaîne d'escalade — du signal à la reconnaissance";
    view.appendChild(h);

    const intro = document.createElement("p");
    intro.style.textAlign = "center";
    intro.style.color = "var(--text-2)";
    intro.style.marginBottom = "var(--space-6)";
    intro.textContent = "Chaque niveau doit déclencher le suivant s'il est insuffisant. Le PAS (rentrée 2026) ne doit pas bloquer l'accès à la MDPH.";
    view.appendChild(intro);

    const track = document.createElement("ol");
    track.className = "parcours-track";
    DATA.escalation.forEach((step, idx) => {
      const li = document.createElement("li");
      li.className = "parcours-step";
      li.setAttribute("data-cat", step.category);

      const head = document.createElement("header");
      const dot = document.createElement("span");
      dot.className = "parcours-dot";
      dot.textContent = idx + 1;
      head.appendChild(dot);

      const lbl = document.createElement("span");
      lbl.className = "step-label";
      lbl.textContent = step.level;
      head.appendChild(lbl);

      const t = document.createElement("h3");
      t.textContent = step.dispositifs.join(" / ");
      head.appendChild(t);

      li.appendChild(head);

      const chips = document.createElement("div");
      chips.className = "step-dispos";
      step.dispositifs.forEach(did => {
        const n = DATA.nodesById[did];
        if (!n) return;
        const b = document.createElement("button");
        b.className = "link-chip";
        b.type = "button";
        b.textContent = n.label;
        b.title = n.fullName;
        b.addEventListener("click", () => window.App && window.App.openDetails(did));
        chips.appendChild(b);
      });
      li.appendChild(chips);

      const body = document.createElement("p");
      body.className = "step-body";
      body.innerHTML = UI.abbrify(step.description);
      li.appendChild(body);

      track.appendChild(li);
    });
    view.appendChild(track);

    const rule = document.createElement("div");
    rule.className = "parcours-rule";
    rule.innerHTML = `<strong>Règle d'escalade FCPE.</strong> ${UI.abbrify(DATA.escalationRule)}`;
    view.appendChild(rule);

    // Lectures rapides
    const twoCol = document.createElement("div");
    twoCol.style.display = "grid";
    twoCol.style.gridTemplateColumns = "repeat(auto-fit, minmax(320px, 1fr))";
    twoCol.style.gap = "var(--space-4)";
    twoCol.style.maxWidth = "1400px";
    twoCol.style.margin = "var(--space-6) auto 0";

    ["ecole","college"].forEach(k => {
      const b = DATA.readingPath[k];
      const card = document.createElement("article");
      card.className = "parcours-step";
      card.style.textAlign = "left";
      card.innerHTML = `
        <header style="flex-direction:row;justify-content:flex-start;gap:.6rem;margin-bottom:var(--space-2)">
          <span class="parcours-dot" style="color:var(--c-instance);width:26px;height:26px;font-size:.9rem">↦</span>
          <h3 style="text-align:left">${UI.escapeHTML(b.label)}</h3>
        </header>
        <p class="step-body" style="text-align:left">${UI.abbrify(b.text)}</p>`;
      twoCol.appendChild(card);
    });
    view.appendChild(twoCol);

    // Alertes
    const alertsWrap = document.createElement("section");
    alertsWrap.style.maxWidth = "1400px";
    alertsWrap.style.margin = "var(--space-6) auto 0";
    alertsWrap.innerHTML = `<h2 class="parcours-title" style="text-align:left">Alertes · délais · vigilance Paris</h2>`;
    const grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(260px, 1fr))";
    grid.style.gap = "var(--space-3)";
    DATA.alerts.forEach(a => {
      const card = document.createElement("div");
      card.style.padding = "var(--space-4)";
      card.style.borderRadius = "var(--radius-md)";
      card.style.border = "1px solid var(--border)";
      card.style.background = a.kind === "alert" ? "var(--warning-bg)" : "var(--surface)";
      card.innerHTML = `<strong>${UI.escapeHTML(a.label)}</strong><br><span style="color:var(--text-2)">${UI.abbrify(a.value)}</span>`;
      grid.appendChild(card);
    });
    alertsWrap.appendChild(grid);
    view.appendChild(alertsWrap);

    // Actions FCPE
    const actions = document.createElement("section");
    actions.style.maxWidth = "1400px";
    actions.style.margin = "var(--space-6) auto 0";
    actions.innerHTML = `<h2 class="parcours-title" style="text-align:left">Actions FCPE dans le 12ᵉ</h2>`;
    const ul = document.createElement("ul");
    ul.style.display = "grid";
    ul.style.gridTemplateColumns = "repeat(auto-fit, minmax(320px, 1fr))";
    ul.style.gap = "var(--space-3)";
    DATA.fcpeActions.forEach(a => {
      const li = document.createElement("li");
      li.style.padding = "var(--space-4)";
      li.style.background = "var(--surface)";
      li.style.borderRadius = "var(--radius-md)";
      li.style.border = "1px solid var(--border)";
      li.innerHTML = `<span class="degree-badge" style="margin-bottom:.5rem;display:inline-block">${UI.escapeHTML(a.scope)}</span><br>${UI.abbrify(a.text)}`;
      ul.appendChild(li);
    });
    actions.appendChild(ul);
    view.appendChild(actions);
  }

  window.Parcours = { render };
})();
