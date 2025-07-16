// components/Fragments/HeroSection.jsx
import { motion as Motion } from 'motion/react';
import useDarkMode from '../../../hooks/useDarkMode';
import Badge from '../../Elements/Badge';
import Button from '../../Elements/Button';

const HeroSection = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      className={`min-h-screen flex items-center px-4 md:px-8 relative overflow-hidden ${
        isDarkMode
          ? 'bg-slate-900'
          : 'bg-gradient-to-br from-slate-100 via-green-100 to-blue-100'
      }`}
    >
      {/* Background Decorative Elements */}
      <div
        className={`absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 ${
          isDarkMode ? 'bg-green-400' : 'bg-green-400'
        } -translate-y-1/2 translate-x-1/2`}
      />

      <div
        className={`absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 ${
          isDarkMode ? 'bg-blue-400' : 'bg-blue-400'
        } translate-y-1/2 -translate-x-1/2`}
      />

      <div className='flex flex-col-reverse items-center w-full gap-8 py-8 mx-auto max-w-7xl md:flex-row lg:gap-16'>
        {/* Left Content */}
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex-1 text-center md:text-left'
        >
          {/* Single Badge */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className='flex justify-center mb-6 md:justify-start'
          >
            <Badge
              variant='soft'
              color='green'
              size='md'
              shape='pill'
              className='font-medium'
            >
              🌱 Solusi Ramah Lingkungan
            </Badge>
          </Motion.div>

          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Antar Jemput Sampah Elektronik
            <span
              className={`block mt-2 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent'
              }`}
            >
              Mudah, Cepat, dan Ramah Lingkungan
            </span>
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`mt-6 max-w-lg text-lg md:text-xl leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Ubah sampah elektronik menjadi nilai tambah. Lindungi lingkungan dan
            dapatkan insentif dari setiap kontribusi Anda.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className='flex flex-col justify-center gap-4 mt-10 md:flex-row md:gap-4 md:justify-start'
          >
            <Motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant='primary'
                className='w-full px-8 py-4 text-lg font-semibold shadow-lg md:w-auto'
              >
                Mulai Sekarang
              </Button>
            </Motion.div>

            <Motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant='outline'
                className={`w-full md:w-auto border px-6 py-4 text-lg ${
                  isDarkMode ? 'border-slate-600' : 'border-slate-300'
                }`}
              >
                Pelajari Lebih Lanjut
              </Button>
            </Motion.div>
          </Motion.div>
        </Motion.div>

        {/* Right Visual Section - Consistent Design */}
        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex justify-center flex-1 w-full'
        >
          <div className='relative w-full max-w-sm md:max-w-lg'>
            {/* Main Image Container */}
            <div className='relative w-full h-[280px] sm:h-[320px] md:h-[450px]'>
              {/* Consistent Background Circle */}
              <div
                className={`absolute inset-0 rounded-full scale-105 ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-green-900/20 to-green-800/20'
                    : 'bg-gradient-to-br from-green-900/15 to-green-800/15'
                }`}
              />

              {/* Additional Decorative Elements */}
              <div
                className={`absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-16 md:h-16 rounded-full ${
                  isDarkMode ? 'bg-green-400/10' : 'bg-green-400/20'
                }`}
              />
              <div
                className={`absolute bottom-4 left-4 md:bottom-8 md:left-8 w-6 h-6 md:w-12 md:h-12 rounded-full ${
                  isDarkMode ? 'bg-blue-400/10' : 'bg-blue-400/20'
                }`}
              />

              {/* Main Image with Animation */}
              <Motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`relative w-full h-full rounded-2xl flex items-center justify-center overflow-hidden border ${
                  isDarkMode
                    ? 'bg-slate-800/30 backdrop-blur-sm border-slate-700/30'
                    : 'bg-white/40 backdrop-blur-sm border-slate-200/50 shadow-xl'
                }`}
              >
                <img
                  src={
                    isDarkMode
                      ? '/src/assets/img/ewasteDark.png'
                      : '/src/assets/img/ewasteLight.png'
                  }
                  alt='E-wasteHub'
                  className='object-contain w-4/5 h-4/5 filter drop-shadow-lg'
                />
              </Motion.div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
