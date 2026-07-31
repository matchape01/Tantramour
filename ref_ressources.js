/**
 * TANTRAMOUR 2026 — Référentiel Unifié : Ressources
 *
 * ⚠️  Ce fichier doit être chargé APRÈS ref_resource_types.js
 *
 * Chaque entrée : { id, value, roles }
 *   id    : clé unique (stable, ne jamais changer) — préfixe "R_"
 *   value : nom exact tel qu'il apparaît dans AGENDA
 *   roles : tableau des rôles possibles pour cette personne
 *           Valeurs acceptées : "facilitateur" | "helper" | "traducteur" | "angel"
 *
 * ⚠️  Pour les rapports existants, les alias de compatibilité en bas de fichier
 *     reconstituent automatiquement REF_FACILITATEURS, REF_HELPERS,
 *     REF_TRADUCTEURS et REF_ANGELS depuis cette liste.
 */
var REF_RESSOURCES = [
  { id: "R_ALEXANDRE_F",     value: "Alexandre Fourcault",                       roles: ["helper"],                                               langues: ["FR"], tel: "", email: "" },
  { id: "R_ALEXANDRE_S",     value: "Alexandre Sattler",                         roles: ["helper"],                                               langues: ["FR"], tel: "", email: "" },
  { id: "R_AMANA",           value: "Amana (William Duplain)",                   roles: ["facilitateur", "helper", "traducteur", "colibri"],      langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_MATTHIEU",        value: "Atman Clochette (Matthieu Chapeleau)",      roles: ["facilitateur", "helper", "admin", "manager"],           langues: ["FR"], tel: "+33(0)695485300", email: "" },
  { id: "R_AUDREY",          value: "Audrey Barthelemy",                         roles: ["facilitateur", "helper", "colibri"],                    langues: ["FR"], tel: "", email: "" },
  { id: "R_AURELIE",         value: "Aurelie Lechardeur",                        roles: ["helper", "angel"],                                      langues: ["FR"], tel: "", email: "" },
  { id: "R_ALEXANDRE_R",     value: "Bhaskar (Alexandre Roque)",                 roles: ["helper", "traducteur"],                                 langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_BORIS",           value: "Boris Desvignes",                           roles: ["facilitateur", "helper", "angel"],                      langues: ["FR"], tel: "", email: "" },
  { id: "R_BRUNO",           value: "Bruno Deck",                                roles: ["facilitateur", "healer"],                               langues: ["FR"], tel: "", email: "" },
  { id: "R_CARINE",          value: "Carine Janez",                              roles: ["helper", "traducteur"],                                 langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_CEDRIC",          value: "Cedric Vesper",                             roles: ["facilitateur", "helper", "artist"],                     langues: ["FR"], tel: "", email: "" },
  { id: "R_CHARLOTTE",       value: "Charlotte Chakshu",                         roles: ["stand"],                                                langues: ["FR"], tel: "", email: "" },
  { id: "R_CLAUDE",          value: "Claude Brame",                              roles: ["facilitateur", "helper", "colibri", "guest", "artist"], langues: ["FR"], tel: "", email: "" },
  { id: "R_DAMIEN",          value: "Damien Eissen",                             roles: ["facilitateur", "helper"],                               langues: ["FR"], tel: "", email: "" },
  { id: "R_DANIEL",          value: "Daniel Latapie",                            roles: ["facilitateur", "helper", "traducteur", "angel"],        langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_DAVID",           value: "David Llorca",                              roles: ["facilitateur", "helper", "colibri", "artist"],          langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_DELPHINE",        value: "Delphine Del Dupre",                        roles: ["helper", "traducteur"],                                 langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_DIPTI",           value: "Dipti - Mirabai India Sagrada",             roles: ["stand"],                                                langues: ["FR"], tel: "", email: "" },
  { id: "R_DORIAN",          value: "Dorian Vallet",                             roles: ["facilitateur", "helper", "traducteur", "manager"],      langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_ECHOCLEM",        value: "Echo Clem (Clement Marchal)",               roles: ["helper", "manager"],                                    langues: ["FR"], tel: "", email: "" },
  { id: "R_EMMA",            value: "Emma Roussel",                              roles: ["facilitateur", "helper"],                               langues: ["FR"], tel: "", email: "" },
  { id: "R_FELIX",           value: "Felix Ardevol",                             roles: ["facilitateur", "artist"],                               langues: ["FR"], tel: "", email: "" },
  { id: "R_FRANZ",           value: "Franz Bols thibétains",                     roles: ["stand"],                                                langues: ["FR"], tel: "", email: "" },
  { id: "R_FREDERIC",        value: "Frederic Chalard",                          roles: ["helper"],                                               langues: ["FR"], tel: "", email: "" },
  { id: "R_GUY",             value: "Guy El Hadad - Israel",                     roles: ["facilitateur", "anglophone", "guest", "artist"],        langues: ["EN"], tel: "", email: "" },
  { id: "R_HELENE",          value: "Helene Planquelle",                         roles: ["facilitateur", "helper", "traducteur", "colibri", "artist"], langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_ISHVARI",         value: "Ishvari",                                   roles: ["facilitateur", "helper", "colibri"],                    langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_CLEMENT",         value: "Jivan Muti (Clement Victor)",               roles: ["facilitateur"],                                         langues: ["FR"], tel: "", email: "" },
  { id: "R_JOE",             value: "Joe Jam",                                   roles: ["facilitateur", "healer"],                               langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_KAREN",           value: "Karen Cayuela",                             roles: ["stand"],                                                langues: ["FR"], tel: "", email: "" },
  { id: "R_KELLY",           value: "Kelly Aura",                                roles: ["facilitateur", "guest", "artist"],                      langues: ["FR"], tel: "", email: "" },
  { id: "R_LAURENCE",        value: "Laurence Heitzmann",                        roles: ["facilitateur", "guest"],                                langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_LAURENT",         value: "Laurent Lacoste",                           roles: ["facilitateur", "guest"],                                langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_LINDA",           value: "Linda Stachetti",                           roles: ["facilitateur", "helper", "traducteur", "angel"],        langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_MAEVA",           value: "Maeva Mantione",                            roles: ["helper"],                                               langues: ["FR"], tel: "", email: "" },
  { id: "R_MAHADEVI",        value: "Mahadevi (Tina Defoy)",                     roles: ["facilitateur", "guest"],                                langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_MITSCH",          value: "Mitsch Kohn",                               roles: ["facilitateur", "helper", "traducteur", "colibri", "guest", "artist"], langues: ["EN"], tel: "", email: "" },
  { id: "R_MUKTI",           value: "Mukti (Cecile Yvorel)",                     roles: ["helper", "traducteur", "angel"],                        langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_OHANNA",          value: "Ohanna Le Guennec",                         roles: ["stand"],                                                langues: ["FR"], tel: "", email: "" },
  { id: "R_OUR_ECHO",        value: "Our Echo",                                  roles: ["facilitateur", "anglophone", "guest", "artist"],        langues: ["EN"], tel: "", email: "" },
  { id: "R_PASCAL",          value: "Pascal de Lacaze",                          roles: ["facilitateur", "guest", "artist"],                      langues: ["FR"], tel: "", email: "" },
  { id: "R_PAUL",            value: "Paul Raj Amar",                             roles: ["facilitateur", "helper", "colibri"],                    langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_PHILIPPE",        value: "Philippe Hanrion",                          roles: ["facilitateur", "helper"],                               langues: ["FR"], tel: "", email: "" },
  { id: "R_ROCARDO",         value: "Rocardo_Mirabai India Sagrada",             roles: ["stand"],                                                langues: ["FR"], tel: "", email: "" },
  { id: "R_SABRYNA",         value: "Sabryna",                                   roles: ["facilitateur", "admin", "manager"],                     langues: ["FR"], tel: "", email: "" },
  { id: "R_SAMANTHA",        value: "Samantha Marvels",                          roles: ["facilitateur", "anglophone", "guest"],                  langues: ["EN"], tel: "", email: "" },
  { id: "R_SANDRINE",        value: "Sandrine Bettinelli",                       roles: ["facilitateur", "helper", "traducteur", "colibri", "guest"], langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_SCOTT",           value: "Scott McClure",                             roles: ["facilitateur", "anglophone", "guest"],                  langues: ["EN"], tel: "", email: "" },
  { id: "R_SELMA",           value: "Selma (Celine Laroche)",                    roles: ["facilitateur", "helper", "traducteur", "colibri"],      langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_SEVDA",           value: "Sevda Duroy",                               roles: ["facilitateur", "helper", "colibri"],                    langues: ["FR"], tel: "", email: "" },
  { id: "R_SHIVACHRIS",      value: "ShivaChris",                                roles: ["facilitateur", "admin", "manager"],                     langues: ["FR"], tel: "", email: "" },
  { id: "R_SIMONE",          value: "Simone Bikene",                             roles: ["facilitateur", "healer"],                               langues: ["FR"], tel: "", email: "" },
  { id: "R_SOPHIE",          value: "Sophie O'Heix",                             roles: ["facilitateur", "helper", "colibri"],                    langues: ["FR"], tel: "", email: "" },
  { id: "R_STEPHANE",        value: "Stephane Ahmed",                            roles: ["facilitateur", "helper", "colibri", "artist"],          langues: ["FR"], tel: "", email: "" },
  { id: "R_EMMANUELLE",      value: "Suman (Emmanuelle Cueff)",                  roles: ["facilitateur", "helper", "colibri", "artist"],          langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_TEST",            value: "TEST",                                      roles: ["facilitateur", "helper", "traducteur", "angel", "admin", "manager"], langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_VERA",            value: "Vera De Sousa",                             roles: ["helper"],                                               langues: ["FR"], tel: "", email: "" },
  { id: "R_VERONIQUE",       value: "Veronique Santini Bottemer",                roles: ["helper"],                                               langues: ["FR"], tel: "", email: "" },
  { id: "R_VIRGINIE",        value: "Virginie Bertrand",                         roles: ["facilitateur", "helper", "traducteur", "angel", "artist"], langues: ["FR", "EN"], tel: "", email: "" },
  { id: "R_YANNICK",         value: "Yannick Bohrer",                            roles: ["facilitateur", "helper", "traducteur"],                 langues: ["FR", "EN"], tel: "", email: "" },
];


// ─── Alias de compatibilité ───────────────────────────────────────────────────
// Ces 4 variables reconstituent les anciens référentiels depuis REF_RESSOURCES.
// Les rapports existants continuent de fonctionner sans modification.
var REF_FACILITATEURS = REF_RESSOURCES
  .filter(function(r){ return r.roles.indexOf("facilitateur") !== -1; })
  .map(function(r){ return { id: "F_" + r.id.slice(2), value: r.value }; });

var REF_HELPERS = REF_RESSOURCES
  .filter(function(r){ return r.roles.indexOf("helper") !== -1; })
  .map(function(r){ return { id: "H_" + r.id.slice(2), value: r.value }; });

var REF_TRADUCTEURS = REF_RESSOURCES
  .filter(function(r){ return r.roles.indexOf("traducteur") !== -1; })
  .map(function(r){ return { id: "TR_" + r.id.slice(2), value: r.value }; });

var REF_ANGELS = REF_RESSOURCES
  .filter(function(r){ return r.roles.indexOf("angel") !== -1; })
  .map(function(r){ return { id: "A_" + r.id.slice(2), value: r.value }; });
