const Button = ({
  variant = 'default',
  type = 'button',
  className = '',
  as = 'button',
  children,
  ...props
}) => {
  const baseClass =
    'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 disabled:bg-green-400',
    danger:
      'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-400',
    outline:
      'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 disabled:text-gray-400 disabled:border-gray-200',
    default:
      'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 disabled:bg-gray-100 disabled:text-gray-400',
    google:
      'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 disabled:bg-gray-100 disabled:text-gray-400',
  };

  const variantClass = variants[variant] || variants.default;
  const Component = as;

  const finalProps = {
    className: `${baseClass} ${variantClass} ${className}`,
    ...props,
  };

  // Only add type prop for button elements
  if (as === 'button') {
    finalProps.type = type;
  }

  return <Component {...finalProps}>{children}</Component>;
};

export default Button;
