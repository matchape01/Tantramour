/**
 * TANTRAMOUR 2026 — Référentiel : Consignes Récurrentes
 * Chaque entrée : { id, valueFr, valueEn, descriptif, placements, actif, types }
 *   id          : identifiant unique (préfixe COREC_)
 *   valueFr     : texte de la consigne en français
 *   valueEn     : texte de la consigne en anglais
 *   descriptif  : description interne (usage, contexte)
 *   placements  : tableau parmi "Avant", "Pendant", "Après", "Logistique", "Spécifique", "Participant"
 *   actif       : true = consigne active
 *   types       : tableau de types d'ateliers (vide = tous)
 */
var REF_CONSIGNES_RECURRENTES = [
  {
    id: "COREC_NEW001",
    valueFr: "• Aider à transporter le matériel son et/ou instruments de musique dans la salle",
    valueEn: "• Help bring the sound equipment and/or musical instruments",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","DJ Set","POOL PARTY"]
  },
  {
    id: "COREC_NEW002",
    valueFr: "• Récupérer des matelas dans une autre salle",
    valueEn: "• Collect mats from another room",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW003",
    valueFr: "• Récupérer des coussins dans une autre salle",
    valueEn: "• Collect cushions from another room",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW004",
    valueFr: "• Récupérer des tapis de yoga dans une autre salle",
    valueEn: "• Collect yoga mats from another room",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW005",
    valueFr: "• Récupérer des chaises dans une autre salle",
    valueEn: "• Collect chairs from another room",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW006",
    valueFr: "• Récupérer des briques de yoag dans une autre salle",
    valueEn: "• Collect yoag bricks  from another room",
    descriptif: "",
    placements: [],
    actif: true,
    types: []
  },
  {
    id: "COREC_NEW007",
    valueFr: "• Installer les matelas",
    valueEn: "• Lay out the mattresses",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW008",
    valueFr: "• Installer les matelas en étoile autour de l'autel central",
    valueEn: "• Arrange the mattresses in a star shape around the central altar",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW009",
    valueFr: "• Installer les coussins",
    valueEn: "• Set up the cushions",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW010",
    valueFr: "• Installer les coussins (2 par matelas)",
    valueEn: "• Set up the cushions",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW011",
    valueFr: "• Installer les tapis de yoga",
    valueEn: "• Lay out the yoga mats",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW012",
    valueFr: "• Installer les chaises en conférence",
    valueEn: "• Set up the chairs",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW013",
    valueFr: "• Installer les chaises en cercle",
    valueEn: "• Set up the chairs",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW014",
    valueFr: "• Installer les spots lumineux de Felix",
    valueEn: "• Set up Felix’s spotlights",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)"]
  },
  {
    id: "COREC_NEW015",
    valueFr: "• Allumer un peu d’encens, dans le respect des consignes du lieu et en restant attentif aux personnes sensibles aux odeurs",
    valueEn: "• Light some incense, following the venue’s guidelines and being mindful of those who are sensitive to smells",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW016",
    valueFr: "• Allumer les bougies vraies et/ou LED",
    valueEn: "• Switch on the LED candles",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW017",
    valueFr: "• Allumer les bougies chauffe plat vraies et/ou LED",
    valueEn: "• Switch on the LED tea-light candles",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW018",
    valueFr: "• Préparer l'autel central",
    valueEn: "• Prepare the central altar",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)"]
  },
  {
    id: "COREC_NEW019",
    valueFr: "• Installer des assiettes en carton pour poser l'huile de massage et quelques feuilles de sopalin à côté de chaque matelas",
    valueEn: "• Place some paper plates to hold the massage oil and a few sheets of paper towels next to each mattress",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW020",
    valueFr: "• Faire lire à chaque participant la Charte du Temple de l’Amour (affichée à l’entrée)",
    valueEn: "• Ensure that every participant reads the Temple of Love Charter (displayed at the entrance)",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW021",
    valueFr: "• Vérifier clairement le consentement",
    valueEn: "• Clearly verify consent",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW022",
    valueFr: "• Ouvrir les baies plastiques du Chapiteau SHIVA",
    valueEn: "• Open the plastic windows of the SHIVA",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: ["CEREMONIE & CONCERT","RASSEMBLEMENT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "COREC_NEW023",
    valueFr: "• Sauger les participants à leur arrivée",
    valueEn: "• Smudge participants at the entrance",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW024",
    valueFr: "• Aider les participants à trouver un.e partenaire si nécesssaire",
    valueEn: "• Help participants find a partner if necessary",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)"]
  },
  {
    id: "COREC_NEW025",
    valueFr: "• Soutenir la logistique des pratiques en binôme / petits groupes (répartition, timing, espaces)",
    valueEn: "• Support the logistics of pair work and small-group activities (group allocation, timing, spaces)",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW026",
    valueFr: "• Entrer dans la pratique si besoin",
    valueEn: "• Step into the practice if required",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)"]
  },
  {
    id: "COREC_NEW027",
    valueFr: "• Faire la démo de la pratique",
    valueEn: "• Do the demo of the practise",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)"]
  },
  {
    id: "COREC_NEW028",
    valueFr: "• Tirer les rideaux si nudité",
    valueEn: "• Close the curtains if there is nudity",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW029",
    valueFr: "• Assister les participants qui ont besoin d'aide (mouchoirs, coussins...)",
    valueEn: "• Assist participants who need help (tissues, cushions, etc.)",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW030",
    valueFr: "• Signaler à l'animateur les besoins des participants",
    valueEn: "• Inform the facilitator of the participants’ needs",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","DJ Set","POOL PARTY","RASSEMBLEMENT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "COREC_NEW031",
    valueFr: "• Signaler à l'animateur les éventuels débordements et manquements aux consignes",
    valueEn: "• Report any disruptive behaviour or breaches of the rules to the organiser",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW032",
    valueFr: "• Intervenir en douceur si une dynamique sort du cadre",
    valueEn: "• Intervene gently if a situation gets out of hand",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW033",
    valueFr: "• Rappeler avec bienveillance les règles du temple si nécessaire",
    valueEn: "• Kindly remind participants of the temple’s rules if necessary",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW034",
    valueFr: "• Se coordonner avec une \"Grande Oreille - Angel\" en cas de doute ou tensions",
    valueEn: "• Coordinate with a ‘Grande Oreille – Angel’ in case of doubt or tension",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW035",
    valueFr: "• Distribuer les masques pour les yeux aux participants",
    valueEn: "• Hand out the blindfolds to the participants",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)"]
  },
  {
    id: "COREC_NEW036",
    valueFr: "• Tenir l'espace (à préciser)",
    valueEn: "• Hold space",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT"]
  },
  {
    id: "COREC_NEW037",
    valueFr: "• Donner un micro aux participants qui souhaitent poser des questions",
    valueEn: "• Give the mic to participants who wish to ask questions",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["CONFERENCE","TANTRA CAFE","RASSEMBLEMENT"]
  },
  {
    id: "COREC_NEW038",
    valueFr: "• Laisser partir les participants qui quittent l'atelier en cours de route",
    valueEn: "• Let participants who wish to leave the workshop do so at any point",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "COREC_NEW039",
    valueFr: "• Désinfecter absolument les mains des participants avant qu'ils ne quittent leur matelas, pendant l'atelier ou à la fin",
    valueEn: "• Disinfect participant's hands before they get off their mats, during the workshop or at the end",
    descriptif: "",
    placements: ["Pendant","Après"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW040",
    valueFr: "• Signaler tout incident à l'équipe organisatrice",
    valueEn: "• Report any incidents to the organizing team",
    descriptif: "",
    placements: ["Pendant","Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","DJ Set","ATELIER ARTISTIQUE (Matin)","CONFERENCE","POOL PARTY","RASSEMBLEMENT","TANTRA CAFE"]
  },
  {
    id: "COREC_NEW041",
    valueFr: "• Récupérer les masques pour les yeux auprès des participants",
    valueEn: "• Collect blindfolds from participants",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)"]
  },
  {
    id: "COREC_NEW042",
    valueFr: "• Ranger le matériel de massage (huile, coupelles, gel hydro, sopalin)",
    valueEn: "• Store massage equipment (oil, cups, hydrogel, kitchen roll)",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)"]
  },
  {
    id: "COREC_NEW043",
    valueFr: "• Nettoyer la cendre de l'encens",
    valueEn: "• Clean incense ash",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT"]
  },
  {
    id: "COREC_NEW044",
    valueFr: "• Eteindre les bougies (vraies et/ou LED)",
    valueEn: "• Switch off the candles (real and/or LED)",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW045",
    valueFr: "• Ranger les tapis de yoga",
    valueEn: "• Tidy away the yoga mats",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","RASSEMBLEMENT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "COREC_NEW046",
    valueFr: "• Ranger les matelas",
    valueEn: "• Tidy away the mattresses",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT"]
  },
  {
    id: "COREC_NEW047",
    valueFr: "• Ranger les chaises",
    valueEn: "• Tidy away the chairs",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT"]
  },
  {
    id: "COREC_NEW048",
    valueFr: "• Ranger les coussins",
    valueEn: "• Tidy away the cushions",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","RASSEMBLEMENT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "COREC_NEW049",
    valueFr: "• Rapporter les tapis de yoga dans la salle d'origine",
    valueEn: "• Return the yoga mats to their original room",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","RASSEMBLEMENT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "COREC_NEW050",
    valueFr: "• Rapporter les matelas dans la salle d'origine",
    valueEn: "• Return the mats to their original room",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT"]
  },
  {
    id: "COREC_NEW051",
    valueFr: "• Rapporter les coussins dans la salle d'origine",
    valueEn: "• Return the cushions to their original room",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","RASSEMBLEMENT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "COREC_NEW052",
    valueFr: "• Rapporter les chaises dans la salle d'origine",
    valueEn: "• Return the chairs to their original room",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT"]
  },
  {
    id: "COREC_NEW053",
    valueFr: "• Aider à remporter le matériel de musique",
    valueEn: "• Help bring the musical equipment back",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","DJ Set","POOL PARTY"]
  },
  {
    id: "COREC_NEW054",
    valueFr: "• Pas d'instructions particulières, viens comme tu es !",
    valueEn: "• No specific instructions – just come as you are !",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","CEREMONIE & CONCERT","DJ Set","POOL PARTY","RASSEMBLEMENT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "COREC_NEW055",
    valueFr: "• Mixte, accessible à tous.tes, toux niveaux, sans prérequis",
    valueEn: "• Open to everyone, all levels, no prior experience required",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","CEREMONIE & CONCERT","CONFERENCE","TANTRA CAFE"]
  },
  {
    id: "COREC_NEW056",
    valueFr: "• Tous niveaux de tantra",
    valueEn: "• All levels of tantra",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)"]
  },
  {
    id: "COREC_NEW057",
    valueFr: "• Célibataires et couples",
    valueEn: "• Both singles and couples",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW058",
    valueFr: "• Viens avec un.e partenaire",
    valueEn: "• Come along with a partner",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)"]
  },
  {
    id: "COREC_NEW059",
    valueFr: "• Viens avec un.e partenaire ou sinon tu en trouveras un.e sur place",
    valueEn: "• Come along with a partner or you’ll find one directly at the workshop",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW060",
    valueFr: "• Viens à l'heure, fermeture des portes pour la présentation du cadre et des règles. Pas de possibilité de rentrer si tu arrives en retard",
    valueEn: "• Please arrive on time. Doors will close to explain framework and rules. You will not be admitted if you arrive late",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "COREC_NEW061",
    valueFr: "• Possibilité de sortir quand tu le souhaites, mais toute sortie est définitive",
    valueEn: "• You may leave whenever you wish, but once you leave, you cannot return",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","DJ Set","POOL PARTY","RASSEMBLEMENT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "COREC_NEW062",
    valueFr: "• Apporte ta gourde d'eau, une serviette si tu transpires beaucoup, une tenue souple et confortable pour bouger",
    valueEn: "• Bring a water bottle, towel if you sweat a lot & comfortable clothes for movement.",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","MEDITATION / YOGA"]
  },
  {
    id: "COREC_NEW063",
    valueFr: "• N'oublies pas ton sourire et ta curiosité",
    valueEn: "• Don't forget your smil and curiosity",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","DJ Set","POOL PARTY","RASSEMBLEMENT","TANTRA CAFE","CONFERENCE"]
  },
  {
    id: "COREC_NEW064",
    valueFr: "• Apporte ton kit tantrique (paréo, serviette/drap de protection matelas, huile de massage)",
    valueEn: "• Bring your tantric kit (sarong, mattress protecting sheet, massage oil)",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW065",
    valueFr: "• Apporte ton paréo si tu le souhaites",
    valueEn: "• Bring your sarong if you want",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)"]
  },
  {
    id: "COREC_NEW066",
    valueFr: "• Apporte ton masque pour les yeux si tu en as",
    valueEn: "• Bring your own blindfold if you have one",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)"]
  },
  {
    id: "COREC_NEW067",
    valueFr: "• Apporte un drap pour protéger le matelas",
    valueEn: "• Bring a sheet to protect the mattress",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","LOVE TEMPLE"]
  },
  {
    id: "COREC_NEW068",
    valueFr: "• Apporte ton huile de massage si tu le souhaites",
    valueEn: "• Bring your massage oil if you want",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)"]
  },
  {
    id: "COREC_NEW069",
    valueFr: "• Apporte ton coussin/zafu et/ou tapis de yoga personnel si tu le souhaites",
    valueEn: "• Bring your own cushion/zafu and/or mat if you want",
    descriptif: "",
    placements: ["Participant"],
    actif: true,
    types: ["MEDITATION / YOGA","ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)","LOVE TEMPLE","CEREMONIE & CONCERT","RASSEMBLEMENT","TANTRA CAFE","CONFERENCE"]
  },
];
