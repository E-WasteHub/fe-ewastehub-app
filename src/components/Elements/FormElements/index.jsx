import { forwardRef } from 'react';
import ModernCheckbox from './Checkbox';
import Input from './Input';
import Label from './Label';
import PasswordToggle from './PasswordToggle';

const InputForm = forwardRef((props, ref) => {
  // Destructure props yang dibutuhkan, sisanya simpan di `rest`
  const { label, name, error, required, ...rest } = props;

  return (
    <div className='w-full'>
      {/* Label dengan support untuk required dan error states */}
      <Label htmlFor={name} required={required} error={error}>
        {label}
      </Label>

      {/* Input dengan semua props termasuk error handling */}
      <Input name={name} error={error} {...rest} ref={ref} />
    </div>
  );
});

InputForm.displayName = 'InputForm';

// Export individual components
export { ModernCheckbox as Checkbox, Input, Label, PasswordToggle };

export default InputForm;
