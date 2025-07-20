import { Link, NavLink } from 'react-router-dom';
import ewasteDarkLogo from '../../assets/img/ewasteDark.png';
import ewasteLightLogo from '../../assets/img/ewasteLight.png';
import useDarkMode from '../../hooks/useDarkMode';
import { getNavbarComponentClass } from '../../utils/navbarStyles';
import ThemeSelector from '../Elements/ThemeSelector';

const Navbar = () => {
  const { isDarkMode } = useDarkMode();

  const navLinks = [
    { to: '/', text: 'Beranda' },
    { to: '/edukasi', text: 'Edukasi' },
    { to: '/panduan-aplikasi', text: 'Panduan' },
    { to: '/faq', text: 'FAQ' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b shadow-md backdrop-blur-lg ${
        isDarkMode
          ? 'bg-slate-900/80 border-slate-700'
          : 'bg-white/80 border-slate-200'
      }`}
    >
      <div className='flex items-center justify-between px-4 py-3 mx-auto max-w-7xl'>
        <div className='flex items-center justify-between w-full lg:w-auto'>
          {/* Logo & Text */}
          <div className='flex items-center gap-2'>
            <img
              src={isDarkMode ? ewasteDarkLogo : ewasteLightLogo}
              alt='E-wasteHub Logo'
              className='w-10 h-10 rounded-xl'
            />
            <Link
              to='/'
              className={`text-xl font-bold transition-colors ${
                isDarkMode
                  ? 'text-green-400 hover:text-green-300'
                  : 'text-green-600 hover:text-green-700'
              }`}
            >
              EwasteHub
            </Link>
          </div>

          {/* Dark Mode Toggle - MOBILE ONLY */}
          <div className='block lg:hidden ml-2'>
            <ThemeSelector />
          </div>
        </div>

        <nav
          className={`items-center hidden space-x-4 text-sm font-medium lg:flex ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative ${getNavbarComponentClass({
                  isActive,
                  isDarkMode,
                  variant: 'navLink',
                })}`
              }
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
            <NavLink
              to='/login'
              className={({ isActive }) =>
                getNavbarComponentClass({
                  isActive,
                  isDarkMode,
                  variant: 'login',
                })
              }
            >
              Masuk
            </NavLink>
            <NavLink
              to='/register'
              className={({ isActive }) =>
                getNavbarComponentClass({
                  isActive,
                  isDarkMode,
                  variant: 'register',
                })
              }
            >
              Daftar
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
