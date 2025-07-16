import { motion as Motion } from 'motion/react';
import Accordion from '../components/Elements/Accordion';
import Badge from '../components/Elements/Badge';
import MainLayout from '../components/Layouts/MainLayout';
import useDarkMode from '../hooks/useDarkMode';
import useDocumentTitle from '../hooks/useDocumentTitle';

const FaqPage = () => {
  const { isDarkMode } = useDarkMode();
  useDocumentTitle('FAQ | EwasteHub');

  const faqData = [
    {
      question: 'Apa itu E-wasteHub?',
      answer:
        'E-wasteHub adalah platform digital yang memudahkan masyarakat untuk mengelola sampah elektronik dengan cara yang bertanggung jawab dan ramah lingkungan. Kami menghubungkan pengguna dengan sistem pengumpulan, pemilahan, dan daur ulang e-waste.',
    },
    {
      question: 'Jenis e-waste apa saja yang diterima?',
      answer:
        'Kami menerima berbagai jenis sampah elektronik seperti smartphone, laptop, komputer, TV, peralatan dapur elektronik, baterai, kabel, dan komponen elektronik lainnya. Setiap jenis memiliki prosedur penanganan yang berbeda.',
    },
    {
      question: 'Bagaimana cara kerja sistem poin reward?',
      answer:
        'Setiap kali Anda menyerahkan e-waste, Anda akan mendapatkan poin berdasarkan jenis dan kondisi barang. Poin ini dapat ditukarkan dengan berbagai benefit seperti voucher, produk ramah lingkungan, atau donasi untuk program lingkungan.',
    },
    {
      question: 'Apakah layanan ini gratis?',
      answer:
        'Ya, layanan pengumpulan dan pemrosesan e-waste melalui E-wasteHub sepenuhnya gratis. Bahkan, Anda akan mendapatkan reward dari setiap kontribusi e-waste yang diserahkan.',
    },
    {
      question: 'Bagaimana cara menjadwalkan pengambilan e-waste?',
      answer:
        'Anda dapat menjadwalkan pengambilan melalui aplikasi dengan memilih tanggal dan waktu yang sesuai. Tim kurir kami akan datang ke lokasi Anda untuk mengambil e-waste yang telah didaftarkan.',
    },
    {
      question: 'Apakah data pribadi di perangkat akan aman?',
      answer:
        'Keamanan data adalah prioritas utama kami. Kami memiliki prosedur standar untuk menghapus semua data pribadi dari perangkat elektronik sebelum proses daur ulang. Kami juga menyediakan panduan untuk menghapus data sendiri sebelum penyerahan.',
    },
    {
      question: 'Bagaimana proses daur ulang e-waste dilakukan?',
      answer:
        'E-waste yang terkumpul akan dipilah berdasarkan jenis dan kondisi. Komponen yang masih baik akan digunakan kembali, sedangkan material seperti logam mulia akan diextraksi dengan teknologi ramah lingkungan. Seluruh proses mengikuti standar internasional.',
    },
    {
      question: 'Bisakah saya melacak status e-waste yang telah diserahkan?',
      answer:
        'Ya, sistem kami menyediakan fitur tracking real-time. Anda dapat melihat status pengambilan, pemrosesan, dan dampak lingkungan yang telah Anda berikan melalui dashboard akun Anda.',
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
              <div className='flex justify-center mb-4'>
                <Badge
                  variant='soft'
                  color='green'
                  size='md'
                  shape='pill'
                  icon={<span>❓</span>}
                >
                  Pusat Bantuan
                </Badge>
              </div>
              <h1
                className={`text-4xl md:text-5xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                } mb-6`}
              >
                Pertanyaan yang{' '}
                <span className='text-green-600'>Sering Diajukan</span>
              </h1>
              <p
                className={`text-xl ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                } mb-8 max-w-2xl mx-auto`}
              >
                Temukan jawaban untuk pertanyaan umum tentang layanan E-wasteHub
              </p>
            </Motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className='px-4 py-16 md:px-8'>
          <div className='max-w-4xl mx-auto'>
            <div className='space-y-4'>
              {faqData.map((faq, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Accordion title={faq.question}>
                    <p
                      className={`${
                        isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      } leading-relaxed`}
                    >
                      {faq.answer}
                    </p>
                  </Accordion>
                </Motion.div>
              ))}
            </div>

            {/* Contact Section - Simplified colors */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className={`mt-16 text-center p-8 ${
                isDarkMode
                  ? 'bg-slate-800 border-slate-700'
                  : 'bg-white border-slate-200'
              } rounded-lg border shadow-lg`}
            >
              <h3
                className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                } mb-4`}
              >
                Tidak Menemukan Jawaban?
              </h3>
              <p
                className={`${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                } mb-6`}
              >
                Tim customer service kami siap membantu Anda 24/7
              </p>
              <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                <button
                  className={`inline-flex items-center px-6 py-3 ${
                    isDarkMode
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-green-600 hover:bg-green-700'
                  } text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-102`}
                >
                  📧 hubungi@ewastehub.com
                </button>
                <button
                  className={`inline-flex items-center px-6 py-3 ${
                    isDarkMode
                      ? 'bg-slate-700 hover:bg-slate-600'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  } font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-102`}
                >
                  📱 +62 812 3456 7890
                </button>
              </div>
            </Motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default FaqPage;
