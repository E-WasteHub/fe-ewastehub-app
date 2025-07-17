import { BookText } from 'lucide-react';

import Badge from '../components/Elements/Badge';
import GuideSection from '../components/Fragments/Section/GuideSection';
import MainLayout from '../components/Layouts/MainLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
// Tidak perlu lagi mengimpor data di sini karena GuideSection sudah menanganinya

import useDarkMode from '../hooks/useDarkMode';

const PanduanAplikasiPage = () => {
  useDocumentTitle('Panduan | E-wasteHub');
  const { isDarkMode } = useDarkMode();

  return (
    <MainLayout>
      {/* --- Hero Section --- */}
      <section
        className={`px-4 py-20 text-center md:px-8 ${
          isDarkMode ? 'bg-slate-900' : 'bg-slate-50'
        }`}
      >
        <div className='max-w-4xl mx-auto'>
          <Badge variant='soft' color='green' size='lg' className='mb-6'>
            <BookText className='w-5 h-5 mr-2' />
            Panduan Aplikasi
          </Badge>
          <h1
            className={`text-4xl font-bold md:text-5xl ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Cara Menggunakan{' '}
            <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>
              E-wasteHub
            </span>
          </h1>
          <p
            className={`max-w-2xl mx-auto mt-4 text-lg md:text-xl ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Ikuti 5 langkah mudah ini untuk mulai mengelola sampah elektronik
            Anda dan dapatkan reward menarik.
          </p>
        </div>
      </section>

      {/* --- Guide Section --- */}
      {/* Komponen GuideSection sekarang mengambil datanya sendiri */}
      <GuideSection />
    </MainLayout>
  );
};

export default PanduanAplikasiPage;
