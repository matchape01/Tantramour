/**
 * TANTRAMOUR 2026 — Référentiel Unifié : Ressources
 *
 * ⚠️  Ce fichier doit être chargé APRÈS ref_resource_types.js
 *
 * Chaque entrée : { id, value, roles }
 *   id    : clé unique (stable, ne jamais changer) — préfixe "R_"
 *   value : nom exact tel qu'il apparaît dans AGENDA
 *   roles : tableau des rôles possibles pour cette personne
 *           Valeurs acceptées : "animateur" | "helper" | "traducteur" | "angel"
 *
 * ⚠️  Pour les rapports existants, les alias de compatibilité en bas de fichier
 *     reconstituent automatiquement REF_ANIMATEURS, REF_HELPERS,
 *     REF_TRADUCTEURS et REF_ANGELS depuis cette liste.
 */
var REF_RESSOURCES = [
  { id: "R_ALEXANDRE_F",     value: "Alexandre Fourcault",                       roles: ["helper"],                                               langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_ALEXANDRE_S",     value: "Alexandre Sattler",                         roles: ["helper", "colibri"],                                    langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_AMANA",           value: "Amana",                                     roles: ["animateur", "helper", "traducteur", "colibri"],         langues: ["FR", "EN"], tel: "00 41 79 195 91 74", email: "amana.noname@gmail.com", lien: "" },
  { id: "R_MATTHIEU",        value: "Atman Clochette (Matthieu)",                roles: ["animateur", "helper", "admin", "manager", "Mi-Colibri"], langues: ["FR"], tel: "06 95 48 53 00", email: "matthieu.chapeleau@gmail.com", lien: "" },
  { id: "R_AUDREY",          value: "Audrey Barthélémy",                         roles: ["animateur", "helper", "colibri"],                       langues: ["FR"], tel: "06 60 61 57 13", email: "contact@audreybarthelemy.fr", lien: "" },
  { id: "R_ALEXANDRE_R",     value: "Bhaskar (Alexandre Roque)",                 roles: ["helper", "traducteur"],                                 langues: ["FR", "EN"], tel: "", email: "", lien: "" },
  { id: "R_BORIS",           value: "Boris Desvignes",                           roles: ["animateur", "helper", "angel", "Mi-Colibri"],           langues: ["FR"], tel: "(+33) 06 79 68 65 39", email: "boris.desvignes@gmail.com", lien: "" },
  { id: "R_BRUNO",           value: "Bruno Deck",                                roles: ["animateur", "helper", "colibri", "healer"],             langues: ["FR"], tel: "06 03 26 15 17", email: "brunodeck.matanoma@gmail.com", lien: "" },
  { id: "R_CARINE",          value: "Carine Janez",                              roles: ["helper", "traducteur"],                                 langues: ["FR", "EN"], tel: "", email: "", lien: "" },
  { id: "R_CEDRIC",          value: "Cédric Vesper",                             roles: ["animateur", "helper", "artist", "Mi-Colibri"],          langues: ["FR"], tel: "06 26 36 34 90", email: "cedric.vesper@drageau.com", lien: "" },
  { id: "R_CHARLOTTE",       value: "Charlotte Chakshu",                         roles: ["stand"],                                                langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_CLAUDE",          value: "Claude Brame",                              roles: ["animateur", "helper", "colibri", "guest", "artist"],    langues: ["FR"], tel: "06 60 16 25 44", email: "terrenchantee.ok@gmail.com", lien: "" },
  { id: "R_DAMIEN",          value: "Damien Eissen",                             roles: ["animateur", "helper", "Mi-Colibri"],                    langues: ["FR"], tel: "06 85 47 56 55", email: "damien.eissen@gmail.com", lien: "" },
  { id: "R_DANIEL",          value: "Daniel Latapie",                            roles: ["animateur", "helper", "traducteur", "angel", "Mi-Colibri"], langues: ["FR", "EN"], tel: "(+33) 06 26 81 51 07", email: "daniel@daniel-latapie.com", lien: "" },
  { id: "R_DAVID",           value: "David Llorca",                              roles: ["animateur", "helper", "colibri", "artist"],             langues: ["FR", "EN"], tel: "07 66 62 00 37", email: "llorca.david@gmail.com", lien: "" },
  { id: "R_DELPHINE",        value: "Delphine Dupré",                            roles: ["helper", "traducteur"],                                 langues: ["FR", "EN"], tel: "", email: "", lien: "" },
  { id: "R_DIPTI",           value: "Dipti - Mirabai India Sagrada",             roles: ["stand"],                                                langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_SURPRISE",        value: "DJ Surprise",                               roles: ["animateur", "artist"],                                  langues: ["FR", "EN"], tel: "", email: "", lien: "" },
  { id: "R_DORIAN",          value: "Dorian Vallet",                             roles: ["animateur", "helper", "traducteur", "manager", "Mi-Colibri"], langues: ["FR", "EN"], tel: "06 27 91 88 51", email: "onemovevallet@gmail.com", lien: "" },
  { id: "R_ECHOCLEM",        value: "Echo Clem (Clément)",                       roles: ["helper", "manager"],                                    langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_FELIX",           value: "Felix Ardevol",                             roles: ["animateur", "artist"],                                  langues: ["FR"], tel: "06 38 11 03 49", email: "felix@caudiovisuel.com", lien: "" },
  { id: "R_FRANZ",           value: "Franz Bols thibétains",                     roles: ["stand"],                                                langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_FREDERIC",        value: "Frédéric Chalard",                          roles: ["helper"],                                               langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_GUY",             value: "Guy El Hadad",                              roles: ["animateur", "helper", "colibri", "anglophone", "guest", "artist"], langues: ["EN"], tel: "00 972 527 884 466", email: "guyelhadad@gmail.com", lien: "" },
  { id: "R_HELENE",          value: "Hélène Planquelle",                         roles: ["animateur", "helper", "traducteur", "colibri", "artist"], langues: ["FR", "EN"], tel: "06 23 66 61 95", email: "contact@heleneplanquelle.com", lien: "" },
  { id: "R_ISHVARI",         value: "Ishvari",                                   roles: ["animateur", "helper", "colibri"],                       langues: ["FR", "EN"], tel: "00 91 73052 15791", email: "info@ishvaritantra.com", lien: "" },
  { id: "R_CLEMENT",         value: "Jivan Muti (Clément Victor)",               roles: ["animateur", "helper", "colibri"],                       langues: ["FR"], tel: "06 70 04 52 68", email: "contact@lalchimiquecie.com; clement.victor@yahoo.fr", lien: "" },
  { id: "R_JOE",             value: "Joe Jam",                                   roles: ["animateur", "helper", "colibri", "healer"],             langues: ["FR", "EN"], tel: "07 68 60 38 76", email: "massagemeditatif@gmail.com", lien: "" },
  { id: "R_KALISTA",         value: "Kalista",                                   roles: ["animateur", "helper", "colibri", "artist"],             langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_KAREN",           value: "Karen Cayuela",                             roles: ["animateur", "helper", "colibri", "stand"],              langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_KELLY",           value: "Kelly Aura",                                roles: ["animateur", "guest", "artist"],                         langues: ["FR"], tel: "06 64 90 86 38", email: "Kellyauramusic@gmail.com", lien: "" },
  { id: "R_LAURENCE",        value: "Laurence Heitzmann",                        roles: ["animateur", "guest"],                                   langues: ["FR", "EN"], tel: "06 68 48 98 45", email: "heitzmann.laurence@gmail.com", lien: "" },
  { id: "R_LAURENT",         value: "Laurent Lacoste",                           roles: ["animateur", "guest"],                                   langues: ["FR", "EN"], tel: "06 48 38 21 89", email: "lacoste.laurent@gmail.com", lien: "" },
  { id: "R_LINDA",           value: "Linda Stachetti",                           roles: ["animateur", "helper", "traducteur", "angel", "Mi-Colibri"], langues: ["FR", "EN"], tel: "(+33) 06 60 21 15 63", email: "lindas.facilitatrice@gmail.com", lien: "" },
  { id: "R_MAEVA",           value: "Maeva Mantione",                            roles: ["helper"],                                               langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_MAHADEVI",        value: "Mahadevi (Tina Defoy)",                     roles: ["animateur", "helper", "colibri", "guest"],              langues: ["FR", "EN"], tel: "00 1 450 263 4795", email: "lalitatina@yahoo.ca", lien: "" },
  { id: "R_EMMA",            value: "Mahima (Emma Roussel)",                     roles: ["animateur", "helper", "angel", "Mi-Colibri"],           langues: ["FR"], tel: "(+33) 06 88 12 98 66", email: "rousselemma@hotmail.com", lien: "" },
  { id: "R_MITSCH",          value: "Mitsch Kohn",                               roles: ["animateur", "helper", "colibri", "guest", "artist"],    langues: ["EN"], tel: "00 49 1627371402", email: "info@mitschkohn.de", lien: "" },
  { id: "R_MUKTI",           value: "Mukti (Cécile Yvorel)",                     roles: ["helper", "traducteur", "angel"],                        langues: ["FR", "EN"], tel: "(+33) 06 83 16 63 46", email: "", lien: "" },
  { id: "R_OHANNA",          value: "Ohanna Le Guennec",                         roles: ["stand"],                                                langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_OUR_ECHO",        value: "Our Echo",                                  roles: ["animateur", "helper", "colibri", "anglophone", "guest", "artist"], langues: ["EN"], tel: "00 49 174 5242819", email: "echo@ourecho.life", lien: "" },
  { id: "R_PASCAL",          value: "Pascal de Lacaze",                          roles: ["animateur", "guest", "artist"],                         langues: ["FR"], tel: "00 49 170 5536719", email: "p.delacdut@gmail.com", lien: "" },
  { id: "R_PAUL",            value: "Paul Raj Amar",                             roles: ["animateur", "helper", "colibri"],                       langues: ["FR", "EN"], tel: "06 25 80 30 04", email: "paul.amar8@gmail.com", lien: "" },
  { id: "R_PHILIPPE",        value: "Philippe Hanrion",                          roles: ["animateur", "helper", "Mi-Colibri"],                    langues: ["FR"], tel: "06 62 18 36 86", email: "philippe.hanrion@gmx.com", lien: "" },
  { id: "R_ROCARDO",         value: "Rocardo_Mirabai India Sagrada",             roles: ["stand"],                                                langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_SABRYNA",         value: "Sabryna",                                   roles: ["animateur", "helper", "admin", "colibri", "manager"],   langues: ["FR"], tel: "06 63 17 71 80", email: "sabrina_berthoud@yahoo.fr", lien: "" },
  { id: "R_SAMANTHA",        value: "Samantha Marvels",                          roles: ["animateur", "helper", "anglophone", "guest"],           langues: ["EN"], tel: "00 1 808 9711458", email: "samanthamarvels@gmail.com", lien: "" },
  { id: "R_SANDRINE",        value: "Sandrine Bettinelli",                       roles: ["animateur", "helper", "traducteur", "colibri", "guest"], langues: ["FR", "EN"], tel: "06 87 96 44 62", email: "sandrine@mytantrapath.com", lien: "" },
  { id: "R_SCOTT",           value: "Scott McClure",                             roles: ["animateur", "helper", "colibri", "anglophone", "guest"], langues: ["EN"], tel: "00 1 512 750 7404", email: "tantra@ecstatichearts.com", lien: "" },
  { id: "R_SELMA",           value: "Selma (Céline Laroche)",                    roles: ["animateur", "helper", "traducteur", "colibri"],         langues: ["FR", "EN"], tel: "06 08 28 00 81", email: "c.line.lune@gmail.com", lien: "" },
  { id: "R_SEVDA",           value: "Sevda Duroy",                               roles: ["animateur", "helper", "colibri"],                       langues: ["FR"], tel: "07 67 95 11 73", email: "sevda.duroy@gmail.com", lien: "" },
  { id: "R_SHIVACHRIS",      value: "ShivaChris",                                roles: ["animateur", "helper", "admin", "colibri", "manager"],   langues: ["FR"], tel: "06 76 05 01 87", email: "christophe.stutzmann@gmail.com", lien: "" },
  { id: "R_SIMONE",          value: "Simone Bikene",                             roles: ["animateur", "helper", "colibri", "healer"],             langues: ["FR"], tel: "07 49 71 49 76", email: "pindi.beautiful@gmail.com", lien: "" },
  { id: "R_SOPHIE",          value: "Sophie O'Heix",                             roles: ["animateur", "helper", "colibri"],                       langues: ["FR"], tel: "06 38 24 51 68", email: "sophie@holygraale.com", lien: "" },
  { id: "R_STEPHANE",        value: "Stéphane Ahmed",                            roles: ["animateur", "helper", "colibri", "artist"],             langues: ["FR"], tel: "06 61 18 46 33", email: "stephaneahmed@gmail.com", lien: "" },
  { id: "R_EMMANUELLE",      value: "Suman (Emmanuelle Cueff)",                  roles: ["animateur", "helper", "colibri", "artist"],             langues: ["FR", "EN"], tel: "06 61 00 22 86", email: "emmanuellecueff@yahoo.com", lien: "" },
  { id: "R_TEST",            value: "TEST",                                      roles: ["animateur", "helper", "traducteur", "angel", "admin", "manager"], langues: ["FR", "EN"], tel: "", email: "", lien: "" },
  { id: "R_VERA",            value: "Vera De Sousa",                             roles: ["animateur", "helper", "admin", "manager"],              langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_VERONIQUE",       value: "Véronique Santini Bottemer",                roles: ["helper", "angel"],                                      langues: ["FR"], tel: "(+33) 06230583", email: "", lien: "" },
  { id: "R_VIRGINIE",        value: "Virginie Bertrand",                         roles: ["animateur", "helper", "traducteur", "angel", "artist", "Mi-Colibri"], langues: ["FR", "EN"], tel: "(+33) 06 63 52 97 14", email: "v.bertrand.coaching@gmail.com", lien: "" },
  { id: "R_YANNICK",         value: "Yannick Bohrer",                            roles: ["animateur", "helper", "traducteur", "Mi-Colibri"],      langues: ["FR", "EN"], tel: "06 78 88 85 34", email: "yannickbohrer@hotmail.com", lien: "" },
];


// ─── Alias de compatibilité ───────────────────────────────────────────────────
// Ces 4 variables reconstituent les anciens référentiels depuis REF_RESSOURCES.
// Les rapports existants continuent de fonctionner sans modification.
var REF_ANIMATEURS = REF_RESSOURCES
  .filter(function(r){ return r.roles.indexOf("animateur") !== -1; })
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
