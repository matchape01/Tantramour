/**
 * TANTRAMOUR 2026 — Référentiel : Jours
 * Modifier cette liste pour ajouter / renommer / supprimer des jours.
 * Chaque entrée : { id, value, label, date, dateDdMmYyyy }
 *   id           : clé unique (stable, ne jamais changer)
 *   value        : clé utilisée dans AGENDA (champ "jour")
 *   label        : texte affiché dans les listes déroulantes
 *   date         : valeur correspondante du champ "date" dans AGENDA
 *   dateDdMmYyyy : date au format DD/MM/YYYY
 */
var REF_JOURS = [
  { id: "J1", value: "Jour 1", label: "Jour 1 — Vendredi 27 août",     date: "Vendredi 27 aout",     dateDdMmYyyy: "27/08/2027" },
  { id: "J2", value: "Jour 2", label: "Jour 2 — Samedi 28 août",       date: "Samedi 28 aout",       dateDdMmYyyy: "28/08/2027" },
  { id: "J3", value: "Jour 3", label: "Jour 3 — Dimanche 29 août",     date: "Dimanche 29 aout",     dateDdMmYyyy: "29/08/2027" },
  { id: "J4", value: "Jour 4", label: "Jour 4 — Lundi 30 août",        date: "Lundi 30 aout",        dateDdMmYyyy: "30/08/2027" },
  { id: "J5", value: "Jour 5", label: "Jour 5 — Mardi 31 août",        date: "Mardi 31 aout",        dateDdMmYyyy: "31/08/2027" },
  { id: "J6", value: "Jour 6", label: "Jour 6 — Mercredi 1 septembre",  date: "Mercredi 1 septembre", dateDdMmYyyy: "01/09/2027" },
  { id: "J7", value: "Jour 7", label: "Jour 7 — Jeudi 2 septembre",     date: "Jeudi 2 septembre",    dateDdMmYyyy: "02/09/2027" },
];
