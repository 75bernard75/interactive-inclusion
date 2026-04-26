/* =========================================================
   abbr.js — utilitaires : injection de <abbr> + escape HTML
   Doit être chargé AVANT details.js, parcours.js, liste.js, etc.
   ========================================================= */
(function () {
  function escapeHTML(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
    })[c]);
  }

  // Cache regex compilée une fois
  let _regex = null;
  let _keys  = null;

  function buildRegex() {
    if (_regex) return;
    // Tri par longueur décroissante pour matcher "AESH-i" avant "AESH"
    _keys = Object.keys(window.DATA.glossary)
      .sort((a, b) => b.length - a.length);
    const escaped = _keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    // Bordures permissives : accepte début/fin de texte, espaces, ponctuation, parenthèses…
    // mais pas une lettre/chiffre adjacente (pour ne pas matcher dans "PPSette")
    _regex = new RegExp(
      "(^|[^A-Za-zÀ-ÖØ-öø-ÿ0-9_])(" + escaped.join("|") + ")(?=[^A-Za-zÀ-ÖØ-öø-ÿ0-9_]|$)",
      "g"
    );
  }

  function abbrify(text) {
    if (text == null || text === "") return "";
    if (!window.DATA || !window.DATA.glossary) return escapeHTML(text);
    buildRegex();
    let html = escapeHTML(text);
    html = html.replace(_regex, (_, pre, m) => {
      const def = window.DATA.glossary[m];
      if (!def) return _;
      return `${pre}<abbr title="${escapeHTML(def)}">${m}</abbr>`;
    });
    return html;
  }

  window.UI = window.UI || {};
  window.UI.escapeHTML = escapeHTML;
  window.UI.abbrify    = abbrify;
})();
