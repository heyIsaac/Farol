'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';

export const CtaSection: React.FC = () => {
  return (
    <section className="relative z-20 min-h-screen bg-[#25B610] text-white flex items-center overflow-hidden py-20 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left text column */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div
              className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center p-3 mb-8 shadow-inner"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <Image
                src="/assets/imgs/logo-farol-icon.svg"
                alt="Logo Farol"
                width={48}
                height={48}
                className="w-10 h-10 object-contain"
              />
            </div>

            <h2
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white font-rethink leading-[1.1] mb-10 max-w-xl"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Em situações de emergência, a melhor resposta é uma voz que cuida.
            </h2>

            <div
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <Button
                asChild
                className="bg-white hover:bg-gray-50 text-[#54BF44] font-montserrat font-semibold text-lg rounded-[32px] px-10 py-7 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Link href="/cadastro">Baixar aplicativo</Link>
              </Button>
            </div>
          </div>

          {/* Right image with radar pulse */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[400px] sm:min-h-[550px]">
            {/* Animated Radar Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-1">
              <div className="relative w-[600px] h-[600px]">
                <span className="radar-circle radar-1" />
                <span className="radar-circle radar-2" />
                <span className="radar-circle radar-3" />
              </div>
            </div>

            {/* App Mockup Image */}
            <div
              className="relative z-10 max-w-[550px] w-full"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <Image
                src="/assets/imgs/cta-img.webp"
                alt="App Farol"
                width={600}
                height={600}
                priority
                className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
