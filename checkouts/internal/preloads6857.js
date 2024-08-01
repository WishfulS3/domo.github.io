
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.ru.89a4b3ad93544b3c0481.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5161.baseline.ru.7d406d0b69877cc451f4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8062.baseline.ru.de39fba886bb2a4cf67c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.baseline.ru.ad3524de84398e6e78af.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.ru.71a735abe33cb550485d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.baseline.ru.7ec3164fc01d10bbabc6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5413.baseline.ru.f0efebbde27c08a53dc0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.baseline.ru.4108502d9f2c1ca7f6c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2134.baseline.ru.aac18ef10857b8d334ce.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3064.baseline.ru.575aee15d293ec93db87.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9649.baseline.ru.904a53a63acd494558fd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5718.baseline.ru.a85af5ab1a1579ed4b4e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2714.baseline.ru.6c92e32eb1095b90ad4b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/668.baseline.ru.faccc50b100bbb772b29.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.ru.15efb32a07f6aa7c30cf.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/5161.baseline.ru.c876bb950df9ce6713b5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.ru.b63aa65e131937bbdbd3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.ru.97c35071151d204d0328.css"];
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
  