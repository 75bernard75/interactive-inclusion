/* =========================================================
   home.js — page d'accueil (landing)
   ========================================================= */
(function () {
  const view = document.getElementById("view-home");

  function render() {
    view.innerHTML = `
      <div class="home-wrap">
        <section class="home-hero">
          <h1 class="home-title">L'École Inclusive dans le 12ᵉ arrondissement</h1>
          <p class="home-lead">
            Bonjour. Cette application vous aide à comprendre les aides possibles
            pour votre enfant à l'école. Tous les acronymes sont expliqués
            (passez la souris dessus, ou ouvrez le glossaire).
          </p>
          <p class="home-author">FCPE UL12 · Référentiel d'avril 2026</p>
        </section>

        <section class="home-modes" aria-label="Choisir un mode">
          <h2 class="home-sub">Comment souhaitez-vous explorer ?</h2>
          <div class="mode-cards">
            <button type="button" class="mode-card mode-card-simple" data-mode="simple">
              <span class="mode-card-ico" aria-hidden="true">✨</span>
              <h3>Mode simple</h3>
              <p>Pas à pas, à partir de questions concrètes (« Mon enfant a des difficultés en classe »).</p>
              <p class="mode-card-target">→ Recommandé pour une première lecture, ou pour les familles éloignées de l'école.</p>
              <span class="mode-card-cta">Commencer →</span>
            </button>

            <button type="button" class="mode-card mode-card-advanced" data-mode="advanced">
              <span class="mode-card-ico" aria-hidden="true">📚</span>
              <h3>Mode avancé</h3>
              <p>Toutes les fiches du référentiel, mindmap interactive, parcours, tableau comparatif, liste imprimable.</p>
              <p class="mode-card-target">→ Pour les parents délégués, les associations, ou pour aller au fond du sujet.</p>
              <span class="mode-card-cta">Explorer →</span>
            </button>
          </div>
        </section>

        <section class="home-summary">
          <h2 class="home-sub">Ce que couvre le référentiel</h2>
          <ul class="home-bullets">
            <li><strong>La chaîne d'escalade</strong> — du signal en classe (LPI, PAS, PPRE) à la reconnaissance officielle du handicap (PPS via la MDPH).</li>
            <li><strong>Les acteurs</strong> — RASED (1ᵉʳ degré), équipe du 2ⁿᵈ degré (CPE, médecin scolaire, infirmier, Psy-EN B, assistant social), instances (MDPH, CDAPH, ERSEH…).</li>
            <li><strong>Les structures</strong> — ULIS, UPE2A, SEGPA, IME, ITEP, SESSAD, EMAS.</li>
            <li><strong>Les soins externes</strong> — CMP, CMPP, CAPP — délais critiques à Paris (6 à 18 mois).</li>
            <li><strong>La prévention</strong> — programme pHARe contre le harcèlement.</li>
            <li><strong>Les actions FCPE</strong> dans le 12ᵉ — vigilance sur les postes RASED, le PAS, l'accès MDPH.</li>
          </ul>
        </section>

        <section class="home-alerts">
          <h2 class="home-sub">Alertes Paris à connaître</h2>
          <ul class="home-alert-grid"></ul>
        </section>
      </div>
    `;

    // Boutons de mode
    view.querySelectorAll('[data-mode]').forEach(b => {
      b.addEventListener("click", () => {
        const m = b.getAttribute("data-mode");
        if (m === "simple")   window.App.setMode("simple");
        if (m === "advanced") window.App.setMode("advanced");
      });
    });

    // Alertes
    const alertGrid = view.querySelector(".home-alert-grid");
    DATA.alerts.forEach(a => {
      const li = document.createElement("li");
      li.className = "home-alert" + (a.kind === "alert" ? " is-warning" : "");
      li.innerHTML = `<strong>${UI.escapeHTML(a.label)}</strong><span>${UI.abbrify(a.value)}</span>`;
      alertGrid.appendChild(li);
    });
  }

  window.Home = { render };
})();
