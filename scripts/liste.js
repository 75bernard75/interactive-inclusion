/* =========================================================
   liste.js — vue liste (accordéons, mode imprimable)
   ========================================================= */
(function () {
  const view = document.getElementById("view-liste");

  function render(filters) {
    view.innerHTML = "";

    const h = document.createElement("h2");
    h.className = "parcours-title";
    h.textContent = "Toutes les fiches";
    view.appendChild(h);

    const filterBar = document.createElement("div");
    filterBar.className = "liste-filter";
    filterBar.innerHTML = `
      <label>
        Trier par
        <select id="liste-sort">
          <option value="category">Catégorie (défaut)</option>
          <option value="alpha">Ordre alphabétique</option>
        </select>
      </label>
      <button type="button" class="btn-ghost" id="liste-expand-all">Tout déplier</button>
      <button type="button" class="btn-ghost" id="liste-collapse-all">Tout replier</button>
      <button type="button" class="btn-ghost" onclick="window.print()">Imprimer</button>`;
    view.appendChild(filterBar);

    const container = document.createElement("div");
    view.appendChild(container);

    const sortBy = () => filterBar.querySelector("#liste-sort").value;

    function draw() {
      container.innerHTML = "";

      let nodes = DATA.nodes.slice();
      if (filters && filters.size > 0) {
        nodes = nodes.filter(n => n.degree.some(d => filters.has(d)));
      }

      if (sortBy() === "alpha") {
        nodes.sort((a, b) => a.label.localeCompare(b.label, "fr"));
      } else {
        const order = ["escalade","prevention","rased","instance","accompagnement","structure","soin"];
        nodes.sort((a, b) => {
          const da = order.indexOf(a.category), db = order.indexOf(b.category);
          if (da !== db) return da - db;
          return a.label.localeCompare(b.label, "fr");
        });
      }

      let currentCat = null;
      nodes.forEach(n => {
        if (sortBy() !== "alpha" && n.category !== currentCat) {
          currentCat = n.category;
          const title = document.createElement("h3");
          const catLabel = DATA.categories.find(c => c.id === n.category)?.label || n.category;
          title.textContent = catLabel;
          title.style.marginTop = "var(--space-6)";
          title.style.color = "var(--text-2)";
          title.style.textTransform = "uppercase";
          title.style.letterSpacing = ".06em";
          title.style.fontSize = "var(--fz-1)";
          container.appendChild(title);
        }
        container.appendChild(fiche(n));
      });
    }

    function fiche(n) {
      const d = document.createElement("details");
      d.className = "liste-accordion";
      d.setAttribute("data-cat", n.category);

      const summary = document.createElement("summary");
      summary.className = "liste-head";
      summary.innerHTML = `
        <div>
          <span class="degree-badge" style="color:var(--c-${n.category});border-color:currentColor;margin-bottom:.25rem">${UI.escapeHTML(n.label)}</span>
          <h2>${UI.escapeHTML(n.fullName)}</h2>
          <p style="color:var(--text-2);font-size:var(--fz-2);margin-top:.25rem">${UI.abbrify(n.tagline || "")}</p>
        </div>
        <span class="chevron" aria-hidden="true">▾</span>`;
      d.appendChild(summary);

      const body = document.createElement("div");
      body.className = "liste-body";

      const entries = [
        ["Rôle",                 n.role],
        ["Profil d'élève",       n.profile],
        ["Exemples",             n.examples],
        ["Déclenché par",        n.trigger],
        ["Convocation",          n.triggers],
        ["Composition",          n.composition],
        ["Format",               n.format],
        ["Durée",                n.duration],
        ["Contenu",              n.content],
        ["Droits / Aménagements", n.rights],
        ["Types",                n.types],
        ["Objectifs",            n.goals],
        ["Accord parental",      n.consent],
        ["Liens",                n.linksText],
        ["Remplace",             n.replaces],
        ["Avenir",               n.future],
        ["Critique",             n.critique],
        ["Géré par",             n.managedBy],
        ["Spécificité",          n.specificity],
        ["Oriente vers",         n.orient],
        ["Référent",             n.referent],
        ["Signalement national", n.hotline],
        ["Lien anxiété scolaire", n.linkAnxiety],
        ["Contact",              n.contact],
        ["Comment",              n.how],
        ["Recours",              n.recourse],
        ["Autorité",             n.authority],
        ["Droit des familles",   n.rightFamily],
        ["Données Paris",        n.parisData],
        ["Note Paris",           n.parisNote],
        ["⚠ Alerte Paris",       n.parisAlert, "alert"],
        ["⚠ Vigilance",          n.risk, "alert"],
        ["⚠ Législation — rentrée 2026", n.legislativeNote, "alert"],
        ["Lecture FCPE",         n.fcpe],
        ["Note",                 n.note]
      ];

      entries.forEach(([label, value, kind]) => {
        if (value == null || (Array.isArray(value) && value.length === 0)) return;
        const row = document.createElement("div");
        row.className = "details-section";
        const h3 = document.createElement("h3");
        h3.textContent = label;
        row.appendChild(h3);
        if (Array.isArray(value) && value[0] && typeof value[0] === "object" && value[0].name) {
          value.forEach(ex => {
            const card = document.createElement("div");
            card.className = "example-card";
            card.innerHTML = `<strong>${UI.escapeHTML(ex.name)}</strong> — ${UI.abbrify(ex.detail)}`;
            row.appendChild(card);
          });
        } else if (Array.isArray(value)) {
          const ul = document.createElement("ul");
          value.forEach(v => { const li = document.createElement("li"); li.innerHTML = UI.abbrify(v); ul.appendChild(li); });
          row.appendChild(ul);
        } else {
          const p = document.createElement("p");
          if (kind === "alert") p.className = "paris-alert";
          p.innerHTML = UI.abbrify(value);
          row.appendChild(p);
        }
        body.appendChild(row);
      });

      if (n.degree && n.degree.length) {
        const s = document.createElement("div");
        s.className = "details-section";
        s.innerHTML = `<h3>Degré et classes concernés</h3>`;
        const box = document.createElement("div");
        box.className = "degree-badges";
        n.degree.forEach(de => {
          const b = document.createElement("span");
          b.className = "degree-badge";
          b.textContent = DATA.degreeLabels[de] || de;
          box.appendChild(b);
        });
        s.appendChild(box);
        const cls = DATA.classes && DATA.classes[n.id];
        if (cls) {
          const p = document.createElement("p");
          p.style.marginTop = ".5rem";
          p.style.fontSize = "var(--fz-2)";
          p.style.color = "var(--text-2)";
          p.innerHTML = `<strong>Niveau précis :</strong> ${UI.abbrify(cls)}`;
          s.appendChild(p);
        }
        body.appendChild(s);
      }

      if (n.links && n.links.length) {
        const s = document.createElement("div");
        s.className = "details-section";
        s.innerHTML = `<h3>Dispositifs liés</h3>`;
        const ul = document.createElement("ul");
        ul.style.display = "flex";
        ul.style.flexWrap = "wrap";
        ul.style.gap = ".4rem";
        ul.style.listStyle = "none";
        ul.style.padding = "0";
        n.links.forEach(lid => {
          const t = DATA.nodesById[lid];
          if (!t) return;
          const li = document.createElement("li");
          const b = document.createElement("button");
          b.type = "button";
          b.className = "link-chip";
          b.textContent = t.label;
          b.addEventListener("click", () => window.App && window.App.openDetails(lid));
          li.appendChild(b);
          ul.appendChild(li);
        });
        s.appendChild(ul);
        body.appendChild(s);
      }

      d.appendChild(body);
      return d;
    }

    filterBar.querySelector("#liste-sort").addEventListener("change", draw);
    filterBar.querySelector("#liste-expand-all").addEventListener("click",
      () => container.querySelectorAll("details").forEach(d => d.open = true));
    filterBar.querySelector("#liste-collapse-all").addEventListener("click",
      () => container.querySelectorAll("details").forEach(d => d.open = false));

    draw();
  }

  window.Liste = { render };
})();
