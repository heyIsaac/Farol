'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const SolutionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const icon = iconRef.current;

    if (!section || !icon) return;

    const ctx = gsap.context(() => {
      // Icon entry animation
      gsap.fromTo(
        icon,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Scroll timeline for text steps
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p <= 0.3) {
              setActiveStep(0);
            } else if (p <= 0.65) {
              setActiveStep(1);
            } else {
              setActiveStep(2);
            }
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="solution"
      ref={sectionRef}
      className="relative z-20 bg-white text-[#263228]"
      style={{ height: '400vh' }}
    >
      {/* Scroll spacer */}
      <div className="h-[20vh]" />

      {/* Sticky pinned viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="bg-blob-yellow absolute" />
          <div className="bg-blob-green absolute" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center">
          {/* Farol Icon */}
          <div ref={iconRef} className="mb-8">
            <Image
              src="/assets/imgs/logo-farol-icon.svg"
              alt="Farol Icon"
              width={120}
              height={120}
              className="w-24 sm:w-28 md:w-32 h-auto mx-auto drop-shadow-sm"
            />
          </div>

          {/* Text Container with 3 phases */}
          <div className="relative min-h-[160px] sm:min-h-[220px] w-full flex items-center justify-center">
            {/* Step 1 */}
            <div
              className={`transition-all duration-700 ease-out transform ${
                activeStep === 0
                  ? 'opacity-100 blur-none scale-100 block'
                  : 'opacity-0 blur-md scale-95 hidden'
              }`}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal font-rethink text-[#333333] leading-tight max-w-3xl">
                Mas e se existisse uma voz que guiasse cada pessoa,
              </h2>
            </div>

            {/* Step 2 */}
            <div
              className={`transition-all duration-700 ease-out transform ${
                activeStep === 1
                  ? 'opacity-100 blur-none scale-100 block'
                  : 'opacity-0 blur-md scale-95 hidden'
              }`}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal font-rethink text-[#333333] leading-tight max-w-3xl">
                exatamente no que ela precisa?
              </h2>
            </div>

            {/* Step 3 */}
            <div
              className={`transition-all duration-700 ease-out transform ${
                activeStep === 2
                  ? 'opacity-100 blur-none scale-100 block'
                  : 'opacity-0 blur-md scale-95 hidden'
              }`}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal font-rethink text-[#333333] leading-tight">
                Chegou o{' '}
                <span className="text-[#54BF44] font-extrabold text-5xl sm:text-7xl md:text-8xl block mt-2 tracking-tight">
                  Farol.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
