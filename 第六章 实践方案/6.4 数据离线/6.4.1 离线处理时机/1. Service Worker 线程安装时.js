self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("cache-v1-core").then(cache =>
      cache.addAll([
        "/index.css",
        "/index.js",
        "/index.html"
        // ...静态资源
      ])
    )
  );
});

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("cache-v1-core").then(cache => {
      cache.addAll([
        // 大文件 或 非核心资源...
      ]);
      return cache.addAll([
        "/index.css",
        "/index.js",
        "/index.html"
        // 核心资源 ...
      ]);
    })
  );
});