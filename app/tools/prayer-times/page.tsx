'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
  AlertCircle,
  Loader2,
  Info
} from 'lucide-react';
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
    qibla_title: "Qibla Direction",
    qibla_desc: "Point your phone towards the arrow. Note: Compass accuracy depends on your device sensors.",
    enable_compass: "Enable Live Compass",
    compass_error: "Orientation sensors not available.",
    location_denied: "Location access denied. Please enable GPS.",
    fetching_api: "Fetching prayer data...",
    degree: "degrees from North",
    kaaba: "Kaaba"
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
    qibla_title: "Arah Kiblat",
    qibla_desc: "Arahkan HP Anda mengikuti panah. Akurasi tergantung pada sensor perangkat Anda.",
    enable_compass: "Aktifkan Kompas Live",
    compass_error: "Sensor orientasi tidak tersedia.",
    location_denied: "Izin lokasi ditolak. Mohon aktifkan GPS.",
    fetching_api: "Mengambil data jadwal...",
    degree: "derajat dari Utara",
    kaaba: "Ka'bah"
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
  const [timings, setTimings] = useState<PrayerTimings | null>(null);
  const [loading, setLoading] = useState(false);
  const [nextPrayer, setNextPrayer] = useState<string | null>(null);
  const [qiblaAngle, setQiblaAngle] = useState<number | null>(null);
  const [deviceHeading, setDeviceHeading] = useState<number>(0);
  const [isCompassActive, setIsCompassActive] = useState(false);

  // --- 1. GEOLOCATION LOGIC ---
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

  // --- 2. PRAYER TIMES API ---
  const fetchPrayerTimes = async (lat: number, lng: number) => {
    try {
      const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=2`);
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

  // --- 3. QIBLA CALCULATION ---
  const calculateQibla = (lat: number, lng: number) => {
    const kaabaLat = 21.422487;
    const kaabaLng = 39.826206;

    const phi1 = (lat * Math.PI) / 180;
    const phi2 = (kaabaLat * Math.PI) / 180;
    const lambda1 = (lng * Math.PI) / 180;
    const lambda2 = (kaabaLng * Math.PI) / 180;
    const deltaLambda = lambda2 - lambda1;

    const y = Math.sin(deltaLambda);
    const x = Math.cos(phi1) * Math.tan(phi2) - Math.sin(phi1) * Math.cos(deltaLambda);
    let qibla = (Math.atan2(y, x) * 180) / Math.PI;
    setQiblaAngle((qibla + 360) % 360);
  };

  // --- 4. COMPASS LOGIC ---
  const startCompass = async () => {
    // Check for iOS permission
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const response = await (DeviceOrientationEvent as any).requestPermission();
        if (response === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation, true);
          setIsCompassActive(true);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      window.addEventListener('deviceorientationabsolute', handleOrientation, true);
      // Fallback for older browsers
      window.addEventListener('deviceorientation', handleOrientation, true);
      setIsCompassActive(true);
    }
  };

  const handleOrientation = (e: DeviceOrientationEvent) => {
    // alpha: rotation around z-axis (0-360)
    // webkitCompassHeading: provided by Safari/iOS
    let heading = (e as any).webkitCompassHeading || e.alpha;
    if (heading !== null && heading !== undefined) {
      // In some browsers, alpha is counter-clockwise, we need clockwise
      if (e.absolute === false && !(e as any).webkitCompassHeading) {
        // Simple fallback
        setDeviceHeading(360 - heading);
      } else {
        setDeviceHeading(heading);
      }
    }
  };

  // --- 5. NEXT PRAYER HIGHLIGHTER ---
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
    setNextPrayer('Fajr'); // Tomorrow
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
        <Card className="w-full max-w-xl shadow-2xl border-2 rounded-[2.5rem] overflow-hidden">
          <CardContent className="p-12 flex flex-col items-center text-center space-y-6">
            <div className="p-6 bg-primary/10 rounded-full text-primary">
              <MapPin size={48} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black uppercase tracking-tight">{lang === 'id' ? 'Aktifkan Lokasi' : 'Enable Location'}</h2>
              <p className="text-muted-foreground font-medium text-sm">
                {lang === 'id' 
                  ? 'Kami membutuhkan akses GPS untuk menghitung waktu sholat dan arah kiblat yang akurat di tempat Anda.' 
                  : 'We need GPS access to calculate accurate prayer times and Qibla direction for your location.'}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          
          {/* PRAYER TIMES LIST */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex justify-between items-center bg-card p-6 rounded-3xl border-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary"><Clock className="h-6 w-6" /></div>
                <div>
                  <h2 className="font-black uppercase tracking-tight text-xl">{new Date().toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</h2>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                    <MapPin size={10} /> {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleGetLocation} className="rounded-full hover:bg-muted">
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
                      "border-2 transition-all duration-500 rounded-3xl overflow-hidden",
                      isNext ? "border-primary bg-primary text-primary-foreground shadow-xl scale-105 z-10" : "hover:border-primary/20"
                    )}
                  >
                    <CardContent className="p-6 flex flex-col items-center gap-2">
                      {key === 'Fajr' || key === 'Imsak' ? <Sunrise size={20} className={isNext ? "text-white" : "text-primary"} /> : 
                       key === 'Dhuhr' ? <Sun size={20} className={isNext ? "text-white" : "text-orange-500"} /> :
                       key === 'Maghrib' || key === 'Asr' ? <Sunset size={20} className={isNext ? "text-white" : "text-amber-600"} /> :
                       <Moon size={20} className={isNext ? "text-white" : "text-indigo-500"} />}
                      
                      <span className={cn("text-[10px] font-black uppercase tracking-widest opacity-60", isNext && "opacity-100")}>{t(key.toLowerCase())}</span>
                      <span className="text-2xl font-black tabular-nums">{time}</span>
                      
                      {isNext && (
                        <div className="mt-2 bg-white/20 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter">
                          {t('next_prayer')}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* QIBLA COMPASS */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="shadow-2xl border-2 rounded-[3rem] overflow-hidden bg-card">
              <CardHeader className="bg-primary p-6 text-white border-b">
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                  <Compass className="h-5 w-5 text-accent" /> {t('qibla_title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 flex flex-col items-center space-y-8">
                
                {/* Visual Compass */}
                <div className="relative w-64 h-64 md:w-72 md:h-72">
                  {/* Outer Circle (North/South/East/West) */}
                  <div 
                    className="absolute inset-0 rounded-full border-4 border-muted flex items-center justify-center transition-transform duration-300 ease-out"
                    style={{ transform: `rotate(${-deviceHeading}deg)` }}
                  >
                    <span className="absolute top-2 font-black text-xs text-red-500">N</span>
                    <span className="absolute bottom-2 font-black text-xs">S</span>
                    <span className="absolute right-2 font-black text-xs">E</span>
                    <span className="absolute left-2 font-black text-xs">W</span>
                    
                    {/* Compass Ticks */}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute w-0.5 h-2 bg-muted-foreground/30" 
                        style={{ transform: `rotate(${i * 30}deg) translateY(-120px)` }}
                      />
                    ))}
                  </div>

                  {/* Qibla Arrow (Points to Kaaba relative to North) */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out"
                    style={{ transform: `rotate(${(qiblaAngle || 0) - deviceHeading}deg)` }}
                  >
                    <div className="relative flex flex-col items-center">
                      <Navigation className="h-16 w-16 text-accent fill-accent" style={{ filter: 'drop-shadow(0 0 10px rgba(234, 88, 12, 0.4))' }} />
                      <div className="absolute -top-10 bg-accent text-white px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {t('kaaba')}
                      </div>
                    </div>
                  </div>

                  {/* Inner Center Point */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="text-3xl font-black text-primary tabular-nums">
                    {qiblaAngle?.toFixed(1)}°
                  </div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-4 leading-relaxed">
                    {t('qibla_desc')}
                  </p>
                </div>

                {!isCompassActive ? (
                  <Button 
                    onClick={startCompass}
                    className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg"
                  >
                    <Compass className="mr-2 h-5 w-5" /> {t('enable_compass')}
                  </Button>
                ) : (
                  <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-[10px] tracking-widest bg-green-50 px-4 py-2 rounded-full border border-green-100">
                    <Navigation size={12} className="rotate-45" /> Live Compass Active
                  </div>
                )}

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
