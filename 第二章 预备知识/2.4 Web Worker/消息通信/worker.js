self.onmessage = e => {
  console.log("收到 index.html 信息", e.data);
  if (e.data.type == "send") {
    self.postMessage("received");
  }
};