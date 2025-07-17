import { Layers } from 'lucide-react';
import { motion as Motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { kategoriData } from '../../../data/kategoriData';
import useDarkMode from '../../../hooks/useDarkMode'; // 1. Import the hook
import Badge from '../../Elements/Badge';
import Button from '../../Elements/Button';

const KategoriSection = () => {
  const { isDarkMode } = useDarkMode(); // 2. Get the theme state

  return (
    <section
      className={`px-4 py-16 md:px-8 ${
        isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50'
      }`}
    >
      <div className='max-w-screen-xl mx-auto'>
        {/* --- Header --- */}
        <div className='mb-12 text-center'>
          <Badge variant='soft' color='green' size='md'>
            <Layers className='mr-1.5 h-4 w-4' />
            Kategori E-Waste
          </Badge>
          <h2
            className={`mt-4 mb-4 text-3xl font-bold md:text-4xl ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Kategori yang Kami Terima
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Serahkan berbagai jenis sampah elektronik Anda untuk didaur ulang
            secara bertanggung jawab.
          </p>
        </div>

        {/* --- Categories Grid --- */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {kategoriData.slice(0, 4).map((category, index) => {
            const { Icon } = category;
            return (
              <Motion.div
                key={category.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`
                  p-6 text-center transition-all duration-300 border rounded-xl group
                  hover:border-green-500 hover:shadow-lg
                  ${
                    isDarkMode
                      ? 'bg-slate-800 border-slate-700'
                      : 'bg-white border-slate-200'
                  }
                `}
              >
                {Icon && (
                  <div
                    className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full ${
                      isDarkMode ? 'bg-green-900/50' : 'bg-green-100'
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
                  className={`mb-2 text-lg font-semibold ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {category.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {category.description}
                </p>
                <div
                  className={`pt-4 mt-4 border-t ${
                    isDarkMode ? 'border-slate-700' : 'border-slate-200'
                  }`}
                >
                  <p
                    className={`mb-2 text-xs ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Contoh item:
                  </p>
                  <div className='flex flex-wrap justify-center gap-1'>
                    {category.items?.slice(0, 2).map((item, itemIndex) => (
                      <Badge
                        key={itemIndex}
                        variant='soft'
                        color='gray'
                        size='sm'
                      >
                        {item}
                      </Badge>
                    ))}
                    {category.items?.length > 2 && (
                      <Badge variant='soft' color='gray' size='sm'>
                        +{category.items.length - 2} lainnya
                      </Badge>
                    )}
                  </div>
                </div>
              </Motion.div>
            );
          })}
        </div>

        {/* --- View All Button --- */}
        {kategoriData.length > 4 && (
          <div className='mt-12 text-end'>
            <Link to='/kategori'>
              <Button variant='primary'>Lihat Semua Kategori</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default KategoriSection;
