// DIUBAH: Menggunakan nama ikon yang valid dari Lucide
import {
  Battery, // Mengganti 'Lamp'
  Gamepad2,
  LampDesk,
  Laptop,
  Smartphone,
  Tv,
} from 'lucide-react';

export const kategoriData = [
  {
    id: 1,
    name: 'Perangkat Seluler',
    Icon: Smartphone,
    description:
      'Smartphone, tablet, power bank, dan aksesori seluler lainnya.',
    items: ['iPhone', 'Samsung Galaxy', 'iPad', 'Xiaomi'],
    points: 150,
    category: 'Kecil',
  },
  {
    id: 2,
    name: 'Komputer & Laptop',
    Icon: Laptop,
    description: 'Laptop, PC, monitor, keyboard, mouse, dan komponen terkait.',
    items: ['MacBook', 'Dell XPS', 'Monitor LG', 'Logitech MX'],
    points: 250,
    category: 'Sedang',
  },
  {
    id: 3,
    name: 'Televisi & Monitor',
    Icon: Tv,
    description:
      'TV tabung, LED/LCD TV, monitor komputer, dan layar elektronik lainnya.',
    items: ['TV LED', 'TV Tabung', 'Monitor PC'],
    points: 300,
    category: 'Besar',
  },
  {
    id: 4,
    name: 'Baterai & Pengisi Daya',
    Icon: Battery,
    description: 'Baterai bekas, aki, power bank, dan adaptor pengisi daya.',
    items: ['Baterai AA/AAA', 'Baterai HP', 'Aki Motor'],
    points: 50,
    category: 'Kecil',
  },
  {
    id: 5,
    name: 'Lampu & Pencahayaan',
    Icon: LampDesk, // DIUBAH ke nama yang valid
    description:
      'Lampu neon, LED, bohlam, dan berbagai jenis lampu elektronik lainnya.',
    items: ['Lampu Neon', 'Bohlam LED', 'Lampu Meja'],
    points: 75,
    category: 'Kecil',
  },
  {
    id: 6,
    name: 'Hiburan & Mainan', // Sedikit penyesuaian nama untuk mencerminkan ikon
    Icon: Gamepad2, // DIUBAH ke nama yang valid
    description:
      'Mainan elektronik, konsol game, remote control, dan perangkat hiburan lainnya.',
    items: ['Konsol PS4', 'Mainan RC', 'Drone'],
    points: 200,
    category: 'Sedang',
  },
];
