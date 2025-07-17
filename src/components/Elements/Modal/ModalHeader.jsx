import { X } from 'lucide-react';
import useDarkMode from '../../../hooks/useDarkMode';

const ModalHeader = ({ title, onClose }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex items-center justify-between p-4 border-b ${
        isDarkMode ? 'border-slate-700' : 'border-slate-200'
      }`}
    >
      <h3
        className={`text-lg font-semibold ${
          isDarkMode ? 'text-slate-100' : 'text-slate-900'
        }`}
      >
        {title}
      </h3>
      <button
        onClick={onClose}
        className={`p-1.5 rounded-full transition-colors ${
          isDarkMode
            ? 'text-slate-400 hover:bg-slate-700'
            : 'text-slate-500 hover:bg-slate-100'
        }`}
        aria-label='Tutup modal'
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default ModalHeader;
