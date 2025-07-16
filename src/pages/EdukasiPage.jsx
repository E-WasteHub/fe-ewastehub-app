import { motion as Motion } from 'motion/react';
import Badge from '../components/Elements/Badge';
import Card from '../components/Elements/Card';
import MainLayout from '../components/Layouts/MainLayout';
import useDarkMode from '../hooks/useDarkMode';
import useDocumentTitle from '../hooks/useDocumentTitle';

const EdukasiPage = () => {
  useDocumentTitle('Edukasi | EwasteHub');

  const { isDarkMode } = useDarkMode();

  const educationTopics = [
    {
      title: 'Apa itu E-Waste?',
      description:
        'Pelajari tentang jenis-jenis sampah elektronik dan dampaknya terhadap lingkungan',
      icon: '🔌',
      category: 'Dasar',
    },
    {
      title: 'Cara Memilah E-Waste',
      description:
        'Panduan praktis untuk memisahkan dan mengkategorikan sampah elektronik',
      icon: '♻️',
      category: 'Tutorial',
    },
    {
      title: 'Daur Ulang Berkelanjutan',
      description:
        'Memahami proses daur ulang dan manfaatnya untuk kehidupan berkelanjutan',
      icon: '🌱',
      category: 'Lingkungan',
    },
    {
      title: 'Teknologi Hijau',
      description:
        'Eksplorasi teknologi ramah lingkungan dalam pengelolaan e-waste',
      icon: '🌿',
      category: 'Teknologi',
    },
  ];

  return (
    <MainLayout>
      <div
        className={`min-h-screen ${
          isDarkMode ? 'bg-slate-900' : 'bg-slate-50'
        }`}
      >
        {/* Hero Section - Simplified colors */}
        <section
          className={`py-20 px-4 md:px-8 bg-gradient-to-br ${
            isDarkMode
              ? 'from-slate-900 to-slate-800'
              : 'from-slate-50 to-slate-100'
          }`}
        >
          <div className='max-w-4xl mx-auto text-center'>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant='soft' color='green' size='lg' className='mb-6'>
                📚 Pusat Edukasi E-Waste
              </Badge>
              <h1
                className={`text-4xl md:text-5xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Pusat Edukasi{' '}
                <span className='text-green-600'>Sampah Elektornik</span>
              </h1>
              <p
                className={`text-xl mb-8 max-w-2xl mx-auto ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Tingkatkan pemahaman Anda tentang pengelolaan sampah elektronik
                yang bertanggung jawab
              </p>
            </Motion.div>
          </div>
        </section>

        {/* Content Section - Simplified colors */}
        <section className='px-4 py-16 md:px-8'>
          <div className='max-w-6xl mx-auto'>
            <div className='mb-12 text-center'>
              <h2
                className={`text-3xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Topik Pembelajaran
              </h2>
              <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
                Pelajari berbagai aspek pengelolaan e-waste dari dasar hingga
                mahir
              </p>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {educationTopics.map((topic, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className='cursor-pointer group'
                >
                  <Card
                    className={`h-full border hover:border-green-500 hover:shadow-md transition-all duration-300 ${
                      isDarkMode ? 'border-slate-700' : 'border-slate-200'
                    }`}
                  >
                    <Card.Body className='p-6'>
                      <div className='flex items-start space-x-4'>
                        <div className='text-4xl'>{topic.icon}</div>
                        <div className='flex-1'>
                          <div className='flex items-center justify-between mb-2'>
                            <h3
                              className={`text-xl font-semibold group-hover:text-green-600 transition-colors ${
                                isDarkMode
                                  ? 'text-white group-hover:text-green-400'
                                  : 'text-slate-900'
                              }`}
                            >
                              {topic.title}
                            </h3>
                            <Badge
                              variant='soft'
                              size='xs'
                              color='green'
                              shape='pill'
                            >
                              {topic.category}
                            </Badge>
                          </div>
                          <p
                            className={`leading-relaxed ${
                              isDarkMode ? 'text-slate-300' : 'text-slate-600'
                            }`}
                          >
                            {topic.description}
                          </p>
                          <div
                            className={`mt-4 font-medium text-sm group-hover:underline ${
                              isDarkMode ? 'text-green-400' : 'text-green-600'
                            }`}
                          >
                            Pelajari lebih lanjut →
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Motion.div>
              ))}
            </div>

            {/* Coming Soon Notice - Simplified colors */}
            <div className='mt-16 text-center'>
              <Badge variant='outline' size='lg' color='green' icon='⚡'>
                Konten pembelajaran sedang dalam pengembangan
              </Badge>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default EdukasiPage;
