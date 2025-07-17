import { Link } from 'react-router-dom';
import ewasteDarkLogo from '../../assets/img/ewasteDark.png';
import ewasteLightLogo from '../../assets/img/ewasteLight.png';
import useDarkMode from '../../hooks/useDarkMode';
import ThemeSelector from '../Elements/ThemeSelector'; // 1. Impor ThemeSelector

const AuthLayout = ({ children, title, subtitle }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center p-4 transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-50' : 'bg-slate-900'
      }`}
    >
      {/* 1. Gunakan komponen ThemeSelector yang konsisten */}
      <div className='absolute top-4 right-4'>
        <ThemeSelector />
      </div>

      <div
        className={`w-full max-w-md rounded-xl p-8 shadow-lg transition-colors duration-300 ${
          isDarkMode ? 'bg-white' : 'bg-slate-800'
        }`}
      >
        {/* Header Form */}
        <div className='mb-6 text-center'>
          {/* 2. Jadikan logo dan judul sebagai link ke homepage */}
          <Link to='/' className='inline-block' aria-label='Kembali ke Beranda'>
            <img
              src={isDarkMode ? ewasteLightLogo : ewasteDarkLogo}
              alt='E-WasteHub Logo'
              className='mx-auto h-16 w-16'
            />
          </Link>
          <h1
            className={`mt-4 text-2xl font-bold ${
              isDarkMode ? 'text-slate-800' : 'text-slate-100'
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-1 text-sm ${
              isDarkMode ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            {subtitle}
          </p>
        </div>

        {/* Konten Form (children) */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
