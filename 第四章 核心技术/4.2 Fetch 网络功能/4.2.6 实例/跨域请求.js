// 不允许跨域的跨域请求
fetch("https://test.com/cors.json", {
  mode: "no-cors"
});

// 允许跨域的跨域请求，可以正常读取 Response 内容
fetch("https://test.com/cors.json", {
  mode: "cors"
});