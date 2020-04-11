workbox.routing.registerRoute(
  /.+\.(js|css)$/i,
  workbox.strategies.cacheFirst({
    cacheName: "res" // 为缓存指定名字
  }),
  "GET"
);

workbox.routing.registerRoute(
  /.+\.(js|css)$/i,
  workbox.strategies.cacheFirst({
    cacheName: "res",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60, // 最多 60 个文件
        maxAgeSeconds: 24 * 60 * 60 * 7, // 最长 7 天
        purgeOnQuotaError: true
      })
    ]
  }),
  "GET"
);