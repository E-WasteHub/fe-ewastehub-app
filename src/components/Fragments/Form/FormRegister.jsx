import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import useDarkMode from '../../../hooks/useDarkMode';
import Alert from '../../Elements/Alert';
import Button from '../../Elements/Button';
import GoogleIcon from '../../Elements/Icon/GoogleIcon';
import InputForm from '../../Elements/Input';

const FormRegister = () => {
  const { isDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    password: '',
    konfirmasiPassword: '',
  });
  const [setujuSyarat, setSetujuSyarat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showKonfirmasiPassword, setShowKonfirmasiPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.konfirmasiPassword) {
      setError('Password dan konfirmasi password tidak cocok.');
      return;
    }
    if (!setujuSyarat) {
      setError('Anda harus menyetujui Syarat & Ketentuan untuk mendaftar.');
      return;
    }
    // TODO: Tambahkan logika registrasi Anda di sini
  };

  return (
    <div className='w-full'>
      {/* Form Pendaftaran Utama */}
      <form onSubmit={handleSubmit} className='space-y-6'>
        {error && <Alert type='error' title='Error' message={error} />}

        <InputForm
          label='Nama Lengkap'
          name='namaLengkap'
          type='text'
          placeholder='Masukkan nama lengkap Anda'
          value={formData.namaLengkap}
          onChange={handleChange}
          disabled={isLoading}
          autoComplete='name'
        />

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
            placeholder='Masukkan password'
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            autoComplete='new-password'
          />
          <button
            type='button'
            className={`absolute top-9 right-4 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
            onClick={() => setShowPassword(!showPassword)}
            aria-label='Toggle password visibility'
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className='relative'>
          <InputForm
            label='Konfirmasi Password'
            name='konfirmasiPassword'
            type={showKonfirmasiPassword ? 'text' : 'password'}
            placeholder='Ulangi password'
            value={formData.konfirmasiPassword}
            onChange={handleChange}
            disabled={isLoading}
            autoComplete='new-password'
          />
          <button
            type='button'
            className={`absolute top-9 right-4 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
            onClick={() => setShowKonfirmasiPassword(!showKonfirmasiPassword)}
            aria-label='Toggle password confirmation visibility'
          >
            {showKonfirmasiPassword ? <EyeOff size={20} /> : <Eye size={20} />}
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
              Dengan membuat akun berarti Anda menyetujui Syarat dan Ketentuan,
              dan Kebijakan Privasi kami
            </span>
          </label>
        </div>

        <Button
          variant='primary'
          type='submit'
          className='w-full'
          disabled={isLoading}
        >
          {isLoading ? 'Memproses...' : 'Buat Akun'}
        </Button>
      </form>

      <div className='relative flex items-center my-3'>
        <div className='flex-grow border-t border-slate-400 '></div>
        <span className='mx-4 flex-shrink text-sm text-slate-900 '>ATAU</span>
        <div className='flex-grow border-t border-slate-400'></div>
      </div>

      <Button
        variant='default'
        type='button'
        className='w-full'
        disabled={isLoading}
      >
        <GoogleIcon className='mr-2' />
        Daftar dengan Google
      </Button>

      {/* Link ke Halaman Login */}
      <p
        className={`mt-6 text-sm text-center ${
          isDarkMode ? 'text-slate-700' : 'text-slate-400'
        }`}
      >
        Sudah punya akun?{' '}
        <Link
          to='/login'
          className={`font-semibold hover:underline ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}
        >
          Masuk di sini
        </Link>
      </p>
    </div>
  );
};

export default FormRegister;
