'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Zap, ShieldCheck, WifiOff } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-5xl font-black uppercase tracking-tighter text-foreground md:text-6xl">
          About VersoKit
        </h1>
        <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
          We build simple, powerful, and privacy-first web tools that help you get things done without the bloat.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <Card className="border-2 shadow-xl rounded-[2.5rem] p-8 md:p-12">
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In a world where every website wants your email address and data, VersoKit stands for something different. Our mission is to provide professional-grade tools that run entirely in your browser. No login required, no data collection, just pure utility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t">
              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-2xl w-fit text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-bold uppercase text-sm tracking-widest">Ultra Fast</h3>
                <p className="text-sm text-muted-foreground">Built with Next.js and optimized for instant loading, even on slow connections.</p>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-green-100 rounded-2xl w-fit text-green-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-bold uppercase text-sm tracking-widest">Privacy First</h3>
                <p className="text-sm text-muted-foreground">Your sensitive data never leaves your device. Everything happens locally in your browser.</p>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-orange-100 rounded-2xl w-fit text-orange-600">
                  <WifiOff className="h-6 w-6" />
                </div>
                <h3 className="font-bold uppercase text-sm tracking-widest">Offline Ready</h3>
                <p className="text-sm text-muted-foreground">Our tools are designed to work perfectly without an internet connection once loaded.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted/30 p-10 rounded-[3rem] text-center border-2 border-dashed">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Built for Everyone</h2>
          <p className="text-muted-foreground font-medium max-w-xl mx-auto">
            Whether you're a futsal referee, a small business owner, or someone who just needs to compress a photo quickly, VersoKit is here to help. 
          </p>
        </div>
      </div>
    </div>
  );
}
