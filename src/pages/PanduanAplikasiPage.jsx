import { motion as Motion } from 'motion/react';
import Badge from '../components/Elements/Badge';
import GuideSection from '../components/Fragments/Section/GuideSection';
import MainLayout from '../components/Layouts/MainLayout';
import { guideSteps } from '../data/panduan';
import useDarkMode from '../hooks/useDarkMode';
import useDocumentTitle from '../hooks/useDocumentTitle';

const PanduanAplikasiPage = () => {
  useDocumentTitle('Panduan | EwasteHub');
  const { isDarkMode } = useDarkMode();

  return (
    <MainLayout>
      <div
        className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}
      >
        {/* Hero Section */}
        <section className='px-4 pt-20 pb-12'>
          <div className='max-w-3xl mx-auto text-center'>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant='soft'
                color='green'
                size='md'
                shape='pill'
                className='mb-6'
                icon={<span>📖</span>}
              >
                Panduan Aplikasi
              </Badge>

              <h1
                className={`text-4xl md:text-5xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Cara Menggunakan{' '}
                <span className='text-green-600'>E-wasteHub</span>
              </h1>

              <p
                className={`text-xl mb-8 leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                5 langkah mudah untuk mengelola e-waste dan dapatkan reward
              </p>
            </Motion.div>
          </div>
        </section>

        {/* Guide Section */}
        <GuideSection steps={guideSteps} />
      </div>
    </MainLayout>
  );
};

export default PanduanAplikasiPage;
