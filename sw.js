const cacheName = "home-signage";

self.addEventListener("install", (e) => {
  console.log("サービスワーカーがインストールされました！");

  const cachePaths = [];

  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cachePaths);
    })
  );
});

self.addEventListener("fetch", (e) => {
  //httpリクエストの時に呼ばれる
  //ここでキャッシュがあれば返す実装をすることができる。
});
