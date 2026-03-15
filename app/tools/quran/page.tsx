'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useLang } from '@/components/Providers';
import { 
  Book, 
  Search, 
  Star, 
  Settings2, 
  ChevronLeft, 
  BookOpen, 
  Loader2,
  Bookmark,
  Share2,
  List,
  Pin,
  FolderPlus,
  MoreVertical,
  Trash2,
  Edit3,
  Folder,
  History,
  ArrowRight,
  Info,
  PlayCircle,
  PauseCircle,
  Volume2,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Repeat,
  Repeat1,
  RotateCcw,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  teksTranslation: string;
  audio: string;
}

interface UserSettings {
  showLatin: boolean;
  showTranslation: boolean;
  showTafsir: boolean;
  arabicFontSize: number;
}

interface LastRead {
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  timestamp: number;
}

interface BookmarkFolder {
  id: string;
  name: string;
  timestamp: number;
}

interface BookmarkItem {
  id: string;
  folderId: string;
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  timestamp: string;
}

interface AudioState {
  playingAyah: number | null;
  isPlaying: boolean;
  speed: number;
  repeatAyahCount: number | 'infinite';
  currentRepeatLoop: number;
  autoNextAyah: boolean;
  repeatSurah: boolean;
  loopRange: {
    start: string;
    end: string;
    isActive: boolean;
  };
}

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Digital Quran",
    search_ph: "Search surah name...",
    bookmarks: "Bookmarks",
    no_bookmarks: "No bookmarks in this folder.",
    settings: "Settings",
    latin: "Transliteration",
    translation: "Translation",
    tafsir: "Tafsir",
    tafsir_unavailable: "Tafsir not available.",
    font_size: "Arabic Font Size",
    back: "Back",
    loading: "Loading Quran data...",
    tafsir_btn: "View Tafsir",
    share: "Copy Ayah Link",
    bismillah: "In the name of Allah, Most Gracious, Most Merciful",
    last_read: "Last Read",
    resume: "Continue Reading",
    mark_last: "Pin as Last Read",
    folders: "Folders",
    new_folder: "New Folder",
    add_to_folder: "Save to Folder",
    save: "Save",
    cancel: "Cancel",
    rename: "Rename",
    delete: "Delete",
    default_folder: "Favorites",
    speed: "Speed",
    repeat: "Repeat Ayah",
    auto_next: "Auto Next",
    loop_surah: "Loop Surah",
    tahfidz_mode: "Tahfidz Range Mode",
    loop_range: "Loop Range",
    start_ayah: "Start Ayah",
    end_ayah: "End Ayah"
  },
  id: {
    title: "Al-Quran Digital",
    search_ph: "Cari nama surah...",
    bookmarks: "Bookmark",
    no_bookmarks: "Belum ada bookmark di folder ini.",
    settings: "Pengaturan",
    latin: "Teks Latin",
    translation: "Terjemahan",
    tafsir: "Tafsir",
    tafsir_unavailable: "Tafsir tidak tersedia.",
    font_size: "Ukuran Font Arab",
    back: "Kembali",
    loading: "Memuat data Al-Quran...",
    tafsir_btn: "Buka Tafsir",
    share: "Salin Link Ayat",
    bismillah: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang",
    last_read: "Terakhir Dibaca",
    resume: "Lanjutkan Membaca",
    mark_last: "Tandai Terakhir Baca",
    folders: "Folder",
    new_folder: "Folder Baru",
    add_to_folder: "Simpan ke Folder",
    save: "Simpan",
    cancel: "Batal",
    rename: "Ubah Nama",
    delete: "Hapus",
    default_folder: "Favorit",
    speed: "Kecepatan",
    repeat: "Ulang Ayat",
    auto_next: "Otomatis Lanjut",
    loop_surah: "Ulang Surah",
    tahfidz_mode: "Mode Hafalan (Range)",
    loop_range: "Ulang Jarak",
    start_ayah: "Ayat Mulai",
    end_ayah: "Ayat Akhir"
  }
};

const EDITION_MAP: Record<string, string> = {
  id: 'id.indonesian',
  en: 'en.sahih',
  es: 'es.cortes',
  pt: 'pt.samir',
  de: 'de.aburida',
  fr: 'fr.hamidullah',
  it: 'it.piccardo'
};

// --- Sub-Component: Ayah Card ---
interface AyahCardProps {
  ayah: Ayah;
  surahNum: number;
  surahName: string;
  lang: string;
  settings: UserSettings;
  bookmarks: BookmarkItem[];
  lastRead: LastRead | null;
  audioState: AudioState;
  onToggleAudio: (num: number, url: string) => void;
  onMarkLastRead: (sn: number, name: string, an: number) => void;
  onBookmark: (data: { surahNum: number; surahName: string; ayahNum: number }) => void;
}

function AyahCard({ 
  ayah, 
  surahNum, 
  surahName, 
  lang, 
  settings, 
  bookmarks, 
  lastRead, 
  audioState, 
  onToggleAudio, 
  onMarkLastRead, 
  onBookmark 
}: AyahCardProps) {
  const [tafsirData, setTafsirData] = useState<string | null>(null);
  const [isLoadingTafsir, setIsLoadingTafsir] = useState(false);
  
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const handleFetchTafsir = async () => {
    if (tafsirData || isLoadingTafsir) return;
    
    setIsLoadingTafsir(true);
    try {
      if (lang === 'id') {
        const res = await fetch(`https://equran.id/api/v2/tafsir/${surahNum}`);
        const json = await res.json();
        const ayahTafsir = json.data.tafsir.find((t: any) => t.ayat === ayah.nomorAyat);
        setTafsirData(ayahTafsir ? ayahTafsir.teks : "Tafsir tidak ditemukan.");
      } else {
        const res = await fetch(`https://api.quran.com/api/v4/tafsirs/169/by_ayah/${surahNum}:${ayah.nomorAyat}`);
        const json = await res.json();
        setTafsirData(json.tafsir && json.tafsir.text ? json.tafsir.text : "Tafsir not available.");
      }
    } catch (err) {
      console.error("Tafsir fetch error:", err);
      setTafsirData(lang === 'id' ? "Gagal memuat tafsir." : "Failed to load tafsir.");
    } finally {
      setIsLoadingTafsir(false);
    }
  };

  const isBookmarked = bookmarks.some(b => b.surahNumber === surahNum && b.ayahNumber === ayah.nomorAyat);
  const isPinned = lastRead?.surahNumber === surahNum && lastRead?.ayahNumber === ayah.nomorAyat;
  const isPlaying = audioState.playingAyah === ayah.nomorAyat && audioState.isPlaying;

  const renderTafsirContent = () => {
    if (!tafsirData) return null;

    if (lang === 'id') {
      return (
        <div className="space-y-4 text-justify leading-relaxed text-slate-700 dark:text-slate-300">
          {tafsirData.split('\n')
            .filter(paragraph => paragraph.trim() !== '')
            .map((paragraph, index) => (
              <p key={index} className="indent-4 md:indent-8">
                {paragraph.trim()}
              </p>
            ))
          }
        </div>
      );
    }

    return (
      <div 
        className="prose prose-sm md:prose-base dark:prose-invert max-w-none font-medium text-foreground leading-relaxed text-justify"
        dangerouslySetInnerHTML={{ __html: tafsirData }} 
      />
    );
  };

  return (
    <div id={`ayah-${ayah.nomorAyat}`} className="scroll-mt-24 rounded-[2rem] transition-all duration-700">
      <Card className="border-none bg-transparent shadow-none space-y-8 p-6 rounded-3xl transition-all">
        <div className="flex items-start justify-between border-b pb-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center font-black text-sm text-primary">{ayah.nomorAyat}</div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onToggleAudio(ayah.nomorAyat, ayah.audio)}
              className={cn("rounded-full", isPlaying ? "text-primary animate-pulse" : "text-muted-foreground")}
            >
              {isPlaying ? <PauseCircle className="h-6 w-6" /> : <PlayCircle className="h-6 w-6" />}
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onBookmark({ surahNum, surahName, ayahNum: ayah.nomorAyat })}
              className={cn("rounded-full", isBookmarked ? "text-rose-500" : "text-muted-foreground")}
            >
              <Star className={cn("h-5 w-5", isBookmarked && "fill-current")} />
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onMarkLastRead(surahNum, surahName, ayah.nomorAyat)}
              className={cn("rounded-full", isPinned ? "text-primary" : "text-muted-foreground")}
            >
              <Pin className={cn("h-5 w-5", isPinned && "fill-current")} />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground h-10 w-10"><Share2 className="h-4 w-4" /></Button>
        </div>

        <div className="space-y-10">
          <div 
            className="font-arabic leading-[2.5] text-right text-foreground tracking-wide" 
            style={{ fontSize: `${settings.arabicFontSize}px` }} 
          >
            {ayah.teksArab}
          </div>
          <div className="space-y-6">
            {settings.showLatin && <p className="text-sm font-bold text-primary italic leading-relaxed">{ayah.teksLatin}</p>}
            {settings.showTranslation && <p className="text-base font-medium text-muted-foreground leading-relaxed">{ayah.teksTranslation}</p>}
            
            {settings.showTafsir && (
              <div className="mt-4">
                <Accordion type="single" collapsible className="w-full" onValueChange={(val) => val === 'tafsir' && handleFetchTafsir()}>
                  <AccordionItem value="tafsir" className="border-none">
                    <AccordionTrigger className="font-black uppercase text-[10px] tracking-widest text-muted-foreground/60 py-2 hover:no-underline hover:text-primary">
                      <span className="flex items-center gap-2"><BookOpen className="h-3.5 w-3.5" />{t('tafsir_btn')}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm font-medium text-foreground bg-muted/30 p-6 md:p-10 rounded-[2.5rem] mt-4 shadow-inner border">
                      {isLoadingTafsir ? (
                        <div className="flex flex-col items-center justify-center gap-3 py-10">
                          <Loader2 className="h-8 w-8 animate-spin text-primary" />
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                            {lang === 'id' ? 'Menyusun Paragraf...' : 'Loading Tafsir...'}
                          </span>
                        </div>
                      ) : (
                        renderTafsirContent()
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

// --- Main Quran Page Component ---
export default function QuranPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  // --- View States ---
  const [view, setView] = useState<'list' | 'reader' | 'bookmarks'>('list');
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [targetScrollAyah, setTargetScrollAyah] = useState<number | null>(null);

  // --- Advanced Audio States ---
  const [audioState, setAudioState] = useState<AudioState>({
    playingAyah: null,
    isPlaying: false,
    speed: 1,
    repeatAyahCount: 1,
    currentRepeatLoop: 1,
    autoNextAyah: true,
    repeatSurah: false,
    loopRange: {
      start: '',
      end: '',
      isActive: false
    }
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // --- Local Storage States ---
  const [settings, setSettings] = useLocalStorage<UserSettings>('vk-quran-settings-multilingual-v2', {
    showLatin: true,
    showTranslation: true,
    showTafsir: false,
    arabicFontSize: 32
  });

  const [lastRead, setLastRead] = useLocalStorage<LastRead | null>('vk-quran-last-read-multilingual-v1', null);
  const [folders, setFolders] = useLocalStorage<BookmarkFolder[]>('vk-quran-folders-multilingual-v1', [
    { id: 'default', name: t('default_folder'), timestamp: Date.now() }
  ]);
  const [bookmarks, setBookmarks] = useLocalStorage<BookmarkItem[]>('vk-quran-bookmarks-multilingual-v1', []);

  // --- Modal States ---
  const [activeAyah, setActiveAyah] = useState<{ surahNum: number; surahName: string; ayahNum: number } | null>(null);
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  useEffect(() => {
    setMounted(true);
    fetchSurahList();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Sync Speed with Audio Reference
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = audioState.speed;
    }
  }, [audioState.speed]);

  // Handle Scroll to Ayah
  useEffect(() => {
    if (!loading && ayahs.length > 0 && targetScrollAyah) {
      const timer = setTimeout(() => {
        const element = document.getElementById(`ayah-${targetScrollAyah}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('bg-primary/5', 'dark:bg-primary/10');
          setTimeout(() => element.classList.remove('bg-primary/5', 'dark:bg-primary/10'), 2000);
          setTargetScrollAyah(null);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loading, ayahs, targetScrollAyah]);

  // --- AUDIO LOGIC ---
  const safePlayAudio = async (audioUrl: string) => {
    if (!audioRef.current) return;
    
    try {
      if (audioRef.current.src !== audioUrl) {
        audioRef.current.src = audioUrl;
        audioRef.current.load();
      }
      audioRef.current.playbackRate = audioState.speed;
      await audioRef.current.play();
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.warn("Audio play was safely interrupted.");
      } else {
        console.error("Audio playback failed:", error);
      }
    }
  };

  const handleAudioEnded = () => {
    setAudioState(prev => {
      // 1. Repeat Current Ayah Logic
      const shouldRepeat = prev.repeatAyahCount === 'infinite' || prev.currentRepeatLoop < (prev.repeatAyahCount as number);
      
      if (shouldRepeat) {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(e => console.warn("Retry failed:", e));
        }
        return { ...prev, currentRepeatLoop: prev.currentRepeatLoop + 1 };
      }

      // 2. Tahfidz Range Loop Logic
      if (prev.loopRange.isActive && prev.loopRange.start && prev.loopRange.end) {
        const startAyah = parseInt(prev.loopRange.start);
        const endAyah = parseInt(prev.loopRange.end);
        
        if (prev.playingAyah !== null && prev.playingAyah >= endAyah) {
          setTimeout(() => playNextAyah(startAyah), 500);
          return { ...prev, playingAyah: startAyah, currentRepeatLoop: 1 };
        }
      }

      // 3. Auto Next Logic
      if (prev.autoNextAyah) {
        const nextAyahNum = (prev.playingAyah || 0) + 1;
        const totalAyahs = selectedSurah?.jumlahAyat || 0;

        if (nextAyahNum <= totalAyahs) {
          setTimeout(() => playNextAyah(nextAyahNum), 500);
          return { ...prev, playingAyah: nextAyahNum, currentRepeatLoop: 1 };
        } else if (prev.repeatSurah) {
          // Loop Surah back to start
          setTimeout(() => playNextAyah(1), 1000);
          return { ...prev, playingAyah: 1, currentRepeatLoop: 1 };
        }
      }

      return { ...prev, playingAyah: null, isPlaying: false, currentRepeatLoop: 1 };
    });
  };

  const playNextAyah = (num: number) => {
    const targetAyah = ayahs.find(a => a.nomorAyat === num);
    if (targetAyah) {
      toggleAudio(num, targetAyah.audio);
    }
  };

  const toggleAudio = (num: number, url: string) => {
    if (audioState.playingAyah === num) {
      if (audioState.isPlaying) {
        audioRef.current?.pause();
        setAudioState(prev => ({ ...prev, isPlaying: false }));
      } else {
        audioRef.current?.play().catch(e => console.warn("Interrupted play:", e));
        setAudioState(prev => ({ ...prev, isPlaying: true }));
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = audioRef.current || new Audio();
      audio.onended = handleAudioEnded;
      audioRef.current = audio;
      
      safePlayAudio(url);
      setAudioState(prev => ({ ...prev, playingAyah: num, isPlaying: true, currentRepeatLoop: 1 }));
    }
  };

  // --- API Handlers ---
  const fetchSurahList = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://equran.id/api/v2/surat');
      const data = await res.json();
      if (data.code === 200) setSurahs(data.data);
    } catch (err) {
      toast({ title: "Error", description: "Connection failed.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const openSurah = async (surahNum: number, targetAyahNum?: number) => {
    const surah = surahs.find(s => s.nomor === surahNum);
    if (!surah) return;

    setLoading(true);
    setView('reader');
    setSelectedSurah(surah);
    
    if (targetAyahNum) {
      setTargetScrollAyah(targetAyahNum);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    try {
      const translationEdition = EDITION_MAP[lang] || 'en.sahih';
      const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNum}/editions/quran-uthmani,${translationEdition},en.transliteration,ar.alafasy`);
      const cloudData = await res.json();

      if (cloudData.code === 200) {
        const arabicAyahs = cloudData.data[0].ayahs;
        const translationAyahs = cloudData.data[1].ayahs;
        const transliterationAyahs = cloudData.data[2].ayahs;
        const audioAyahs = cloudData.data[3].ayahs;

        const mergedAyahs: Ayah[] = arabicAyahs.map((a: any, i: number) => ({
          nomorAyat: a.numberInSurah,
          teksArab: a.text,
          teksTranslation: translationAyahs[i].text,
          teksLatin: transliterationAyahs[i].text,
          audio: audioAyahs[i].audio
        }));
        
        setAyahs(mergedAyahs);
      }
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Failed to load Surah data.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const filteredSurahs = useMemo(() => {
    return surahs.filter(s => 
      s.namaLatin.toLowerCase().includes(search.toLowerCase()) || 
      s.arti.toLowerCase().includes(search.toLowerCase())
    );
  }, [surahs, search]);

  const handleMarkLastRead = (surahNum: number, surahName: string, ayahNum: number) => {
    setLastRead({
      surahNumber: surahNum,
      surahName,
      ayahNumber: ayahNum,
      timestamp: Date.now()
    });
    toast({ title: t('last_read') + " Updated", description: `${surahName} : ${ayahNum}` });
  };

  const handleBookmarkClick = (bookmark: BookmarkItem) => {
    openSurah(bookmark.surahNumber, bookmark.ayahNumber);
  };

  const handleCreateFolder = () => {
    if (!newFolderName.trim()) return;
    const newFolder: BookmarkFolder = {
      id: crypto.randomUUID(),
      name: newFolderName.trim(),
      timestamp: Date.now()
    };
    setFolders([...folders, newFolder]);
    setNewFolderName('');
    toast({ title: "Folder Created" });
  };

  const handleSaveBookmark = (folderId: string) => {
    if (!activeAyah) return;
    const newBookmark: BookmarkItem = {
      id: crypto.randomUUID(),
      folderId,
      ...activeAyah,
      timestamp: new Date().toLocaleString(lang === 'id' ? 'id-ID' : 'en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setBookmarks([...bookmarks, newBookmark]);
    setIsFolderModalOpen(false);
    setActiveAyah(null);
    toast({ title: "Saved to " + folders.find(f => f.id === folderId)?.name });
  };

  const deleteFolder = (id: string) => {
    if (id === 'default') return;
    setFolders(folders.filter(f => f.id !== id));
    setBookmarks(bookmarks.filter(b => b.folderId !== id));
    toast({ title: "Folder & Bookmarks Deleted" });
  };

  const deleteBookmark = (id: string) => {
    setBookmarks(bookmarks.filter(b => b.id !== id));
    toast({ title: "Bookmark Removed" });
  };

  if (!mounted) return null;

  return (
    <div className={cn("flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8", audioState.playingAyah && "pb-48")}>
      
      <style jsx global>{`
        .font-arabic { font-family: 'Amiri', serif; }
      `}</style>

      {/* Header UI */}
      <div className="text-center space-y-4">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
            <Book className="h-8 w-8 text-primary" />
            {t('title')}
          </h1>
          <TrustBadges />
        </div>

        <div className="flex justify-center gap-2">
          <Button 
            variant={view === 'list' ? 'default' : 'outline'} 
            onClick={() => setView('list')}
            className="rounded-full font-black uppercase text-[10px] tracking-widest px-6"
          >
            Surah
          </Button>
          <Button 
            variant={view === 'bookmarks' ? 'default' : 'outline'} 
            onClick={() => setView('bookmarks')}
            className="rounded-full font-black uppercase text-[10px] tracking-widest px-6"
          >
            {t('bookmarks')}
          </Button>
        </div>
      </div>

      {/* Floating Audio Player */}
      {audioState.playingAyah !== null && (
        <div className="fixed bottom-0 left-0 w-full bg-card/95 backdrop-blur-xl border-t-2 border-primary/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.2)] z-50 p-4 transition-all animate-in slide-in-from-bottom duration-500">
          <div className="container mx-auto space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left: Metadata */}
              <div className="flex items-center gap-4 w-full md:w-1/3">
                <div className="p-3 bg-primary rounded-2xl text-white shadow-lg shadow-primary/20">
                  <Volume2 className="h-5 w-5" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-black uppercase tracking-tight text-sm truncate">{selectedSurah?.namaLatin}</h4>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Ayah {audioState.playingAyah} of {selectedSurah?.jumlahAyat}</p>
                </div>
              </div>

              {/* Center: Controls */}
              <div className="flex items-center gap-6">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => playNextAyah(audioState.playingAyah! - 1)}
                  disabled={audioState.playingAyah === 1}
                  className="rounded-full hover:bg-primary/5"
                >
                  <SkipBack className="h-6 w-6" />
                </Button>
                
                <Button 
                  onClick={() => toggleAudio(audioState.playingAyah!, '')}
                  className="h-14 w-14 rounded-full bg-primary text-white shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  {audioState.isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                </Button>

                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => playNextAyah(audioState.playingAyah! + 1)}
                  disabled={audioState.playingAyah === selectedSurah?.jumlahAyat}
                  className="rounded-full hover:bg-primary/5"
                >
                  <SkipForward className="h-6 w-6" />
                </Button>
              </div>

              {/* Right: Settings */}
              <div className="flex items-center gap-2 w-full md:w-1/3 justify-end">
                <Select 
                  value={audioState.speed.toString()} 
                  onValueChange={(val) => setAudioState(prev => ({ ...prev, speed: parseFloat(val) }))}
                >
                  <SelectTrigger className="w-20 h-9 rounded-xl border-2 font-bold text-[10px] uppercase">
                    <SelectValue placeholder="1x" />
                  </SelectTrigger>
                  <SelectContent>
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map(s => (
                      <SelectItem key={s} value={s.toString()} className="font-bold text-[10px]">{s}x</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select 
                  value={audioState.repeatAyahCount.toString()} 
                  onValueChange={(val) => setAudioState(prev => ({ ...prev, repeatAyahCount: val === 'infinite' ? 'infinite' : parseInt(val) }))}
                >
                  <SelectTrigger className="w-24 h-9 rounded-xl border-2 font-bold text-[10px] uppercase">
                    <Repeat1 className="h-3 w-3 mr-1" />
                    <SelectValue placeholder="1x" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 3, 5, 10, 'infinite'].map(r => (
                      <SelectItem key={r} value={r.toString()} className="font-bold text-[10px]">{r === 'infinite' ? '∞' : `${r}x`}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl border-2">
                      <Settings2 className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 p-4 rounded-2xl shadow-2xl border-2">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-[10px] font-black uppercase tracking-widest">{t('auto_next')}</Label>
                        <Switch 
                          checked={audioState.autoNextAyah} 
                          onCheckedChange={(v) => setAudioState(prev => ({ ...prev, autoNextAyah: v }))} 
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label className="text-[10px] font-black uppercase tracking-widest">{t('loop_surah')}</Label>
                        <Switch 
                          checked={audioState.repeatSurah} 
                          onCheckedChange={(v) => setAudioState(prev => ({ ...prev, repeatSurah: v }))} 
                        />
                      </div>
                      <Button 
                        variant="destructive" 
                        className="w-full h-10 font-black uppercase tracking-widest text-[9px] rounded-xl mt-2"
                        onClick={() => {
                          if (audioRef.current) audioRef.current.pause();
                          setAudioState(prev => ({ ...prev, playingAyah: null, isPlaying: false }));
                        }}
                      >
                        Stop & Close
                      </Button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Tahfidz Mode: Range Controls */}
            <div className="pt-2 border-t border-dashed border-primary/10">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-accent" />
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-60">{t('tahfidz_mode')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Label className="text-[8px] font-black uppercase">{t('start_ayah')}</Label>
                  <Input 
                    type="number" 
                    min="1" 
                    max={selectedSurah?.jumlahAyat}
                    value={audioState.loopRange.start}
                    onChange={(e) => setAudioState(prev => ({ ...prev, loopRange: { ...prev.loopRange, start: e.target.value } }))}
                    className="w-14 h-8 text-center text-xs font-bold rounded-lg"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label className="text-[8px] font-black uppercase">{t('end_ayah')}</Label>
                  <Input 
                    type="number" 
                    min="1" 
                    max={selectedSurah?.jumlahAyat}
                    value={audioState.loopRange.end}
                    onChange={(e) => setAudioState(prev => ({ ...prev, loopRange: { ...prev.loopRange, end: e.target.value } }))}
                    className="w-14 h-8 text-center text-xs font-bold rounded-lg"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label className="text-[8px] font-black uppercase tracking-tighter">{t('loop_range')}</Label>
                  <Switch 
                    checked={audioState.loopRange.isActive}
                    onCheckedChange={(v) => setAudioState(prev => ({ ...prev, loopRange: { ...prev.loopRange, isActive: v } }))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings FAB */}
      <div className="fixed bottom-24 right-8 z-40 md:bottom-8">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon" className="h-14 w-14 rounded-full shadow-2xl bg-primary text-white hover:scale-110 transition-transform">
              <Settings2 className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-[2.5rem]">
            <DialogHeader><DialogTitle className="text-2xl font-black uppercase tracking-tighter">{t('settings')}</DialogTitle></DialogHeader>
            <div className="space-y-6 py-4">
              <div className="flex items-center justify-between">
                <Label className="font-bold uppercase text-[10px] tracking-widest">{t('latin')}</Label>
                <Switch checked={settings.showLatin} onCheckedChange={v => setSettings({...settings, showLatin: v})} />
              </div>
              <div className="flex items-center justify-between">
                <Label className="font-bold uppercase text-[10px] tracking-widest">{t('translation')}</Label>
                <Switch checked={settings.showTranslation} onCheckedChange={v => setSettings({...settings, showTranslation: v})} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <Label className="font-bold uppercase text-[10px] tracking-widest">{t('tafsir')}</Label>
                </div>
                <Switch checked={settings.showTafsir} onCheckedChange={v => setSettings({...settings, showTafsir: v})} />
              </div>
              <div className="space-y-3">
                <Label className="font-bold uppercase text-[10px] tracking-widest">{t('font_size')}: {settings.arabicFontSize}px</Label>
                <input type="range" min="20" max="64" value={settings.arabicFontSize} onChange={e => setSettings({...settings, arabicFontSize: parseInt(e.target.value)})} className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* VIEWS */}
      {view === 'list' && (
        <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {lastRead && (
            <Card className="bg-primary text-primary-foreground border-none rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
              <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:20px_20px]" />
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <History className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-1">{t('last_read')}</p>
                    <h2 className="text-3xl font-black uppercase tracking-tight">{lastRead.surahName}</h2>
                    <p className="text-sm font-bold opacity-80">Ayat {lastRead.ayahNumber}</p>
                  </div>
                </div>
                <Button 
                  onClick={() => openSurah(lastRead.surahNumber, lastRead.ayahNumber)}
                  className="bg-white text-primary hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 rounded-2xl shadow-xl transition-transform group-hover:scale-105"
                >
                  {t('resume')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-6 rounded-[2.5rem] border-2 shadow-xl">
            <div className="relative flex-1 w-full max-md:max-w-full max-w-md">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading && surahs.length === 0 ? (
              [...Array(9)].map((_, i) => <Card key={i} className="rounded-[2rem] h-32 animate-pulse bg-muted/20" />)
            ) : (
              filteredSurahs.map((surah) => (
                <Card 
                  key={surah.nomor} 
                  className="group border-2 hover:border-primary/20 transition-all duration-300 rounded-[2rem] overflow-hidden flex bg-card shadow-sm hover:shadow-2xl cursor-pointer"
                  onClick={() => openSurah(surah.nomor)}
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
              ))
            )}
          </div>
        </div>
      )}

      {view === 'reader' && (
        <div className="w-full max-w-4xl space-y-10 animate-in fade-in zoom-in-95 duration-500">
          <div className="flex items-center justify-between bg-card p-6 rounded-[2.5rem] border-2 shadow-xl sticky top-20 z-40 backdrop-blur-xl bg-card/90">
            <Button variant="ghost" onClick={() => setView('list')} className="rounded-full h-12 w-12 p-0 bg-muted/50">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="text-center">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-primary">{selectedSurah?.namaLatin}</h2>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">{selectedSurah?.arti} • {selectedSurah?.nomor}</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center font-arabic text-xl font-bold text-muted-foreground">{selectedSurah?.nama}</div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4 opacity-40">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="font-black uppercase tracking-widest text-xs">{t('loading')}</p>
            </div>
          ) : (
            <div className="space-y-12 pb-32">
              {selectedSurah?.nomor !== 1 && selectedSurah?.nomor !== 9 && (
                <div className="text-center py-12 space-y-4">
                  <span className="font-arabic text-4xl block">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest italic">{t('bismillah')}</p>
                </div>
              )}

              {ayahs.map((ayah) => (
                <AyahCard 
                  key={ayah.nomorAyat}
                  ayah={ayah}
                  surahNum={selectedSurah!.nomor}
                  surahName={selectedSurah!.namaLatin}
                  lang={lang}
                  settings={settings}
                  bookmarks={bookmarks}
                  lastRead={lastRead}
                  audioState={audioState}
                  onToggleAudio={toggleAudio}
                  onMarkLastRead={handleMarkLastRead}
                  onBookmark={(data) => {
                    setActiveAyah(data);
                    setIsFolderModalOpen(true);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {view === 'bookmarks' && (
        <div className="w-full space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-foreground flex items-center gap-3">
              <Bookmark className="h-6 w-6 text-rose-500 fill-current" />
              {t('bookmarks')}
            </h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="h-12 bg-primary text-white font-black uppercase tracking-widest rounded-2xl shadow-lg">
                  <FolderPlus className="mr-2 h-5 w-5" /> {t('new_folder')}
                </Button>
              </DialogTrigger>
              <DialogContent className="rounded-[2.5rem]">
                <DialogHeader><DialogTitle className="uppercase font-black">{t('new_folder')}</DialogTitle></DialogHeader>
                <div className="py-4 space-y-4">
                  <Input value={newFolderName} onChange={e => setNewFolderName(e.target.value)} placeholder="e.g. My Study List" className="h-12 font-bold" />
                  <Button onClick={handleCreateFolder} className="w-full h-12 font-black uppercase">{t('save')}</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {folders.map(folder => {
              const folderBookmarks = bookmarks.filter(b => b.folderId === folder.id);
              return (
                <Accordion key={folder.id} type="multiple" className="space-y-4">
                  <AccordionItem value={folder.id} className="border-2 rounded-[2rem] bg-card shadow-sm overflow-hidden px-6">
                    <div className="flex items-center justify-between">
                      <AccordionTrigger className="hover:no-underline py-6 flex-1">
                        <div className="flex items-center gap-4 text-left">
                          <div className="p-3 bg-muted rounded-2xl text-muted-foreground group-data-[state=open]:text-primary group-data-[state=open]:bg-primary/10 transition-colors">
                            <Folder className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-black uppercase tracking-tight">{folder.name}</h3>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{folderBookmarks.length} AYAT</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreVertical className="h-5 w-5" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="rounded-xl border-2 shadow-xl">
                          <DropdownMenuItem className="font-bold text-xs uppercase p-3 cursor-pointer"><Edit3 className="mr-2 h-4 w-4" /> {t('rename')}</DropdownMenuItem>
                          {folder.id !== 'default' && (
                            <DropdownMenuItem onClick={() => deleteFolder(folder.id)} className="font-bold text-xs uppercase p-3 cursor-pointer text-red-500"><Trash2 className="mr-2 h-4 w-4" /> {t('delete')}</DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <AccordionContent className="pb-6 border-t border-dashed">
                      <div className="pt-6 space-y-3">
                        {folderBookmarks.length === 0 ? (
                          <p className="text-center py-10 text-xs font-bold text-muted-foreground uppercase tracking-widest italic">{t('no_bookmarks')}</p>
                        ) : (
                          folderBookmarks.map(b => (
                            <div key={b.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl border-2 border-transparent hover:border-primary/20 transition-all group">
                              <button onClick={() => handleBookmarkClick(b)} className="flex-1 text-left flex items-center gap-4">
                                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center font-black text-xs shadow-sm">{b.ayahNumber}</div>
                                <div>
                                  <span className="font-black uppercase tracking-tight text-sm block">{b.surahName}</span>
                                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{b.timestamp}</span>
                                </div>
                              </button>
                              <Button variant="ghost" size="icon" onClick={() => deleteBookmark(b.id)} className="text-muted-foreground hover:text-red-500 opacity-0 group-hover:opacity-100"><Trash2 className="h-4 w-4" /></Button>
                            </div>
                          ))
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>
      )}

      {/* Save Bookmark Modal */}
      <Dialog open={isFolderModalOpen} onOpenChange={setIsFolderModalOpen}>
        <DialogContent className="rounded-[2.5rem] max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
              <Bookmark className="text-rose-500" />
              {t('add_to_folder')}
            </DialogTitle>
            <DialogDescription className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              {activeAyah?.surahName} : {activeAyah?.ayahNum}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-2">
            {folders.map(f => (
              <Button key={f.id} variant="outline" onClick={() => handleSaveBookmark(f.id)} className="w-full h-14 justify-start px-6 rounded-2xl border-2 font-bold text-sm">
                <Folder className="mr-3 h-5 w-5 text-muted-foreground" />
                {f.name}
              </Button>
            ))}
          </div>
          <div className="border-t pt-4 space-y-3">
            <Input value={newFolderName} onChange={e => setNewFolderName(e.target.value)} placeholder={t('new_folder')} className="h-12 font-bold" />
            <Button onClick={handleCreateFolder} variant="secondary" className="w-full h-12 font-black uppercase tracking-widest text-[10px]">
              <FolderPlus className="mr-2 h-4 w-4" /> {t('new_folder')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <ArticleSection toolId="quran" />
      <SmartAd />
      <SeoContent toolId="quran" />
    </div>
  );
}
