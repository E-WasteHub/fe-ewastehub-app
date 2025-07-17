import useDarkMode from '../../../hooks/useDarkMode';

const PulseLoader = ({ variant = 'primary' }) => {
  const { isDarkMode } = useDarkMode();

  const getVariantClass = (variantColor) => {
    switch (variantColor) {
      case 'blue':
        return isDarkMode ? 'bg-blue-400' : 'bg-blue-500';
      case 'red':
        return isDarkMode ? 'bg-red-400' : 'bg-red-500';
      default:
        return isDarkMode ? 'bg-green-400' : 'bg-green-500';
    }
  };

  const pulseClass = `h-2 w-2 rounded-full animate-pulse ${getVariantClass(
    variant
  )}`;

  return (
    <div className='flex space-x-1.5'>
      <div className={pulseClass}></div>
      <div className={pulseClass} style={{ animationDelay: '0.2s' }}></div>
      <div className={pulseClass} style={{ animationDelay: '0.4s' }}></div>
    </div>
  );
};

export default PulseLoader;
