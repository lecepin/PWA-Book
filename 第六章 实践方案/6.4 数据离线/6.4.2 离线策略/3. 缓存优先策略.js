self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cacheData => {
      if (cacheData) {
        return cacheData;
      }

      return fetch(event.request).then(response => {
        caches.open("cache-data").then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});