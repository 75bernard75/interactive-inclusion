/* =========================================================
   search.js — recherche globale (Ctrl/⌘+K)
   Index simple, matching insensible aux accents.
   ========================================================= */
(function () {
  const dialog  = document.getElementById("search-dialog");
  const input   = document.getElementById("search-input");
  const results = document.getElementById("search-results");
  const btnOpen = document.getElementById("search-open");
  const btnClose= document.getElementById("search-close");

  let index = [];
  let activeIdx = -1;

  function deaccent(s) {
    return (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function buildIndex() {
    index = DATA.nodes.map(n => ({
      id: n.id,
      label: n.label,
      full: n.fullName,
      cat:  n.category,
      haystack: deaccent([n.id, n.label, n.fullName, n.tagline, n.profile,
        (n.examples || []).map(e => e.name + " " + e.detail).join(" ")
      ].join(" "))
    }));
  }
  buildIndex();

  function open() {
    if (!dialog.open) dialog.showModal();
    input.value = "";
    activeIdx = -1;
    render("");
    setTimeout(() => input.focus(), 30);
  }
  function close() { if (dialog.open) dialog.close(); }

  function render(q) {
    const needle = deaccent(q).trim();
    let matches;
    if (!needle) {
      matches = index.slice(0, 15);
    } else {
      matches = index
        .map(item => ({ item, score: score(item, needle) }))
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 30)
        .map(x => x.item);
    }
    results.innerHTML = "";
    matches.forEach((m, i) => {
      const li = document.createElement("li");
      li.className = "search-result" + (i === activeIdx ? " is-active" : "");
      li.setAttribute("role", "option");
      li.setAttribute("data-id", m.id);
      li.innerHTML = `
        <strong>${m.label} <span style="color:var(--text-2);font-weight:500;font-size:var(--fz-2)">· ${m.full}</span></strong>
        <small>${(DATA.categories.find(c => c.id === m.cat) || {}).label || ""}</small>`;
      li.addEventListener("click", () => {
        close();
        window.App && window.App.openDetails(m.id);
      });
      results.appendChild(li);
    });
  }

  function score(item, needle) {
    if (!item.haystack.includes(needle)) return 0;
    let s = 1;
    if (deaccent(item.id).startsWith(needle)) s += 10;
    if (deaccent(item.label).startsWith(needle)) s += 8;
    if (deaccent(item.full).includes(needle)) s += 3;
    return s;
  }

  input.addEventListener("input", e => {
    activeIdx = -1;
    render(e.target.value);
  });

  input.addEventListener("keydown", e => {
    const items = results.querySelectorAll(".search-result");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIdx = Math.min(items.length - 1, activeIdx + 1);
      refreshActive(items);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIdx = Math.max(0, activeIdx - 1);
      refreshActive(items);
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const pick = items[activeIdx] || items[0];
      if (pick) {
        const id = pick.getAttribute("data-id");
        close();
        window.App && window.App.openDetails(id);
      }
    }
  });

  function refreshActive(items) {
    items.forEach((el, i) => el.classList.toggle("is-active", i === activeIdx));
    if (items[activeIdx]) items[activeIdx].scrollIntoView({ block: "nearest" });
  }

  btnOpen.addEventListener("click", open);
  btnClose.addEventListener("click", close);

  document.addEventListener("keydown", e => {
    const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    const modK  = (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "k";
    if (modK) { e.preventDefault(); open(); }
  });

  window.Search = { open, close };
})();
