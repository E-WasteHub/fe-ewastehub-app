import { motion as Motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { benefits } from '../../../data/benefits';
import useDarkMode from '../../../hooks/useDarkMode';
import Badge from '../../Elements/Badge';
import Button from '../../Elements/Button';

const ManfaatSection = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      className={`py-16 px-4 md:px-8 transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <div className='mb-12 text-center'>
          {/* Badge */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='flex justify-center mb-6'
          >
            <Badge
              variant='soft'
              color='green'
              size='md'
              shape='pill'
              className='font-medium'
            >
              ⭐ Manfaat E-wasteHub
            </Badge>
          </Motion.div>

          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Mengapa Memilih E-wasteHub?
          </h2>
          <p
            className={`max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Bergabunglah dengan ribuan pengguna yang telah merasakan manfaat
            nyata dari pengelolaan e-waste yang bertanggung jawab
          </p>
        </div>

        {/* Benefits Grid - Show only 4 benefits */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {benefits && benefits.length > 0 ? (
            benefits.slice(0, 4).map((benefit, index) => (
              <Motion.div
                key={benefit.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className='text-center group'
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-slate-700 to-slate-800 text-slate-200'
                      : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700'
                  }`}
                >
                  {benefit.icon}
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`leading-relaxed text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {benefit.description}
                </p>
              </Motion.div>
            ))
          ) : (
            <div className='py-12 text-center col-span-full'>
              <p
                className={`text-lg transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Data manfaat sedang dimuat...
              </p>
            </div>
          )}
        </div>

        {/* Button Lihat Semua - Bottom Right */}
        {benefits && benefits.length > 3 && (
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className='flex justify-end mt-12'
          >
            <Link to='/manfaat'>
              <Button
                variant='primary'
                className='px-6 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
              >
                Lihat Semua Manfaat
              </Button>
            </Link>
          </Motion.div>
        )}
      </div>
    </section>
  );
};

export default ManfaatSection;
