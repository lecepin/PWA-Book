self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(cacheName => {
            // 这里可以对与当前版本不匹配的缓存进行删除
            // return cacheName !== 'cache-v2-core'
          })
          .map(cacheName => caches.delete(cacheName))
      )
    )
  );
});