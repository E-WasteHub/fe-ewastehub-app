import { Sparkles } from 'lucide-react';
import { motion as Motion } from 'motion/react';
import { Link } from 'react-router-dom';

import useDarkMode from '../../../hooks/useDarkMode'; // 1. Impor hook
// 2. Impor variabel yang benar
import { manfaatForSection } from '../../../data/manfaatData';
import Badge from '../../Elements/Badge';
import Button from '../../Elements/Button';

const ManfaatSection = () => {
  const { isDarkMode } = useDarkMode(); // 3. Panggil hook

  return (
    <section
      className={`px-4 py-16 md:px-8 ${
        isDarkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className='max-w-screen-xl mx-auto'>
        {/* --- Header --- */}
        <div className='mb-12 text-center'>
          <Badge variant='soft' color='green' size='md'>
            <Sparkles className='w-4 h-4 mr-1.5' />
            Manfaat E-wasteHub
          </Badge>
          <h2
            className={`mt-4 mb-4 text-3xl font-bold md:text-4xl ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Mengapa Memilih E-wasteHub?
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Bergabunglah dengan ribuan pengguna yang telah merasakan manfaat
            nyata dari pengelolaan e-waste yang bertanggung jawab.
          </p>
        </div>

        {/* --- Benefits Grid --- */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* 4. Gunakan variabel yang benar */}
          {manfaatForSection.slice(0, 4).map((benefit, index) => {
            const { Icon } = benefit;
            return (
              <Motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className='p-6 text-center'
              >
                {Icon && (
                  <div
                    className={`flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl ${
                      isDarkMode
                        ? 'bg-slate-800 text-slate-200'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Icon className='w-10 h-10' />
                  </div>
                )}
                <h3
                  className={`mb-2 text-xl font-semibold ${
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
              </Motion.div>
            );
          })}
        </div>

        {/* --- View All Button --- */}
        {manfaatForSection.length > 3 && (
          <div className='mt-12 text-end'>
            <Link to='/manfaat'>
              <Button variant='primary'>Lihat Semua Manfaat</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ManfaatSection;
