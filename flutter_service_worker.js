'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e75c9b62310d7e9cd89944780c5a576d",
"assets/assets/icons/cart.png": "673680087cc7d9f2cd91f25210aa1c59",
"assets/assets/icons/search.png": "3c8b40ac94a2b1889f8ba8c053897137",
"assets/assets/images/404_logo.webp": "2b0c3e6906aced5807c87dd335835937",
"assets/assets/images/appliances.png": "2575fd2b6af1e7da5e97ab12c6848ca3",
"assets/assets/images/baby.png": "3120bfcaee1c2523d828a69b5b6409cb",
"assets/assets/images/brands.png": "8cbed9ef3a36233060afd050e551ff12",
"assets/assets/images/button-1.png": "fb370743f593504f85bc5762060897ef",
"assets/assets/images/button-2.png": "34a916b564d701fa7001de4a65af6c6a",
"assets/assets/images/button-3.png": "0e4092432c960fc515b4a4d89dffd016",
"assets/assets/images/button-4.png": "1775edb8dd79bbb7d22026a0cdbbeac9",
"assets/assets/images/button-5.png": "c5be9f8db93838fa8cb1602b346e9390",
"assets/assets/images/button-6.png": "8b05ae06e1b1172d3f4d6e310b394e0a",
"assets/assets/images/button-7.png": "118f1b66aaf3405babcc3440e8bc7085",
"assets/assets/images/button-8.png": "0ce16e5edbe78fbd4443edbda4db3576",
"assets/assets/images/care.png": "b44d7a02fd0349076ca6549545702f9e",
"assets/assets/images/electronics.png": "a8939059400f063dc080253b5c1e6a89",
"assets/assets/images/fashion.png": "59635d7388451fd3c6499e68a2c060e8",
"assets/assets/images/furniture.png": "d6d7dd6fda8fdf521fc083f5a6801c2e",
"assets/assets/images/home.png": "9fda0ebfb5469ce024499e57aa839166",
"assets/assets/images/image%25207mobile.png": "1ef0713bdc86c3d4ec3a16aad7a1dfb9",
"assets/assets/images/mobile.png": "5548fec6deafac8ce3368c058c8303a6",
"assets/assets/images/no-logo.png": "39f9d7fbded66b603adf58e93133d9eb",
"assets/assets/images/no-product-found.png": "d3155e40595d06219eaa21825aa71408",
"assets/assets/images/offers.png": "f2101c6263673f30c7ef9c9dbe5c0b09",
"assets/assets/images/sad-cart.png": "9ac0cb3ab4dbc8d2b9f5ccd95b792662",
"assets/assets/images/SALE.mp4": "46cec2bbbc7426ab2219558daaa31e80",
"assets/assets/images/salE1.mp4": "f98b5bbd2176d89d00fabcbc8927998d",
"assets/assets/images/select-img.png": "19cea129af2c50487cf005c68f68f1ae",
"assets/assets/images/slider%2520(1).jpg": "947c7f56d90552fd73d2090fdd1829dd",
"assets/assets/images/slider%2520(2).jpg": "41bd286c8a7cc4a5fa2f70297ee788eb",
"assets/assets/images/slider%2520(3).jpg": "88ae586af19cac99d2c16b8d7d1eab28",
"assets/assets/images/slider%2520(4).jpg": "ccecb86859c1c0f520473a5a17eb4c82",
"assets/assets/images/slider%2520(5).jpg": "2e7c6c3300df22e943b937d0ec565ce1",
"assets/assets/images/sports.png": "fed4d459384ee6665ac67886f0838173",
"assets/assets/images/success.gif": "fcf0b80b5ca3d15fcd58f28dbde913d2",
"assets/assets/images/toys.png": "61d1688bf223df027eef00796bdc3751",
"assets/assets/images/user-login.png": "0da03ebd32f9595b09feb0b0f9ac19d3",
"assets/assets/images/wrong-address.png": "bd05ab5b73a3a039da52105a45970486",
"assets/assets/IM_Fell_DW_Pica_SC/IMFellDWPicaSC-Regular.ttf": "d4b57c13d7eec1c015ed29d5a2d91225",
"assets/assets/logo/icon.png": "cb5a069792c604c1b8c165572b3c8376",
"assets/assets/logo/logo.png": "dfc6706d8ff83d4cb20044766e85c4e5",
"assets/assets/Oxygen/Oxygen-Bold.ttf": "2b6ff5a30fd43b8bfff30401b84a17a3",
"assets/assets/Oxygen/Oxygen-Light.ttf": "62cc7c6fde12ce03ce75ef71e62fd099",
"assets/assets/Oxygen/Oxygen-Regular.ttf": "d5ea9b254845291bc569162d298ac3f6",
"assets/assets/Piazzolla/Piazzolla-Bold.ttf": "e8e041ccdc0e7485a08bbb7fbdbb5ebd",
"assets/assets/Piazzolla/Piazzolla-Light.ttf": "e63a901e77086d1c32cea0dd28b19dba",
"assets/assets/Piazzolla/Piazzolla-Regular.ttf": "98c15784aaf28d7c1353c498cae4190a",
"assets/FontManifest.json": "ba0dcbf9c11ac6085c23635d30f4b238",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5282794146e546102a2e910a1f478e40",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/typicons_flutter/fonts/typicons.ttf": "29f9630f7d87a79830d1c321e1600f2e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "aafada1da26cf3a5d9b039217a875c1f",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "f3eac8dc0c8a3a141a306e848ad5fff8",
"icons/Icon-512.png": "2085cf87bde7f1121c0c0a6887025458",
"icons/Icon-maskable-192.png": "f3eac8dc0c8a3a141a306e848ad5fff8",
"icons/Icon-maskable-512.png": "2085cf87bde7f1121c0c0a6887025458",
"index.html": "5e6ff7b95443eed1550c14165e7a4b58",
"/": "5e6ff7b95443eed1550c14165e7a4b58",
"main.dart.js": "5b6fa9e1105eff599afb1c3e041033f1",
"manifest.json": "6967448ebe23d9f1366cbe005157725a",
"version.json": "b0f7b33887fdf0d4e37862fa6a91c331"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
