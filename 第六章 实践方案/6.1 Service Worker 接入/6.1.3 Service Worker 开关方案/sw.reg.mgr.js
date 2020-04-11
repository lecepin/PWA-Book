fetch("开关接口地址").then(status => {
  if (status == "on") {
    // 注册 sw.js
    register({
      ver: 1,
      path: "",
      name: "sw.js",
      log: true,
      onRegister: swReg => { },
      onSuccess: swReg => { },
      onUpdate: swReg => { },
      onError: err => { }
    });
  } else if (status == "off") {
    // 注销
    unregister();
  }
});