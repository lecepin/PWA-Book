self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request));
});