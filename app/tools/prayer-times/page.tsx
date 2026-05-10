'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLang } from '@/components/Providers';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Compass, 
  Clock, 
  Moon, 
  Sun, 
  Sunrise, 
  Sunset, 
  Navigation,
  RefreshCcw,
  Loader2,
  Info,
  Maximize2,
  CheckCircle2,
  Box
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import TrustBadges from '@/components/ui/TrustBadges';
import { ArticleSection } from '@/components/ArticleSection';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Prayer Times & Qibla",
    get_location: "Use Current Location",
    detecting: "Locating...",
    next_prayer: "Next Prayer",
    imsak: "Imsak",
    fajr: "Fajr",
    dhuhr: "Dhuhr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Isha",
    qibla_title: "Qibla Finder",
    qibla_desc: "Rotate your phone until the arrow points straight up at the Kaaba icon.",
    enable_compass: "Enable Live Compass",
    calibrate_btn: "Calibrate Compass",
    calibrate_title: "Calibrate Your Sensors",
    calibrate_desc: "To ensure accuracy, please move your phone in a 'Figure-8' motion for a few seconds.",
    calibrate_close: "Got it, ready!",
    location_denied: "Location access denied. Please enable GPS.",
    fetching_api: "Fetching prayer data...",
    degree: "degrees from North",
    kaaba: "Kaaba",
    kiblat: "KIBLAT",
    at: "at",
    found: "Qibla Found!"
  },
  id: {
    title: "Jadwal Sholat & Kiblat",
    get_location: "Gunakan Lokasi Saat Ini",
    detecting: "Mencari Lokasi...",
    next_prayer: "Sholat Berikutnya",
    imsak: "Imsak",
    fajr: "Subuh",
    dhuhr: "Dzuhur",
    asr: "Ashar",
    maghrib: "Maghrib",
    isha: "Isya",
    qibla_title: "Pencari Kiblat",
    qibla_desc: "Putar HP Anda sampai panah menunjuk lurus ke atas ke arah ikon Ka'bah.",
    enable_compass: "Aktifkan Kompas Live",
    calibrate_btn: "Kalibrasi Kompas",
    calibrate_title: "Kalibrasi Sensor Anda",
    calibrate_desc: "Agar arah kiblat akurat, gerakkan HP Anda membentuk angka 8 selama beberapa detik.",
    calibrate_close: "Oke, Mengerti!",
    location_denied: "Izin lokasi ditolak. Mohon aktifkan GPS.",
    fetching_api: "Mengambil data jadwal...",
    degree: "derajat dari Utara",
    kaaba: "Ka'bah",
    kiblat: "KIBLAT",
    at: "di",
    found: "Arah Kiblat Ditemukan!"
  }
};

interface PrayerTimings {
  Imsak: string;
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export default function PrayerTimesPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locationName, setLocationName] = useState<string>('');
  const [timings, setTimings] = useState<PrayerTimings | null>(null);
  const [loading, setLoading] = useState(false);
  const [nextPrayer, setNextPrayer] = useState<string | null>(null);
  const [qiblaAngle, setQiblaAngle] = useState<number | null>(null);
  const [deviceHeading, setDeviceHeading] = useState<number>(0);
  const [isCompassActive, setIsCompassActive] = useState(false);
  const [isCalibrating, setIsCalibrationOpen] = useState(false);
  const [isAligned, setIsAligned] = useState(false);

  const prevAlignedRef = useRef(false);

  // --- Audio Feedback Logic ---
  const playBeep = useCallback(() => {
    try {
      const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      
      const audioCtx = new AudioContextClass();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      console.error("Audio feedback error:", e);
    }
  }, []);

  // --- Alignment Monitor ---
  useEffect(() => {
    if (qiblaAngle === null || !isCompassActive) return;

    const needleRotation = (qiblaAngle - deviceHeading + 360) % 360;
    const diff = Math.min(needleRotation, 360 - needleRotation);
    const aligned = diff <= 2;

    if (aligned && !prevAlignedRef.current) {
      // Just entered the aligned state
      if (navigator.vibrate) {
        navigator.vibrate([50, 50, 50]);
      }
      playBeep();
    }

    setIsAligned(aligned);
    prevAlignedRef.current = aligned;
  }, [deviceHeading, qiblaAngle, isCompassActive, playBeep]);

  const handleGetLocation = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      toast({ title: "Error", description: "Browser does not support Geolocation.", variant: "destructive" });
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ lat: latitude, lng: longitude });
        calculateQibla(latitude, longitude);
        fetchLocationName(latitude, longitude);
        fetchPrayerTimes(latitude, longitude);
      },
      (err) => {
        console.error(err);
        toast({ title: "Error", description: t('location_denied'), variant: "destructive" });
        setLoading(false);
      },
      { enableHighAccuracy: true }
    );
  };

  const fetchLocationName = async (lat: number, lng: number) => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
      const data = await res.json();
      if (data.address) {
        const village = data.address.village || data.address.suburb || data.address.neighbourhood || '';
        const city = data.address.city || data.address.town || data.address.city_district || '';
        const country = data.address.country || '';
        const name = [village, city, country].filter(Boolean).join(', ');
        setLocationName(name);
      }
    } catch (err) {
      console.error("Nominatim Error:", err);
    }
  };

  const fetchPrayerTimes = async (lat: number, lng: number) => {
    try {
      const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=20`);
      const data = await res.json();
      if (data.code === 200) {
        setTimings(data.data.timings);
        findNextPrayer(data.data.timings);
      }
    } catch (err) {
      toast({ title: "API Error", description: "Failed to fetch prayer times.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const calculateQibla = (lat: number, lng: number) => {
    const kaabaLat = 21.422487 * (Math.PI / 180);
    const kaabaLng = 39.826206 * (Math.PI / 180);
    const userLat = lat * (Math.PI / 180);
    const userLng = lng * (Math.PI / 180);
    const dLng = kaabaLng - userLng;
    const y = Math.sin(dLng) * Math.cos(kaabaLat);
    const x = Math.cos(userLat) * Math.sin(kaabaLat) - Math.sin(userLat) * Math.cos(kaabaLat) * Math.cos(dLng);
    let qAngle = Math.atan2(y, x) * (180 / Math.PI);
    setQiblaAngle((qAngle + 360) % 360);
  };

  const startCompass = async () => {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const response = await (DeviceOrientationEvent as any).requestPermission();
        if (response === 'granted') {
          initOrientationListeners();
        }
      } catch (err) {
        console.error("iOS Permission Error:", err);
      }
    } else {
      initOrientationListeners();
    }
  };

  const initOrientationListeners = () => {
    const eventTarget = window as unknown as EventTarget;
    if ('ondeviceorientationabsolute' in window) {
      eventTarget.addEventListener('deviceorientationabsolute', handleOrientation as EventListener, true);
    } else {
      eventTarget.addEventListener('deviceorientation', handleOrientation as EventListener, true);
    }
    setIsCompassActive(true);
  };

  const handleOrientation = (e: DeviceOrientationEvent) => {
    let heading = 0;
    if ((e as any).webkitCompassHeading) {
      heading = (e as any).webkitCompassHeading;
    } else if (e.alpha !== null) {
      heading = 360 - e.alpha;
    }
    setDeviceHeading(heading);
  };

  const findNextPrayer = (times: any) => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const prayerOrder = [
      { name: 'Fajr', key: 'Fajr' },
      { name: 'Dhuhr', key: 'Dhuhr' },
      { name: 'Asr', key: 'Asr' },
      { name: 'Maghrib', key: 'Maghrib' },
      { name: 'Isha', key: 'Isha' }
    ];

    for (const prayer of prayerOrder) {
      const [h, m] = times[prayer.key].split(':').map(Number);
      const prayerMinutes = h * 60 + m;
      if (prayerMinutes > currentTime) {
        setNextPrayer(prayer.key);
        return;
      }
    }
    setNextPrayer('Fajr'); 
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('deviceorientationabsolute', handleOrientation);
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-6xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <Navigation className="h-8 w-8 text-primary animate-pulse" />
          {t('title')}
        </h1>
        <TrustBadges />
      </div>

      {!coords ? (
        <Card className="w-full max-w-xl shadow-2xl border-2 rounded-[2.5rem] overflow-hidden animate-in fade-in zoom-in duration-500">
          <CardContent className="p-12 flex flex-col items-center text-center space-y-6">
            <div className="p-6 bg-primary/10 rounded-full text-primary">
              <MapPin size={48} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black uppercase tracking-tight">{lang === 'id' ? 'Deteksi Lokasi Otomatis' : 'Detect Location'}</h2>
              <p className="text-muted-foreground font-medium text-sm">
                {lang === 'id' 
                  ? 'Gunakan GPS untuk hasil jadwal sholat dan kiblat yang paling presisi.' 
                  : 'Use GPS for the most precise prayer times and Qibla direction.'}
              </p>
            </div>
            <Button 
              onClick={handleGetLocation} 
              disabled={loading}
              className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl transition-all active:scale-95"
            >
              {loading ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : <Navigation className="mr-2 h-6 w-6" />}
              {loading ? t('detecting') : t('get_location')}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex justify-between items-center bg-card p-6 rounded-3xl border-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary"><MapPin className="h-6 w-6" /></div>
                <div>
                  <h2 className="font-black uppercase tracking-tight text-lg truncate max-w-[200px] md:max-w-md">
                    {locationName || (lang === 'id' ? 'Lokasi Terdeteksi' : 'Detected Location')}
                  </h2>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    {new Date().toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long' })}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleGetLocation} className="rounded-full hover:bg-muted shrink-0">
                <RefreshCcw size={20} className={loading ? "animate-spin" : ""} />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {timings && (Object.entries(timings) as [keyof PrayerTimings, string][]).filter(([k]) => ['Imsak', 'Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].includes(k)).map(([key, time]) => {
                const isNext = nextPrayer === key;
                return (
                  <Card 
                    key={key} 
                    className={cn(
                      "border-2 transition-all duration-500 rounded-3xl overflow-hidden group",
                      isNext ? "border-primary bg-primary text-primary-foreground shadow-xl scale-105 z-10" : "hover:border-primary/20 bg-card"
                    )}
                  >
                    <CardContent className="p-6 flex flex-col items-center gap-2">
                      <div className={cn(
                        "p-2 rounded-xl transition-colors",
                        isNext ? "bg-white/20" : "bg-muted group-hover:bg-primary/5"
                      )}>
                        {key === 'Fajr' || key === 'Imsak' ? <Sunrise size={20} /> : 
                         key === 'Dhuhr' ? <Sun size={20} /> :
                         key === 'Maghrib' || key === 'Asr' ? <Sunset size={20} /> :
                         <Moon size={20} />}
                      </div>
                      
                      <span className={cn("text-[10px] font-black uppercase tracking-widest opacity-60", isNext && "opacity-100")}>{t(key.toLowerCase())}</span>
                      <span className="text-2xl font-black tabular-nums">{time}</span>
                      
                      {isNext && (
                        <div className="mt-2 bg-white/20 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter animate-pulse">
                          {t('next_prayer')}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Card className={cn(
              "shadow-2xl border-4 rounded-[3rem] overflow-hidden transition-all duration-500 bg-card relative",
              isAligned ? "border-emerald-500 shadow-emerald-500/20" : "border-primary/10"
            )}>
              <CardHeader className={cn(
                "p-6 text-white border-b transition-colors duration-500",
                isAligned ? "bg-emerald-600" : "bg-primary"
              )}>
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Compass className="h-5 w-5" /> {t('qibla_title')}
                  </div>
                  {isAligned && (
                    <div className="flex items-center gap-1 animate-in zoom-in">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-[10px]">{t('found')}</span>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 flex flex-col items-center space-y-10">
                
                <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
                  
                  {/* Outer Ring */}
                  <div className={cn(
                    "absolute inset-0 rounded-full border-4 flex items-center justify-center bg-black/[0.02] shadow-inner transition-colors duration-500",
                    isAligned ? "border-emerald-500/30" : "border-muted/20"
                  )}>
                    {/* STATIC TARGET: KAABA AT 12 O'CLOCK */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                      <div className="p-2 bg-black rounded-lg shadow-xl border-2 border-amber-400 transform transition-transform hover:scale-110">
                        <Box className="h-6 w-6 text-amber-400" />
                      </div>
                      <span className="text-[8px] font-black text-amber-600 uppercase tracking-widest">Kaaba</span>
                    </div>
                    
                    {/* Decorative Ticks */}
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "absolute w-0.5 rounded-full transition-all duration-500",
                          i % 9 === 0 ? "h-4 bg-muted-foreground/30" : "h-2 bg-muted-foreground/10",
                          isAligned && "bg-emerald-500/40"
                        )} 
                        style={{ transform: `rotate(${i * 10}deg) translateY(-120px)` }}
                      />
                    ))}
                  </div>

                  {/* ROTATING NEEDLE */}
                  <div 
                    className="relative flex items-center justify-center transition-transform duration-100 ease-out z-10"
                    style={{ transform: `rotate(${(qiblaAngle || 0) - deviceHeading}deg)` }}
                  >
                    <Navigation 
                      className={cn(
                        "h-24 w-24 transition-all duration-500 fill-current",
                        isAligned ? "text-emerald-600 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] scale-110" : "text-primary drop-shadow-xl"
                      )} 
                    />
                  </div>

                  <div className="absolute w-5 h-5 bg-card rounded-full border-4 border-muted shadow-xl z-20" />
                </div>

                <div className="text-center space-y-3">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('kiblat')}</span>
                    <div className={cn(
                      "text-4xl font-black tabular-nums transition-colors duration-500",
                      isAligned ? "text-emerald-600" : "text-primary"
                    )}>
                      {qiblaAngle?.toFixed(1)}°
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-6 leading-relaxed max-w-xs">
                    {isAligned ? t('found') : t('qibla_desc')}
                  </p>
                </div>

                <div className="w-full space-y-3">
                  {!isCompassActive ? (
                    <Button 
                      onClick={startCompass}
                      className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg"
                    >
                      <Compass className="mr-2 h-5 w-5" /> {t('enable_compass')}
                    </Button>
                  ) : (
                    <div className={cn(
                      "flex items-center justify-center gap-2 font-bold uppercase text-[10px] tracking-widest py-3 rounded-2xl border-2 transition-all duration-500",
                      isAligned ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-blue-50 text-blue-600 border-blue-100"
                    )}>
                      <div className={cn(
                        "w-2 h-2 rounded-full animate-ping",
                        isAligned ? "bg-emerald-500" : "bg-blue-500"
                      )} />
                      {isAligned ? t('found') : 'Calibrating Direction...'}
                    </div>
                  )}

                  <Dialog open={isCalibrating} onOpenChange={setIsCalibrationOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full h-12 font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl border-2 border-dashed">
                        <RefreshCcw className="mr-2 h-4 w-4" /> {t('calibrate_btn')}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-[2.5rem] sm:max-w-md">
                      <DialogHeader className="items-center text-center space-y-4">
                        <div className="p-4 bg-orange-100 rounded-full text-orange-600">
                          <Maximize2 className="h-10 w-10 animate-pulse" />
                        </div>
                        <DialogTitle className="text-2xl font-black uppercase tracking-tight">{t('calibrate_title')}</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col items-center py-6 space-y-6">
                        <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-80">
                          <path 
                            d="M30,60 C30,30 55,30 60,60 C65,90 90,90 90,60 C90,30 65,30 60,60 C55,90 30,90 30,60 Z" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="4" 
                            className="text-primary animate-[dash_3s_linear_infinite]"
                            strokeDasharray="300"
                            strokeDashoffset="300"
                          />
                          <rect x="50" y="45" width="20" height="35" rx="4" fill="currentColor" className="text-accent animate-[move_3s_linear_infinite]" />
                          <style>{`
                            @keyframes dash { to { stroke-dashoffset: 0; } }
                            @keyframes move {
                              0% { transform: translate(-30px, 15px) rotate(-20deg); }
                              25% { transform: translate(0px, -15px) rotate(0deg); }
                              50% { transform: translate(30px, 15px) rotate(20deg); }
                              75% { transform: translate(0px, -15px) rotate(0deg); }
                              100% { transform: translate(-30px, 15px) rotate(-20deg); }
                            }
                          `}</style>
                        </svg>
                        <p className="text-center text-muted-foreground font-medium px-4 leading-relaxed">
                          {t('calibrate_desc')}
                        </p>
                      </div>
                      <DialogFooter>
                        <Button onClick={() => setIsCalibrationOpen(false)} className="w-full h-14 font-black uppercase tracking-widest rounded-2xl">
                          {t('calibrate_close')}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="bg-muted/30 p-4 rounded-2xl border-2 border-dashed flex gap-3 w-full">
                  <Info className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-[9px] font-bold text-muted-foreground uppercase leading-relaxed">
                    {lang === 'id' 
                      ? "Arah Ka'bah di Makkah adalah arah tujuan sholat bagi umat Muslim di seluruh dunia." 
                      : "The Kaaba in Mecca is the direction Muslims around the world face during their prayers."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <ArticleSection toolId="prayer-times" />
      <SmartAd />
      <SeoContent toolId="prayer-times" />
    </div>
  );
}
