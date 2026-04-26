/* =========================================================
   simple.js — Mode simple : scénarios guidés
   Langage non-technique, gros boutons, pas-à-pas.
   ========================================================= */
(function () {
  const view = document.getElementById("view-simple");

  let currentScenario = null;

  function render(scenarioId) {
    if (scenarioId) {
      currentScenario = scenarioId;
      renderScenario(scenarioId);
    } else {
      currentScenario = null;
      renderIndex();
    }
  }

  function renderIndex() {
    view.innerHTML = `
      <div class="simple-wrap">
        <header class="simple-header">
          <button type="button" class="btn-ghost" id="back-home">← Accueil</button>
          <h1 class="simple-title">Que se passe-t-il pour votre enfant ?</h1>
          <p class="simple-intro">
            Choisissez la situation qui ressemble le plus à la vôtre.
            Vous obtiendrez les étapes à suivre et les personnes à contacter.
          </p>
        </header>

        <ul class="scenario-grid"></ul>

        <footer class="simple-footer">
          <p>
            Vous voulez aller plus loin ?
            <button type="button" class="link-chip" id="goto-advanced">Passer en mode avancé →</button>
          </p>
        </footer>
      </div>
    `;

    const grid = view.querySelector(".scenario-grid");
    DATA.scenarios.forEach(s => {
      const li = document.createElement("li");
      li.className = "scenario-card";
      li.setAttribute("data-color", s.color);
      li.setAttribute("data-id", s.id);
      li.innerHTML = `
        <button type="button" class="scenario-btn">
          <span class="scenario-ico" aria-hidden="true">${s.icon}</span>
          <h2 class="scenario-card-title">${UI.escapeHTML(s.title)}</h2>
          <p class="scenario-card-summary">${UI.abbrify(s.summary)}</p>
          <span class="scenario-card-classes">${UI.abbrify(s.forClasses)}</span>
          <span class="scenario-card-cta">Voir les étapes →</span>
        </button>
      `;
      li.querySelector(".scenario-btn").addEventListener("click", () => {
        location.hash = "simple/" + s.id;
      });
      grid.appendChild(li);
    });

    view.querySelector("#back-home").addEventListener("click",
      () => window.App.setMode("home"));
    view.querySelector("#goto-advanced").addEventListener("click",
      () => window.App.setMode("advanced"));
  }

  function renderScenario(id) {
    const s = DATA.scenarios.find(x => x.id === id);
    if (!s) { renderIndex(); return; }

    view.innerHTML = `
      <div class="simple-wrap simple-scenario" data-color="${s.color}">
        <header class="simple-header">
          <button type="button" class="btn-ghost" id="back-scenarios">← Autres situations</button>
          <div class="scenario-head">
            <span class="scenario-ico-large" aria-hidden="true">${s.icon}</span>
            <div>
              <h1 class="simple-title">${UI.escapeHTML(s.title)}</h1>
              <p class="simple-intro">${UI.abbrify(s.summary)}</p>
              <p class="scenario-classes"><strong>Pour quels niveaux ?</strong> ${UI.abbrify(s.forClasses)}</p>
            </div>
          </div>
        </header>

        <section class="scenario-steps" aria-label="Étapes à suivre">
          <h2 class="simple-section-title">Que faire ? Pas à pas</h2>
          <ol class="step-list"></ol>
        </section>

        <section class="scenario-tips">
          <h2 class="simple-section-title">💡 Bons réflexes</h2>
          <ul class="tip-list"></ul>
        </section>

        <footer class="simple-footer">
          <p>
            Pour aller plus loin (toutes les fiches détaillées,
            la mindmap, le tableau comparatif) :
            <button type="button" class="link-chip" id="goto-advanced">Mode avancé →</button>
          </p>
        </footer>
      </div>
    `;

    const stepList = view.querySelector(".step-list");
    s.steps.forEach((step, i) => {
      const li = document.createElement("li");
      li.className = "step-item";
      li.innerHTML = `
        <span class="step-num">${i + 1}</span>
        <div class="step-content">
          <h3 class="step-title">
            <span class="step-ico" aria-hidden="true">${step.ico || "•"}</span>
            ${UI.escapeHTML(step.title)}
          </h3>
          <p class="step-body">${UI.abbrify(step.body)}</p>
          ${step.who ? `<p class="step-who"><strong>Qui contacter :</strong> ${UI.abbrify(step.who)}</p>` : ""}
        </div>
      `;
      if (step.relatedNode && DATA.nodesById[step.relatedNode]) {
        const link = document.createElement("button");
        link.type = "button";
        link.className = "step-link link-chip";
        link.textContent = `Voir la fiche détaillée : ${DATA.nodesById[step.relatedNode].label} →`;
        link.addEventListener("click", () => {
          window.App.openDetails(step.relatedNode);
        });
        li.querySelector(".step-content").appendChild(link);
      }
      stepList.appendChild(li);
    });

    const tipList = view.querySelector(".tip-list");
    s.tips.forEach(t => {
      const li = document.createElement("li");
      li.innerHTML = UI.abbrify(t);
      tipList.appendChild(li);
    });

    view.querySelector("#back-scenarios").addEventListener("click",
      () => { location.hash = "simple"; });
    view.querySelector("#goto-advanced").addEventListener("click",
      () => window.App.setMode("advanced"));
  }

  window.Simple = { render };
})();
