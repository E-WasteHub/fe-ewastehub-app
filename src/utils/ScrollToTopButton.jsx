import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Komponen ini secara otomatis akan menggulir halaman ke atas
 * setiap kali rute atau halaman berubah.
 */
const ScrollToTopButton = () => {
  // Dapatkan informasi `pathname` dari URL saat ini
  const { pathname } = useLocation();

  // Gunakan useEffect untuk menjalankan sebuah aksi ketika `pathname` berubah
  useEffect(() => {
    // Perintahkan window untuk scroll ke posisi paling atas (x: 0, y: 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Array dependensi ini memastikan efek hanya berjalan saat URL berubah

  // Komponen ini tidak me-render apapun ke layar
  return null;
};

export default ScrollToTopButton;
