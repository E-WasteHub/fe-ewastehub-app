import { AnimatePresence, motion as Motion } from 'motion/react';
import { useEffect, useState } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useDarkMode();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={scrollToTop}
          className={`fixed right-4 z-[60] p-3 rounded-full shadow-md transition-transform duration-150 hover:scale-110 active:scale-95
            bottom-24 md:bottom-6
            ${
              isDarkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white'
            }`}
          aria-label='Scroll to top'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 12l7-7 7 7M12 5v14'
            />
          </svg>
        </Motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
