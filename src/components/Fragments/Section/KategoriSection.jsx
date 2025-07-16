import { motion as Motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ewasteCategories } from '../../../data/ewasteCategories';
import useDarkMode from '../../../hooks/useDarkMode';
import Badge from '../../Elements/Badge';
import Button from '../../Elements/Button';

const KategoriSection = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      className={`py-16 px-4 md:px-8 ${
        isDarkMode ? 'bg-slate-800' : 'bg-slate-50'
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
              📱 Kategori E-Waste
            </Badge>
          </Motion.div>

          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Kategori E-Waste yang Kami Terima
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Serahkan berbagai jenis sampah elektronik Anda dan dapatkan reward
            menarik sekaligus berkontribusi untuk lingkungan
          </p>
        </div>

        {/* Categories Grid - Show 4 cards */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {ewasteCategories && ewasteCategories.length > 0 ? (
            ewasteCategories.slice(0, 4).map((category, index) => (
              <Motion.div
                key={category.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg shadow-lg border border-opacity-20 hover:border-green-500 hover:shadow-md transition-all duration-300 group cursor-pointer ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-700'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className='mb-4 text-4xl text-center'>{category.icon}</div>
                <h3
                  className={`text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors text-center ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {category.name}
                </h3>
                <p
                  className={`text-sm mb-4 leading-relaxed text-center ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {category.description}
                </p>

                {/* Category Badge */}
                <div className='flex justify-center mb-4'>
                  <Badge variant='soft' size='sm' color='green' shape='pill'>
                    {category.category}
                  </Badge>
                </div>

                {/* Items List */}
                <div
                  className={`mt-4 pt-4 border-t ${
                    isDarkMode ? 'border-slate-600' : 'border-slate-200'
                  }`}
                >
                  <p
                    className={`text-xs mb-2 text-center ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Contoh item:
                  </p>
                  <div className='flex flex-wrap justify-center gap-1'>
                    {category.items && category.items.length > 0 ? (
                      <>
                        {category.items.slice(0, 2).map((item, itemIndex) => (
                          <Badge
                            key={itemIndex}
                            variant='soft'
                            size='xs'
                            color='gray'
                          >
                            {item}
                          </Badge>
                        ))}
                        {category.items.length > 2 && (
                          <Badge variant='soft' size='xs' color='gray'>
                            +{category.items.length - 2} lainnya
                          </Badge>
                        )}
                      </>
                    ) : (
                      <Badge variant='soft' size='xs' color='gray'>
                        Data tidak tersedia
                      </Badge>
                    )}
                  </div>
                </div>
              </Motion.div>
            ))
          ) : (
            <div className='py-12 text-center col-span-full'>
              <p
                className={`text-lg ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Data kategori e-waste sedang dimuat...
              </p>
            </div>
          )}
        </div>

        {/* Button Lihat Semua - Bottom Right */}
        {ewasteCategories && ewasteCategories.length > 4 && (
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className='flex justify-end mt-12'
          >
            <Link to='/kategori'>
              <Button
                variant='primary'
                className='px-6 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
              >
                Lihat Semua Kategori
              </Button>
            </Link>
          </Motion.div>
        )}
      </div>
    </section>
  );
};

export default KategoriSection;
