// src/routes/index.jsx
import { Route, Routes } from 'react-router-dom';

// Public pages
import EdukasiPage from '../pages/EdukasiPage';
import FaqPage from '../pages/FaqPage';
import HomePage from '../pages/HomePage';
import KategoriPage from '../pages/KategoriPage';
import ManfaatPage from '../pages/ManfaatPage';
import PanduanAplikasiPage from '../pages/PanduanAplikasiPage';

// Authentication pages
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';

// Dashboard routes

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<HomePage />} />
      <Route path='/kategori' element={<KategoriPage />} />
      <Route path='/manfaat' element={<ManfaatPage />} />
      <Route path='/edukasi' element={<EdukasiPage />} />
      <Route path='/faq' element={<FaqPage />} />
      <Route path='/panduan-aplikasi' element={<PanduanAplikasiPage />} />

      {/* Authentication Routes */}
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />

      {/* Fallback Route */}
      <Route
        path='*'
        element={
          <div className='min-h-screen flex items-center justify-center'>
            <div className='text-center'>
              <h1 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4'>
                404 - Page Not Found
              </h1>
              <p className='text-slate-600 dark:text-slate-400 mb-6'>
                The page you're looking for doesn't exist.
              </p>
              <a
                href='/'
                className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors'
              >
                Go Home
              </a>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
