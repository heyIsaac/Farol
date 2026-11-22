'use client';

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { SignupForm } from '@/features/signup-form';
import { SignupVisual } from '@/widgets/signup-visual';

export const CadastroPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] relative flex">
      {/* Floating Close Button */}
      <Link
        href="/"
        title="Voltar à página inicial"
        className="fixed top-5 right-5 z-50 bg-white/95 hover:bg-white border-2 border-[#e9ecef] hover:border-[#54BF44] text-[#263228] hover:text-[#54BF44] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-md"
      >
        <X className="size-5" />
      </Link>

      <div className="w-full min-h-screen flex flex-col lg:flex-row">
        {/* Left column - Form */}
        <div className="w-full lg:w-1/2 min-h-screen bg-white px-6 sm:px-12 md:px-16 flex items-center justify-center overflow-y-auto no-scrollbar">
          <SignupForm />
        </div>

        {/* Right column - Visual */}
        <div className="hidden lg:block lg:w-1/2 min-h-screen">
          <SignupVisual />
        </div>
      </div>
    </div>
  );
};
