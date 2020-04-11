self.addEventListener("notificationclick", function (event) {
  console.log("notificationclick", event);
  event.notification.close();

  if (event.action == 'yes') {
    // 点击加好友按钮的逻辑处理
  } else if (event.action == 'no') {
    // 点击拒绝按钮的逻辑处理
  }
});