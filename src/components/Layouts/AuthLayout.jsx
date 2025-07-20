import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import ewasteDark from '../../assets/img/ewasteDark.png';
import ewasteLight from '../../assets/img/ewasteLight.png';
import useDarkMode from '../../hooks/useDarkMode';

const AuthLayout = ({ children, title, subtitle, namaApp }) => {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <div className='min-h-screen flex overflow-hidden auth-layout-container'>
      {/* Navigation Controls */}
      <div className='absolute top-4 left-4 z-50'>
        <Link
          to='/'
          className={`flex items-center gap-1 text-sm font-medium transition-colors ${
            isDarkMode
              ? 'text-slate-400 hover:text-slate-200'
              : 'text-slate-600 hover:text-slate-800'
          }`}
        >
          <ArrowLeft size={16} />
          Kembali
        </Link>
      </div>

      <button
        onClick={toggleTheme}
        className='absolute top-4 right-4 z-50 p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors shadow-lg'
        aria-label='Toggle Light/Dark Mode'
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Form Section */}
      <div
        className={`flex-1 flex items-center justify-center p-4 sm:p-8 ${
          isDarkMode ? 'bg-slate-900' : 'bg-white'
        }`}
      >
        <div className='w-full max-w-md'>
          {/* Mobile Branding */}
          <div className='flex items-center justify-center gap-2 mb-8 lg:hidden'>
            <img
              src={isDarkMode ? ewasteDark : ewasteLight}
              alt={`${namaApp} Logo`}
              className='w-8 h-8 rounded-md'
            />
            <h2
              className={`text-2xl font-bold ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              }`}
            >
              {namaApp}
            </h2>
          </div>

          {/* Header */}
          <div className='text-center lg:text-left mb-8'>
            <h1
              className={`text-3xl font-bold ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {title}
            </h1>
            <p
              className={`mt-2 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {subtitle}
            </p>
          </div>

          {children}
        </div>
      </div>

      {/* Branding Section */}
      <div
        className={`hidden lg:flex flex-1 items-center justify-center ${
          isDarkMode ? 'bg-white' : 'bg-slate-900'
        }`}
      >
        <div className='text-center'>
          <Link to='/' className='inline-block mb-6'>
            <img
              src={isDarkMode ? ewasteLight : ewasteDark}
              alt='E-wasteHub Logo'
              className='w-24 h-24 mx-auto'
            />
          </Link>
          <h2
            className={`text-3xl font-bold ${
              isDarkMode ? 'text-slate-900' : 'text-white'
            }`}
          >
            EWasteHub
          </h2>
          <p
            className={`mt-2 max-w-sm ${
              isDarkMode ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            Solusi Cerdas untuk Sampah Elektronik Anda. Mudah, Cepat, dan
            Berdampak.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
