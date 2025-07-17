import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import useDarkMode from '../../../hooks/useDarkMode'; // 1. Import the hook
import Alert from '../../Elements/Alert';
import Button from '../../Elements/Button';
import GoogleIcon from '../../Elements/Icon/GoogleIcon';
import InputForm from '../../Elements/Input';
import Loading from '../../Elements/Loading';

const FormLogin = () => {
  const { isDarkMode } = useDarkMode(); // 2. Get the theme state
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
    // Your submit logic here
  };

  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit} className='space-y-5'>
        {error && <Alert type='error' message={error} />}

        <InputForm
          label='Email Address'
          name='email'
          type='email'
          placeholder='you@example.com'
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
        />

        <div className='relative'>
          <InputForm
            label='Password'
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Enter your password'
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
          />
          {/* 3. Apply conditional classes */}
          <button
            type='button'
            className={`absolute top-[38px] right-3 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className='flex items-center justify-between'>
          <label className='flex items-center text-sm select-none'>
            <input
              type='checkbox'
              className='h-4 w-4 rounded border-slate-300 text-green-600 focus:ring-green-500'
            />
            <span
              className={`ml-2 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Keep me logged in
            </span>
          </label>
          <Link
            to='/forgot-password'
            className={`text-sm font-medium hover:underline ${
              isDarkMode ? 'text-green-400' : 'text-green-600'
            }`}
          >
            Forgot password?
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
              <span>Processing...</span>
            </div>
          ) : (
            'Sign In'
          )}
        </Button>
      </form>

      <div className='relative my-6 flex items-center'>
        <div
          className={`flex-grow border-t ${
            isDarkMode ? 'border-slate-600' : 'border-slate-300'
          }`}
        ></div>
        <span
          className={`mx-4 flex-shrink text-sm ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Or
        </span>
        <div
          className={`flex-grow border-t ${
            isDarkMode ? 'border-slate-600' : 'border-slate-300'
          }`}
        ></div>
      </div>

      <Button
        variant='outline'
        type='button'
        className='w-full'
        disabled={isLoading}
      >
        <GoogleIcon className='mr-2' />
        Sign in with Google
      </Button>

      <p
        className={`mt-6 text-center text-sm ${
          isDarkMode ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        Don't have an account?{' '}
        <Link
          to='/register'
          className={`font-semibold hover:underline ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default FormLogin;
