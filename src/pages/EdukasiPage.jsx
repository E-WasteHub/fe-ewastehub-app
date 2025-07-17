import { BookOpen, Zap } from 'lucide-react';
import { motion as Motion } from 'motion/react';
import { Link } from 'react-router-dom';

import Badge from '../components/Elements/Badge';
import Card from '../components/Elements/Card';
import MainLayout from '../components/Layouts/MainLayout';
import { educationTopics } from '../data/edukasiData';
import useDarkMode from '../hooks/useDarkMode';
import useDocumentTitle from '../hooks/useDocumentTitle';

const EdukasiPage = () => {
  useDocumentTitle('Edukasi | E-wasteHub');
  const { isDarkMode } = useDarkMode();

  return (
    <MainLayout>
      {/* --- Hero Section --- */}
      <section
        className={`px-4 py-20 text-center md:px-8 ${
          isDarkMode ? 'bg-slate-900' : 'bg-white'
        }`}
      >
        <div className='max-w-4xl mx-auto'>
          <Badge variant='soft' color='green' size='lg' className='mb-6'>
            <BookOpen className='w-5 h-5 mr-2' />
            Pusat Edukasi E-Waste
          </Badge>
          <h1
            className={`text-4xl font-bold md:text-5xl ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Tingkatkan Pengetahuan Anda
          </h1>
          <p
            className={`max-w-2xl mx-auto mt-4 text-lg md:text-xl ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Jelajahi berbagai topik untuk memahami pentingnya pengelolaan sampah
            elektronik yang bertanggung jawab.
          </p>
        </div>
      </section>

      {/* --- Content Section --- */}
      <section
        className={`px-4 py-16 md:px-8 ${
          isDarkMode ? 'bg-slate-900/50' : 'bg-white'
        }`}
      >
        <div className='max-w-5xl mx-auto'>
          {/* TODO: Ganti dengan data dari API jika sudah tersedia */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {educationTopics.map((topic, index) => {
              const { Icon } = topic; // Destructure the Icon component
              return (
                <Motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className='h-full'
                >
                  <Link to={`/edukasi/${topic.id}`} className='h-full'>
                    <Card className='flex flex-col h-full transition-all duration-300 border border-transparent cursor-pointer group hover:border-green-500 hover:shadow-lg'>
                      <Card.Body className='flex items-start flex-grow gap-4 p-6'>
                        {Icon && (
                          <div
                            className={`flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 rounded-lg ${
                              isDarkMode ? 'bg-green-900/50' : 'bg-green-100'
                            }`}
                          >
                            <Icon
                              className={`w-6 h-6 ${
                                isDarkMode ? 'text-green-400' : 'text-green-600'
                              }`}
                            />
                          </div>
                        )}
                        <div className='flex-1'>
                          <h3
                            className={`mb-1 text-lg font-semibold transition-colors group-hover:text-green-600 ${
                              isDarkMode ? 'text-white' : 'text-slate-900'
                            }`}
                          >
                            {topic.title}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed ${
                              isDarkMode ? 'text-slate-400' : 'text-slate-600'
                            }`}
                          >
                            {topic.description}
                          </p>
                        </div>
                      </Card.Body>
                      <Card.Footer className='flex items-center justify-between'>
                        <Badge variant='soft' color='gray' size='sm'>
                          {topic.category}
                        </Badge>
                        <span
                          className={`text-sm font-medium transition-opacity opacity-0 group-hover:opacity-100 ${
                            isDarkMode ? 'text-green-400' : 'text-green-600'
                          }`}
                        >
                          Baca selengkapnya →
                        </span>
                      </Card.Footer>
                    </Card>
                  </Link>
                </Motion.div>
              );
            })}
          </div>

          {/* --- Coming Soon Notice --- */}
          <div className='mt-16 text-center'>
            <Badge variant='outline' color='gray' size='lg'>
              <Zap className='w-4 h-4 mr-2' />
              Artikel baru akan segera hadir!
            </Badge>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default EdukasiPage;
