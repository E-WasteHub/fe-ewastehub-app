import {
  BookOpen,
  Box,
  Cpu,
  Globe,
  HeartPulse,
  Leaf,
  Recycle,
  Truck,
  Users,
  UsersRound,
} from 'lucide-react';

// --- Data for ManfaatPage ---

export const manfaatData = [
  {
    title: 'Melindungi Lingkungan',
    description:
      'Mengurangi polusi tanah dan air akibat pembuangan e-waste sembarangan.',
    Icon: Globe,
    stats: 'Menyelamatkan 2.5 juta ton CO2/tahun',
  },
  {
    title: 'Ekonomi Berkelanjutan',
    description:
      'Mendapatkan reward dan insentif dari setiap kontribusi e-waste.',
    Icon: Recycle,
    stats: 'Rata-rata Rp 50.000 reward/bulan',
  },
  {
    title: 'Kesehatan Masyarakat',
    description: 'Mencegah penyebaran zat beracun yang membahayakan kesehatan.',
    Icon: HeartPulse,
    stats: 'Melindungi 1 juta jiwa',
  },
  {
    title: 'Inovasi Teknologi',
    description: 'Mendorong pengembangan teknologi hijau dan daur ulang.',
    Icon: Cpu,
    stats: '100+ inovasi teknologi hijau',
  },
  {
    title: 'Pemberdayaan Komunitas',
    description:
      'Membentuk komunitas peduli lingkungan yang aktif dan produktif.',
    Icon: Users,
    stats: '50.000+ anggota komunitas',
  },
  {
    title: 'Edukasi & Kesadaran',
    description:
      'Meningkatkan pemahaman masyarakat tentang pentingnya pengelolaan e-waste.',
    Icon: BookOpen,
    stats: '200.000+ orang teredukasi',
  },
];

export const impactStats = [
  { label: 'E-waste Terkumpul', value: '15,420', unit: 'kg', Icon: Box },
  { label: 'CO2 Diselamatkan', value: '2,500', unit: 'ton', Icon: Leaf },
  { label: 'Pengguna Aktif', value: '25,000', unit: '+', Icon: UsersRound },
  { label: 'Mitra Kurir', value: '150', unit: '+', Icon: Truck },
];

// --- Existing Data (keep this) ---

export const manfaatForSection = [
  {
    id: 1,
    title: 'Pengurangan Limbah Elektronik',
    description:
      'Dengan mengelola e-waste secara bertanggung jawab, kita dapat mengurangi jumlah limbah elektronik yang mencemari lingkungan.',
    Icon: Globe,
  },
  {
    id: 2,
    title: 'Peningkatan Kesadaran Lingkungan',
    description:
      'Program ini membantu meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan e-waste yang baik.',
    Icon: Leaf,
  },
  {
    id: 3,
    title: 'Insentif dan Reward',
    description:
      'Pengguna dapat memperoleh reward menarik setiap kali mereka mendaur ulang e-waste melalui platform kami.',
    Icon: Recycle,
  },
  {
    id: 4,
    title: 'Dampak Sosial Positif',
    description:
      'Setiap kontribusi e-waste membantu menciptakan lapangan kerja dan mendukung komunitas lokal.',
    Icon: Users,
  },
  {
    id: 5,
    title: 'Inovasi Teknologi Hijau',
    description:
      'Mendorong pengembangan teknologi ramah lingkungan yang dapat mengurangi dampak negatif e-waste.',
    Icon: Cpu,
  },
  {
    id: 6,
    title: 'Akses Mudah dan Praktis',
    description:
      'Platform kami menyediakan cara mudah untuk mendaur ulang e-waste tanpa repot.',
    Icon: Box,
  },
  {
    id: 7,
    title: 'Edukasi dan Informasi',
    description:
      'Memberikan informasi dan edukasi tentang cara mengelola e-waste dengan benar.',
    Icon: BookOpen,
  },
  {
    id: 8,
    title: 'Komunitas Peduli Lingkungan',
    description:
      'Bergabung dengan komunitas yang peduli terhadap lingkungan dan berkontribusi pada perubahan positif.',
    Icon: UsersRound,
  },
];
