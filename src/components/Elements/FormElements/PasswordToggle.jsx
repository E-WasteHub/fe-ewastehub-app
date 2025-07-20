import { Eye, EyeOff } from 'lucide-react';
import useDarkMode from '../../../hooks/useDarkMode';

const PasswordToggle = ({
  showPassword,
  onToggle,
  disabled = false,
  className = '',
}) => {
  const { isDarkMode } = useDarkMode();

  const baseClasses = `
    p-2 rounded-lg cursor-pointer flex items-center justify-center
    focus:outline-none active:outline-none
    ${
      isDarkMode
        ? 'text-slate-400 hover:text-slate-200'
        : 'text-slate-500 hover:text-slate-700'
    }
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  const handleClick = () => {
    if (!disabled) onToggle();
  };

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <button
      type='button'
      className={`${baseClasses} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
      aria-pressed={showPassword}
    >
      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>
  );
};

export default PasswordToggle;
