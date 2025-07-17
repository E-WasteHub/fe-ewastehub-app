import { Cpu, Plug, Recycle, Sparkles } from 'lucide-react';

export const educationTopics = [
  {
    id: 'apa-itu-e-waste',
    title: 'Apa itu E-Waste?',
    description:
      'Pelajari tentang jenis-jenis sampah elektronik dan dampaknya terhadap lingkungan.',
    Icon: Plug, // Replaced '🔌'
    category: 'Dasar',
  },
  {
    id: 'cara-memilah',
    title: 'Cara Memilah E-Waste',
    description:
      'Panduan praktis untuk memisahkan dan mengkategorikan sampah elektronik Anda.',
    Icon: Recycle, // Replaced '♻️'
    category: 'Tutorial',
  },
  {
    id: 'daur-ulang-berkelanjutan',
    title: 'Daur Ulang Berkelanjutan',
    description:
      'Memahami proses daur ulang dan manfaatnya untuk kehidupan berkelanjutan.',
    Icon: Sparkles, // Replaced '🌱'
    category: 'Lingkungan',
  },
  {
    id: 'teknologi-hijau',
    title: 'Teknologi Hijau',
    description:
      'Eksplorasi teknologi ramah lingkungan dalam pengelolaan e-waste.',
    Icon: Cpu, // Replaced '🌿'
    category: 'Teknologi',
  },
  {
    id: 'inovasi-daur-ulang',
    title: 'Inovasi Daur Ulang',
    description:
      'Menemukan inovasi terbaru dalam teknologi daur ulang e-waste.',
    Icon: Sparkles, // Reused Sparkles for innovation
    category: 'Inovasi',
  },
  {
    id: 'dampak-lingkungan',
    title: 'Dampak Lingkungan E-Waste',
    description:
      'Menganalisis dampak lingkungan dari pembuangan e-waste yang tidak tepat.',
    Icon: Plug, // Reused Plug for environmental impact
    category: 'Lingkungan',
  },
  {
    id: 'peraturan-e-waste',
    title: 'Peraturan E-Waste',
    description:
      'Memahami peraturan dan kebijakan terkait pengelolaan e-waste di Indonesia.',
    Icon: Recycle, // Reused Recycle for regulations
    category: 'Hukum',
  },
  {
    id: 'komunitas-e-waste',
    title: 'Komunitas E-Waste',
    description:
      'Bergabung dengan komunitas yang peduli terhadap pengelolaan e-waste.',
    Icon: Cpu, // Reused Cpu for community
    category: 'Komunitas',
  },
  {
    id: 'tips-ramah-lingkungan',
    title: 'Tips Ramah Lingkungan',
    description:
      'Tips dan trik untuk mengurangi dampak lingkungan dari penggunaan elektronik.',
    Icon: Sparkles, // Reused Sparkles for eco-friendly tips
    category: 'Tips',
  },
];
