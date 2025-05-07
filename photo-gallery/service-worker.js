const CACHE_NAME = 'gallery-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'styles.css',
  'script.js',
  'https://i.imgur.com/lKZJpHv.png',
  'https://i.imgur.com/rAzTl5T.png',
  'https://i.imgur.com/oIBt4fT.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});