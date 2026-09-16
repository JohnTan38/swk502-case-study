import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SWK502 Aisyah Case Study | SUSS Casework & Family Intervention',
  description: 'A bioecological case formulation and dual-focus family intervention for the Aisyah family. Grounded in Bronfenbrenner PPCT, Functional Casework, and Family Systems.',
  keywords: ['SWK502', 'SUSS', 'Casework', 'Family Intervention', 'Aisyah Case Study', 'Bronfenbrenner PPCT', 'Functional Theory', 'Genogram', 'Eco-map'],
  authors: [{ name: 'SUSS Social Work Master Candidates' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased selection:bg-sky-500 selection:text-white min-h-screen text-slate-900">
        {children}
      </body>
    </html>
  );
}
