/**
 * TANTRAMOUR 2026 — Référentiel de traductions FR → EN
 * =====================================================
 * Structure : { key, fr, en }
 *   key  : identifiant stable snake_case (ne jamais changer)
 *   fr   : texte français (référence)
 *   en   : traduction anglaise (modifiable via MasterData > onglet Traductions)
 *
 * RÈGLE : les données (noms, horaires, lieux) ne sont JAMAIS traduites.
 *         Seuls les libellés d'interface (labels, titres, boutons, colonnes) le sont.
 */
var REF_TRANSLATIONS = [

  // ── NAVIGATION / COMMUN ─────────────────────────────────────────────────────
  { key: "nav_home",           fr: "Home",                       en: "Home" },
  { key: "nav_manuel",         fr: "Manuel",                     en: "Manual" },
  { key: "nav_regles",         fr: "Règles",                     en: "Rules" },
  { key: "nav_admin",          fr: "Admin",                      en: "Admin" },
  { key: "nav_masterdata",     fr: "Master Data",                en: "Master Data" },
  { key: "nav_refresh",        fr: "Refresh",                    en: "Refresh" },
  { key: "nav_mode_nuit",      fr: "Mode Nuit",                  en: "Dark Mode" },
  { key: "nav_mode_jour",      fr: "Mode Jour",                  en: "Light Mode" },
  { key: "nav_vue_mobile",     fr: "Vue Mobile",                 en: "Mobile View" },
  { key: "nav_vue_bureau",     fr: "Vue Bureau",                 en: "Desktop View" },
  { key: "nav_export_excel",   fr: "Export Excel",               en: "Export Excel" },
  { key: "lang_toggle",        fr: "EN",                         en: "FR" },

  // ── PAGE ACCUEIL ─────────────────────────────────────────────────────────────
  { key: "home_subtitle",      fr: "Portail des rapports — 29 août › 4 septembre 2026", en: "Reports Portal — Aug 29 › Sep 4, 2026" },
  { key: "home_group_general", fr: "Général",                    en: "General" },
  { key: "home_group_planning",fr: "Gestion planning",           en: "Schedule Management" },

  // Cartes index
  { key: "card_agenda_jour_title",    fr: "Agenda par Jour (Per day)",              en: "Agenda by Day" },
  { key: "card_agenda_jour_desc",     fr: "Tous les ateliers — filtres jour, lieu, rôle", en: "All workshops — filters by day, venue, role" },
  { key: "card_agenda_personne_title",fr: "Agenda par Personne (Per Person)",       en: "Agenda by Person" },
  { key: "card_agenda_personne_desc", fr: "Planning individuel par facilitateur, helper ou angel", en: "Individual schedule by facilitator, helper or angel" },
  { key: "card_mon_planning_title",   fr: "Mon Planning (My Planning)",             en: "My Planning" },
  { key: "card_mon_planning_desc",    fr: "Vue combinée ou par rôle — Facilitateurs, Helpers, Traducteurs, Angels", en: "Combined view or by role — Facilitators, Helpers, Translators, Angels" },
  { key: "card_logistique_title",     fr: "Logistique par Atelier",                 en: "Logistics per Workshop" },
  { key: "card_logistique_desc",      fr: "Vue détaillée atelier — lieux, équipes & notes", en: "Detailed workshop view — venues, teams & notes" },
  { key: "card_saisie_log_title",     fr: "Saisie des besoins logistiques (Logistic needs)", en: "Logistic Needs Input" },
  { key: "card_saisie_log_desc",      fr: "Facilitateurs : saisissez vos besoins atelier par atelier", en: "Facilitators: enter your needs workshop by workshop" },
  { key: "card_colibri_title",        fr: "Ateliers Colibri",                       en: "Colibri Workshops" },
  { key: "card_colibri_desc",         fr: "Ateliers avec facilitateur ayant le rôle helper \"Shift Colibri\"", en: "Workshops with a facilitor in the \"Shift Colibri\" role" },
  { key: "card_traducteurs_title",    fr: "Planning Traducteurs",                   en: "Translators Schedule" },
  { key: "card_traducteurs_desc",     fr: "Vue par traducteur — shifts regroupés, filtres Jour/Traducteur, bascule tableau", en: "View by translator — grouped shifts, Day/Translator filters" },
  { key: "card_conflits_title",       fr: "Conflits de planning",                   en: "Schedule Conflicts" },
  { key: "card_conflits_desc",        fr: "Personnes assignées à plusieurs rôles simultanément", en: "People assigned to multiple simultaneous roles" },
  { key: "card_charge_title",         fr: "Charge de travail (Workload)",           en: "Workload" },
  { key: "card_charge_desc",          fr: "Helpers & Angels — nombre d'ateliers, durée, harmonisation", en: "Helpers & Angels — workshop count, duration, balancing" },
  { key: "card_editer_title",         fr: "Éditer un atelier",                      en: "Edit Workshop" },
  { key: "card_editer_desc",          fr: "Sélectionnez un atelier et modifiez ses champs — génère le code à copier dans data.js", en: "Select a workshop and edit its fields — generates code to paste into data.js" },
  { key: "card_ressources_title",     fr: "Gérer les Ressources",                   en: "Manage Resources" },
  { key: "card_ressources_desc",      fr: "Facilitateurs, Helpers, Traducteurs, Angels — référentiel unifié éditable", en: "Facilitators, Helpers, Translators, Angels — unified editable reference" },
  { key: "card_remplacement_title",   fr: "Remplacement de Ressource",              en: "Resource Replacement" },
  { key: "card_remplacement_desc",    fr: "Personne indisponible — proposition automatique de remplaçants sans conflit, charge équilibrée", en: "Unavailable person — automatic conflict-free replacement suggestions, balanced workload" },
  { key: "card_problemes_title",      fr: "Problèmes de planning",                  en: "Schedule Issues" },
  { key: "card_problemes_desc",       fr: "Ateliers anglophones sans traducteur · Ressources insuffisantes — correction inline", en: "English workshops without translator · Insufficient resources — inline fix" },
  { key: "card_trad_affect_title",    fr: "Affectation Traducteur",                 en: "Translator Assignment" },
  { key: "card_trad_affect_desc",     fr: "Ateliers anglophones sans traducteur — détection TBC et affectation guidée", en: "English workshops without translator — TBC detection and guided assignment" },

  // Modale mot de passe
  { key: "pw_acces_restreint",        fr: "🔒 Accès restreint",                    en: "🔒 Restricted Access" },
  { key: "pw_placeholder",            fr: "Mot de passe",                           en: "Password" },
  { key: "pw_annuler",                fr: "Annuler",                                en: "Cancel" },
  { key: "pw_ouvrir",                 fr: "Ouvrir",                                 en: "Open" },
  { key: "pw_incorrect",              fr: "Mot de passe incorrect.",               en: "Incorrect password." },

  // ── COLONNES COMMUNES RAPPORTS ───────────────────────────────────────────────
  { key: "col_jour",           fr: "Jour",                       en: "Day" },
  { key: "col_date",           fr: "Date",                       en: "Date" },
  { key: "col_heure",          fr: "Heure",                      en: "Time" },
  { key: "col_type",           fr: "Type",                       en: "Type" },
  { key: "col_atelier",        fr: "Atelier",                    en: "Workshop" },
  { key: "col_lieu",           fr: "Lieu",                       en: "Venue" },
  { key: "col_facilitateur",   fr: "Facilitateur(s)",            en: "Facilitator(s)" },
  { key: "col_traducteur",     fr: "Trad.",                      en: "Trans." },
  { key: "col_traducteur_long",fr: "Traducteur",                 en: "Translator" },
  { key: "col_helpers",        fr: "Helper(s)",                  en: "Helper(s)" },
  { key: "col_angel",          fr: "Angel",                      en: "Angel" },
  { key: "col_note",           fr: "Note",                       en: "Note" },
  { key: "col_piment",         fr: "Niveau Piment",              en: "Spice Level" },
  { key: "col_actions",        fr: "Actions",                    en: "Actions" },

  // ── FILTRES ───────────────────────────────────────────────────────────────────
  { key: "filter_tous_jours",  fr: "Tous les jours",             en: "All days" },
  { key: "filter_tous_types",  fr: "Tous les types",             en: "All types" },
  { key: "filter_tous_lieux",  fr: "Tous les lieux",             en: "All venues" },
  { key: "filter_tous_fac",    fr: "Tous les facilitateurs",     en: "All facilitators" },
  { key: "filter_tous_trad",   fr: "Tous les traducteurs",       en: "All translators" },
  { key: "filter_tous_helpers",fr: "Tous les helpers",           en: "All helpers" },
  { key: "filter_tous_angels", fr: "Tous les angels",            en: "All angels" },
  { key: "filter_toutes_pers", fr: "Toutes les personnes",       en: "All people" },
  { key: "filter_jour_date",   fr: "Jour / Date",                en: "Day / Date" },
  { key: "filter_type_atelier",fr: "Type d'atelier",             en: "Workshop Type" },
  { key: "filter_facilitateur",fr: "Facilitateur",               en: "Facilitator" },
  { key: "filter_traducteur",  fr: "Traducteur",                 en: "Translator" },
  { key: "filter_helper",      fr: "Helper",                     en: "Helper" },
  { key: "filter_personne",    fr: "Personne",                   en: "Person" },
  { key: "filter_role",        fr: "Rôle",                       en: "Role" },

  // ── STATISTIQUES / COMPTEURS ────────────────────────────────────────────────
  { key: "stats_ateliers",     fr: "atelier(s) affiché(s)",      en: "workshop(s) shown" },
  { key: "stats_personnes",    fr: "personne(s) affichée(s)",    en: "person(s) shown" },
  { key: "stats_conflits",     fr: "conflit(s) détecté(s)",      en: "conflict(s) detected" },

  // ── RAPPORT AGENDA PAR JOUR ─────────────────────────────────────────────────
  { key: "r1_title",           fr: "Agenda par Jour",            en: "Agenda by Day" },
  { key: "r1_empty",           fr: "Aucun résultat",             en: "No results" },

  // ── RAPPORT AGENDA PAR PERSONNE ─────────────────────────────────────────────
  { key: "r2_title",           fr: "Agenda par Personne",        en: "Agenda by Person" },

  // ── RAPPORT MON PLANNING ────────────────────────────────────────────────────
  { key: "r3_title",           fr: "Mon Planning (My Planning)", en: "My Planning" },
  { key: "r3_tab_tous",        fr: "Tous les rôles",             en: "All roles" },
  { key: "r3_tab_fac",         fr: "Facilitateurs",              en: "Facilitators" },
  { key: "r3_tab_helpers",     fr: "Helpers",                    en: "Helpers" },
  { key: "r3_tab_traducteurs", fr: "Traducteurs",                en: "Translators" },
  { key: "r3_tab_angels",      fr: "Angels",                     en: "Angels" },
  { key: "r3_vue_cartes",      fr: "Vue Cartes",                 en: "Card View" },
  { key: "r3_vue_tableau",     fr: "Vue Tableau",                en: "Table View" },
  { key: "r3_ateliers",        fr: "atelier(s)",                 en: "workshop(s)" },
  { key: "r3_duree_totale",    fr: "Durée totale",               en: "Total duration" },

  // ── RAPPORT LOGISTIQUE PAR ATELIER ──────────────────────────────────────────
  { key: "r4_title",           fr: "Logistique par Atelier",     en: "Logistics per Workshop" },
  { key: "r4_choisir_jour",    fr: "1. Choisir le jour",         en: "1. Select day" },
  { key: "r4_choisir_atelier", fr: "2. Choisir l'atelier",       en: "2. Select workshop" },
  { key: "r4_select_jour",     fr: "-- Sélectionner un jour --", en: "-- Select a day --" },
  { key: "r4_select_atelier",  fr: "-- Sélectionner un atelier --", en: "-- Select a workshop --" },
  { key: "r4_choisir_dabord",  fr: "-- Choisir d'abord un jour --", en: "-- Choose a day first --" },
  { key: "r4_placeholder_p",   fr: "Sélectionnez un jour et un atelier", en: "Select a day and a workshop" },
  { key: "r4_placeholder_s",   fr: "La fiche logistique complète s'affichera ici", en: "The complete logistics sheet will appear here" },
  { key: "r4_info_logistique", fr: "Informations Logistiques",   en: "Logistics Information" },
  { key: "r4_no_info",         fr: "Aucune information logistique saisie.",  en: "No logistics information entered." },

  // ── RAPPORT CONFLITS ────────────────────────────────────────────────────────
  { key: "r5_title",           fr: "Conflits de planning",       en: "Schedule Conflicts" },
  { key: "r5_no_conflict",     fr: "Aucun conflit détecté ✅",   en: "No conflicts detected ✅" },

  // ── RAPPORT CHARGE DE TRAVAIL ───────────────────────────────────────────────
  { key: "r6_title",           fr: "Charge de travail",          en: "Workload" },
  { key: "r6_nb_ateliers",     fr: "Nb ateliers",                en: "# workshops" },
  { key: "r6_duree_h",         fr: "Durée (h)",                  en: "Duration (h)" },

  // ── RAPPORT TRADUCTEURS ─────────────────────────────────────────────────────
  { key: "r7_title",           fr: "Planning Traducteurs",       en: "Translators Schedule" },

  // ── RAPPORT COLIBRI ─────────────────────────────────────────────────────────
  { key: "r8_title",           fr: "Ateliers Colibri",           en: "Colibri Workshops" },

  // ── RAPPORT ÉDITER ATELIER ──────────────────────────────────────────────────
  { key: "r9_title",           fr: "Éditer un atelier",          en: "Edit Workshop" },

  // ── RAPPORT GÉRER RESSOURCES ────────────────────────────────────────────────
  { key: "r10_title",          fr: "Gérer les Ressources",       en: "Manage Resources" },

  // ── RAPPORT REMPLACEMENT RESSOURCE ─────────────────────────────────────────
  { key: "r11_title",          fr: "Remplacement de Ressource",  en: "Resource Replacement" },

  // ── RAPPORT PROBLÈMES ───────────────────────────────────────────────────────
  { key: "r12_title",          fr: "Problèmes de planning",      en: "Schedule Issues" },

  // ── RAPPORT TRADUCTEUR AFFECTATION ─────────────────────────────────────────
  { key: "r13_title",          fr: "Affectation Traducteur",     en: "Translator Assignment" },

  // ── RAPPORT SAISIE LOGISTIQUE ───────────────────────────────────────────────
  { key: "r14_title",          fr: "Saisie des besoins logistiques", en: "Logistic Needs Input" },

  // ── RAPPORT SAISIE LOGISTIQUE — détail ──────────────────────────────────────
  { key: "r14_step1_title",    fr: "Étape 1 — Qui êtes-vous ?",      en: "Step 1 — Who are you?" },
  { key: "r14_step1_sub",      fr: "Sélectionnez votre nom pour accéder à la liste de vos ateliers.", en: "Select your name to access your list of workshops." },
  { key: "r14_step1_select",   fr: "— Choisissez votre nom —",       en: "— Choose your name —" },
  { key: "r14_step1_next",     fr: "Suivant →",                      en: "Next →" },
  { key: "r14_bc_step1",       fr: "Étape 1 — Identité",             en: "Step 1 — Identity" },
  { key: "r14_bc_step2",       fr: "Étape 2 — Choisir un atelier",   en: "Step 2 — Choose a workshop" },
  { key: "r14_bc_step2_alt",   fr: "Étape 2 — Mes ateliers",         en: "Step 2 — My workshops" },
  { key: "r14_bc_step3",       fr: "Étape 3 — Fiche atelier",        en: "Step 3 — Workshop sheet" },
  { key: "r14_my_workshops",   fr: "Vos ateliers",                   en: "Your workshops" },
  { key: "r14_admin_title",    fr: "Informations gérées par l'Administrateur", en: "Information managed by the Administrator" },
  { key: "r14_admin_body",     fr: "Le jour, les horaires, le lieu, le type, les facilitateurs, les helpers, le traducteur et l'angel ne peuvent pas être modifiés ici. Pour toute correction, contactez un", en: "The day, times, venue, type, facilitators, helpers, translator and angel cannot be modified here. For any correction, contact an" },
  { key: "r14_admin_role",     fr: "Administrateur",                 en: "Administrator" },
  { key: "r14_ws_info",        fr: "Informations de l'atelier",      en: "Workshop information" },
  { key: "r14_readonly",       fr: "(lecture seule)",                 en: "(read only)" },
  { key: "r14_editable",       fr: "✏️ Informations modifiables",    en: "✏️ Editable information" },
  { key: "r14_field_nom",      fr: "Nom de l'atelier",               en: "Workshop name" },
  { key: "r14_field_nom_ph",   fr: "Nom de l'atelier",               en: "Workshop name" },
  { key: "r14_field_piment",   fr: "Niveau Piment",                  en: "Spice Level" },
  { key: "r14_field_log",      fr: "📝 Informations logistiques",    en: "📝 Logistic information" },
  { key: "r14_editor_hint",    fr: "Décrivez vos besoins matériels, de salle, techniques ou autres. Utilisez la liste à puces pour plus de clarté.", en: "Describe your material, room, technical or other needs. Use bullet points for clarity." },
  { key: "r14_btn_save",       fr: "💾 Enregistrer",                 en: "💾 Save" },
  { key: "r14_btn_back",       fr: "← Retour à mes ateliers",        en: "← Back to my workshops" },
  { key: "r14_last_update",    fr: "Dernière mise à jour :",         en: "Last updated:" },
  { key: "r14_confirm_title",  fr: "⚠️ Confirmer l'enregistrement",  en: "⚠️ Confirm save" },
  { key: "r14_confirm_p1",     fr: "Vous êtes sur le point de sauvegarder les modifications pour :", en: "You are about to save changes for:" },
  { key: "r14_confirm_warn",   fr: "Ce changement sera immédiatement visible par toute l'équipe. Vérifiez bien votre saisie avant de confirmer.", en: "This change will be immediately visible to the whole team. Please check your input before confirming." },
  { key: "r14_confirm_cancel", fr: "Annuler",                        en: "Cancel" },
  { key: "r14_confirm_ok",     fr: "✔ Confirmer et enregistrer",     en: "✔ Confirm and save" },
  { key: "r14_pill_filled",    fr: "✔ Rempli",                       en: "✔ Filled" },
  { key: "r14_pill_empty",     fr: "⚠ À remplir",                    en: "⚠ To fill" },
  { key: "r14_no_ws",          fr: "Aucun atelier trouvé.",           en: "No workshop found." },
  { key: "r14_no_ws_fac",      fr: "Aucun atelier trouvé pour ce facilitateur.", en: "No workshop found for this facilitator." },
  { key: "r14_ws_count_one",   fr: "atelier assigné en tant que facilitateur", en: "workshop assigned as facilitator" },
  { key: "r14_ws_count_many",  fr: "ateliers assignés en tant que facilitateur", en: "workshops assigned as facilitator" },
  { key: "r14_tb_liste",       fr: "• Liste",                        en: "• List" },
  { key: "r14_tb_num",         fr: "1. Liste",                       en: "1. List" },
  { key: "r14_tb_format",      fr: "✖ Format",                       en: "✖ Format" },
  { key: "r14_grid_jour",      fr: "Jour",                           en: "Day" },
  { key: "r14_grid_date",      fr: "Date",                           en: "Date" },
  { key: "r14_grid_heure",     fr: "Heure",                          en: "Time" },
  { key: "r14_grid_lieu",      fr: "Lieu",                           en: "Venue" },
  { key: "r14_grid_type",      fr: "Type",                           en: "Type" },
  { key: "r14_grid_fac",       fr: "Facilitateur(s)",                en: "Facilitator(s)" },
  { key: "r14_grid_trad",      fr: "Traducteur",                     en: "Translator" },
  { key: "r14_grid_helpers",   fr: "Helper(s)",                      en: "Helper(s)" },
  { key: "r14_grid_angel",     fr: "Angel",                          en: "Angel" },
  { key: "r14_grid_note",      fr: "Note",                           en: "Note" },

  // ── RAPPORT RÈGLES ──────────────────────────────────────────────────────────
  { key: "r15_title",          fr: "Règles des Rapports",        en: "Report Rules" },

  // ── MASTERDATA ──────────────────────────────────────────────────────────────
  { key: "md_title",           fr: "Master Data",                en: "Master Data" },
  { key: "md_tab_lieux",       fr: "Lieux",                      en: "Venues" },
  { key: "md_tab_types",       fr: "Types",                      en: "Types" },
  { key: "md_tab_notes",       fr: "Notes",                      en: "Notes" },
  { key: "md_tab_jours",       fr: "Jours",                      en: "Days" },
  { key: "md_tab_piment",      fr: "Piment",                     en: "Spice" },
  { key: "md_tab_res_types",   fr: "Types de ressource",         en: "Resource Types" },
  { key: "md_tab_heures",      fr: "Heures",                     en: "Hours" },
  { key: "md_tab_translations",fr: "Traductions",                en: "Translations" },
  { key: "md_sec_lieux",       fr: "Lieux / Salles",             en: "Venues / Rooms" },
  { key: "md_sec_types",       fr: "Types d'ateliers",           en: "Workshop Types" },
  { key: "md_sec_notes",       fr: "Notes",                      en: "Notes" },
  { key: "md_sec_jours",       fr: "Jours",                      en: "Days" },
  { key: "md_sec_piment",      fr: "Niveaux Piment",             en: "Spice Levels" },
  { key: "md_sec_res_types",   fr: "Types de ressource",         en: "Resource Types" },
  { key: "md_sec_heures",      fr: "Heures",                     en: "Hours" },
  { key: "md_sec_translations",fr: "Traductions FR → EN",        en: "Translations FR → EN" },
  { key: "md_add_lieu",        fr: "+ Ajouter un lieu",          en: "+ Add a venue" },
  { key: "md_add_type",        fr: "+ Ajouter un type",          en: "+ Add a type" },
  { key: "md_add_note",        fr: "+ Ajouter une note",         en: "+ Add a note" },
  { key: "md_add_jour",        fr: "+ Ajouter un jour",          en: "+ Add a day" },
  { key: "md_add_niveau",      fr: "+ Ajouter un niveau",        en: "+ Add a level" },
  { key: "md_add_res_type",    fr: "+ Ajouter un type de ressource", en: "+ Add a resource type" },
  { key: "md_add_creneau",     fr: "+ Ajouter un créneau",       en: "+ Add a time slot" },
  { key: "md_banner_title",    fr: "Facilitateurs · Helpers · Traducteurs · Angels", en: "Facilitators · Helpers · Translators · Angels" },
  { key: "md_banner_sub",      fr: "Gérées dans le référentiel unifié — Rapport 12", en: "Managed in the unified reference — Report 12" },
  { key: "md_banner_btn",      fr: "Gérer les Ressources →",     en: "Manage Resources →" },
  { key: "md_save_ref",        fr: "💾 Sauvegarder",              en: "💾 Save" },
  { key: "md_unsaved",         fr: "⚠️ Modifications non sauvegardées", en: "⚠️ Unsaved changes" },
  { key: "md_confirm_del",     fr: "Confirmer la suppression",   en: "Confirm deletion" },
  { key: "md_cancel",          fr: "Annuler",                    en: "Cancel" },
  { key: "md_delete",          fr: "Supprimer",                  en: "Delete" },
  { key: "md_col_id",          fr: "ID",                         en: "ID" },
  { key: "md_col_value",       fr: "Value",                      en: "Value" },
  { key: "md_col_label",       fr: "Label affiché",              en: "Displayed Label" },
  { key: "md_col_date",        fr: "Date (agenda)",              en: "Date (agenda)" },
  { key: "md_col_icon",        fr: "Icon",                       en: "Icon" },
  { key: "md_col_fr",          fr: "Français (référence)",       en: "French (reference)" },
  { key: "md_col_en",          fr: "English",                    en: "English" },
  { key: "md_trans_search",    fr: "Rechercher un terme…",       en: "Search a term…" },
  { key: "md_trans_desc",      fr: "Traduisez ici les libellés d'interface. Les données (noms, horaires, lieux) restent inchangées.", en: "Translate the interface labels here. Data (names, times, venues) remain unchanged." },

  // ── ADMIN ───────────────────────────────────────────────────────────────────
  { key: "admin_title",        fr: "Admin",                      en: "Admin" },

  // ── USER MANUAL ─────────────────────────────────────────────────────────────
  { key: "manual_tag",         fr: "Documentation",              en: "Documentation" },
  { key: "manual_title",       fr: "Tantramour 2026",            en: "Tantramour 2026" },
  { key: "manual_subtitle",    fr: "Manuel utilisateur — Suite de gestion du festival", en: "User Manual — Festival Management Suite" },
  { key: "manual_meta",        fr: "17 rapports · Lecture, édition, gestion des référentiels & saisie facilitateurs", en: "17 reports · Read, edit, manage references & facilitator input" },
  { key: "manual_toc_title",   fr: "Table des matières",         en: "Table of Contents" },

  // ── JOURS (options filtres) ─────────────────────────────────────────────────
  { key: "jour1_label",        fr: "Jour 1 — Sam. 29 août",     en: "Day 1 — Sat. Aug 29" },
  { key: "jour2_label",        fr: "Jour 2 — Dim. 30 août",     en: "Day 2 — Sun. Aug 30" },
  { key: "jour3_label",        fr: "Jour 3 — Lun. 31 août",     en: "Day 3 — Mon. Aug 31" },
  { key: "jour4_label",        fr: "Jour 4 — Mar. 1 sept.",      en: "Day 4 — Tue. Sep 1" },
  { key: "jour5_label",        fr: "Jour 5 — Mer. 2 sept.",      en: "Day 5 — Wed. Sep 2" },
  { key: "jour6_label",        fr: "Jour 6 — Jeu. 3 sept.",      en: "Day 6 — Thu. Sep 3" },
  { key: "jour7_label",        fr: "Jour 7 — Ven. 4 sept.",      en: "Day 7 — Fri. Sep 4" },

  // ── RÔLES ───────────────────────────────────────────────────────────────────
  { key: "role_facilitateur",  fr: "Facilitateur",               en: "Facilitator" },
  { key: "role_helper",        fr: "Helper",                     en: "Helper" },
  { key: "role_angel",         fr: "Angel",                      en: "Angel" },
  { key: "role_traducteur",    fr: "Traducteur",                 en: "Translator" },
  { key: "role_tous",          fr: "Tous",                       en: "All" },

  // ── MESSAGES GÉNÉRIQUES ─────────────────────────────────────────────────────
  { key: "msg_aucun_resultat", fr: "Aucun résultat",             en: "No results" },
  { key: "msg_aucune_entree",  fr: "Aucune entrée.",             en: "No entries." },
  { key: "msg_chargement",     fr: "Chargement…",                en: "Loading…" },
  { key: "msg_acces_refuse",   fr: "Accès refusé",               en: "Access Denied" },
  { key: "msg_retour",         fr: "← Retour",                   en: "← Back" },
  { key: "msg_fermer",         fr: "Fermer",                     en: "Close" },
  { key: "msg_sauvegarder",    fr: "Sauvegarder",                en: "Save" },
  { key: "msg_modifier",       fr: "Modifier",                   en: "Edit" },
  { key: "msg_supprimer",      fr: "Supprimer",                  en: "Delete" },
  { key: "msg_ajouter",        fr: "Ajouter",                    en: "Add" },
  { key: "msg_annuler",        fr: "Annuler",                    en: "Cancel" },
  { key: "msg_confirmer",      fr: "Confirmer",                  en: "Confirm" },
  { key: "msg_rechercher",     fr: "Rechercher…",                en: "Search…" },

  // ── FOOTER ──────────────────────────────────────────────────────────────────
  { key: "footer_tantramour",  fr: "Tantramour 2026",            en: "Tantramour 2026" },
];
