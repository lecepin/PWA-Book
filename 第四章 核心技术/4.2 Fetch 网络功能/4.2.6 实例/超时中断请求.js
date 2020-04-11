function _fetch(url, options, timeout) {
  let abort = new AbortController();
  setTimeout(() => {
    abort.abort();
  }, timeout);
  return fetch(url, { ...options, signal: abort.signal });
}

// 如 1S 内响应未完成则中断请求
_fetch("/api", {}, 1000)
  .then(data => {
    // 未超时
  })
  .catch(e => {
    // 超时
  });