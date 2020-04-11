// sw.js
self.addEventListener("sync", e => {
  if (e.tag == "send_chat") {
    e.waitUntil(
      new Promise.then(async (res, rej) => {
        while (db.get("likeList")[0]) {
          const data = db.get("likeList")[0];
          try {
            if (data.lastTime > Date.now()) {
              db.remove("likeList", data);
            } else {
              await fetch(data);
              db.remove("likeList", data);
            }
          } catch (err) {
            if (e.lastChance == true) {
              // 如果最后一次尝试机会，则重新注册，保证一直有效
              self.registration.sync.register("like");
            }
          }
        }
      })
    );
  }
});