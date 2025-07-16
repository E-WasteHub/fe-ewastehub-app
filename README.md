# E-WasteHub Frontend Application

> Media aplikasi untuk antar jemput sampah elektronik.

---

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Struktur Folder](#struktur-folder)
- [Konfigurasi Lingkungan](#konfigurasi-lingkungan)
- [Build & Deployment](#build--deployment)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

---

## Tentang Proyek

E-WasteHub adalah aplikasi frontend berbasis React & Vite untuk memudahkan pengguna mengelola dan menjadwalkan penjemputan sampah elektronik secara bertanggung jawab.

## Fitur Utama

- Registrasi & login pengguna
- Penjadwalan penjemputan sampah elektronik
- Edukasi & panduan pengelolaan e-waste
- FAQ dan informasi kategori e-waste
- Tema gelap/terang

## Prasyarat

- Node.js (disarankan versi 18.x ke atas)
- npm / yarn / pnpm

## Instalasi

1. Clone repositori:
   ```sh
   git clone https://github.com/E-WasteHub/fe-ewastehub-app.git
   ```
2. Masuk ke direktori proyek:
   ```sh
   cd fe-ewastehub-app
   ```
3. Install dependensi:
   ```sh
   npm install
   # atau
   # yarn install
   # pnpm install
   ```

## Menjalankan Aplikasi

- **Mode Pengembangan:**
  ```sh
  npm run dev
  ```
- **Build Produksi:**
  ```sh
  npm run build
  ```
- **Preview Build:**
  ```sh
  npm run preview
  ```

## Struktur Folder

```
src/
  assets/         # Gambar & aset statis
  components/     # Komponen UI reusable
  context/        # Context API (state global)
  data/           # Data statis (faq, kategori, dsb)
  hooks/          # Custom React hooks
  pages/          # Halaman utama aplikasi
  routes/         # Routing aplikasi
public/           # File publik & ikon
dev-dist/         # Output build dev (ignore git)
```

## Konfigurasi Lingkungan

Buat file `.env` di root jika diperlukan, misal:

```
VITE_API_URL=https://api.example.com
```

## Build & Deployment

1. Build aplikasi:
   ```sh
   npm run build
   ```
2. Hasil build ada di folder `dist/` atau `dev-dist/`.
3. Deploy folder build ke hosting statis (Vercel, Netlify, dsb).

## Kontribusi

Kontribusi sangat terbuka! Silakan fork, buat branch, dan ajukan pull request.

## Lisensi

MIT License © 2025 E-WasteHub
