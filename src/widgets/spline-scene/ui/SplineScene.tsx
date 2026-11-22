'use client';

import React from 'react';
import { SplineViewer } from '@/shared/ui/spline-viewer';
import { APP_CONFIG } from '@/shared/config/constants';

interface SplineSceneProps {
  className?: string;
  url?: string;
}

export const SplineScene: React.FC<SplineSceneProps> = ({
  className = '',
  url = APP_CONFIG.splineUrl,
}) => {
  return (
    <section className={`relative overflow-hidden bg-white min-h-[500px] flex items-center justify-center ${className}`}>
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible">
        {/* Placeholder to reserve vertical layout space */}
        <div className="w-full max-w-[800px] h-[500px] invisible pointer-events-none" />

        {/* Absolute container matching legacy design with scale and gradient mask */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] max-w-[1600px] h-[140vh] max-h-[1000px] scale-[0.6] z-0 pointer-events-auto"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, black 25%, black 75%, rgba(0,0,0,0.3) 85%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, black 25%, black 75%, rgba(0,0,0,0.3) 85%, transparent 100%)',
          }}
        >
          <SplineViewer url={url} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};
