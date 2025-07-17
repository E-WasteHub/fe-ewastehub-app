import { Layers } from 'lucide-react';
import { motion as Motion } from 'motion/react';

import Badge from '../components/Elements/Badge';
import Card from '../components/Elements/Card';
import MainLayout from '../components/Layouts/MainLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
// DIUBAH: Impor dari file dan variabel baru
import { kategoriData } from '../data/kategoriData';

import useDarkMode from '../hooks/useDarkMode';

const KategoriPage = () => {
  useDocumentTitle('Kategori | E-wasteHub');
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
            <Layers className='w-5 h-5 mr-2' />
            Kategori E-Waste
          </Badge>
          <h1
            className={`text-4xl font-bold md:text-5xl ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Kenali Jenis E-Waste
          </h1>
          <p
            className={`max-w-2xl mx-auto mt-4 text-lg md:text-xl ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Jelajahi berbagai kategori sampah elektronik yang dapat Anda kelola
            melalui platform kami.
          </p>
        </div>
      </section>

      {/* --- Categories Grid --- */}
      <section
        className={`px-4 py-16 md:px-8 ${
          isDarkMode ? 'bg-slate-900/50' : 'bg-white'
        }`}
      >
        <div className='max-w-6xl mx-auto'>
          <div className='mb-12 text-center'>
            <h2
              className={`text-3xl font-bold ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              6 Kategori Utama
            </h2>
            <p
              className={`mt-2 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Berdasarkan klasifikasi International Telecommunication Union
              (ITU).
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {/* DIUBAH: Menggunakan kategoriData */}
            {kategoriData.map((category, index) => {
              const { Icon } = category;
              return (
                <Motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className='h-full'
                >
                  <Card className='flex flex-col h-full transition-all duration-300 border border-transparent group hover:border-green-500 hover:shadow-lg'>
                    <Card.Body className='flex flex-col flex-grow p-6 text-center'>
                      {Icon && (
                        <div
                          className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full ${
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
                        {category.name}
                      </h3>
                      <p
                        className={`flex-grow text-sm leading-relaxed ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {category.description}
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <div className='flex flex-wrap justify-center gap-1'>
                        {category.items?.slice(0, 3).map((item) => (
                          <Badge
                            key={item}
                            variant='soft'
                            color='gray'
                            size='sm'
                          >
                            {item}
                          </Badge>
                        ))}
                        {category.items?.length > 3 && (
                          <Badge variant='soft' color='gray' size='sm'>
                            +{category.items.length - 3} lainnya
                          </Badge>
                        )}
                      </div>
                    </Card.Footer>
                  </Card>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default KategoriPage;
