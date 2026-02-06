'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="border-2 shadow-xl rounded-[2rem] overflow-hidden">
        <CardHeader className="bg-primary/5 p-8 border-b">
          <CardTitle className="text-3xl font-black uppercase tracking-tighter flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            Terms of Service
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="font-bold text-foreground">Last Updated: May 2024</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">1. Acceptance of Terms</h2>
            <p>
              By accessing or using VersoKit.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">2. Description of Service</h2>
            <p>
              VersoKit provides a collection of web-based tools for sports, business, and utility purposes. These tools are provided "as is" and are designed to process data locally in the user's browser.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">3. User Responsibility</h2>
            <p>
              You are responsible for the data you input into our tools. Since we do not store your data on our servers, you are solely responsible for exporting/downloading your results (e.g., CSV exports, PNG images, PDF invoices) before clearing your browser cache or switching devices.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">4. Limitations of Liability</h2>
            <p>
              VersoKit shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our tools, including but not limited to loss of data, errors in calculations, or financial losses from business tools.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">5. Intellectual Property</h2>
            <p>
              All branding, designs, and source code of VersoKit are the property of VersoKit. Users are granted a non-exclusive license to use the tools for personal or business purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the site following any changes signifies your acceptance of the new terms.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
