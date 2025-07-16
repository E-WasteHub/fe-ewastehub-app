// components/Layouts/Footer.jsx
import useDarkMode from '../../hooks/useDarkMode';

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-900'
      } py-6 sm:py-8 pb-24 md:pb-6 sm:md:pb-8 border-t ${
        isDarkMode ? 'border-slate-800' : 'border-slate-200'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex flex-col items-center justify-center space-y-3 sm:space-y-4'>
          {/* Logo and App Name */}
          <div className='flex items-center'>
            <img
              src={
                isDarkMode
                  ? '/src/assets/img/ewasteDark.png'
                  : '/src/assets/img/ewasteLight.png'
              }
              alt='E-wasteHub Logo'
              className='h-7 w-7 sm:h-8 sm:w-8 mr-2 sm:mr-3'
            />
            <span
              className={`text-lg sm:text-xl font-bold ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              }`}
            >
              E-wasteHub
            </span>
          </div>

          {/* Copyright */}
          <p
            className={`text-xs sm:text-sm text-center leading-relaxed px-2 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            © {currentYear} EwasteHub. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
