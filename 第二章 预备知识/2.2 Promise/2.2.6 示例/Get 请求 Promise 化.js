function httpGet(url) {
  return new Promise((resolve, reject) => {
    const XHR = new XMLHttpRequest();
    XHR.open("GET", url, true);
    XHR.send();

    XHR.onreadystatechange = () => {
      if (XHR.readyState == 4) {
        if (XHR.status == 200) {
          try {
            resolve(XHR.responseText);
          } catch (e) {
            reject(e);
          }
        } else {
          reject(new Error(XHR.statusText));
        }
      }
    };
  });
}

// 使用
httpGet("url")
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });