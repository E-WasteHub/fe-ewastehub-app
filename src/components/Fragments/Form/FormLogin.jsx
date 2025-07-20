import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import useDarkMode from '../../../hooks/useDarkMode';
import Alert from '../../Elements/Alert';
import Button from '../../Elements/Button';
import GoogleIcon from '../../Elements/Icon/GoogleIcon';
import InputForm from '../../Elements/Input';
import Loading from '../../Elements/Loading';

const FormLogin = () => {
  const { isDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Tambahkan logika submit Anda di sini
    // Contoh:
    // setIsLoading(true);
    // setError(null);
    // loginUser(formData).then(...).catch(...)
  };

  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        {error && <Alert type='error' message={error} />}

        <InputForm
          label='Alamat Email'
          name='email'
          type='email'
          placeholder='contoh@email.com'
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          autoComplete='email'
        />

        <div className='relative'>
          <InputForm
            label='Password'
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Masukkan password Anda'
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            autoComplete='current-password'
          />
          <button
            type='button'
            className='absolute top-9 right-4 text-slate-500 dark:text-slate-400'
            onClick={() => setShowPassword(!showPassword)}
            aria-label={
              showPassword ? 'Sembunyikan password' : 'Tampilkan password'
            }
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className='flex items-center justify-between'>
          <label className='flex items-center text-sm select-none'>
            <input
              type='checkbox'
              className={`h-4 w-4 rounded-md  focus:ring-green-500 focus:ring-offset-0 ${
                isDarkMode
                  ? 'border-slate-600 bg-slate-700 checked:bg-green-500'
                  : 'border-slate-300 bg-slate-100 text-white checked:bg-green-600'
              }`}
            />
            <span
              className={`ml-2 ${isDarkMode ? 'text-slate-900' : 'text-white'}`}
            >
              Ingat Saya
            </span>
          </label>
          <Link
            to='/forgot-password'
            className={`text-sm font-medium hover:underline ${
              isDarkMode ? 'text-green-400' : 'text-green-600'
            }`}
          >
            Lupa Password?
          </Link>
        </div>

        <Button
          variant='primary'
          type='submit'
          className='w-full'
          disabled={isLoading}
        >
          {isLoading ? (
            <div className='flex items-center justify-center gap-2'>
              <Loading.Spinner size='small' variant='white' />
              <span>Memproses...</span>
            </div>
          ) : (
            'Masuk'
          )}
        </Button>
      </form>

      <div className='relative flex items-center my-3'>
        <div className='flex-grow border-t border-slate-300 dark:border-slate-600'></div>
        <span className='mx-4 flex-shrink text-sm text-slate-500 dark:text-slate-400'>
          ATAU
        </span>
        <div className='flex-grow border-t border-slate-300 dark:border-slate-600'></div>
      </div>

      <Button
        variant='default'
        type='button'
        className='w-full'
        disabled={isLoading}
      >
        <GoogleIcon className='mr-2' />
        Masuk dengan Google
      </Button>

      <p
        className={`mt-6 text-sm text-center ${
          isDarkMode ? 'text-slate-700' : 'text-slate-400'
        }`}
      >
        Belum punya akun?{' '}
        <Link
          to='/register'
          className={`font-semibold hover:underline ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}
        >
          Daftar di sini
        </Link>
      </p>
    </div>
  );
};

export default FormLogin;
