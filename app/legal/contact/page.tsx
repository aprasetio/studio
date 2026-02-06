'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Card className="border-2 shadow-2xl rounded-[3rem] overflow-hidden">
        <CardHeader className="bg-primary p-10 text-primary-foreground text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Mail className="h-10 w-10 text-white" />
            </div>
          </div>
          <CardTitle className="text-4xl font-black uppercase tracking-tighter">Get in Touch</CardTitle>
          <p className="text-primary-foreground/70 font-medium mt-2">Have a question or feedback? We'd love to hear from you.</p>
        </CardHeader>
        <CardContent className="p-10 md:p-16 text-center space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Email Address</p>
            <a 
              href="mailto:support@versokit.com" 
              className="text-2xl md:text-3xl font-black text-primary hover:underline transition-all"
            >
              support@versokit.com
            </a>
          </div>

          <div className="pt-8 border-t border-dashed">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <MessageCircle className="h-5 w-5" />
              <span className="font-bold uppercase tracking-widest text-sm text-foreground">Connect with us</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto">
              We typically respond within 24-48 business hours. For feature requests or bug reports, please include as much detail as possible.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
