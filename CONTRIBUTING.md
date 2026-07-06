# Panduan Kontribusi (Contributing Guide)

Terima kasih telah tertarik untuk berkontribusi pada pengembangan landing page resmi **Zenoria MC**! Kami menyambut baik kontribusi dalam bentuk pelaporan bug, saran fitur, ataupun modifikasi kode langsung.

## 🛠️ Alur Kontribusi

1. **Fork Repositori**: Lakukan fork pada repositori ini ke akun GitHub Anda.
2. **Klon Repositori Anda**:
   ```bash
   git clone https://github.com/username/zenoria-landing-page.git
   ```
3. **Buat Branch Baru**:
   ```bash
   git checkout -b fitur/fitur-baru-anda
   ```
4. **Lakukan Perubahan**: Implementasikan perubahan kode Anda. Pastikan kode mengikuti standar kebersihan dan performa:
   - Jalankan `npm run lint` untuk memvalidasi kualitas penulisan kode TypeScript.
   - Jalankan `npm run build` untuk memastikan kompilasi siap produksi tidak mengalami error.
5. **Commit Perubahan**:
   ```bash
   git commit -m "feat: menambahkan fitur baru yang bermanfaat"
   ```
6. **Push ke GitHub**:
   ```bash
   git push origin fitur/fitur-baru-anda
   ```
7. **Ajukan Pull Request (PR)**: Kirimkan Pull Request ke branch `main` repositori asli dengan deskripsi perubahan yang jelas dan mendalam.

## 🎨 Panduan Menulis Kode (Code Style)

- **TypeScript**: Gunakan type safety penuh tanpa `any` jika memungkinkan.
- **Tailwind CSS**: Gunakan utilitas class bawaan Tailwind CSS v4 tanpa mendefinisikan custom CSS tambahan.
- **Komponen Modular**: Jangan menumpuk semua logika pada `App.tsx`. Buat file komponen modular baru di `/src/components/` jika Anda menambahkan fitur baru.
- **Bebas Error**: Seluruh perubahan wajib lulus proses build lokal (`npm run build`) sebelum dikirimkan.

---

*Dikembangkan dengan dedikasi oleh **RAN DEV & Komunitas Zenoria MC**.*
