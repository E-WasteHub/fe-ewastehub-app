import { forwardRef } from 'react';
import Input from './Input';
import Label from './Label';

const InputForm = forwardRef((props, ref) => {
  // 1. Destructure props yang dibutuhkan, sisanya simpan di `rest`
  const { label, name, ...rest } = props;

  return (
    <div className='w-full'>
      {/* Label tetap menggunakan `name` sebagai `htmlFor` */}
      <Label htmlFor={name}>{label}</Label>

      {/* 2. Teruskan `name` dan semua sisa props (`...rest`) ke komponen Input */}
      {/* Ini akan otomatis menyertakan value, onChange, type, placeholder, disabled, dll. */}
      <Input name={name} {...rest} ref={ref} />
    </div>
  );
});

InputForm.displayName = 'InputForm';

export default InputForm;
