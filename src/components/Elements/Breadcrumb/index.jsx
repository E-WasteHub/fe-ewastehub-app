// components/Elements/Breadcrumb/index.jsx
import { FiChevronRight } from 'react-icons/fi';
import useDarkMode from '../../../hooks/useDarkMode';

const Breadcrumb = ({ paths }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <nav
      className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
      aria-label='Breadcrumb'
    >
      <ol className='flex items-center space-x-1'>
        {paths.map((path, index) => (
          <li key={index} className='flex items-center'>
            {index > 0 && <FiChevronRight className='mx-1 text-slate-400' />}
            {path.href ? (
              <a href={path.href} className='text-blue-600 hover:underline'>
                {path.label}
              </a>
            ) : (
              <span
                className={isDarkMode ? 'text-slate-100' : 'text-slate-800'}
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
