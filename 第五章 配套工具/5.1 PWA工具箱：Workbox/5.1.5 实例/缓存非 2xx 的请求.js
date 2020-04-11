workbox.routing.registerRoute(
  /.+\.(js|css)$/i,
  workbox.strategies.cacheFirst({
    cacheName: "res",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  }),
  "GET"
);