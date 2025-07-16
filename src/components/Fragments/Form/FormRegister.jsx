import Button from '../../Elements/Button';
import InputForm from '../../Elements/Input/index';

const FormRegister = () => {
  return (
    <form action=''>
      <InputForm
        label='Full Name'
        type='text'
        placeholder='Insert your name here'
        name='fullname'
      ></InputForm>
      <InputForm
        label='Email'
        type='email'
        placeholder='example@gmail.com'
        name='email'
      ></InputForm>
      <InputForm
        label='Password'
        type='password'
        placeholder='*****'
        name='password'
      ></InputForm>
      <InputForm
        label='Confirm Password'
        type='password'
        placeholder='*****'
        name='confirmPassword'
      ></InputForm>
      <Button variant='primary' className='bg-emerald-600 w-full' type='submit'>
        Register
      </Button>
      <Button
        variant='primary'
        className='bg-emerald-600 w-full my-4'
        type='submit'
      >
        Daftar Dengan Google
      </Button>
    </form>
  );
};

export default FormRegister;
