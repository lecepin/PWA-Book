const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const db = require("./db"); // 这里可以自行选择存储的方法，用于存储订阅信息

// 生成的 VAPID
const VAPID_PUBLIC_KEY =
  "BBSIeo0HO2b3A6f2_IByBl8MxB2EC5as5VzGYkGwuH5ASq3fEv7_Ok4xIQBEn9uSmcxJkxTz5Nk1R_C0-vdv668";
const VAPID_PRIVATE_KEY = "LgWZ3OnO31mu1SAzcuIWTVzcvkD-3APgdDebYPTAuxs";

const app = express();

app.use(bodyParser.json());

// 公钥获取接口
app.get("/get-public-key", (req, res) => {
  res.send(VAPID_PUBLIC_KEY);
});

// 存储订阅信息接口
app.post("/save-subscription", (req, res) => {
  // 获取订阅信息，进行存储
  db.add(req.body.subscription);
  res.sendStatus(201);
});

// 发送消息接口
app.post("/send-push", (req, res) => {
  const options = {
    vapidDetails: {
      subject: "http://test.test",
      publicKey: VAPID_PUBLIC_KEY,
      privateKey: VAPID_PRIVATE_KEY,
    },
    TTL: 60 * 60
  };
  const subscriptions = db.getAll(); // 获取存储的所有订阅信息
  const msg = req.body.content;

  subscriptions.map((subscription) => {
    // 对每一个订阅者进行消息发送
    webpush
      .sendNotification(subscription, msg, options)
      .then(() => {
        res.status(200).send({ success: true });
      })
      .catch((err) => {
        if (err.statusCode) {
          // 订阅信息无效，则删除存储在应用服务器的订阅信息
          if (err.statusCode == 404 || err.statusCode == 410) {
            db.delete(subscription);
            console.log('订阅失败', subscription)
          }
          res.status(err.statusCode).send(err.body);
        } else {
          res.status(400).send(err.message);
        }
      });
  });
});

app.use("/", express.static("static"));

// 开启服务
const server = app.listen("3000", () => {
  console.log("应用服务器服务运行在端口：" + server.address().port);
  console.log("按 Ctrl+C 退出。");
});