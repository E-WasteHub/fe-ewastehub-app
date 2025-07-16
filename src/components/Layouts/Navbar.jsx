// components/Layouts/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import useDarkMode from '../../hooks/useDarkMode';
import ThemeSelector from '../Elements/ThemeSelector';

const Navbar = () => {
  const { isDarkMode } = useDarkMode();
  const location = useLocation();

  // Helper function to check if current path matches the link
  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`shadow-md border-b sticky top-0 z-40 ${
        isDarkMode
          ? 'bg-slate-900 border-slate-700'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className='flex items-center justify-between px-4 py-3 mx-auto max-w-7xl'>
        <div className='flex items-center'>
          <img
            src={
              isDarkMode
                ? '/src/assets/img/ewasteDark.png'
                : '/src/assets/img/ewasteLight.png'
            }
            alt='E-wasteHub Logo'
            className='w-10 h-10 mr-4 rounded-xl'
          />
          <Link
            to='/'
            className='text-xl font-bold text-green-600 transition-colors hover:text-green-700'
          >
            EwasteHub
          </Link>
        </div>

        <nav
          className={`hidden lg:flex items-center space-x-8 text-sm font-medium ${
            isDarkMode ? 'text-slate-100' : 'text-slate-700'
          }`}
        >
          <Link
            to='/'
            className={`relative transition-colors px-2 py-2 ${
              isActiveLink('/')
                ? isDarkMode
                  ? 'text-green-400'
                  : 'text-green-600'
                : isDarkMode
                ? 'hover:text-green-400 hover:bg-green-900/20'
                : 'hover:text-green-600 hover:bg-green-50'
            }`}
          >
            Beranda
            {isActiveLink('/') && (
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                  isDarkMode ? 'bg-green-400' : 'bg-green-600'
                } rounded-full`}
              ></span>
            )}
          </Link>
          <Link
            to='/edukasi'
            className={`relative transition-colors px-2 py-2 ${
              isActiveLink('/edukasi')
                ? isDarkMode
                  ? 'text-green-400'
                  : 'text-green-600'
                : isDarkMode
                ? 'hover:text-green-400 hover:bg-green-900/20'
                : 'hover:text-green-600 hover:bg-green-50'
            }`}
          >
            Edukasi
            {isActiveLink('/edukasi') && (
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                  isDarkMode ? 'bg-green-400' : 'bg-green-600'
                } rounded-full`}
              ></span>
            )}
          </Link>
          <Link
            to='/panduan-aplikasi'
            className={`relative transition-colors px-2 py-2 ${
              isActiveLink('/panduan-aplikasi')
                ? isDarkMode
                  ? 'text-green-400'
                  : 'text-green-600'
                : isDarkMode
                ? 'hover:text-green-400 hover:bg-green-900/20'
                : 'hover:text-green-600 hover:bg-green-50'
            }`}
          >
            Panduan
            {isActiveLink('/panduan-aplikasi') && (
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                  isDarkMode ? 'bg-green-400' : 'bg-green-600'
                } rounded-full`}
              ></span>
            )}
          </Link>
          <Link
            to='/faq'
            className={`relative transition-colors px-2 py-2 ${
              isActiveLink('/faq')
                ? isDarkMode
                  ? 'text-green-400'
                  : 'text-green-600'
                : isDarkMode
                ? 'hover:text-green-400 hover:bg-green-900/20'
                : 'hover:text-green-600 hover:bg-green-50'
            }`}
          >
            FAQ
            {isActiveLink('/faq') && (
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                  isDarkMode ? 'bg-green-400' : 'bg-green-600'
                } rounded-full`}
              ></span>
            )}
          </Link>
          <ThemeSelector />

          {/* Auth Section - Redesigned */}
          <div className='flex items-center gap-3'>
            <Link
              to='/login'
              className={`relative transition-all duration-200 px-4 py-2 rounded-lg font-medium ${
                isActiveLink('/login')
                  ? isDarkMode
                    ? 'text-white bg-green-600 shadow-lg'
                    : 'text-white bg-green-600 shadow-lg'
                  : isDarkMode
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Masuk
            </Link>

            <Link
              to='/register'
              className={`relative transition-all duration-200 px-4 py-2 rounded-lg font-medium ${
                isActiveLink('/register')
                  ? 'text-white bg-green-700 shadow-lg'
                  : 'text-white bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg'
              }`}
            >
              Daftar
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
