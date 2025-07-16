import { AnimatePresence, motion as Motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useDarkMode from '../../../hooks/useDarkMode';
import ThemeSelector from '../ThemeSelector';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { isDarkMode } = useDarkMode();
  const location = useLocation();

  // Helper function to check if current path matches the link
  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { to: '/', label: 'Beranda', icon: '🏠' },
    { to: '/kategori', label: 'Kategori E-Waste', icon: '📱' },
    { to: '/edukasi', label: 'Edukasi', icon: '📚' },
    { to: '/manfaat', label: 'Manfaat', icon: '🌱' },
    { to: '/panduan-aplikasi', label: 'Panduan Aplikasi', icon: '📖' },
    { to: '/faq', label: 'FAQ', icon: '❓' },
  ];

  return (
    <div className='lg:hidden' ref={menuRef}>
      {/* Menu Toggle Button */}
      <Motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
        className={`flex items-center justify-center w-10 h-10 transition-colors ${
          isDarkMode
            ? 'text-slate-300 hover:text-white'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        aria-label='Toggle mobile menu'
      >
        <Motion.div
          animate={isOpen ? 'open' : 'closed'}
          className='flex flex-col items-center justify-center w-6 h-6'
        >
          <Motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 },
            }}
            className='w-6 h-0.5 bg-current transform transition-all origin-center'
          />
          <Motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className='w-6 h-0.5 bg-current transform transition-all origin-center mt-1'
          />
          <Motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 },
            }}
            className='w-6 h-0.5 bg-current transform transition-all origin-center mt-1'
          />
        </Motion.div>
      </Motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-40 bg-black/50'
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] shadow-xl z-50 overflow-y-auto ${
              isDarkMode ? 'bg-slate-900' : 'bg-white'
            }`}
          >
            {/* Menu Header */}
            <div
              className={`flex items-center justify-between p-4 border-b ${
                isDarkMode ? 'border-slate-700' : 'border-slate-200'
              }`}
            >
              <div className='flex items-center'>
                <img
                  src='/src/assets/img/ewasteLight.png'
                  alt='E-wasteHub'
                  className='w-8 h-8 mr-2'
                />
                <span className='text-lg font-bold text-green-600'>
                  E-wasteHub
                </span>
              </div>
              <button
                onClick={closeMenu}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode
                    ? 'text-slate-400 hover:text-slate-200'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className='p-4'>
              <nav className='space-y-2'>
                {navItems.map((item, index) => (
                  <Motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      to={item.to}
                      onClick={closeMenu}
                      className={`relative flex items-center px-4 py-3 rounded-lg transition-colors ${
                        isActiveLink(item.to)
                          ? isDarkMode
                            ? 'bg-green-900/30 text-green-400 border-l-4 border-green-400'
                            : 'bg-green-50 text-green-600 border-l-4 border-green-600'
                          : isDarkMode
                          ? 'text-slate-200 hover:bg-green-900/20 hover:text-green-400'
                          : 'text-slate-700 hover:bg-green-50 hover:text-green-600'
                      }`}
                    >
                      <span className='mr-3 text-xl'>{item.icon}</span>
                      <span className='font-medium'>{item.label}</span>
                      {isActiveLink(item.to) && (
                        <span className='w-2 h-2 ml-auto bg-green-500 rounded-full'></span>
                      )}
                    </Link>
                  </Motion.div>
                ))}
              </nav>

              {/* Theme Selector */}
              <div
                className={`px-4 py-3 border-t mt-4 ${
                  isDarkMode ? 'border-slate-700' : 'border-slate-200'
                }`}
              >
                <p
                  className={`text-sm font-medium mb-3 flex items-center ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  <span className='mr-2'>🎨</span>
                  Tema Aplikasi
                </p>
                <ThemeSelector />
              </div>

              {/* User Actions */}
              <div
                className={`px-4 py-4 rounded-lg mt-4 ${
                  isDarkMode ? 'bg-slate-800' : 'bg-slate-50'
                }`}
              >
                <p
                  className={`text-sm font-medium mb-4 flex items-center ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  <span className='mr-2'>👤</span>
                  Akun Pengguna
                </p>
                <div className='space-y-3'>
                  <Link
                    to='/masuk'
                    onClick={closeMenu}
                    className={`relative block w-full text-center py-2 px-4 border rounded-lg transition-colors ${
                      isActiveLink('/masuk')
                        ? isDarkMode
                          ? 'bg-green-900/30 border-green-400 text-green-400'
                          : 'bg-green-50 border-green-600 text-green-600'
                        : isDarkMode
                        ? 'text-slate-200 border-slate-600 hover:bg-slate-700'
                        : 'text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    Masuk
                    {isActiveLink('/masuk') && (
                      <span className='absolute w-2 h-2 transform -translate-y-1/2 bg-green-500 rounded-full top-1/2 right-2'></span>
                    )}
                  </Link>
                  <Link
                    to='/daftar'
                    onClick={closeMenu}
                    className={`relative block w-full text-center py-2 px-4 rounded-lg transition-colors font-medium ${
                      isActiveLink('/daftar')
                        ? 'bg-green-700 text-white'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    Daftar Sekarang
                    {isActiveLink('/daftar') && (
                      <span className='absolute w-2 h-2 transform -translate-y-1/2 bg-white rounded-full top-1/2 right-2'></span>
                    )}
                  </Link>
                </div>
              </div>

              {/* App Info */}
              <div
                className={`px-4 py-4 rounded-lg mt-4 bg-gradient-to-r ${
                  isDarkMode
                    ? 'from-green-900/20 to-green-800/20'
                    : 'from-green-50 to-green-100'
                }`}
              >
                <p
                  className={`text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-green-300' : 'text-green-800'
                  }`}
                >
                  💚 Bergabunglah dengan Gerakan Hijau
                </p>
                <p
                  className={`text-xs ${
                    isDarkMode ? 'text-green-400' : 'text-green-700'
                  }`}
                >
                  Bersama kita ciptakan masa depan yang berkelanjutan melalui
                  pengelolaan e-waste yang bertanggung jawab.
                </p>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
