import { Link } from 'react-router-dom';

import useDarkMode from '../../../hooks/useDarkMode';
import useRegister from '../../../hooks/useRegister';
import Alert from '../../Elements/Alert';
import InputForm, {
  Checkbox,
  PasswordToggle,
} from '../../Elements/FormElements';
import GoogleIcon from '../../Elements/Icon/GoogleIcon';

const FormRegister = () => {
  const { isDarkMode } = useDarkMode();
  const {
    formData,
    isLoading,
    error,
    showPassword,
    showKonfirmasiPassword,
    updateField,
    togglePassword,
    toggleKonfirmasiPassword,
    handleSubmit,
  } = useRegister();

  return (
    <div className='w-full'>
      {/* Form Pendaftaran Utama */}
      <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
        {error && <Alert type='error' message={error} />}

        <InputForm
          label='Nama Lengkap'
          name='namaLengkap'
          type='text'
          placeholder='Masukkan nama lengkap Anda'
          value={formData.namaLengkap}
          onChange={(e) => updateField('namaLengkap', e.target.value)}
          disabled={isLoading}
          autoComplete='name'
          required
        />

        <InputForm
          label='Alamat Email'
          name='email'
          type='email'
          placeholder='contoh@email.com'
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          disabled={isLoading}
          autoComplete='email'
          required
        />

        <div className='relative'>
          <InputForm
            label='Password'
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Masukkan password'
            value={formData.password}
            onChange={(e) => updateField('password', e.target.value)}
            disabled={isLoading}
            autoComplete='new-password'
            required
          />
          <div className='absolute inset-y-0 right-3 flex items-center top-[2.125rem] sm:top-[2.375rem] lg:top-[2.125rem]'>
            <PasswordToggle
              showPassword={showPassword}
              onToggle={togglePassword}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className='relative'>
          <InputForm
            label='Konfirmasi Password'
            name='konfirmasiPassword'
            type={showKonfirmasiPassword ? 'text' : 'password'}
            placeholder='Ulangi password'
            value={formData.konfirmasiPassword}
            onChange={(e) => updateField('konfirmasiPassword', e.target.value)}
            disabled={isLoading}
            autoComplete='new-password'
            required
          />
          <div className='absolute inset-y-0 right-3 flex items-center top-[2.125rem] sm:top-[2.375rem] lg:top-[2.125rem]'>
            <PasswordToggle
              showPassword={showKonfirmasiPassword}
              onToggle={toggleKonfirmasiPassword}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className='flex items-start'>
          <Checkbox
            id='agree-terms'
            name='agreeToTerms'
            label='Dengan membuat akun berarti Anda menyetujui Syarat dan Ketentuan, dan Kebijakan Privasi kami'
            checked={formData.setujuSyarat}
            onChange={(e) => updateField('setujuSyarat', e.target.checked)}
            disabled={isLoading}
          />
        </div>

        <button
          type='submit'
          className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-sm sm:text-base min-h-[44px] sm:min-h-[48px] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed ${
            isDarkMode
              ? 'bg-green-500 text-white border-2 border-green-500 hover:bg-green-400 focus:ring-green-900/40 focus:ring-offset-slate-800 disabled:bg-green-400 disabled:opacity-75'
              : 'bg-green-600 text-white border-2 border-green-600 hover:bg-green-700 focus:ring-green-200/60 focus:ring-offset-white disabled:bg-green-400 disabled:opacity-75'
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className='flex items-center gap-2'>
              <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
              <span>Memproses...</span>
            </div>
          ) : (
            'Buat Akun'
          )}
        </button>
      </form>

      <div className='flex items-center my-6'>
        <div className='flex-1 border-t border-gray-300'></div>
        <span className='px-4 text-sm text-gray-500'>ATAU</span>
        <div className='flex-1 border-t border-gray-300'></div>
      </div>

      <button
        type='button'
        className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-sm sm:text-base min-h-[44px] sm:min-h-[48px] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed ${
          isDarkMode
            ? 'bg-slate-800 text-slate-200 border-2 border-slate-600 hover:bg-slate-700 focus:ring-slate-700/60 focus:ring-offset-slate-800 disabled:opacity-50'
            : 'bg-white text-slate-700 border-2 border-slate-300 hover:bg-slate-50 focus:ring-slate-200/60 focus:ring-offset-white disabled:opacity-50'
        }`}
        disabled={isLoading}
      >
        <GoogleIcon className='mr-2' />
        Daftar dengan Google
      </button>

      <p
        className={`mt-6 text-sm text-center ${
          isDarkMode ? 'text-slate-300' : 'text-slate-600'
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
