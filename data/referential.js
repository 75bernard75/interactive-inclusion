/* =========================================================
   Base de connaissance — École Inclusive Paris 12 (FCPE UL12)
   Avril 2026 — source unique de vérité
   Catégories :
     escalade · prevention · rased · instance ·
     accompagnement · structure · soin
   ========================================================= */

const DATA = {
  meta: {
    title: "École Inclusive · Paris 12ᵉ",
    date:  "Avril 2026",
    author: "FCPE UL12",
    subtitle: "Dispositifs, acteurs, structures de l'école inclusive"
  },

  categories: [
    { id:"escalade",       label:"Chaîne d'escalade",    color:"--c-escalade" },
    { id:"prevention",     label:"Prévention",           color:"--c-prevention" },
    { id:"rased",          label:"RASED",                color:"--c-rased" },
    { id:"instance",       label:"Instances",            color:"--c-instance" },
    { id:"accompagnement", label:"Accompagnement",       color:"--c-accompagnement" },
    { id:"structure",      label:"Structures",           color:"--c-structure" },
    { id:"soin",           label:"Soins externes",       color:"--c-soin" }
  ],

  /* -------- ARBRE DE LA MINDMAP -------- */
  tree: {
    id: "root",
    label: "École Inclusive 12ᵉ",
    children: [
      { id:"cat-escalade",       label:"Chaîne d'escalade",    category:"escalade",
        leaves:["LPI","PAS","PPRE","PAP","PAI","PPS"] },
      { id:"cat-prevention",     label:"Prévention",           category:"prevention",
        leaves:["pHARe"] },
      { id:"cat-rased",          label:"RASED",                category:"rased",
        leaves:["CAPPEI","MaitreE","MaitreG","PsyEN"] },
      { id:"cat-instance",       label:"Instances",            category:"instance",
        leaves:["MDPH","CDAPH","ERSEH","ESS","SEI","DASEN","IEN","CoordPAS"] },
      { id:"cat-accompagnement", label:"Accompagnement",       category:"accompagnement",
        leaves:["AESH","PIAL"] },
      { id:"cat-structure",      label:"Structures",           category:"structure",
        leaves:["ULIS","UPE2A","SEGPA","IME","ITEP","SESSAD","EMAS"] },
      { id:"cat-soin",           label:"Soins externes",       category:"soin",
        leaves:["CMP","CMPP","CAPP"] }
    ]
  },

  /* -------- FICHES DES ENTITÉS -------- */
  nodes: [

    /* ===== 1. CHAÎNE D'ESCALADE ===== */
    {
      id: "LPI", category: "escalade", label: "LPI",
      fullName: "Livret de Parcours Inclusif",
      tagline: "OUTIL TRANSVERSAL — TOUS DEGRÉS",
      role: `Document numérique unique qui regroupe et trace tous les dispositifs (PPRE, PAP, PAI, PPS) de la maternelle au lycée.`,
      profile: `Tout élève bénéficiant d'au moins une adaptation scolaire formalisée.`,
      trigger: `Accès famille + équipe enseignante + direction.`,
      note: `Le PAI y sera intégré — déploiement progressif en cours en 2025-2026.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["PPRE","PAP","PAI","PPS"]
    },
    {
      id: "PAS", category: "escalade", label: "PAS",
      fullName: "Pôle d'Appui à la Scolarité",
      tagline: "DISPOSITIF RENTRÉE 2026 — REMPLACE LE PIAL",
      profile: `Tout élève avec besoins éducatifs particuliers — sans attendre diagnostic ni notification MDPH.`,
      examples: [
        { name: "Élève de 6ᵉ", detail: "qui décroche sans raison identifiée" },
        { name: "Enfant allophone", detail: "nouvellement arrivé en France" },
        { name: "Refus scolaire naissant", detail: "signalé par la famille ou l'enseignant" }
      ],
      trigger: `Famille, enseignant, directeur, chef d'établissement — directement, sans prescription.`,
      composition: `Coordinateur PAS (personnel EN, temps plein) + éducateur médico-social (ARS).`,
      replaces: `PIAL — Pôle Inclusif d'Accompagnement Localisé — pour la gestion des AESH.`,
      parisNote: `Déploiement prévu rentrée septembre 2026 dans le 12ᵉ (pilotes : 13ᵉ et 18ᵉ depuis sept. 2025).`,
      risk: `Peut retarder une saisine MDPH si sous-doté en moyens — point de vigilance FCPE. Le PAS ne doit pas bloquer l'accès à la MDPH.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["CoordPAS","EMAS","MDPH","AESH","PIAL","RASED"]
    },
    {
      id: "PPRE", category: "escalade", label: "PPRE",
      fullName: "Programme Personnalisé de Réussite Éducative",
      tagline: "DISPOSITIF ÉCOLE — 1ᵉʳ DEGRÉ UNIQUEMENT",
      profile: `Élève de CP à CM2 ne décodant pas correctement, lacunes en calcul, sans diagnostic médical — difficulté récente ou installée.`,
      examples: [
        { name: "Hugo", detail: "CE2, lit syllabe par syllabe, confond b/d — pas de bilan orthophoniste encore" }
      ],
      trigger: `Enseignant + directeur + famille. Aucune prescription médicale requise.`,
      duration: `6 à 12 semaines, renouvelable.`,
      linksText: `→ Maître E / Maître G (RASED) · → PAP si troubles dys confirmés · → MDPH si insuffisant.`,
      degree: ["elementaire"],
      links: ["MaitreE","MaitreG","PsyEN","PAP","MDPH","LPI"]
    },
    {
      id: "PAP", category: "escalade", label: "PAP",
      fullName: "Plan d'Accompagnement Personnalisé",
      tagline: "DISPOSITIF TROUBLES DYS — AVIS MÉDICAL REQUIS",
      profile: `Dyslexie, dysorthographie, dyscalculie, dyspraxie, TDAH léger — diagnostiqué par médecin, sans passage par la MDPH.`,
      examples: [
        { name: "Léa", detail: "5ᵉ, dyslexique sévère diagnostiquée par orthophoniste — tiers-temps et police adaptée demandés" }
      ],
      trigger: `Médecin scolaire ou traitant + chef d'établissement + famille.`,
      rights: [
        "Tiers-temps",
        "Reformulation orale",
        "Support numérique",
        "Police adaptée",
        "Valable aux examens nationaux (brevet, bac)"
      ],
      linksText: `← PPRE ou RASED insuffisants · ← CMPP ou orthophoniste · → PPS si besoin AESH.`,
      degree: ["elementaire","college","lycee"],
      links: ["PPRE","CMPP","PPS","LPI"]
    },
    {
      id: "PAI", category: "escalade", label: "PAI",
      fullName: "Projet d'Accueil Individualisé",
      tagline: "DISPOSITIF MÉDICAL — AVIS MÉDICAL REQUIS",
      profile: `Maladie chronique, allergie sévère, épilepsie, diabète type 1, asthme grave nécessitant un protocole d'urgence.`,
      examples: [
        { name: "Inès", detail: "CE1, allergie anaphylactique aux arachides — stylo d'adrénaline en classe, repas adapté à la cantine" }
      ],
      trigger: `Médecin traitant + directeur / chef d'établissement + famille.`,
      content: `Protocole d'urgence, liste des médicaments, aménagements sport et cantine.`,
      note: `En cours d'intégration au LPI — le PAI comme document séparé disparaît progressivement.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["LPI"]
    },
    {
      id: "PPS", category: "escalade", label: "PPS",
      fullName: "Projet Personnalisé de Scolarisation",
      tagline: "HANDICAP RECONNU — DÉCLENCHÉ PAR MDPH / CDAPH",
      profile: `TSA, trisomie 21, paralysie cérébrale, surdité, déficience visuelle, DI — tout handicap reconnu par la CDAPH.`,
      examples: [
        { name: "Adam", detail: "4ᵉ, TSA avec DI légère — AESH mutualisé, ULIS collège, matériel adapté, tiers-temps aux examens" }
      ],
      trigger: `Famille directement auprès de la MDPH, ou orientée par Psy-EN / médecin scolaire → évaluation → notification CDAPH.`,
      rights: [
        "AESH individuel ou mutualisé",
        "ULIS",
        "Matériel pédagogique adapté",
        "Tiers-temps aux examens",
        "Orientation ESMS (IME, ITEP, SESSAD)"
      ],
      parisAlert: `Plusieurs mois à Paris — saisir la MDPH tôt, ne pas attendre l'échec solidement installé.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["MDPH","CDAPH","AESH","ULIS","ERSEH","ESS","SESSAD","IME","ITEP","LPI"]
    },

    /* ===== 2. PRÉVENTION ===== */
    {
      id: "pHARe", category: "prevention", label: "pHARe",
      fullName: "Programme de lutte contre le HARcèlement à l'École",
      tagline: "PRÉVENTION — HARCÈLEMENT ET CYBERHARCÈLEMENT",
      profile: `Tout élève victime ou témoin de harcèlement (physique, verbal, cyber) — ou présentant une anxiété scolaire liée au climat de classe.`,
      examples: [
        { name: "Elio", detail: "CE2, victime de moqueries répétées en récré — le référent pHARe met en place un groupe d'élèves ambassadeurs et contacte les familles" },
        { name: "Lina", detail: "5ᵉ, cyberharcèlement sur WhatsApp — signalement via 3018, référent pHARe du collège déclenche protocole de prise en charge" }
      ],
      trigger: `Élève, famille, enseignant ou chef d'établissement — signalement direct au référent pHARe de l'école/établissement.`,
      role: `Prévention (ambassadeurs élèves, formations) · Enquête · Médiation · Orientation vers Maître G, CMP ou signalement si nécessaire.`,
      referent: `Enseignant désigné dans chaque école et établissement — interlocuteur principal pour les familles.`,
      linkAnxiety: `Le harcèlement est un facteur majeur d'anxiété scolaire et de refus d'école — lien direct avec Maître G et CMP. 46 % des parents ne connaissent pas le dispositif (Grande Enquête FCPE 2025).`,
      hotline: `3018 — numéro national harcèlement, gratuit, confidentiel.`,
      parisAlert: `Dispositif relativement méconnu (AG FCPE Paris janv. 2026) · Réaction des établissements jugée perfectible par les parents.`,
      degree: ["elementaire","college","lycee"],
      links: ["MaitreG","CMP"]
    },

    /* ===== 3. RASED ===== */
    {
      id: "CAPPEI", category: "rased", label: "CAPPEI",
      fullName: "Certificat d'Aptitude Professionnelle aux Pratiques de l'Éducation Inclusive",
      tagline: "QUALIFICATION — POSTES RASED ET ASH",
      role: `Qualification obligatoire pour exercer sur tout poste spécialisé : Maître E, Maître G, enseignant ULIS, coordinateur PAS EN, enseignant en IME/ITEP. Sans elle, le poste reste vacant ou est pourvu à titre provisoire.`,
      replaces: `CAPA-SH (Certificat d'Aptitude Professionnelle pour les Aides spécialisées, les enseignements adaptés et la Scolarisation des élèves en situation de Handicap).`,
      format: `300 heures sur 2 ans, en alternance sur le poste — l'enseignant est en formation et en poste simultanément.`,
      risk: `Un poste RASED vacant peut signifier qu'aucun enseignant titulaire du CAPPEI n'est disponible ou candidat dans la circonscription — point à vérifier auprès de l'IEN.`,
      fcpe: `Tout poste RASED non pourvu faute de CAPPEI doit être signalé — indicateur de la dégradation structurelle du dispositif.`,
      degree: ["maternelle","elementaire"],
      links: ["MaitreE","MaitreG","PsyEN","ULIS","IEN","CoordPAS"]
    },
    {
      id: "MaitreE", category: "rased", label: "Maître E",
      fullName: "Enseignant Spécialisé à Dominante Pédagogique (ESADP)",
      tagline: "RASED — AIDE PÉDAGOGIQUE · 1ᵉʳ DEGRÉ",
      profile: `Élève avec lacunes installées en lire-écrire-compter, difficultés avérées et persistantes sans diagnostic médical.`,
      examples: [
        { name: "Théo", detail: "CE2, ne comprend pas les consignes écrites, bloqué en lecture depuis le CP" }
      ],
      format: `En classe entière ou petit groupe, sur le temps scolaire.`,
      goals: [
        "Prise de conscience des méthodes de travail",
        "Progression dans les savoirs",
        "Cohérence avec l'aide du maître de classe"
      ],
      consent: `Parents informés par l'enseignant de la classe.`,
      degree: ["maternelle","elementaire"],
      links: ["PPRE","CAPPEI","PsyEN","IEN"]
    },
    {
      id: "MaitreG", category: "rased", label: "Maître G",
      fullName: "Enseignant Spécialisé à Dominante Relationnelle (ESADR)",
      tagline: "RASED — AIDE RELATIONNELLE · 1ᵉʳ DEGRÉ",
      profile: `Anxiété scolaire, inhibition, refus d'école, troubles du comportement, faible estime de soi.`,
      examples: [
        { name: "Clara", detail: "CP, pleure chaque matin, refuse d'écrire, isolée en récré, réaction excessive à l'échec" }
      ],
      format: `Espace individuel ou mini-groupe — réintégration dans le processus d'apprentissage.`,
      goals: [
        "Restaurer le désir d'apprendre et l'estime de soi",
        "Aider l'enfant à trouver ses repères parmi ses pairs"
      ],
      consent: `Accord écrit des parents ou responsable légal OBLIGATOIRE avant toute intervention.`,
      degree: ["maternelle","elementaire"],
      links: ["PPRE","CAPPEI","PsyEN","pHARe","CMP"]
    },
    {
      id: "PsyEN", category: "rased", label: "Psy-EN",
      fullName: "Psychologue de l'Éducation Nationale",
      tagline: "RASED — BILAN PSYCHOLOGIQUE · 1ᵉʳ DEGRÉ",
      profile: `Souffrance psychique, troubles comportementaux, situation complexe — bilan avant orientation MDPH ou CMP/CMPP.`,
      examples: [
        { name: "Nour", detail: "CM1, agitation extrême, bilan QI demandé avant saisine MDPH pour suspicion de TSA" }
      ],
      role: `Évaluations scolaires, bilans psychométriques, investigations psychologiques, liaisons MDPH / CMP / CMPP.`,
      orient: `Peut orienter vers CMP, CMPP, CAPP, orthophoniste — avec accord de la famille.`,
      consent: `Accord écrit des parents OBLIGATOIRE pour tout bilan psychométrique — sauf protection de l'enfance.`,
      note: `Des Psy-EN option B existent au collège/lycée pour l'orientation, hors RASED.`,
      degree: ["maternelle","elementaire"],
      links: ["PPRE","PPS","MDPH","CMP","CMPP","CAPP","SEGPA","MaitreE","MaitreG"]
    }

    /* ===== 4. INSTANCES ===== */
    {
      id: "MDPH", category: "instance", label: "MDPH",
      fullName: "Maison Départementale des Personnes Handicapées",
      tagline: "INSTANCE DÉPARTEMENTALE — PARIS 75",
      role: `Instruit les dossiers de reconnaissance de handicap · mandate la CDAPH pour notifier les droits (AESH, ULIS, PPS, orientation ESMS).`,
      trigger: `La famille directement — ou orientée par Psy-EN, médecin scolaire, équipe éducative.`,
      parisAlert: `Plusieurs mois à Paris — saisir sans attendre, dès que la situation le justifie.`,
      risk: `Le PAS ne doit pas retarder une saisine MDPH légitime — point de vigilance FCPE.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["CDAPH","PPS","AESH","ULIS","IME","ITEP","SESSAD","PsyEN","ERSEH"]
    },
    {
      id: "CDAPH", category: "instance", label: "CDAPH",
      fullName: "Commission des Droits et de l'Autonomie des Personnes Handicapées",
      tagline: "INSTANCE DÉCISIONNELLE — AU SEIN DE LA MDPH",
      role: `Statue sur les droits après évaluation MDPH · notifie l'AESH, le PPS, l'orientation en ESMS (IME, ITEP, SESSAD).`,
      composition: `Médecins, éducateurs, représentants des familles, services sociaux.`,
      recourse: `Tribunal administratif si notification refusée ou jugée insuffisante par la famille.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["MDPH","PPS","AESH","ULIS","IME","ITEP","SESSAD"]
    },
    {
      id: "ERSEH", category: "instance", label: "ERSEH",
      fullName: "Enseignant Référent pour la Scolarisation des Élèves en Situation de Handicap",
      tagline: "ACTEUR PIVOT — COORDINATION PPS",
      role: `Coordonne la mise en œuvre du PPS : fait le lien entre la famille, les enseignants, l'établissement, la MDPH et les structures médico-sociales.`,
      examples: [
        { name: "Parents d'Adam", detail: "TSA, PPS en 4ᵉ — l'ERSEH convoque l'ESS chaque année pour ajuster le PPS, l'AESH et les orientations" }
      ],
      triggers: `Convoque l'ESS (Équipe de Suivi de Scolarisation) — réunion annuelle obligatoire avec famille, enseignants et partenaires.`,
      contact: `Interlocuteur pour les familles qui ont du mal à faire appliquer le PPS · Premier recours avant le DASEN ou le tribunal administratif.`,
      how: `À contacter via le directeur d'école ou le chef d'établissement — liste disponible auprès du SEI Académie de Paris.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["PPS","MDPH","ESS","AESH","SEI","DASEN"]
    },
    {
      id: "ESS", category: "instance", label: "ESS",
      fullName: "Équipe de Suivi de Scolarisation",
      tagline: "RÉUNION ANNUELLE OBLIGATOIRE — ÉLÈVES AVEC PPS",
      role: `Bilan annuel du PPS en cours, ajustement des aménagements, préparation des transitions (école→collège, collège→lycée) et des orientations.`,
      profile: `Tout élève avec un PPS actif — participation obligatoire de la famille.`,
      examples: [
        { name: "Adam, 4ᵉ TSA", detail: "ESS en novembre : ERSEH + parents + prof principal + AESH + représentant SESSAD — révision des objectifs, demande d'augmentation AESH pour les examens blancs" }
      ],
      trigger: `Convoquée par l'ERSEH — au moins une fois par an, ou à la demande de la famille à tout moment.`,
      composition: `ERSEH (obligatoire) · famille (obligatoire) · enseignants · chef d'établissement · AESH · partenaires médico-sociaux (SESSAD, IME…) si concernés.`,
      rightFamily: `La famille peut demander la convocation d'une ESS à tout moment si elle estime que le PPS n'est pas appliqué ou doit être revu.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["PPS","ERSEH","AESH","SESSAD","IME"]
    },
    {
      id: "SEI", category: "instance", label: "SEI",
      fullName: "Service de l'Éducation Inclusive — Académie de Paris",
      tagline: "PILOTAGE ACADÉMIQUE",
      role: `Pilote les AESH, ULIS, données MDPH, déploiement des PAS à Paris · Interlocuteur sur les cas complexes.`,
      authority: `Sous autorité du DASEN · Coordonne avec l'ARS pour PAS et EMAS.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["DASEN","PAS","AESH","ULIS","EMAS","ERSEH"]
    },
    {
      id: "DASEN", category: "instance", label: "DASEN",
      fullName: "Directeur Académique des Services de l'Éducation Nationale",
      tagline: "PILOTAGE ACADÉMIQUE",
      role: `Valide ouvertures/fermetures ULIS · pilote les PAS (autorité hiérarchique du coordinateur PAS).`,
      linksText: `Pilote le SEI · Autorité sur IEN · Arbitre les orientations SEGPA.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["SEI","IEN","ULIS","PAS","CoordPAS","SEGPA"]
    },
    {
      id: "IEN", category: "instance", label: "IEN",
      fullName: "Inspecteur de l'Éducation Nationale de circonscription",
      tagline: "PILOTAGE LOCAL — 1ᵉʳ DEGRÉ",
      role: `Pilote le RASED localement (circonscription 12A-3) · valide les demandes d'aide spécialisée · reçoit les remontées des directeurs.`,
      contact: `À contacter si un poste RASED est vacant ou si une demande d'aide reste sans réponse.`,
      degree: ["maternelle","elementaire"],
      links: ["MaitreE","MaitreG","PsyEN","CAPPEI","DASEN"]
    },
    {
      id: "CoordPAS", category: "instance", label: "Coord. PAS",
      fullName: "Coordinateur du Pôle d'Appui à la Scolarité",
      tagline: "INTERLOCUTEUR CENTRAL DU PAS — RENTRÉE 2026",
      profile: `Personnel EN à plein temps — souvent enseignant spécialisé ou Psy-EN — sous autorité hiérarchique du DASEN.`,
      role: `Point de contact unique familles + équipes · Mobilise RASED, EMAS, AESH · Coordonne les réponses de premier niveau.`,
      parisAlert: `12ᵉ arrondissement : identifier l'établissement pivot et le coordinateur PAS dès la rentrée 2026.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["PAS","DASEN","EMAS","AESH","MaitreE","MaitreG","PsyEN","CAPPEI"]
    }
  ]
};
