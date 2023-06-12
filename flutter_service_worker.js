'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "215426c0b463ea71b1307916157672b2",
"assets/assets/fonts/lato-black-webfont.woff": "19a618e58669d443a5187316e1152d0c",
"assets/assets/fonts/lato-black-webfont.woff2": "683d98538523d533bc6297599d985500",
"assets/assets/fonts/lato-blackitalic-webfont.woff": "cc57797da555473328eecaafc7f193fc",
"assets/assets/fonts/lato-blackitalic-webfont.woff2": "5565596c0dfc00eeb94287899c72c3f5",
"assets/assets/fonts/lato-bold-webfont.woff": "1fd535fc85a120f1f2c60ef6697d7477",
"assets/assets/fonts/lato-bold-webfont.woff2": "4638298315fdd55074ada6b69ac65fa7",
"assets/assets/fonts/lato-bolditalic-webfont.woff": "d634508f473a6ba8509459a7fc77a827",
"assets/assets/fonts/lato-bolditalic-webfont.woff2": "8470a7103672940332d7481ba23f559a",
"assets/assets/fonts/lato-italic-webfont.woff": "5945311dd32f06c8d0faf8a4f8d68c11",
"assets/assets/fonts/lato-italic-webfont.woff2": "1d968532af0a0919d5832724ce6dfe71",
"assets/assets/fonts/lato-light-webfont.woff": "108836f125c0baf4de8982977cd17483",
"assets/assets/fonts/lato-light-webfont.woff2": "f590475b476e984982eef2d7ff2854a1",
"assets/assets/fonts/lato-lightitalic-webfont.woff": "91f78af111e2a8d921bd3c1118dcc499",
"assets/assets/fonts/lato-lightitalic-webfont.woff2": "7df0f67af225225daa17e766e28cf9f9",
"assets/assets/fonts/lato-regular-webfont.woff": "363cdbe4f8544eb6ac6e6d299afe6da7",
"assets/assets/fonts/lato-regular-webfont.woff2": "c67488f303e5ba42f785f77b65023f5a",
"assets/assets/fonts/lato-thin-webfont.woff": "9f00af2b8c066708b92a00ca118dcbdd",
"assets/assets/fonts/lato-thin-webfont.woff2": "46a1e5c682db4e4bce48305cbe1bb058",
"assets/assets/fonts/lato-thinitalic-webfont.woff": "051c366ae1b32fab08814696e7d8e81b",
"assets/assets/fonts/lato-thinitalic-webfont.woff2": "02bb4ddd1f961b84891ee189164b4de4",
"assets/assets/img/404_illustration.png": "49e45260261e1537cabf0fe79352e360",
"assets/assets/img/404_illustration.webp": "a2fc4c432591700f08086de208629b38",
"assets/assets/img/about/about-bg.png": "ee0820d439de86ef4b70678c0d610f5a",
"assets/assets/img/about/about-img.png": "b3c6b92c11b53b911d938dda606cdf3a",
"assets/assets/img/about-img.png": "8af869ff6062a4014f74882c9e0351a0",
"assets/assets/img/app_screen.png": "61c0c55a6c8bb065ca61fa010d4a38b6",
"assets/assets/img/arrow-up.svg": "cf931412d4091d9dc464a8265cceecd5",
"assets/assets/img/arrow.png": "f31d2f57b7bd337cbe721aee69909e72",
"assets/assets/img/author.png": "06ba0cf2790cd6829979e31abdc8fe50",
"assets/assets/img/bird.png": "50afee2eb91d9b4cf85b16b70451aaac",
"assets/assets/img/black-arrow.png": "d98a7a977ad68b4b28237895c924caf8",
"assets/assets/img/blog-img1.png": "048041069c72d258d2e3c04a0b7daccb",
"assets/assets/img/blog-img2.png": "dc1c75bca43a2f38052196692fa9c0f7",
"assets/assets/img/blog-img3.png": "7055bb41753e3f309694354a57f08e07",
"assets/assets/img/btn-arrow.svg": "2e27afcf6f08de69cd6bbde14dd7b719",
"assets/assets/img/client/image-1.png": "1f5f99bee7755bd84bfb9a7bb12cb359",
"assets/assets/img/client/image-2.png": "03e4474a42b3b7d4cc2178b02e5220e1",
"assets/assets/img/client/testimonial-1.jpg": "a80a325c68058506f08f3c402d8802c6",
"assets/assets/img/client/testimonial-2.jpg": "a80a325c68058506f08f3c402d8802c6",
"assets/assets/img/client/testimonial-3.jpg": "a80a325c68058506f08f3c402d8802c6",
"assets/assets/img/client/testimonial-4.jpg": "a80a325c68058506f08f3c402d8802c6",
"assets/assets/img/client/testimonial-5.jpg": "a80a325c68058506f08f3c402d8802c6",
"assets/assets/img/client/testimonial-6.jpg": "4f7234de4c335572e24ca564813bbb19",
"assets/assets/img/client/testimonial-7.jpg": "a80a325c68058506f08f3c402d8802c6",
"assets/assets/img/client/testimonial-8.jpg": "a80a325c68058506f08f3c402d8802c6",
"assets/assets/img/client/testimonial-9.jpg": "a80a325c68058506f08f3c402d8802c6",
"assets/assets/img/company/company-img-1.png": "d0854edcf55e634edf67a7da78db4b73",
"assets/assets/img/company/company-img-2.png": "663877d5184ee4f7eafc2b2f018ffb8e",
"assets/assets/img/company/company-img-3.png": "99ecd521321a308eccbb684d5d8d2b90",
"assets/assets/img/company/company-img-4.png": "663877d5184ee4f7eafc2b2f018ffb8e",
"assets/assets/img/company/company-img-5.png": "d0854edcf55e634edf67a7da78db4b73",
"assets/assets/img/company/company-img-6.png": "995058830673378e7da129e1ffc17643",
"assets/assets/img/contact/contact-bg-yellow.png": "f3965e08c889944615857427e90da294",
"assets/assets/img/email-hover.png": "22b467b3649946aa3574b8f8bd4b8bc6",
"assets/assets/img/email.png": "420a2cf6bd2c61172ecbeaabc3704bef",
"assets/assets/img/favicon.png": "9fb617265b2f60e99356639eaf82e155",
"assets/assets/img/footer/facebook-hover.png": "af0d690cbd8de44a7d300af8589b94d6",
"assets/assets/img/footer/facebook.png": "da089b87c92212340297cb396648e44e",
"assets/assets/img/footer/footer-img-1.png": "cb0bf32d1ba183fe7b945aab49d84eb6",
"assets/assets/img/footer/footer-img-2.png": "93291df96569536552851673ffdd9eac",
"assets/assets/img/footer/footer-img-3.png": "60af5954be808e6b81a904a859339968",
"assets/assets/img/footer/instagram-hover.png": "d28c8984b1c957b50ad48d2f28e9275a",
"assets/assets/img/footer/instagram.png": "9d4c6de843709fc6280c5baccb6b5117",
"assets/assets/img/footer/location-pin.svg": "9e48bba787faba3a1a42488363dbf4b5",
"assets/assets/img/galerie_1.png": "cd73a2e3b97b60ff53e4f0bba2b653d9",
"assets/assets/img/galerie_2.png": "8eb3c97c5b2079a7fb9d713ecd39e486",
"assets/assets/img/galerie_3.png": "46267a26562e6c7d0eb5a28ecc2f2005",
"assets/assets/img/galerie_4.png": "06ccdbc0d8e529f41eb53dab1a635b57",
"assets/assets/img/galerie_5.png": "9b556a44786318b6e94a7cbfe67d41be",
"assets/assets/img/galerie_6.png": "5158c75cd690cde53d512eb8556a0a42",
"assets/assets/img/galerie_7.png": "a1bb614a3f653fee84c618726e7e5c75",
"assets/assets/img/galerie_8.png": "e650b87d13dadf33249889edecc81652",
"assets/assets/img/galerie_9.png": "f91b6cdc2691d4c731a7c3217b98299c",
"assets/assets/img/hero/hero-banner.png": "86d7b664e340702e09710e1cd4330490",
"assets/assets/img/img-1.png": "666a4275861a5cd5e0e7a9424f08d3c0",
"assets/assets/img/img_avatar.png": "a5e81f19cf2c587876fd1bb08ae0249f",
"assets/assets/img/insight/insight-img-1.png": "6ee28786ea2d87f7e8f21ac366b35b71",
"assets/assets/img/insight/insight-img-2.png": "521883434252d3250295c73270e23f8a",
"assets/assets/img/insight/insight-img-3.png": "44cf8a5d4ed86d2b2bcd2bf3cbe12180",
"assets/assets/img/kid.png": "9b1f7c91b49b9cc2f20ef24be489be99",
"assets/assets/img/location-pin-hover.png": "acf5b236a3251516f201a625cd0f2879",
"assets/assets/img/location-pin.png": "d7326b19cd210e02d85b425976771337",
"assets/assets/img/logo.png": "b7ca5f41dbcc5c62abe2a277844aa930",
"assets/assets/img/phone-call-hover.png": "67dbccd4f451799fb8725bd18b8eb2ca",
"assets/assets/img/phone-call.png": "578c392419e3c209e4f428ba1333bd12",
"assets/assets/img/projects/aaple.png": "b351938ea7da2d1112515b753aa91db3",
"assets/assets/img/projects/android.png": "42d6a4e190d856cdd0f85ba3936ace62",
"assets/assets/img/projects/laptop.png": "821a2e242ee14c95ecb93ef46f5d051f",
"assets/assets/img/projects/mobile-1.png": "0f2e523069b5cadc0a65d8d116707b1c",
"assets/assets/img/projects/mobile-2.png": "2e5326e4ade97b96c97ce11dec677035",
"assets/assets/img/projects/mobile.png": "be9a2d9b3bc120ebc87d3b4902804cc3",
"assets/assets/img/projects/Projects.png": "8d66ac9c5a71033ee696857fbd8f5f57",
"assets/assets/img/sub-hero.png": "5529f12715b4710b18351794cd39cabe",
"assets/assets/img/testimonial/founder-1.png": "b2cc0d93eb9a181018e9bc5952c9c233",
"assets/assets/img/testimonial/founder-2.png": "98b092cf25a580cf47c026119fb8a144",
"assets/assets/img/testimonial/testimonial-1.jpg": "711da6c02dd9d39d33c4243cdb787af6",
"assets/assets/img/testimonial/testimonial-2.jpg": "8bf31a275fa547c448aac84ed5120377",
"assets/assets/img/testimonial/testimonial-3.jpg": "12b91ea9ddf340c1bf8df8b627cf78a6",
"assets/assets/img/testimonial/testimonial-4.jpg": "4bf9accd7bbe18ed2ff699f1040db537",
"assets/assets/img/testimonial/testimonial-5.jpg": "c28dbadff8caea0b670c4a1e54f851dd",
"assets/assets/img/testimonial/testimonial-6.jpg": "93d186fa2b41537a9ad39bbed823cfb7",
"assets/assets/img/testimonial/testimonial-7.jpg": "cd6dc1026b34f181f3a6a75e464e417d",
"assets/assets/img/testimonial/testimonial-8.jpg": "dadfac9fabd59f28a3e66646941d9911",
"assets/FontManifest.json": "352db99f6c32e15fe25fd0ca17d19f9c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "84788e2afee17b45f8f70544b9ddffb6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "6e0fcf177dd5389a269385255c612d1e",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "a58b38763109be2ef903a90d9d8c6e50",
"icons/Icon-512.png": "49318591b48dde5d30a1603afe7f0a1c",
"icons/Icon-maskable-192.png": "a58b38763109be2ef903a90d9d8c6e50",
"icons/Icon-maskable-512.png": "49318591b48dde5d30a1603afe7f0a1c",
"index.html": "fe3214ab93f714dcf682bdcda6c0488e",
"/": "fe3214ab93f714dcf682bdcda6c0488e",
"main.dart.js": "187a82cade3bf465c7eb75110eff64f0",
"manifest.json": "7abecba76f6977e8c4b833e670bdfe98",
"version.json": "6c0f85419d05b7a87e2fc1ec814d22d7"
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
