import useDarkMode from '../../../hooks/useDarkMode';

const Loading = ({
  size = 'medium',
  text = 'Memuat...',
  fullScreen = false,
  variant = 'primary',
}) => {
  const { isDarkMode } = useDarkMode();

  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-8 h-8 border-2',
    large: 'w-12 h-12 border-3',
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const variantClasses = {
    primary: 'border-green-500',
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    red: 'border-red-500',
  };

  const LoadingContent = () => (
    <div className='flex flex-col items-center justify-center space-y-3'>
      {/* Simple spinner */}
      <div
        className={`
          ${sizeClasses[size]}
          border-transparent border-t-current
          ${variantClasses[variant]}
          rounded-full animate-spin
          ${isDarkMode ? 'text-green-400' : 'text-green-500'}
        `}
      ></div>

      {/* Simple text */}
      {text && (
        <p
          className={`
            ${textSizeClasses[size]} font-medium
            ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}
          `}
        >
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className={`
          fixed inset-0 z-50 flex items-center justify-center
          ${isDarkMode ? 'bg-slate-900' : 'bg-white'}
        `}
      >
        <LoadingContent />
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center py-8'>
      <LoadingContent />
    </div>
  );
};

// Simple spinner component for inline loading
const Spinner = ({ size = 'medium', variant = 'primary' }) => {
  const { isDarkMode } = useDarkMode();

  const sizeClasses = {
    small: 'w-4 h-4 border-2',
    medium: 'w-6 h-6 border-2',
    large: 'w-8 h-8 border-3',
  };

  const variantClasses = {
    primary: 'border-green-500',
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    red: 'border-red-500',
    white: 'border-white',
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        border-transparent border-t-current
        ${variantClasses[variant]}
        rounded-full animate-spin
        ${isDarkMode && variant === 'primary' ? 'text-green-400' : ''}
      `}
    ></div>
  );
};

// Skeleton loader for content placeholders
const Skeleton = ({ className = '', variant = 'rectangular' }) => {
  const { isDarkMode } = useDarkMode();

  const baseClasses = `
    animate-pulse
    ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'}
  `;

  const variantClasses = {
    rectangular: 'rounded',
    circular: 'rounded-full',
    text: 'rounded h-4',
  };

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${className}
      `}
    />
  );
};

// Pulse loader dots
const PulseLoader = ({ variant = 'primary' }) => {
  const { isDarkMode } = useDarkMode();

  const variantClasses = {
    primary: isDarkMode ? 'bg-green-400' : 'bg-green-500',
    blue: isDarkMode ? 'bg-blue-400' : 'bg-blue-500',
    purple: isDarkMode ? 'bg-purple-400' : 'bg-purple-500',
    red: isDarkMode ? 'bg-red-400' : 'bg-red-500',
  };

  return (
    <div className='flex space-x-1'>
      <div
        className={`w-2 h-2 ${variantClasses[variant]} rounded-full animate-pulse`}
      ></div>
      <div
        className={`w-2 h-2 ${variantClasses[variant]} rounded-full animate-pulse`}
        style={{ animationDelay: '0.2s' }}
      ></div>
      <div
        className={`w-2 h-2 ${variantClasses[variant]} rounded-full animate-pulse`}
        style={{ animationDelay: '0.4s' }}
      ></div>
    </div>
  );
};

Loading.Spinner = Spinner;
Loading.Skeleton = Skeleton;
Loading.PulseLoader = PulseLoader;

export default Loading;
