self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('app-v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/estilo.css',
          '/ia.js',
          '/wiki.js',
          '/icon-192.png',
          '/icon-512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(response => response || fetch(e.request))
    );
  });
  
  