---
title: "Piotroski F-Score: Cara Mudah Nilai Kualitas Bisnis dari Laporan Keuangan"
description: "Panduan lengkap Piotroski F-Score — 9 kriteria analisis fundamental saham, cara menghitung, interpretasi skor Strong/Medium/Weak, dan cara menggunakannya sebagai filter investasi jangka panjang."
category: "saham-syariah"
publishedAt: "2025-06-03"
tags: ["piotroski f score", "analisis fundamental saham", "f score saham IDX", "kualitas bisnis saham", "filter fundamental investasi"]
crossPromo: true
lang: "id"
---

Membaca laporan keuangan perusahaan secara lengkap butuh waktu berjam-jam — dan bagi kebanyakan investor ritel, ini menjadi hambatan untuk melakukan analisis fundamental dengan benar. Akibatnya banyak yang skip sama sekali dan hanya mengandalkan analisis teknikal.

Piotroski F-Score menawarkan jalan tengah: 9 pertanyaan sederhana berbasis laporan keuangan, masing-masing dijawab dengan 0 atau 1, yang secara kolektif memberikan gambaran komprehensif tentang kualitas bisnis suatu perusahaan.

Artikel ini menjelaskan 9 kriteria F-Score, cara menghitungnya, interpretasi hasilnya, dan bagaimana menggunakannya sebagai filter fundamental dalam screener saham syariah.

## Apa Itu Piotroski F-Score?

F-Score dikembangkan oleh Joseph Piotroski, profesor akuntansi dari Stanford, dan dipublikasikan tahun 2000. Ia menganalisis bahwa banyak saham yang secara fundamental kuat diabaikan investor karena terlalu sulit dibaca dari laporan keuangan yang tebal.

Solusinya: 9 kriteria biner yang masing-masing bernilai 0 (tidak terpenuhi) atau 1 (terpenuhi). Total skor maksimum 9. Riset Piotroski menunjukkan bahwa portofolio saham F-Score tinggi (8–9) secara historis outperform saham F-Score rendah (0–2) dengan margin signifikan.

| Skor | Kategori | Interpretasi |
|---|---|---|
| **8 – 9** | **Strong** | Fundamental sangat kuat — kandidat terbaik untuk posisi jangka panjang |
| 5 – 7 | Medium | Fundamental cukup baik — layak dipertimbangkan dengan konfirmasi teknikal |
| **0 – 4** | **Weak** | Fundamental lemah — risiko tinggi; hindari atau waspada value trap |

## 9 Kriteria Piotroski F-Score: Panduan Lengkap

9 kriteria dibagi dalam tiga kelompok yang masing-masing mengukur aspek berbeda dari kesehatan bisnis:

### Kelompok A: Profitabilitas (4 Kriteria)

| F | Kriteria | Formula / Cara Cek | Alasan Penting |
|---|---|---|---|
| **F1** | ROA positif | Net Income / Total Aset > 0 | Perusahaan menghasilkan profit dari asetnya |
| **F2** | Cash Flow Operations (CFO) positif | CFO > 0 (dari laporan arus kas) | Profit didukung kas nyata, bukan akrual |
| **F3** | ROA meningkat YoY | ROA tahun ini > ROA tahun lalu | Profitabilitas membaik, bukan stagnan |
| **F4** | CFO > Net Income (Accrual rendah) | CFO / Total Aset > ROA | Kualitas laba tinggi — kas lebih besar dari laba akuntansi |

### Kelompok B: Leverage & Likuiditas (3 Kriteria)

| F | Kriteria | Formula / Cara Cek | Alasan Penting |
|---|---|---|---|
| **F5** | Leverage menurun YoY | Debt/Assets tahun ini < tahun lalu | Perusahaan tidak menambah utang berlebihan |
| **F6** | Current Ratio meningkat YoY | Current Assets/Current Liabilities naik | Likuiditas jangka pendek membaik |
| **F7** | Tidak ada penerbitan saham baru | Jumlah saham beredar tidak bertambah | Manajemen tidak dilusi pemegang saham lama |

### Kelompok C: Efisiensi Operasional (2 Kriteria)

| F | Kriteria | Formula / Cara Cek | Alasan Penting |
|---|---|---|---|
| **F8** | Gross Margin meningkat YoY | (Revenue - COGS) / Revenue naik | Kemampuan pricing power membaik |
| **F9** | Asset Turnover meningkat YoY | Revenue / Total Aset naik | Aset digunakan makin efisien untuk hasilkan revenue |

**Tip pembacaan:** F1+F2+F4 adalah trio yang paling penting — profitabilitas nyata berbasis kas. Jika ketiganya terpenuhi (skor F 3/3 di kelompok ini), bisnis sudah punya fondasi yang solid. Skor tinggi di kelompok A tapi rendah di B (leverage naik) adalah red flag.

## Formula Lengkap dalam Satu Rangkuman

```
F-Score = F1 + F2 + F3 + F4 + F5 + F6 + F7 + F8 + F9

F1: ROA > 0                           → +1
F2: CFO > 0                           → +1
F3: ROA tahun ini > ROA tahun lalu    → +1
F4: CFO/TotalAset > ROA               → +1
F5: Leverage YoY turun                → +1
F6: Current Ratio YoY naik            → +1
F7: Saham beredar tidak bertambah     → +1
F8: Gross Margin YoY naik             → +1
F9: Asset Turnover YoY naik           → +1

Skor 8-9 = Strong | Skor 5-7 = Medium | Skor 0-4 = Weak
```

## Contoh Nyata: F-Score 4 Saham IDX

| Saham | F1 | F2 | F3 | F4 | F5 | F6 | F7 | F8 | F9 | Total |
|---|---|---|---|---|---|---|---|---|---|---|
| PGEO | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | **8 — Strong** |
| ADRO | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | **7 — Medium** |
| TLKM | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | **5 — Medium** |
| Saham X | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | **2 — Weak** |

**PGEO skor 8:** hanya F9 (Asset Turnover) yang tidak terpenuhi — ini bisa berarti perusahaan sedang ekspansi agresif (aset bertambah lebih cepat dari revenue dalam jangka pendek). Bukan red flag serius untuk growth stock.

## F-Score sebagai Filter di Screener

Dalam screener, Piotroski F-Score digunakan sebagai filter fundamental — lapisan tambahan di atas sinyal teknikal untuk memastikan saham yang dipilih punya kualitas bisnis yang solid:

| F-Score | Status | Penggunaan Optimal |
|---|---|---|
| **8–9** | **Strong** | Posisi jangka menengah-panjang (3–12 bulan); alokasi modal lebih besar |
| 5–7 | Medium | Swing trading (1–4 minggu); perlu konfirmasi teknikal kuat |
| 0–4 | **Weak** | Hindari untuk posisi baru; bisa jadi saham spekulatif tanpa dasar |

## Keterbatasan F-Score yang Harus Dipahami

F-Score adalah alat yang sangat berguna, tapi bukan solusi sempurna. Ada beberapa keterbatasan yang penting:

- **Berbasis data historis tahunan:** F-Score menggunakan laporan keuangan tahunan — jadi bisa outdated hingga 12 bulan jika laporan terbaru belum tersedia
- **Tidak cocok untuk semua sektor:** perusahaan teknologi growth stage atau perusahaan yang baru IPO sering F-Score rendah bukan karena buruk, tapi karena sedang fase investasi agresif
- **Tidak mengukur valuasi:** F-Score 9 tidak berarti saham murah — bisa jadi sudah overbought secara valuasi; selalu cek P/E dan P/BV
- **Tidak mendeteksi fraud:** laporan keuangan yang dimanipulasi bisa menghasilkan F-Score tinggi yang menyesatkan

## Cara Praktis Menghitung dan Menggunakan F-Score

1. Unduh laporan keuangan tahunan (annual report) dari website perusahaan atau IDX
2. **Hitung 4 komponen profitabilitas:** ROA, CFO, perubahan ROA YoY, dan perbandingan CFO vs Net Income
3. **Hitung 3 komponen leverage:** perubahan debt ratio, current ratio, dan cek apakah ada right issue/saham baru
4. **Hitung 2 komponen efisiensi:** perubahan gross margin dan asset turnover YoY
5. Jumlahkan skor — setiap kriteria yang terpenuhi +1, tidak terpenuhi +0
6. Interpretasi: 8–9 (Strong), 5–7 (Medium), 0–4 (Weak)
7. **Gunakan sebagai filter:** untuk swing trading minimal F-Score 5; untuk investasi jangka panjang minimal F-Score 7
8. Kombinasikan dengan skor teknikal screener untuk kandidat terbaik: F-Score tinggi + skor teknikal ≥7 + fase Akumulasi

## Kesimpulan

Piotroski F-Score adalah salah satu alat analisis fundamental paling efisien yang pernah dikembangkan — 9 kriteria sederhana yang bisa memberikan gambaran komprehensif tentang kualitas bisnis dalam waktu 15–20 menit per saham.

Untuk investor syariah yang ingin menggabungkan analisis fundamental dengan sinyal teknikal, F-Score adalah jembatan yang ideal: cukup sederhana untuk dipakai secara konsisten, tapi cukup komprehensif untuk menyaring saham berkualitas rendah sebelum kamu mengalokasikan modal.

## FAQ: Piotroski F-Score

**Q: Apakah F-Score bisa dipakai untuk saham syariah yang sektor keuangannya berbeda (seperti bank syariah)?**

A: Untuk saham bank dan keuangan (termasuk bank syariah seperti BRIS), beberapa metrik F-Score perlu diinterpretasikan secara berbeda — khususnya leverage dan current ratio, karena struktur bisnis perbankan memang berbeda dari industri non-keuangan. F-Score masih berguna untuk profitabilitas dan efisiensi (F1–F4, F8–F9), tapi F5–F7 perlu konteks tambahan.

**Q: Seberapa sering F-Score perlu dihitung ulang?**

A: Idealnya setiap kali laporan keuangan baru dirilis — biasanya kuartalan untuk laporan interim dan tahunan untuk laporan full-year. Untuk investor jangka panjang, annual report cukup. Untuk swing trader, cukup cek sekali saat screening awal dan update saat ada laporan keuangan baru.

**Q: Apakah F-Score yang sama selama 2–3 tahun berturut-turut adalah sinyal bagus?**

A: F-Score yang konsisten tinggi (7–9) selama 2–3 tahun adalah sinyal sangat positif — menunjukkan kualitas bisnis yang stabil dan tidak hanya kebetulan satu tahun. Tapi F-Score yang stabil rendah (2–4) selama beberapa tahun adalah sinyal untuk benar-benar menghindari saham tersebut meski harganya terlihat murah.
