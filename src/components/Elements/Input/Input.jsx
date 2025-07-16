import { forwardRef } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  const { isDarkMode } = useDarkMode();
  const inputClass = `text-sm rounded w-full py-2 px-3 placeholder:opacity-50 outline-none border focus:border-blue-500
    ${
      isDarkMode
        ? 'bg-white border-gray-300 text-slate-700 placeholder:text-slate-400'
        : 'bg-slate-800 border-slate-600 text-slate-200 placeholder:text-slate-400'
    }`;
  return (
    <input
      type={type}
      className={inputClass}
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

export default Input;
