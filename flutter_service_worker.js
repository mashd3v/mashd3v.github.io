'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "14c3d385fe98934c77ebddf2304df8c4",
"index.html": "198c52b5621ec624cb683d316f307a35",
"/": "198c52b5621ec624cb683d316f307a35",
"main.dart.js": "84b02163cc3f3aa025dcb5798463cffe",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "4d6eb21670a2b7f505bf342fdd52a82e",
"icons/Icon-512.png": "7b3eee853adb81422ae6ed2f788c39b0",
"manifest.json": "e370b03d8691d1cf9ba4d4a762e42b18",
"portfolio_web.zip": "deac8195d69fab8a45660c36ebec6e26",
"assets/AssetManifest.json": "7bddc91f594196605b170406077226e6",
"assets/NOTICES": "ae1aeb8d84d938c5becba9b65259be53",
"assets/FontManifest.json": "8265427601fa6fccf163d8b72f6dd5f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/slimy_card/assets/flare/topSlime.flr": "9f381ee39c22b624c805f536b39171a6",
"assets/packages/slimy_card/assets/flare/bottomSlime.flr": "3a26ed39d3a9a9956105e9e6e4d5ad43",
"assets/fonts/Kollektif.ttf": "4d49be6e42d18464b230d87d1fab175a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/line-pink.png": "9834625b2aaf77b64dde34401f6afb85",
"assets/assets/images/contact/phone-pink.png": "0c95da376dd27f352e93ad5305a8f86f",
"assets/assets/images/contact/email-pink.png": "b5b2bf60950413c91f8831bc016e776c",
"assets/assets/images/contact/linkedin-pink.png": "7fb9483e744d8aa2c569391b7b535977",
"assets/assets/images/web-black.png": "7d651bc2b71d03f9ce6babe32a3b5fa9",
"assets/assets/images/mashd3v.png": "2525a129611ea1587422e289bac65ca2",
"assets/assets/images/line-white.png": "01c6814cf227d5f25b664eea097d5c0d",
"assets/assets/images/github-pink.png": "f1250e45f2329b2f007bcfe7f731e6b4",
"assets/assets/images/github-white.png": "ba4e5ce7693b828564e07a22de76f74c",
"assets/assets/images/projects/bmi.png": "3d755d13fa12424e08bd39d2fb18f33a",
"assets/assets/images/projects/queues-mobile.png": "ad94aac6f4b9cb38449dc114dfe0b4ed",
"assets/assets/images/projects/portfolio-mobile.png": "6203b4128ea6408c9abc954f93b4a35d",
"assets/assets/images/projects/project-purchase-and-acquisition.png": "e63067b5b31230a147d4f6c39a09676a",
"assets/assets/images/projects/purchase-and-acquisition.png": "cdb46adeba113c28c8f673c4e6520ce4",
"assets/assets/images/projects/project-socket-chat.png": "f49c528e33c58fcfac5567a576a22600",
"assets/assets/images/projects/NLP-library.png": "14035808374a2679e73d060c66c2320d",
"assets/assets/images/projects/socket-chat.png": "61855c2b73649e75ec1f1b76defee8ed",
"assets/assets/images/projects/queues.png": "6bc83ad098aff5ed73b504bb1df046be",
"assets/assets/images/projects/purchase-and-acquisition-mobile.png": "21bab87c00d094d4901a7e38e9a5e83f",
"assets/assets/images/projects/portfolio.png": "4a647a43ea8edd59387f6ab490e05e5c",
"assets/assets/images/projects/socket-chat-mobile.png": "9b4a3172e15384c9164a4157b59b49fd",
"assets/assets/images/projects/project-portafolio.png": "4c44679430fb0b0ec220bf76ae48cfe6",
"assets/assets/images/projects/bmi-mobile.png": "86dc01e9ee6e7b6f4ae2f5ee9c31bc25",
"assets/assets/images/projects/project-queues.png": "c167466870c622115abd2df9e9ab925c",
"assets/assets/images/shapes/shape_2.png": "b0113880ddd6ee701b9e99221f4e1486",
"assets/assets/images/shapes/shape_3.png": "f2285f4c35f7c4bf2dac0ad6e1b3d805",
"assets/assets/images/shapes/shape_1.png": "9f6701d214bb8c7fc8dcd5d3dc93974c",
"assets/assets/images/about/study.png": "190aa44f3437eb1a7955adc17e2dd60d",
"assets/assets/images/web-pink.png": "fd9c3d909c42d7b5f5e6d5e123cf79c7",
"assets/assets/images/logo.png": "5140ed164760f7e4df973db44edbf8d8",
"assets/assets/images/web-white.png": "0a13d0035086cf9c83f8f74bbb8a5247",
"assets/assets/images/mashd3v.gif": "dc470d3095ef7b8072ed98c72e8cd40c",
"assets/assets/images/line-black.png": "edb6c70946ddfd8943346022dc827fde",
"assets/assets/images/github-black.png": "dbe8e954d9d08cd30cb999033567479b",
"assets/assets/images/skills/css3-white.png": "8f339e22205742ce4d32ee98c2f30567",
"assets/assets/images/skills/flutter-white.png": "3aca1c4dc955501e6c461b9415f881b6",
"assets/assets/images/skills/django-original.png": "f1ca318a3dc160204de0e4a244024286",
"assets/assets/images/skills/html5-black.png": "4a47c030d79d6729877d4c8403860e96",
"assets/assets/images/skills/mongodb-white.png": "f4c3534d8447548ba3387b051373e73d",
"assets/assets/images/skills/angular-white.png": "e53674c15269c8d13ef1277d6b157742",
"assets/assets/images/skills/javascript-white.png": "3086896a4f90c0520823c633a6e6bdf3",
"assets/assets/images/skills/python.png": "6f1f0ca909720417738853f7e2acaa2c",
"assets/assets/images/skills/mongodb-original.png": "913a5af3d5cf63b3dc3852b5de23bde5",
"assets/assets/images/skills/mysql-black.png": "daab4b48e8729c7e69e1d71fc1b35f46",
"assets/assets/images/skills/django-black.png": "c63659de859d5ab9d4678ebabe53a852",
"assets/assets/images/skills/nodejs-black.png": "5ba117db9e81e58391839eaec129549d",
"assets/assets/images/skills/flutter.png": "20d06e9c144294730c9c355b22e5feee",
"assets/assets/images/skills/angular-pink.png": "2ce496d29d780d1723abcb8ad9e1b33d",
"assets/assets/images/skills/angular.png": "c09a1a022e5df72ada77c19b97c415f5",
"assets/assets/images/skills/python-black.png": "4cb5b7b74fc33c431fe0c6040884e89d",
"assets/assets/images/skills/mongodb-pink.png": "5307dda8524cc683872212a7f044df7a",
"assets/assets/images/skills/flutter-pink.png": "2494941d40f927eafe0450f4ad9479ff",
"assets/assets/images/skills/javascript.png": "1199607421b268ef28f15c1b11e103f9",
"assets/assets/images/skills/django-pink.png": "9948c62d72c645d380d4e816673a5ebf",
"assets/assets/images/skills/html5-pink.png": "5685dcf336f254c9c85a0970ffb667f0",
"assets/assets/images/skills/javascript-pink.png": "1ed842f81357381e6822cd1903b50429",
"assets/assets/images/skills/angular-original.png": "6fb632dea49595a0058306eb5190f315",
"assets/assets/images/skills/mysql-pink.png": "3a9482482d00286897632c6ce6673611",
"assets/assets/images/skills/flutter-black.png": "97427922835612a2db065400943fcf0a",
"assets/assets/images/skills/css3-black.png": "e13fbd208cc9e0e8c7067e4ce33f61cf",
"assets/assets/images/skills/css3-pink.png": "b7b27e1ca658e6e68083849b4f9d984b",
"assets/assets/images/skills/nodejs-pink.png": "9c0eac01d05e1ef90d1710f9536c033a",
"assets/assets/images/skills/css3-original.png": "bc733319dc53939740596e02affb339c",
"assets/assets/images/skills/python-pink.png": "ef4264ec3bca8fc26659306352f5ca07",
"assets/assets/images/skills/html5-white.png": "5327713deeb5901d3236ae50c5c1c854",
"assets/assets/images/skills/mysql.png": "2d40bbe3739a738ec75129aa75f84b16",
"assets/assets/images/skills/django.png": "653e1681c1714470b4bc40ffd4d52924",
"assets/assets/images/skills/css3.png": "14200b8849833ef333d54e880fe7ed1a",
"assets/assets/images/skills/mongodb-black.png": "f83150761e625943ad33a9a0535c6ff0",
"assets/assets/images/skills/javascript-black.png": "01eca95ff88c6833b5470135d77e4ab4",
"assets/assets/images/skills/angular-black.png": "b317a4d789d58725d77ca7a7cfdb4d48",
"assets/assets/images/skills/mysql-white.png": "ad254ed8c5e0ce8700248ee6530420d3",
"assets/assets/images/skills/nodejs-white.png": "b00a614c70c839b24915d7b963ae82fb",
"assets/assets/images/skills/django-white.png": "f0dc38cf797d0d1a462b40e4a50022f4",
"assets/assets/images/skills/html5-original.png": "4778ef6d590564ef66c2229fa17bf6ee",
"assets/assets/images/skills/nodejs-original.png": "ef3dbcf4631c859e613f96db5f61ff24",
"assets/assets/images/skills/python-white.png": "5b902508ce138651a6d65ade07fb9200",
"assets/assets/images/skills/flutter-original.png": "61ddb3551bbd7c9e56c6a03b8414cdea",
"assets/assets/images/skills/python-original.png": "9ea1f48ab8f1b7e73c7c19d9c2554ab0",
"assets/assets/images/skills/javascript-original.png": "f055e674e02569f9c87b94d2da6769eb",
"assets/assets/images/skills/mysql-original.png": "07477c5cce3c12e77ac0d4c39db3418f",
"assets/assets/images/skills/mongodb.png": "6826dfca91e594b1eb2bf8bb9f33c894",
"assets/assets/images/skills/html5.png": "7d70d2c23e9b284d8fda1d5b6316b658",
"assets/assets/images/skills/nodejs.png": "f4803b2856dcd8aae1744acd16b3a41f",
"assets/assets/images/apps/bmi.png": "15c7677b142ac110504e43c5176833b1",
"assets/assets/images/mash.png": "cd470d3f13c75f841a7860032a95779f",
"assets/assets/images/bg.jpg": "78ff2b2467eda3e528c1e089427d319f",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
