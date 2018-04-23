importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.a9782a56f32f3dff43a3.js",
    "revision": "cef446d7410734dcb5f5e83e6e7e68ac"
  },
  {
    "url": "/_nuxt/layouts_default.6583fbfa8627de12f538.js",
    "revision": "5c0adfb7118c39f00ea5fb5ac83b9429"
  },
  {
    "url": "/_nuxt/manifest.11cb8f2728211e600f18.js",
    "revision": "22f6d06057cc91cdd6f5844fce1454ca"
  },
  {
    "url": "/_nuxt/pages_index.b7c2fb4a16d16514fe21.js",
    "revision": "f53bdea3d747e60bf76afd161fddfe7e"
  },
  {
    "url": "/_nuxt/pages_main.a06e2aa6ae36f2752b5e.js",
    "revision": "97fc615c3346eac470243962a315ac3b"
  },
  {
    "url": "/_nuxt/vendor.607bb45722f9cb5dfc82.js",
    "revision": "6efbd0322aa7034bf0ac152023417b94"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

