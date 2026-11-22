'use client';

import React from 'react';
import Image from 'next/image';

export const SignupVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-screen bg-[#25B610] text-white flex flex-col items-center justify-center p-8 lg:p-12 overflow-hidden sticky top-0">
      {/* Floating background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-1">
        <div className="absolute rounded-full bg-white/10 bg-shape-1" />
        <div className="absolute rounded-full bg-white/10 bg-shape-2" />
        <div className="absolute rounded-full bg-white/10 bg-shape-3" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center max-w-lg">
        {/* White Farol Logo */}
        <div className="mb-8 w-44">
          <Image
            src="/assets/imgs/logo-farol-branco.svg"
            alt="Farol"
            width={176}
            height={50}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold font-rethink text-white mb-10 leading-snug">
          Uma voz que cuida e protege
        </h2>

        {/* Floating Plant Image */}
        <div className="relative animate-[float-plant_4s_ease-in-out_infinite] max-w-[420px] w-full">
          <Image
            src="/assets/imgs/plant.webp"
            alt="Planta crescendo"
            width={450}
            height={340}
            priority
            className="w-full h-auto object-contain brightness-110 drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};
