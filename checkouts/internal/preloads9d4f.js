
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.a0094076aff99164d44d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5161.baseline.en.7d406d0b69877cc451f4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3000.baseline.en.68ea97573c9c6e93735f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.baseline.en.ad3524de84398e6e78af.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.2683e6e5abfc282b74e0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.baseline.en.7ec3164fc01d10bbabc6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5413.baseline.en.f0efebbde27c08a53dc0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.baseline.en.4108502d9f2c1ca7f6c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/85.baseline.en.c0037846c9eb290d2ef6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3228.baseline.en.268eca4530878d703b25.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9649.baseline.en.e5e717f77e3cf99d460f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5718.baseline.en.db4d9a754f141ed4726e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2714.baseline.en.8ea76cc39cfc1fa06ec3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/668.baseline.en.0354c1ce2e820fa55157.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.d86137d3ea88e5224294.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/5161.baseline.en.c876bb950df9ce6713b5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.b63aa65e131937bbdbd3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.en.97c35071151d204d0328.css"];
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
  