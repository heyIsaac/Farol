'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, Send, User, TriangleAlert, HandHeart, Heart, Info } from 'lucide-react';
import { ScenarioId } from '@/entities/scenario';
import { useChat } from '@/features/chat-assistant';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

interface TextModeScreenProps {
  isOpen: boolean;
  onClose: () => void;
  onViewScenarioDetails: (scenario: ScenarioId) => void;
}

export const TextModeScreen: React.FC<TextModeScreenProps> = ({
  isOpen,
  onClose,
  onViewScenarioDetails,
}) => {
  const { messages, isTyping, sendMessage, triggerScenario } = useChat();
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText);
    setInputText('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full h-full sm:h-[90vh] sm:max-w-2xl sm:rounded-[24px] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-emerald-200 shadow-sm">
              <Image
                src="/assets/imgs/ai-orb.webp"
                alt="Farol"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold font-rethink text-[#263228]">
                Modo Texto - FAROL
              </h2>
              <span className="text-xs text-[#54BF44] font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#54BF44] animate-pulse" />
                Online
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar modo texto"
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-[#6c757d] hover:text-[#263228] flex items-center justify-center transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Quick Options Bar */}
        <div className="bg-gray-50/80 px-4 py-2.5 border-b border-gray-100 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-xs font-semibold text-[#6c757d] font-montserrat whitespace-nowrap">
            Sugestões:
          </span>
          <button
            onClick={() => triggerScenario('emergency')}
            className="text-xs bg-white hover:bg-red-50 text-[#dc3545] border border-red-200 px-3 py-1.5 rounded-full font-medium whitespace-nowrap flex items-center gap-1.5 transition-colors"
          >
            <TriangleAlert className="size-3" />
            Preciso de Abrigo
          </button>
          <button
            onClick={() => triggerScenario('volunteer')}
            className="text-xs bg-white hover:bg-blue-50 text-[#0d6efd] border border-blue-200 px-3 py-1.5 rounded-full font-medium whitespace-nowrap flex items-center gap-1.5 transition-colors"
          >
            <HandHeart className="size-3" />
            Quero Ajudar
          </button>
          <button
            onClick={() => triggerScenario('donate')}
            className="text-xs bg-white hover:bg-orange-50 text-[#fd7e14] border border-orange-200 px-3 py-1.5 rounded-full font-medium whitespace-nowrap flex items-center gap-1.5 transition-colors"
          >
            <Heart className="size-3" />
            Quero Doar
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-white">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${
                  isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-emerald-100 shadow-sm mt-1">
                    <Image
                      src="/assets/imgs/ai-orb.webp"
                      alt="Farol"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-[18px] p-4 text-sm sm:text-base font-montserrat leading-relaxed shadow-sm ${
                    isUser
                      ? 'bg-[#54BF44] text-white rounded-tr-none'
                      : 'bg-gray-100 text-[#263228] rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.showDetailsButton && msg.scenario && (
                    <div className="mt-3 pt-3 border-t border-gray-200/50">
                      <Button
                        size="sm"
                        onClick={() => {
                          onClose();
                          onViewScenarioDetails(msg.scenario!);
                        }}
                        className="bg-[#54BF44] hover:bg-[#459A37] text-white rounded-full text-xs font-semibold font-rethink gap-1.5"
                      >
                        <Info className="size-3.5" />
                        Ver detalhes na tela
                      </Button>
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#263228] shrink-0 border border-gray-200 mt-1">
                    <User className="size-4" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-emerald-100 shadow-sm">
                <Image
                  src="/assets/imgs/ai-orb.webp"
                  alt="Farol"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-[18px] rounded-tl-none p-3 shadow-sm">
                <div className="typing-indicator py-1">
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSend}
          className="p-3 sm:p-4 border-t border-gray-100 bg-white flex items-center gap-2 shrink-0"
        >
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Digite sua mensagem para o Farol..."
            className="flex-1 h-12 rounded-full border-gray-200 focus-visible:border-[#54BF44] focus-visible:ring-[#DEF3C6] px-5 font-montserrat text-sm"
          />
          <Button
            type="submit"
            disabled={!inputText.trim()}
            className="w-12 h-12 rounded-full bg-[#54BF44] hover:bg-[#459A37] text-white shrink-0 p-0 flex items-center justify-center disabled:opacity-50 transition-all"
          >
            <Send className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};
