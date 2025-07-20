import { Check } from 'lucide-react';
import { forwardRef } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';

const ModernCheckbox = forwardRef(
  (
    {
      id,
      name,
      checked = false,
      onChange,
      disabled = false,
      label,
      className = '',
      ...props
    },
    ref
  ) => {
    const { isDarkMode } = useDarkMode();

    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!disabled && onChange) {
          onChange({ target: { name, checked: !checked } });
        }
      }
    };

    const handleToggle = () => {
      if (!disabled && onChange) {
        onChange({ target: { name, checked: !checked } });
      }
    };

    const getCheckboxClasses = () => {
      const baseClasses = `
        relative rounded-md border-2 cursor-pointer overflow-hidden
        flex items-center justify-center
        w-5 h-5 sm:w-5 sm:h-5 min-w-[20px] min-h-[20px]
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-4 focus:ring-offset-2
      `;

      if (disabled) {
        return `${baseClasses} ${
          isDarkMode
            ? 'bg-slate-800 border-slate-700 opacity-40 cursor-not-allowed'
            : 'bg-slate-100 border-slate-200 opacity-40 cursor-not-allowed'
        }`;
      }

      if (checked) {
        return `${baseClasses} ${
          isDarkMode
            ? 'bg-green-500 border-green-500 text-white focus:ring-green-900/40 focus:ring-offset-slate-800 hover:bg-green-400'
            : 'bg-green-600 border-green-600 text-white focus:ring-green-200/60 focus:ring-offset-white hover:bg-green-700'
        }`;
      }

      return `${baseClasses} ${
        isDarkMode
          ? 'bg-slate-800 border-slate-600 hover:border-green-400 focus:ring-green-900/40 focus:ring-offset-slate-800 hover:bg-slate-700'
          : 'bg-white border-slate-300 hover:border-green-500 focus:ring-green-200/60 focus:ring-offset-white hover:bg-slate-50'
      }`;
    };

    const getLabelClasses = () => {
      const baseClasses = `
        font-medium select-none cursor-pointer leading-relaxed text-sm sm:text-sm
        transition-colors duration-200
      `;

      if (disabled) {
        return `${baseClasses} ${
          isDarkMode
            ? 'text-slate-500 opacity-40 cursor-not-allowed'
            : 'text-slate-400 opacity-40 cursor-not-allowed'
        }`;
      }

      return `${baseClasses} ${
        isDarkMode
          ? 'text-slate-200 hover:text-green-300'
          : 'text-slate-900 hover:text-green-700'
      }`;
    };

    return (
      <div className={`flex items-start gap-2.5 sm:gap-3 ${className}`}>
        <div
          ref={ref}
          role='checkbox'
          tabIndex={disabled ? -1 : 0}
          aria-checked={checked}
          aria-disabled={disabled}
          aria-labelledby={label ? `${id}-label` : undefined}
          className={getCheckboxClasses()}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          {...props}
        >
          <input
            type='checkbox'
            id={id}
            name={name}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className='sr-only'
            tabIndex={-1}
            aria-hidden='true'
          />

          <Check
            size={14}
            className={`transition-opacity duration-200 ${
              checked ? 'opacity-100' : 'opacity-0'
            }`}
            strokeWidth={3}
          />
        </div>

        {label && (
          <label
            id={`${id}-label`}
            htmlFor={id}
            className={getLabelClasses()}
            onClick={handleToggle}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

ModernCheckbox.displayName = 'ModernCheckbox';

export default ModernCheckbox;
