'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/shared/ui/button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/imgs/logo-farol-preto.svg"
              alt="Farol"
              width={130}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-2 border-[#54BF44] text-[#54BF44] hover:bg-[#e9ecef] hover:text-[#54BF44] rounded-full px-6 py-2.5 font-medium transition-all shadow-none hover:shadow-md"
            >
              <Link href="/app">Login</Link>
            </Button>
            <Button
              asChild
              className="bg-[#54BF44] hover:bg-[#459A37] text-white rounded-full px-6 py-2.5 font-semibold transition-all shadow-sm hover:shadow-lg"
            >
              <Link href="/cadastro">Fazer parte</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#263228] hover:text-[#54BF44] p-2 focus:outline-none"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-3">
            <Button
              asChild
              variant="outline"
              className="w-full border-2 border-[#54BF44] text-[#54BF44] rounded-full py-3 font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/app">Login</Link>
            </Button>
            <Button
              asChild
              className="w-full bg-[#54BF44] hover:bg-[#459A37] text-white rounded-full py-3 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/cadastro">Fazer parte</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
