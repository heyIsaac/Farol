'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { User, Play, Pause, Home, Heart, Phone, Search, UserPlus, MapPin, Package, Banknote, AlertCircle, AlertTriangle } from 'lucide-react';
import { Scenario, ScenarioId } from '@/entities/scenario';
import { Button } from '@/shared/ui/button';

interface ConversationScreenProps {
  scenario: Scenario;
  onSelectAction: (actionId: string) => void;
  onEmergencyHelp: () => void;
}

export const ConversationScreen: React.FC<ConversationScreenProps> = ({
  scenario,
  onSelectAction,
  onEmergencyHelp,
}) => {
  const [isTyping, setIsTyping] = useState(true);
  const [isUserAudioPlaying, setIsUserAudioPlaying] = useState(false);
  const [isFarolAudioPlaying, setIsFarolAudioPlaying] = useState(false);
  const [farolAudioProgress, setFarolAudioProgress] = useState(0);

  const userAudioRef = useRef<HTMLAudioElement | null>(null);
  const farolAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [scenario]);

  const toggleUserAudio = () => {
    if (!userAudioRef.current) return;
    if (isUserAudioPlaying) {
      userAudioRef.current.pause();
      setIsUserAudioPlaying(false);
    } else {
      if (farolAudioRef.current) farolAudioRef.current.pause();
      setIsFarolAudioPlaying(false);

      userAudioRef.current.currentTime = 0;
      userAudioRef.current.play().then(() => {
        setIsUserAudioPlaying(true);
      }).catch(() => {});
    }
  };

  const toggleFarolAudio = () => {
    if (!farolAudioRef.current) return;
    if (isFarolAudioPlaying) {
      farolAudioRef.current.pause();
      setIsFarolAudioPlaying(false);
    } else {
      if (userAudioRef.current) userAudioRef.current.pause();
      setIsUserAudioPlaying(false);

      farolAudioRef.current.currentTime = 0;
      farolAudioRef.current.play().then(() => {
        setIsFarolAudioPlaying(true);
      }).catch(() => {});
    }
  };

  const getActionIcon = (id: string) => {
    switch (id) {
      case 'find-shelter':
        return <Home className="size-5" />;
      case 'get-support':
        return <Heart className="size-5" />;
      case 'emergency-contacts':
        return <Phone className="size-5" />;
      case 'find-opportunities':
        return <Search className="size-5" />;
      case 'register-skills':
        return <UserPlus className="size-5" />;
      case 'nearby-needs':
        return <MapPin className="size-5" />;
      case 'donate-items':
        return <Package className="size-5" />;
      case 'donate-money':
        return <Banknote className="size-5" />;
      case 'urgent-needs':
        return <AlertCircle className="size-5" />;
      default:
        return <AlertCircle className="size-5" />;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 pb-32 space-y-6">
      {/* Hidden Audio Players */}
      <audio
        ref={userAudioRef}
        src={scenario.userAudio}
        onEnded={() => setIsUserAudioPlaying(false)}
      />
      <audio
        ref={farolAudioRef}
        src={scenario.farolAudio}
        onTimeUpdate={(e) => {
          const el = e.currentTarget;
          if (el.duration) {
            setFarolAudioProgress((el.currentTime / el.duration) * 100);
          }
        }}
        onEnded={() => {
          setIsFarolAudioPlaying(false);
          setFarolAudioProgress(0);
        }}
      />

      {/* User Message Bubble */}
      <div className="flex items-start justify-end gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
        <div className="max-w-[80%] bg-[#54BF44] text-white p-5 rounded-[20px] shadow-sm">
          <p className="text-base font-montserrat leading-relaxed mb-3">
            {scenario.userMessage}
          </p>
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={toggleUserAudio}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-transform hover:scale-105 shrink-0"
              aria-label="Ouvir áudio"
            >
              {isUserAudioPlaying ? (
                <Pause className="size-4 fill-current" />
              ) : (
                <Play className="size-4 fill-current ml-0.5" />
              )}
            </button>
            <div className="flex items-center gap-1 h-5">
              <span className={`audio-wave-line bg-white ${isUserAudioPlaying ? '' : 'paused'}`} />
              <span className={`audio-wave-line bg-white ${isUserAudioPlaying ? '' : 'paused'}`} />
              <span className={`audio-wave-line bg-white ${isUserAudioPlaying ? '' : 'paused'}`} />
              <span className={`audio-wave-line bg-white ${isUserAudioPlaying ? '' : 'paused'}`} />
            </div>
          </div>
        </div>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#263228] shrink-0 border border-gray-200">
          <User className="size-5" />
        </div>
      </div>

      {/* Farol Response Bubble */}
      <div className="flex items-start justify-start gap-3 animate-in fade-in slide-in-from-bottom-3 duration-500">
        {/* Farol AI Orb Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-sm border border-emerald-100">
          <Image
            src="/assets/imgs/ai-orb.webp"
            alt="FAROL"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[80%] bg-white text-[#263228] p-5 rounded-[20px] border border-gray-200 shadow-sm">
          {isTyping ? (
            <div className="typing-indicator py-2">
              <div className="typing-dot" />
              <div className="typing-dot" />
              <div className="typing-dot" />
            </div>
          ) : (
            <>
              <p className="text-base font-montserrat leading-relaxed mb-4">
                {scenario.farolResponse}
              </p>
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={toggleFarolAudio}
                  className="w-9 h-9 rounded-full bg-[#54BF44]/10 hover:bg-[#54BF44]/20 text-[#54BF44] flex items-center justify-center transition-transform hover:scale-105 shrink-0"
                  aria-label="Ouvir resposta do Farol"
                >
                  {isFarolAudioPlaying ? (
                    <Pause className="size-4 fill-current" />
                  ) : (
                    <Play className="size-4 fill-current ml-0.5" />
                  )}
                </button>
                <div className="flex-1 h-1.5 bg-[#54BF44]/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#54BF44] transition-all duration-100"
                    style={{ width: `${farolAudioProgress}%` }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Action Buttons List */}
      {!isTyping && (
        <div className="pt-6 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {scenario.actions.map((action) => (
            <button
              key={action.id}
              onClick={() => onSelectAction(action.id)}
              className="w-full bg-white hover:bg-[#54BF44] border-2 border-[#54BF44] text-[#54BF44] hover:text-white rounded-full py-4 px-6 font-semibold font-rethink text-base flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              {getActionIcon(action.id)}
              <span>{action.text}</span>
            </button>
          ))}
        </div>
      )}

      {/* Emergency Help Button */}
      {scenario.showEmergencyButton && !isTyping && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-in fade-in zoom-in duration-300">
          <Button
            onClick={onEmergencyHelp}
            className="bg-[#dc3545] hover:bg-red-700 text-white rounded-full px-8 py-6 text-base font-semibold font-rethink shadow-xl flex items-center gap-2 transform hover:scale-105 transition-all"
          >
            <AlertTriangle className="size-5" />
            <span>Ajuda Agora</span>
          </Button>
        </div>
      )}
    </div>
  );
};
