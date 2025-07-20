import { forwardRef } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';

const Input = forwardRef(
  ({ type, placeholder, name, error, disabled, className, ...props }, ref) => {
    const { isDarkMode } = useDarkMode();

    const baseClasses = `
      w-full rounded-xl border-2 placeholder:font-normal
      px-3 py-3 text-sm min-h-[44px]
      sm:px-4 sm:py-3.5 sm:text-base sm:min-h-[48px]
      lg:px-4 lg:py-4 lg:text-base lg:min-h-[52px]
      transition-all duration-300 ease-in-out
      focus:outline-none focus:ring-4 focus:ring-offset-2
    `;

    const getStateClasses = () => {
      if (disabled) {
        return isDarkMode
          ? 'bg-slate-900 border-slate-700 text-slate-500 opacity-50 cursor-not-allowed'
          : 'bg-slate-50 border-slate-100 text-slate-400 opacity-50 cursor-not-allowed';
      }

      if (error) {
        return isDarkMode
          ? 'bg-slate-800 text-slate-50 border-red-400 placeholder:text-slate-500 focus:border-red-300 focus:ring-red-900/30 focus:ring-offset-slate-800 hover:border-red-300'
          : 'bg-white text-slate-900 border-red-500 placeholder:text-slate-400 focus:border-red-600 focus:ring-red-200/50 focus:ring-offset-white hover:border-red-600';
      }

      return isDarkMode
        ? 'bg-slate-800 border-slate-600 text-slate-50 placeholder:text-slate-500 hover:border-slate-500 focus:border-green-400 focus:ring-green-900/40 focus:ring-offset-slate-800'
        : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 hover:border-slate-300 focus:border-green-500 focus:ring-green-100/60 focus:ring-offset-white';
    };

    const inputClasses = `${baseClasses} ${getStateClasses()}`;

    const errorClasses = `
      mt-1.5 text-sm font-medium transition-colors duration-300
      ${isDarkMode ? 'text-red-300' : 'text-red-700'}
    `;

    return (
      <div className='relative'>
        <input
          type={type}
          className={`${inputClasses} ${className || ''}`}
          placeholder={placeholder}
          name={name}
          id={name}
          ref={ref}
          disabled={disabled}
          {...props}
        />

        {error && <p className={errorClasses}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
