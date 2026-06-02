# Drafts Folder

Folder ini untuk menyimpan file artikel yang akan diproses.

## Cara Upload Artikel

1. Upload file `.docx` ke folder ini via GitHub (Add file → Upload files)
2. Beritahu Claude nama filenya
3. Claude akan membaca, mengkonversi ke `.md`, dan menyimpan ke `content/articles/[kategori]/`

## Kategori yang Tersedia

| Folder | Kategori |
|---|---|
| `olahraga` | Artikel seputar olahraga, futsal, tenis, dll |
| `keuangan` | Tips keuangan, anggaran, hutang, invoice |
| `produktivitas` | Habit, kerja efektif, manajemen waktu |
| `ibadah` | Sholat, puasa, dzikir, Al-Quran |
| `saham-syariah` | Investasi saham syariah, analisis, tips |
| `tips` | Tips umum dan how-to |

## Format Frontmatter

Setiap artikel perlu frontmatter berikut:

```yaml
---
title: "Judul Artikel"
description: "Deskripsi singkat 1-2 kalimat untuk SEO"
category: "keuangan"
publishedAt: "2025-06-01"
tags: ["tag1", "tag2"]
relatedTool: "budget"        # opsional — tampilkan CTA tool VersoKit
crossPromo: true             # opsional — tampilkan widget SmartScreener
lang: "id"
author: "VersoKit"
---
```

### relatedTool ID yang Tersedia

| ID | Tool |
|---|---|
| `budget` | Budget Planner |
| `futsal` | Futsal Scoreboard |
| `ibadah-tracker` | Ibadah Tracker |
| `debt-tracker` | Debt Payoff Tracker |
| `invoice` | Invoice Generator |
| `americano` | Americano Generator |
| `tennis` | Tennis Generator |
| `habit-tracker` | Habit Tracker |
| `quran` | Al-Quran Digital |
| `prayer-times` | Jadwal Sholat & Kiblat |

> File `.docx` di folder ini tidak akan tampil di website.
