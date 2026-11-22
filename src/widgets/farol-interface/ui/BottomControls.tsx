'use client';

import React from 'react';
import { MessageSquare, Mic, Square } from 'lucide-react';

interface BottomControlsProps {
  isPlaying: boolean;
  isRecording: boolean;
  onMicClick: () => void;
  onChatClick: () => void;
}

export const BottomControls: React.FC<BottomControlsProps> = ({
  isPlaying,
  isRecording,
  onMicClick,
  onChatClick,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-white via-white/95 to-transparent pt-6 pb-6 pointer-events-none">
      <div className="max-w-md mx-auto px-6 flex items-center justify-between pointer-events-auto">
        {/* Chat / Modo Texto Button */}
        <button
          onClick={onChatClick}
          title="Modo Texto"
          className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 hover:border-[#54BF44] text-[#263228] hover:text-[#54BF44] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <MessageSquare className="size-6" />
        </button>

        {/* Central Voice Button */}
        <button
          onClick={onMicClick}
          title={isPlaying ? 'Parar Áudio' : 'Gravação de Voz'}
          className={`w-20 h-20 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            isPlaying
              ? 'bg-[#dc3545] hover:bg-red-700 animate-pulse'
              : isRecording
              ? 'bg-[#dc3545] animate-ping'
              : 'bg-[#54BF44] hover:bg-[#459A37]'
          }`}
        >
          {isPlaying ? (
            <Square className="size-8 fill-current" />
          ) : (
            <Mic className="size-9" />
          )}
        </button>

        {/* Placeholder to keep microphone centrally balanced */}
        <div className="w-14 h-14 invisible" />
      </div>
    </div>
  );
};
