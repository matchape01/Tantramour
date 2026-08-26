/**
 * TANTRAMOUR 2026 — Référentiel : Consignes Type
 * Chaque entrée : { id, valueFr, valueEn, descriptif, placements, actif, types }
 *   id          : identifiant unique (préfixe CONS_)
 *   valueFr     : libellé / texte en français
 *   valueEn     : libellé / texte en anglais
 *   descriptif  : description interne (usage, contexte)
 *   placements  : tableau de valeurs parmi :
 *                 "Avant"       → Consignes helpers : avant l'atelier
 *                 "Pendant"     → Consignes helpers : pendant l'atelier
 *                 "Après"       → Consignes helpers : après l'atelier
 *                 "Logistique"  → Informations logistiques
 *                 "Spécifique"  → Besoins logistiques spécifiques
 *                 "Participant" → Instructions participants
 *   actif       : true = consigne active, false = désactivée globalement
 *   types       : tableau de valeurs REF_TYPES (vide = tous les types)
 */
var REF_CONSIGNES_TYPE = [
  {
    id: "CONS_001",
    valueFr: "• Récupérer la clé de la salle au QG et ouvrir la salle",
    valueEn: "• Collect the room key from HQ and open the room",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_002",
    valueFr: "• Aérer la salle",
    valueEn: "• Air the room",
    descriptif: "",
    placements: ["Avant","Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_003",
    valueFr: "• Vider les poubelles si besoin",
    valueEn: "• Empty the bins if necessary",
    descriptif: "",
    placements: ["Avant","Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","RASSEMBLEMENT"]
  },
  {
    id: "CONS_004",
    valueFr: "• Balayer la salle et laver le sol",
    valueEn: "• Sweep the room and mop the floor",
    descriptif: "",
    placements: ["Avant","Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","RASSEMBLEMENT"]
  },
  {
    id: "CONS_005",
    valueFr: "• Purifier la salle à la sauge ou palo santo",
    valueEn: "• Purify the room with sage or palo santo",
    descriptif: "",
    placements: ["Avant","Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","RASSEMBLEMENT"]
  },
  {
    id: "CONS_006",
    valueFr: "• Vérifier et ajuster le coin bleu",
    valueEn: "• Check and adjust the ‘blue corner’",
    descriptif: "",
    placements: ["Avant","Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_007",
    valueFr: "• Préparer ou vérifier l’autel (tissus, objets rituels, offrandes, bougies, encens, fleurs...)",
    valueEn: "• Prepare or check the altar (cloths, ritual objects, offerings, candles, incense, flowers, etc.)",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_008",
    valueFr: "• Vérifier et ajuster la température AC et aération",
    valueEn: "• Check and adjust the air conditioning temperature and ventilation",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_009",
    valueFr: "• Vérifier et ajuster l'ambiance lumineuse",
    valueEn: "• Check and adjust the lighting",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_010",
    valueFr: "• Faire un test son (enceintes, micro, musique)",
    valueEn: "• Carry out a sound check (speakers, microphone, music)",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_011",
    valueFr: "• Si des tapis de yoga, matelas, coussins, chaises ont été déplacés, prévenir l'équipe organisatrice",
    valueEn: "• If you have moved any yoga mats, mats, cushions or chairs, please inform the organisers",
    descriptif: "",
    placements: ["Avant","Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","RASSEMBLEMENT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "CONS_012",
    valueFr: "• Accueillir les participants et filtrer si besoin (état émotionnel)",
    valueEn: "• Welcome participants and screen if necessary (emotional state)",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_013",
    valueFr: "• Vérifier les bracelets",
    valueEn: "• Check the wristbands",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_014",
    valueFr: "• Compter les participants et s'assurer que la jauge est respectée",
    valueEn: "• Count the participants and ensure the capacity limit is adhered to",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_015",
    valueFr: "• Ne pas accepter de participants au delà de 15min après le début de l'atelier",
    valueEn: "• Refuse anyone arriving more than 15 minutes after the workshop has started",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "CONS_016",
    valueFr: "• Soutenir le cadre établi par l'animateur",
    valueEn: "• Support the framework established by the facilitator",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_017",
    valueFr: "• Soutenir l'animateur pour respecter le timing de l'atelier",
    valueEn: "• Support the facilitator in sticking to the workshop schedule",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "CONS_018",
    valueFr: "• Assurer une présence discrète avec un regard bienveillant et disponible",
    valueEn: "• Maintain a discreet presence, whilst being approachable and attentive",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_019",
    valueFr: "• Aider en cas de besoin matériel, logistique",
    valueEn: "• Provide assistance with equipment and logistics id needed",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","DJ Set","POOL PARTY","RASSEMBLEMENT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "CONS_020",
    valueFr: "• Être attentif·ve aux signes de malaise, surcharge émotionnelle, conflits",
    valueEn: "• Be alert to signs of discomfort, emotional overwhelm or conflict",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","RASSEMBLEMENT"]
  },
  {
    id: "CONS_021",
    valueFr: "• Intervenir en douceur si une dynamique sort du cadre posé",
    valueEn: "• Intervene gently if a dynamic strays from the established framework",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","POOL PARTY","DJ Set"]
  },
  {
    id: "CONS_022",
    valueFr: "• Veiller à la bonne compréhension des consignes",
    valueEn: "• Ensure that instructions are clearly understood",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_023",
    valueFr: "• Veiller à maintenir un espace sécurisé et bienveillant pendant toute la durée de l'atelier",
    valueEn: "• Ensure a safe and caring space is maintained throughout the workshop",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","LOVE TEMPLE","CEREMONIE & CONCERT","DJ Set"]
  },
  {
    id: "CONS_024",
    valueFr: "• Ramasser les objets oubliés et les déposer à l'accueil",
    valueEn: "• Collect any items left behind and hand them in at reception",
    descriptif: "",
    placements: ["Pendant","Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_025",
    valueFr: "• Fludifier la sortie des participants",
    valueEn: "• Ensure a smooth exit for participants",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_026",
    valueFr: "• Eteindre la climatisation",
    valueEn: "• Switch of the air conditionnning system",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_028",
    valueFr: "• Ranger les équipements et la salle",
    valueEn: "• Store equipments and clear the room",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","MEDITATION / YOGA"]
  },
  {
    id: "CONS_029",
    valueFr: "• Eteindre les lumières",
    valueEn: "• Switch off the lights",
    descriptif: "",
    placements: [],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_030",
    valueFr: "• Fermer la salle et déposer les clés au QG",
    valueEn: "• Lock up the room and hand in the keys at HQ",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "CONS_031",
    valueFr: "• Ramener le matériel de Felix dans la salle Orion",
    valueEn: "• Bring Felix's equipment back into Orion",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","MEDITATION / YOGA"]
  },
];
