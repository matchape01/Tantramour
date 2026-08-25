/**
 * TANTRAMOUR 2026 — Référentiel : Consignes Récurrentes
 * Chaque entrée : { id, valueFr, valueEn, descriptif, placements, actif }
 *   id          : identifiant unique (préfixe COREC_)
 *   valueFr     : texte de la consigne en français
 *   valueEn     : texte de la consigne en anglais
 *   descriptif  : description interne (usage, contexte)
 *   placements  : tableau parmi "Avant", "Pendant", "Après"
 *   actif       : true = consigne active
 */
var REF_CONSIGNES_RECURRENTES = [
  {
    id: "COREC_001",
    valueFr: "Vérifier que la salle est prête et le matériel en place avant l'arrivée des participants.",
    valueEn: "Check that the room is ready and the equipment is in place before participants arrive.",
    descriptif: "Consigne récurrente d'exemple — avant l'atelier",
    placements: ["Avant"],
    actif: true
  },
  {
    id: "COREC_002",
    valueFr: "Veiller à maintenir un espace sécurisé et bienveillant pendant toute la durée de l'atelier.",
    valueEn: "Ensure a safe and caring space is maintained throughout the workshop.",
    descriptif: "Consigne récurrente d'exemple — pendant l'atelier",
    placements: ["Pendant"],
    actif: true
  },
  {
    id: "COREC_003",
    valueFr: "Ranger le matériel, nettoyer la salle et signaler tout incident à l'équipe organisatrice.",
    valueEn: "Put away equipment, clean the room, and report any incidents to the organizing team.",
    descriptif: "Consigne récurrente d'exemple — après l'atelier",
    placements: ["Pendant","Après"],
    actif: true
  },
  {
    id: "COREC_004",
    valueFr: "Ne plus accepter de participants après 15 min.",
    valueEn: "sgd",
    descriptif: "sdg",
    placements: ["Avant"],
    actif: true
  },
];
