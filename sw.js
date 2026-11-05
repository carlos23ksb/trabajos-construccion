/* Service worker solo para permitir instalar la página como aplicación.
   Sin caché: cada petición pasa directo a la red, así ninguna versión
   vieja queda guardada en el teléfono. */
self.addEventListener("install", (event) => {
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
