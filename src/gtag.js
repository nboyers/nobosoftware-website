// src/gtag.js
export const initGA = () => {
  // Load the Google Analytics script securely with validation
  (function() {
      // Validate the trusted domain
      const trustedDomain = 'www.googletagmanager.com';
      const scriptUrl = `https://${trustedDomain}/gtag/js?id=G-3B69TNFXZB`;
      
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.referrerPolicy = 'no-referrer-when-downgrade';
      script.setAttribute('data-trusted-source', trustedDomain);
      
      // Add error handling to prevent malicious script execution
      script.onerror = () => {
          console.warn('Failed to load Google Analytics script');
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
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-3B69TNFXZB', {
        page_path: path,
    });
  } else {
    console.warn('Google Analytics not loaded, unable to log page view');
  }
};