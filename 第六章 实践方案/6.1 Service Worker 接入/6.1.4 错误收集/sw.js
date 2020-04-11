self.addEventListener("error", err => {
  /**
   * err.message
   * err.lineno
   * err.filename
   * err.colno
   * …
   */
  fetch("错误日志接口", {
    body: JSON.stringify(err),
    method: "POST"
  });
});

self.addEventListener("unhandledrejection", err => {
  /**
   * err.reason
   */
  fetch("错误日志接口", {
    body: JSON.stringify(err.reason),
    method: "POST"
  });
});