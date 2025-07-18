import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useDarkMode from '../../../hooks/useDarkMode'; // 1. Impor useDarkMode

const Breadcrumb = ({ paths = [] }) => {
  const { isDarkMode } = useDarkMode(); // 2. Panggil hook

  return (
    <nav aria-label='Breadcrumb'>
      <ol className='flex items-center space-x-1 text-sm'>
        {paths.map((path, index) => (
          <li key={index} className='flex items-center'>
            {index > 0 && (
              <ChevronRight className='mx-1 h-4 w-4 flex-shrink-0 text-slate-400' />
            )}

            {path.href ? (
              <Link
                to={path.href}
                // 3. Gunakan isDarkMode untuk styling
                className={`hover:underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`}
              >
                {path.label}
              </Link>
            ) : (
              // 3. Gunakan isDarkMode untuk styling
              <span
                className={`font-medium ${
                  isDarkMode ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                {path.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
