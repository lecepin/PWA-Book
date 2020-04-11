self.addEventListener("push", event => {
  event.waitUntil(
    self.registration.showNotification("收到推送消息", {
      body: event.data && event.data.text()
    })
  );
});
