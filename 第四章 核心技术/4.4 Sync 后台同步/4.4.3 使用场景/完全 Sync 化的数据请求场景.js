// index.js
btnSend.addEventListener("click", () => {
  // 聊天消息存入数据库
  db.add("chatList", { msg, time, useId }).then(() => {
    navigator.serviceWorker.ready.then(swReg => {
      swReg.sync.register("send_chat"); // 注册 发送消息的sync tag
    });
  });
});

// sw.js
self.addEventListener("sync", e => {
  e.tag == "send_chat" &&
    e.waitUntil(
      db
        .getAll("chatList") // 取待发送的聊天消息
        .then(allData => Promise.all(allData.map(data => fetch(data)))) // 发送完成后，sync tag 完成
    );
});