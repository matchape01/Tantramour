/**
 * migrate_add_resource_ids.js
 * ===========================
 * Script de migration one-shot : enrichit data.js en ajoutant les champs
 * fac1Id, fac2Id, fac3Id, fac4Id, helper1Id, helper2Id, helper3Id, helper4Id,
 * tradId, angelId à côté des champs nom existants.
 *
 * Les champs nom (fac1, helper1…) sont conservés intacts — compatibilité totale
 * avec tous les rapports existants.
 *
 * Usage :
 *   node migrate_add_resource_ids.js
 *
 * Le fichier data.js est modifié en place. Un backup data.js.bak est créé.
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.js');
const REF_FILE  = path.join(__dirname, 'ref_ressources.js');
const BAK_FILE  = DATA_FILE + '.bak';

// ── 1. Charger ref_ressources.js ────────────────────────────────────────────
// On exécute le fichier dans un contexte isolé pour récupérer REF_RESSOURCES
let REF_RESSOURCES;
try {
  const refCode = fs.readFileSync(REF_FILE, 'utf8');
  // Extraction par eval dans un contexte sandboxé
  const sandbox = {};
  const vm = require('vm');
  vm.runInNewContext(refCode, sandbox);
  REF_RESSOURCES = sandbox.REF_RESSOURCES;
  console.log(`✅ ref_ressources.js chargé — ${REF_RESSOURCES.length} ressources`);
} catch (e) {
  console.error('❌ Impossible de charger ref_ressources.js :', e.message);
  process.exit(1);
}

// ── 2. Construire un index nom → id ─────────────────────────────────────────
const nameToId = {};
REF_RESSOURCES.forEach(r => {
  if (r.value && r.id) nameToId[r.value.trim()] = r.id;
});
console.log(`✅ Index nom→id : ${Object.keys(nameToId).length} entrées`);

// ── 3. Charger data.js ──────────────────────────────────────────────────────
let dataContent;
try {
  dataContent = fs.readFileSync(DATA_FILE, 'utf8');
  fs.writeFileSync(BAK_FILE, dataContent, 'utf8');
  console.log(`✅ Backup créé : data.js.bak`);
} catch (e) {
  console.error('❌ Impossible de lire data.js :', e.message);
  process.exit(1);
}

// ── 4. Injection des champs ID ──────────────────────────────────────────────
// Stratégie regex : pour chaque champ "fieldName":"nom", insérer "fieldNameId":"R_xxx"
// juste après — seulement si la valeur n'est pas vide et si l'ID existe.

const FIELDS = [
  { name: 'fac1',       idField: 'fac1Id'     },
  { name: 'fac2',       idField: 'fac2Id'     },
  { name: 'fac3',       idField: 'fac3Id'     },
  { name: 'fac4',       idField: 'fac4Id'     },
  { name: 'traduction', idField: 'tradId'     },
  { name: 'helper1',    idField: 'helper1Id'  },
  { name: 'helper2',    idField: 'helper2Id'  },
  { name: 'helper3',    idField: 'helper3Id'  },
  { name: 'helper4',    idField: 'helper4Id'  },
  { name: 'angel',      idField: 'angelId'    },
];

let stats = { injected: 0, missing: 0, skippedEmpty: 0, skippedAlready: 0 };
let result = dataContent;

FIELDS.forEach(({ name, idField }) => {
  // data.js utilise des clés non quotées : fac1:"valeur"
  // Regex : fieldName:"valeur"
  const re = new RegExp(`(${name}:")((?:[^"\\\\]|\\\\.)*)(")`, 'g');

  result = result.replace(re, (match, prefix, nom, suffix, offset, str) => {
    if (!nom.trim()) {
      stats.skippedEmpty++;
      return match; // champ vide → rien à faire
    }

    // Vérifier si idField est déjà présent dans cette zone (60 chars après)
    const after = str.slice(offset + match.length, offset + match.length + 60);
    if (after.includes(`${idField}:`)) {
      stats.skippedAlready++;
      return match; // déjà migré
    }

    const id = nameToId[nom.trim()];
    if (!id) {
      console.warn(`  ⚠️  Pas d'ID trouvé pour le nom : "${nom}" (champ ${name})`);
      stats.missing++;
      return match;
    }

    stats.injected++;
    return `${prefix}${nom}${suffix},${idField}:"${id}"`;
  });
});

// ── 5. Mise à jour du commentaire de timestamp ──────────────────────────────
const now = new Date();
const pad = n => String(n).padStart(2, '0');
const ts = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
result = result.replace(/^\/\/ @saved:[^\n]*/m, `// @saved:${ts} (+ resource IDs migration)`);

// ── 6. Écriture ─────────────────────────────────────────────────────────────
try {
  fs.writeFileSync(DATA_FILE, result, 'utf8');
  console.log(`\n✅ Migration terminée !`);
  console.log(`   Champs injectés   : ${stats.injected}`);
  console.log(`   Champs vides      : ${stats.skippedEmpty} (ignorés)`);
  console.log(`   Déjà migrés       : ${stats.skippedAlready} (ignorés)`);
  console.log(`   Noms sans ID      : ${stats.missing} ⚠️`);
} catch (e) {
  console.error('❌ Impossible d\'écrire data.js :', e.message);
  process.exit(1);
}
