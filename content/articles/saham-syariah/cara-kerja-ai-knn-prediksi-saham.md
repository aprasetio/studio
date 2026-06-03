---
title: "Bagaimana AI KNN Memprediksi Saham? Penjelasan Tanpa Rumus Rumit"
description: "Cara kerja model AI KNN (K-Nearest Neighbors) untuk prediksi saham — 7 fitur input, cara baca probabilitas, akurasi realistis, dan cara menggabungkannya dengan sinyal teknikal lain."
category: "saham-syariah"
publishedAt: "2025-06-03"
tags: ["AI prediksi saham", "machine learning saham", "KNN saham", "screener saham AI", "probabilitas KNN"]
crossPromo: true
lang: "id"
---

Ketika pertama kali melihat kata "AI" di sebuah screener saham, reaksi orang biasanya terbagi dua: sebagian langsung percaya buta, sebagian langsung skeptis total. Keduanya keliru karena keduanya tidak memahami apa yang sebenarnya dilakukan AI tersebut.

Artikel ini membongkar cara kerja model KNN (K-Nearest Neighbors) yang digunakan di screener untuk memprediksi pergerakan saham — tanpa formula matematika yang menakutkan, tapi cukup mendalam untuk kamu bisa menggunakannya dengan ekspektasi yang realistis.

Setelah membaca ini, kamu akan tahu kapan angka probabilitas AI bisa dipercaya, kapan harus diabaikan, dan bagaimana cara menggunakannya sebagai satu komponen dalam keputusan trading yang lebih baik.

## Apa Itu KNN dan Mengapa Dipilih untuk Prediksi Saham?

K-Nearest Neighbors (KNN) adalah salah satu algoritma machine learning paling intuitif. Cara kerjanya mirip dengan analogi ini: ketika kamu tidak tahu apakah akan hujan hari ini, kamu ingat semua hari di masa lalu yang kondisinya mirip dengan hari ini (mendung, lembab, angin dari barat) — lalu lihat apa yang terjadi di mayoritas hari-hari mirip itu. Itulah prediksi KNN.

Untuk saham: model mencari hari-hari di masa lalu 2 tahun yang kondisi teknikalnya paling mirip dengan kondisi saham hari ini, lalu melihat apa yang terjadi keesokan harinya di mayoritas kasus tersebut.

| Aspek | KNN | Kenapa Cocok untuk Saham |
|---|---|---|
| Cara kerja | Mencari K kondisi historis paling mirip lalu voting hasilnya | Saham sering mengulang pola dalam kondisi teknikal serupa |
| Data yang digunakan | Fitur teknikal numerik dari data historis | Semua input sudah tersedia dalam data OHLCV harian |
| Interpretasi output | Probabilitas (0.0–1.0), bukan sinyal biner | Probabilitas lebih informatif dari sekadar beli/jual |
| Keterbatasan | Tidak bisa menangkap kejadian tak terduga (black swan) | Perlu dikombinasi dengan indikator lain untuk konfirmasi |

## Input Model: 7 Fitur yang Dibaca AI

Model KNN tidak "melihat" harga secara langsung — ia membaca 7 fitur teknikal yang sudah dinormalisasi dari data historis 2 tahun terakhir:

| # | Fitur Input | Yang Diukur | Kontribusi |
|---|---|---|---|
| 1 | RSI (14 periode) | Momentum dan kondisi overbought/oversold | Identifikasi momentum saat ini vs historis serupa |
| 2 | CMF (20 periode) | Tekanan aliran dana masuk/keluar | Konfirmasi apakah pergerakan didukung volume |
| 3 | Posisi vs MA20 | Jarak harga dari moving average jangka pendek | Konteks tren jangka pendek |
| 4 | Posisi vs MA50 | Jarak harga dari moving average menengah | Konteks tren jangka menengah |
| 5 | Posisi vs EMA200 | Jarak harga dari EMA jangka panjang | Konteks tren utama (bullish/bearish secara struktural) |
| 6 | ATR% (14 periode) | Tingkat volatilitas relatif saat ini | Konteks volatilitas — apakah kondisi saat ini normal/abnormal |
| 7 | Volume Ratio | Volume hari ini vs rata-rata 20 hari | Deteksi aktivitas abnormal (spike volume) |

Output model: probabilitas saham naik esok hari dalam skala 0.0–1.0. Bukan prediksi berapa persen naik — hanya prediksi arah (naik atau tidak) beserta tingkat keyakinannya.

## Cara Kerja KNN: Analogi Sederhana

Bayangkan kamu punya buku catatan berisi 500 hari trading masa lalu ADRO — setiap halaman mencatat 7 angka (RSI, CMF, posisi MA, ATR%, volume ratio) dan hasil esok harinya (naik atau turun).

Hari ini, kondisi ADRO adalah: RSI=52, CMF=+0.18, di atas MA20 (+3%), di atas MA50 (+8%), di atas EMA200 (+12%), ATR%=2.1%, volume ratio=1.6×. Model mencari 15 halaman (K=15) yang kondisi teknikalnya paling mirip dengan hari ini.

Misalkan dari 15 hari paling mirip: 10 hari saham naik keesokan harinya, dan 5 hari saham turun. Maka probabilitas KNN = 10/15 = **0.67 (67% kemungkinan naik).**

Model juga di-retrain setiap kali chart dibuka — artinya data terbaru selalu digunakan untuk mencari kemiripan, bukan model lama yang statis.

## Interpretasi Output: Angka Probabilitas Artinya Apa?

| Probabilitas KNN | Interpretasi | Tindakan yang Tepat |
|---|---|---|
| **> 0.70** | Sinyal kuat naik | Konfirmasi kuat untuk entry — kombinasikan dengan skor teknikal tinggi |
| 0.55 – 0.70 | Bias naik | Mendukung entry, tapi butuh konfirmasi dari komponen lain (CMF, fase Wyckoff) |
| 0.45 – 0.55 | Netral / tidak pasti | Model tidak punya keyakinan kuat ke arah manapun — cari konfirmasi lain |
| 0.30 – 0.45 | Bias turun | Sinyal negatif ringan — perketat stop loss jika sudah dalam posisi |
| **< 0.30** | Sinyal kuat turun | Tidak ada entry baru; jika sudah dalam posisi, pertimbangkan exit lebih awal |

**Ekspektasi realistis:** akurasi backtesting model adalah 60–65% untuk prediksi arah 1 hari ke depan. Ini berarti 35–40% prediksi salah. Jangan gunakan probabilitas KNN sebagai satu-satunya dasar keputusan — ia adalah satu dari 6 komponen, bukan oracle.

## Seberapa Akurat Model KNN Ini? Jujur tentang Keterbatasan

| Metrik | Nilai | Interpretasi |
|---|---|---|
| Akurasi arah 1 hari | **60–65%** | Lebih baik dari random (50%), tapi tidak sempurna |
| Data training | 2 tahun historis OHLCV + indikator | Di-retrain setiap kali chart dibuka |
| Kondisi terbaik model | Tren jelas + volume normal | Pattern historis lebih konsisten dan bisa diulang |
| Kondisi terburuk model | Event tak terduga, news shock, black swan | Tidak ada pola historis yang bisa dijadikan acuan |
| Horizon prediksi | 1 hari ke depan (short-term) | Akurasi turun signifikan untuk prediksi 3–5 hari |

**Perlu diingat:** akurasi 60–65% bukan artinya 6–7 dari 10 trade untung. Akurasi hanya mengukur prediksi arah yang benar — trade bisa untung atau rugi tergantung berapa besar pergerakan dan apakah stop loss terpasang.

## Bagaimana KNN Bekerja dalam Sistem Skor 6 Komponen?

KNN adalah salah satu dari 6 komponen yang membentuk skor total screener. Ia tidak berdiri sendiri — ia berinteraksi dengan 5 komponen lain:

| Kombinasi | Kondisi | Kekuatan Sinyal |
|---|---|---|
| KNN tinggi + CMF positif | Prob > 0.65 + CMF > +0.10 | **SANGAT KUAT — AI dan aliran dana searah** |
| KNN tinggi + Donchian breakout | Prob > 0.65 + harga di upper band | KUAT — momentum dan pattern historis konfirmasi |
| KNN tinggi tapi CMF negatif | Prob > 0.65 + CMF < -0.05 | CAMPURAN — AI bullish tapi dana tidak mendukung; hati-hati |
| KNN rendah tapi skor lain tinggi | Prob < 0.45 + komponen lain positif | PERHATIKAN — AI tidak konfirmasi; kurangi position size |

**Best practice:** gunakan KNN sebagai filter tambahan, bukan penentu utama. Jika skor teknikal sudah 8+ tapi KNN < 0.45, pertimbangkan untuk menunda entry atau kurangi lot. Jika KNN > 0.70 tapi skor teknikal hanya 5, KNN saja tidak cukup.

## Contoh Membaca Output AI di Saham IDX

| Saham | Prob KNN | Skor Total | Kondisi CMF | Kesimpulan |
|---|---|---|---|---|
| PGEO | **0.72** | 10/12 (STRONG BUY) | +0.28 (kuat) | **Tiga sinyal searah — entry valid dengan risiko 1%** |
| ADRO | 0.61 | 8/12 (BUY) | +0.14 (moderat) | Dua dari tiga sinyal positif — entry dengan risiko 0.5% |
| TLKM | 0.51 | 6/12 (BUY) | +0.03 (netral) | AI tidak konfirmasi, CMF netral — tunggu atau skip |
| SMGR | **0.31** | 5/12 (NEUTRAL) | -0.12 (negatif) | **Semua sinyal negatif — tidak ada entry baru** |

## Cara Praktis Menggunakan AI KNN dalam Keputusan Trading

1. Buka screener dan lihat kolom probabilitas KNN untuk saham target
2. **Jika prob > 0.65:** AI mendukung entry; konfirmasi dengan skor total dan CMF
3. **Jika prob 0.45–0.65:** AI netral; andalkan lebih banyak pada komponen teknikal lain
4. **Jika prob < 0.45:** AI tidak mendukung; kurangi lot atau tunda sampai prob membaik
5. Jangan gunakan prob KNN sendirian — selalu lihat dalam konteks skor total 6 komponen
6. Ingat: model di-retrain setiap sesi — probabilitas hari ini bisa berbeda dari kemarin meski harga sama
7. Untuk keputusan final, tetap andalkan stop loss berbasis ATR dan position sizing yang terukur

## Kesalahan Umum dalam Menggunakan AI Prediksi Saham

- **Percaya buta pada angka probabilitas** — 0.75 bukan berarti 75% pasti untung; itu probabilitas arah berdasarkan pola historis
- **Mengabaikan stop loss karena AI mengatakan naik** — AI bisa salah 35–40% waktu; stop loss tetap wajib
- **Over-trading karena setiap hari ada saham dengan prob tinggi** — selektivitas tetap penting; prob tinggi harus disertai skor teknikal dan konteks pasar yang mendukung
- **Mengharapkan AI memprediksi black swan** — model berbasis pola historis tidak bisa mengantisipasi berita mendadak, krisis, atau kejadian tanpa preseden
- **Membandingkan probabilitas antar saham secara langsung** — prob 0.70 di saham volatile ≠ prob 0.70 di saham defensif; konteks volatilitas berbeda

## Kesimpulan

AI KNN dalam screener ini bukan magic ball yang bisa memprediksi pasar dengan sempurna — tapi bukan gimmick pula. Dengan akurasi 60–65% untuk prediksi arah 1 hari, ia memberikan edge statistik yang nyata ketika digunakan sebagai satu komponen dalam sistem yang lebih besar.

Kekuatannya ada dalam konsistensi: model memproses 7 fitur teknikal secara objektif tanpa bias emosi, mencari kemiripan dari ratusan hari historis, dan memberikan output yang bisa langsung diintegrasikan dengan sinyal teknikal lain. Gunakan dengan ekspektasi realistis, dan ia akan menjadi salah satu komponen paling berguna dalam arsenal trading kamu.

## FAQ: AI KNN Prediksi Saham

**Q: Apakah model KNN terus belajar dari data baru secara otomatis?**

A: Model di-retrain (dilatih ulang) setiap kali chart saham dibuka, menggunakan data historis 2 tahun terbaru. Jadi data kemarin sudah masuk ke model hari ini. Ini bukan deep learning yang belajar secara kontinu — tapi proses retraining rutin yang memastikan model selalu relevan dengan kondisi pasar terkini.

**Q: Kenapa probabilitas KNN saham yang sama bisa berbeda di hari berbeda meski harga tidak banyak berubah?**

A: Karena 7 fitur input (RSI, CMF, posisi MA, ATR%, volume ratio) berubah setiap hari — bahkan perubahan kecil di RSI atau volume ratio bisa mengubah kondisi "mana hari historis yang paling mirip" secara signifikan. Ini juga mengapa model harus dibaca hari per hari, bukan di-hold sebagai referensi selama beberapa hari.

**Q: Apakah KNN lebih cocok untuk saham tertentu dibanding yang lain?**

A: Ya. KNN bekerja paling baik di saham yang memiliki pola teknikal yang konsisten dan data historis yang cukup (likuid, sudah listing cukup lama). Untuk saham yang baru IPO (data <2 tahun) atau saham tidak likuid (volume tidak menentu), akurasi model bisa lebih rendah dari rata-rata 60–65%.
