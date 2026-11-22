'use client';

import React from 'react';
import { Info } from 'lucide-react';
import { SplineViewer } from '@/shared/ui/spline-viewer';
import { APP_CONFIG } from '@/shared/config/constants';
import { Button } from '@/shared/ui/button';

interface HomeScreenProps {
  isPlaying: boolean;
  audioStatus: string;
  hasFinishedSequence: boolean;
  onSplineClick: () => void;
  onViewDetails: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  isPlaying,
  audioStatus,
  hasFinishedSequence,
  onSplineClick,
  onViewDetails,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-180px)] text-center px-4">
      {/* 3D Spline Asset */}
      <div className="relative w-full max-w-[600px] h-[340px] sm:h-[400px] flex items-center justify-center my-4">
        <div
          onClick={onSplineClick}
          className="cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 w-full h-full"
        >
          <SplineViewer
            url={APP_CONFIG.splineUrl}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Subtitle when idle */}
      {!isPlaying && !hasFinishedSequence && (
        <div className="mt-4 transition-all duration-300">
          <p className="text-base sm:text-lg text-[#263228] font-montserrat font-medium">
            Estou aqui para te ajudar em momentos difíceis.
          </p>
          <p className="text-xs sm:text-sm text-[#6c757d] font-montserrat mt-1">
            Toque no orbe ou no microfone para falar
          </p>
        </div>
      )}

      {/* Audio Visualizer during playback */}
      {isPlaying && (
        <div className="mt-6 flex flex-col items-center gap-3 transition-all duration-300 animate-in fade-in">
          <div className="audio-visualizer">
            <div className="audio-bar" />
            <div className="audio-bar" />
            <div className="audio-bar" />
            <div className="audio-bar" />
            <div className="audio-bar" />
            <div className="audio-bar" />
            <div className="audio-bar" />
            <div className="audio-bar" />
          </div>
          {audioStatus && (
            <p className="text-sm font-semibold font-montserrat text-[#54BF44] animate-pulse">
              {audioStatus}
            </p>
          )}
        </div>
      )}

      {/* Details Button after sequence finishes */}
      {hasFinishedSequence && (
        <div className="mt-6 transition-all duration-300 animate-in fade-in zoom-in">
          <Button
            onClick={onViewDetails}
            className="bg-[#54BF44] hover:bg-[#459A37] text-white rounded-full px-8 py-6 text-base font-semibold font-rethink flex items-center gap-2 shadow-md hover:shadow-xl transition-all"
          >
            <Info className="size-5" />
            <span>Ver detalhes</span>
          </Button>
        </div>
      )}
    </div>
  );
};
