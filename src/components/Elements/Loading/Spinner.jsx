import useDarkMode from '../../../hooks/useDarkMode';

const Spinner = ({ size = 'medium', variant = 'primary' }) => {
  const { isDarkMode } = useDarkMode();

  const sizeClasses = {
    small: 'h-4 w-4 border-2',
    medium: 'h-6 w-6 border-2',
    large: 'h-8 w-8 border-[3px]',
  };

  const variantClasses = {
    primary: 'border-green-500',
    blue: 'border-blue-500',
    white: 'border-white',
  };

  // The text color will define the color of the spinner's top border
  const textColorClass = isDarkMode ? 'text-green-400' : 'text-green-500';

  return (
    <div
      className={`
        animate-spin rounded-full border-transparent border-t-current
        ${sizeClasses[size] || sizeClasses.medium}
        ${variantClasses[variant] || variantClasses.primary}
        ${variant === 'primary' ? textColorClass : ''}
      `}
    />
  );
};

export default Spinner;
