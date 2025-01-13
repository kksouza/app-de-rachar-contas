self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('despesas-v1').then(function(cache) {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './icon-192x192.png',
        './icon-512x512.png',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
