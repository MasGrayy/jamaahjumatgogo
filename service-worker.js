const CACHE_NAME = 'mcgg-v5-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './assets/tigreal.svg',
  './assets/zilong.svg',
  './assets/alucard.svg',
  './assets/freya.svg',
  './assets/eudora.svg',
  './assets/gord.svg',
  './assets/aurora.svg',
  './assets/miya.svg',
  './assets/layla.svg',
  './assets/moskov.svg',
  './assets/ling.svg',
  './assets/hayabusa.svg',
  './assets/gusion.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
