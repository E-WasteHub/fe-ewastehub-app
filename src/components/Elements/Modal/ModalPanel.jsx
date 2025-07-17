import { motion as Motion } from 'motion/react';
import useDarkMode from '../../../hooks/useDarkMode';

const ModalPanel = ({ children, size = 'md' }) => {
  const { isDarkMode } = useDarkMode();

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className={`
        relative w-full overflow-hidden rounded-lg shadow-xl
        ${isDarkMode ? 'bg-slate-900' : 'bg-white'}
        ${sizeClasses[size] || sizeClasses.md}
      `}
    >
      {children}
    </Motion.div>
  );
};

export default ModalPanel;
