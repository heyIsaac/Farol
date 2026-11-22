'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/entities/testimonial';

export const TestimonialsSection: React.FC = () => {
  const plantRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!plantRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const rate = (window.innerHeight - rect.top) * -0.05;
        const bounded = Math.max(-60, Math.min(60, rate));
        plantRef.current.style.transform = `translateY(${bounded}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: '#F4F1ED' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          className="text-center mb-16 text-3xl sm:text-4xl md:text-5xl font-semibold font-rethink text-[#54BF44] leading-tight"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          A voz do Farol chegou até eles
          <br className="hidden sm:inline" /> — e fez diferença.
        </h2>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="p-8 rounded-[32px] bg-[#DEF3C6] flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={String(200 + idx * 100)}
            >
              <p className="text-base text-[#263228] font-montserrat leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/60">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <strong className="block text-base font-semibold font-montserrat text-[#263228]">
                    {t.name}
                  </strong>
                  <span className="text-sm text-[#333333] font-montserrat">
                    {t.roleOrLocation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Plant Image */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <div
            className="relative animate-[float-plant_4s_ease-in-out_infinite] max-w-[600px] w-full flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Image
              ref={plantRef}
              src="/assets/imgs/plant.webp"
              alt="Planta crescendo na pedra"
              width={600}
              height={450}
              priority
              className="w-full h-auto max-w-[550px] object-contain transition-transform duration-200 ease-out will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
