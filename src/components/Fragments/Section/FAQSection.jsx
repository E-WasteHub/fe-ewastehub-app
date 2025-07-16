import { motion as Motion } from 'motion/react';
import { faqData } from '../../../data/faqData';
import useDarkMode from '../../../hooks/useDarkMode';
import Accordion from '../../Elements/Accordion';
import Button from '../../Elements/Button';

const FAQSection = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      className={`py-16 px-4 md:px-8 ${
        isDarkMode ? 'bg-slate-800' : 'bg-slate-50'
      }`}
    >
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Pertanyaan yang Sering Diajukan
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Temukan jawaban untuk pertanyaan umum seputar layanan E-wasteHub dan
            pengelolaan sampah elektronik
          </p>
        </div>

        {/* FAQ List */}
        <div className='space-y-4'>
          {faqData && faqData.length > 0 ? (
            faqData.slice(0, 6).map((faq, index) => (
              <Motion.div
                key={faq.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Accordion title={faq.question}>
                  <p
                    className={`leading-relaxed ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {faq.answer}
                  </p>
                </Accordion>
              </Motion.div>
            ))
          ) : (
            <div className='text-center py-8'>
              <p
                className={`text-lg ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Data FAQ sedang dimuat...
              </p>
            </div>
          )}
        </div>
        {/* Button lihat semua Faq */}
        <div className='text-end mt-8'>
          <Button variant='primary' className='text-green-500'>
            Lihat Semua Faq
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
