// src/pages/auth/LoginPage.jsx
import FormLogin from '../../components/Fragments/Form/FormLogin';
import AuthLayout from '../../components/Layouts/AuthLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const LoginPage = () => {
  useDocumentTitle('Masuk - E-WasteHub');

  return (
    <AuthLayout
      title='Selamat Datang Kembali!'
      subtitle='Masuk untuk melanjutkan ke E-wasteHub'
      namaApp='EwasteHub'
    >
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
