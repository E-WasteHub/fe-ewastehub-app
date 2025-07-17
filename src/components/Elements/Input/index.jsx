import { forwardRef } from 'react';
import Input from './Input';
import Label from './Label';

const InputForm = forwardRef((props, ref) => {
  // Destructuring props yang dibutuhkan
  const { label, name, type, placeholder } = props;

  return (
    // Gunakan margin yang lebih konsisten jika diperlukan
    <div className='mb-4 w-full'>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

InputForm.displayName = 'InputForm';

export default InputForm;
