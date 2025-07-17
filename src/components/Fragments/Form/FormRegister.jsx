import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import useDarkMode from '../../../hooks/useDarkMode'; // 1. Import the hook
import Alert from '../../Elements/Alert';
import Button from '../../Elements/Button';
import GoogleIcon from '../../Elements/Icon/GoogleIcon';
import InputForm from '../../Elements/Input';
import Loading from '../../Elements/Loading';

const FormRegister = () => {
  const { isDarkMode } = useDarkMode(); // 2. Get the theme state
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError('Password and Confirm Password do not match.');
      return;
    }
    setIsLoading(true);
    // ... your registration API logic
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit} className='space-y-5'>
        {error && <Alert type='error' message={error} />}

        <InputForm
          label='Full Name'
          name='fullname'
          type='text'
          placeholder='Enter your full name'
          value={formData.fullname}
          onChange={handleChange}
          disabled={isLoading}
        />

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
          <button
            type='button'
            className={`absolute top-[38px] right-3 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className='relative'>
          <InputForm
            label='Confirm Password'
            name='confirmPassword'
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder='Confirm your password'
            value={formData.confirmPassword}
            onChange={handleChange}
            disabled={isLoading}
          />
          <button
            type='button'
            className={`absolute top-[38px] right-3 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
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
            'Create Account'
          )}
        </Button>
      </form>

      {/* --- Separator --- */}
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

      {/* --- Google Login Button --- */}
      <Button
        variant='outline'
        type='button'
        className='w-full'
        disabled={isLoading}
      >
        <GoogleIcon className='mr-2' />
        Sign up with Google
      </Button>

      {/* --- Footer Link --- */}
      <p
        className={`mt-6 text-center text-sm ${
          isDarkMode ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        Already have an account?{' '}
        <Link
          to='/login'
          className={`font-semibold hover:underline ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default FormRegister;
