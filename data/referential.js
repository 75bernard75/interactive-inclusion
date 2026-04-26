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
    { id:"rased",          label:"RASED (1ᵉʳ degré)",    color:"--c-rased" },
    { id:"second-degre",   label:"2ⁿᵈ degré",            color:"--c-second-degre" },
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
      { id:"cat-rased",          label:"RASED (1ᵉʳ degré)",    category:"rased",
        leaves:["CAPPEI","MaitreE","MaitreG","PsyEN"] },
      { id:"cat-second-degre",   label:"2ⁿᵈ degré",            category:"second-degre",
        leaves:["CPE","MedecinScolaire","InfirmierScolaire","AssistantSocial","PsyENB"] },
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
    },

    /* ===== 8. ACTEURS DU 2ⁿᵈ DEGRÉ ===== */
    {
      id: "CPE", category: "second-degre", label: "CPE",
      fullName: "Conseiller Principal d'Éducation",
      tagline: "ACTEUR PIVOT — COLLÈGE ET LYCÉE",
      role: `Responsable de la vie scolaire : assiduité, climat de classe, médiation entre élèves, équipes et familles. Premier interlocuteur en cas de difficulté de comportement, d'absentéisme, de tensions, de harcèlement.`,
      profile: `Tout élève du collège et du lycée — particulièrement utile en cas d'absentéisme, refus scolaire, conflits, signalement de harcèlement, suivi quotidien des élèves avec PAP / PPS.`,
      examples: [
        { name: "Nina", detail: "5ᵉ, absences répétées sans motif clair — la CPE convoque la famille, organise un suivi avec le professeur principal et oriente vers l'infirmier scolaire" }
      ],
      contact: `À contacter en parallèle du professeur principal pour toute difficulté hors apprentissage pur.`,
      degree: ["college","lycee"],
      links: ["pHARe","InfirmierScolaire","AssistantSocial","MedecinScolaire","PsyENB","PAP","PPS"]
    },
    {
      id: "MedecinScolaire", category: "second-degre", label: "Médecin scolaire",
      fullName: "Médecin de l'Éducation Nationale",
      tagline: "AVIS MÉDICAL — TOUS DEGRÉS",
      role: `Bilan médical, signature du PAP, validation du PAI, avis pour aménagements d'examens. Lien avec les familles, les médecins traitants, la MDPH.`,
      profile: `Tout élève dont la situation requiert un avis médical scolaire — diagnostic dys / TDAH, allergie, maladie chronique, suspicion de handicap, demande de tiers-temps aux examens.`,
      examples: [
        { name: "Léa", detail: "5ᵉ, dyslexique — le médecin scolaire valide le PAP et précise les aménagements (tiers-temps, police adaptée)" },
        { name: "Inès", detail: "CE1, allergie sévère — le médecin scolaire rédige le PAI avec le médecin traitant et la famille" }
      ],
      contact: `À demander via le directeur d'école ou le chef d'établissement. Disponibilité variable selon la circonscription parisienne.`,
      parisAlert: `Sous-effectif chronique à Paris — demander un rendez-vous tôt si un PAP / PAI est nécessaire.`,
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["PAP","PAI","PPS","MDPH","InfirmierScolaire","CMPP"]
    },
    {
      id: "InfirmierScolaire", category: "second-degre", label: "Infirmier scolaire",
      fullName: "Infirmier(ère) de l'Éducation Nationale",
      tagline: "PRÉSENCE QUOTIDIENNE — SURTOUT 2ⁿᵈ DEGRÉ",
      role: `Présence quotidienne dans l'établissement (essentiellement collège / lycée) : écoute, soins, premier accueil en cas de mal-être, mise en œuvre du PAI, médiation avec la famille et orientation vers le médecin scolaire ou le CMP.`,
      profile: `Tout élève en souffrance physique ou psychique — anxiété scolaire, crises, automutilation, vécu de harcèlement, application d'un protocole PAI.`,
      examples: [
        { name: "Mia", detail: "5ᵉ, crises d'angoisse en classe — l'infirmière scolaire la reçoit régulièrement, prévient la famille et oriente vers le CMP" }
      ],
      degree: ["maternelle","elementaire","college","lycee"],
      links: ["PAI","pHARe","CMP","MedecinScolaire","CPE","AssistantSocial"]
    },
    {
      id: "AssistantSocial", category: "second-degre", label: "Assistant social",
      fullName: "Assistant(e) de service social — Éducation Nationale",
      tagline: "ACCOMPAGNEMENT SOCIAL — COLLÈGE ET LYCÉE",
      role: `Aide sociale aux familles, suivi des situations difficiles (précarité, violence intra-familiale, signalement enfance en danger), aide aux dossiers MDPH et bourses, lien avec les services de la mairie et de l'ASE.`,
      profile: `Famille en difficulté sociale ou administrative · Élève en risque de décrochage · Aide à la constitution du dossier MDPH · Médiation avec les services extérieurs.`,
      contact: `Présent dans la majorité des collèges et lycées parisiens. À demander via le secrétariat ou la CPE.`,
      degree: ["college","lycee"],
      links: ["MDPH","CPE","InfirmierScolaire","SEGPA"]
    },
    {
      id: "PsyENB", category: "second-degre", label: "Psy-EN B",
      fullName: "Psychologue de l'Éducation Nationale — option Éducation, Développement et Conseil en Orientation",
      tagline: "ORIENTATION ET BILAN — COLLÈGE ET LYCÉE",
      role: `Bilan psychologique, conseil en orientation (collège, lycée, post-bac), accompagnement du décrochage scolaire, lien avec la MDPH pour les saisines en 2ⁿᵈ degré.`,
      profile: `Élève en difficulté d'orientation, décrochage, mal-être, suspicion de handicap non encore reconnu, projet ULIS / SEGPA / lycée pro.`,
      examples: [
        { name: "Yanis", detail: "3ᵉ, hésitations entre voie générale et CAP, difficultés scolaires — le Psy-EN B fait un bilan, propose un projet d'orientation et oriente vers la SEGPA si besoin" }
      ],
      note: `Distinct du Psy-EN option A (RASED, 1ᵉʳ degré). En 2ⁿᵈ degré, le Psy-EN B intervient principalement via le CIO (Centre d'Information et d'Orientation) ou en établissement.`,
      degree: ["college","lycee"],
      links: ["PPS","MDPH","SEGPA","ULIS","PsyEN","DASEN"]
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
  },

  /* ==================================================
     GLOSSAIRE — tous les acronymes explicités
     ================================================== */
  glossarySupp: {
    "TSA":      "Troubles du Spectre de l'Autisme",
    "TDAH":     "Trouble Déficit de l'Attention avec ou sans Hyperactivité",
    "TDA":      "Trouble Déficit de l'Attention (sans hyperactivité)",
    "TND":      "Troubles du Neurodéveloppement",
    "DI":       "Déficience Intellectuelle",
    "Dys":      "Troubles spécifiques des apprentissages : dyslexie, dysorthographie, dyscalculie, dyspraxie, dysgraphie",
    "dys-":     "Troubles spécifiques des apprentissages (dyslexie, dysorthographie, dyscalculie, dyspraxie, dysgraphie)",
    "ESMS":     "Établissements et Services Médico-Sociaux (IME, ITEP, SESSAD…)",
    "ARS":      "Agence Régionale de Santé",
    "EN":       "Éducation Nationale",
    "MEN":      "Ministère de l'Éducation Nationale",
    "AESH-i":   "Accompagnant des Élèves en Situation de Handicap individuel (1 seul élève)",
    "AESH-m":   "Accompagnant des Élèves en Situation de Handicap mutualisé (plusieurs élèves)",
    "UEMA":     "Unité d'Enseignement Maternelle Autisme (3-6 ans)",
    "EANA":     "Élève Allophone Nouvellement Arrivé en France (scolarisé antérieurement)",
    "NSA":      "Non Scolarisé Antérieurement (élève allophone sans scolarité préalable)",
    "FLS":      "Français Langue de Scolarisation",
    "ESADP":    "Enseignant Spécialisé à Dominante Pédagogique (= Maître E)",
    "ESADR":    "Enseignant Spécialisé à Dominante Relationnelle (= Maître G)",
    "ASH":      "Adaptation Scolaire et Scolarisation des élèves Handicapés",
    "CAPA-SH":  "Certificat d'Aptitude Professionnelle pour les Aides spécialisées, les enseignements adaptés et la Scolarisation des élèves en situation de Handicap (ancienne qualification, remplacée par le CAPPEI)",
    "CAP":      "Certificat d'Aptitude Professionnelle (diplôme professionnel)",
    "FCPE":     "Fédération des Conseils de Parents d'Élèves",
    "UL12":     "Union Locale FCPE du 12ᵉ arrondissement de Paris",
    "AG":       "Assemblée Générale",
    "QI":       "Quotient Intellectuel",
    "Psy-EN":   "Psychologue de l'Éducation Nationale",
    "Psy-EN option B": "Psychologue de l'Éducation Nationale, option Éducation Développement Conseil en Orientation (collège / lycée)",
    "RASED":    "Réseau d'Aides Spécialisées aux Élèves en Difficulté (1ᵉʳ degré)",
    "12A-3":    "Circonscription scolaire 12A-3 (12ᵉ arrondissement de Paris, 1ᵉʳ degré)",
    "ESS":      "Équipe de Suivi de Scolarisation (réunion annuelle obligatoire pour les élèves avec PPS)",
    "CDAPH":    "Commission des Droits et de l'Autonomie des Personnes Handicapées",
    "MDPH":     "Maison Départementale des Personnes Handicapées",
    "CPE":      "Conseiller Principal d'Éducation (collège / lycée)",
    "CP":       "Cours Préparatoire (1ʳᵉ année de l'élémentaire, 6 ans)",
    "CE1":      "Cours Élémentaire 1ʳᵉ année (7 ans)",
    "CE2":      "Cours Élémentaire 2ᵉ année (8 ans)",
    "CM1":      "Cours Moyen 1ʳᵉ année (9 ans)",
    "CM2":      "Cours Moyen 2ᵉ année (10 ans)",
    "TPS":      "Toute Petite Section de maternelle (2 ans)",
    "PS":       "Petite Section de maternelle (3 ans)",
    "MS":       "Moyenne Section de maternelle (4 ans)",
    "GS":       "Grande Section de maternelle (5 ans)",
    "6ᵉ":       "Sixième (1ʳᵉ année du collège, 11 ans)",
    "5ᵉ":       "Cinquième (2ᵉ année du collège, 12 ans)",
    "4ᵉ":       "Quatrième (3ᵉ année du collège, 13 ans)",
    "3ᵉ":       "Troisième (dernière année du collège, 14 ans)",
    "DASEN":    "Directeur Académique des Services de l'Éducation Nationale",
    "SEI":      "Service de l'Éducation Inclusive (Académie de Paris)",
    "IEN":      "Inspecteur de l'Éducation Nationale (1ᵉʳ degré)",
    "IME":      "Institut Médico-Éducatif",
    "ITEP":     "Institut Thérapeutique, Éducatif et Pédagogique",
    "SESSAD":   "Service d'Éducation Spéciale et de Soins À Domicile",
    "EMAS":     "Équipe Mobile d'Appui médico-social à la Scolarisation",
    "ULIS":     "Unité Localisée pour l'Inclusion Scolaire",
    "UPE2A":    "Unité Pédagogique pour Élèves Allophones Arrivants",
    "SEGPA":    "Section d'Enseignement Général et Professionnel Adapté",
    "AESH":     "Accompagnant des Élèves en Situation de Handicap",
    "PIAL":     "Pôle Inclusif d'Accompagnement Localisé",
    "PAS":      "Pôle d'Appui à la Scolarité",
    "LPI":      "Livret de Parcours Inclusif",
    "PPRE":     "Programme Personnalisé de Réussite Éducative",
    "PAP":      "Plan d'Accompagnement Personnalisé",
    "PAI":      "Projet d'Accueil Individualisé",
    "PPS":      "Projet Personnalisé de Scolarisation",
    "pHARe":    "Programme de lutte contre le HARcèlement à l'École",
    "ERSEH":    "Enseignant Référent pour la Scolarisation des Élèves en Situation de Handicap",
    "CMP":      "Centre Médico-Psychologique (soin psychiatrique secteur public)",
    "CMPP":     "Centre Médico-Psycho-Pédagogique (bilan + rééducation secteur public)",
    "CAPP":     "Centre d'Adaptation Psycho-Pédagogique (Ville de Paris)",
    "CAPPEI":   "Certificat d'Aptitude Professionnelle aux Pratiques de l'Éducation Inclusive",
    "Maître E": "Enseignant Spécialisé à Dominante Pédagogique (RASED)",
    "Maître G": "Enseignant Spécialisé à Dominante Relationnelle (RASED)"
  }
};

/* Index pratique pour l'app */
DATA.nodesById = Object.fromEntries(DATA.nodes.map(n => [n.id, n]));

/* Glossaire complet : fiches + supplément */
DATA.glossary = Object.assign(
  {},
  Object.fromEntries(DATA.nodes.map(n => [n.id, n.fullName])),
  DATA.glossarySupp
);

/* Liste triée pour la vue "Glossaire" */
DATA.glossaryList = Object.entries(DATA.glossary)
  .map(([k, v]) => ({ acronym: k, full: v }))
  .sort((a, b) => a.acronym.localeCompare(b.acronym, "fr", { sensitivity: "base" }));

/* ==================================================
   CLASSES — niveau scolaire explicite par fiche
   ================================================== */
DATA.classes = {
  /* Chaîne d'escalade */
  LPI:  "TPS — Terminale (toute la scolarité, maternelle au lycée)",
  PAS:  "TPS — Terminale (toute la scolarité, dès la rentrée 2026)",
  PPRE: "CP — CM2 (élémentaire uniquement, pas en maternelle ni au collège)",
  PAP:  "CE1 — Terminale (à partir du CE1 ; jamais en maternelle)",
  PAI:  "TPS — Terminale (toute la scolarité)",
  PPS:  "TPS — Terminale (toute la scolarité)",

  /* Prévention */
  pHARe: "CM1 — Terminale (étendu à tout le primaire depuis 2023, en pratique CP — Terminale)",

  /* RASED — 1er degré uniquement */
  CAPPEI:  "Qualification professionnelle — postes en maternelle, élémentaire, ULIS collège / lycée, IME / ITEP",
  MaitreE: "TPS — CM2 (maternelle + élémentaire uniquement)",
  MaitreG: "TPS — CM2 (maternelle + élémentaire uniquement)",
  PsyEN:   "TPS — CM2 (option A, RASED — 1ᵉʳ degré). Une option B existe au collège / lycée (voir Psy-EN B).",

  /* 2nd degré */
  CPE:               "6ᵉ — Terminale (collège + lycée uniquement)",
  MedecinScolaire:   "TPS — Terminale (toute la scolarité, mais effectif sous-doté à Paris)",
  InfirmierScolaire: "TPS — Terminale (présence renforcée au collège / lycée)",
  AssistantSocial:   "6ᵉ — Terminale (principalement collège + lycée)",
  PsyENB:            "6ᵉ — Terminale (collège + lycée — orientation / décrochage)",

  /* Instances */
  MDPH:     "TPS — Terminale (saisine famille à tout âge)",
  CDAPH:    "TPS — Terminale (instance interne MDPH)",
  ERSEH:    "TPS — Terminale (toute la scolarité avec PPS)",
  ESS:      "TPS — Terminale (réunion annuelle pour tout PPS actif)",
  SEI:      "TPS — Terminale (pilotage académique Paris)",
  DASEN:    "TPS — Terminale (pilotage académique départemental)",
  IEN:      "TPS — CM2 (1ᵉʳ degré uniquement, circonscription 12A-3 dans le 12ᵉ)",
  CoordPAS: "TPS — Terminale (à identifier dès la rentrée 2026 dans le 12ᵉ)",

  /* Accompagnement */
  AESH: "TPS — Terminale (toute la scolarité, sur notification CDAPH)",
  PIAL: "TPS — Terminale (en cours de remplacement par le PAS — rentrée 2026)",

  /* Structures */
  ULIS:   "CP — Terminale (école, collège, lycée). En maternelle : UEMA (Unité d'Enseignement Maternelle Autisme).",
  UPE2A:  "CP — Terminale (élémentaire, collège, lycée). En maternelle : accueil direct en classe ordinaire avec accompagnement.",
  SEGPA:  "5ᵉ — 3ᵉ (collège uniquement)",
  IME:    "TPS — 20 ans (selon agrément de l'établissement)",
  ITEP:   "CP — 20 ans (selon agrément, généralement à partir de 6 ans)",
  SESSAD: "TPS — Terminale (toute la scolarité avec PPS actif)",
  EMAS:   "TPS — Terminale (toute la scolarité, mobilisée par le PAS)",

  /* Soins externes */
  CMP:  "TPS — Terminale (et adultes — pas de limite d'âge)",
  CMPP: "TPS — Terminale (jusqu'à 20 ans en pratique)",
  CAPP: "TPS — CM2 (1ᵉʳ degré uniquement, Paris uniquement)"
};

/* ==================================================
   SCÉNARIOS — mode simple (langage non-technique,
   parcours guidé pour les familles)
   ================================================== */
DATA.scenarios = [
  {
    id: "difficultes-classe",
    icon: "📚",
    color: "escalade",
    title: "Mon enfant a des difficultés en classe",
    summary: "Il a du mal à lire, écrire ou compter au même rythme que les autres. Avant tout diagnostic médical, plusieurs aides existent dans l'école.",
    forClasses: "Du CP au CM2 (à l'élémentaire). En maternelle ou au collège, voir le scénario « Diagnostic médical » ou « Handicap reconnu ».",
    steps: [
      {
        title: "Étape 1 — Parlez-en à l'enseignant",
        body: "Demandez un rendez-vous. Décrivez ce que vous voyez à la maison (lecture qui bloque, fatigue, refus d'aller à l'école…). L'enseignant peut déjà mettre en place de petites adaptations.",
        who: "L'enseignant ou le directeur de l'école",
        ico: "💬"
      },
      {
        title: "Étape 2 — Demander un PPRE (Programme Personnalisé de Réussite Éducative)",
        body: "Le PPRE est un plan d'aide écrit, sans diagnostic médical. Il dure 6 à 12 semaines, peut être renouvelé. C'est l'enseignant qui le rédige, avec votre accord.",
        who: "L'enseignant + le directeur",
        ico: "📝",
        relatedNode: "PPRE"
      },
      {
        title: "Étape 3 — Mobiliser le RASED (Réseau d'Aides Spécialisées aux Élèves en Difficulté)",
        body: "Le RASED, ce sont des enseignants spécialisés qui interviennent dans l'école : le Maître E aide pour les apprentissages, le Maître G aide quand l'enfant souffre à l'école (anxiété, refus), le Psy-EN peut faire un bilan psychologique.",
        who: "À demander via le directeur ; ils dépendent de l'IEN (Inspecteur de l'Éducation Nationale)",
        ico: "🤝",
        relatedNode: "MaitreE"
      },
      {
        title: "Étape 4 — Si rien ne s'améliore après quelques semaines",
        body: "Plusieurs options : faire un bilan extérieur (CMPP, orthophoniste de ville), demander un PAP (Plan d'Accompagnement Personnalisé) si un médecin pose un diagnostic dys-, ou saisir la MDPH si on soupçonne un handicap.",
        who: "Médecin scolaire, médecin traitant, CMPP, orthophoniste",
        ico: "🩺",
        relatedNode: "PAP"
      }
    ],
    tips: [
      "Vous n'avez PAS besoin d'un diagnostic médical pour demander un PPRE.",
      "Demandez toujours par écrit (un mail au directeur ou au professeur principal) pour garder une trace.",
      "Plus on s'y prend tôt, plus c'est efficace : n'attendez pas la fin de l'année."
    ]
  },

  {
    id: "diagnostic-medical",
    icon: "🩺",
    color: "instance",
    title: "Mon enfant a un diagnostic (dyslexie, TDAH, dyspraxie…)",
    summary: "Un médecin (généraliste, pédiatre, neurologue, orthophoniste, psychologue) a posé un diagnostic. Il existe des aménagements officiels à l'école, sans passer par la MDPH.",
    forClasses: "À partir du CE1 et jusqu'à la Terminale (en lycée et au brevet / bac). Pas en maternelle.",
    steps: [
      {
        title: "Étape 1 — Récupérer le compte-rendu médical",
        body: "Demandez au médecin (ou à l'orthophoniste, au neuropédiatre…) un compte-rendu écrit qui précise le diagnostic et les aménagements recommandés (tiers-temps, support numérique, police adaptée…).",
        who: "Le médecin qui a posé le diagnostic",
        ico: "📄"
      },
      {
        title: "Étape 2 — Demander un PAP (Plan d'Accompagnement Personnalisé)",
        body: "Le PAP est un document officiel qui formalise les aménagements pour l'enfant. Il est valable AUX EXAMENS NATIONAUX (brevet, bac). Il est rédigé par le médecin scolaire et l'établissement, avec votre accord.",
        who: "Le médecin scolaire + le chef d'établissement (ou directeur d'école)",
        ico: "📝",
        relatedNode: "PAP"
      },
      {
        title: "Étape 3 — Veiller à l'application du PAP",
        body: "Tous les enseignants doivent appliquer le PAP. C'est souvent là que ça coince. N'hésitez pas à demander une réunion en début d'année avec le professeur principal pour vérifier que chaque enseignant est au courant.",
        who: "Le professeur principal · La CPE (au collège / lycée)",
        ico: "👁️",
        relatedNode: "CPE"
      },
      {
        title: "Étape 4 — Si les aménagements ne suffisent pas",
        body: "Si l'enfant a aussi besoin d'un accompagnant (AESH), de matériel adapté ou d'une classe spécialisée (ULIS), il faut alors saisir la MDPH pour obtenir un PPS (Projet Personnalisé de Scolarisation). Le PAP ne suffit plus.",
        who: "La famille saisit directement la MDPH (en ligne ou via le médecin scolaire)",
        ico: "🏛️",
        relatedNode: "PPS"
      }
    ],
    tips: [
      "Le PAP est valable aux examens nationaux : brevet, bac, BTS — c'est très important de le faire signer.",
      "Un PAP peut suivre l'enfant d'année en année — il n'est pas à recommencer à zéro à chaque rentrée.",
      "Si un enseignant refuse d'appliquer les aménagements, demandez une médiation avec le chef d'établissement."
    ]
  },

  {
    id: "handicap-reconnu",
    icon: "♿",
    color: "structure",
    title: "Mon enfant a un handicap reconnu (TSA, DI, paralysie cérébrale…)",
    summary: "Le handicap est reconnu (ou en cours de reconnaissance) par la MDPH. Cela ouvre des droits importants : AESH, classe ULIS, matériel adapté, orientation en IME ou ITEP.",
    forClasses: "De la maternelle (TPS) au lycée (Terminale) — toute la scolarité.",
    steps: [
      {
        title: "Étape 1 — Constituer le dossier MDPH",
        body: "La MDPH (Maison Départementale des Personnes Handicapées) instruit le dossier. Il faut un certificat médical, un dossier scolaire et une description des besoins. À Paris, le délai de traitement est de PLUSIEURS MOIS — commencez tôt.",
        who: "La famille saisit directement la MDPH (formulaire en ligne ou papier)",
        ico: "🏛️",
        relatedNode: "MDPH"
      },
      {
        title: "Étape 2 — La CDAPH notifie les droits",
        body: "La CDAPH (Commission des Droits et de l'Autonomie des Personnes Handicapées) examine le dossier et notifie : un PPS (Projet Personnalisé de Scolarisation), un AESH (accompagnant), du matériel adapté, une orientation ULIS / IME / ITEP / SESSAD…",
        who: "La CDAPH (interne à la MDPH)",
        ico: "📜",
        relatedNode: "CDAPH"
      },
      {
        title: "Étape 3 — Mettre en œuvre le PPS",
        body: "L'ERSEH (Enseignant Référent pour la Scolarisation des Élèves en Situation de Handicap) coordonne le PPS entre la famille, l'école, la MDPH. Une réunion annuelle obligatoire (l'ESS — Équipe de Suivi de Scolarisation) fait le point.",
        who: "L'ERSEH (à demander via le directeur ou le chef d'établissement)",
        ico: "🗂️",
        relatedNode: "ERSEH"
      },
      {
        title: "Étape 4 — Si les droits notifiés ne sont pas appliqués",
        body: "Cas fréquent à Paris : 16 % des élèves notifiés n'ont pas leur AESH. Recours possibles : ERSEH, DASEN (Directeur Académique), médiation, et en dernier ressort le tribunal administratif.",
        who: "ERSEH · DASEN · FCPE pour le soutien",
        ico: "⚖️",
        relatedNode: "AESH"
      }
    ],
    tips: [
      "Saisissez la MDPH AU PLUS TÔT — n'attendez pas que la situation s'aggrave, le délai parisien est de plusieurs mois.",
      "Le PAS (Pôle d'Appui à la Scolarité, rentrée 2026) ne doit PAS retarder une saisine MDPH légitime.",
      "Le PPS suit l'enfant toute la scolarité ; il est révisé chaque année en ESS."
    ]
  },

  {
    id: "maladie-allergie",
    icon: "💊",
    color: "soin",
    title: "Mon enfant a une maladie chronique ou une allergie",
    summary: "Diabète, asthme grave, allergie alimentaire, épilepsie… Un protocole d'urgence et des aménagements (médicaments, repas, sport) doivent être organisés à l'école.",
    forClasses: "De la maternelle (TPS) au lycée (Terminale) — toute la scolarité.",
    steps: [
      {
        title: "Étape 1 — Demander un PAI (Projet d'Accueil Individualisé)",
        body: "Le PAI organise tout : le protocole d'urgence, les médicaments à l'école, les aménagements de la cantine, du sport, des sorties scolaires. C'est le médecin scolaire qui le rédige avec le médecin traitant et la famille.",
        who: "Le médecin scolaire + le directeur / chef d'établissement + la famille",
        ico: "📋",
        relatedNode: "PAI"
      },
      {
        title: "Étape 2 — Vérifier l'application au quotidien",
        body: "L'infirmier scolaire (s'il y en a un) ou le directeur tient le PAI à jour. Vérifiez que tous les adultes au contact de l'enfant (cantine, périscolaire, sorties) sont au courant.",
        who: "L'infirmier scolaire · Le directeur · La CPE (au collège)",
        ico: "👁️",
        relatedNode: "InfirmierScolaire"
      },
      {
        title: "Étape 3 — Renouveler chaque année",
        body: "Le PAI est annuel : il doit être actualisé à chaque rentrée. Pensez à anticiper en juin pour la rentrée de septembre.",
        who: "Le médecin scolaire + la famille",
        ico: "🔄"
      }
    ],
    tips: [
      "Le PAI s'applique aussi à la cantine et au périscolaire (mairie de Paris).",
      "Si la maladie chronique a un impact lourd sur la scolarité, un PPS peut aussi être demandé en complément du PAI.",
      "Le PAI est en cours d'intégration dans le LPI (Livret de Parcours Inclusif)."
    ]
  },

  {
    id: "harcelement",
    icon: "🛡️",
    color: "prevention",
    title: "Mon enfant subit du harcèlement (à l'école ou en ligne)",
    summary: "Moqueries répétées, exclusion, violences, cyberharcèlement (WhatsApp, réseaux sociaux). Un protocole national existe : le programme pHARe.",
    forClasses: "Du CM1 à la Terminale (programme pHARe étendu à tout le primaire depuis 2023, en pratique CP — Terminale).",
    steps: [
      {
        title: "Étape 1 — Signaler immédiatement",
        body: "Contactez le référent pHARe de l'école ou de l'établissement (un enseignant désigné). Vous pouvez aussi appeler le 3018 (numéro national gratuit, anonyme).",
        who: "Le référent pHARe (à demander au directeur / chef d'établissement) · Le 3018",
        ico: "📞",
        relatedNode: "pHARe"
      },
      {
        title: "Étape 2 — Le protocole pHARe se déclenche",
        body: "Le référent pHARe enquête, organise une médiation, met en place des élèves ambassadeurs, contacte les familles concernées. Si le harcèlement est grave, un signalement est fait.",
        who: "Le référent pHARe · La CPE · Le chef d'établissement",
        ico: "⚙️"
      },
      {
        title: "Étape 3 — Soutien à l'enfant",
        body: "Le harcèlement crée une anxiété scolaire forte. Le Maître G (en école) ou le Psy-EN peut accompagner l'enfant. Au collège / lycée, l'infirmier scolaire et le CMP (Centre Médico-Psychologique) sont des relais.",
        who: "Maître G · Psy-EN · Infirmier scolaire · CMP",
        ico: "❤️",
        relatedNode: "MaitreG"
      },
      {
        title: "Étape 4 — Si rien ne change",
        body: "Demandez une rencontre avec le chef d'établissement et écrivez à la DASEN. La FCPE peut vous accompagner. En cas de gravité, dépôt de plainte possible.",
        who: "DASEN · FCPE · Police / Gendarmerie en cas de violence",
        ico: "⚖️"
      }
    ],
    tips: [
      "Le 3018 est gratuit, confidentiel, et peut faire retirer des contenus en ligne.",
      "46 % des parents ne connaissent pas le programme pHARe (Grande Enquête FCPE 2025) — vous avez le droit de le réclamer.",
      "Conservez toutes les preuves (captures d'écran, mails, SMS)."
    ]
  },

  {
    id: "allophone",
    icon: "🌍",
    color: "structure",
    title: "Mon enfant arrive en France et ne parle pas (encore) français",
    summary: "Un dispositif spécifique existe : l'UPE2A (Unité Pédagogique pour Élèves Allophones Arrivants). Il propose des cours de français intensifs avec une inclusion progressive en classe ordinaire.",
    forClasses: "De l'élémentaire au lycée. En maternelle : accueil direct en classe ordinaire avec accompagnement.",
    steps: [
      {
        title: "Étape 1 — Inscrire l'enfant à l'école / au collège",
        body: "L'inscription se fait à la mairie (1ᵉʳ degré) ou directement à l'établissement (2ⁿᵈ degré). Tout enfant a le droit à l'école, quelle que soit la situation administrative de la famille.",
        who: "Mairie du 12ᵉ ou établissement du secteur",
        ico: "🏫"
      },
      {
        title: "Étape 2 — Demander une orientation UPE2A",
        body: "L'UPE2A propose des cours de français langue de scolarisation (FLS) en groupes restreints, avec une inclusion progressive en classe ordinaire selon les progrès. Durée : 1 à 2 ans en général.",
        who: "Le directeur d'école · Le CASNAV (Centre Académique pour la Scolarisation des Allophones) · La DASEN",
        ico: "🗣️",
        relatedNode: "UPE2A"
      },
      {
        title: "Étape 3 — Suivre les progrès",
        body: "L'enseignant UPE2A coordonne les progrès. Si des difficultés persistent au-delà de la langue (dyslexie, TDAH, traumatisme…), un PPRE, PAP ou saisine MDPH peut être déclenché en parallèle.",
        who: "L'enseignant UPE2A · Le médecin scolaire si besoin",
        ico: "📈"
      }
    ],
    tips: [
      "Présent dans de nombreux établissements parisiens. Le lycée professionnel Chennevière-Malézieux (12ᵉ) en dispose.",
      "Vous avez le droit à un interprète pour les rendez-vous officiels (école, MDPH).",
      "L'enfant ne perd pas sa langue maternelle — au contraire, le bilinguisme est un atout."
    ]
  },

  {
    id: "refus-ecole",
    icon: "😟",
    color: "soin",
    title: "Mon enfant refuse d'aller à l'école / a très peur",
    summary: "Phobie scolaire, anxiété, mal-être. C'est un signal qu'il ne faut pas négliger : plus on agit tôt, mieux c'est.",
    forClasses: "De la maternelle (TPS) au lycée (Terminale) — toute la scolarité.",
    steps: [
      {
        title: "Étape 1 — En parler avec l'enfant et l'enseignant",
        body: "Demandez ce qu'il vit (peur d'un adulte, d'autres élèves, d'une matière, ambiance de classe ?). Parlez-en à l'enseignant et au directeur / CPE pour comprendre la situation côté école.",
        who: "L'enseignant · Le directeur · La CPE",
        ico: "💬",
        relatedNode: "CPE"
      },
      {
        title: "Étape 2 — Vérifier qu'il n'y a pas de harcèlement",
        body: "L'anxiété scolaire est très souvent liée à du harcèlement (voir le scénario harcèlement). Ne négligez pas cette piste.",
        who: "Référent pHARe · CPE · Infirmier scolaire",
        ico: "🛡️",
        relatedNode: "pHARe"
      },
      {
        title: "Étape 3 — Mobiliser les acteurs internes",
        body: "En école : le Maître G (RASED) intervient justement sur le mal-être scolaire. Le Psy-EN peut faire un bilan. Au collège / lycée : l'infirmier scolaire et le Psy-EN B sont des relais.",
        who: "Maître G · Psy-EN · Infirmier scolaire · Psy-EN B",
        ico: "❤️",
        relatedNode: "MaitreG"
      },
      {
        title: "Étape 4 — Soin externe",
        body: "Le CMP (Centre Médico-Psychologique) propose un suivi psy / psychiatrique gratuit. ATTENTION : 6 à 18 mois de délai à Paris — orientez très tôt.",
        who: "Le médecin traitant peut prescrire · La famille peut aussi appeler directement",
        ico: "🩺",
        relatedNode: "CMP"
      }
    ],
    tips: [
      "Le délai CMP / CMPP à Paris est de 6 à 18 mois. Prenez rendez-vous DÈS la suspicion, sans attendre que la situation se dégrade.",
      "Si l'enfant ne peut plus aller à l'école, un dispositif d'enseignement à distance (CNED réglementé) existe sur certificat médical.",
      "Vous n'êtes pas seuls : la FCPE et les associations parents peuvent vous accompagner."
    ]
  }
];

/* Ajout dans comparaison : classes explicites */
if (DATA.comparison && DATA.comparison.rows) {
  DATA.comparison.columns = [
    { key: "profile",   label: "Public cible" },
    { key: "classes",   label: "Classes" },
    { key: "medical",   label: "Avis médical" },
    { key: "trigger",   label: "Qui le déclenche" },
    { key: "duration",  label: "Durée" },
    { key: "rights",    label: "Droits / Aménagements" },
    { key: "paris",     label: "Délai Paris" }
  ];
  DATA.comparison.rows.forEach(row => {
    row.classes = DATA.classes[row.id] || "—";
  });
}
