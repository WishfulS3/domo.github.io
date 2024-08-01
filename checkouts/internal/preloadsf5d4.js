
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.es.25b0b0ab76aef6af12d0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5161.baseline.es.7d406d0b69877cc451f4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9137.baseline.es.05dec1e6c4ddc8ece80c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.baseline.es.ad3524de84398e6e78af.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.es.8fdc307d56b846a506d2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.baseline.es.7ec3164fc01d10bbabc6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5413.baseline.es.f0efebbde27c08a53dc0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.baseline.es.4108502d9f2c1ca7f6c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/85.baseline.es.5d666ba0b2041b34ab21.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3228.baseline.es.44fbc95e642b95a72d4c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9649.baseline.es.c008f0d0e114baebc604.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5718.baseline.es.63cd02593efcbc8a3b21.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2714.baseline.es.cc4d95abb80ef8641002.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/668.baseline.es.0163ac51ada106fedeca.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.es.0ec432276deff5bb6f8b.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/5161.baseline.es.c876bb950df9ce6713b5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.es.b63aa65e131937bbdbd3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.es.97c35071151d204d0328.css"];
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
  