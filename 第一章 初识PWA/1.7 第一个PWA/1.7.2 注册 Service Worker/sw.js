self.addEventListener("install", event => {
  self.skipWaiting(); // 跳过等待
});

self.addEventListener("activate", event => {
  clients.claim(); // 立即受控
});