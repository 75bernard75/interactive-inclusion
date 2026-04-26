/* =========================================================
   details.js — panneau fiche latéral
   ========================================================= */
(function () {
  const panel     = document.getElementById("details-panel");
  const catBadge  = document.getElementById("details-cat");
  const title     = document.getElementById("details-title");
  const fullname  = document.getElementById("details-fullname");
  const tagline   = document.getElementById("details-tagline");
  const sections  = document.getElementById("details-sections");
  const linksBox  = document.getElementById("details-links");
  const linksUl   = linksBox.querySelector("ul");
  const btnClose  = document.getElementById("details-close");
  const btnFocus  = document.getElementById("details-focus");

  const FIELDS = [
    { key: "role",         label: "Rôle" },
    { key: "profile",      label: "Profil d'élève" },
    { key: "examples",     label: "Exemples",    type: "examples" },
    { key: "trigger",      label: "Déclenché par / Saisi par" },
    { key: "triggers",     label: "Convocation" },
    { key: "composition",  label: "Composition" },
    { key: "format",       label: "Format" },
    { key: "duration",     label: "Durée" },
    { key: "content",      label: "Contenu" },
    { key: "rights",       label: "Droits / Aménagements", type: "list" },
    { key: "types",        label: "Types",        type: "list" },
    { key: "goals",        label: "Objectifs",    type: "list" },
    { key: "consent",      label: "Accord parental" },
    { key: "linksText",    label: "Liens" },
    { key: "replaces",     label: "Remplace" },
    { key: "future",       label: "Avenir" },
    { key: "critique",     label: "Critique" },
    { key: "managedBy",    label: "Géré par" },
    { key: "specificity",  label: "Spécificité" },
    { key: "orient",       label: "Oriente vers" },
    { key: "referent",     label: "Référent" },
    { key: "hotline",      label: "Signalement national" },
    { key: "linkAnxiety",  label: "Lien anxiété scolaire" },
    { key: "contact",      label: "Contact" },
    { key: "how",          label: "Comment" },
    { key: "recourse",     label: "Recours" },
    { key: "authority",    label: "Autorité" },
    { key: "rightFamily",  label: "Droit des familles" },
    { key: "parisData",    label: "Données Paris" },
    { key: "parisNote",    label: "Note Paris" },
    { key: "parisAlert",   label: "⚠ Alerte Paris", type: "alert" },
    { key: "risk",         label: "⚠ Vigilance",    type: "alert" },
    { key: "fcpe",         label: "Lecture FCPE" },
    { key: "note",         label: "Note" }
  ];

  function open(id) {
    const n = DATA.nodesById[id];
    if (!n) return;

    panel.setAttribute("data-cat", n.category);
    panel.setAttribute("aria-hidden", "false");
    panel.classList.add("is-open");

    const catLabel = DATA.categories.find(c => c.id === n.category)?.label || n.category;
    catBadge.textContent = catLabel;
    title.textContent = n.label;
    fullname.textContent = n.fullName;
    tagline.innerHTML = UI.abbrify(n.tagline || "");
    tagline.style.display = n.tagline ? "" : "none";

    sections.innerHTML = "";

    FIELDS.forEach(f => {
      const val = n[f.key];
      if (val == null || (Array.isArray(val) && val.length === 0)) return;

      const s = document.createElement("section");
      s.className = "details-section";
      const h = document.createElement("h3");
      h.textContent = f.label;
      s.appendChild(h);

      if (f.type === "examples") {
        val.forEach(ex => {
          const card = document.createElement("div");
          card.className = "example-card";
          card.innerHTML = `<strong>${UI.escapeHTML(ex.name)}</strong> — ${UI.abbrify(ex.detail)}`;
          s.appendChild(card);
        });
      } else if (f.type === "list") {
        const ul = document.createElement("ul");
        val.forEach(v => { const li = document.createElement("li"); li.innerHTML = UI.abbrify(v); ul.appendChild(li); });
        s.appendChild(ul);
      } else if (f.type === "alert") {
        const p = document.createElement("p");
        p.className = "paris-alert";
        p.innerHTML = UI.abbrify(val);
        s.appendChild(p);
      } else {
        const p = document.createElement("p");
        p.innerHTML = UI.abbrify(val);
        s.appendChild(p);
      }
      sections.appendChild(s);
    });

    // Degré (badges)
    if (n.degree && n.degree.length) {
      const s = document.createElement("section");
      s.className = "details-section";
      s.innerHTML = `<h3>Degré concerné</h3>`;
      const box = document.createElement("div");
      box.className = "degree-badges";
      n.degree.forEach(d => {
        const b = document.createElement("span");
        b.className = "degree-badge";
        b.textContent = DATA.degreeLabels[d] || d;
        box.appendChild(b);
      });
      s.appendChild(box);
      sections.appendChild(s);
    }

    // Liens cliquables
    linksUl.innerHTML = "";
    if (n.links && n.links.length) {
      linksBox.hidden = false;
      n.links.forEach(lid => {
        const target = DATA.nodesById[lid];
        if (!target) return;
        const li = document.createElement("li");
        const b = document.createElement("button");
        b.className = "link-chip";
        b.type = "button";
        b.setAttribute("data-id", lid);
        b.innerHTML = `<span>${target.label}</span> <small style="opacity:.7;font-weight:500">· ${target.fullName.split(/ [—·] /)[0]}</small>`;
        b.addEventListener("click", () => {
          open(lid);
          location.hash = `fiche=${lid}`;
        });
        li.appendChild(b);
        linksUl.appendChild(li);
      });
    } else {
      linksBox.hidden = true;
    }

    btnFocus.onclick = () => {
      if (window.App) window.App.switchView("mindmap");
      if (window.Mindmap) window.Mindmap.focusNode(id);
      close();
    };

    // Mettre le focus sur le titre pour lecteurs d'écran
    title.setAttribute("tabindex", "-1");
    setTimeout(() => title.focus({ preventScroll: true }), 60);
  }

  function close() {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    if (location.hash.startsWith("#fiche=")) {
      history.replaceState(null, "", location.pathname + location.search);
    }
  }

  btnClose.addEventListener("click", close);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && panel.classList.contains("is-open")) close();
  });

  window.Details = { open, close };
})();
