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

];
