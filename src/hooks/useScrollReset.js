import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollReset = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force immediate scroll reset - multiple aggressive methods
    const instantScrollReset = () => {
      // Method 1: Standard window.scrollTo with instant behavior
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

      // Method 2: Direct DOM manipulation
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Method 3: Force viewport reset
      if (window.pageYOffset !== 0 || window.pageXOffset !== 0) {
        window.scrollTo(0, 0);
      }

      // Method 4: All scrollable containers to top
      const scrollableElements = document.querySelectorAll(
        '[data-scroll-container], .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll'
      );
      scrollableElements.forEach((element) => {
        element.scrollTop = 0;
        element.scrollLeft = 0;
      });
    };

    // Execute immediately - no delay
    instantScrollReset();

    // Force one more time to be sure (minimal delay)
    requestAnimationFrame(() => {
      instantScrollReset();
    });
  }, [pathname]);
};

export default useScrollReset;
