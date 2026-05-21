'use client';

import React, { useState, useRef, useCallback } from 'react';
import QRCode from 'react-qr-code';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, QrCode, Wifi, Contact, Link } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { SeoContent } from '@/components/SeoContent';
import TrustBadges from '@/components/ui/TrustBadges';

const UI_TEXT: Record<string, any> = {
  en: {
    title: 'QR Code Generator',
    tab_url: 'URL / Text',
    tab_wifi: 'WiFi',
    tab_vcard: 'Contact',
    label_text: 'URL or Text',
    placeholder_text: 'https://example.com or any text...',
    label_ssid: 'Network Name (SSID)',
    placeholder_ssid: 'MyHomeWifi',
    label_password: 'Password',
    placeholder_password: 'Enter password',
    label_encryption: 'Encryption',
    enc_wpa: 'WPA/WPA2',
    enc_wep: 'WEP',
    enc_none: 'None (Open)',
    label_name: 'Full Name',
    placeholder_name: 'John Doe',
    label_phone: 'Phone Number',
    placeholder_phone: '+1234567890',
    label_email: 'Email Address',
    placeholder_email: 'john@example.com',
    label_fg: 'QR Color',
    label_bg: 'Background',
    download_png: 'Download PNG',
    download_svg: 'Download SVG',
    qr_empty: 'Your QR code will appear here',
    qr_preview: 'QR Preview',
    customize: 'Customize',
    tip: 'Scan with any camera app',
  },
  id: {
    title: 'Pembuat Kode QR',
    tab_url: 'URL / Teks',
    tab_wifi: 'WiFi',
    tab_vcard: 'Kontak',
    label_text: 'URL atau Teks',
    placeholder_text: 'https://contoh.com atau teks apa saja...',
    label_ssid: 'Nama Jaringan (SSID)',
    placeholder_ssid: 'WiFiRumahku',
    label_password: 'Kata Sandi',
    placeholder_password: 'Masukkan kata sandi',
    label_encryption: 'Enkripsi',
    enc_wpa: 'WPA/WPA2',
    enc_wep: 'WEP',
    enc_none: 'Tanpa Enkripsi',
    label_name: 'Nama Lengkap',
    placeholder_name: 'Budi Santoso',
    label_phone: 'Nomor Telepon',
    placeholder_phone: '+628123456789',
    label_email: 'Alamat Email',
    placeholder_email: 'budi@email.com',
    label_fg: 'Warna QR',
    label_bg: 'Warna Latar',
    download_png: 'Unduh PNG',
    download_svg: 'Unduh SVG',
    qr_empty: 'Kode QR akan tampil di sini',
    qr_preview: 'Pratinjau QR',
    customize: 'Kustomisasi',
    tip: 'Scan dengan kamera HP',
  },
  de: {
    title: 'QR-Code Generator',
    tab_url: 'URL / Text',
    tab_wifi: 'WLAN',
    tab_vcard: 'Kontakt',
    label_text: 'URL oder Text',
    placeholder_text: 'https://beispiel.de oder beliebiger Text...',
    label_ssid: 'Netzwerkname (SSID)',
    placeholder_ssid: 'MeinHeimWLAN',
    label_password: 'Passwort',
    placeholder_password: 'Passwort eingeben',
    label_encryption: 'Verschlüsselung',
    enc_wpa: 'WPA/WPA2',
    enc_wep: 'WEP',
    enc_none: 'Keine (Offen)',
    label_name: 'Vollständiger Name',
    placeholder_name: 'Max Mustermann',
    label_phone: 'Telefonnummer',
    placeholder_phone: '+491234567890',
    label_email: 'E-Mail-Adresse',
    placeholder_email: 'max@beispiel.de',
    label_fg: 'QR-Farbe',
    label_bg: 'Hintergrund',
    download_png: 'PNG herunterladen',
    download_svg: 'SVG herunterladen',
    qr_empty: 'Ihr QR-Code erscheint hier',
    qr_preview: 'QR-Vorschau',
    customize: 'Anpassen',
    tip: 'Mit Kamera-App scannen',
  },
  es: {
    title: 'Generador de Código QR',
    tab_url: 'URL / Texto',
    tab_wifi: 'WiFi',
    tab_vcard: 'Contacto',
    label_text: 'URL o Texto',
    placeholder_text: 'https://ejemplo.com o cualquier texto...',
    label_ssid: 'Nombre de Red (SSID)',
    placeholder_ssid: 'MiRedWifi',
    label_password: 'Contraseña',
    placeholder_password: 'Introducir contraseña',
    label_encryption: 'Cifrado',
    enc_wpa: 'WPA/WPA2',
    enc_wep: 'WEP',
    enc_none: 'Ninguno (Abierto)',
    label_name: 'Nombre Completo',
    placeholder_name: 'Juan García',
    label_phone: 'Número de Teléfono',
    placeholder_phone: '+34612345678',
    label_email: 'Correo Electrónico',
    placeholder_email: 'juan@ejemplo.com',
    label_fg: 'Color QR',
    label_bg: 'Fondo',
    download_png: 'Descargar PNG',
    download_svg: 'Descargar SVG',
    qr_empty: 'Tu código QR aparecerá aquí',
    qr_preview: 'Vista Previa QR',
    customize: 'Personalizar',
    tip: 'Escanea con la cámara',
  },
  pt: {
    title: 'Gerador de QR Code',
    tab_url: 'URL / Texto',
    tab_wifi: 'WiFi',
    tab_vcard: 'Contato',
    label_text: 'URL ou Texto',
    placeholder_text: 'https://exemplo.com ou qualquer texto...',
    label_ssid: 'Nome da Rede (SSID)',
    placeholder_ssid: 'MinhaRedeWifi',
    label_password: 'Senha',
    placeholder_password: 'Inserir senha',
    label_encryption: 'Criptografia',
    enc_wpa: 'WPA/WPA2',
    enc_wep: 'WEP',
    enc_none: 'Nenhuma (Aberta)',
    label_name: 'Nome Completo',
    placeholder_name: 'João Silva',
    label_phone: 'Número de Telefone',
    placeholder_phone: '+5511987654321',
    label_email: 'Endereço de Email',
    placeholder_email: 'joao@exemplo.com',
    label_fg: 'Cor do QR',
    label_bg: 'Fundo',
    download_png: 'Baixar PNG',
    download_svg: 'Baixar SVG',
    qr_empty: 'Seu QR code aparecerá aqui',
    qr_preview: 'Pré-visualização QR',
    customize: 'Personalizar',
    tip: 'Escaneie com a câmera',
  },
  fr: {
    title: 'Générateur QR Code',
    tab_url: 'URL / Texte',
    tab_wifi: 'WiFi',
    tab_vcard: 'Contact',
    label_text: 'URL ou Texte',
    placeholder_text: 'https://exemple.fr ou n\'importe quel texte...',
    label_ssid: 'Nom du Réseau (SSID)',
    placeholder_ssid: 'MonWifiMaison',
    label_password: 'Mot de passe',
    placeholder_password: 'Entrer le mot de passe',
    label_encryption: 'Chiffrement',
    enc_wpa: 'WPA/WPA2',
    enc_wep: 'WEP',
    enc_none: 'Aucun (Ouvert)',
    label_name: 'Nom Complet',
    placeholder_name: 'Jean Dupont',
    label_phone: 'Numéro de Téléphone',
    placeholder_phone: '+33612345678',
    label_email: 'Adresse Email',
    placeholder_email: 'jean@exemple.fr',
    label_fg: 'Couleur QR',
    label_bg: 'Arrière-plan',
    download_png: 'Télécharger PNG',
    download_svg: 'Télécharger SVG',
    qr_empty: 'Votre QR code apparaîtra ici',
    qr_preview: 'Aperçu QR',
    customize: 'Personnaliser',
    tip: 'Scannez avec l\'appareil photo',
  },
  it: {
    title: 'Generatore QR Code',
    tab_url: 'URL / Testo',
    tab_wifi: 'WiFi',
    tab_vcard: 'Contatto',
    label_text: 'URL o Testo',
    placeholder_text: 'https://esempio.it o qualsiasi testo...',
    label_ssid: 'Nome Rete (SSID)',
    placeholder_ssid: 'MiaReteWifi',
    label_password: 'Password',
    placeholder_password: 'Inserisci password',
    label_encryption: 'Cifratura',
    enc_wpa: 'WPA/WPA2',
    enc_wep: 'WEP',
    enc_none: 'Nessuna (Aperta)',
    label_name: 'Nome Completo',
    placeholder_name: 'Mario Rossi',
    label_phone: 'Numero di Telefono',
    placeholder_phone: '+39312345678',
    label_email: 'Indirizzo Email',
    placeholder_email: 'mario@esempio.it',
    label_fg: 'Colore QR',
    label_bg: 'Sfondo',
    download_png: 'Scarica PNG',
    download_svg: 'Scarica SVG',
    qr_empty: 'Il tuo QR code apparirà qui',
    qr_preview: 'Anteprima QR',
    customize: 'Personalizza',
    tip: 'Scansiona con la fotocamera',
  },
};

type EncryptionType = 'WPA' | 'WEP' | 'nopass';

export default function QrGeneratorPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] ?? UI_TEXT['en'][key];

  const qrWrapRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<'url' | 'wifi' | 'vcard'>('url');
  const [urlText, setUrlText] = useState('');
  const [ssid, setSsid] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [encryption, setEncryption] = useState<EncryptionType>('WPA');
  const [vcName, setVcName] = useState('');
  const [vcPhone, setVcPhone] = useState('');
  const [vcEmail, setVcEmail] = useState('');
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');

  const qrValue = useCallback((): string => {
    if (activeTab === 'url') {
      return urlText.trim();
    }
    if (activeTab === 'wifi') {
      if (!ssid.trim()) return '';
      const enc = encryption === 'WPA' ? 'WPA' : encryption === 'WEP' ? 'WEP' : 'nopass';
      const escapedSsid = ssid.replace(/[\\;,":]/g, c => '\\' + c);
      const escapedPwd = wifiPassword.replace(/[\\;,":]/g, c => '\\' + c);
      return `WIFI:T:${enc};S:${escapedSsid};P:${escapedPwd};;`;
    }
    if (activeTab === 'vcard') {
      if (!vcName.trim() && !vcPhone.trim() && !vcEmail.trim()) return '';
      return [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${vcName}`,
        vcPhone ? `TEL:${vcPhone}` : '',
        vcEmail ? `EMAIL:${vcEmail}` : '',
        'END:VCARD',
      ].filter(Boolean).join('\n');
    }
    return '';
  }, [activeTab, urlText, ssid, wifiPassword, encryption, vcName, vcPhone, vcEmail]);

  const value = qrValue();
  const hasValue = value.length > 0;

  const handleDownloadSVG = () => {
    const svgEl = qrWrapRef.current?.querySelector('svg');
    if (!svgEl || !hasValue) return;
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svgEl);
    const blob = new Blob([svgStr], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({ title: 'SVG downloaded' });
  };

  const handleDownloadPNG = () => {
    const svgEl = qrWrapRef.current?.querySelector('svg');
    if (!svgEl || !hasValue) return;
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svgEl);
    const svgBlob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);
      canvas.toBlob(blob => {
        if (!blob) return;
        const pngUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = pngUrl;
        a.download = 'qrcode.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(pngUrl);
        toast({ title: 'PNG downloaded' });
      }, 'image/png');
    };
    img.src = url;
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-5xl mx-auto">
      <div className="w-full text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <QrCode className="h-8 w-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{t('title')}</h1>
        </div>
        <TrustBadges />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Panel */}
        <Card className="rounded-[2rem] border-2 shadow-sm">
          <CardContent className="p-6 space-y-6">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)}>
              <TabsList className="w-full grid grid-cols-3 rounded-xl">
                <TabsTrigger value="url" className="rounded-lg text-[11px] font-black uppercase tracking-widest gap-1.5">
                  <Link className="h-3.5 w-3.5" />
                  {t('tab_url')}
                </TabsTrigger>
                <TabsTrigger value="wifi" className="rounded-lg text-[11px] font-black uppercase tracking-widest gap-1.5">
                  <Wifi className="h-3.5 w-3.5" />
                  {t('tab_wifi')}
                </TabsTrigger>
                <TabsTrigger value="vcard" className="rounded-lg text-[11px] font-black uppercase tracking-widest gap-1.5">
                  <Contact className="h-3.5 w-3.5" />
                  {t('tab_vcard')}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="url" className="space-y-3 mt-4">
                <div className="space-y-2">
                  <Label className="text-[11px] font-black uppercase tracking-widest">{t('label_text')}</Label>
                  <textarea
                    value={urlText}
                    onChange={e => setUrlText(e.target.value)}
                    placeholder={t('placeholder_text')}
                    className="w-full min-h-[120px] resize-none rounded-xl border-2 bg-background px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
              </TabsContent>

              <TabsContent value="wifi" className="space-y-3 mt-4">
                <div className="space-y-2">
                  <Label className="text-[11px] font-black uppercase tracking-widest">{t('label_ssid')}</Label>
                  <Input value={ssid} onChange={e => setSsid(e.target.value)} placeholder={t('placeholder_ssid')} className="rounded-xl border-2" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-black uppercase tracking-widest">{t('label_password')}</Label>
                  <Input type="password" value={wifiPassword} onChange={e => setWifiPassword(e.target.value)} placeholder={t('placeholder_password')} className="rounded-xl border-2" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-black uppercase tracking-widest">{t('label_encryption')}</Label>
                  <div className="flex gap-2">
                    {(['WPA', 'WEP', 'nopass'] as EncryptionType[]).map(enc => (
                      <button
                        key={enc}
                        onClick={() => setEncryption(enc)}
                        className={`flex-1 py-2 rounded-xl border-2 text-[11px] font-black uppercase tracking-wider transition-colors ${
                          encryption === enc
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-background border-border hover:bg-muted'
                        }`}
                      >
                        {enc === 'WPA' ? t('enc_wpa') : enc === 'WEP' ? t('enc_wep') : t('enc_none')}
                      </button>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="vcard" className="space-y-3 mt-4">
                <div className="space-y-2">
                  <Label className="text-[11px] font-black uppercase tracking-widest">{t('label_name')}</Label>
                  <Input value={vcName} onChange={e => setVcName(e.target.value)} placeholder={t('placeholder_name')} className="rounded-xl border-2" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-black uppercase tracking-widest">{t('label_phone')}</Label>
                  <Input type="tel" value={vcPhone} onChange={e => setVcPhone(e.target.value)} placeholder={t('placeholder_phone')} className="rounded-xl border-2" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-black uppercase tracking-widest">{t('label_email')}</Label>
                  <Input type="email" value={vcEmail} onChange={e => setVcEmail(e.target.value)} placeholder={t('placeholder_email')} className="rounded-xl border-2" />
                </div>
              </TabsContent>
            </Tabs>

            {/* Color customization */}
            <div className="border-t pt-4 space-y-3">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{t('customize')}</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-[11px] font-black uppercase tracking-widest whitespace-nowrap">{t('label_fg')}</Label>
                  <div className="relative h-9 w-9 rounded-lg border-2 overflow-hidden cursor-pointer">
                    <input
                      type="color"
                      value={fgColor}
                      onChange={e => setFgColor(e.target.value)}
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      aria-label={t('label_fg')}
                    />
                    <div className="absolute inset-0 rounded-lg pointer-events-none" style={{ backgroundColor: fgColor }} />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Label className="text-[11px] font-black uppercase tracking-widest whitespace-nowrap">{t('label_bg')}</Label>
                  <div className="relative h-9 w-9 rounded-lg border-2 overflow-hidden cursor-pointer">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={e => setBgColor(e.target.value)}
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      aria-label={t('label_bg')}
                    />
                    <div className="absolute inset-0 rounded-lg pointer-events-none" style={{ backgroundColor: bgColor }} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preview Panel */}
        <Card className="rounded-[2rem] border-2 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">{t('qr_preview')}</CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex flex-col items-center gap-6">
            <div ref={qrWrapRef} className="w-full flex items-center justify-center p-6 rounded-2xl border-2 border-dashed bg-muted/20 min-h-[260px]">
              {hasValue ? (
                <QRCode
                  value={value}
                  size={220}
                  fgColor={fgColor}
                  bgColor={bgColor}
                  level="M"
                  style={{ width: '100%', maxWidth: '220px', height: 'auto' }}
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-muted-foreground/50">
                  <QrCode className="h-16 w-16" />
                  <p className="text-[11px] font-bold uppercase tracking-widest text-center">{t('qr_empty')}</p>
                </div>
              )}
            </div>

            {hasValue && (
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{t('tip')}</p>
            )}

            <div className="w-full grid grid-cols-2 gap-3">
              <Button
                onClick={handleDownloadPNG}
                disabled={!hasValue}
                className="h-12 font-black uppercase tracking-widest text-xs bg-primary hover:bg-primary/90"
              >
                <Download className="mr-2 h-4 w-4" /> {t('download_png')}
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadSVG}
                disabled={!hasValue}
                className="h-12 font-black uppercase tracking-widest text-xs border-2"
              >
                <Download className="mr-2 h-4 w-4" /> {t('download_svg')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <SeoContent toolId="qr-generator" />
    </div>
  );
}
