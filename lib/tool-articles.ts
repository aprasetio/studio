/**
 * Centralized SEO Article Repository for VersoKit tools.
 * Supports: en, id, es, pt, de, fr, it.
 */

export interface ArticleSection {
  title: string;
  content: string;
}

export interface ToolArticle {
  title: string;
  sections: ArticleSection[];
}

export interface ArticleCollection {
  [toolId: string]: {
    [lang: string]: ToolArticle;
  };
}

export const TOOL_ARTICLES: ArticleCollection = {
  "image-resizer": {
    en: {
      title: "How to Properly Resize Images for the Web",
      sections: [
        {
          title: "The Importance of Image Dimensions",
          content: "Large images can significantly slow down your website. By resizing your photos to the exact width needed for your blog or social media profile, you improve loading speeds and user experience."
        },
        {
          title: "Maintaining Aspect Ratio",
          content: "Always keep the 'Lock Aspect Ratio' setting enabled to avoid stretching or squeezing your images. This ensures your photos look natural and professional after resizing."
        },
        {
          title: "100% Privacy",
          content: "VersoKit processes your images locally. Unlike online converters that upload your data, our tool works entirely in your browser memory."
        }
      ]
    },
    id: {
      title: "Cara Mengubah Ukuran Gambar untuk Kebutuhan Online",
      sections: [
        {
          title: "Pentingnya Dimensi Gambar",
          content: "Gambar yang terlalu besar dapat memperlambat website Anda. Gunakan alat ini untuk menyesuaikan lebar dan tinggi gambar sesuai kebutuhan media sosial atau blog."
        },
        {
          title: "Menjaga Rasio Gambar",
          content: "Pastikan fitur 'Kunci Rasio' aktif agar gambar tidak terlihat gepeng atau tertarik. Ini menjaga kualitas visual foto Anda tetap profesional."
        }
      ]
    }
  },
  "image-cropper": {
    en: {
      title: "Perfectly Cropped Photos for Social Media",
      sections: [
        {
          title: "Why Use Aspect Ratio Presets?",
          content: "Social media platforms have specific requirements. Instagram posts look best at 1:1 (Square), while Facebook cover photos or YouTube thumbnails require 16:9 (Landscape). Our presets make this effortless."
        },
        {
          title: "Client-Side Processing",
          content: "Your privacy matters. Our image cropper runs entirely on your device. Your sensitive documents or personal photos are never transmitted to our servers."
        }
      ]
    },
    id: {
      title: "Potong Foto Sesuai Ukuran Media Sosial",
      sections: [
        {
          title: "Menggunakan Preset Rasio",
          content: "Setiap media sosial memiliki standar ukuran berbeda. Gunakan preset 1:1 untuk feed Instagram atau 16:9 untuk thumbnail video agar tampilan selalu pas."
        },
        {
          title: "Privasi Terjamin",
          content: "Proses pemotongan gambar dilakukan sepenuhnya di perangkat Anda. Foto tidak pernah dikirim ke server mana pun."
        }
      ]
    }
  },
  "tennis": {
    en: {
      title: "Mastering Your Tennis Mixer with Our Match Generator",
      sections: [
        {
          title: "How to Set Up Your Tournament",
          content: "Setting up a social tennis session has never been easier. Start by entering your <b>Number of Players</b> and <b>Total Duration</b>. Our generator will automatically calculate how many rounds fit into your time slot."
        }
      ]
    },
    id: {
      title: "Panduan Lengkap Generator Jadwal Tenis Ganda",
      sections: [
        {
          title: "Cara Mengatur Turnamen Anda",
          content: "Mengatur sesi tenis sosial kini lebih mudah. Mulailah dengan memasukkan <b>Jumlah Pemain</b> dan <b>Durasi Sewa Lapangan</b>."
        }
      ]
    }
  }
};
