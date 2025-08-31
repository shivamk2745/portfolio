import { useEffect } from 'react';

const VisitorInfo = () => {
  useEffect(() => {
    const getVisitorInfo = async () => {
      try {
        // Fetch IP address
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const ipAddress = ipData.ip;

        // Get browser details
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const language = navigator.language;
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const availScreenWidth = window.screen.availWidth;
        const availScreenHeight = window.screen.availHeight;
        const colorDepth = window.screen.colorDepth;
        const pixelRatio = window.devicePixelRatio || 1;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const doNotTrack = navigator.doNotTrack;
        const cookieEnabled = navigator.cookieEnabled;
        const online = navigator.onLine;
        const referrer = document.referrer;
        const connectionType = navigator.connection ? navigator.connection.effectiveType : 'unknown';
        const localStorage = typeof Storage !== 'undefined' ? 'available' : 'unavailable';
        const sessionStorage = typeof sessionStorage !== 'undefined' ? 'available' : 'unavailable';

        // Get battery info if available
        let batteryLevel = 'unknown';
        let batteryCharging = 'unknown';
        if ('getBattery' in navigator) {
          try {
            const battery = await navigator.getBattery();
            batteryLevel = Math.round(battery.level * 100) + '%';
            batteryCharging = battery.charging;
          } catch (e) {
            // Battery API not supported or permission denied
          }
        }

        // Get WebGL info for device fingerprinting
        let webGLVendor = 'unknown';
        let webGLRenderer = 'unknown';
        try {
          const canvas = document.createElement('canvas');
          const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
          if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
              webGLVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
              webGLRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            }
          }
        } catch (e) {
          // WebGL not supported
        }

        // Get performance timing
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        const domReadyTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;

        const visitorData = {
          ipAddress,
          userAgent,
          platform,
          language,
          screenWidth,
          screenHeight,
          availScreenWidth,
          availScreenHeight,
          colorDepth,
          pixelRatio,
          timezone,
          doNotTrack,
          cookieEnabled,
          online,
          referrer,
          connectionType,
          localStorage,
          sessionStorage,
          batteryLevel,
          batteryCharging,
          webGLVendor,
          webGLRenderer,
          loadTime,
          domReadyTime,
          timestamp: new Date().toString(),
        };

        // Send data to backend
        const response = await fetch('http://localhost:3001/send-visitor-info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(visitorData),
        });

        if (!response.ok) {
          throw new Error('Failed to send visitor info');
        }

        console.log('Visitor info sent successfully');
      } catch (error) {
        // For debugging, but you might want to remove this in production
        console.error('Error sending visitor information:', error);
      }
    };

    getVisitorInfo();
  }, []);

  return null; // This component doesn't render anything
};

export default VisitorInfo;
