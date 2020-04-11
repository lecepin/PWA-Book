self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        caches.open("cache-data").then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});