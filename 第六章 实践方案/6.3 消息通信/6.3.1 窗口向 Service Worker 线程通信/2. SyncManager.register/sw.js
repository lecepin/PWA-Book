self.addEventListener("sync", e => {
  if (e.tag == "同步tag") {
    e.waitUntil(
      new Promise((res, rej) => {
        // 逻辑处理 ...
        return res();
      })
    );
  }
});