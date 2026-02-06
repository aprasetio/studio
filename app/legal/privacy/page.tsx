'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="border-2 shadow-xl rounded-[2rem] overflow-hidden">
        <CardHeader className="bg-primary/5 p-8 border-b">
          <CardTitle className="text-3xl font-black uppercase tracking-tighter flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-primary" />
            Privacy Policy
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="font-bold text-foreground">Last Updated: May 2024</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">1. Introduction</h2>
            <p>
              VersoKit ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and tools.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">2. Local Data Processing (Privacy First)</h2>
            <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-100 dark:border-green-900 p-6 rounded-2xl text-green-800 dark:text-green-300 font-medium">
              <strong>Core Privacy Principle:</strong> Most of our tools (Scoreboards, Lineup Builder, Image Tools, CSV Helpers, etc.) process your data 100% locally in your browser. We do not transmit your documents, images, or business data to our servers.
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">3. Information We Collect</h2>
            <p>
              While tool data is local, we collect certain information to provide and improve our services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Usage Data:</strong> We use Vercel Analytics to collect anonymous data such as page views, time spent on site, and browser type.</li>
              <li><strong>Cookies:</strong> We use cookies to save your language preferences and theme settings.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">4. Third-Party Advertising (Google AdSense)</h2>
            <p>
              We use third-party advertising companies to serve ads when you visit our website. These companies (including Google) may use cookies to serve ads based on a user's prior visits to your website or other websites.
            </p>
            <p>
              Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" className="text-primary underline">Ads Settings</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your info. However, since core tool data is stored in your browser's LocalStorage, the security of that data also depends on your device security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <span className="font-bold text-foreground">support@versokit.com</span>
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
