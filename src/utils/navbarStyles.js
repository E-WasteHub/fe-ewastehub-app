// src/utils/navbarStyles.js

/**
 * Menghasilkan string class dinamis untuk komponen Navbar berdasarkan varian dan status.
 * @param {object} options - Opsi untuk styling.
 * @param {boolean} options.isActive - Status aktif dari NavLink.
 * @param {boolean} options.isDarkMode - Status mode gelap dari aplikasi.
 * @param {'navLink' | 'login' | 'register'} options.variant - Varian komponen yang akan di-style.
 * @returns {string} String class Tailwind CSS yang telah digabungkan.
 */

export const getNavbarComponentClass = ({ isActive, isDarkMode, variant }) => {
  let baseClasses = '';
  let activeClasses = '';
  let inactiveClasses = '';

  switch (variant) {
    case 'navLink':
      baseClasses = 'relative transition-colors px-2 py-2';
      activeClasses = isDarkMode ? 'text-green-400' : 'text-green-600';
      inactiveClasses = isDarkMode
        ? 'hover:text-green-400 hover:bg-green-900/20'
        : 'hover:text-green-600 hover:bg-green-50';
      break;

    case 'login':
      baseClasses =
        'relative transition-all duration-200 px-4 py-2 rounded-lg font-medium border';
      activeClasses = isDarkMode
        ? 'bg-slate-700 text-white border-slate-600'
        : 'bg-slate-200 text-slate-800 border-slate-300';
      inactiveClasses = isDarkMode
        ? 'text-slate-300 hover:text-white hover:bg-slate-800 border-slate-700'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-slate-300';
      break;

    case 'register':
      baseClasses =
        'relative transition-all duration-200 px-4 py-2 rounded-lg font-medium text-white shadow-lg';
      activeClasses = 'bg-green-500 hover:bg-green-600';
      inactiveClasses = 'bg-green-600 hover:bg-green-700';
      break;

    default:
      return '';
  }

  return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
};
