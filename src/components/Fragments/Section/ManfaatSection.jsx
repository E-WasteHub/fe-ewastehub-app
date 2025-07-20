import { Sparkles } from 'lucide-react';
import { motion as Motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { manfaatForSection } from '../../../data/manfaatData';
import useDarkMode from '../../../hooks/useDarkMode';

const ManfaatSection = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <section
      className={`px-4 py-16 md:px-8 ${
        isDarkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className='max-w-screen-xl mx-auto'>
        {/* Header */}
        <Motion.div
          className='mb-12 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className={`inline-flex items-center px-3 py-1 mb-4 text-sm font-medium ${
              isDarkMode
                ? 'text-green-300 bg-green-900/30'
                : 'text-green-700 bg-green-100'
            } rounded-full `}
          >
            <Sparkles className='w-4 h-4 mr-1.5' />
            Manfaat E-wasteHub
          </div>
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
        </Motion.div>

        {/* Benefits Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {manfaatForSection.slice(0, 4).map((benefit, index) => {
            const { Icon } = benefit;
            return (
              <Motion.div
                key={benefit.id}
                className='p-6 text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {Icon && (
                  <div
                    className={`flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl ${
                      isDarkMode
                        ? 'bg-slate-800 text-slate-200'
                        : 'text-slate-700 bg-slate-100'
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

        {/* View All Button */}
        {manfaatForSection.length > 3 && (
          <div className='mt-12 text-end'>
            <Link
              to='/manfaat'
              className='inline-flex items-center px-6 py-3 text-white bg-green-600 rounded-lg font-medium hover:bg-green-700 transition-colors'
            >
              Lihat Semua Manfaat
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ManfaatSection;
