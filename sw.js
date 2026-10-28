/* Contas da nossa casita: deixa o app abrir sem internet.
   A página (index.html) vem sempre da internet quando dá; sem conexão (ou se a rede
   demorar mais de 4 segundos), abre a última cópia guardada. Ícones e manifesto ficam
   guardados. Nada dos lançamentos passa por aqui: eles vão cifrados direto para a nuvem. */
const CACHE = "casita-17.8";
const BASICOS = ["./", "manifest.webmanifest", "icone-180.png", "icone-192.png", "icone-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(BASICOS)).catch(() => {}).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((ks) => Promise.all(ks.filter((k) => k.startsWith("casita-") && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

/* Rede primeiro. Guardar a cópia nunca atrasa nem estraga a resposta que veio da rede. */
async function pagina(req, e) {
  try {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 4000);
    const r = await fetch(req, { signal: ctl.signal, cache: "no-store" });
    clearTimeout(t);
    if (r.ok) {
      const copia = r.clone();
      e.waitUntil(caches.open(CACHE).then((c) => c.put("./", copia)).catch(() => {}));
    }
    return r;
  } catch (err) {
    try {
      const cache = await caches.open(CACHE);
      const guardada = (await cache.match("./")) || (await cache.match(req));
      if (guardada) return guardada;
    } catch (e2) { /* sem cache */ }
    return Response.error();
  }
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Firebase e jsdelivr seguem direto
  if (req.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith("/index.html")) {
    e.respondWith(pagina(req, e));
    return;
  }
  e.respondWith(caches.match(req).catch(() => null).then((m) => m || fetch(req).then((r) => {
    if (r.ok) { const copia = r.clone(); e.waitUntil(caches.open(CACHE).then((c) => c.put(req, copia)).catch(() => {})); }
    return r;
  })));
});
