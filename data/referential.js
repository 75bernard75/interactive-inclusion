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
    },

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
    },

    /* ===== 5. ACCOMPAGNEMENT ===== */
    {
      id: "AESH", category: "accompagnement", label: "AESH",
      fullName: "Accompagnant des Élèves en Situation de Handicap",
      tagline: "ACCOMPAGNANT — DÉCLENCHÉ PAR PPS / CDAPH",
      profile: `Tout élève avec notification CDAPH — TSA, DI, paralysie cérébrale, troubles sensoriels, TDAH sévère.`,
      examples: [
        { name: "Sofiane", detail: "6ᵉ, TSA modéré, AESH mutualisé 12h/semaine, aide à la prise de notes et gestion des transitions" }
      ],
      types: [
        "AESH-i — individuel (1 seul élève)",
        "AESH-m — mutualisé entre plusieurs élèves"
      ],
      managedBy: `PIAL — Pôle Inclusif d'Accompagnement Localisé (actuellement) → remplacé par PAS rentrée 2026.`,
      parisAlert: `84 % des élèves notifiés sont accompagnés — 16 % sans AESH malgré la notification CDAPH.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["PPS","CDAPH","MDPH","PIAL","PAS","ULIS","ERSEH","ESS"]
    },
    {
      id: "PIAL", category: "accompagnement", label: "PIAL",
      fullName: "Pôle Inclusif d'Accompagnement Localisé",
      tagline: "COORDINATION AESH — EN COURS DE REMPLACEMENT PAR PAS",
      role: `Répartit les heures AESH entre les élèves d'un même bassin d'établissements.`,
      critique: `Mutualisait excessivement, réduisant de facto les accompagnements individuels notifiés par la CDAPH.`,
      future: `Remplacé par le PAS rentrée 2026 · Pilotes parisiens 13ᵉ et 18ᵉ depuis septembre 2025.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["AESH","PAS","CDAPH"]
    },

    /* ===== 6. STRUCTURES SPÉCIALISÉES ===== */
    {
      id: "ULIS", category: "structure", label: "ULIS",
      fullName: "Unité Localisée pour l'Inclusion Scolaire",
      tagline: "CLASSE SPÉCIALISÉE INCLUSE DANS L'ÉTABLISSEMENT",
      profile: `DI légère à modérée, TSA, TND, troubles sensoriels, troubles moteurs — avec PPS.`,
      examples: [
        { name: "Karim", detail: "6ᵉ, TSA avec DI légère, inclus en EPS et arts plastiques, cours spécialisés le reste du temps" }
      ],
      format: `Groupe de 10 à 12 élèves · Inclus partiellement en classe ordinaire · Enseignant spécialisé ULIS.`,
      parisData: `Paris 2025 : 775 en école · 960 en collège · 265 en lycée.`,
      trigger: `PPS + orientation CDAPH — les deux sont obligatoires.`,
      note: `UEMA (Unité d'Enseignement Maternelle Autisme) pour la maternelle à Paris.`,
      degree: ["elementaire","college","lycee"],
      links: ["PPS","CDAPH","MDPH","AESH","CAPPEI","ERSEH"]
    },
    {
      id: "UPE2A", category: "structure", label: "UPE2A",
      fullName: "Unité Pédagogique pour Élèves Allophones Arrivants",
      tagline: "ACCUEIL ÉLÈVES NON FRANCOPHONES — ARRIVÉE EN FRANCE",
      profile: `Élève nouvellement arrivé en France ne maîtrisant pas le français — qu'il soit scolarisé antérieurement (EANA) ou non scolarisé antérieurement (NSA).`,
      examples: [
        { name: "Kenji", detail: "6ᵉ, arrivé du Japon — UPE2A collège 12h/semaine, inclus en EPS et arts plastiques, cours de FLS (Français Langue de Scolarisation) le reste du temps" },
        { name: "Amira", detail: "CE2, arrivée du Maroc avec scolarisation partielle — UPE2A école 9h/semaine, incluse en mathématiques et activités artistiques" }
      ],
      format: `Groupes restreints · Cours de FLS intensifs · Inclusion progressive en classe ordinaire selon le niveau acquis.`,
      duration: `En général 1 à 2 ans — durée adaptée aux progrès de l'élève.`,
      note: `Si des difficultés persistent au-delà de la langue (dys-, TND, trauma), un PPRE, PAP ou saisine MDPH peut être déclenché en parallèle.`,
      parisData: `Présent dans de nombreux établissements parisiens · Lycée professionnel Chennevière-Malézieux (12ᵉ) dispose d'une UPE2A.`,
      degree: ["elementaire","college","lycee"],
      links: ["PPRE","PAP","MDPH"]
    },
    {
      id: "SEGPA", category: "structure", label: "SEGPA",
      fullName: "Section d'Enseignement Général et Professionnel Adapté",
      tagline: "CLASSE ADAPTÉE — COLLÈGE UNIQUEMENT",
      profile: `Difficultés scolaires graves et persistantes sans handicap reconnu — PPRE et PAP épuisés sans résultat.`,
      examples: [
        { name: "Lyes", detail: "CM2, non-lecteur à 11 ans, pas de TSA diagnostiqué, orientation SEGPA après bilan Psy-EN" }
      ],
      format: `Classe dans le collège, pédagogie différenciée, ateliers professionnels, orientation CAP en fin de 3ᵉ SEGPA.`,
      trigger: `Orientation DASEN après avis Psy-EN — PPS non requis.`,
      degree: ["college"],
      links: ["PPRE","PAP","PsyEN","DASEN"]
    },
    {
      id: "IME", category: "structure", label: "IME",
      fullName: "Institut Médico-Éducatif",
      tagline: "ÉTABLISSEMENT MÉDICO-SOCIAL SPÉCIALISÉ",
      profile: `Déficience intellectuelle modérée à sévère, TSA sévère — scolarité et soins thérapeutiques intégrés dans le même lieu.`,
      examples: [
        { name: "Sofiane", detail: "9 ans, trisomie 21 avec DI sévère, communication par pictogrammes, maintien en milieu ordinaire impossible" }
      ],
      trigger: `Notification CDAPH obligatoire (via dossier MDPH).`,
      parisAlert: `Environ 500 élèves en attente de place à Paris — liste d'attente longue.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["CDAPH","MDPH","PPS","CAPPEI"]
    },
    {
      id: "ITEP", category: "structure", label: "ITEP",
      fullName: "Institut Thérapeutique, Éducatif et Pédagogique",
      tagline: "ÉTABLISSEMENT MÉDICO-SOCIAL SPÉCIALISÉ",
      profile: `Troubles comportementaux importants, souffrance psychique sévère, crises répétées — sans DI associée.`,
      examples: [
        { name: "Rayan", detail: "CM2, crises violentes quotidiennes, plusieurs exclusions, suivi psy insuffisant en milieu ordinaire" }
      ],
      trigger: `Notification CDAPH obligatoire.`,
      degree: ["elementaire","college","lycee"],
      links: ["CDAPH","MDPH","PPS"]
    },
    {
      id: "SESSAD", category: "structure", label: "SESSAD",
      fullName: "Service d'Éducation Spéciale et de Soins À Domicile",
      tagline: "SUIVI À DOMICILE ET DANS L'ÉCOLE — EN COMPLÉMENT DU PPS",
      profile: `Élève avec PPS maintenu en milieu ordinaire mais nécessitant un suivi thérapeutique régulier — TSA léger, moteur, auditif.`,
      examples: [
        { name: "Sara", detail: "3ᵉ, paralysie cérébrale légère, kiné + ortho du SESSAD interviennent dans l'école 2×/semaine" }
      ],
      format: `Équipe pluridisciplinaire qui se déplace à l'école ou au domicile — complément du PPS, pas substitution.`,
      trigger: `Notification CDAPH obligatoire.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["PPS","CDAPH","MDPH","ESS","ERSEH"]
    },
    {
      id: "EMAS", category: "structure", label: "EMAS",
      fullName: "Équipe Mobile d'Appui médico-social à la Scolarisation",
      tagline: "ÉQUIPE MOBILE — MOBILISÉE PAR LE PAS",
      profile: `Situations complexes en attente MDPH, TSA sévère, troubles comportementaux intenses — quand l'école ne sait plus comment faire.`,
      examples: [
        { name: "Élève CE2", detail: "comportements auto-agressifs non encore reconnu MDPH — l'EMAS intervient en classe à la demande du PAS" }
      ],
      format: `Équipe pluridisciplinaire qui se déplace directement dans l'école sur sollicitation du PAS.`,
      authority: `Coordonnée par l'ARS · Liens directs avec le coordinateur PAS.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["PAS","CoordPAS","MDPH"]
    },

    /* ===== 7. SOINS EXTERNES ===== */
    {
      id: "CMP", category: "soin", label: "CMP",
      fullName: "Centre Médico-Psychologique",
      tagline: "SOIN EXTERNE — SUIVI PSY ET PSYCHIATRIQUE",
      profile: `Anxiété, dépression, troubles psychiques — suivi psy et psychiatrique sans diagnostic scolaire requis.`,
      examples: [
        { name: "Mia", detail: "5ᵉ, anxiété généralisée, phobie scolaire installée, prise en charge psychiatrique + psy hebdomadaire au CMP" }
      ],
      trigger: `Sur prescription médicale ou spontanément — gratuit (secteur public).`,
      parisAlert: `6 à 18 mois à Paris — orienter très tôt, ne pas attendre une crise.`,
      linksText: `Liaison Psy-EN · Peut déboucher sur PAP ou saisine MDPH.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["PsyEN","PAP","MDPH","MaitreG","pHARe"]
    },
    {
      id: "CMPP", category: "soin", label: "CMPP",
      fullName: "Centre Médico-Psycho-Pédagogique",
      tagline: "SOIN + BILAN EXTERNE — TROUBLES DES APPRENTISSAGES",
      profile: `Troubles dys-, TND, TDAH, difficultés d'apprentissage — bilans + rééducation orthophonie / psychomotricité / psychologie.`,
      examples: [
        { name: "Paul", detail: "CE1, suspicion dyspraxie + TDA, bilan CMPP nourrit le PAP et peut déclencher une saisine MDPH" }
      ],
      trigger: `Sur prescription médicale — gratuit (secteur public).`,
      parisAlert: `6 à 18 mois à Paris — orienter via Psy-EN ou médecin scolaire dès la suspicion, pas après.`,
      linksText: `Liaison Psy-EN + enseignants · Alimente PAP · Peut déclencher saisine MDPH.`,
      degree: ["maternelle","elementaire","college"],
      links: ["PsyEN","PAP","MDPH","PPS"]
    },
    {
      id: "CAPP", category: "soin", label: "CAPP",
      fullName: "Centre d'Adaptation Psycho-Pédagogique",
      tagline: "SOIN + SOUTIEN EXTERNE — SPÉCIFIQUE PARIS VILLE",
      profile: `Élèves scolarisés à Paris présentant des difficultés scolaires, comportementales ou relationnelles — sans diagnostic lourd requis.`,
      examples: [
        { name: "Yasmine", detail: "CE2, difficultés de concentration et relationnel fragile, orientée par la Psy-EN vers le CAPP pour bilan et soutien psycho-pédagogique" }
      ],
      specificity: `Service gratuit de la Ville de Paris — distinct du CMPP (EN) et du CMP (soin psychiatrique) · Travaille en lien direct avec les écoles parisiennes.`,
      role: `Bilans psycho-pédagogiques, entretiens de soutien, groupes thérapeutiques légers, liaison avec Psy-EN et enseignants.`,
      trigger: `Orienté par la Psy-EN, le médecin scolaire ou la famille · Accord parental requis.`,
      linksText: `← Psy-EN · → peut alimenter PAP ou saisine MDPH si le bilan le justifie.`,
      degree: ["maternelle","elementaire"],
      links: ["PsyEN","PAP","MDPH"]
    }
  ],

  /* ==================================================
     MÉTA : chaîne d'escalade, tableau comparatif,
     actions FCPE, lectures rapides par degré
     ================================================== */
  escalation: [
    { level: "Tous élèves",
      category: "escalade",
      dispositifs: ["LPI"],
      description: "Adaptations légères en classe · Enseignant seul · Aucune démarche externe · Trace dans le LPI." },
    { level: "1ᵉʳ niveau (rentrée 2026)",
      category: "escalade",
      dispositifs: ["PAS"],
      description: "Réponse rapide sans diagnostic · Famille, enseignant ou directeur · Coordinateur + éducateur médico-social." },
    { level: "Difficulté persistante",
      category: "rased",
      dispositifs: ["PPRE"],
      description: "Avec intervention RASED · Enseignant + IEN + famille · Maître E / Maître G / Psy-EN mobilisables · École uniquement." },
    { level: "Avis médical requis",
      category: "accompagnement",
      dispositifs: ["PAP","PAI"],
      description: "Médecin scolaire ou traitant · Chef d'établissement · Aménagements valables aux examens · 1ᵉʳ + 2ⁿᵈ degré." },
    { level: "Handicap reconnu",
      category: "soin",
      dispositifs: ["PPS"],
      description: "Droits notifiés par CDAPH via MDPH · AESH · ULIS · Matériel adapté · Orientation ESMS · Délai long à Paris." }
  ],

  escalationRule: `Un PPRE sans résultat doit conduire à un PAP ou une saisine MDPH — pas rester bloqué faute de moyens. Le PAS n'est pas un plafond.`,

  comparison: {
    columns: [
      { key: "profile",   label: "Public cible" },
      { key: "medical",   label: "Avis médical" },
      { key: "trigger",   label: "Qui le déclenche" },
      { key: "duration",  label: "Durée" },
      { key: "rights",    label: "Droits / Aménagements" },
      { key: "degree",    label: "Degré" },
      { key: "paris",     label: "Délai Paris" }
    ],
    rows: [
      { id:"PPRE", medical:"Non",
        profile:"Difficultés scolaires CP-CM2",
        trigger:"Enseignant + Famille",
        duration:"6-12 semaines, renouvelable",
        rights:"Aide pédagogique RASED, Maître E/G",
        degree:["elementaire"],
        paris:"Immédiat" },
      { id:"PAP", medical:"Oui (médecin)",
        profile:"Troubles Dys / TDAH",
        trigger:"Médecin + Famille + Chef d'étab.",
        duration:"Annuelle, renouvelable",
        rights:"Tiers-temps, police adaptée, aménagements examens",
        degree:["elementaire","college","lycee"],
        paris:"Quelques semaines" },
      { id:"PAI", medical:"Oui (médecin)",
        profile:"Maladie chronique, allergie, protocole d'urgence",
        trigger:"Médecin + Famille + Directeur",
        duration:"Annuelle",
        rights:"Protocole d'urgence, médicaments, repas adaptés",
        degree:["maternelle","elementaire","college","lycee"],
        paris:"Quelques jours à semaines" },
      { id:"PPS", medical:"Oui (MDPH/CDAPH)",
        profile:"Handicap reconnu",
        trigger:"Famille + MDPH",
        duration:"Longue durée, révision annuelle (ESS)",
        rights:"AESH, ULIS, matériel adapté, ESMS",
        degree:["maternelle","elementaire","college","lycee"],
        paris:"Plusieurs mois (MDPH)" },
      { id:"PAS", medical:"Non",
        profile:"Besoins particuliers, dès rentrée 2026",
        trigger:"Famille / Enseignant / Directeur",
        duration:"Variable — réponse rapide",
        rights:"Mobilise RASED, EMAS, AESH sans attendre MDPH",
        degree:["maternelle","elementaire","college","lycee"],
        paris:"Rentrée 2026 — 12ᵉ" }
    ]
  },

  readingPath: {
    ecole: {
      label: "Lecture rapide — école (1ᵉʳ degré)",
      text: "Signal → PAS (2026) → PPRE + Maître E / Maître G / Psy-EN (RASED) → PAP ou PAI (médecin) → MDPH → PPS → AESH + ULIS ou SESSAD / IME / ITEP via CDAPH. CMP et CMPP dès la suspicion, en parallèle."
    },
    college: {
      label: "Lecture rapide — collège (2ⁿᵈ degré)",
      text: "RASED absent. Leviers : PAS (2026) → PAP / PAI → PPS / MDPH → AESH + ULIS collège ou SEGPA. SESSAD intervient dans l'établissement si PPS actif. CMP / CMPP en parallèle."
    }
  },

  alerts: [
    { label: "CMP / CMPP",   value: "6 à 18 mois", kind: "wait" },
    { label: "MDPH",         value: "Plusieurs mois", kind: "wait" },
    { label: "Places IME / ITEP", value: "≈ 500 élèves en attente", kind: "wait" },
    { label: "AESH Paris",   value: "16 % des élèves notifiés sans accompagnant", kind: "alert" },
    { label: "Vigilance PAS", value: "Ne crée pas de nouveaux postes — réorganise des ressources existantes dont le RASED. Signaler tout cas où le PAS retarde une saisine MDPH légitime.", kind: "alert" }
  ],

  fcpeActions: [
    { scope: "École",       text: "Vérifier en conseil d'école si les 3 postes RASED (12A-3) sont pourvus et actifs. Si un poste est vacant, le signaler à l'UL12 et à la FCPE Paris." },
    { scope: "École",       text: "Demander combien d'élèves sont en PPRE, PAP ou PAI — et si le RASED est impliqué dans leur suivi." },
    { scope: "Collège",     text: "Demander combien d'élèves ont un PAP actif et si les aménagements sont bien appliqués par tous les enseignants (point de friction fréquent)." },
    { scope: "Rentrée 2026", text: "Identifier l'établissement pivot du 12ᵉ, son coordinateur PAS, et les modalités de saisine par les familles." },
    { scope: "Vigilance",   text: "Signaler tout cas où le PAS empêche ou retarde une saisine MDPH légitime à la commission École Inclusive FCPE Paris." }
  ],

  degreeLabels: {
    maternelle:  "Maternelle",
    elementaire: "Élémentaire",
    college:     "Collège",
    lycee:       "Lycée"
  }
};

/* Index pratique pour l'app */
DATA.nodesById = Object.fromEntries(DATA.nodes.map(n => [n.id, n]));
