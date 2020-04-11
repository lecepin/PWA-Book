function register(config) {
  if ("serviceWorker" in navigator) { // 浏览器是否支持
    var swUrl = config.path + "/" + config.name + "?v=" + config.ver; // 通过 ver 的变化来强制更新操作，每次更新sw.js做ver+1设置
    navigator.serviceWorker
      .register(swUrl)
      .then(swReg => {
        console.log("sw.js 注册成功", swReg);
      })
      .catch(err => {
        console.error("serviceWorker注册期间发生错误:", error);
      });
  }
}

function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(swReg => {
      swReg.unregister(result => {
        result && console.log("Service Worker 注销成功");
      });
    });
  }
}

// 注册 sw.js
register({
  ver: 1,
  path: "",
  name: "sw.js"
});

// 注销
// unregister();