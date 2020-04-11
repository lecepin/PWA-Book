// 使用正则
workbox.routing.registerRoute(
  /config\.js/,
  workbox.strategies.networkOnly(),
  "GET"
);

// 使用函数

workbox.routing.registerRoute(
  ({ url }) => {
    return url.href.includes("config.js");
  },
  workbox.strategies.networkOnly(),
  "GET"
);