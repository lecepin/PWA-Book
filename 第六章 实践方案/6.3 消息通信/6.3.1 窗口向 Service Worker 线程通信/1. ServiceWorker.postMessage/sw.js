self.addEventListener("message", e => {
  // 从 e.data 里面取 postMessage 过来的数据
  console.log("sw.js 收到消息:", e.data);

  // 1.向发送消息的 window 环境的页面发送消息。方法一
  e.source.postMessage("这是从 Service Worker 环境发送的消息");

  // 2.向发送消息的 window 环境的页面发送消息。方法二
  self.clients.get(e.source.id).then(client => {
    client.postMessage("这是从 Service Worker 环境发送的消息");
  });

  // 3.向所有 window 环境的页面
  self.clients.matchAll().then(clients => {
    clients.map(client => {
      client.postMessage("这是从 Service Worker 环境发送的消息");
    });
  });
});