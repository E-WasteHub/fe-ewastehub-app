import { useState } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';

const GuideSection = ({ steps }) => {
  const { isDarkMode } = useDarkMode();
  const [activeStep, setActiveStep] = useState(null);

  const StepTimeline = () => (
    <div className='max-w-4xl mx-auto'>
      {/* Timeline Steps */}
      <div className='relative'>
        {/* Timeline Line */}
        <div
          className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            isDarkMode ? 'bg-slate-700' : 'bg-gray-200'
          }`}
        />

        {/* Steps */}
        <div className='space-y-8'>
          {steps.map((step, index) => (
            <div key={step.id} className='relative'>
              {/* Timeline Dot */}
              <div className='absolute z-10 left-6 top-6'>
                <div
                  className={`w-4 h-4 rounded-full border-4 ${
                    isDarkMode
                      ? 'bg-slate-900 border-green-500'
                      : 'bg-white border-green-500'
                  }`}
                />
              </div>

              {/* Step Card */}
              <div className='ml-16'>
                <div
                  className={`p-6 rounded-2xl cursor-pointer transition-colors duration-200 ${
                    activeStep === index
                      ? isDarkMode
                        ? 'bg-slate-800 border-2 border-green-500'
                        : 'bg-white border-2 border-green-500 shadow-lg'
                      : isDarkMode
                      ? 'bg-slate-800/50 border border-slate-700 hover:bg-slate-800'
                      : 'bg-white/80 border border-gray-200 hover:bg-white'
                  }`}
                  onClick={() =>
                    setActiveStep(activeStep === index ? null : index)
                  }
                >
                  <div className='flex items-start gap-6'>
                    {/* Step Number & Icon */}
                    <div className='flex-shrink-0'>
                      <div className='relative'>
                        <div className='flex items-center justify-center w-16 h-16 text-lg font-bold text-white shadow-lg bg-gradient-to-r from-green-500 to-green-600 rounded-2xl'>
                          {step.number}
                        </div>
                        <div className='absolute text-2xl -bottom-2 -right-2'>
                          {step.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-start justify-between mb-3'>
                        <div>
                          <h3
                            className={`text-xl font-bold mb-2 ${
                              isDarkMode ? 'text-white' : 'text-slate-900'
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`text-base ${
                              isDarkMode ? 'text-slate-300' : 'text-slate-600'
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Expand Button */}
                      <div className='flex items-center gap-2 mt-4'>
                        <span
                          className={`text-sm font-medium ${
                            isDarkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          {activeStep === index
                            ? 'Tutup Detail'
                            : 'Lihat Detail'}
                        </span>
                        <div
                          className={`w-5 h-5 flex items-center justify-center transition-transform duration-200 ${
                            isDarkMode ? 'text-slate-400' : 'text-slate-500'
                          } ${activeStep === index ? 'rotate-180' : ''}`}
                        >
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='currentColor'
                          >
                            <path d='M4.427 9.573l3.396-3.396a.25.25 0 01.354 0l3.396 3.396a.25.25 0 01-.177.427H4.604a.25.25 0 01-.177-.427z' />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {activeStep === index && (
                  <div
                    className={`mt-4 p-6 rounded-2xl ${
                      isDarkMode
                        ? 'bg-slate-900/50 border border-slate-700'
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {/* Detailed Steps */}
                    <div className='mb-6'>
                      <h4
                        className={`font-semibold text-lg mb-4 ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        Langkah Detail:
                      </h4>
                      <div className='space-y-3'>
                        {step.steps.map((stepItem, stepIndex) => (
                          <div
                            key={stepIndex}
                            className='flex items-start gap-3'
                          >
                            <div className='flex-shrink-0 w-6 h-6 rounded-full bg-green-600 text-white text-sm font-medium flex items-center justify-center mt-0.5'>
                              {stepIndex + 1}
                            </div>
                            <p
                              className={`text-base leading-relaxed ${
                                isDarkMode ? 'text-slate-300' : 'text-slate-700'
                              }`}
                            >
                              {stepItem}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tips */}
                    <div
                      className={`p-4 rounded-xl border-l-4 border-green-500 ${
                        isDarkMode
                          ? 'bg-green-900/20 border-green-500'
                          : 'bg-green-50 border-green-500'
                      }`}
                    >
                      <div className='flex items-start gap-3'>
                        <div className='text-xl'>💡</div>
                        <div>
                          <span
                            className={`font-semibold ${
                              isDarkMode ? 'text-green-300' : 'text-green-800'
                            }`}
                          >
                            Tips:{' '}
                          </span>
                          <span
                            className={`${
                              isDarkMode ? 'text-green-200' : 'text-green-700'
                            }`}
                          >
                            {step.tips}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completion Summary */}
      <div
        className={`mt-12 p-6 rounded-2xl text-center ${
          isDarkMode
            ? 'bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-slate-700'
            : 'bg-gradient-to-r from-green-50 to-blue-50 border border-gray-200'
        }`}
      >
        <div className='mb-3 text-3xl'>🎉</div>
        <h3
          className={`text-xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Selamat! Anda Siap Memulai
        </h3>
        <p
          className={`text-base ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Dengan mengikuti 5 langkah sederhana ini, Anda sudah siap
          berkontribusi untuk lingkungan yang lebih hijau
        </p>
      </div>
    </div>
  );

  return (
    <section className='px-4 pb-16'>
      <StepTimeline />
    </section>
  );
};

export default GuideSection;
