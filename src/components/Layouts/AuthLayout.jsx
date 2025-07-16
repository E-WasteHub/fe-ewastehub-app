import ewasteDark from '../../assets/img/ewasteDark.png';
import ewasteLight from '../../assets/img/ewasteLight.png';
import useDarkMode from '../../hooks/useDarkMode';
import Button from '../Elements/Button';

const AuthLayout = ({ children }) => {
  const { isDarkMode, toggleTheme } = useDarkMode();

  // Tentukan style dan logo sesuai dark mode
  const bgMain = isDarkMode ? 'bg-gray-100' : 'bg-gray-900';
  const bgCard = isDarkMode ? 'bg-white' : 'bg-gray-800';
  const textTitle = isDarkMode ? 'text-gray-800' : 'text-gray-100';
  const logo = isDarkMode ? ewasteLight : ewasteDark;

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${bgMain} px-4`}
    >
      <div className={`w-full max-w-md ${bgCard} rounded-lg shadow-md p-8`}>
        {/* Logo atau Judul */}
        <div className='flex flex-col items-center mb-6'>
          <img src={logo} alt='E-WasteHub Logo' className='h-16 mb-2' />
          <h1 className={`text-2xl font-bold ${textTitle}`}>EWasteHub</h1>
          <Button
            type='button'
            onClick={toggleTheme}
            className={`mt-2 px-3 py-1 text-xs rounded transition
              ${
                isDarkMode
                  ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
              }`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>
        {/* Konten Form (Login/Register) */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
