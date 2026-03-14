'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useLang } from '@/components/Providers';
import { 
  Book, 
  Search, 
  Star, 
  Settings2, 
  ChevronLeft, 
  BookOpen, 
  Type, 
  Info,
  Loader2,
  ChevronRight,
  Bookmark,
  Share2,
  List
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import TrustBadges from '@/components/ui/TrustBadges';
import { SmartAd } from '@/components/smart-ad';
import { SeoContent } from '@/components/SeoContent';
import { ArticleSection } from '@/components/ArticleSection';

// --- Types ---
interface Surah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
}

interface Ayah {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
}

interface TajweedAyah {
  number: number;
  text: string;
}

interface UserSettings {
  showLatin: boolean;
  showTranslation: boolean;
  showTafsir: boolean;
  showTajweed: boolean;
  arabicFontSize: number;
}

interface BookmarkItem {
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
}

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Digital Quran",
    search_ph: "Search surah name...",
    bookmarks: "My Bookmarks",
    no_bookmarks: "No bookmarks yet.",
    settings: "Reading Settings",
    latin: "Transliteration",
    translation: "Translation",
    tafsir: "Tafsir (ID)",
    tajweed: "Colored Tajweed",
    font_size: "Arabic Font Size",
    back: "Back to List",
    loading: "Loading Quran data...",
    tafsir_btn: "View Tafsir",
    share: "Copy Ayah Link",
    bismillah: "In the name of Allah, Most Gracious, Most Merciful"
  },
  id: {
    title: "Al-Quran Digital",
    search_ph: "Cari nama surah...",
    bookmarks: "Bookmark Saya",
    no_bookmarks: "Belum ada bookmark.",
    settings: "Pengaturan Baca",
    latin: "Teks Latin",
    translation: "Terjemahan",
    tafsir: "Tafsir Ringkas",
    tajweed: "Tajwid Berwarna",
    font_size: "Ukuran Font Arab",
    back: "Kembali ke Daftar",
    loading: "Memuat data Al-Quran...",
    tafsir_btn: "Buka Tafsir",
    share: "Salin Link Ayat",
    bismillah: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang"
  }
};

export default function QuranPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  // --- State ---
  const [view, setView] = useState<'list' | 'reader'>('list');
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [tajweedAyahs, setTajweedAyahs] = useState<TajweedAyah[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // --- Local Storage ---
  const [settings, setSettings] = useLocalStorage<UserSettings>('vk-quran-settings', {
    showLatin: true,
    showTranslation: true,
    showTafsir: false,
    showTajweed: true,
    arabicFontSize: 32
  });

  const [bookmarks, setBookmarks] = useLocalStorage<BookmarkItem[]>('vk-quran-bookmarks', []);

  useEffect(() => {
    setMounted(true);
    fetchSurahList();
  }, []);

  // --- API Calls ---
  const fetchSurahList = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://equran.id/api/v2/surat');
      const data = await res.json();
      if (data.code === 200) {
        setSurahs(data.data);
      }
    } catch (err) {
      toast({ title: "Error", description: "Failed to fetch surah list.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const openSurah = async (surah: Surah) => {
    setLoading(true);
    setView('reader');
    setSelectedSurah(surah);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      // Fetch Content from EQuran (Indonesian Translation & Latin)
      const res = await fetch(`https://equran.id/api/v2/surat/${surah.nomor}`);
      const data = await res.json();
      
      if (data.code === 200) {
        setAyahs(data.data.ayat);
      }

      // Fetch Tajweed from AlQuran.cloud if enabled
      if (settings.showTajweed) {
        const tajweedRes = await fetch(`https://api.alquran.cloud/v1/surah/${surah.nomor}/ar.tajweed`);
        const tajweedData = await tajweedRes.json();
        if (tajweedData.status === 'OK') {
          setTajweedAyahs(tajweedData.data.ayahs);
        }
      }
    } catch (err) {
      toast({ title: "Error", description: "Failed to load Surah content.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  // --- Logic ---
  const filteredSurahs = useMemo(() => {
    return surahs.filter(s => 
      s.namaLatin.toLowerCase().includes(search.toLowerCase()) || 
      s.arti.toLowerCase().includes(search.toLowerCase())
    );
  }, [surahs, search]);

  const toggleBookmark = (surahNumber: number, surahName: string, ayahNumber: number) => {
    const exists = bookmarks.find(b => b.surahNumber === surahNumber && b.ayahNumber === ayahNumber);
    if (exists) {
      setBookmarks(bookmarks.filter(b => !(b.surahNumber === surahNumber && b.ayahNumber === ayahNumber)));
      toast({ title: lang === 'id' ? "Bookmark dihapus" : "Bookmark removed" });
    } else {
      setBookmarks([...bookmarks, { surahNumber, surahName, ayahNumber }]);
      toast({ title: lang === 'id' ? "Ayat disimpan" : "Ayah bookmarked" });
    }
  };

  const isBookmarked = (surahNumber: number, ayahNumber: number) => {
    return !!bookmarks.find(b => b.surahNumber === surahNumber && b.ayahNumber === ayahNumber);
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <Book className="h-8 w-8 text-primary" />
          {t('title')}
        </h1>
        <TrustBadges />
      </div>

      {/* Settings Dialog Trigger */}
      <div className="fixed bottom-8 right-8 z-50">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon" className="h-14 w-14 rounded-full shadow-2xl bg-primary text-white hover:scale-110 transition-transform">
              <Settings2 className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-[2.5rem]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2">
                <Settings2 className="text-primary" />
                {t('settings')}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="tajweed" className="font-bold uppercase text-xs tracking-widest">{t('tajweed')}</Label>
                <Switch 
                  id="tajweed" 
                  checked={settings.showTajweed} 
                  onCheckedChange={(val) => setSettings({...settings, showTajweed: val})} 
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="latin" className="font-bold uppercase text-xs tracking-widest">{t('latin')}</Label>
                <Switch 
                  id="latin" 
                  checked={settings.showLatin} 
                  onCheckedChange={(val) => setSettings({...settings, showLatin: val})} 
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="translation" className="font-bold uppercase text-xs tracking-widest">{t('translation')}</Label>
                <Switch 
                  id="translation" 
                  checked={settings.showTranslation} 
                  onCheckedChange={(val) => setSettings({...settings, showTranslation: val})} 
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="tafsir" className="font-bold uppercase text-xs tracking-widest">{t('tafsir')}</Label>
                <Switch 
                  id="tafsir" 
                  checked={settings.showTafsir} 
                  onCheckedChange={(val) => setSettings({...settings, showTafsir: val})} 
                />
              </div>
              <div className="space-y-3">
                <Label className="font-bold uppercase text-xs tracking-widest">{t('font_size')}: {settings.arabicFontSize}px</Label>
                <input 
                  type="range" 
                  min="24" 
                  max="64" 
                  value={settings.arabicFontSize} 
                  onChange={(e) => setSettings({...settings, arabicFontSize: parseInt(e.target.value)})}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {view === 'list' ? (
        <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* Bookmarks Section */}
          {bookmarks.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2 pl-4">
                <Bookmark className="h-4 w-4 text-rose-500 fill-current" />
                {t('bookmarks')}
              </h2>
              <div className="flex flex-wrap gap-3">
                {bookmarks.map((b, i) => (
                  <Button 
                    key={i} 
                    variant="outline" 
                    onClick={() => {
                      const surah = surahs.find(s => s.nomor === b.surahNumber);
                      if (surah) openSurah(surah);
                    }}
                    className="rounded-xl border-2 border-rose-100 bg-rose-50 text-rose-700 font-bold text-xs uppercase hover:bg-rose-100"
                  >
                    {b.surahName} : {b.ayahNumber}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Search Header */}
          <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-6 rounded-[2.5rem] border-2 shadow-xl">
            <div className="relative flex-1 w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t('search_ph')}
                className="pl-12 h-14 rounded-2xl border-none bg-muted/50 font-medium text-lg focus-visible:ring-primary"
              />
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-muted/20 px-4 py-2 rounded-full border">
              <List className="h-3.5 w-3.5" />
              114 SURAH
            </div>
          </div>

          {/* Surah Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <Card key={i} className="rounded-[2rem] h-32 animate-pulse bg-muted/20" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSurahs.map((surah) => (
                <Card 
                  key={surah.nomor} 
                  className="group border-2 hover:border-primary/20 transition-all duration-300 rounded-[2rem] overflow-hidden flex bg-card shadow-sm hover:shadow-2xl cursor-pointer"
                  onClick={() => openSurah(surah)}
                >
                  <div className="w-16 bg-muted/30 flex items-center justify-center border-r-2 group-hover:bg-primary transition-colors">
                    <span className="font-black text-xl text-muted-foreground group-hover:text-white">{surah.nomor}</span>
                  </div>
                  <CardHeader className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-lg font-black uppercase tracking-tight">{surah.namaLatin}</CardTitle>
                        <CardDescription className="text-[10px] font-bold uppercase tracking-widest text-primary/60">{surah.arti}</CardDescription>
                      </div>
                      <div className="text-right">
                        <span className="font-arabic text-2xl font-bold leading-none text-foreground">{surah.nama}</span>
                        <p className="text-[9px] font-bold text-muted-foreground uppercase mt-1">{surah.jumlahAyat} AYAT</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="w-full max-w-4xl space-y-10 animate-in fade-in zoom-in-95 duration-500">
          
          {/* Reader Header */}
          <div className="flex items-center justify-between bg-card p-6 rounded-[2.5rem] border-2 shadow-xl sticky top-20 z-40 backdrop-blur-xl bg-card/90">
            <Button variant="ghost" onClick={() => setView('list')} className="rounded-full h-12 w-12 p-0 bg-muted/50">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="text-center">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary">
                {selectedSurah?.namaLatin}
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                {selectedSurah?.arti} • {selectedSurah?.nomor}
              </p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center font-arabic text-xl font-bold text-muted-foreground">
              {selectedSurah?.nama}
            </div>
          </div>

          {/* Content Loading */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4 opacity-40">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="font-black uppercase tracking-widest text-xs">{t('loading')}</p>
            </div>
          ) : (
            <div className="space-y-12 pb-32">
              
              {/* Bismillah */}
              {selectedSurah?.nomor !== 1 && selectedSurah?.nomor !== 9 && (
                <div className="text-center py-12 space-y-4">
                  <span className="font-arabic text-4xl block">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest italic">
                    {t('bismillah')}
                  </p>
                </div>
              )}

              {/* Ayahs */}
              {ayahs.map((ayah, index) => {
                const tajweedText = tajweedAyahs[index]?.text;
                const ayahBookmarked = isBookmarked(selectedSurah!.nomor, ayah.nomorAyat);

                return (
                  <Card 
                    key={ayah.nomorAyat} 
                    id={`ayah-${ayah.nomorAyat}`}
                    className="border-none bg-transparent shadow-none space-y-8"
                  >
                    <div className="flex items-start justify-between border-b pb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center font-black text-sm text-primary">
                          {ayah.nomorAyat}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => toggleBookmark(selectedSurah!.nomor, selectedSurah!.namaLatin, ayah.nomorAyat)}
                          className={cn("rounded-full", ayahBookmarked ? "text-rose-500" : "text-muted-foreground")}
                        >
                          <Star className={cn("h-5 w-5", ayahBookmarked && "fill-current")} />
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="text-muted-foreground h-10 w-10">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-10">
                      {/* Arabic Text */}
                      <div 
                        className="font-arabic leading-[2.5] text-right text-foreground tracking-wide"
                        style={{ fontSize: `${settings.arabicFontSize}px` }}
                        dangerouslySetInnerHTML={{ __html: (settings.showTajweed && tajweedText) ? tajweedText : ayah.teksArab }}
                      />

                      {/* Content Stack */}
                      <div className="space-y-6">
                        {settings.showLatin && (
                          <p className="text-sm font-bold text-primary italic leading-relaxed">
                            {ayah.teksLatin}
                          </p>
                        )}
                        {settings.showTranslation && (
                          <p className="text-base font-medium text-muted-foreground leading-relaxed">
                            {ayah.teksIndonesia}
                          </p>
                        )}
                        {settings.showTafsir && (
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="tafsir" className="border-none">
                              <AccordionTrigger className="font-black uppercase text-[10px] tracking-widest text-muted-foreground/60 py-2 hover:no-underline hover:text-primary">
                                <span className="flex items-center gap-2">
                                  <BookOpen className="h-3.5 w-3.5" />
                                  {t('tafsir_btn')}
                                </span>
                              </AccordionTrigger>
                              <AccordionContent className="text-sm font-medium text-foreground bg-muted/30 p-6 rounded-3xl mt-2 leading-loose">
                                {/* Ideally we fetch full tafsir data here, for now using a notice if detailed tafsir isn't mapped */}
                                Silakan buka tab Tafsir di menu navigasi utama untuk mendapatkan kajian mendalam dari ayat ini.
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Global CSS for Tajweed Colors */}
      <style jsx global>{`
        .font-arabic { font-family: 'Amiri', serif; }
        .tajweed- { color: inherit; }
        [style*="color:#222222"] { color: #222222; }
        [style*="color:#EE2222"] { color: #ef4444; } /* Ikhfa/Idgham - Red */
        [style*="color:#FF4411"] { color: #f97316; } /* Ghunnah - Orange */
        [style*="color:#00BB00"] { color: #10b981; } /* Madd - Green */
        [style*="color:#BB00BB"] { color: #8b5cf6; } /* Qalqalah - Purple */
        [style*="color:#AAAAAA"] { color: #94a3b8; } /* Silent - Gray */
      `}</style>

      <ArticleSection toolId="quran" />
      <SmartAd />
      <SeoContent toolId="quran" />
    </div>
  );
}
