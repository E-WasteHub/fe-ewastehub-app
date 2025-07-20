import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import ewasteDarkLogo from '../../assets/img/ewasteDark.png';
import ewasteLightLogo from '../../assets/img/ewasteLight.png';
import useDarkMode from '../../hooks/useDarkMode';

const AuthLayout = ({ children, title, subtitle }) => {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    // Tambahkan 'relative' jika belum ada, untuk konteks positioning
    <div className='relative flex flex-wrap min-h-screen'>
      {/* Kolom Kiri (Form) */}
      <div
        className={`flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:flex-none lg:px-20 xl:px-24 transition-colors duration-300 ${
          isDarkMode ? 'bg-white' : 'bg-slate-900'
        }`}
      >
        <div className='w-full max-w-sm mx-auto lg:w-96'>
          <div className='flex items-center justify-between mb-12'>
            <Link
              to='/'
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isDarkMode
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ArrowLeft size={16} />
              Kembali ke Beranda
            </Link>
          </div>

          <div>
            <h1
              className={`text-4xl font-bold ${
                isDarkMode ? 'text-slate-900' : 'text-white'
              }`}
            >
              {title}
            </h1>
            <p
              className={`mt-2 ${
                isDarkMode ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              {subtitle}
            </p>
          </div>

          <div className='mt-8'>{children}</div>
        </div>
      </div>

      {/* Kolom Kanan (Branding) */}
      <div
        className={`hidden w-1/2 lg:flex flex-col items-center justify-center p-12 text-center transition-colors duration-300 ${
          isDarkMode ? 'bg-slate-900' : 'bg-white'
        }`}
      >
        <Link to='/' className='mb-6'>
          <img
            src={isDarkMode ? ewasteDarkLogo : ewasteLightLogo}
            alt='E-wasteHub Logo'
            className='w-24 h-24'
          />
        </Link>
        <h2
          className={`text-3xl font-bold ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          EWasteHub
        </h2>
        <p
          className={`mt-2 max-w-sm ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Solusi Cerdas untuk Sampah Elektronik Anda. Mudah, Cepat, dan
          Berdampak.
        </p>
      </div>
      {/* Tombol toggle LighMode / DarkMode */}
      <button
        onClick={toggleTheme}
        className='fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 bg-green-600 text-white hover:bg-green-700'
        aria-label='Toggle Light/Dark Mode'
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
};

export default AuthLayout;
