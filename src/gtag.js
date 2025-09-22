// src/gtag.js
export const initGA = () => {
  // Load the Google Analytics script securely
  (function() {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-3B69TNFXZB`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.referrerPolicy = 'no-referrer-when-downgrade';
      
      // Add error handling to prevent malicious script execution
      script.onerror = () => {
          console.warn('Failed to load Google Analytics script');
          return;
      };
      
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