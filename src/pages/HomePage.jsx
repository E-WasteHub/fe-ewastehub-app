// pages/HomePage.jsx
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
      {/* Hero Section */}
      <HeroSection />

      {/* E-waste Categories Section */}
      <KategoriSection />

      {/* Benefits Section */}
      <ManfaatSection />

      {/* FAQ Section */}
      <div id='faq'>
        <FAQSection />
      </div>
    </MainLayout>
  );
};

export default HomePage;
