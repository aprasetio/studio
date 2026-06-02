---
title: "Cara Menentukan Stop Loss yang Tepat Berbasis ATR (Bukan Persentase Sembarangan)"
description: "Pelajari cara hitung stop loss saham menggunakan ATR (Average True Range) — metode trader profesional yang menyesuaikan level stop loss dengan volatilitas nyata tiap saham."
category: "saham-syariah"
publishedAt: "2026-06-02"
tags: ["stop loss saham", "cara hitung stop loss", "ATR", "manajemen risiko", "swing trading", "teknikal analisis"]
crossPromo: true
lang: "id"
author: "VersoKit"
---

Sudah pasang stop loss di -5%, tapi saham malah mental balik naik tepat setelah kena cut loss? Atau sebaliknya — tidak pasang stop loss sama sekali karena "yakin fundamentalnya bagus", lalu nyangkut berbulan-bulan?

Keduanya adalah kesalahan yang sama: stop loss saham yang tidak berbasis data volatilitas nyata dari saham itu sendiri.

Artikel ini menjelaskan cara hitung stop loss menggunakan ATR (Average True Range) — metode yang dipakai trader profesional untuk menyesuaikan level stop loss dengan karakter volatilitas masing-masing saham, bukan angka persentase sembarangan yang sama untuk semua.

## Apa Itu ATR dan Kenapa Stop Loss Saham Harus Berbasis ATR?

ATR atau Average True Range adalah indikator yang mengukur rata-rata jarak pergerakan harga harian suatu saham dalam periode tertentu — biasanya 14 hari terakhir.

ATR bukan tentang arah harga (naik atau turun). ATR hanya mengukur **seberapa jauh harga bergerak dalam satu hari**, dari high ke low, termasuk gap dari hari sebelumnya.

Kenapa ini penting untuk stop loss? Karena setiap saham punya "napas" yang berbeda:

- **BBCA** (bank besar, likuid tinggi): bergerak ±1% per hari secara normal
- **ADRO** (komoditas): bisa bergerak ±3–4% per hari di musim volatil
- **Saham lapis tiga**: bisa swing ±8–10% dalam sehari

Kalau kamu pasang stop loss -5% untuk ADRO, itu bisa kena di tengah fluktuasi normal — bukan karena tren berbalik. Sebaliknya, -5% untuk BBCA mungkin terlalu lebar dan risikonya terlalu besar.

**ATR membantu kamu pasang stop loss yang menghormati volatilitas saham, bukan angka asal.**

## Cara Hitung Stop Loss Berbasis ATR: Formula Adaptif

Formula dasar:

> **ATR% = ATR ÷ Harga Close × 100**

Dari ATR%, tentukan level volatilitas saham, lalu terapkan multiplier sesuai kategori:

| Kategori | ATR% | Stop Loss | Take Profit |
|---|---|---|---|
| Volatil Tinggi (Komoditas, lapis 2–3) | > 3% | 1,2 × ATR | 2,5 × ATR |
| Moderat (Blue chip sektoral) | 1%–3% | 1,5 × ATR | 3,0 × ATR |
| Defensif (BBCA, TLKM, konsumer besar) | < 1% | 2,0 × ATR | 3,5 × ATR |

*Risk/Reward minimum selalu 1:2 untuk semua kategori. ATR dihitung 14 periode.*

### Kategori 1 — Saham Volatil Tinggi (ATR% > 3%)

Contoh tipikal: ADRO, PGEO, saham komoditas, saham lapis dua saat trending.

**Stop Loss   = Entry − (1,2 × ATR)**  
**Take Profit = Entry + (2,5 × ATR)**

Multiplier SL lebih kecil (1,2×) karena volatilitasnya sudah tinggi — stop terlalu lebar berarti risiko per trade terlalu besar secara absolut.

### Kategori 2 — Saham Volatilitas Moderat (ATR% 1%–3%)

Contoh tipikal: saham blue chip sektoral, mid-cap likuid.

**Stop Loss   = Entry − (1,5 × ATR)**  
**Take Profit = Entry + (3,0 × ATR)**

Ini zona paling umum untuk saham IDX menengah-atas. Multiplier seimbang antara proteksi noise dan ruang gerak harga.

### Kategori 3 — Saham Defensif (ATR% < 1%)

Contoh tipikal: BBCA, TLKM, saham konsumer besar.

**Stop Loss   = Entry − (2,0 × ATR)**  
**Take Profit = Entry + (3,5 × ATR)**

Saham defensif bergerak lambat. Butuh multiplier lebih besar agar stop loss tidak kena dari noise harian biasa yang nilainya kecil secara poin.

## Contoh Nyata: Cara Hitung Stop Loss di Saham IDX

### Contoh 1: ADRO (Saham Komoditas — Kategori Volatil)

| | |
|---|---|
| Harga Close | Rp 2.800 |
| ATR 14 Periode | Rp 120 |
| ATR% | 120 ÷ 2.800 × 100 = **4,3%** → Kategori: Volatil Tinggi |
| Stop Loss | 2.800 − (1,2 × 120) = 2.800 − 144 = **Rp 2.656** |
| Take Profit | 2.800 + (2,5 × 120) = 2.800 + 300 = **Rp 3.100** |
| Risk/Reward | 300 ÷ 144 = **2,08 ✓** (lebih dari 1:2) |

### Contoh 2: TLKM (Saham Defensif — Kategori Defensif)

| | |
|---|---|
| Harga Close | Rp 3.200 |
| ATR 14 Periode | Rp 28 |
| ATR% | 28 ÷ 3.200 × 100 = **0,88%** → Kategori: Defensif |
| Stop Loss | 3.200 − (2,0 × 28) = 3.200 − 56 = **Rp 3.144** |
| Take Profit | 3.200 + (3,5 × 28) = 3.200 + 98 = **Rp 3.298** |
| Risk/Reward | 98 ÷ 56 = **1,75 ⚠** Di bawah 1:2 |

> **Catatan:** Jika R/R di bawah 1:2 setelah dihitung dengan ATR, skip trade tersebut atau tunggu harga entry yang lebih baik.

## Cara Praktis Menggunakannya: Step by Step

1. Buka chart saham yang ingin dibeli — gunakan timeframe daily
2. Tambahkan indikator ATR dengan periode 14 (standar universal)
3. Catat nilai ATR terkini yang muncul di bawah chart
4. Hitung ATR% = ATR ÷ Harga Close × 100
5. Tentukan kategori: >3% (volatil), 1–3% (moderat), <1% (defensif)
6. Hitung SL dan TP menggunakan multiplier sesuai kategori
7. Cek R/R: harus minimal 1:2 — jika tidak, jangan masuk dulu
8. Pasang stop loss di platform sesuai angka yang sudah dihitung
9. **Jangan geser stop loss ke bawah setelah dipasang — ini melanggar aturan sendiri**

## Kesalahan Umum yang Harus Dihindari

- **Pakai persentase tetap untuk semua saham** — misalnya selalu -5% tanpa mempertimbangkan volatilitas saham itu
- **Stop loss terlalu dekat dari entry** — membuat mudah kena "stop hunt" oleh pergerakan normal harian
- **Stop loss terlalu jauh** — bukan manajemen risiko, tapi gambling
- **Tidak menghitung Take Profit sebelum masuk** — tanpa TP, kamu tidak tahu apakah trade ini worth it secara matematis
- **Menggeser stop loss ke bawah saat harga mendekati SL** — ini yang paling berbahaya dan membuat kerugian makin besar
- **Menggunakan ATR dari timeframe berbeda** — selalu gunakan ATR daily untuk posisi swing trading

## Kesimpulan

Stop loss saham yang baik bukan soal berapa persen — tapi soal seberapa jauh harga bisa "bernapas" secara normal sebelum kamu bisa menyimpulkan bahwa tren sudah berbalik.

ATR memberikan jawaban itu secara objektif berdasarkan data historis volatilitas saham itu sendiri. Dengan cara hitung stop loss berbasis ATR dan formula adaptif tiga kategori di atas, kamu bisa:

- Menghindari stop loss yang terlalu sempit dan sering kena noise harian
- Memastikan setiap trade punya R/R minimal 1:2 sebelum masuk
- Menyesuaikan ukuran risiko dengan karakter saham, bukan kebiasaan semata

Langkah berikutnya: kombinasikan ATR stop loss dengan position sizing yang benar agar total risiko per trade tidak melebihi 1–2% dari total modal kamu.

## FAQ: Stop Loss Berbasis ATR

**Q: ATR periode berapa yang paling akurat untuk swing trading?**

A: Standar industri adalah ATR 14 periode daily. Ini cukup responsif terhadap perubahan volatilitas terkini tanpa terlalu "berisik" seperti ATR periode pendek (misalnya ATR 5 yang terlalu sensitif terhadap satu hari anomali).

**Q: Apakah stop loss ATR berlaku juga untuk saham syariah?**

A: Ya, ATR adalah indikator teknikal murni berbasis harga — tidak ada kaitannya dengan struktur bisnis perusahaan. Bisa dipakai untuk saham syariah maupun konvensional, di IDX maupun Wall Street.

**Q: Bagaimana jika ATR berubah setelah saya masuk posisi?**

A: Stop loss yang sudah dipasang tidak perlu diubah mengikuti ATR baru — kecuali untuk trailing stop (menggeser SL ke atas mengikuti kenaikan harga). Jangan pernah geser stop loss ke bawah hanya karena harga mendekati level SL.
