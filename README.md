# École Inclusive · Paris 12ᵉ — Application interactive

Application web **100 % locale** qui rend parcourable le référentiel de l'école inclusive de la FCPE UL12 (Paris 12ᵉ, avril 2026) : chaîne d'escalade, dispositifs, acteurs RASED, instances, structures spécialisées, soins externes.

## Ouvrir l'application

Double-cliquer sur `index.html` — aucune installation, aucun serveur, aucune connexion internet requise.

Compatible : Chrome/Edge, Firefox, Safari récents.

## Vues disponibles

| Vue | Usage |
|---|---|
| **Mindmap** | Arborescence radiale interactive — cliquer pour ouvrir une fiche, replier/déplier les branches, zoomer/panner. |
| **Parcours** | Chaîne d'escalade du signal en classe à la reconnaissance MDPH. |
| **Comparatif** | Tableau PPRE / PAP / PAI / PPS / PAS — filtrable par degré. |
| **Liste** | Toutes les fiches en accordéon — mode imprimable. |

## Raccourcis clavier

- `Ctrl` / `⌘` + `K` — rechercher
- `1` – `4` — basculer entre les vues
- `Esc` — fermer la fiche ou le dialogue
- `Tab` / `Entrée` / `Espace` — navigation clavier complète

## Sources

- Référentiel FCPE UL12 — Paris 12ᵉ — avril 2026
- AG FCPE Paris — 17 janvier 2026
- Flyer RASED — circonscription 12A-3
- Circulaires MEN — septembre 2025
- Données SEI MDPH Paris — novembre 2025

## Structure du dépôt

```
/
├── index.html               # Shell + bootstrap
├── assets/
│   ├── styles.css           # Tous les styles
│   └── favicon.svg
├── data/
│   └── referential.js       # Base de connaissance (const DATA)
├── scripts/
│   ├── app.js               # Orchestrateur + routing
│   ├── mindmap.js           # Rendu SVG radial
│   ├── details.js           # Panneau fiche
│   ├── parcours.js          # Vue timeline
│   ├── compare.js           # Tableau comparatif
│   ├── liste.js             # Vue liste/impression
│   └── search.js            # Recherche globale
├── documents-sources/       # Dépôts utilisateurs (documents annexes)
└── README.md
```

## Accessibilité

- Navigation clavier complète (Tab, Entrée, Espace, flèches)
- `prefers-reduced-motion` respecté
- Contrastes WCAG 2.2 AA vérifiés
- Labels ARIA sur tous les contrôles
- Mode impression dédié

## Licence

Contenu pédagogique FCPE UL12 — libre reproduction pour usage associatif et familial.
