"use client";

import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    // Tawk.to configuration
    const Tawk_API: any = (window as any).Tawk_API || {};
    const Tawk_LoadStart = new Date();
    
    // Customize widget position to be above the availability badge
    // Availability badge is at bottom: 24px, height ~50px, so we position at 89px (24 + 50 + 15px gap)
    Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: 'br', // bottom-right
          xOffset: 24, // 24px from right (matching badge)
          yOffset: 89  // 89px from bottom (badge + 15px gap)
        },
        mobile: {
          position: 'br',
          xOffset: 24,
          yOffset: 89
        }
      }
    };
    
    // Load Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/698f2024cf39cf1c38c19a54/1jhbhb4gj";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    
    // Insert script into document
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }
    
    // Store in window
    (window as any).Tawk_API = Tawk_API;
    (window as any).Tawk_LoadStart = Tawk_LoadStart;
    
    // Additional CSS override to ensure proper positioning
    const style = document.createElement("style");
    style.innerHTML = `
      #tawk-bubble-container,
      .tawk-bubble-container {
        bottom: 89px !important;
        right: 24px !important;
      }
      #tawk-chat-container,
      .tawk-chat-container {
        bottom: 89px !important;
        right: 24px !important;
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function
    return () => {
      // Remove Tawk.to widget when component unmounts
      const tawkScript = document.querySelector('script[src*="tawk.to"]');
      if (tawkScript) {
        tawkScript.remove();
      }
      
      // Remove Tawk widget iframe
      const tawkWidget = document.getElementById("tawk-widget-container");
      if (tawkWidget) {
        tawkWidget.remove();
      }
      
      // Remove custom style
      const customStyle = document.querySelector('style[data-tawk-custom]');
      if (customStyle) {
        customStyle.remove();
      }
    };
  }, []);

  return null; // Tawk.to widget is injected via script
};

export default TawkToChat;
