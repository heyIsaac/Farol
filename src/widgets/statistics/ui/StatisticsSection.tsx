'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const StatisticsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rock1Ref = useRef<HTMLImageElement>(null);
  const rock2Ref = useRef<HTMLImageElement>(null);
  const [activeTextIndex, setActiveTextIndex] = useState<number>(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const rock1 = rock1Ref.current;
    const rock2 = rock2Ref.current;

    if (!section || !rock1 || !rock2) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p <= 0.46) {
              setActiveTextIndex(0);
            } else if (p > 0.46 && p < 0.54) {
              // Smooth intermediate cross-fade zone
              setActiveTextIndex(-1);
            } else {
              setActiveTextIndex(1);
            }
          },
        },
      });

      tl.to(
        rock1,
        {
          x: -200,
          y: -300,
          rotation: -45,
          scale: 0.8,
          ease: 'power2.inOut',
          duration: 1,
        },
        0
      );

      tl.to(
        rock2,
        {
          x: 200,
          y: 300,
          rotation: 45,
          scale: 1.2,
          ease: 'power2.inOut',
          duration: 1,
        },
        0
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="relative z-10 bg-[#263228] text-white"
      style={{ height: '350vh' }}
    >
      {/* Spacer before sticky pin */}
      <div className="h-[20vh]" />

      {/* Pin Spacer (Sticky Viewport) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
          {/* Planet Rocks Animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="relative w-[800px] h-[800px] flex items-center justify-center">
              <Image
                ref={rock1Ref}
                src="/assets/imgs/planet-rock-1.webp"
                alt="Planet Rock Background"
                width={680}
                height={680}
                priority
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 max-w-none w-[680px] h-auto will-change-transform"
              />
              <Image
                ref={rock2Ref}
                src="/assets/imgs/planet-rock-2.webp"
                alt="Planet Rock Foreground"
                width={700}
                height={700}
                priority
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2 max-w-none w-[700px] h-auto will-change-transform"
              />
            </div>
          </div>

          {/* Text Lines with soft blur morphing without display:none */}
          <div className="relative z-20 text-center w-full max-w-4xl px-4 pointer-events-auto">
            <div className="text-morph-container">
              {/* Phrase 1 */}
              <div
                className={`text-morph-line ${
                  activeTextIndex === 0 ? 'active' : ''
                }`}
              >
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal font-rethink leading-tight text-white">
                  Desastres naturais aumentaram
                  <span className="block mt-2 text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#DEF3C6] font-rethink tracking-wider">
                    250% EM 4 ANOS.
                  </span>
                </h2>
              </div>

              {/* Phrase 2 */}
              <div
                className={`text-morph-line ${
                  activeTextIndex === 1 ? 'active' : ''
                }`}
              >
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal font-rethink leading-tight text-white">
                  Mas para muitos, a ajuda ainda é
                  <span className="block mt-2 text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#DEF3C6] font-rethink tracking-wider leading-tight">
                    LENTA, DESCOORDENADA E INACESSÍVEL.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
