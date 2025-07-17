import { WifiOff } from 'lucide-react';
import { AnimatePresence, motion as Motion } from 'motion/react';
import { useEffect, useState } from 'react';
import useDarkMode from '../../../hooks/useDarkMode'; // 1. Import the hook

const OfflineIndicator = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const { isDarkMode } = useDarkMode(); // 2. Get the theme state

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOffline && (
        <Motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className='fixed bottom-4 left-1/2 -translate-x-1/2 z-50'
        >
          <div
            // 3. Apply conditional classes using isDarkMode
            className={`
              flex items-center gap-3 rounded-lg px-4 py-3 shadow-lg
              ${
                isDarkMode
                  ? 'bg-slate-200 text-slate-900'
                  : 'bg-slate-800 text-white'
              }
            `}
            role='alert'
          >
            <WifiOff className='h-5 w-5 flex-shrink-0' />
            <p className='text-sm font-medium'>
              Koneksi terputus. Anda sedang offline.
            </p>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfflineIndicator;
