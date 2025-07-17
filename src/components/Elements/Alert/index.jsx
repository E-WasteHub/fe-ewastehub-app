import { CircleCheckBig, CircleX, Info, TriangleAlert } from 'lucide-react';
import useDarkMode from '../../../hooks/useDarkMode'; // 1. Impor useDarkMode

const Alert = ({ type = 'info', title, message, className = '' }) => {
  const { isDarkMode } = useDarkMode(); // 2. Panggil hook

  // Fungsi untuk mendapatkan ikon dan kelas CSS berdasarkan tipe alert.
  const getAlertConfig = (alertType) => {
    // 3. Modifikasi kelas untuk menggunakan isDarkMode
    switch (alertType) {
      case 'success':
        return {
          Icon: CircleCheckBig,
          container: isDarkMode
            ? 'bg-green-900/20 border-green-800'
            : 'bg-green-50 border-green-200',
          text: isDarkMode ? 'text-green-300' : 'text-green-800',
          iconColor: 'text-green-500',
        };
      case 'warning':
        return {
          Icon: TriangleAlert,
          container: isDarkMode
            ? 'bg-yellow-900/20 border-yellow-800'
            : 'bg-yellow-50 border-yellow-200',
          text: isDarkMode ? 'text-yellow-300' : 'text-yellow-800',
          iconColor: 'text-yellow-500',
        };
      case 'error':
        return {
          Icon: CircleX,
          container: isDarkMode
            ? 'bg-red-900/20 border-red-800'
            : 'bg-red-50 border-red-200',
          text: isDarkMode ? 'text-red-300' : 'text-red-800',
          iconColor: 'text-red-500',
        };
      default: // 'info'
        return {
          Icon: Info,
          container: isDarkMode
            ? 'bg-blue-900/20 border-blue-800'
            : 'bg-blue-50 border-blue-200',
          text: isDarkMode ? 'text-blue-300' : 'text-blue-800',
          iconColor: 'text-blue-500',
        };
    }
  };

  const { Icon, container, text, iconColor } = getAlertConfig(type);

  // Jangan render apapun jika tidak ada pesan atau judul
  if (!message && !title) return null;

  return (
    <div
      className={`flex items-start space-x-3 rounded-xl border p-4 ${container} ${className}`}
      role='alert'
    >
      <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${iconColor}`} />
      <div className={`flex-1 ${text}`}>
        {title && <h3 className='text-sm font-semibold'>{title}</h3>}
        {message && (
          <p className={`text-sm ${title ? 'mt-1' : ''}`}>{message}</p>
        )}
      </div>
    </div>
  );
};

export default Alert;
