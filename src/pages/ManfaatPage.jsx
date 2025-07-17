import { Award, BarChart3, Rocket } from 'lucide-react';
import { motion as Motion } from 'motion/react';
import { Link } from 'react-router-dom';

import Badge from '../components/Elements/Badge';
import Button from '../components/Elements/Button';
import MainLayout from '../components/Layouts/MainLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
// DIUBAH: Menggunakan nama variabel dan file yang benar
import { impactStats, manfaatData } from '../data/manfaatData';

const ManfaatPage = () => {
  useDocumentTitle('Manfaat | E-wasteHub');

  return (
    <MainLayout>
      {/* --- Hero Section --- */}
      <section className='px-4 py-20 text-center bg-slate-50 dark:bg-slate-900 md:px-8'>
        <div className='max-w-4xl mx-auto'>
          <Badge variant='soft' color='green' size='lg' className='mb-6'>
            <Award className='w-5 h-5 mr-2' />
            Dampak Positif E-wasteHub
          </Badge>
          <h1 className='text-4xl font-bold text-slate-900 dark:text-white md:text-5xl'>
            Manfaat Nyata untuk Masa Depan
          </h1>
          <p className='max-w-3xl mx-auto mt-4 text-lg text-slate-600 dark:text-slate-300 md:text-xl'>
            Kontribusi Anda dalam pengelolaan e-waste menciptakan dampak positif
            yang berkelanjutan untuk lingkungan dan masyarakat.
          </p>
        </div>
      </section>

      {/* --- Benefits Grid --- */}
      <section className='px-4 py-16 bg-white dark:bg-slate-900/50 md:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {/* DIUBAH: Menggunakan manfaatData.map */}
            {manfaatData.map((benefit, index) => {
              const { Icon } = benefit;
              return (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className='p-6 text-center'>
                    {Icon && (
                      <div className='flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-slate-100 dark:bg-slate-800'>
                        <Icon className='w-8 h-8 text-green-600 dark:text-green-400' />
                      </div>
                    )}
                    <h3 className='mb-2 text-xl font-bold text-slate-900 dark:text-white'>
                      {benefit.title}
                    </h3>
                    <p className='text-base leading-relaxed text-slate-600 dark:text-slate-400'>
                      {benefit.description}
                    </p>
                  </div>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- Impact Statistics --- */}
      <section className='px-4 py-16 bg-slate-50 dark:bg-slate-800 md:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='mb-12 text-center'>
            <Badge variant='soft' color='green' size='md' className='mb-4'>
              <BarChart3 className='w-4 h-4 mr-2' />
              Pencapaian Nyata
            </Badge>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white'>
              Dampak yang Telah Dicapai
            </h2>
            <p className='mt-2 text-slate-600 dark:text-slate-400'>
              Berkat kontribusi luar biasa dari komunitas E-wasteHub.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4'>
            {impactStats.map((stat, index) => {
              const { Icon } = stat;
              return (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className='p-6 transition-all duration-300 bg-white border rounded-lg shadow-sm border-slate-200 dark:bg-slate-700 dark:border-slate-600'
                >
                  {Icon && (
                    <Icon className='w-8 h-8 mx-auto mb-3 text-green-600 dark:text-green-400' />
                  )}
                  <p className='text-3xl font-bold text-slate-900 dark:text-white'>
                    {stat.value}
                    <span className='ml-1 text-lg font-medium'>
                      {stat.unit}
                    </span>
                  </p>
                  <p className='font-medium text-slate-600 dark:text-slate-300'>
                    {stat.label}
                  </p>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className='px-4 py-20'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='p-12 text-white rounded-2xl shadow-xl bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800'>
            <Badge
              variant='outline'
              color='gray'
              size='md'
              className='mb-6 text-white border-white/30'
            >
              <Rocket className='w-4 h-4 mr-2' />
              Mari Bergabung
            </Badge>
            <h2 className='text-3xl font-bold'>
              Mulai Kontribusi Anda Hari Ini
            </h2>
            <p className='my-4 text-lg text-green-100 dark:text-green-200'>
              Jadilah bagian dari solusi untuk planet yang lebih sehat.
            </p>
            <Link to='/register'>
              <Button
                variant='default'
                className='px-8 py-3 mt-4 text-base font-bold text-green-700 bg-white hover:bg-green-50'
              >
                Daftar Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ManfaatPage;
