// src/routes/PublicRoute.jsx
import { Route, Routes } from 'react-router-dom';
import EdukasiPage from '../pages/EdukasiPage';
import FaqPage from '../pages/FaqPage';
import HomePage from '../pages/HomePage';
import KategoriPage from '../pages/KategoriPage';
import ManfaatPage from '../pages/ManfaatPage';
import PanduanAplikasiPage from '../pages/PanduanAplikasiPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';

const PublicRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/edukasi' element={<EdukasiPage />} />
      <Route path='/faq' element={<FaqPage />} />
      <Route path='/manfaat' element={<ManfaatPage />} />
      <Route path='/panduan-aplikasi' element={<PanduanAplikasiPage />} />
      <Route path='/kategori' element={<KategoriPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
};

export default PublicRoute;
