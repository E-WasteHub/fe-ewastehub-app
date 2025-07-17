import { Package, Recycle, Smile, Star, Truck } from 'lucide-react';

export const panduanData = [
  {
    id: 1,
    number: '01',
    title: 'Pilahkan Sampah',
    description: 'Pisahkan e-waste Anda dari sampah rumah tangga lainnya.',
    Icon: Recycle,
    steps: [
      'Identifikasi perangkat elektronik yang sudah tidak terpakai.',
      'Kumpulkan di satu tempat yang kering dan aman.',
    ],
    tips: 'Pastikan semua perangkat dalam keadaan mati dan tidak terhubung ke listrik.',
  },
  {
    id: 2,
    number: '02',
    title: 'Kemas Dengan Aman',
    description: 'Gunakan kardus atau wadah tertutup untuk mengemas e-waste.',
    Icon: Package,
    steps: [
      'Gunakan kotak kardus yang kokoh.',
      'Beri label "E-Waste" agar mudah diidentifikasi oleh kurir.',
    ],
    tips: 'Untuk perangkat yang rapuh seperti layar, lapisi dengan kain atau bubble wrap.',
  },
  {
    id: 3,
    number: '03',
    title: 'Jadwalkan Penjemputan',
    description:
      'Tentukan waktu dan lokasi penjemputan melalui aplikasi E-wasteHub.',
    Icon: Truck,
    steps: [
      'Buka aplikasi dan pilih menu "Jemput E-waste".',
      'Atur alamat, tanggal, dan waktu penjemputan yang Anda inginkan.',
    ],
    tips: 'Anda bisa menjadwalkan penjemputan hingga 7 hari ke depan.',
  },
  {
    id: 4,
    number: '04',
    title: 'Dapatkan Poin Reward',
    description:
      'Tim kami akan memverifikasi e-waste dan memberikan poin reward.',
    Icon: Star,
    steps: [
      'Kurir akan menimbang dan memverifikasi e-waste Anda.',
      'Poin akan otomatis ditambahkan ke akun Anda setelah verifikasi selesai.',
    ],
    tips: 'Jumlah poin bervariasi tergantung jenis dan berat e-waste yang diserahkan.',
  },
  {
    id: 5,
    number: '05',
    title: 'Selesai & Berdampak!',
    description:
      'Selamat! Anda telah berkontribusi untuk lingkungan yang lebih sehat.',
    Icon: Smile,
    steps: [
      'Anda dapat melacak dampak lingkungan dari kontribusi Anda di aplikasi.',
      'Tukarkan poin Anda dengan berbagai hadiah menarik.',
    ],
    tips: 'Ajak teman dan keluarga untuk bergabung dan dapatkan poin bonus!',
  },
];
