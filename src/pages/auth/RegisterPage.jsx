// src/pages/auth/LoginPage.jsx

import FormRegister from '../../components/Fragments/Form/FormRegister';
import AuthLayout from '../../components/Layouts/AuthLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const LoginPage = () => {
  useDocumentTitle('Registrasi - E-WasteHub');
  return (
    <AuthLayout title='register' type='register'>
      <FormRegister />
    </AuthLayout>
  );
};

export default LoginPage;
