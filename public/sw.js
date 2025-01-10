self.addEventListener('install' , function(event) {
  console.log('Installing service worker' , event);
});
self.addEventListener('activate' , function(event) {
  console.log('Activating service worker' , event);
  return self.clients.claim();
});
self.addEventListener('fetch' , function(event) {
  console.log('Fetching something' , event);
  event.respondWith(fetch(event.request))
});
