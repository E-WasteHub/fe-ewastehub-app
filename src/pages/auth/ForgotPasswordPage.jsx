import AuthLayout from '../../components/Layouts/AuthLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

// src/pages/ForgotPasswordPage.jsx
const ForgotPasswordPage = () => {
  useDocumentTitle('Lupa Password - EwasteHub');

  return <AuthLayout></AuthLayout>;
};

export default ForgotPasswordPage;
