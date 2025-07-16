// src/components/Elements/Alert.jsx
import useDarkMode from '../../../hooks/useDarkMode';

const Alert = ({
  type = 'success',
  title,
  message,
  onLearnMore,
  className = '',
  showLearnMore = true,
  ...props
}) => {
  const { isDarkMode } = useDarkMode();

  // Icons for different alert types
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return (
          <svg
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
              clipRule='evenodd'
            />
          </svg>
        );
      case 'warning':
        return (
          <svg
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
              clipRule='evenodd'
            />
          </svg>
        );
      case 'error':
        return (
          <svg
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
              clipRule='evenodd'
            />
          </svg>
        );
      default:
        return null;
    }
  };

  // Color schemes for different alert types
  const getColorClasses = (type) => {
    switch (type) {
      case 'success':
        return {
          container: isDarkMode
            ? 'bg-green-900/20 border-green-800'
            : 'bg-green-50 border-green-200',
          icon: 'text-green-600',
          title: isDarkMode ? 'text-green-400' : 'text-green-800',
          message: isDarkMode ? 'text-green-300' : 'text-green-700',
          link: isDarkMode
            ? 'text-green-400 hover:text-green-300'
            : 'text-green-600 hover:text-green-800',
        };
      case 'warning':
        return {
          container: isDarkMode
            ? 'bg-amber-900/20 border-amber-800'
            : 'bg-amber-50 border-amber-200',
          icon: 'text-amber-600',
          title: isDarkMode ? 'text-amber-400' : 'text-amber-800',
          message: isDarkMode ? 'text-amber-300' : 'text-amber-700',
          link: isDarkMode
            ? 'text-amber-400 hover:text-amber-300'
            : 'text-amber-600 hover:text-amber-800',
        };
      case 'error':
        return {
          container: isDarkMode
            ? 'bg-red-900/20 border-red-800'
            : 'bg-red-50 border-red-200',
          icon: 'text-red-600',
          title: isDarkMode ? 'text-red-400' : 'text-red-800',
          message: isDarkMode ? 'text-red-300' : 'text-red-700',
          link: isDarkMode
            ? 'text-red-400 hover:text-red-300'
            : 'text-red-600 hover:text-red-800',
        };
      default:
        return {
          container: isDarkMode
            ? 'bg-slate-800 border-slate-700'
            : 'bg-slate-50 border-slate-200',
          icon: 'text-slate-600',
          title: isDarkMode ? 'text-slate-300' : 'text-slate-800',
          message: isDarkMode ? 'text-slate-400' : 'text-slate-700',
          link: isDarkMode
            ? 'text-slate-400 hover:text-slate-300'
            : 'text-slate-600 hover:text-slate-800',
        };
    }
  };

  const colors = getColorClasses(type);

  return (
    <div
      className={`rounded-xl border p-4 ${colors.container} ${className}`}
      {...props}
    >
      <div className='flex items-start space-x-3'>
        {/* Icon */}
        <div className={`flex-shrink-0 ${colors.icon}`}>{getIcon(type)}</div>

        {/* Content */}
        <div className='flex-1 min-w-0'>
          {/* Title */}
          {title && (
            <h3 className={`text-sm font-semibold ${colors.title}`}>{title}</h3>
          )}

          {/* Message */}
          {message && (
            <p className={`text-sm mt-1 ${colors.message}`}>{message}</p>
          )}

          {/* Learn More Link */}
          {showLearnMore && (
            <button
              onClick={onLearnMore}
              className={`text-sm font-medium mt-2 hover:underline transition-colors ${colors.link}`}
            >
              Learn more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;
