import useDarkMode from '../../../hooks/useDarkMode';

const Label = (props) => {
  const { htmlFor, children } = props;
  const { isDarkMode } = useDarkMode();
  const labelClass = `block text-sm font-bold mb-2 ${
    isDarkMode ? 'text-slate-700' : 'text-slate-200'
  }`;
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
    </label>
  );
};

export default Label;
