
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.ja.4a4dc61da687347fa0ff.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5161.baseline.ja.7d406d0b69877cc451f4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1314.baseline.ja.2c6d313cfd37d1649723.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.baseline.ja.ad3524de84398e6e78af.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.ja.9652174c34dc81a2f38c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.baseline.ja.7ec3164fc01d10bbabc6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5413.baseline.ja.f0efebbde27c08a53dc0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.baseline.ja.4108502d9f2c1ca7f6c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/85.baseline.ja.58f23418130c3b0e9c36.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3228.baseline.ja.cc2b5bc9e4a150f97296.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9649.baseline.ja.dd6692129b88818aa9f7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5718.baseline.ja.576201aca6414422f265.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2714.baseline.ja.7a0b06a39d0a5d3ed745.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/668.baseline.ja.946ecf63ad75734a0238.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.ja.ed760fad176e9b8ceca2.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/5161.baseline.ja.c876bb950df9ce6713b5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.ja.b63aa65e131937bbdbd3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.ja.97c35071151d204d0328.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0728/3736/6095/files/xlube_logo_2023_ab77163b-474b-45b9-a9b8-b9583a1c81d6_x320.png?v=1683088659"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  