navigator.serviceWorker.ready.then(swReg => {
  Notification.requestPermission().then(() => {
    swReg.showNotification('好友请求', {
      body: '美女向你打招呼~',
      icon: 'face.png',
      requireInteraction: true,
      actions: [{
        action: 'yes',
        title: '加好友',
      }, {
        action: 'no',
        title: '拒绝'
      }]
    });
  })
})