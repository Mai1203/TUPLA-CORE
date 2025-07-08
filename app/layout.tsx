import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TUPLΛ CORE - Soluciones Tecnológicas Innovadoras',
  description: 'Desarrollo de páginas web, aplicaciones móviles y software a medida para empresas que buscan digitalizar sus operaciones. Tecnología moderna, confiable y profesional.',
  keywords: 'desarrollo web, aplicaciones móviles, software a medida, tecnología, digitalización, TUPLA CORE',
  authors: [{ name: 'TUPLΛ CORE' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.svg', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}