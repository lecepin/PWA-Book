self.addEventListener("message", e => {
  console.log("sw.js 收到消息：", e.data);
  // 从 e.ports 里取 MessagePort
  e.ports[0] && e.ports[0].postMessage("这是 sw.js 发送的消息");
});