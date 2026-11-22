'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

interface AppHeaderProps {
  onBack: () => void;
  canGoBack: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ onBack, canGoBack }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md py-4 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 relative flex items-center justify-center">
        {/* Back Button */}
        <button
          onClick={onBack}
          aria-label="Voltar"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-[#263228] hover:text-[#54BF44] hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="size-6" />
        </button>

        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/imgs/logo-farol-preto.svg"
            alt="FAROL"
            width={120}
            height={38}
            priority
            className="h-8 sm:h-9 w-auto"
          />
        </Link>
      </div>
    </header>
  );
};
