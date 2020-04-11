const webpush = require("web-push");

const options = {
  vapidDetails: {
    subject: "mail@you.com", // 你的联系邮箱
    publicKey: "公钥",
    privateKey: "私钥"
  },
  TTL: 60 * 60 // 有效时间，单位秒
};

const subscription = db.getUser("xxx"); // 从数据库取用户的订阅对象
const payload = {
  // 要发送的消息
  msg: "hellow"
};

// 发送消息到推送服务器
webpush
  .sendNotification(subscription, payload, options)
  .then(() => { })
  .catch(err => {
    // err.statusCode
  });