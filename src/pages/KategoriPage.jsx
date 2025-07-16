import { motion as Motion } from 'motion/react';
import { useEffect } from 'react';
import Badge from '../components/Elements/Badge';
import Card from '../components/Elements/Card';
import MainLayout from '../components/Layouts/MainLayout';
import { ewasteCategories } from '../data/ewasteCategories';
import useDarkMode from '../hooks/useDarkMode';
import useDocumentTitle from '../hooks/useDocumentTitle';

const KategoriPage = () => {
  useDocumentTitle('Kategori | EwasteHub');

  const { isDarkMode } = useDarkMode();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);

  // Simple one-color scheme
  const getColorClasses = () => {
    return isDarkMode
      ? 'from-slate-800/50 to-slate-700/50'
      : 'from-slate-50 to-slate-100';
  };

  const getBorderColor = () => {
    return isDarkMode ? 'border-slate-700' : 'border-slate-200';
  };

  const getBadgeColor = () => {
    return 'green';
  };

  return (
    <MainLayout>
      <div
        className={`min-h-screen ${
          isDarkMode ? 'bg-slate-900' : 'bg-slate-50'
        }`}
      >
        {/* Hero Section */}
        <section
          className={`py-20 px-4 md:px-8 ${
            isDarkMode
              ? 'bg-gradient-to-br from-slate-900 to-slate-800'
              : 'bg-gradient-to-br from-slate-50 to-slate-100'
          }`}
        >
          <div className='max-w-4xl mx-auto text-center'>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant='soft' color='green' size='lg' className='mb-6'>
                📱 Kategori E-Waste
              </Badge>
              <h1
                className={`text-4xl md:text-5xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Kategori{' '}
                <span
                  className={isDarkMode ? 'text-green-400' : 'text-green-600'}
                >
                  E-Waste
                </span>
              </h1>
              <p
                className={`text-xl mb-8 max-w-2xl mx-auto ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Kenali berbagai jenis sampah elektronik yang dapat Anda kelola
                melalui platform E-wasteHub
              </p>
            </Motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className='px-4 py-20 md:px-8'>
          <div className='max-w-6xl mx-auto'>
            <div className='mb-16 text-center'>
              <Badge variant='soft' color='green' size='md' className='mb-4'>
                📋 Jenis E-Waste
              </Badge>
              <h2
                className={`text-3xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                6 Kategori Utama
              </h2>
              <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
                Berdasarkan klasifikasi International Telecommunication Union
                (ITU)
              </p>
            </div>

            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {ewasteCategories.map((category, index) => (
                <Motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className='cursor-pointer group'
                >
                  <Card
                    className={`h-full border-2 bg-gradient-to-br ${getColorClasses()} ${getBorderColor()} transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                      isDarkMode
                        ? 'hover:border-green-500 group-hover:shadow-green-800/20'
                        : 'hover:border-green-400 group-hover:shadow-green-200/20'
                    }`}
                  >
                    <Card.Body className='p-6'>
                      {/* Icon and Title */}
                      <div className='flex items-center justify-between mb-4'>
                        <div className='text-4xl'>{category.icon}</div>
                        <Badge variant='soft' color='green' size='sm'>
                          {category.points} poin
                        </Badge>
                      </div>

                      <h3
                        className={`text-xl font-bold mb-2 transition-colors text-center ${
                          isDarkMode
                            ? 'text-white group-hover:text-green-400'
                            : 'text-slate-900 group-hover:text-green-600'
                        }`}
                      >
                        {category.name}
                      </h3>

                      <p
                        className={`mb-4 text-center ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {category.description}
                      </p>

                      {/* Items List */}
                      <div className='mb-4'>
                        <h4
                          className={`text-sm font-semibold mb-2 ${
                            isDarkMode ? 'text-slate-200' : 'text-slate-700'
                          }`}
                        >
                          Contoh Item:
                        </h4>
                        <div className='flex flex-wrap gap-1'>
                          {category.items.slice(0, 4).map((item, idx) => (
                            <Badge
                              key={idx}
                              variant='soft'
                              color={getBadgeColor()}
                              size='xs'
                            >
                              {item}
                            </Badge>
                          ))}
                          {category.items.length > 4 && (
                            <Badge
                              variant='soft'
                              color={getBadgeColor()}
                              size='xs'
                            >
                              +{category.items.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Category Info */}
                      <div className='flex items-center justify-between'>
                        <div>
                          <p
                            className={`text-sm ${
                              isDarkMode ? 'text-slate-400' : 'text-slate-500'
                            }`}
                          >
                            Kategori: {category.category}
                          </p>
                        </div>
                        <div
                          className={`text-sm font-medium group-hover:underline ${
                            isDarkMode ? 'text-green-400' : 'text-green-600'
                          }`}
                        >
                          Lihat Detail →
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default KategoriPage;
