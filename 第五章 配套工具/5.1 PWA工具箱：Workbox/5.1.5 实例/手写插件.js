workbox.routing.registerRoute(
  ({ url, event }) => {
    return /\.(gif|png|jpg)$/.test(url.href);
  },
  workbox.strategies.cacheFirst({
    cacheName: "rhino-img",
    plugins: [
      {
        requestWillFetch: ({ event }) => {
          return new Request(event.request.url, {
            mode: "cors",
            credentials: "include"
          });
        }
      },
      new workbox.expiration.Plugin({
        maxEntries: 60,
        purgeOnQuotaError: true
      })
    ]
  }),
  "GET"
);