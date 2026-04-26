/* =========================================================
   mindmap.js — rendu SVG radial, collapse/expand, pan/zoom
   Aucune dépendance externe.
   ========================================================= */
(function () {
  const SVG_NS = "http://www.w3.org/2000/svg";

  const CAT_COLOR = {
    escalade:       "#e07b00",
    prevention:     "#c0367f",
    rased:          "#6a4fbe",
    "second-degre": "#475569",
    instance:       "#1f5fa8",
    accompagnement: "#0b8f7a",
    structure:      "#197a37",
    soin:           "#b83b3b",
    root:           "#1f3a68"
  };
  const CAT_BG = {
    escalade:       "#fef3e4",
    prevention:     "#fce8f1",
    rased:          "#ece7fa",
    "second-degre": "#eef2f7",
    instance:       "#e4eef9",
    accompagnement: "#dff3ef",
    structure:      "#e1f1e2",
    soin:           "#fbe4e4",
    root:           "#eef2f7"
  };

  const RADIUS_CENTER = 74;
  const RADIUS_CAT    = 62;
  const RADIUS_LEAF   = 42;
  const R_L1          = 260;
  const R_L2          = 460;

  const state = {
    collapsed: new Set(),     // ids dont les enfants sont cachés
    selected: null,
    viewBox: { x: -700, y: -500, w: 1400, h: 1000 },
    pan: null
  };

  const host = document.getElementById("mindmap-host");
  const svg  = document.getElementById("mindmap-svg");

  function el(tag, attrs = {}, children = []) {
    const e = document.createElementNS(SVG_NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    for (const c of [].concat(children)) {
      if (typeof c === "string") e.appendChild(document.createTextNode(c));
      else if (c) e.appendChild(c);
    }
    return e;
  }

  /* ----- Layout ----- */
  function buildPositions(tree, filters) {
    const nodes = [];
    const cats = tree.children;
    const nCats = cats.length;
    // Angles de base pour chaque catégorie
    const catAngles = cats.map((_, i) => (-Math.PI / 2) + (2 * Math.PI * i / nCats));

    // Racine
    nodes.push({
      id: "root", label: tree.label, type: "root", cat: "root",
      x: 0, y: 0, r: RADIUS_CENTER
    });

    cats.forEach((cat, i) => {
      const ang = catAngles[i];
      const cx = Math.cos(ang) * R_L1;
      const cy = Math.sin(ang) * R_L1;
      nodes.push({
        id: cat.id, label: cat.label, type: "cat", cat: cat.category,
        x: cx, y: cy, r: RADIUS_CAT,
        parent: "root"
      });

      if (state.collapsed.has(cat.id)) return;

      // Filtrer les feuilles par degré
      const visible = cat.leaves.filter(leafId => {
        const n = DATA.nodesById[leafId];
        if (!n) return false;
        if (!filters || filters.size === 0) return true;
        return n.degree.some(d => filters.has(d));
      });

      const leafCount = visible.length;
      if (leafCount === 0) return;

      // Dispersion angulaire autour de l'angle de la catégorie
      const spread = Math.min(Math.PI * 0.85, 0.35 + leafCount * 0.13);
      const start = ang - spread / 2;
      const step  = leafCount === 1 ? 0 : spread / (leafCount - 1);

      visible.forEach((leafId, j) => {
        const a = leafCount === 1 ? ang : start + step * j;
        const n = DATA.nodesById[leafId];
        nodes.push({
          id: leafId, label: n.label, type: "leaf", cat: n.category,
          x: Math.cos(a) * R_L2, y: Math.sin(a) * R_L2, r: RADIUS_LEAF,
          parent: cat.id
        });
      });
    });
    return nodes;
  }

  /* ----- Render ----- */
  function render(filters) {
    const tree = DATA.tree;
    const nodes = buildPositions(tree, filters);
    const byId = Object.fromEntries(nodes.map(n => [n.id, n]));

    svg.setAttribute("viewBox",
      `${state.viewBox.x} ${state.viewBox.y} ${state.viewBox.w} ${state.viewBox.h}`);
    svg.innerHTML = "";

    // --- couche crosslinks (pointillés inter-branches, masqués par défaut) ---
    const gCross = el("g", { class: "mm-crosslinks" });
    svg.appendChild(gCross);

    // --- couche liens parent/enfant ---
    const gLinks = el("g", { class: "mm-links" });
    svg.appendChild(gLinks);
    nodes.forEach(n => {
      if (!n.parent) return;
      const p = byId[n.parent];
      if (!p) return;
      const path = curvedPath(p.x, p.y, n.x, n.y);
      gLinks.appendChild(el("path", {
        d: path,
        class: "mm-link",
        "data-from": p.id, "data-to": n.id,
        stroke: CAT_COLOR[n.cat] || "#ccc",
        "stroke-opacity": 0.45
      }));
    });

    // --- couche nœuds ---
    const gNodes = el("g", { class: "mm-nodes" });
    svg.appendChild(gNodes);
    nodes.forEach(n => gNodes.appendChild(nodeGroup(n)));

    // crosslinks si un nœud est sélectionné
    if (state.selected && byId[state.selected]) {
      drawCrosslinks(state.selected, byId, gCross);
    }
  }

  function curvedPath(x1, y1, x2, y2) {
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    // courbe qui s'infléchit vers le centre
    const k = 0.25;
    const cx = mx + (x1 - x2) * 0 + (my) * k;
    const cy = my + (x2 - x1) * 0 - (mx) * k;
    return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
  }

  function nodeGroup(n) {
    const color = CAT_COLOR[n.cat] || CAT_COLOR.root;
    const bg    = CAT_BG[n.cat]    || CAT_BG.root;

    const g = el("g", {
      class: `mm-node mm-${n.type}${state.selected === n.id ? " is-selected" : ""}${
        state.collapsed.has(n.id) ? " is-collapsed" : ""}`,
      transform: `translate(${n.x},${n.y})`,
      "data-id": n.id,
      "data-cat": n.cat,
      tabindex: "0",
      role: "button",
      "aria-label": n.label + (n.type === "cat" ? " (catégorie, Espace pour déplier/replier)" : "")
    });

    const r = n.r;
    g.appendChild(el("circle", {
      class: "mm-bubble",
      r, fill: bg, stroke: color, "stroke-width": 2
    }));

    if (n.type === "root") {
      g.appendChild(el("text", {
        class: "mm-center", "text-anchor": "middle", dy: "-4"
      }, "École"));
      g.appendChild(el("text", {
        class: "mm-center", "text-anchor": "middle", dy: "14"
      }, "Inclusive"));
      g.appendChild(el("text", {
        class: "mm-center", "text-anchor": "middle", dy: "32", "font-size": "12", fill: "#5a6676"
      }, "Paris 12ᵉ"));
    } else if (n.type === "cat") {
      const words = n.label.split(" ");
      g.appendChild(el("text", {
        class: "mm-label", "text-anchor": "middle",
        dy: words.length > 1 ? "-2" : "5",
        "font-size": "13", fill: color
      }, words[0]));
      if (words.length > 1) {
        g.appendChild(el("text", {
          class: "mm-label", "text-anchor": "middle", dy: "14",
          "font-size": "13", fill: color
        }, words.slice(1).join(" ")));
      }
      // Indicateur déplier/replier
      g.appendChild(el("text", {
        class: "mm-sublabel", "text-anchor": "middle", dy: n.r + 14,
        fill: "#5a6676"
      }, state.collapsed.has(n.id) ? "▸ déplier" : "▾ replier"));
    } else { // leaf
      g.appendChild(el("text", {
        class: "mm-label", "text-anchor": "middle", dy: "5",
        "font-size": "13", fill: color
      }, n.label));
    }
    return g;
  }

  function drawCrosslinks(fromId, byId, gCross) {
    gCross.innerHTML = "";
    const src = byId[fromId];
    if (!src) return;
    const node = DATA.nodesById[fromId];
    if (!node || !node.links) return;
    node.links.forEach(toId => {
      const tgt = byId[toId];
      if (!tgt) return;
      const path = `M ${src.x} ${src.y} Q 0 0 ${tgt.x} ${tgt.y}`;
      gCross.appendChild(el("path", {
        d: path,
        class: "mm-crosslink is-on",
        stroke: CAT_COLOR[tgt.cat] || "#888"
      }));
    });
  }

  /* ----- Interactions ----- */
  function onNodeActivate(id) {
    const n = DATA.nodesById[id];
    const catNode = DATA.tree.children.find(c => c.id === id);
    if (catNode) {
      // Toggle collapse
      if (state.collapsed.has(id)) state.collapsed.delete(id);
      else state.collapsed.add(id);
      window.App && window.App.renderMindmap();
      return;
    }
    if (n) {
      state.selected = id;
      window.App && window.App.openDetails(id);
      window.App && window.App.renderMindmap();
    }
    if (id === "root") {
      // Tout déplier
      state.collapsed.clear();
      window.App && window.App.renderMindmap();
    }
  }

  host.addEventListener("click", e => {
    const g = e.target.closest(".mm-node");
    if (!g) return;
    onNodeActivate(g.getAttribute("data-id"));
  });
  host.addEventListener("keydown", e => {
    const g = document.activeElement;
    if (!g || !g.classList || !g.classList.contains("mm-node")) return;
    if (e.key === "Enter") { e.preventDefault(); onNodeActivate(g.getAttribute("data-id")); }
    if (e.key === " ") {
      e.preventDefault();
      const id = g.getAttribute("data-id");
      const catNode = DATA.tree.children.find(c => c.id === id);
      if (catNode) {
        if (state.collapsed.has(id)) state.collapsed.delete(id);
        else state.collapsed.add(id);
        window.App && window.App.renderMindmap();
      }
    }
  });

  /* ----- Pan / zoom ----- */
  host.addEventListener("pointerdown", e => {
    if (e.target.closest(".mm-node")) return;
    state.pan = { x: e.clientX, y: e.clientY, vb: { ...state.viewBox } };
    host.setPointerCapture(e.pointerId);
  });
  host.addEventListener("pointermove", e => {
    if (!state.pan) return;
    const rect = host.getBoundingClientRect();
    const scaleX = state.pan.vb.w / rect.width;
    const scaleY = state.pan.vb.h / rect.height;
    state.viewBox.x = state.pan.vb.x - (e.clientX - state.pan.x) * scaleX;
    state.viewBox.y = state.pan.vb.y - (e.clientY - state.pan.y) * scaleY;
    svg.setAttribute("viewBox",
      `${state.viewBox.x} ${state.viewBox.y} ${state.viewBox.w} ${state.viewBox.h}`);
  });
  host.addEventListener("pointerup",   () => { state.pan = null; });
  host.addEventListener("pointercancel",() => { state.pan = null; });

  host.addEventListener("wheel", e => {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 1.12 : 0.89;
    zoomAtCenter(factor);
  }, { passive: false });

  function zoomAtCenter(factor) {
    const cx = state.viewBox.x + state.viewBox.w / 2;
    const cy = state.viewBox.y + state.viewBox.h / 2;
    state.viewBox.w *= factor;
    state.viewBox.h *= factor;
    state.viewBox.x = cx - state.viewBox.w / 2;
    state.viewBox.y = cy - state.viewBox.h / 2;
    svg.setAttribute("viewBox",
      `${state.viewBox.x} ${state.viewBox.y} ${state.viewBox.w} ${state.viewBox.h}`);
  }

  document.querySelectorAll('[data-zoom]').forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-zoom");
      if (action === "in")  zoomAtCenter(0.82);
      if (action === "out") zoomAtCenter(1.22);
      if (action === "reset") {
        state.viewBox = { x: -700, y: -500, w: 1400, h: 1000 };
        svg.setAttribute("viewBox", "-700 -500 1400 1000");
      }
    });
  });

  function focusNode(id) {
    // Recentre sur le nœud ciblé
    const filters = window.App && window.App.getFilters();
    const nodes = buildPositions(DATA.tree, filters);
    const n = nodes.find(x => x.id === id);
    if (!n) return;
    const w = 900, h = 700;
    state.viewBox = { x: n.x - w/2, y: n.y - h/2, w, h };
    state.selected = id;
    render(filters);
  }

  window.Mindmap = {
    render,
    focusNode,
    setCollapsed(id, v) { v ? state.collapsed.add(id) : state.collapsed.delete(id); },
    setSelected(id)     { state.selected = id; },
    get state() { return state; }
  };
})();
