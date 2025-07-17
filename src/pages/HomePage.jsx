import FAQSection from '../components/Fragments/Section/FAQSection';
import HeroSection from '../components/Fragments/Section/HeroSection';
import KategoriSection from '../components/Fragments/Section/KategoriSection';
import ManfaatSection from '../components/Fragments/Section/ManfaatSection';
import MainLayout from '../components/Layouts/MainLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';

const HomePage = () => {
  useDocumentTitle('EwasteHub App');

  return (
    <MainLayout>
      <HeroSection />
      <KategoriSection />
      <ManfaatSection />
      <FAQSection id='faq' />
    </MainLayout>
  );
};

export default HomePage;
