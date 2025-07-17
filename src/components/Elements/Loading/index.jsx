import useDarkMode from '../../../hooks/useDarkMode';
import PulseLoader from './PulseLoader';
import Skeleton from './Skeleton';
import Spinner from './Spinner';

const Loading = ({
  size = 'medium',
  text = 'Memuat...',
  fullScreen = false,
  variant = 'primary',
}) => {
  const { isDarkMode } = useDarkMode();

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const LoadingContent = () => (
    <div className='flex flex-col items-center justify-center space-y-3'>
      <Spinner size={size} variant={variant} />
      {text && (
        <p
          className={`font-medium ${
            isDarkMode ? 'text-slate-300' : 'text-gray-600'
          } ${textSizeClasses[size]}`}
        >
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm ${
          isDarkMode ? 'bg-slate-900/80' : 'bg-white/80'
        }`}
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

// Composition remains the same
Loading.Spinner = Spinner;
Loading.Skeleton = Skeleton;
Loading.PulseLoader = PulseLoader;

export default Loading;
