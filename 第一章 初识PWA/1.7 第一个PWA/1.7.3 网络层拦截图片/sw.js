self.addEventListener("install", event => {
  self.skipWaiting(); // 跳过等待
});

self.addEventListener("activate", event => {
  clients.claim(); // 立即受控
});

self.addEventListener("fetch", event => {
  if (/network\.jpg$/.test(event.request.url)) {
    return event.respondWith(fetch("images/pwa.jpg"));
  }
})