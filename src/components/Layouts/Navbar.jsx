import { Link, NavLink } from 'react-router-dom';
import ewasteDarkLogo from '../../assets/img/ewasteDark.png';
import ewasteLightLogo from '../../assets/img/ewasteLight.png';
import useDarkMode from '../../hooks/useDarkMode';
import ThemeSelector from '../Elements/ThemeSelector';

const Navbar = () => {
  const { isDarkMode } = useDarkMode();

  const navLinks = [
    { to: '/', text: 'Beranda' },
    { to: '/edukasi', text: 'Edukasi' },
    { to: '/panduan-aplikasi', text: 'Panduan' },
    { to: '/faq', text: 'FAQ' },
  ];

  // Fungsi ini sekarang menggunakan isDarkMode
  const getNavLinkClass = ({ isActive }) => {
    if (isActive) {
      return `relative transition-colors px-2 py-2 ${
        isDarkMode ? 'text-green-400' : 'text-green-600'
      }`;
    }
    return `relative transition-colors px-2 py-2 ${
      isDarkMode
        ? 'hover:text-green-400 hover:bg-green-900/20'
        : 'hover:text-green-600 hover:bg-green-50'
    }`;
  };

  // Fungsi ini sekarang menggunakan isDarkMode
  const getLoginButtonClass = ({ isActive }) => {
    const baseClasses =
      'relative transition-all duration-200 px-4 py-2 rounded-lg font-medium';
    if (isActive) {
      return `${baseClasses} text-white bg-green-600 shadow-lg`;
    }
    return `${baseClasses} ${
      isDarkMode
        ? 'text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700'
        : ' text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-4e00'
    }`;
  };

  // Fungsi ini tetap sama karena tidak bergantung pada dark mode untuk gaya aktifnya
  const getRegisterButtonClass = ({ isActive }) => {
    const baseClasses =
      'relative transition-all duration-200 px-4 py-2 rounded-lg font-medium';
    if (isActive) {
      return `${baseClasses} text-white bg-green-700 shadow-lg`;
    }
    return `${baseClasses} text-white bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg`;
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b shadow-md backdrop-blur-lg ${
        isDarkMode
          ? 'bg-slate-900 border-slate-700'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className='flex items-center justify-between px-4 py-3 mx-auto max-w-7xl'>
        <div className='flex items-center'>
          <img
            src={isDarkMode ? ewasteDarkLogo : ewasteLightLogo}
            alt='E-wasteHub Logo'
            className='w-10 h-10 mr-4 rounded-xl'
          />
          <Link
            to='/'
            className={`text-xl font-bold transition-colors hover:text-green-700 ${
              isDarkMode ? 'text-green-400' : 'text-green-600'
            }`}
          >
            EwasteHub
          </Link>
        </div>

        <nav
          className={`items-center hidden space-x-8 text-sm font-medium lg:flex ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={getNavLinkClass}
              end={link.to === '/'}
            >
              {({ isActive }) => (
                <>
                  {link.text}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        isDarkMode ? 'bg-green-400' : 'bg-green-600'
                      }`}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <ThemeSelector />

          <div className='flex items-center gap-3'>
            <NavLink to='/login' className={getLoginButtonClass}>
              Masuk
            </NavLink>
            <NavLink to='/register' className={getRegisterButtonClass}>
              Daftar
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
