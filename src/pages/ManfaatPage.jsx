import { motion as Motion } from 'motion/react';
import Badge from '../components/Elements/Badge';
import Card from '../components/Elements/Card';
import MainLayout from '../components/Layouts/MainLayout';
import useDarkMode from '../hooks/useDarkMode';
import useDocumentTitle from '../hooks/useDocumentTitle';

const ManfaatPage = () => {
  useDocumentTitle('Manfaat | EwasteHub');

  const { isDarkMode } = useDarkMode();

  const benefits = [
    {
      title: 'Melindungi Lingkungan',
      description:
        'Mengurangi polusi tanah dan air akibat pembuangan e-waste sembarangan',
      icon: '🌍',
      stats: 'Menyelamatkan 2.5 juta ton CO2/tahun',
      color: 'primary',
    },
    {
      title: 'Ekonomi Berkelanjutan',
      description:
        'Mendapatkan reward dan insentif dari setiap kontribusi e-waste',
      icon: '💰',
      stats: 'Rata-rata Rp 50.000 reward/bulan',
      color: 'secondary',
    },
    {
      title: 'Kesehatan Masyarakat',
      description:
        'Mencegah penyebaran zat beracun yang membahayakan kesehatan',
      icon: '🏥',
      stats: 'Melindungi 1 juta jiwa',
      color: 'accent',
    },
    {
      title: 'Inovasi Teknologi',
      description: 'Mendorong pengembangan teknologi hijau dan daur ulang',
      icon: '⚡',
      stats: '100+ inovasi teknologi hijau',
      color: 'secondary',
    },
    {
      title: 'Pemberdayaan Komunitas',
      description:
        'Membentuk komunitas peduli lingkungan yang aktif dan produktif',
      icon: '👥',
      stats: '50.000+ anggota komunitas',
      color: 'accent',
    },
    {
      title: 'Edukasi & Kesadaran',
      description:
        'Meningkatkan pemahaman masyarakat tentang pentingnya pengelolaan e-waste',
      icon: '📚',
      stats: '200.000+ orang teredukasi',
      color: 'primary',
    },
  ];

  const impactStats = [
    { label: 'E-waste Terkumpul', value: '15,420', unit: 'kg', icon: '📱' },
    { label: 'CO2 Diselamatkan', value: '2,500', unit: 'ton', icon: '🌱' },
    { label: 'Pengguna Aktif', value: '25,000', unit: '+', icon: '👨‍👩‍👧‍👦' },
    { label: 'Mitra Kurir', value: '150', unit: '+', icon: '🚚' },
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: isDarkMode
        ? 'from-slate-800/50 to-slate-700/50 border-green-700/50'
        : 'from-slate-100 to-slate-200 border-green-200',
      secondary: isDarkMode
        ? 'from-slate-800/30 to-slate-700/30 border-slate-600'
        : 'from-slate-50 to-slate-100 border-slate-200',
      accent: isDarkMode
        ? 'from-slate-700/40 to-slate-600/40 border-slate-600'
        : 'from-slate-100 to-slate-150 border-slate-300',
    };
    return colors[color] || colors.secondary;
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
          className={`relative py-20 px-4 md:px-8 overflow-hidden ${
            isDarkMode
              ? 'bg-gradient-to-br from-slate-900 to-slate-800'
              : 'bg-gradient-to-br from-slate-50 to-slate-100'
          }`}
        >
          <div className='absolute inset-0 opacity-5'>
            <div className='absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full blur-xl'></div>
            <div className='absolute bottom-20 left-1/4 w-24 h-24 bg-slate-400 rounded-full blur-xl'></div>
          </div>

          <div className='relative max-w-4xl mx-auto text-center'>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant='soft' color='green' size='lg' className='mb-6'>
                🌱 Dampak Positif E-wasteHub
              </Badge>
              <h1
                className={`text-4xl md:text-5xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Manfaat Nyata untuk{' '}
                <span
                  className={isDarkMode ? 'text-green-400' : 'text-green-600'}
                >
                  Masa Depan
                </span>
              </h1>
              <p
                className={`text-xl max-w-2xl mx-auto ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Kontribusi Anda dalam pengelolaan e-waste menciptakan dampak
                positif yang berkelanjutan untuk lingkungan dan masyarakat
              </p>
            </Motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className='py-20 px-4 md:px-8'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <Badge variant='soft' color='green' size='md' className='mb-4'>
                ✨ Manfaat Nyata
              </Badge>
              <h2
                className={`text-3xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                6 Manfaat Utama
              </h2>
              <p
                className={`max-w-2xl mx-auto ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Setiap tindakan kecil Anda memberikan dampak besar bagi
                lingkungan dan komunitas
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {benefits.map((benefit, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className='group'
                >
                  <Card
                    className={`h-full border-2 bg-gradient-to-br ${getColorClasses(
                      benefit.color
                    )} transition-all duration-300 hover:shadow-lg ${
                      isDarkMode
                        ? 'hover:border-green-500 group-hover:shadow-green-800/20'
                        : 'hover:border-green-400 group-hover:shadow-green-200/20'
                    }`}
                  >
                    <Card.Body className='p-6'>
                      <div className='text-4xl mb-4'>{benefit.icon}</div>
                      <h3
                        className={`text-xl font-bold mb-3 transition-colors ${
                          isDarkMode
                            ? 'text-white group-hover:text-green-400'
                            : 'text-slate-900 group-hover:text-green-600'
                        }`}
                      >
                        {benefit.title}
                      </h3>
                      <p
                        className={`mb-4 leading-relaxed ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {benefit.description}
                      </p>
                      <div className='mt-auto'>
                        <Badge variant='soft' color='green' size='sm'>
                          {benefit.stats}
                        </Badge>
                      </div>
                    </Card.Body>
                  </Card>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section
          className={`py-20 px-4 md:px-8 ${
            isDarkMode ? 'bg-slate-800' : 'bg-slate-100'
          }`}
        >
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <Badge variant='soft' color='green' size='md' className='mb-4'>
                📊 Pencapaian Nyata
              </Badge>
              <h2
                className={`text-3xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Dampak yang Telah Dicapai
              </h2>
              <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
                Berkat kontribusi komunitas E-wasteHub
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {impactStats.map((stat, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className='text-center group'
                >
                  <Card
                    className={`p-6 border transition-all duration-300 hover:shadow-lg ${
                      isDarkMode
                        ? 'bg-slate-700 border-slate-600 hover:border-green-500 hover:shadow-green-900/30'
                        : 'bg-white border-slate-200 hover:border-green-400 hover:shadow-green-100/50'
                    }`}
                  >
                    <div className='text-4xl mb-4'>{stat.icon}</div>
                    <div
                      className={`text-3xl font-bold mb-2 ${
                        isDarkMode ? 'text-green-400' : 'text-green-600'
                      }`}
                    >
                      {stat.value}
                      <span className='text-lg'>{stat.unit}</span>
                    </div>
                    <p
                      className={`font-medium ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {stat.label}
                    </p>
                  </Card>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 px-4 md:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-white rounded-2xl p-12 shadow-xl ${
                isDarkMode
                  ? 'bg-gradient-to-r from-green-700 to-green-800'
                  : 'bg-gradient-to-r from-green-600 to-green-700'
              }`}
            >
              <Badge
                variant='outline'
                color='green'
                size='md'
                className='mb-6 text-white border-white/30'
              >
                🚀 Mari Bergabung
              </Badge>
              <h2 className='text-3xl font-bold mb-4'>
                Mulai Kontribusi Anda Hari Ini
              </h2>
              <p
                className={`mb-8 text-lg ${
                  isDarkMode ? 'text-green-200' : 'text-green-100'
                }`}
              >
                Bergabunglah dengan ribuan orang yang telah merasakan manfaat
                nyata dari pengelolaan e-waste yang bertanggung jawab
              </p>
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg ${
                  isDarkMode
                    ? 'bg-white text-green-700 hover:bg-green-100'
                    : 'bg-white text-green-600 hover:bg-green-50'
                }`}
              >
                Daftar Sekarang
              </Motion.button>
            </Motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ManfaatPage;
