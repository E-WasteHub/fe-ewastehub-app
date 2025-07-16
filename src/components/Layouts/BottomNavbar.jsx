// components/Layouts/BottomNavbar.jsx
import {
  FiBook,
  FiBookOpen,
  FiHelpCircle,
  FiHome,
  FiLogIn,
} from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import useDarkMode from '../../hooks/useDarkMode';

const BottomNavbar = () => {
  const { pathname } = useLocation();
  const { isDarkMode } = useDarkMode();

  const navItems = [
    { to: '/', label: 'Beranda', icon: <FiHome /> },
    { to: '/edukasi', label: 'Edukasi', icon: <FiBook /> },
    {
      to: '/panduan-aplikasi',
      label: 'Panduan Aplikasi',
      icon: <FiBookOpen />,
    },
    { to: '/faq', label: 'Faq', icon: <FiHelpCircle /> },
    { to: '/masuk', label: 'Masuk', icon: <FiLogIn /> },
  ];

  return (
    <nav
      className={`fixed bottom-0 w-full backdrop-blur-md border-t shadow-lg md:hidden z-50 ${
        isDarkMode
          ? 'bg-slate-900/90 border-slate-700'
          : 'bg-white/90 border-slate-200'
      }`}
    >
      <div className='flex items-center justify-around h-16 px-2'>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 ${
              pathname === item.to
                ? `text-green-600 scale-105 ${
                    isDarkMode ? 'bg-green-900/20' : 'bg-green-50'
                  }`
                : `${
                    isDarkMode
                      ? 'text-slate-400 hover:text-green-400 hover:bg-green-900/10'
                      : 'text-slate-600 hover:text-green-600 hover:bg-green-50/50'
                  }`
            }`}
          >
            <div
              className={`text-xl mb-1 ${
                pathname === item.to ? 'transform scale-110' : ''
              }`}
            >
              {item.icon}
            </div>
            <span className='text-xs font-medium leading-none'>
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Safe area for devices with home indicator */}
      <div
        className={`h-safe-area-inset-bottom pb-safe backdrop-blur-md ${
          isDarkMode ? 'bg-slate-900/90' : 'bg-white/90'
        }`}
      ></div>
    </nav>
  );
};

export default BottomNavbar;
