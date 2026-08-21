/**
 * TANTRAMOUR 2026 — Référentiel : Équipements
 * Chaque entrée : { id, value, type, categorie, ordre, stock, description, remarque }
 *   value       : nom de l'équipement
 *   type        : "Hameau" | "Tantramour" | "NEW" | "Animateur" | "Autre"
 *   categorie   : "Ambiance & décoration" | "Animation" | "Pratique" | "Hygiène & entretien"
 *               | "Consommables & fournitures" | "Mobilier & aménagement" | "Cuisine" | "Divers"
 *   stock       : nombre (0-1000) ou "N/A"
 *   description : texte libre
 *   remarque    : texte libre
 */
var REF_EQUIPEMENTS = [
  { id: "EQ_MAT", value: "Tapis de Yoga", type: "Hameau", categorie: "Pratique", ordre: 1, stock: "N/A", description: "Tapis de Yoga", remarque: "" },
  { id: "EQ_BRIC", value: "Brique de yoga", type: "Hameau", categorie: "Pratique", ordre: 1, stock: "N/A", description: "Brique de yoga", remarque: "" },
  { id: "EQ_COUSIN", value: "Cousin", type: "Hameau", categorie: "Pratique", ordre: 1, stock: "N/A", description: "Cousin", remarque: "" },
  { id: "EQ_MATELAS", value: "Matelas", type: "Hameau", categorie: "Pratique", ordre: 1, stock: "N/A", description: "Matelas", remarque: "" },
  { id: "EQ_MICCASQUE", value: "Micro Casque", type: "Hameau", categorie: "Animation", ordre: 1, stock: "N/A", description: "Micro Casque", remarque: "" },
  { id: "EQ_CHAISE", value: "Chaise", type: "Hameau", categorie: "Mobilier & aménagement", ordre: 1, stock: "N/A", description: "Chaise", remarque: "" },
  { id: "EQ_TABLE", value: "Table", type: "Hameau", categorie: "Mobilier & aménagement", ordre: 1, stock: "N/A", description: "Table", remarque: "" },
  { id: "EQ_BOARD", value: "Paperboard", type: "Hameau", categorie: "Animation", ordre: 1, stock: "N/A", description: "Paperboard", remarque: "" },
  { id: "EQ_MIROIR", value: "Miroir", type: "Hameau", categorie: "Mobilier & aménagement", ordre: 1, stock: "N/A", description: "Miroir", remarque: "" },
  { id: "EQ_SALADIER", value: "Saladier", type: "Hameau", categorie: "Cuisine", ordre: 1, stock: "N/A", description: "Saladier", remarque: "" },
  { id: "EQ_SERVIETTE", value: "Serviettes de toilette", type: "Hameau", categorie: "Hygiène & entretien", ordre: 1, stock: "N/A", description: "Serviettes de toilette", remarque: "" },
  { id: "EQ_BASSINE", value: "Bassine", type: "Hameau", categorie: "Cuisine", ordre: 1, stock: "N/A", description: "Bassine", remarque: "" },
  { id: "EQ_PAN", value: "Casserol", type: "Hameau", categorie: "Cuisine", ordre: 1, stock: "N/A", description: "Casserol", remarque: "" },
  { id: "EQ_LOUCHE", value: "Louche", type: "Hameau", categorie: "Cuisine", ordre: 1, stock: "N/A", description: "Louche", remarque: "" },
  { id: "EQ_SPOT", value: "SPOT (Lumiere)", type: "Tantramour", categorie: "Ambiance & décoration", ordre: 1, stock: "N/A", description: "SPOT (Lumiere)", remarque: "" },
  { id: "EQ_LINGETTE", value: "Lingette humide", type: "Tantramour", categorie: "Hygiène & entretien", ordre: 1, stock: "N/A", description: "Lingette humide", remarque: "" },
  { id: "EQ_MOUCHOIR", value: "Boite Mouchoirs", type: "Tantramour", categorie: "Hygiène & entretien", ordre: 1, stock: "N/A", description: "Boite Mouchoirs", remarque: "" },
  { id: "EQ_TALC", value: "Talc", type: "Tantramour", categorie: "Hygiène & entretien", ordre: 1, stock: "N/A", description: "Talc", remarque: "" },
  { id: "EQ_COCO", value: "Huile de coco", type: "Tantramour", categorie: "Hygiène & entretien", ordre: 1, stock: "N/A", description: "Huile de coco", remarque: "" },
  { id: "EQ_COUPELLE", value: "Petite coupelle", type: "Tantramour", categorie: "Ambiance & décoration", ordre: 1, stock: "N/A", description: "Petite coupelle", remarque: "" },
  { id: "EQ_CHAUFPLAT", value: "Bougie chauffe plat", type: "Tantramour", categorie: "Ambiance & décoration", ordre: 1, stock: "N/A", description: "Bougie chauffe plat", remarque: "" },
  { id: "EQ_BOUGIE", value: "Bougie", type: "Tantramour", categorie: "Ambiance & décoration", ordre: 1, stock: "N/A", description: "Bougie", remarque: "" },
  { id: "EQ_BRIQUET", value: "Briquet", type: "Tantramour", categorie: "Ambiance & décoration", ordre: 1, stock: "N/A", description: "Briquet", remarque: "" },
  { id: "EQ_LEDSMALL", value: "Bougie LED (petite)", type: "Tantramour", categorie: "Ambiance & décoration", ordre: 1, stock: "N/A", description: "Bougie LED (petite)", remarque: "" },
  { id: "EQ_LEDBIG", value: "Bougie LED (Grande)", type: "Tantramour", categorie: "Ambiance & décoration", ordre: 1, stock: "N/A", description: "Bougie LED (Grande)", remarque: "" },
  { id: "EQ_PAPIER", value: "Paquet de papier", type: "Tantramour", categorie: "Consommables & fournitures", ordre: 1, stock: "N/A", description: "Paquet de papier", remarque: "" },
  { id: "EQ_PEN", value: "Crayon", type: "Tantramour", categorie: "Consommables & fournitures", ordre: 1, stock: "N/A", description: "Crayon", remarque: "" },
  { id: "EQ_PALO", value: "Palo Santo", type: "Tantramour", categorie: "Ambiance & décoration", ordre: 1, stock: "N/A", description: "Palo Santo", remarque: "" },
  { id: "EQ_MASQUE", value: "Masque", type: "Tantramour", categorie: "Hygiène & entretien", ordre: 1, stock: "N/A", description: "Masque", remarque: "" }
];
