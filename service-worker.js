if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/android-chrome-144x144.png",revision:"86055cca44c72c370cd77624fa73acc1"},{url:"assets/android-chrome-192x192.png",revision:"64c09eeef911c5a78320b43929a41742"},{url:"assets/android-chrome-256x256.png",revision:"272e92929023611bcfdd0c46749e615b"},{url:"assets/android-chrome-36x36.png",revision:"aa7bc2647426e56022eaaf6d7b137374"},{url:"assets/android-chrome-384x384.png",revision:"dcf5f1dcbf49baded0f14adf0d3e77f8"},{url:"assets/android-chrome-48x48.png",revision:"a57cac23d01cd878c6f6c227910d4e8b"},{url:"assets/android-chrome-512x512.png",revision:"1229ec5822dbdd34e4ed45727390b7c8"},{url:"assets/android-chrome-72x72.png",revision:"afb4b3c4515858743f0114758bc42643"},{url:"assets/android-chrome-96x96.png",revision:"826e7bf1c3063a0d685184e83b1dabcd"},{url:"assets/apple-touch-icon-1024x1024.png",revision:"35c0346ae75dd32d247df657683b121c"},{url:"assets/apple-touch-icon-114x114.png",revision:"68d9b799453e60b19b8af4a0ae7047a8"},{url:"assets/apple-touch-icon-120x120.png",revision:"10e9c654971a3dbfd2e04d2ed87fb1b7"},{url:"assets/apple-touch-icon-144x144.png",revision:"1823ad6d96b1300426059229c0280b3c"},{url:"assets/apple-touch-icon-152x152.png",revision:"8ac698cd6cbb7ecd97bc4636302c2cf5"},{url:"assets/apple-touch-icon-167x167.png",revision:"87dda370ce43ea5b9a8907da56ed4b1b"},{url:"assets/apple-touch-icon-180x180.png",revision:"11a7213c3c57a40bcb0b38df775f6d87"},{url:"assets/apple-touch-icon-57x57.png",revision:"065790641ab1cb6021492f17a53caa01"},{url:"assets/apple-touch-icon-60x60.png",revision:"eefd073ba9d7f6b9b3feefe05d68defa"},{url:"assets/apple-touch-icon-72x72.png",revision:"8f45560f8b52b8836fdb7ee327e37f17"},{url:"assets/apple-touch-icon-76x76.png",revision:"e55974174cbbf2f2a6aafc8094655f02"},{url:"assets/apple-touch-icon-precomposed.png",revision:"11a7213c3c57a40bcb0b38df775f6d87"},{url:"assets/apple-touch-icon.png",revision:"11a7213c3c57a40bcb0b38df775f6d87"},{url:"assets/apple-touch-startup-image-1125x2436.png",revision:"c8acd6b135744428e81b9419094b8e02"},{url:"assets/apple-touch-startup-image-1136x640.png",revision:"6fe750a18006f202fb3508cd87f6d3ce"},{url:"assets/apple-touch-startup-image-1242x2208.png",revision:"2cc6ad4b3d092d9ec3e0d365d9622898"},{url:"assets/apple-touch-startup-image-1242x2688.png",revision:"ac7704b3b61feb6a66d73a652098b439"},{url:"assets/apple-touch-startup-image-1334x750.png",revision:"f60853134d967be0f8a31dd711b26115"},{url:"assets/apple-touch-startup-image-1536x2048.png",revision:"39e86bf869e733187c8482757c19215d"},{url:"assets/apple-touch-startup-image-1620x2160.png",revision:"8cb9f6b4d135ce2d9462c02aeee01869"},{url:"assets/apple-touch-startup-image-1668x2224.png",revision:"751a9186efeb2672b7520de0e9a0703c"},{url:"assets/apple-touch-startup-image-1668x2388.png",revision:"e8324e5283d486d54ef0aa65e9cb7aa9"},{url:"assets/apple-touch-startup-image-1792x828.png",revision:"d0334394a1573aa349ee7f8eea685488"},{url:"assets/apple-touch-startup-image-2048x1536.png",revision:"4c5a4041b62fd7109d59fcaf20e595a9"},{url:"assets/apple-touch-startup-image-2048x2732.png",revision:"57902e9219d01c69e5d9401b003a3474"},{url:"assets/apple-touch-startup-image-2160x1620.png",revision:"715e7e06a36c0a4b9f5afd002cafe8db"},{url:"assets/apple-touch-startup-image-2208x1242.png",revision:"263ca23344d003f67d920d9ef0288bd1"},{url:"assets/apple-touch-startup-image-2224x1668.png",revision:"675601108c4d661e59d1f33940197b5b"},{url:"assets/apple-touch-startup-image-2388x1668.png",revision:"3141cc27cb8deea583b4520eed76ff8e"},{url:"assets/apple-touch-startup-image-2436x1125.png",revision:"d5fd0a1009772b7ec5b31ff92af2ebc1"},{url:"assets/apple-touch-startup-image-2688x1242.png",revision:"eaf903f03c554aa4afe9624fa43f1190"},{url:"assets/apple-touch-startup-image-2732x2048.png",revision:"89e454a9581831e2563e06288549bc71"},{url:"assets/apple-touch-startup-image-640x1136.png",revision:"d95d97b5dc1cca356f554d3423cdda4f"},{url:"assets/apple-touch-startup-image-750x1334.png",revision:"c5e84993fa382800cbfcab28947c0f92"},{url:"assets/apple-touch-startup-image-828x1792.png",revision:"640a51edff67bfa784974034630d2839"},{url:"assets/browserconfig.xml",revision:"6b9febff1eb49f1662476afc3e8c6d77"},{url:"assets/coast-228x228.png",revision:"d302babbe6ee12064ef5ece4892342ed"},{url:"assets/favicon-16x16.png",revision:"90b08389a0198124e0667d442af7bb36"},{url:"assets/favicon-32x32.png",revision:"3e2ebc5a31dffb7a0587696d87ad7e47"},{url:"assets/favicon-48x48.png",revision:"a57cac23d01cd878c6f6c227910d4e8b"},{url:"assets/favicon.ico",revision:"dd2c056da3d242a6c443d27fc23f24f4"},{url:"assets/firefox_app_128x128.png",revision:"48c9131b728e9d37c3dc69fdc500cba4"},{url:"assets/firefox_app_512x512.png",revision:"2067b0dec053ef12b7badd545309c5fc"},{url:"assets/firefox_app_60x60.png",revision:"3994987ae941265d2eca977881f242ee"},{url:"assets/manifest.json",revision:"7d1220a0a10cdb6a5c5e58206e17aec3"},{url:"assets/manifest.webapp",revision:"fe54f4c6d63f9bf4c46521ca53b5305d"},{url:"assets/mstile-144x144.png",revision:"86055cca44c72c370cd77624fa73acc1"},{url:"assets/mstile-150x150.png",revision:"c0103b3494db8bcbb984eb169cb6bc04"},{url:"assets/mstile-310x150.png",revision:"4044f6c9760bf28c8560218da94c0476"},{url:"assets/mstile-310x310.png",revision:"927e856452b5192d83e5fa94fd20ba2d"},{url:"assets/mstile-70x70.png",revision:"0119442bd1888cf7d1800ead02f5e358"},{url:"assets/yandex-browser-50x50.png",revision:"88efdb14404823d601b1d4fa6f32fed4"},{url:"assets/yandex-browser-manifest.json",revision:"0e7a588b6ca9c7143445dabee9353ddd"},{url:"bundle.js",revision:"3c891fb7579753c8fba13d2783447ebc"},{url:"bundle.js.LICENSE.txt",revision:"79b48cead726c73ed92b9e1aba590f22"},{url:"index.html",revision:"34af8a36dcb4b132e747b1bc367658e1"},{url:"style.css",revision:"593bde867c0dde5d2dbe30feba1583a4"}],{})}));
