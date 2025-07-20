import useDarkMode from '../../../hooks/useDarkMode';

const Label = ({ htmlFor, children, required, error }) => {
  const { isDarkMode } = useDarkMode();

  const labelClasses = `
    block mb-2 sm:mb-2.5 text-sm sm:text-sm font-semibold
    transition-colors duration-200 leading-relaxed
    ${
      error
        ? isDarkMode
          ? 'text-red-400'
          : 'text-red-600'
        : isDarkMode
        ? 'text-slate-300'
        : 'text-slate-700'
    }
  `;

  const requiredClasses = `
    ml-1 ${isDarkMode ? 'text-red-500' : 'text-red-400'}
  `;

  return (
    <label htmlFor={htmlFor} className={labelClasses}>
      {children}
      {required && <span className={requiredClasses}>*</span>}
    </label>
  );
};

export default Label;
