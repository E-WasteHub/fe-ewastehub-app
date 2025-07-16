// src/components/Elements/Modal.jsx
import { useEffect } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';
import Button from '../Button';

const Modal = ({
  isOpen = false,
  onClose,
  type = 'default',
  title,
  message,
  primaryButtonText = 'Save Changes',
  secondaryButtonText = 'Close',
  onPrimaryAction,
  onSecondaryAction,
  showCloseButton = true,
  className = '',
  size = 'md',
  ...props
}) => {
  const { isDarkMode } = useDarkMode();

  // Handle ESC key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Don't render if not open
  if (!isOpen) return null;

  // Icons for different modal types
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return (
          <div className='bg-green-100 dark:bg-green-900/30 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4'>
            <svg
              className='w-8 h-8 text-green-600 dark:text-green-400'
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
          </div>
        );
      case 'warning':
        return (
          <div className='bg-amber-100 dark:bg-amber-900/30 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4'>
            <svg
              className='w-8 h-8 text-amber-600 dark:text-amber-400'
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
          </div>
        );
      case 'error':
        return (
          <div className='bg-red-100 dark:bg-red-900/30 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4'>
            <svg
              className='w-8 h-8 text-red-600 dark:text-red-400'
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
          </div>
        );
      case 'info':
        return (
          <div className='bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4'>
            <svg
              className='w-8 h-8 text-blue-600 dark:text-blue-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        );
      case 'default':
      default:
        return null; // No icon for default modal
    }
  };

  // Size classes
  const getSizeClasses = (size) => {
    switch (size) {
      case 'sm':
        return 'max-w-sm';
      case 'lg':
        return 'max-w-2xl';
      case 'xl':
        return 'max-w-4xl';
      default:
        return 'max-w-md';
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  const handlePrimaryClick = () => {
    onPrimaryAction?.();
    onClose?.();
  };

  const handleSecondaryClick = () => {
    onSecondaryAction?.();
    onClose?.();
  };

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity'
        onClick={handleBackdropClick}
        aria-hidden='true'
      />

      {/* Modal Container */}
      <div className='flex min-h-full items-center justify-center p-4'>
        <div
          className={`
            relative w-full ${getSizeClasses(size)}
            transform overflow-hidden rounded-2xl
            ${isDarkMode ? 'bg-slate-800' : 'bg-white'}
            p-6 text-center shadow-xl transition-all
            ${className}
          `}
          {...props}
        >
          {/* Close Button */}
          {showCloseButton && (
            <button
              onClick={onClose}
              className={`
                absolute right-4 top-4 rounded-lg p-1
                transition-colors hover:bg-slate-100 dark:hover:bg-slate-700
                ${
                  isDarkMode
                    ? 'text-slate-400 hover:text-slate-200'
                    : 'text-slate-500 hover:text-slate-700'
                }
              `}
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          )}

          {/* Icon */}
          {getIcon(type)}

          {/* Title */}
          {title && (
            <h3
              className={`
              text-xl font-semibold mb-4
              ${type === 'default' ? 'text-left' : 'text-center'}
              ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}
            `}
            >
              {title}
            </h3>
          )}

          {/* Message */}
          {message && (
            <div
              className={`
              mb-6 leading-relaxed
              ${type === 'default' ? 'text-left' : 'text-center'}
              ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}
            `}
            >
              {typeof message === 'string' ? (
                <p className='text-sm'>{message}</p>
              ) : (
                message
              )}
            </div>
          )}

          {/* Buttons */}
          <div
            className={`
            flex gap-3
            ${type === 'default' ? 'justify-end' : 'justify-center'}
            flex-col sm:flex-row
          `}
          >
            {secondaryButtonText && (
              <Button
                variant='outline'
                onClick={handleSecondaryClick}
                className='order-2 sm:order-1'
              >
                {secondaryButtonText}
              </Button>
            )}

            <Button
              variant='primary'
              onClick={handlePrimaryClick}
              className='order-1 sm:order-2'
            >
              {primaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
