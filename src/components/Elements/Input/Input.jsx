import { forwardRef } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';

const Input = forwardRef(({ type, placeholder, name, ...props }, ref) => {
  const { isDarkMode } = useDarkMode();

  return (
    <input
      type={type}
      className={`
        w-full px-3 py-2 text-sm rounded-lg border transition-colors
        placeholder:text-slate-400
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
        ${
          isDarkMode
            ? 'bg-white border-slate-300 text-slate-900'
            : 'bg-slate-800 border-slate-600 text-slate-50'
        }
      `}
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
