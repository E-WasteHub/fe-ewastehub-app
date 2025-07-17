import { Book, HelpCircle, Home, Recycle, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import useDarkMode from '../../hooks/useDarkMode';

const navItems = [
  { to: '/', label: 'Beranda', Icon: Home },
  { to: '/edukasi', label: 'Edukasi', Icon: Book },
  { to: '/panduan-aplikasi', label: 'Panduan', Icon: Recycle },
  { to: '/faq', label: 'Bantuan', Icon: HelpCircle },
  { to: '/login', label: 'Profil', Icon: User },
];

const BottomNavbar = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <nav
      className={`fixed bottom-0 z-50 w-full border-t backdrop-blur-lg md:hidden
        ${
          isDarkMode
            ? 'border-slate-800 bg-slate-900/80'
            : 'border-slate-50 bg-white'
        }`}
    >
      <div className='flex h-16 justify-around'>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            // `end` prop penting untuk link beranda
            end={item.to === '/'}
            className={({ isActive }) => `
              flex flex-col items-center justify-center gap-1 w-full pt-1
              transition-colors duration-200
              ${
                isDarkMode
                  ? 'text-slate-400 hover:text-green-400'
                  : 'text-slate-500 hover:text-green-600'
              }
              ${
                isActive
                  ? isDarkMode
                    ? 'text-green-400'
                    : 'text-green-600'
                  : ''
              }
            `}
          >
            {({ isActive }) => (
              <>
                <item.Icon
                  className='h-6 w-6'
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span
                  className={`
                  text-[10px] font-medium transition-opacity duration-200
                  ${isActive ? 'opacity-100' : 'opacity-0'}
                `}
                >
                  {item.label}
                </span>
                {/* Indikator aktif yang lebih halus */}
                <div
                  className={`
                  h-0.5 w-5 rounded-full transition-transform duration-300
                  ${isDarkMode ? 'bg-green-400' : 'bg-green-600'}
                  ${isActive ? 'scale-x-100' : 'scale-x-0'}
                `}
                ></div>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavbar;
