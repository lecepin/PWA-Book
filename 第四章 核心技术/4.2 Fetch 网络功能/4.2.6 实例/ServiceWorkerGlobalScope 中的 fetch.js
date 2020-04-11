self.addEventListener("fetch", e => {
  // e.request 即为拦截 fetch 的完整 Request
  const url = new URL(e.request.url);

  if (url.pathname === "/") {
    return e.respondWith(new Response("这是被劫持的首页内容"));
  }

  if (url.pathname === "/jump") {
    // 如果是 jump 则返回首页的内容
    return e.respondWith(fetch("./", {}));
  }

  e.respondWith(
    fetch(e.request).then(res => {
      const cacheRes = res.clone(); // 克隆 Response
      caches.open("cache-name").then(cache => { // 缓存操作
        cache.put(e.request, cacheRes);
      });
      return res;
    })
  );
});