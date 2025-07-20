import useDarkMode from '../../../hooks/useDarkMode';

// Convert the variants object into a function that accepts isDarkMode
const getButtonVariants = (isDarkMode) => ({
  primary: 'bg-green-600 text-white hover:bg-green-700',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  outline: isDarkMode
    ? 'bg-transparent border border-slate-600 text-slate-200 hover:bg-slate-800'
    : 'bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-100',
  default: isDarkMode
    ? 'bg-slate-500 text-slate-100 hover:bg-slate-600'
    : 'bg-slate-700 text-white hover:bg-slate-800',
});

const Button = ({
  variant = 'default',
  type = 'button',
  className = '',
  children,
  ...props
}) => {
  const { isDarkMode } = useDarkMode();

  // Get the appropriate styles based on the current theme
  const buttonStyles = getButtonVariants(isDarkMode);
  const variantClass = buttonStyles[variant] || buttonStyles.default;

  const finalClassName = `
    inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold
    transition focus:outline-none focus:ring-2 focus:ring-offset-2
    focus:ring-green-500 ${variantClass} ${className}
  `;

  return (
    <button type={type} className={finalClassName.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;
