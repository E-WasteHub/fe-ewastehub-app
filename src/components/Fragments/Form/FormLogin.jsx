import Button from '../../Elements/Button';
import InputForm from '../../Elements/Input';

const FormLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle login logic
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label='Username'
        type='text'
        placeholder='John Doe'
        name='username'
      />
      <InputForm
        label='Password'
        type='password'
        placeholder='*****'
        name='password'
      />
      <Button variant='primary' className='bg-emerald-600 w-full' type='submit'>
        Login
      </Button>
      <Button
        variant='primary'
        className='bg-emerald-600 w-full my-4'
        type='submit'
      >
        Login Dengan Google
      </Button>
    </form>
  );
};

export default FormLogin;
