import useDarkMode from '../../../hooks/useDarkMode';

// Simple className concatenation utility
const cn = (...classes) => classes.filter(Boolean).join(' ');

const Badge = ({
  children,
  variant = 'solid',
  size = 'sm',
  color = 'gray',
  shape = 'rounded',
  icon,
  iconPosition = 'left',
  onClick,
  className,
  ...props
}) => {
  const { isDarkMode } = useDarkMode();

  // Size configurations
  const sizeClasses = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-sm',
    xl: 'px-6 py-3 text-base',
  };

  // Shape configurations
  const shapeClasses = {
    rounded: 'rounded',
    pill: 'rounded-full',
  };

  // Enhanced color configurations with vibrant colors
  const getVariantClasses = (color, variant) => {
    const colorConfigs = {
      gray: {
        solid: isDarkMode
          ? 'bg-slate-600 text-white'
          : 'bg-slate-100 text-slate-800',
        outline: isDarkMode
          ? 'border border-slate-600 text-slate-300 bg-transparent'
          : 'border border-slate-300 text-slate-700 bg-transparent',
        soft: isDarkMode
          ? 'bg-slate-800/50 text-slate-300'
          : 'bg-slate-100/50 text-slate-600',
      },
      green: {
        solid: isDarkMode
          ? 'bg-emerald-600 text-white shadow-sm'
          : 'bg-emerald-500 text-white shadow-sm',
        outline: isDarkMode
          ? 'border border-emerald-500 text-emerald-400 bg-transparent'
          : 'border border-emerald-500 text-emerald-600 bg-transparent',
        soft: isDarkMode
          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
          : 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      },
      blue: {
        solid: isDarkMode
          ? 'bg-blue-600 text-white shadow-sm'
          : 'bg-blue-500 text-white shadow-sm',
        outline: isDarkMode
          ? 'border border-blue-500 text-blue-400 bg-transparent'
          : 'border border-blue-500 text-blue-600 bg-transparent',
        soft: isDarkMode
          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
          : 'bg-blue-50 text-blue-700 border border-blue-200',
      },
      yellow: {
        solid: isDarkMode
          ? 'bg-yellow-600 text-white shadow-sm'
          : 'bg-yellow-500 text-white shadow-sm',
        outline: isDarkMode
          ? 'border border-yellow-500 text-yellow-400 bg-transparent'
          : 'border border-yellow-500 text-yellow-600 bg-transparent',
        soft: isDarkMode
          ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
          : 'bg-yellow-50 text-yellow-700 border border-yellow-200',
      },
      red: {
        solid: isDarkMode
          ? 'bg-red-600 text-white shadow-sm'
          : 'bg-red-500 text-white shadow-sm',
        outline: isDarkMode
          ? 'border border-red-500 text-red-400 bg-transparent'
          : 'border border-red-500 text-red-600 bg-transparent',
        soft: isDarkMode
          ? 'bg-red-500/20 text-red-300 border border-red-500/30'
          : 'bg-red-50 text-red-700 border border-red-200',
      },
      purple: {
        solid: isDarkMode
          ? 'bg-purple-600 text-white shadow-sm'
          : 'bg-purple-500 text-white shadow-sm',
        outline: isDarkMode
          ? 'border border-purple-500 text-purple-400 bg-transparent'
          : 'border border-purple-500 text-purple-600 bg-transparent',
        soft: isDarkMode
          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
          : 'bg-purple-50 text-purple-700 border border-purple-200',
      },
    };

    return colorConfigs[color]?.[variant] || colorConfigs.gray[variant];
  };

  // Build the classes
  const badgeClasses = cn(
    'inline-flex items-center font-medium transition-all duration-200',
    sizeClasses[size],
    shapeClasses[shape],
    getVariantClasses(color, variant),
    onClick && 'cursor-pointer hover:opacity-80 transform hover:scale-105',
    className
  );

  // Icon spacing classes based on size
  const iconSpacing = {
    xs: 'w-3 h-3',
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-4 h-4',
    xl: 'w-5 h-5',
  };

  const iconMargin = iconPosition === 'left' ? 'mr-1.5' : 'ml-1.5';

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={cn(iconSpacing[size], iconMargin)}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={cn(iconSpacing[size], iconMargin)}>{icon}</span>
      )}
    </>
  );

  if (onClick) {
    return (
      <button
        className={badgeClasses}
        onClick={onClick}
        type='button'
        {...props}
      >
        {content}
      </button>
    );
  }

  return (
    <span className={badgeClasses} {...props}>
      {content}
    </span>
  );
};

export default Badge;
