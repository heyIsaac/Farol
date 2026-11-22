'use client';

import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-[#263228] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* White Farol Logo */}
        <div className="mb-10 max-w-[340px] w-full flex justify-center">
          <Image
            src="/assets/imgs/logo-farol-branco.svg"
            alt="Farol"
            width={340}
            height={80}
            className="w-full h-auto max-w-[300px]"
          />
        </div>

        {/* Horizontal Divider */}
        <div className="w-full max-w-2xl border-t border-white/20 mb-8" />

        {/* Copyright notice */}
        <p className="text-white/85 text-sm sm:text-base font-montserrat">
          &copy; 2025 Farol. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
