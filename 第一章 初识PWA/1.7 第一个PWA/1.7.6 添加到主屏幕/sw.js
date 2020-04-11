const CACHE_NAME = "pwa"; // 定义缓存名称

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll([
        // 在 Service Worker 安装时，将相关资源进行缓存
        "images/network.jpg",
        "custom404.html",
        "/",
        "index.html"
      ])
    )
  );
});

self.addEventListener("fetch", event => {
  return event.respondWith(
    fetch(event.request)
      .then(res => {
        if (event.request.mode == "navigate" && res.status == 404) {
          return fetch("custom404.html");
        }
        return res;
      })
      .catch(() => {
        // 离线状态下的处理
        return caches.open(CACHE_NAME).then(cache => {
          // 从 Cache 里面取资源
          return cache.match(event.request).then(response => {
            if (response) {
              return response;
            }

            return cache.match("custom404.html");
          });
        });
      })
  );
});

self.addEventListener("activate", event => {
  clients.claim();
});
