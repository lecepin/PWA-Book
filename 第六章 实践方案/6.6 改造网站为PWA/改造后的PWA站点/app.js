const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.get("/news", (req, res) => {
  let data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "./news-data.json"), "utf-8")
  );
  let title = req.query.title;

  if (title) {
    data.showapi_res_body.pagebean.contentlist = data.showapi_res_body.pagebean.contentlist.filter(
      item => item.title.indexOf(title) > -1
    );
  }
  setTimeout(() => {
    res.end(JSON.stringify(data));
  }, 1500);
});

app.use("/", express.static("static"));

// 开启服务
const server = app.listen("3000", () => {
  console.log("服务运行在端口： http://127.0.0.1:" + server.address().port);
  console.log("按 Ctrl+C 退出。");
});
