// components/Elements/Button/index.jsx
import useDarkMode from '../../../hooks/useDarkMode';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'default',
  className = '',
  ...props
}) => {
  const { isDarkMode } = useDarkMode();

  const baseClasses =
    'px-4 py-2 rounded-2xl font-medium transition focus:outline-none';

  const getVariantClasses = (variant) => {
    switch (variant) {
      case 'primary':
        return 'bg-green-600 text-white hover:bg-green-700';
      case 'outline':
        return `bg-transparent border transition-colors ${
          isDarkMode
            ? 'text-slate-200 border-slate-600 hover:bg-slate-800'
            : 'text-slate-700 border-slate-300 hover:bg-slate-100'
        }`;
      case 'danger':
        return 'bg-red-600 text-white hover:bg-red-700';
      default:
        return `text-white ${
          isDarkMode
            ? 'bg-slate-700 hover:bg-slate-600'
            : 'bg-black hover:bg-slate-800'
        }`;
    }
  };

  const variantClass = getVariantClasses(variant);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
