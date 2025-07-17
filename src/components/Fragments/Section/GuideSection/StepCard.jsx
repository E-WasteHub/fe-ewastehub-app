import { ChevronDown, Lightbulb } from 'lucide-react';
import { AnimatePresence, motion as Motion } from 'motion/react';
import useDarkMode from '../../../../hooks/useDarkMode';

const StepCard = ({ step, isActive, onClick }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`
        ml-16 cursor-pointer rounded-2xl p-6 transition-all duration-300
        ${
          isActive
            ? `border-2 border-green-500 shadow-lg ${
                isDarkMode ? 'bg-slate-800' : 'bg-white'
              }`
            : `border hover:bg-white ${
                isDarkMode
                  ? 'border-slate-700 bg-slate-800/50 hover:bg-slate-800'
                  : 'border-gray-200 bg-white/80'
              }`
        }
      `}
      onClick={onClick}
    >
      {/* --- Main Info --- */}
      <div className='flex items-start gap-6'>
        <div className='flex-shrink-0'>
          <div className='relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-lg font-bold text-white shadow-lg'>
            {step.number}
            <div
              className={`absolute -right-2 -bottom-2 rounded-full p-1 shadow-md ${
                isDarkMode ? 'bg-slate-700' : 'bg-white'
              }`}
            >
              <step.Icon size={18} className='text-green-600' />
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <h3
            className={`mb-1 text-xl font-bold ${
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
          <div
            className={`mt-4 flex items-center gap-2 text-sm font-medium ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            <span>{isActive ? 'Tutup Detail' : 'Lihat Detail'}</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isActive ? 'rotate-180' : ''
              }`}
            />
          </div>
        </div>
      </div>

      {/* --- Expanded Content --- */}
      <AnimatePresence>
        {isActive && (
          <Motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: '1.5rem' }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='overflow-hidden'
          >
            <div
              className={`space-y-3 pt-4 border-t ${
                isDarkMode ? 'border-slate-700' : 'border-slate-200'
              }`}
            >
              {step.steps.map((stepItem, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <div className='mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-medium text-white'>
                    {index + 1}
                  </div>
                  <p
                    className={`text-base ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {stepItem}
                  </p>
                </div>
              ))}
            </div>
            <div
              className={`mt-4 flex items-start gap-3 rounded-xl border-l-4 p-4 ${
                isDarkMode
                  ? 'bg-green-900/20 border-green-500'
                  : 'bg-green-50 border-green-500'
              }`}
            >
              <Lightbulb
                size={20}
                className={`mt-0.5 flex-shrink-0 ${
                  isDarkMode ? 'text-green-300' : 'text-green-600'
                }`}
              />
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
                    isDarkMode ? 'text-green-400' : 'text-green-700'
                  }`}
                >
                  {step.tips}
                </span>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StepCard;
