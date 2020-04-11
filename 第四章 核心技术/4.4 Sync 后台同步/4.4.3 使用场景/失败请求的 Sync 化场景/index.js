// index.js
btnLike.addEventListener("click", () => {
  fetch(data).catch(e => {
    db.add("likeList", { data, lastTime: 12938749138 }); // 有效期时间戳
    navigator.serviceWorker.ready.then(swReg => {
      swReg.sync.register("like");
    });
  });
});