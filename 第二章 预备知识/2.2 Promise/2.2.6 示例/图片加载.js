function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      resolve(img);
    };

    img.onerror = err => {
      reject(new Error(err));
    };

    img.src = url;
  });
}

// 使用
loadImage("imgurl")
  .then(img => {
    document.body.appendChild(img);
  })
  .catch(err => {
    console.error(err);
  });