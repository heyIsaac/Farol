'use client';

import React from 'react';
import { X, TriangleAlert, HandHeart, Heart, Play } from 'lucide-react';
import { ScenarioId } from '@/entities/scenario';

interface VoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScenario: (scenario: ScenarioId) => void;
}

export const VoiceModal: React.FC<VoiceModalProps> = ({
  isOpen,
  onClose,
  onSelectScenario,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="bg-white rounded-[20px] p-6 sm:p-8 max-w-[420px] w-full shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100">
          <h3 className="text-xl font-semibold font-rethink text-[#263228]">
            Escolha uma opção
          </h3>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-[#6c757d] hover:text-[#263228] flex items-center justify-center transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Options Content */}
        <div className="flex flex-col gap-3.5">
          {/* Emergency Option */}
          <button
            onClick={() => onSelectScenario('emergency')}
            className="group w-full p-4 rounded-2xl bg-red-500/10 hover:bg-red-500/15 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md text-left"
          >
            <div className="w-11 h-11 rounded-full bg-red-500/15 text-[#dc3545] flex items-center justify-center shrink-0">
              <TriangleAlert className="size-5" />
            </div>
            <span className="flex-1 text-base sm:text-lg font-semibold font-rethink text-[#263228]">
              Preciso de Ajuda
            </span>
            <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#54BF44] text-[#6c757d] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 shadow-sm">
              <Play className="size-3.5 fill-current ml-0.5" />
            </div>
          </button>

          {/* Volunteer Option */}
          <button
            onClick={() => onSelectScenario('volunteer')}
            className="group w-full p-4 rounded-2xl bg-blue-500/10 hover:bg-blue-500/15 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md text-left"
          >
            <div className="w-11 h-11 rounded-full bg-blue-500/15 text-[#0d6efd] flex items-center justify-center shrink-0">
              <HandHeart className="size-5" />
            </div>
            <span className="flex-1 text-base sm:text-lg font-semibold font-rethink text-[#263228]">
              Quero Ajudar
            </span>
            <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#54BF44] text-[#6c757d] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 shadow-sm">
              <Play className="size-3.5 fill-current ml-0.5" />
            </div>
          </button>

          {/* Donate Option */}
          <button
            onClick={() => onSelectScenario('donate')}
            className="group w-full p-4 rounded-2xl bg-orange-500/10 hover:bg-orange-500/15 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md text-left"
          >
            <div className="w-11 h-11 rounded-full bg-orange-500/15 text-[#fd7e14] flex items-center justify-center shrink-0">
              <Heart className="size-5" />
            </div>
            <span className="flex-1 text-base sm:text-lg font-semibold font-rethink text-[#263228]">
              Quero Doar
            </span>
            <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#54BF44] text-[#6c757d] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 shadow-sm">
              <Play className="size-3.5 fill-current ml-0.5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
