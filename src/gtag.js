// src/gtag.js
export const initGA = () => {
  // Load the Google Analytics script
  (function() {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-3B69TNFXZB`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
              window.dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-3B69TNFXZB');
      };
  })();
};

export const logPageView = (path) => {
  window.gtag('config', 'G-3B69TNFXZB', {
      page_path: path,
  });
};