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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4ab0d964e7b2a100690aab22e99d941d"
  },
  {
    "url": "assets/css/0.styles.5623a4ee.css",
    "revision": "88a42662f99c07aa7535e16d68d39c77"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.739a4000.js",
    "revision": "3d2d5e3daf4186cadacc4bba382a4e1e"
  },
  {
    "url": "assets/js/10.fb919f93.js",
    "revision": "51597a7f287109a4c829abff17278bbf"
  },
  {
    "url": "assets/js/11.52cf10e0.js",
    "revision": "f4538393d1d614ce205976df666b6f27"
  },
  {
    "url": "assets/js/12.ae115e72.js",
    "revision": "286d14664b37b6c045b001e4a9c38a88"
  },
  {
    "url": "assets/js/13.3cd37b15.js",
    "revision": "4eb3ff7fe3b03d750a7f24ec371d0f4d"
  },
  {
    "url": "assets/js/14.0467a0cb.js",
    "revision": "4f7992e3ce4556af3442b358f4a3b43d"
  },
  {
    "url": "assets/js/15.1ffe0529.js",
    "revision": "bad78b69dfad519e08e4d475741fe7b6"
  },
  {
    "url": "assets/js/16.fb40166e.js",
    "revision": "55a30ba4f461675c372034b6f00a79a9"
  },
  {
    "url": "assets/js/17.24c17daa.js",
    "revision": "87cb663af29f796b79b01413c25136c4"
  },
  {
    "url": "assets/js/18.e778f005.js",
    "revision": "a5dabee723dcffba517f37fad466eebb"
  },
  {
    "url": "assets/js/19.caf246d2.js",
    "revision": "99874c36ae0ac4a0b25b64fca385fa40"
  },
  {
    "url": "assets/js/2.d6f3f833.js",
    "revision": "8876a614819320c0f4900a29a521b8c3"
  },
  {
    "url": "assets/js/20.0156e043.js",
    "revision": "acfc0da18fe6cde498ea7cb7a44031cd"
  },
  {
    "url": "assets/js/21.99ce1862.js",
    "revision": "5a7d4136602b21ec268f78f578881e94"
  },
  {
    "url": "assets/js/22.0b868ac0.js",
    "revision": "af28750ba184966ab9c2ff6164f196f8"
  },
  {
    "url": "assets/js/23.b70fef75.js",
    "revision": "68513c8d6ce5f8bdc469d4a5c988bdbd"
  },
  {
    "url": "assets/js/24.f95cd407.js",
    "revision": "86298f8b08917ca7abe392f7da633e05"
  },
  {
    "url": "assets/js/25.63077962.js",
    "revision": "3fbb1d88b3474c47d4f1a7bc521e589a"
  },
  {
    "url": "assets/js/26.c3c2d762.js",
    "revision": "0213803c42ee035577343a499939858d"
  },
  {
    "url": "assets/js/27.3fa2cea1.js",
    "revision": "aee03b76740ec6a27ca59efac7871159"
  },
  {
    "url": "assets/js/28.2734afc9.js",
    "revision": "c37838496a288cb55d9317ab27614940"
  },
  {
    "url": "assets/js/29.45c58dee.js",
    "revision": "399ef4d3044c3b81091d5e386376354a"
  },
  {
    "url": "assets/js/3.e590bb49.js",
    "revision": "45524cf88c3df7507edac7e0e9cc51f5"
  },
  {
    "url": "assets/js/30.baf8fa5b.js",
    "revision": "7e0193ae21a3f62c96b49e4c2553df22"
  },
  {
    "url": "assets/js/31.a00252dc.js",
    "revision": "b37cd4778f57542324af4c761fd421c8"
  },
  {
    "url": "assets/js/32.3c5395a2.js",
    "revision": "731ee7d2a2e1f15f5d7315ff3122c49d"
  },
  {
    "url": "assets/js/33.e16f764f.js",
    "revision": "fabc9e203392c9af8d541b63f559a7ef"
  },
  {
    "url": "assets/js/34.30a0a3b1.js",
    "revision": "7d7e9097c4c02236e4e3463faa745c42"
  },
  {
    "url": "assets/js/35.319cae51.js",
    "revision": "87a4ee911be25e63d83a7b1ca51b7dcb"
  },
  {
    "url": "assets/js/36.f106f69d.js",
    "revision": "352b9d4dc9e322429965c9d3cf3dc3e3"
  },
  {
    "url": "assets/js/37.ac25c944.js",
    "revision": "9818e2d99a2733d8a5664142abba0ab4"
  },
  {
    "url": "assets/js/38.4c7593c5.js",
    "revision": "6ad203536cfb717a45a3e7a706e973f5"
  },
  {
    "url": "assets/js/39.e51b23e3.js",
    "revision": "60767e5cb3c43337b278649ff4ebf0ff"
  },
  {
    "url": "assets/js/4.3f9d2a85.js",
    "revision": "0e8ebdb4235c69b1926fbe379c615217"
  },
  {
    "url": "assets/js/40.cf5f5731.js",
    "revision": "59fd87e2c28de9374b815c4416285863"
  },
  {
    "url": "assets/js/41.c876baff.js",
    "revision": "99e7d76e5e70d730bb852e39416cf62c"
  },
  {
    "url": "assets/js/42.03413c6b.js",
    "revision": "7fbff33cc90906cdc2ced33b78c6faa0"
  },
  {
    "url": "assets/js/43.84ea0430.js",
    "revision": "d93fc5703f5b15b4ba88a96fb4434887"
  },
  {
    "url": "assets/js/44.8ef171e2.js",
    "revision": "0f9a06a46b428b8d5463c54f44a32c7e"
  },
  {
    "url": "assets/js/45.91bf4574.js",
    "revision": "c824771690dc684f745c5a08fc2bdc40"
  },
  {
    "url": "assets/js/46.8a012360.js",
    "revision": "b2d45ad23eb91dc87c96b7c138d0158a"
  },
  {
    "url": "assets/js/47.7d1144af.js",
    "revision": "3cf4576b12a83743b2da9500adb10787"
  },
  {
    "url": "assets/js/48.da626771.js",
    "revision": "df2700c1c6b4314f3a25196756fd2701"
  },
  {
    "url": "assets/js/49.fc2684cb.js",
    "revision": "93d2fc8de7ec40bcf2325bdc91b87716"
  },
  {
    "url": "assets/js/5.c7cb9d27.js",
    "revision": "6946fde7b533853614c9ec664b168044"
  },
  {
    "url": "assets/js/50.13ac3a08.js",
    "revision": "70dfe0ffd802156b90fb0dad65180091"
  },
  {
    "url": "assets/js/51.675cc117.js",
    "revision": "079ea0625f529b36bdbd9b60d3896c6c"
  },
  {
    "url": "assets/js/52.fd04e7e6.js",
    "revision": "7ae2f5b05794c2dbd479bef99f9a169c"
  },
  {
    "url": "assets/js/53.abc4fe68.js",
    "revision": "d222c3f4c290b98a3a4f2c9a43f4da23"
  },
  {
    "url": "assets/js/54.5629a31d.js",
    "revision": "bdc1daa533a4a62fa5b32495b60304c2"
  },
  {
    "url": "assets/js/55.97ae11ad.js",
    "revision": "28fc5a5ae93bc0d05a0b972e31694a4f"
  },
  {
    "url": "assets/js/56.6253d710.js",
    "revision": "1e0a48df00cc6b6f433f7c0afa1f9f76"
  },
  {
    "url": "assets/js/57.71eb39b5.js",
    "revision": "4f156f1da5e7c559972c89d66faaeee1"
  },
  {
    "url": "assets/js/58.980687dd.js",
    "revision": "14c780f4425920bf8f5afac98b09155b"
  },
  {
    "url": "assets/js/59.df5d027b.js",
    "revision": "b5b7a0ac43c0fff4de69559a7a5918c0"
  },
  {
    "url": "assets/js/6.0be4e157.js",
    "revision": "40e71cdc62c687fddbd23b61a8b52437"
  },
  {
    "url": "assets/js/60.cc2bf2b3.js",
    "revision": "25a9d42944b1eada74285c21d1ff8743"
  },
  {
    "url": "assets/js/61.86251f78.js",
    "revision": "f37b8e7a9e551468be03cc19ed2c1900"
  },
  {
    "url": "assets/js/62.21d2fa2c.js",
    "revision": "3a7ec8f8cb361fe3a68c1641e796443d"
  },
  {
    "url": "assets/js/63.aac0f1fa.js",
    "revision": "6e5395621481adac18b982102fcb9917"
  },
  {
    "url": "assets/js/64.f9f1fe8f.js",
    "revision": "bc03c59b465d48a642c9a5d3c9864201"
  },
  {
    "url": "assets/js/65.8aa0fd8f.js",
    "revision": "645f69ed33f8378dfb718c46a40edb4b"
  },
  {
    "url": "assets/js/66.caca2551.js",
    "revision": "047ba2553dac6790fe5ddf13da7c62e1"
  },
  {
    "url": "assets/js/67.0e6820d5.js",
    "revision": "46df62a63a6cf44b3a498888aa10548e"
  },
  {
    "url": "assets/js/68.0b60d082.js",
    "revision": "9a207e694ae5aed9897a8f62adaa4ce2"
  },
  {
    "url": "assets/js/7.94bf6868.js",
    "revision": "9050b93df1abc13e95170de10d31a3f3"
  },
  {
    "url": "assets/js/app.633e075c.js",
    "revision": "7ef529f6d0662bab8e6a15bc54111e8a"
  },
  {
    "url": "assets/js/vendors~docsearch.d3844009.js",
    "revision": "35736f6febdf8d4b98599806c297b51c"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "942f3556bafca9e561705787e81e4e05"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "febd9e6fde9a12caa70a3b44c021a599"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "b8d5c4a3c4de00a6456e19c7edfc7536"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "ab30acd390333b2b522dffdd2acc8ba0"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "2dac116de9d8c87b7e497fe92713b42d"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "518ef6cb38a3fd272f1d300c9003cce8"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "9eeb00318383dc78b51f171444d19386"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "b113dbea5b876e3040b438cd243dbe9f"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "6da3f9821c9bf6f562adc8bfe1b6fb20"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "b59d79928c3802eb25b20fafd07d2bfe"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "4785d208119106ec73d62a1ba97ef97a"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "6d566cf52f5ce4fec41e605fa80f89ad"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "b1260c4830e6b32de1f3acf4fd69d5ec"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "bbfb07728a65965b0dcacbbd2a47e1eb"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "74ead6e33031c6830980a6a9ca1672be"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "5b1db0bf51c7f22bd63475b0d132456a"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "5d8006791f483a2dbbae0521c8d0a9b6"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "9488bfa64021357cc6b9b69e135f17de"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "48612618bcd5dcbc1fd8290600a42964"
  },
  {
    "url": "base/practice/test.html",
    "revision": "b2f9e6276aa81c73d089c5e3e149a0cb"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "13979e956a40e667b071cf0ef6297287"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "d765181e5970e840df88a5226642aa1c"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "84c7a9760294c8a5646d516cb6f3f255"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "d472b905fc4f5eca2483ec049bad8572"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "9d650351925e362eb6dd2807295e1e6d"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "6f388e3fce646a3504a687f367edd3ca"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "575983a5f8e46b014f7becf38477c0ea"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "d3885db1102bd77cbdca45a213ab0c90"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "0a79b85dbdd7d73b24123015a737f2e7"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "ef2d159e184bce5f3e1e696477a6e4b7"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "9ab27b82be9568417fb3a2d00c735c47"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "26b6b0517a1ee464f6ba0886438cee6b"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "cabea9e28eb591aa9950ca16aeecdfd8"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "938a82d06ce587fba06d7a8f4deb1909"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "8ce409a1c4b54a596c91f88bcd2dda6c"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "7bce2207bc3f47feaff37593eee2e418"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "9cbf4306c2e77af5bca3b688f8cf42b6"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "d02b5c5c45d68990bde6f0ba62075a01"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "eee100b3a76dd0e26fa0f59e264e99a8"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "78cee8c382c2b3b455a2da7c47a36e2b"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "69c3272aa404e136aa5be0d6edfeb3ac"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "2d3a70e7d7c4f6ca0366b6c2ab31958f"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "fda203394abf71ef2fd14f5abc496792"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "187b21b665de532cbe5ec1a0aee083cc"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "dcd7a22f7d67d568a0b9d1432bb0b126"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
