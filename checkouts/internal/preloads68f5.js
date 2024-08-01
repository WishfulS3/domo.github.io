
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.ko.3f63087d16edecc478cb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5161.baseline.ko.7d406d0b69877cc451f4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9327.baseline.ko.8ec50c05d4f49a8e4398.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.baseline.ko.ad3524de84398e6e78af.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.ko.39a38e843c0e1a60c648.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.baseline.ko.7ec3164fc01d10bbabc6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5413.baseline.ko.f0efebbde27c08a53dc0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.baseline.ko.4108502d9f2c1ca7f6c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/85.baseline.ko.c86c062815afa78ff26a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3228.baseline.ko.a0e26cdb8e7e275edbe3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9649.baseline.ko.6cf90efad5fc2a4729a7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5718.baseline.ko.3d6886c992700f223cdf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2714.baseline.ko.761da52e0162411630a8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/668.baseline.ko.9d5c1bf47b9c20acd6e9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.ko.61ad463e01958c03d062.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/5161.baseline.ko.c876bb950df9ce6713b5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.ko.b63aa65e131937bbdbd3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.ko.97c35071151d204d0328.css"];
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
  