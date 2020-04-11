// 向所有 window client 发送消息
self.clients
  .matchAll({
    type: "window"
  })
  .then(windows => {
    windows.map(win => {
      win.postMessage("sw.js发送消息到页面");
    });
  });