// Minimal service worker — enables "Add to Home Screen" installability.
// Intentionally does NOT cache the CSV data endpoints; this is a live
// tracking app and stale cached dwell data would be actively misleading.
// It also can't cache map tiles for true offline use, since the map
// itself needs a live connection to OpenStreetMap either way.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass-through — no caching. Keeps the install prompt available without
  // risking anyone looking at outdated dwell times.
});
