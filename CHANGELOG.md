# Catatan Perubahan (Changelog)

Semua perubahan penting pada proyek landing page **Zenoria MC** akan didokumentasikan di file ini.

## [1.2.0] - 2026-07-05
### Ditambahkan
- File hygiene GitHub lengkap: `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `CHANGELOG.md`.
- File konfigurasi lingkungan standar industri: `.editorconfig`, `.gitattributes`, dan `vercel.json`.
- Integrasi Web Manifest (`public/manifest.webmanifest`) dengan emoji vector ikonik yang modern.
- SEO file standar: `public/robots.txt` dan `public/sitemap.xml`.

### Diubah
- Menghapus referensi teks "Online 24 jam" dari seluruh komponen (`Header`, `Hero`, `config`, dan metadata SEO `index.html`) sesuai dengan instruksi kenyamanan terbaru.
- Mengganti seluruh referensi logo gambar lokal menjadi komponen text vector **LOGO** bergaya futuristik dengan glow kuning-hijau lime.
- Mengganti latar belakang gambar hero statis menjadi scene radial gradient sinematik yang dinamis dan berkelas tinggi.

### Dihapus
- Folder `public/` berisi binary aset `.png` dan `.webp` yang rentan mengalami kerusakan format / korup, sehingga proyek kini 100% text-based dan aman dari kerusakan aset visual statis.

## [1.1.0] - 2026-07-04
### Ditambahkan
- Layout tab interaktif premium untuk halaman Daftar Rank (`Ranks.tsx`) yang elegan dan modern.
- Integrasi API Status Server Minecraft waktu-nyata via `api.mcsrvstat.us`.
- Banner watermark pengembang **RAN DEV** di Header dan Footer lengkap dengan tombol promosi eksternal.

## [1.0.0] - 2026-07-03
### Ditambahkan
- Rilis perdana Landing Page responsif Zenoria MC.
- Sesi Core: Hero, About, In-Game Features, Rules, Ranks, dan Social.
