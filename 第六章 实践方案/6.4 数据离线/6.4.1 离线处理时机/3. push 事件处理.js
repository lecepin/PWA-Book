self.addEventListener("push", event => {
  if (event.data.text() == "news") {
    event.waitUntil(
      caches.open("cache-news").then(cache =>
        fetch("/news.json")
          .then(res => res.json())
          .then(news => {
            registration.showNotification("News", {
              body: news.title,
              tag: "news"
            });
          })
      )
    );
  }
});

self.addEventListener("notificationclick", event => {
  if (event.notification.tag == "news") {
    new WindowClient("/news/");
  }
});