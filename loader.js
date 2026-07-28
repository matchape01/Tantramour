/**
 * TANTRAMOUR 2026 — Loader de données dynamique
 * ================================================
 * Charge les fichiers JS séquentiellement via injection de <script>.
 * Timestamp sur chaque URL pour contourner le cache GitHub Pages.
 * Compatible CSP strict (pas d'eval, pas de blob).
 */

function loadData(files, callback) {
  var index = 0;

  function loadNext() {
    if (index >= files.length) {
      callback();
      return;
    }
    var file = files[index++];
    var url  = file + '?_=' + Date.now();

    var script = document.createElement('script');
    script.src     = url;
    script.onload  = loadNext;
    script.onerror = function() {
      console.error('[loader] Echec : ' + file);
      loadNext();
    };
    (document.head || document.documentElement).appendChild(script);
  }

  // Lancer au prochain tick pour laisser le DOM finir de se construire
  setTimeout(loadNext, 0);
}

// ── Badge "Data Update" ────────────────────────────────────────────────────────
// Affiché en bas à droite sur toutes les pages qui chargent loader.js.
// La date est lue depuis localStorage (clé : tm_data_update).
(function() {
  function injectBadge() {
    var date = localStorage.getItem('tm_data_update') || '';
    var badge = document.createElement('div');
    badge.id = 'tm-data-badge';
    badge.style.cssText = [
      'position:fixed', 'bottom:12px', 'right:16px', 'z-index:9998',
      'font-family:-apple-system,"Segoe UI",system-ui,sans-serif',
      'font-size:11px', 'font-weight:600', 'line-height:1.4',
      'background:rgba(247,248,250,0.92)', 'color:#57606a',
      'border:1px solid #e5e7eb', 'border-radius:6px',
      'padding:4px 10px', 'backdrop-filter:blur(4px)',
      'box-shadow:0 1px 4px rgba(0,0,0,.08)',
      'pointer-events:none', 'user-select:none'
    ].join(';');
    badge.textContent = date ? ('🗓 Data update : ' + date) : '';
    badge.style.display = date ? 'block' : 'none';
    document.body.appendChild(badge);

    // Synchroniser si la valeur change (ex : onglet MasterData ouvert en parallèle)
    window.addEventListener('storage', function(e) {
      if (e.key === 'tm_data_update') {
        var v = e.newValue || '';
        badge.textContent = v ? ('🗓 Data update : ' + v) : '';
        badge.style.display = v ? 'block' : 'none';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectBadge);
  } else {
    injectBadge();
  }
})();
