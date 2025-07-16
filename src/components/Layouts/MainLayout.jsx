// components/Layouts/MainLayout.jsx
import useScrollReset from '../../hooks/useScrollReset';
import ScrollToTop from '../Elements/ScrollToTop';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  // Automatically reset scroll position on route change
  useScrollReset();

  return (
    <>
      <Navbar />
      <main className='min-h-screen pb-20 md:pb-0'>{children}</main>
      <Footer />
      <BottomNavbar />
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
