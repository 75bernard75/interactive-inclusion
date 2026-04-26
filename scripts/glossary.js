/* =========================================================
   glossary.js — vue / dialogue glossaire des acronymes
   ========================================================= */
(function () {
  const dialog = document.getElementById("glossary-dialog");
  if (!dialog) return;

  const list = dialog.querySelector(".glossary-list");
  const search = dialog.querySelector("#glossary-search");
  const btnClose = dialog.querySelector('button[aria-label="Fermer"]');

  function deaccent(s) {
    return (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }

  function render(filter) {
    list.innerHTML = "";
    const needle = deaccent(filter || "").trim();
    DATA.glossaryList.forEach(({ acronym, full }) => {
      const hay = deaccent(acronym + " " + full);
      if (needle && !hay.includes(needle)) return;
      const dt = document.createElement("dt");
      dt.textContent = acronym;
      const dd = document.createElement("dd");
      dd.textContent = full;

      // Si l'acronyme correspond à une fiche, lien rapide
      if (DATA.nodesById[acronym]) {
        const a = document.createElement("button");
        a.type = "button";
        a.className = "link-chip";
        a.textContent = "Ouvrir la fiche →";
        a.style.marginLeft = ".5rem";
        a.addEventListener("click", () => {
          dialog.close();
          window.App && window.App.openDetails(acronym);
        });
        dd.appendChild(a);
      }

      list.appendChild(dt);
      list.appendChild(dd);
    });
    if (!list.children.length) {
      const p = document.createElement("p");
      p.textContent = "Aucun acronyme correspondant.";
      p.style.gridColumn = "1 / -1";
      p.style.color = "var(--text-2)";
      list.appendChild(p);
    }
  }

  function open() {
    if (!dialog.open) dialog.showModal();
    search.value = "";
    render("");
    setTimeout(() => search.focus(), 30);
  }

  search.addEventListener("input", e => render(e.target.value));
  btnClose.addEventListener("click", () => dialog.close());

  document.getElementById("glossary-btn")
    .addEventListener("click", open);

  window.Glossary = { open };
})();
