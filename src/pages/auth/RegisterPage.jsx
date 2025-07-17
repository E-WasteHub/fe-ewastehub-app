import FormRegister from '../../components/Fragments/Form/FormRegister';
import AuthLayout from '../../components/Layouts/AuthLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const RegisterPage = () => {
  useDocumentTitle('Registrasi - E-WasteHub');

  return (
    <AuthLayout
      title='Buat Akun Baru'
      subtitle='Daftar sekarang dan mulai berkontribusi'
    >
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
