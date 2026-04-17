/* =========================================================
   compare.js — tableau comparatif PPRE / PAP / PAI / PPS / PAS
   ========================================================= */
(function () {
  const view = document.getElementById("view-compare");

  function degreeList(degrees) {
    return degrees.map(d => DATA.degreeLabels[d] || d).join(" · ");
  }

  const color = id => {
    const n = DATA.nodesById[id];
    if (!n) return "#666";
    return getComputedStyle(document.documentElement).getPropertyValue(
      n.category === "escalade" ? "--c-escalade" :
      n.category === "prevention" ? "--c-prevention" :
      n.category === "rased" ? "--c-rased" :
      n.category === "instance" ? "--c-instance" :
      n.category === "accompagnement" ? "--c-accompagnement" :
      n.category === "structure" ? "--c-structure" :
      n.category === "soin" ? "--c-soin" : "--brand"
    ).trim() || "#1f5fa8";
  };

  function render(filters) {
    view.innerHTML = "";

    const h = document.createElement("h2");
    h.className = "parcours-title";
    h.textContent = "Comparatif des plans";
    view.appendChild(h);

    const wrap = document.createElement("div");
    wrap.className = "compare-wrap";

    const table = document.createElement("table");
    table.className = "compare-table";

    // thead
    const thead = document.createElement("thead");
    const trh = document.createElement("tr");
    const headers = [{ key:"id", label:"Dispositif" }, ...DATA.comparison.columns];
    headers.forEach(col => {
      const th = document.createElement("th");
      th.textContent = col.label;
      trh.appendChild(th);
    });
    thead.appendChild(trh);
    table.appendChild(thead);

    // tbody
    const tbody = document.createElement("tbody");
    DATA.comparison.rows.forEach(row => {
      if (filters && filters.size > 0) {
        if (!row.degree.some(d => filters.has(d))) return;
      }
      const tr = document.createElement("tr");

      // Nom + couleur
      const tdId = document.createElement("td");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "compare-dispo";
      btn.style.color = color(row.id);
      btn.style.background = "transparent";
      btn.style.border = "0";
      btn.style.cursor = "pointer";
      btn.style.fontWeight = "700";
      btn.innerHTML = row.id;
      btn.addEventListener("click", () => window.App && window.App.openDetails(row.id));
      tdId.appendChild(btn);
      tr.appendChild(tdId);

      // autres colonnes
      DATA.comparison.columns.forEach(col => {
        const td = document.createElement("td");
        let v = row[col.key];
        if (col.key === "degree") v = degreeList(v || []);
        td.textContent = v ?? "—";
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    view.appendChild(wrap);

    const caption = document.createElement("p");
    caption.style.marginTop = "var(--space-4)";
    caption.style.color = "var(--text-2)";
    caption.style.fontSize = "var(--fz-2)";
    caption.textContent = "Cliquer sur un sigle pour ouvrir la fiche complète. Le tableau se filtre selon les degrés cochés dans la barre d'outils.";
    view.appendChild(caption);
  }

  window.Compare = { render };
})();
