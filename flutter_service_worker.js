'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "631af26afa246c37f251ae054d7e2ad6",
"assets/assets/icons/cart.png": "673680087cc7d9f2cd91f25210aa1c59",
"assets/assets/icons/search.png": "3c8b40ac94a2b1889f8ba8c053897137",
"assets/assets/images/appliances.png": "2575fd2b6af1e7da5e97ab12c6848ca3",
"assets/assets/images/baby.png": "3120bfcaee1c2523d828a69b5b6409cb",
"assets/assets/images/brands.png": "8cbed9ef3a36233060afd050e551ff12",
"assets/assets/images/care.png": "b44d7a02fd0349076ca6549545702f9e",
"assets/assets/images/electronics.png": "a8939059400f063dc080253b5c1e6a89",
"assets/assets/images/fashion.png": "59635d7388451fd3c6499e68a2c060e8",
"assets/assets/images/image%25207mobile.png": "1ef0713bdc86c3d4ec3a16aad7a1dfb9",
"assets/assets/images/mobile.png": "5548fec6deafac8ce3368c058c8303a6",
"assets/assets/images/offers.png": "f2101c6263673f30c7ef9c9dbe5c0b09",
"assets/assets/images/slider%2520(1).jpg": "849517330544f7e00d66971e37de5789",
"assets/assets/images/slider%2520(2).jpg": "b0041e88a68fbcb388aa9606098366fa",
"assets/assets/images/slider%2520(3).jpg": "69869cd51b719e7e233ea7e25153e479",
"assets/assets/images/slider%2520(4).jpg": "2228702c644f3fced79c8503a2947d4c",
"assets/assets/images/sports.png": "fed4d459384ee6665ac67886f0838173",
"assets/assets/images/toys.png": "61d1688bf223df027eef00796bdc3751",
"assets/assets/images/user-login.png": "0da03ebd32f9595b09feb0b0f9ac19d3",
"assets/assets/IM_Fell_DW_Pica_SC/IMFellDWPicaSC-Regular.ttf": "d4b57c13d7eec1c015ed29d5a2d91225",
"assets/assets/logo/icon.png": "cb5a069792c604c1b8c165572b3c8376",
"assets/assets/logo/logo.png": "bad4c974d368e8b1f8a0c6d5310cccb8",
"assets/assets/Oxygen/Oxygen-Bold.ttf": "2b6ff5a30fd43b8bfff30401b84a17a3",
"assets/assets/Oxygen/Oxygen-Light.ttf": "62cc7c6fde12ce03ce75ef71e62fd099",
"assets/assets/Oxygen/Oxygen-Regular.ttf": "d5ea9b254845291bc569162d298ac3f6",
"assets/FontManifest.json": "b9e4b8050aa42fbb80123029227c52d0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7367339aa13132858e37d9bd374af18b",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
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
"index.html": "e8202d5527af1098074031394cd87e72",
"/": "e8202d5527af1098074031394cd87e72",
"main.dart.js": "f4abf538dc4bcb1884cadea2c02b29f6",
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
