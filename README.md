# 🛡️ Zenoria MC - Single-Page Informative Landing Page 🛡️

Landing Page resmi yang modern, responsif, dan siap produksi (production-ready) untuk server Minecraft **Zenoria MC**. Website ini dirancang khusus untuk mempublikasikan detail server *Survival Economy* (Java & Bedrock), peraturan in-game, status fitur, struktur rank, serta tautan komunitas dengan performa maksimal (Lighthouse Score ≥95).

Dikembangkan oleh **RAN DEV** menggunakan teknologi modern:
- **React 19** & **Vite**
- **TypeScript**
- **Tailwind CSS v4** (Utility-first styling yang super cepat)
- **Framer Motion** (Animasi scroll reveal & micro-interactions halus)
- **Lucide React** (Koleksi ikon modern beresolusi tinggi)

---

## 🚀 Fitur Utama Website

1. **Watermark Pengembang Terintegrasi**: Banner informasi promosi **RAN DEV** yang elegan di bagian atas (Header) dan Footer.
2. **Scroll Progress Bar**: Indikator progres scroll transparan di bagian paling atas layar.
3. **Hero Section Sinematik**: Latar belakang lanskap Minecraft dengan logo floating, slogan resmi, tombol gabung komunitas, dan fitur salin IP instan.
4. **Sistem Salin IP Interaktif**: Menyalin IP Server secara otomatis dengan Toast Notification sukses berbahasa Indonesia.
5. **Tentang Server (About)**: Grid minimalis berisi 5 keunggulan server yang presisi.
6. **Fitur In-Game (Features)**: Menampilkan status rilis fitur secara transparan (Gacha, Jobs, Quest, Kits Rank `otw`, Custom Enchant `masih tahap perkembangan`, Leveling Mobs `masih dipertimbangkan`).
7. **Peraturan Server (Rules)**: Card pengaman gelap dengan border hijau lime glowing tipis beserta peringatan blacklist keras.
8. **Daftar Rank (Ranks)**: Tampilan tingkatan rank (VIP hingga TRANSCENDENT) lengkap dengan catatan pembelian verbatim dan metode pembayaran (Dana & Qriss).
9. **Pusat Tautan Komunitas (Social Links Hub)**: Tombol interaktif menuju WhatsApp dan Discord.
10. **Tombol Back to Top**: Memudahkan navigasi kembali ke bagian atas dengan animasi halus.
11. **Technical SEO Terintegrasi**: Menggunakan metadata Open Graph, Twitter Cards, robots.txt, sitemap.xml, serta skema data terstruktur JSON-LD (Schema.org).

---

## 🛠️ Panduan Instalasi Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek di komputer Anda secara lokal:

### Prasyarat
Pastikan komputer Anda sudah terinstal **Node.js** (Versi 18 atau lebih baru) dan **npm**.

### Langkah-langkah
1. **Clone repositori** atau ekstrak file ZIP proyek ke komputer Anda.
2. **Buka terminal** di dalam direktori root proyek tersebut.
3. **Instal seluruh dependensi**:
   ```bash
   npm install
   ```
4. **Jalankan server pengembangan lokal (Development Server)**:
   ```bash
   npm run dev
   ```
5. Buka browser Anda dan akses halaman di alamat `http://localhost:3000` (atau port yang tertera pada terminal).

---

## 🎨 Panduan Kustomisasi

Seluruh data teks statis, URL, kontak pengembang, IP server, dan port telah dipusatkan pada satu file konfigurasi tunggal di `/src/config/site.ts`.

### 1. Mengubah Link, IP, Kontak, atau Teks Statis
Cukup buka file `/src/config/site.ts` dan ubah nilai-nilainya:
```typescript
export const siteConfig = {
  name: "Zenoria MC",
  title: "Zenoria MC | New Era | Survival Economy Minecraft Server",
  description: "Server Minecraft Survival Economy Java & Bedrock. Online 24 jam dengan sinyal stabil, cocok untuk grinding santuy.",
  domain: "zenoria.arqonara.my.id",
  server: {
    type: "Survival Economy",
    uptime: "Online 24 Jam",
    bedrock: {
      ip: "zenoria.arqonara.my.id",
      port: 25538
    },
    java: {
      ip: "zenoria.arqonara.my.id:25538"
    }
  },
  links: {
    whatsappGroup: "https://bit.ly/3NJTRdk",
    discord: "https://discord.gg/jPWTBPrX3",
    donasi: ""
  },
  payments: ["E-Wallet [ Dana ]", "Qriss"],
  developer: {
    name: "RAN DEV",
    whatsapp: "0895602592430",
    pitch: "Ingin buat website yang keren dan mudah dipahami seperti ini? Hubungi kami!"
  }
};
```

### 2. Memodifikasi Warna Tema (Tailwind CSS v4)
Warna utama dan variabel font diatur menggunakan sistem `@theme` Tailwind CSS v4 di dalam file `/src/index.css`.
- Untuk mengubah font Google, sesuaikan `@import url(...)` di bagian atas `/src/index.css`.
- Untuk mengubah warna latar belakang atau aksen, ubah nilai variabel warna di bagian `@theme` atau kelas-kelas Tailwind yang ada pada masing-masing komponen di `/src/components/`.

### 3. Mengganti Gambar Logo & Latar Belakang
Semua aset gambar diletakkan di dalam folder `/public` dan dipanggil menggunakan path absolut Next-style tanpa perlu melakukan static import di React:
- **Logo Resmi**: Ganti file `/public/logo.png` dengan logo server Anda (Format PNG disarankan agar latar belakang transparan).
- **Background Hero**: Ganti file `/public/hero-bg.webp` dengan screenshot sinematik Minecraft server Anda.

---

## 🚀 Panduan Deploy Instan ke Vercel

Pemilik server dapat meluncurkan website ini ke internet secara instan menggunakan platform **Vercel** secara gratis:

1. **Unggah Proyek ke GitHub**:
   - Buat repositori baru di akun GitHub Anda (misal: `zenoria-landing-page`).
   - Lakukan push file proyek lokal Anda ke repositori tersebut:
     ```bash
     git init
     git add .
     git commit -m "Initial commit of Zenoria landing page"
     git branch -M main
     git remote add origin <URL-REPOSI-GITHUB-ANDA>
     git push -u origin main
     ```

2. **Hubungkan ke Vercel**:
   - Buka dashboard [Vercel](https://vercel.com/) dan masuk menggunakan akun GitHub Anda.
   - Klik tombol **"Add New"** > **"Project"**.
   - Pilih repositori `zenoria-landing-page` yang baru saja Anda unggah, lalu klik **"Import"**.

3. **Konfigurasi Build (Otomatis)**:
   - Vercel akan otomatis mendeteksi proyek ini sebagai proyek **Vite / React**.
   - Pastikan pengaturan default-nya adalah:
     - **Framework Preset**: `Vite`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Klik **"Deploy"**!

4. **Selesai**:
   - Dalam waktu kurang dari 1 menit, website Anda sudah online di subdomain gratis dari Vercel (misal: `zenoria-landing-page.vercel.app`).
   - Anda dapat menghubungkan domain kustom seperti `zenoria.arqonara.my.id` secara langsung melalui menu **Settings > Domains** di dashboard Vercel Anda.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **Lisensi MIT**. Hubungi **RAN DEV** jika Anda membutuhkan modifikasi visual lanjutan atau pembuatan sistem panel otomatisasi donasi Minecraft lainnya!
