import { Award } from 'lucide-react';
import { motion as Motion } from 'motion/react';

import Badge from '../components/Elements/Badge';
import MainLayout from '../components/Layouts/MainLayout';
import { manfaatData } from '../data/manfaatData';
import useDarkMode from '../hooks/useDarkMode';
import useDocumentTitle from '../hooks/useDocumentTitle';

// 1. Definisikan variants untuk animasi di luar komponen
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Jeda animasi untuk setiap item
    },
  },
};

const gridItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ManfaatPage = () => {
  useDocumentTitle('Manfaat | E-wasteHub');
  const { isDarkMode } = useDarkMode();

  return (
    <MainLayout>
      {/* --- Hero Section (Tidak ada perubahan) --- */}
      <section
        className={`px-4 py-20 text-center md:px-8 ${
          isDarkMode ? 'bg-slate-900' : 'bg-slate-50'
        }`}
      >
        <div className='max-w-4xl mx-auto'>
          <Badge variant='soft' color='green' size='lg' className='mb-6'>
            <Award className='w-5 h-5 mr-2' />
            Dampak Positif E-wasteHub
          </Badge>
          <h1
            className={`text-4xl font-bold md:text-5xl ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Manfaat Nyata untuk Masa Depan
          </h1>
          <p
            className={`max-w-3xl mx-auto mt-4 text-lg md:text-xl ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Kontribusi Anda dalam pengelolaan e-waste menciptakan dampak positif
            yang berkelanjutan untuk lingkungan dan masyarakat.
          </p>
        </div>
      </section>

      {/* --- Benefits Grid --- */}
      <section
        className={`px-4 py-16 md:px-8 ${
          isDarkMode ? 'bg-slate-900/50' : 'bg-white'
        }`}
      >
        <div className='max-w-6xl mx-auto'>
          {/* 2. Terapkan variant ke grid container */}
          <Motion.div
            className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
            variants={gridContainerVariants}
            initial='hidden'
            animate='visible' // Memicu animasi saat render
          >
            {manfaatData.map((benefit) => {
              const { Icon } = benefit;
              return (
                // 3. Terapkan variant ke setiap item
                <Motion.div key={benefit.id} variants={gridItemVariants}>
                  <div className='p-6 text-center'>
                    {Icon && (
                      <div
                        className={`flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full ${
                          isDarkMode ? 'bg-slate-800' : 'bg-slate-100'
                        }`}
                      >
                        <Icon
                          className={`w-8 h-8 ${
                            isDarkMode ? 'text-green-400' : 'text-green-600'
                          }`}
                        />
                      </div>
                    )}
                    <h3
                      className={`mb-2 text-xl font-bold ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className={`text-base leading-relaxed ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </Motion.div>
              );
            })}
          </Motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ManfaatPage;
