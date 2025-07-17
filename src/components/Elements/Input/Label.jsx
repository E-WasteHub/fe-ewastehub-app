import useDarkMode from '../../../hooks/useDarkMode';

const Label = ({ htmlFor, children }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-bold ${
        isDarkMode ? 'text-slate-700' : 'text-slate-300'
      }`}
    >
      {children}
    </label>
  );
};

export default Label;
