'use client';

import React, { useRef, useState } from 'react';
import { SplineViewer } from '@/shared/ui/spline-viewer';
import { APP_CONFIG } from '@/shared/config/constants';

export const AudioDemoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio1Ref = useRef<HTMLAudioElement | null>(null);
  const audio2Ref = useRef<HTMLAudioElement | null>(null);

  const handlePlayAudio = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isPlaying) return;

    setIsPlaying(true);

    if (audio1Ref.current && audio2Ref.current) {
      audio1Ref.current.currentTime = 0;
      audio2Ref.current.currentTime = 0;

      audio1Ref.current.play().catch(() => {
        setIsPlaying(false);
      });

      audio1Ref.current.onended = () => {
        setTimeout(() => {
          if (audio2Ref.current) {
            audio2Ref.current.play().catch(() => {
              setIsPlaying(false);
            });
            audio2Ref.current.onended = () => {
              setIsPlaying(false);
            };
          }
        }, 1000);
      };
    }
  };

  return (
    <section className="relative z-20 bg-white py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Interactive Audio Button */}
        <div className="mb-12 flex justify-center">
          <button
            onClick={handlePlayAudio}
            disabled={isPlaying}
            className="inline-flex items-center justify-center gap-3 border-2 border-[#54BF44] text-[#54BF44] hover:bg-[#e9ecef] hover:shadow-md rounded-full px-6 sm:px-8 py-3.5 text-base sm:text-lg font-semibold font-rethink transition-all duration-300 disabled:opacity-90"
          >
            {!isPlaying ? (
              <span className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="#54BF44" />
                </svg>
                <span>Ei, clique aqui para ver como te ajudo!</span>
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="10" width="4" height="8" rx="2" fill="#54BF44">
                    <animate attributeName="height" values="8;16;8" dur="0.7s" repeatCount="indefinite" />
                    <animate attributeName="y" values="10;2;10" dur="0.7s" repeatCount="indefinite" />
                  </rect>
                  <rect x="10" y="6" width="4" height="12" rx="2" fill="#54BF44">
                    <animate attributeName="height" values="12;6;12" dur="0.7s" repeatCount="indefinite" />
                    <animate attributeName="y" values="6;12;6" dur="0.7s" repeatCount="indefinite" />
                  </rect>
                  <rect x="18" y="12" width="4" height="6" rx="2" fill="#54BF44">
                    <animate attributeName="height" values="6;14;6" dur="0.7s" repeatCount="indefinite" />
                    <animate attributeName="y" values="12;4;12" dur="0.7s" repeatCount="indefinite" />
                  </rect>
                </svg>
                <span>Ouvindo Farol...</span>
              </span>
            )}
          </button>

          {/* Audio Elements */}
          <audio ref={audio1Ref} src="/assets/audios/audio1.mp3" preload="none" />
          <audio ref={audio2Ref} src="/assets/audios/audio2.mp3" preload="none" />
        </div>

        {/* 3D Spline Interactive Asset */}
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible">
          <div className="w-full max-w-[800px] h-[500px] invisible pointer-events-none" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] max-w-[1600px] h-[140vh] max-h-[1000px] scale-[0.6] z-0 pointer-events-auto"
            style={{
              maskImage:
                'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, black 25%, black 75%, rgba(0,0,0,0.3) 85%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, black 25%, black 75%, rgba(0,0,0,0.3) 85%, transparent 100%)',
            }}
          >
            <SplineViewer url={APP_CONFIG.splineUrl} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
