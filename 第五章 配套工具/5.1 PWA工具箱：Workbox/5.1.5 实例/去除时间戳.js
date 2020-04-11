// 原地址： https://abc.com/getinfo.json?__stamp=15760865251
const getInfo = workbox.strategies.staleWhileRevalidate({
  cacheName: "api",
  plugins: [
    {
      requestWillFetch: ({ event }) => {
        return event.request.clone();
      }
    },
    new workbox.expiration.Plugin({
      maxEntries: 20,
      purgeOnQuotaError: true
    })
  ]
});
workbox.routing.registerRoute(
  /getinfo\.json/,
  Object.assign(getInfo, {
    handle: args => {
      var event = args.event;
      var _this = getInfo;

      return babelHelpers.asyncToGenerator(function* () {
        return _this.makeRequest({
          event,
          request: (() => new Request(removeQs(event.request.url, "__stamp")))()
        });
      })();
    }
  })
);

function removeQs(url, name) {
  const urlURL = new URL(url);

  if (urlURL.search.indexOf("?") !== 0) {
    return url;
  }

  const searchStr = urlURL.search
    .substr(1)
    .split("&")
    .map(item => item.split("="))
    .filter(item => {
      if (Array.isArray(name)) {
        return !name.includes(item[0]);
      } else {
        return item[0] !== name;
      }
    })
    .map(item => item.join("="))
    .join("&");

  return urlURL.href.substr(0, urlURL.href.indexOf("?") + 1) + searchStr;
}