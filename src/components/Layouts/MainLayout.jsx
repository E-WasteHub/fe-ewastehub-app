import ScrollToTop from '../Elements/ScrollToTop';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
      <BottomNavbar />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
