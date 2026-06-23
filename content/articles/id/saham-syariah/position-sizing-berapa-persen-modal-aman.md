---
title: "Position Sizing: Berapa Persen Modal yang Aman untuk Satu Saham?"
description: "Panduan lengkap menghitung position sizing berbasis risiko untuk saham IDX — formula stop loss dan ATR, tabel contoh 4 saham, aturan konsentrasi, dan kesalahan umum yang harus dihindari."
category: "saham-syariah"
publishedAt: "2025-06-02"
tags: ["position sizing", "manajemen risiko saham", "manajemen portofolio", "stop loss", "ATR", "swing trading", "saham syariah"]
crossPromo: true
lang: "id"
---

Pernah tidak kamu taruh 30–40% modal di satu saham karena "yakin banget" analisisnya benar, lalu sahamnya justru turun 20%? Kehilangan 6–8% dari total portofolio hanya dari satu keputusan salah bukan hal kecil — butuh waktu berbulan-bulan untuk recovery.

Inilah yang terjadi ketika trader mengabaikan position sizing saham. Bukan soal analisisnya salah atau benar — tapi soal seberapa besar taruhan yang kamu pasang di setiap trade.

Artikel ini membahas cara menghitung position sizing berbasis risiko yang terukur, sehingga tidak ada satu pun saham yang bisa "menghancurkan" portofoliomu, bahkan kalau analisismu meleset.

## Apa Itu Position Sizing dan Kenapa Ini Fondasi Manajemen Risiko Saham?

Position sizing adalah keputusan tentang berapa banyak modal yang dialokasikan ke satu posisi trading. Bukan sekadar "beli berapa lot" — tapi kalkulasi sistematis yang memastikan risiko per trade selalu dalam batas yang sudah ditentukan sebelumnya.

Konsep dasarnya sederhana: jika kamu salah di setiap trade, kerugian kumulatifnya tidak boleh mengancam kelangsungan portofolio. Standar yang dipakai trader profesional adalah:

**Risiko per trade = maksimal 1–2% dari total modal**

Artinya: jika total modal kamu Rp 100 juta dan stop loss kena, maksimum yang boleh hilang dari satu trade adalah Rp 1–2 juta. Bukan 10 juta. Bukan 20 juta.

Dengan aturan ini, bahkan 10 kali kalah berturut-turut hanya menggerus modal 10–20% — masih bisa recovery. Tapi kalau position sizing asal-asalan, satu trade buruk bisa memangkas modal 30–40% sekaligus.

## Formula Position Sizing Saham yang Berbasis Risiko

Ada dua cara menghitung position sizing — pilih yang paling sesuai dengan workflow analisismu:

### Cara 1: Berbasis Stop Loss (paling umum)

Gunakan ini jika kamu sudah punya level stop loss yang jelas dari analisis teknikal.

```
Risiko per Trade (Rp)  = Total Modal × Persentase Risiko
Jumlah Lot             = Risiko per Trade / (Harga Entry - Harga Stop Loss)
```

Contoh:

- **Modal:** Rp 50.000.000
- **Risiko per trade:** 1% → Rp 500.000
- **Entry ADRO:** Rp 2.800  |  Stop Loss: Rp 2.656  |  Selisih: Rp 144
- **Jumlah Lot:** 500.000 / 144 = 3.472 saham ≈ 34 lot (1 lot = 100 saham)
- **Modal yang dipakai:** 3.400 × 2.800 = Rp 9.520.000 (~19% dari modal)

**Meski modal yang dipakai 19%, RISIKO yang terkontrol tetap hanya Rp 500.000 (1%) — karena stop loss sudah terpasang.**

### Cara 2: Berbasis ATR (untuk yang pakai stop loss dinamis)

Gunakan ini jika stop loss dihitung dari ATR seperti yang dibahas di [Cara Menentukan Stop Loss yang Tepat Berbasis ATR](/article/saham-syariah/cara-menentukan-stop-loss-berbasis-atr).

```
Jarak SL (Rp)  = Multiplier ATR × Nilai ATR
Jumlah Lot     = Risiko per Trade / Jarak SL
```

Contoh dengan TLKM (kategori defensif, ATR = Rp 28, multiplier 2.0×):

- **Modal:** Rp 50.000.000  |  Risiko 1%: Rp 500.000
- **Jarak SL:** 2.0 × 28 = Rp 56
- **Jumlah Lot:** 500.000 / 56 = 8.928 saham ≈ 89 lot
- **Modal yang dipakai:** 8.900 × 3.200 = Rp 28.480.000 (~57% dari modal)

**Catatan:** Jika modal yang dipakai melebihi 25–30% dari total portofolio untuk satu saham, pertimbangkan turunkan risiko per trade menjadi 0.5% agar tidak terlalu terkonsentrasi.

## Tabel Position Sizing: 4 Saham IDX dengan Modal Rp 100 Juta

Berikut ilustrasi nyata dengan modal Rp 100 juta, risiko 1% per trade (Rp 1.000.000), menggunakan stop loss berbasis ATR:

| Saham | Entry (Rp) | ATR (Rp) | SL (Rp) | Jarak SL (Rp) | Jumlah Lot | Modal Terpakai |
|---|---|---|---|---|---|---|
| ADRO (Volatil) | 2.800 | 120 | 2.656 | 144 (1.2×ATR) | ~69 lot | ~Rp 19,3 jt |
| PGEO (Moderat) | 8.500 | 210 | 8.185 | 315 (1.5×ATR) | ~31 lot | ~Rp 26,4 jt |
| TLKM (Defensif) | 3.200 | 28 | 3.144 | 56 (2.0×ATR) | ~89 lot | ~Rp 28,5 jt |
| BRIS (Defensif) | 1.850 | 25 | 1.800 | 50 (2.0×ATR) | ~200 lot | ~Rp 37 jt |

*Risiko aktual di semua baris = Rp 1.000.000 (1% modal). Yang berbeda hanya jumlah lot dan modal terpakai.*

**Perhatikan BRIS:** meski harga per saham rendah (Rp 1.850), jumlah lot menjadi sangat banyak (~200 lot) karena ATR-nya kecil. Modal terpakai 37% masih di atas batas ideal 25%. Turunkan risiko ke 0.5% → lot jadi ~100, modal ~Rp 18,5 jt.

## Aturan Konsentrasi: Jangan Biarkan Satu Saham Mendominasi Portofolio

Position sizing tidak hanya soal risiko per trade — tapi juga soal distribusi modal di seluruh portofolio. Dua aturan tambahan yang penting:

### Aturan 1: Maksimum 20–25% Modal per Saham

Tidak peduli seberapa yakin analisismu, jangan taruh lebih dari 20–25% modal di satu saham. Ini melindungi dari risiko fundamental yang tidak terduga — laporan keuangan buruk, gagal bayar, atau berita negatif mendadak yang bahkan stop loss sekalipun tidak bisa menghindarinya (gap down saat market buka).

### Aturan 2: Maksimum 5–8 Posisi Aktif Sekaligus

Terlalu banyak posisi membuat kamu tidak bisa memonitor semua dengan baik. Dengan 5–8 posisi dan modal merata, setiap saham mendapat alokasi 12–20% — cukup untuk berpengaruh pada portofolio, tapi tidak cukup untuk menghancurkannya.

## Cara Praktis Menerapkan Position Sizing Saham: Step by Step

1. Tentukan total modal aktif yang akan ditrading (pisahkan dari dana darurat)
2. Tetapkan persentase risiko per trade: 1% untuk swing trading, 0.5% untuk posisi besar/defensif
3. Hitung risiko dalam Rupiah: Modal × Persentase Risiko
4. Analisis saham dan tentukan level entry yang valid (breakout, support, sinyal teknikal)
5. **Hitung stop loss lebih dulu** — gunakan ATR atau level support teknikal, bukan persentase
6. Hitung jarak entry ke stop loss dalam Rupiah
7. Hitung jumlah lot: Risiko (Rp) / Jarak SL (Rp), lalu bulatkan ke bawah
8. Cek: apakah modal yang terpakai lebih dari 25%? Jika ya, kurangi jumlah lot atau skip
9. Cek total posisi aktif: apakah sudah 5–8 saham? Jika ya, tunggu ada yang ditutup dulu
10. **Catat semua parameter** — entry, SL, TP, lot, modal terpakai, risiko — sebelum eksekusi

## Kesalahan Umum dalam Manajemen Risiko Saham

- **Menentukan lot dulu, baru cari stop loss** — seharusnya terbalik: hitung SL dulu, baru hitung lot
- **"All in" di satu saham karena sangat yakin** — keyakinan tidak mengubah probabilitas pasar
- **Tidak konsisten dengan persentase risiko** — di trade A 1%, di trade B 5%, ini bukan sistem
- **Lupa memperhitungkan biaya transaksi** — komisi, pajak, dan spread bisa signifikan di lot besar
- **Tidak update position sizing saat modal berubah** — jika modal naik 20%, risiko per trade juga harus dihitung ulang
- **Menggunakan modal pinjaman atau margin** — position sizing berbasis modal pinjaman jauh lebih berbahaya karena kerugian dikali leverage
- **Menambah posisi saat saham sudah turun (averaging down)** tanpa menghitung ulang total risiko keseluruhan

## Kesimpulan

Position sizing saham bukan tentang berapa banyak yang bisa kamu menangkan — tapi tentang berapa banyak yang boleh kamu kalah. Dengan membatasi risiko di maksimum 1–2% per trade dan tidak mengkonsentrasikan lebih dari 25% modal di satu saham, kamu menciptakan sistem yang bisa bertahan meski analisisnya sering salah.

Trader yang konsisten bukan yang selalu benar, tapi yang tidak pernah kehilangan terlalu banyak ketika salah. Itulah inti manajemen risiko saham yang sesungguhnya.

Kombinasikan position sizing ini dengan [stop loss berbasis ATR](/article/saham-syariah/cara-menentukan-stop-loss-berbasis-atr) dan sinyal teknikal yang kuat untuk sistem trading yang lengkap dan terstruktur.

## FAQ: Position Sizing Saham

**Q: Apakah 1% risiko per trade terlalu kecil? Profit-nya jadi lambat.**

A: Lambat di satu trade, tapi aman secara sistem. Dengan win rate 55% dan R/R 1:2, risiko 1% per trade menghasilkan return ~16% per 100 trade. Konsistensi jauh lebih penting dari agresivitas — terutama di awal membangun track record.

**Q: Bagaimana position sizing untuk saham syariah yang tidak liquid?**

A: Untuk saham dengan volume harian rendah, turunkan risiko per trade ke 0.5% dan pastikan lot yang dihitung tidak melebihi 5–10% dari volume rata-rata harian saham tersebut. Kalau ukuran posisimu terlalu besar relatif terhadap likuiditasnya, kamu akan kesulitan keluar di harga stop loss yang diinginkan.

**Q: Apakah position sizing berlaku juga untuk investasi jangka panjang?**

A: Untuk investasi jangka panjang tanpa stop loss ketat, pendekatan berbeda yang dipakai: alokasi per saham maksimum 10–15% dari portofolio, dan diversifikasi minimal 8–12 saham dari sektor berbeda. Prinsip dasarnya tetap sama — tidak ada satu posisi yang boleh menghancurkan portofolio jika tesis investasinya salah.
