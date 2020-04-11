importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.setConfig({
  debug: false
});

workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.suppressWarnings(false);
workbox.precaching.precacheAndRoute([
  "static/css/1.99c565b2.chunk.css",
  "static/css/main.893db8a5.chunk.css",
  "static/js/1.27df3fa1.chunk.js",
  "static/js/main.246c1729.chunk.js",
  "static/js/runtime~main.229c360f.js",
  "static/media/about.422c920e.jpg",
  {
    url: "index.html",
    revision: "4"
  }
]);

workbox.routing.registerRoute(
  /sw\.reg\.mgr\.js/gi,
  workbox.strategies.networkOnly(),
  "GET"
);

workbox.routing.registerRoute(
  "/news",
  workbox.strategies.staleWhileRevalidate({
    cacheName: "news-datas",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 24 * 60 * 60, // 1 天有效，过期则直接网络请求
        purgeOnQuotaError: true
      })
    ]
  })
);