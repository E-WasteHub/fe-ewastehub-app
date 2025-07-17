import { useState } from 'react';
import { panduanData } from '../../../../data/panduanData'; // Impor data yang benar
import useDarkMode from '../../../../hooks/useDarkMode';
import StepCard from './StepCard';

const GuideSection = () => {
  const { isDarkMode } = useDarkMode();
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section className='px-4 py-16'>
      <div className='relative mx-auto max-w-4xl'>
        {/* Timeline Line */}
        <div
          className={`absolute top-8 left-8 bottom-8 w-0.5 ${
            isDarkMode ? 'bg-slate-700' : 'bg-gray-200'
          }`}
        />

        <div className='space-y-8'>
          {panduanData.map((step, index) => (
            <div key={step.id} className='relative'>
              {/* Timeline Dot */}
              <div
                className={`absolute top-8 left-6 z-10 flex h-5 w-5 items-center justify-center rounded-full ring-8 ${
                  isDarkMode
                    ? 'bg-slate-800 ring-slate-800'
                    : 'bg-white ring-white'
                }`}
              >
                <div className='h-3 w-3 rounded-full bg-green-500' />
              </div>

              <StepCard
                step={step}
                isActive={activeStep === index}
                onClick={() => handleStepClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
