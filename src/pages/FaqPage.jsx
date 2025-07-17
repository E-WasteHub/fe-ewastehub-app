import { HelpCircle, Mail, Phone } from 'lucide-react';
import { motion as Motion } from 'motion/react';

import Accordion from '../components/Elements/Accordion';
import Badge from '../components/Elements/Badge';
import Button from '../components/Elements/Button';
import MainLayout from '../components/Layouts/MainLayout';
import { faqData } from '../data/faqData';
import useDarkMode from '../hooks/useDarkMode';
import useDocumentTitle from '../hooks/useDocumentTitle';

const FaqPage = () => {
  useDocumentTitle('FAQ | E-wasteHub');
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
            <HelpCircle className='w-5 h-5 mr-2' />
            Pusat Bantuan
          </Badge>
          <h1
            className={`text-4xl font-bold md:text-5xl ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Pertanyaan yang Sering Diajukan
          </h1>
          <p
            className={`max-w-2xl mx-auto mt-4 text-lg md:text-xl ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Temukan jawaban untuk pertanyaan umum tentang layanan dan proses di
            E-wasteHub.
          </p>
        </div>
      </section>

      {/* --- FAQ Content --- */}
      <section
        className={`px-4 py-16 md:px-8 ${
          isDarkMode ? 'bg-slate-900/50' : 'bg-white'
        }`}
      >
        <div className='max-w-3xl mx-auto'>
          {/* TODO: Ganti dengan data dari API jika sudah tersedia */}
          <div className='space-y-4'>
            {faqData.map((faq, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Accordion title={faq.question}>
                  <p>{faq.answer}</p>
                </Accordion>
              </Motion.div>
            ))}
          </div>

          {/* --- Contact Section --- */}
          <div
            className={`p-8 mt-16 text-center border rounded-lg shadow-lg ${
              isDarkMode
                ? 'bg-slate-800 border-slate-700'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <h3
              className={`text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Tidak Menemukan Jawaban?
            </h3>
            <p
              className={`mt-2 mb-6 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Tim kami siap membantu Anda 24/7.
            </p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <Button
                variant='primary'
                as='a'
                href='mailto:hubungi@ewastehub.com'
              >
                <Mail className='w-4 h-4 mr-2' />
                Hubungi via Email
              </Button>
              <Button
                variant='outline'
                as='a'
                href='https://wa.me/6281234567890'
              >
                <Phone className='w-4 h-4 mr-2' />
                Hubungi via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FaqPage;
