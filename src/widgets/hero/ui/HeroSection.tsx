'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/shared/ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-12 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Tagline */}
        <div className="mb-4">
          <span className="inline-block text-[#54BF44] font-montserrat font-semibold text-xs sm:text-sm tracking-wider uppercase">
            INTELIGÊNCIA ARTIFICIAL EMPÁTICA E ACOLHEDORA
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-normal leading-[1.1] text-[#263228] mb-6 font-rethink tracking-tight max-w-4xl mx-auto">
          A voz que guia, acolhe e
          <br className="hidden sm:inline" /> conecta em meio ao caos.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#6c757d] font-montserrat font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
          Uma assistente de voz inteligente e empática, pronta para ajudar em
          <br className="hidden md:inline" /> desastres — com abrigo, apoio e informação certa, na hora certa.
        </p>

        {/* CTA Button */}
        <div className="mb-6 flex justify-center">
          <Button
            asChild
            className="bg-[#54BF44] hover:bg-[#459A37] text-white rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold font-rethink shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Link href="/app">Falar com o Farol</Link>
          </Button>
        </div>
      </div>

      {/* Decorative background circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#DEF3C6]/30 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-[#DEF3C6]/40 blur-3xl" />
      </div>
    </section>
  );
};
