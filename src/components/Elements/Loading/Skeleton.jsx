import useDarkMode from '../../../hooks/useDarkMode';

const Skeleton = ({ className = '', variant = 'rectangular' }) => {
  const { isDarkMode } = useDarkMode();

  const variantClasses = {
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    text: 'h-4 rounded-md',
  };

  const baseClasses = `animate-pulse ${
    isDarkMode ? 'bg-slate-700' : 'bg-gray-200'
  }`;

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant] || variantClasses.rectangular}
        ${className}
      `}
    />
  );
};

export default Skeleton;
