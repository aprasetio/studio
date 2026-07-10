'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Upload, RotateCcw, ChevronRight, Activity, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import TrustBadges from '@/components/ui/TrustBadges';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import { ArticleSection } from '@/components/ArticleSection';
import { useLang } from '@/components/Providers';

// ── Types ──────────────────────────────────────────────────────────────────

type Stage = 'upload' | 'loadingModel' | 'extracting' | 'result' | 'error';

interface ScoreItem {
  label: string;
  labelId: string;
  score: number;
  tip: string;
  tipId: string;
}

interface PhaseData {
  name: string;
  nameId: string;
  desc: string;
  descId: string;
  icon: string;
}

interface AnalysisResult {
  scores: ScoreItem[];
  ntrp: string;
  avgScore: number;
  phases: PhaseData[];
  frameCount: number;
}

// ── Constants ──────────────────────────────────────────────────────────────

const SAMPLE_FRAMES = 24;

const MP_BUNDLE = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs';
const MP_WASM   = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm';
const MP_MODEL  = 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task';

const PHASES: PhaseData[] = [
  { name: 'Preparation',   nameId: 'Persiapan',  desc: 'Ready position, weight centered',     descId: 'Posisi siap, berat seimbang',      icon: '🎾' },
  { name: 'Backswing',     nameId: 'Backswing',   desc: 'Racket drawn back, shoulder turn',    descId: 'Raket ditarik, putaran bahu',       icon: '↩️' },
  { name: 'Loading',       nameId: 'Loading',     desc: 'Weight transfer, coil complete',      descId: 'Transfer berat, koil selesai',      icon: '⚡' },
  { name: 'Impact',        nameId: 'Dampak',      desc: 'Ball contact, arm extended',          descId: 'Kontak bola, lengan memanjang',     icon: '💥' },
  { name: 'Follow-Through',nameId: 'Lanjutan',    desc: 'Racket completes arc upward',         descId: 'Raket menyelesaikan busur ke atas', icon: '🌀' },
  { name: 'Finish',        nameId: 'Selesai',     desc: 'Recovery to ready position',          descId: 'Kembali ke posisi siap',            icon: '✅' },
];

const UI = {
  en: {
    title: 'Tennis AI',
    subtitle: 'Biomechanical Swing Analyzer',
    uploadPrompt: 'Upload a tennis swing video',
    uploadSub: 'MP4, MOV, or WebM · max 200 MB · processed locally',
    choose: 'Choose Video',
    analyzing: 'Analyzing swing…',
    loadingModel: 'Loading AI model…',
    extracting: 'Extracting frames…',
    resultTitle: 'Swing Analysis',
    ntrpLabel: 'Estimated NTRP',
    phaseTitle: 'Swing Phases',
    reset: 'Analyze Another Video',
    errorTitle: 'Analysis Failed',
    errorSub: 'Could not process this video. Try a clearer, well-lit clip.',
    retry: 'Try Again',
    overall: 'Overall',
    privacy: '100% local · no upload · no account needed',
  },
  id: {
    title: 'Tennis AI',
    subtitle: 'Analisis Biomekanik Ayunan',
    uploadPrompt: 'Upload video ayunan tenis Anda',
    uploadSub: 'MP4, MOV, atau WebM · maks 200 MB · diproses lokal',
    choose: 'Pilih Video',
    analyzing: 'Menganalisis ayunan…',
    loadingModel: 'Memuat model AI…',
    extracting: 'Mengekstrak frame…',
    resultTitle: 'Hasil Analisis',
    ntrpLabel: 'Estimasi NTRP',
    phaseTitle: 'Fase Ayunan',
    reset: 'Analisis Video Lain',
    errorTitle: 'Analisis Gagal',
    errorSub: 'Tidak dapat memproses video ini. Coba klip yang lebih jelas dan terang.',
    retry: 'Coba Lagi',
    overall: 'Keseluruhan',
    privacy: '100% lokal · tidak ada upload · tidak perlu akun',
  },
};

// ── Cached module ───────────────────────────────────────────────────────────

interface MPModule {
  PoseLandmarker: {
    createFromOptions: (vision: unknown, opts: unknown) => Promise<{
      detect: (image: HTMLCanvasElement) => { landmarks: Array<Array<{ x: number; y: number; z: number }>> };
      close: () => void;
    }>;
  };
  FilesetResolver: {
    forVisionTasks: (url: string) => Promise<unknown>;
  };
}

let mpCache: MPModule | null = null;

async function loadMediaPipe(): Promise<MPModule> {
  if (mpCache) return mpCache;
  // webpackIgnore + vite-ignore prevent bundlers from trying to resolve the external URL
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const mod = await import(/* webpackIgnore: true */ /* @vite-ignore */ MP_BUNDLE);
  mpCache = mod as MPModule;
  return mpCache;
}

// ── Geometry helpers ────────────────────────────────────────────────────────

function angle(
  a: { x: number; y: number },
  b: { x: number; y: number },
  c: { x: number; y: number }
): number {
  const ab = { x: a.x - b.x, y: a.y - b.y };
  const cb = { x: c.x - b.x, y: c.y - b.y };
  const dot = ab.x * cb.x + ab.y * cb.y;
  const cross = ab.x * cb.y - ab.y * cb.x;
  return (Math.atan2(Math.abs(cross), dot) * 180) / Math.PI;
}

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

const LM = {
  LShoulder: 11, RShoulder: 12,
  LElbow: 13,    RElbow: 14,
  LWrist: 15,    RWrist: 16,
  LHip: 23,      RHip: 24,
  LKnee: 25,     RKnee: 26,
  LAnkle: 27,    RAnkle: 28,
};

function scoreFrame(lm: Array<{ x: number; y: number; z: number }>): number[] {
  const get = (i: number) => lm[i] ?? { x: 0.5, y: 0.5, z: 0 };

  // 1. Stance: knee flexion (ideal 145–165°)
  const lKneeAngle = angle(get(LM.LHip), get(LM.LKnee), get(LM.LAnkle));
  const rKneeAngle = angle(get(LM.RHip), get(LM.RKnee), get(LM.RAnkle));
  const kneeAvg = (lKneeAngle + rKneeAngle) / 2;
  const stance = clamp01(1 - Math.abs(kneeAvg - 155) / 40);

  // 2. Body Coil: shoulder-hip rotation separation (X-factor)
  const shoulderAngle = Math.atan2(
    get(LM.LShoulder).y - get(LM.RShoulder).y,
    get(LM.LShoulder).x - get(LM.RShoulder).x
  ) * (180 / Math.PI);
  const hipAngle = Math.atan2(
    get(LM.LHip).y - get(LM.RHip).y,
    get(LM.LHip).x - get(LM.RHip).x
  ) * (180 / Math.PI);
  const xFactor = Math.abs(shoulderAngle - hipAngle);
  const coil = clamp01(xFactor / 30);

  // 3. Body Rotation: horizontal hip vs shoulder width
  const hipWidth = Math.abs(get(LM.LHip).x - get(LM.RHip).x);
  const shoulderWidth = Math.abs(get(LM.LShoulder).x - get(LM.RShoulder).x);
  const rotation = shoulderWidth > 0 ? clamp01(hipWidth / shoulderWidth) : 0.5;

  // 4 & 5: detect dominant arm — use whichever wrist is higher (lower y) to handle
  // both right-handed and left-handed players, and cameras from either side
  const rWristY = get(LM.RWrist).y;
  const lWristY = get(LM.LWrist).y;
  const [domShoulder, domElbow, domWrist] =
    rWristY <= lWristY
      ? [get(LM.RShoulder), get(LM.RElbow), get(LM.RWrist)]
      : [get(LM.LShoulder), get(LM.LElbow), get(LM.LWrist)];

  // 4. Contact / Elbow Extension: dominant arm elbow angle (ideal ~165°)
  const elbowAngle = angle(domShoulder, domElbow, domWrist);
  const contact = clamp01(1 - Math.abs(elbowAngle - 165) / 40);

  // 5. Follow-Through: dominant wrist height above its shoulder
  const wristAbove = domShoulder.y - domWrist.y;
  const followThrough = clamp01(wristAbove / 0.25);

  return [stance, coil, rotation, contact, followThrough];
}

function computeAnalysis(allScores: number[][]): AnalysisResult {
  const dims = 5;
  const src = allScores.length > 0 ? allScores : [[0.6, 0.55, 0.6, 0.65, 0.5]];

  // Stance: average — should be consistent throughout the swing
  // Coil, Rotation, Contact, Follow-Through: max — capture the peak of each phase,
  // not dragged down by frames where that dimension is irrelevant (e.g. follow-through
  // is ~0 in preparation frames but should reflect the best moment achieved)
  const avg = Array.from({ length: dims }, (_, i) => {
    const vals = src.map(s => s[i]);
    if (i === 0) return vals.reduce((a, b) => a + b, 0) / vals.length; // stance: average
    return Math.max(...vals); // others: peak
  });

  const DEFS = [
    {
      label: 'Stance & Footwork', labelId: 'Stance & Footwork',
      tips: [
        { en: 'Bend knees more — aim for ~145–165° for explosive movement.', id: 'Tekuk lutut lebih — targetkan ~145–165° untuk gerakan eksplosif.' },
        { en: 'Great base! Keep that athletic ready position.', id: 'Posisi bagus! Pertahankan posisi siap atletis itu.' },
      ],
    },
    {
      label: 'Body Coil (X-Factor)', labelId: 'Koil Tubuh (X-Factor)',
      tips: [
        { en: 'Increase shoulder turn separation from hips to load more power.', id: 'Tingkatkan pemisahan putaran bahu dari pinggul untuk daya lebih.' },
        { en: 'Excellent X-factor! Your shoulder-hip separation creates great power.', id: 'X-factor luar biasa! Pemisahan bahu-pinggul menghasilkan daya hebat.' },
      ],
    },
    {
      label: 'Body Rotation', labelId: 'Rotasi Tubuh',
      tips: [
        { en: 'Drive hips through the shot more aggressively for power transfer.', id: 'Dorong pinggul lebih agresif saat memukul untuk transfer daya.' },
        { en: 'Strong hip drive — power is transferring efficiently.', id: 'Dorongan pinggul kuat — daya berpindah efisien.' },
      ],
    },
    {
      label: 'Contact Point & Arm Extension', labelId: 'Titik Kontak & Ekstensi Lengan',
      tips: [
        { en: 'Extend arm more at contact — aim for ~165° elbow angle.', id: 'Perpanjang lengan saat kontak — targetkan sudut siku ~165°.' },
        { en: 'Excellent arm extension at contact for maximum power.', id: 'Ekstensi lengan luar biasa saat kontak untuk daya maksimum.' },
      ],
    },
    {
      label: 'Follow-Through', labelId: 'Follow-Through',
      tips: [
        { en: 'Complete your follow-through — racket should finish above shoulder.', id: 'Selesaikan follow-through — raket harus berakhir di atas bahu.' },
        { en: 'Beautiful follow-through — racket finishing high for topspin.', id: 'Follow-through indah — raket berakhir tinggi untuk topspin.' },
      ],
    },
  ];

  const scores: ScoreItem[] = avg.map((v, i) => {
    const d = DEFS[i];
    const tip = d.tips[v >= 0.65 ? 1 : 0];
    return { label: d.label, labelId: d.labelId, score: Math.round(v * 100), tip: tip.en, tipId: tip.id };
  });

  const avgScore = Math.round(scores.reduce((a, b) => a + b.score, 0) / scores.length);
  let ntrp = '1.5–2.0';
  if (avgScore >= 80) ntrp = '4.5–5.0';
  else if (avgScore >= 70) ntrp = '4.0–4.5';
  else if (avgScore >= 60) ntrp = '3.5–4.0';
  else if (avgScore >= 50) ntrp = '3.0–3.5';
  else if (avgScore >= 40) ntrp = '2.5–3.0';
  else if (avgScore >= 30) ntrp = '2.0–2.5';

  return { scores, ntrp, avgScore, phases: PHASES, frameCount: allScores.length };
}

// ── Score colour helpers ────────────────────────────────────────────────────

function scoreColor(s: number) {
  if (s >= 75) return 'text-emerald-500';
  if (s >= 55) return 'text-amber-500';
  return 'text-rose-500';
}

function scoreBg(s: number) {
  if (s >= 75) return 'bg-emerald-500';
  if (s >= 55) return 'bg-amber-500';
  return 'bg-rose-500';
}

// ── Main component ──────────────────────────────────────────────────────────

export default function TennisAIPage() {
  const { lang } = useLang();
  const t = UI[lang as keyof typeof UI] ?? UI.en;

  const [stage, setStage] = useState<Stage>('upload');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [dragOver, setDragOver] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const reset = useCallback(() => {
    setStage('upload');
    setProgress(0);
    setResult(null);
    setErrorMsg('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, []);

  const analyzeVideo = useCallback(async (file: File) => {
    if (!file.type.startsWith('video/')) {
      setErrorMsg('Please upload a video file.');
      setStage('error');
      return;
    }

    setStage('loadingModel');
    setProgress(5);

    let mp: MPModule;
    try {
      mp = await loadMediaPipe();
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setErrorMsg(`Could not load AI model: ${msg}`);
      setStage('error');
      return;
    }

    setStage('extracting');
    setProgress(20);

    let landmarker: Awaited<ReturnType<MPModule['PoseLandmarker']['createFromOptions']>> | null = null;

    try {
      const vision = await mp.FilesetResolver.forVisionTasks(MP_WASM);
      landmarker = await mp.PoseLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: MP_MODEL,
          delegate: 'GPU',
        },
        runningMode: 'IMAGE',
        numPoses: 1,
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setErrorMsg(`Failed to initialize pose model: ${msg}`);
      setStage('error');
      return;
    }

    setProgress(40);

    const video = videoRef.current!;
    const canvas = canvasRef.current!;
    const url = URL.createObjectURL(file);

    try {
      video.src = url;
      await new Promise<void>((res, rej) => {
        video.onloadedmetadata = () => res();
        video.onerror = () => rej(new Error('Video failed to load — try a different file.'));
        setTimeout(() => rej(new Error('Video load timeout')), 15000);
      });
    } catch (e) {
      URL.revokeObjectURL(url);
      landmarker.close();
      setErrorMsg(e instanceof Error ? e.message : 'Video error');
      setStage('error');
      return;
    }

    const duration = video.duration;
    const allFrameScores: number[][] = [];

    for (let i = 0; i < SAMPLE_FRAMES; i++) {
      video.currentTime = (i / (SAMPLE_FRAMES - 1)) * duration;
      await new Promise<void>(res => {
        const h = () => { video.removeEventListener('seeked', h); res(); };
        video.addEventListener('seeked', h);
      });

      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 360;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        try {
          const det = landmarker!.detect(canvas);
          if (det.landmarks?.[0]) allFrameScores.push(scoreFrame(det.landmarks[0]));
        } catch {
          // skip frame silently
        }
      }

      setProgress(40 + Math.round((i / SAMPLE_FRAMES) * 50));
    }

    landmarker.close();
    URL.revokeObjectURL(url);
    video.src = '';

    setProgress(100);
    setResult(computeAnalysis(allFrameScores));
    setStage('result');
  }, []);

  const handleFile = useCallback((file: File) => { analyzeVideo(file); }, [analyzeVideo]);

  return (
    <div className="min-h-screen bg-background">
      <video ref={videoRef} muted playsInline className="hidden" crossOrigin="anonymous" />
      <canvas ref={canvasRef} className="hidden" />

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Header */}
        <div className="text-center space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">🎾 AI · Biomechanics</p>
          <h1 className="text-3xl font-black uppercase tracking-tighter leading-none">{t.title}</h1>
          <p className="text-sm text-muted-foreground font-medium">{t.subtitle}</p>
          <p className="text-[10px] text-muted-foreground/60">{t.privacy}</p>
        </div>

        <TrustBadges />

        {/* Upload */}
        {stage === 'upload' && (
          <Card className="border-2 rounded-[2rem] shadow-xl">
            <CardContent className="p-6">
              <div
                className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-colors ${
                  dragOver
                    ? 'border-primary bg-primary/5'
                    : 'border-muted-foreground/30 hover:border-primary/50 hover:bg-muted/30'
                }`}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
              >
                <Upload className="mx-auto mb-3 h-10 w-10 text-muted-foreground/50" />
                <p className="text-sm font-bold text-foreground mb-1">{t.uploadPrompt}</p>
                <p className="text-[10px] text-muted-foreground mb-4">{t.uploadSub}</p>
                <Button className="font-black uppercase tracking-widest text-[11px] rounded-xl px-6">
                  {t.choose}
                </Button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
              />
            </CardContent>
          </Card>
        )}

        {/* Loading */}
        {(stage === 'loadingModel' || stage === 'extracting') && (
          <Card className="border-2 rounded-[2rem] shadow-xl">
            <CardContent className="p-8 space-y-5 text-center">
              <div className="flex items-center justify-center gap-3">
                <Activity className="h-6 w-6 text-primary animate-pulse" />
                <span className="font-black uppercase tracking-widest text-sm">
                  {stage === 'loadingModel' ? t.loadingModel : t.extracting}
                </span>
              </div>
              <Progress value={progress} className="h-2 rounded-full" />
              <p className="text-[10px] text-muted-foreground">{t.analyzing}</p>
            </CardContent>
          </Card>
        )}

        {/* Error */}
        {stage === 'error' && (
          <Card className="border-2 border-rose-500/30 rounded-[2rem] shadow-xl">
            <CardContent className="p-8 text-center space-y-4">
              <AlertCircle className="mx-auto h-10 w-10 text-rose-500" />
              <div>
                <p className="font-black uppercase tracking-widest text-sm mb-1">{t.errorTitle}</p>
                <p className="text-[11px] text-muted-foreground">{errorMsg || t.errorSub}</p>
              </div>
              <Button onClick={reset} variant="outline" className="font-black uppercase tracking-widest text-[10px] rounded-xl">
                {t.retry}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Result */}
        {stage === 'result' && result && (
          <div className="space-y-4">
            {/* Overall */}
            <Card className="border-2 rounded-[2rem] shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 px-6 pt-6 pb-4 text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{t.overall}</p>
                  <div className={`text-6xl font-black leading-none ${scoreColor(result.avgScore)}`}>{result.avgScore}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">/ 100</div>
                </div>
                <div className="px-6 py-4 border-t-2 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">{t.ntrpLabel}</p>
                    <p className="text-lg font-black">{result.ntrp}</p>
                  </div>
                  <Badge variant="outline" className="font-black text-[10px] tracking-widest uppercase">
                    {result.frameCount} frames
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Score breakdown */}
            <Card className="border-2 rounded-[2rem] shadow-xl">
              <CardContent className="p-5 space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Score Breakdown</p>
                {result.scores.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold">{lang === 'id' ? item.labelId : item.label}</span>
                      <span className={`text-sm font-black ${scoreColor(item.score)}`}>{item.score}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${scoreBg(item.score)}`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <div className="flex items-start gap-1.5">
                      <ChevronRight className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                      <p className="text-[10px] text-muted-foreground leading-relaxed">
                        {lang === 'id' ? item.tipId : item.tip}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Phases */}
            <Card className="border-2 rounded-[2rem] shadow-xl">
              <CardContent className="p-5 space-y-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t.phaseTitle}</p>
                <div className="grid grid-cols-2 gap-2">
                  {result.phases.map((phase, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-muted/30 border border-border/40">
                      <span className="text-lg leading-none mt-0.5">{phase.icon}</span>
                      <div>
                        <p className="text-[10px] font-black">{lang === 'id' ? phase.nameId : phase.name}</p>
                        <p className="text-[9px] text-muted-foreground leading-tight">{lang === 'id' ? phase.descId : phase.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button onClick={reset} variant="outline" className="w-full font-black uppercase tracking-widest text-[11px] h-12 rounded-2xl border-2">
              <RotateCcw className="mr-2 h-4 w-4" />
              {t.reset}
            </Button>
          </div>
        )}

        <SmartAd />
        <ArticleSection toolId="tennis-ai" />
        <SeoContent toolId="tennis-ai" />
      </div>
    </div>
  );
}
