import type { Metadata } from 'next';
import { Rethink_Sans, Montserrat } from 'next/font/google';
import Script from 'next/script';
import { AosInit } from '@/shared/ui/AosInit';
import './globals.css';

const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-rethink',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Farol - Sua luz em momentos difíceis',
  description:
    'Uma assistente de voz inteligente e empática, pronta para ajudar em desastres — com abrigo, apoio e informação certa, na hora certa.',
  icons: {
    icon: '/assets/imgs/logo-farol-icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${rethinkSans.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-white font-sans text-[#263228] antialiased selection:bg-[#DEF3C6] selection:text-[#263228]">
        <AosInit />
        {children}
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.1/build/spline-viewer.js"
          strategy="afterInteractive"
        />
        <Script id="remove-spline-badge" strategy="afterInteractive">
          {`
            function removeSplineLogo() {
              document.querySelectorAll('spline-viewer').forEach(function(viewer) {
                if (viewer.shadowRoot) {
                  const logo = viewer.shadowRoot.querySelector('#logo');
                  if (logo) logo.remove();
                }
              });
            }
            window.addEventListener('DOMContentLoaded', function() {
              removeSplineLogo();
              setTimeout(removeSplineLogo, 1000);
              setTimeout(removeSplineLogo, 2000);
              setTimeout(removeSplineLogo, 4000);
            });
          `}
        </Script>
      </body>
    </html>
  );
}
