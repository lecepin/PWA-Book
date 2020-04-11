self.addEventListener("install", event => {
  self.skipWaiting(); // 跳过等待
});

self.addEventListener("activate", event => {
  clients.claim(); // 立即受控
});

self.addEventListener("fetch", event => {
  if (event.request.mode == "navigate") {
    return event.respondWith(
      fetch(event.request).then(res => {
        if (res.status == 404) {
          return fetch("custom404.html");
        }
        return res;
      })
    );
  }
});