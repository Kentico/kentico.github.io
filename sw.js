/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-48af143ae4e4434246d4.js"
  },
  {
    "url": "commons-e4d1cf937e8afc4814a6.js"
  },
  {
    "url": "app-0e491a8a3ab050a690fc.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-87ef582ba388a83f73c0.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "01f13a784ebf7799da7d0cb000f2a808"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ddd963b15864815262752d227c9ada8d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/assets-us-01.kc-usercontent.com\//, workbox.strategies.staleWhileRevalidate({ "cacheName":"kc-assets-data", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, workbox.strategies.staleWhileRevalidate({ "cacheName":"google-fonts-stylesheets", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, workbox.strategies.cacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]}), new workbox.expiration.Plugin({"maxAgeSeconds":3600,"maxEntries":30,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/kentico.github.io/, workbox.strategies.networkFirst({ "cacheName":"local-assets", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/avatars[0-9]+.githubusercontent.com\//, workbox.strategies.staleWhileRevalidate({ "cacheName":"github-assets-webfonts", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]}), new workbox.expiration.Plugin({"maxAgeSeconds":3600,"maxEntries":30,"purgeOnQuotaError":false})] }), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-0e491a8a3ab050a690fc.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  return await caches.match(offlineShell)
})

workbox.routing.registerRoute(navigationRoute)

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data)
})
