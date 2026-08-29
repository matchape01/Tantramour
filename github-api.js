/**
 * TANTRAMOUR 2026 — GitHub API Save Module
 * ==========================================
 * Remplace le serveur local pour la sauvegarde de fichiers.
 * Fonctionne en environnement statique (GitHub Pages).
 *
 * Usage :
 *   await githubSaveFile('data.js', contenu);
 *
 * Configuration :
 *   Le token GitHub est saisi une fois via le bandeau de config
 *   et stocké dans localStorage sous la clé 'tm_gh_token'.
 */

const GITHUB_OWNER  = 'matchape01';
const GITHUB_REPO   = 'Tantramour';
const GITHUB_BRANCH = 'main';   // branche cible (main ou master)

// ── Cache SHA en mémoire ──────────────────────────────────────────────────────
// Évite un GET redondant si plusieurs fichiers sont sauvegardés en rafale.
// Chaque entrée : { sha, expiresAt }  — TTL de SHA_CACHE_TTL_MS millisecondes.
// Si le PUT retourne 409/422 (SHA obsolète), l'entrée est invalidée immédiatement.
const _shaCache = {};
const SHA_CACHE_TTL_MS = 10000; // 10 secondes

function _shaFromCache(filename) {
  const e = _shaCache[filename];
  if (!e) return undefined;             // pas en cache
  if (Date.now() > e.expiresAt) {
    delete _shaCache[filename];
    return undefined;                   // expiré
  }
  return e.sha;                         // null = fichier inexistant, string = SHA valide
}

function _shaToCache(filename, sha) {
  _shaCache[filename] = { sha, expiresAt: Date.now() + SHA_CACHE_TTL_MS };
}

function _shaInvalidate(filename) {
  delete _shaCache[filename];
}

// ── Bandeau de configuration ─────────────────────────────────────────────────
// Injecté automatiquement si le token est absent au moment de la 1ère sauvegarde.

function _ensureConfigBanner() {
  if (document.getElementById('gh-config-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'gh-config-banner';
  banner.style.cssText = [
    'position:fixed','top:0','left:0','right:0','z-index:99999',
    'background:#fffbeb','border-bottom:2px solid #fcd34d',
    'padding:10px 20px','display:flex','align-items:center',
    'gap:10px','flex-wrap:wrap','font-family:-apple-system,"Segoe UI",sans-serif',
    'font-size:13px','color:#92400e'
  ].join(';');

  banner.innerHTML = `
    <span style="font-weight:700">🔑 Token GitHub requis pour sauvegarder :</span>
    <input id="gh-token-input" type="password" placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
      style="flex:1;min-width:260px;padding:6px 10px;border:1px solid #fcd34d;
             border-radius:6px;font-size:13px;font-family:inherit;background:#fff;color:#1f2328;"
      value="${localStorage.getItem('tm_gh_token') || ''}">
    <button id="gh-token-save" style="cursor:pointer;background:#3b82d4;color:#fff;
      border:none;border-radius:6px;padding:7px 16px;font-size:13px;font-weight:700;
      font-family:inherit;">Enregistrer</button>
    <button id="gh-token-close" style="cursor:pointer;background:transparent;
      border:none;font-size:18px;color:#92400e;line-height:1;padding:0 4px;">✕</button>
    <span style="font-size:11px;color:#b45309;">
      (Settings GitHub → Developer settings → Personal Access Tokens → scope : <strong>repo</strong>)
    </span>
  `;

  document.body.prepend(banner);

  document.getElementById('gh-token-save').addEventListener('click', () => {
    const val = document.getElementById('gh-token-input').value.trim();
    if (!val) return;
    localStorage.setItem('tm_gh_token', val);
    banner.remove();
  });

  document.getElementById('gh-token-close').addEventListener('click', () => {
    banner.remove();
  });
}

// ── Sauvegarde d'un fichier via l'API GitHub ─────────────────────────────────

/**
 * Sauvegarde un fichier dans le repo GitHub.
 * Stratégie robuste anti-409 :
 *   - GET frais (If-None-Match vide + cache-buster) juste avant chaque PUT
 *   - Jusqu'à MAX_RETRIES tentatives GET→PUT en cas de conflit de SHA
 * @param {string} filename  — nom du fichier (ex: 'data.js')
 * @param {string} content   — contenu texte complet du fichier
 * @returns {Promise<boolean>} — true si succès, false sinon
 */
async function githubSaveFile(filename, content) {
  const token = localStorage.getItem('tm_gh_token');

  if (!token) {
    _ensureConfigBanner();
    throw new Error('Token GitHub manquant — renseigne-le dans le bandeau en haut de la page.');
  }

  const apiBase = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filename}`;
  const authHeaders = {
    'Authorization': `token ${token}`,
    'Accept':        'application/vnd.github+json',
    'Content-Type':  'application/json'
  };

  // Encoder le contenu en Base64
  const encoded = btoa(unescape(encodeURIComponent(content)));

  // Récupère le SHA actuel — depuis le cache en mémoire si disponible,
  // sinon via un GET frais (If-None-Match vide + cache-buster).
  // Retourne null si le fichier n'existe pas encore (404).
  async function getSha() {
    const cached = _shaFromCache(filename);
    if (cached !== undefined) {
      console.log(`[github-api] SHA en cache pour ${filename}: ${cached}`);
      return cached;
    }
    const r = await fetch(
      `${apiBase}?ref=${GITHUB_BRANCH}&_t=${Date.now()}`,
      {
        method: 'GET',
        headers: { ...authHeaders, 'If-None-Match': '' },
        cache: 'no-store'
      }
    );
    if (r.status === 401) {
      localStorage.removeItem('tm_gh_token');
      _ensureConfigBanner();
      throw new Error('Token invalide ou expiré — saisis-en un nouveau.');
    }
    if (r.status === 404) { _shaToCache(filename, null); return null; }
    if (!r.ok) throw new Error(`GitHub GET ${r.status}`);
    const d = await r.json();
    const sha = d.sha || null;
    _shaToCache(filename, sha);
    return sha;
  }

  // PUT avec le SHA fourni (ou sans SHA si fichier nouveau).
  async function doPut(sha) {
    const body = {
      message: `[Tantramour 2026] Mise à jour ${filename}`,
      content: encoded,
      branch:  GITHUB_BRANCH,
      ...(sha ? { sha } : {})
    };
    return fetch(apiBase, {
      method: 'PUT',
      headers: authHeaders,
      body:   JSON.stringify(body)
    });
  }

  // Boucle GET → PUT avec jusqu'à MAX_RETRIES tentatives.
  // Chaque tentative récupère le SHA au dernier moment juste avant le PUT,
  // ce qui élimine la fenêtre de désynchronisation entre les appels successifs.
  const MAX_RETRIES = 4;
  let lastErr = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    let sha = null;
    try {
      sha = await getSha();
      console.log(`[github-api] Tentative ${attempt}/${MAX_RETRIES} — SHA pour ${filename}: ${sha}`);
    } catch (err) {
      // Erreur d'auth → on remonte immédiatement, pas la peine de réessayer
      throw err;
    }

    const res = await doPut(sha);

    // Succès — mettre à jour le cache avec le nouveau SHA retourné par GitHub
    if (res.ok) {
      console.log(`[github-api] ✅ ${filename} sauvegardé (tentative ${attempt})`);
      try {
        const resData = await res.json();
        const newSha  = resData && resData.content && resData.content.sha;
        if (newSha) _shaToCache(filename, newSha);
        else        _shaInvalidate(filename);
      } catch(_) { _shaInvalidate(filename); }
      return true;
    }

    // Erreur d'authentification → on remonte immédiatement
    if (res.status === 401) {
      localStorage.removeItem('tm_gh_token');
      _ensureConfigBanner();
      throw new Error('Token invalide ou expiré — saisis-en un nouveau.');
    }

    // Conflit de SHA (409/422) → invalider le cache et réessayer avec un GET frais
    if (res.status === 409 || res.status === 422) {
      const errData = await res.json().catch(() => ({}));
      const msg = errData.message || '';
      console.warn(`[github-api] Conflit ${res.status} tentative ${attempt}/${MAX_RETRIES} pour ${filename}: ${msg}`);
      lastErr = new Error(`GitHub ${res.status} : ${msg}`);
      _shaInvalidate(filename);  // forcer un GET frais à la prochaine tentative
      await new Promise(r => setTimeout(r, 100 * attempt));
      continue;
    }

    // Autre erreur → on remonte
    const errData = await res.json().catch(() => ({}));
    throw new Error(`GitHub ${res.status} : ${errData.message || 'Erreur inconnue'}`);
  }

  // Toutes les tentatives ont échoué
  throw lastErr || new Error(`GitHub : échec après ${MAX_RETRIES} tentatives pour ${filename}`);
}
