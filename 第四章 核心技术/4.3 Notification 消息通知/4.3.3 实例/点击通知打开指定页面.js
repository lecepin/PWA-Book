Notification.requestPermission().then(() => {
  const n = new Notification('今日新闻', {
    body: '假期到来旅客人数突破新高~',
    icon: 'icon.png',
    requireInteraction: true,
    data: {
      nav: 'https://xxx.news.com/xxx.html' // 自定义的属性
    }
  });

  n.onclick = event => {
    n.close();

    if (event.currentTarget.data.nav) { // 获取自定义的属性
      window.open(event.currentTarget.data.nav);
    }
  };
}).catch(() => {
  alert('通知权限已禁止，请设置打开权限');
})