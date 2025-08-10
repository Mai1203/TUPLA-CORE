import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'; // Estilos globales de Mantine
import AOSProvider from '@/components/ui/aos/AOSProvider';

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
      <body className={inter.className}>
        <MantineProvider
          defaultColorScheme="light"
          theme={{
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <AOSProvider>
            {children}
          </AOSProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
