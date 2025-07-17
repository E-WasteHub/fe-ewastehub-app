import { Route, Routes } from 'react-router-dom';

// Layouts
import AuthLayout from '../components/Layouts/AuthLayout';

// Public Pages
import EdukasiPage from '../pages/EdukasiPage';
import FaqPage from '../pages/FaqPage';
import HomePage from '../pages/HomePage';
import KategoriPage from '../pages/KategoriPage';
import ManfaatPage from '../pages/ManfaatPage';
import PanduanAplikasiPage from '../pages/PanduanAplikasiPage';

// Authentication Pages
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';

/**
 * Komponen untuk Halaman 404 (Tidak Ditemukan).
 * Ditampilkan ketika pengguna mengakses URL yang tidak cocok dengan rute mana pun.
 */
const NotFoundPage = () => (
  <div className='flex min-h-screen flex-col items-center justify-center bg-slate-50 text-center dark:bg-slate-900'>
    <h1 className='mb-4 text-6xl font-bold text-green-600 dark:text-green-400'>
      404
    </h1>
    <h2 className='mb-2 text-2xl font-bold text-slate-800 dark:text-slate-200'>
      Halaman Tidak Ditemukan
    </h2>
    <p className='mb-6 max-w-sm text-slate-600 dark:text-slate-400'>
      Maaf, kami tidak dapat menemukan halaman yang Anda cari. Mungkin halaman
      tersebut telah dipindahkan atau dihapus.
    </p>
    <a
      href='/'
      className='rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700'
    >
      Kembali ke Beranda
    </a>
  </div>
);

/**
 * Komponen utama untuk mengatur semua rute aplikasi.
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* --- Rute Publik --- */}
      <Route path='/' element={<HomePage />} />
      <Route path='/kategori' element={<KategoriPage />} />
      <Route path='/manfaat' element={<ManfaatPage />} />
      <Route path='/edukasi' element={<EdukasiPage />} />
      <Route path='/faq' element={<FaqPage />} />
      <Route path='/panduan-aplikasi' element={<PanduanAplikasiPage />} />

      {/* --- Rute Autentikasi (Login & Register) --- */}
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />

      {/* TODO: Rute Privat (Protected Routes)
        Nantinya, rute yang memerlukan login akan ditempatkan di sini.
        Contoh:
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      */}

      {/* --- Rute Fallback untuk 404 Not Found --- */}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
