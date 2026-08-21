/**
 * TANTRAMOUR 2026 — Référentiel : Équipements
 * Chaque entrée : { id, value, type, categorie, stock, description, remarque }
 *   value       : nom de l'équipement
 *   type        : "Hameau" | "Tantramour" | "Animateur" | "Autre" (fournisseur)
 *   categorie   : nom de la catégorie — géré via ref_equip_cat.js (REF_EQUIP_CAT)
 *   stock       : nombre (0-1000) ou "N/A"
 *   description : texte libre
 *   remarque    : texte libre
 */
var REF_EQUIPEMENTS = [
  { type: "Hameau", categorie: "Pratique", id: "EQ_MAT", value: "Tapis de Yoga", stock: "N/A", description: "Tapis de Yoga", remarque: "" },
  { type: "Hameau", categorie: "Pratique", id: "EQ_BRIC", value: "Brique de yoga", stock: "N/A", description: "Brique de yoga", remarque: "" },
  { type: "Hameau", categorie: "Pratique", id: "EQ_COUSIN", value: "Cousin", stock: "N/A", description: "Cousin", remarque: "" },
  { type: "Hameau", categorie: "Pratique", id: "EQ_MATELAS", value: "Matelas", stock: "N/A", description: "Matelas", remarque: "" },
  { type: "Hameau", categorie: "Animation", id: "EQ_MICCASQUE", value: "Micro Casque", stock: "N/A", description: "Micro Casque", remarque: "" },
  { type: "Hameau", categorie: "Mobilier & aménagement", id: "EQ_CHAISE", value: "Chaise", stock: "N/A", description: "Chaise", remarque: "" },
  { type: "Hameau", categorie: "Mobilier & aménagement", id: "EQ_TABLE", value: "Table", stock: "N/A", description: "Table", remarque: "" },
  { type: "Hameau", categorie: "Animation", id: "EQ_BOARD", value: "Paperboard", stock: "N/A", description: "Paperboard", remarque: "" },
  { type: "Hameau", categorie: "Mobilier & aménagement", id: "EQ_MIROIR", value: "Miroir", stock: "N/A", description: "Miroir", remarque: "" },
  { type: "Hameau", categorie: "Cuisine", id: "EQ_SALADIER", value: "Saladier", stock: "N/A", description: "Saladier", remarque: "" },
  { type: "Hameau", categorie: "Hygiène & entretien", id: "EQ_SERVIETTE", value: "Serviettes de toilette", stock: "N/A", description: "Serviettes de toilette", remarque: "" },
  { type: "Hameau", categorie: "Cuisine", id: "EQ_BASSINE", value: "Bassine", stock: "N/A", description: "Bassine", remarque: "" },
  { type: "Hameau", categorie: "Cuisine", id: "EQ_PAN", value: "Casserol", stock: "N/A", description: "Casserol", remarque: "" },
  { type: "Hameau", categorie: "Cuisine", id: "EQ_LOUCHE", value: "Louche", stock: "N/A", description: "Louche", remarque: "" },
  { type: "Tantramour", categorie: "Ambiance & décoration", id: "EQ_SPOT", value: "SPOT (Lumiere)", stock: "N/A", description: "SPOT (Lumiere)", remarque: "" },
  { type: "Tantramour", categorie: "Hygiène & entretien", id: "EQ_LINGETTE", value: "Lingette humide", stock: "N/A", description: "Lingette humide", remarque: "" },
  { type: "Tantramour", categorie: "Hygiène & entretien", id: "EQ_MOUCHOIR", value: "Boite Mouchoirs", stock: "N/A", description: "Boite Mouchoirs", remarque: "" },
  { type: "Tantramour", categorie: "Hygiène & entretien", id: "EQ_TALC", value: "Talc", stock: "N/A", description: "Talc", remarque: "" },
  { type: "Tantramour", categorie: "Hygiène & entretien", id: "EQ_COCO", value: "Huile de coco", stock: "N/A", description: "Huile de coco", remarque: "" },
  { type: "Tantramour", categorie: "Ambiance & décoration", id: "EQ_COUPELLE", value: "Petite coupelle", stock: "N/A", description: "Petite coupelle", remarque: "" },
  { type: "Tantramour", categorie: "Ambiance & décoration", id: "EQ_CHAUFPLAT", value: "Bougie chauffe plat", stock: "N/A", description: "Bougie chauffe plat", remarque: "" },
  { type: "Tantramour", categorie: "Ambiance & décoration", id: "EQ_BOUGIE", value: "Bougie", stock: "N/A", description: "Bougie", remarque: "" },
  { type: "Tantramour", categorie: "Ambiance & décoration", id: "EQ_BRIQUET", value: "Briquet", stock: "N/A", description: "Briquet", remarque: "" },
  { type: "Tantramour", categorie: "Ambiance & décoration", id: "EQ_LEDSMALL", value: "Bougie LED (petite)", stock: "N/A", description: "Bougie LED (petite)", remarque: "" },
  { type: "Tantramour", categorie: "Ambiance & décoration", id: "EQ_LEDBIG", value: "Bougie LED (Grande)", stock: "N/A", description: "Bougie LED (Grande)", remarque: "" },
  { type: "Tantramour", categorie: "Consommables & fournitures", id: "EQ_PAPIER", value: "Paquet de papier", stock: "N/A", description: "Paquet de papier", remarque: "" },
  { type: "Tantramour", categorie: "Consommables & fournitures", id: "EQ_PEN", value: "Crayon", stock: "N/A", description: "Crayon", remarque: "" },
  { type: "Tantramour", categorie: "Ambiance & décoration", id: "EQ_PALO", value: "Palo Santo", stock: "N/A", description: "Palo Santo", remarque: "" },
  { type: "Tantramour", categorie: "Hygiène & entretien", id: "EQ_MASQUE", value: "Masque", stock: "N/A", description: "Masque", remarque: "" },
  { type: "Hameau", categorie: "Animation", id: "EQ_MICSS", value: "Micro Sans Fil", stock: "N/A", description: "Micro Sans Fil", remarque: "" },
  { type: "Hameau", categorie: "Animation", id: "EQ_MIC", value: "Micro (cable)", stock: "N/A", description: "Micro avec cable", remarque: "" },
  { type: "Animateur", categorie: "Ambiance & décoration", id: "EQ_TENTURE", value: "Tenture", stock: "N/A", description: "Tenture", remarque: "" },
  { type: "Animateur", categorie: "Animation", id: "EQ_TAMBOUR", value: "Tambour", stock: "N/A", description: "Tambour", remarque: "" },
  { type: "Animateur", categorie: "Pratique", id: "EQ_CLOCHETTE", value: "Clochette", stock: "N/A", description: "Clochette", remarque: "" },
  { type: "Tantramour", categorie: "Animation", id: "EQ_ROSER", value: "Rose rouge", stock: "N/A", description: "Rose rouge", remarque: "A ACHETER" },
  { type: "Tantramour", categorie: "Animation", id: "EQ_ROSEB", value: "Rose Blanche", stock: "N/A", description: "Rose Blanche", remarque: "A ACHETER" },
  { type: "Tantramour", categorie: "Animation", id: "EQ_FLEUR", value: "Bouquet de fleur (DIVERS)", stock: "N/A", description: "Bouquet de fleur (DIVERS)", remarque: "A ACHETER" },
  { type: "Tantramour", categorie: "Animation", id: "EQ_ROSES", value: "Bouquet de ROSES", stock: "N/A", description: "Bouquet de ROSES", remarque: "A ACHETER" },
  { type: "Tantramour", categorie: "Animation", id: "EQ_PIEDMIC", value: "Pied Micro", stock: "N/A", description: "Pied Micro + pince micro", remarque: "Demander à Felix" },
  { type: "NEW", categorie: "Divers", id: "EQ_NEW01", value: "hfdg", stock: 0, description: "dfhf", remarque: "" },
  { type: "Tantramour", categorie: "Pratique", id: "EQ_GLACON", value: "Glacons (Kg)", stock: "N/A", description: "Paquet de glacons", remarque: "A ACHETER" },
  { type: "Tantramour", categorie: "Pratique", id: "EQ_PISCINE", value: "Piscine gonflable", stock: "N/A", description: "Piscine gonflable", remarque: "" },
];
