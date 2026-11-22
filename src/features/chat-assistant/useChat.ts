'use client';

import { useState, useCallback } from 'react';
import { ScenarioId } from '@/entities/scenario';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'farol';
  text: string;
  scenario?: ScenarioId;
  showDetailsButton?: boolean;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial',
      sender: 'farol',
      text: 'Olá! Eu sou o FAROL. Como posso te ajudar hoje?',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const getFarolReply = (text: string, scenario?: ScenarioId): string => {
    if (scenario === 'emergency' || text.toLowerCase().includes('abrigo') || text.toLowerCase().includes('medo') || text.toLowerCase().includes('perigo')) {
      return 'Entendo sua preocupação e o medo da situação. Mantenha a calma, você não está sozinho(a). Existem abrigos seguros próximos com estrutura para te acolher. Você pode tocar no botão abaixo para ver as opções detalhadas.';
    }
    if (scenario === 'volunteer' || text.toLowerCase().includes('voluntari') || text.toLowerCase().includes('ajudar') || text.toLowerCase().includes('cozinha')) {
      return 'Muito obrigado por sua disposição em ajudar! Sua habilidade e boa vontade são fundamentais. Encontrei oportunidades de apoio e cozinhas solidárias ativas que precisam de voluntários na sua região.';
    }
    if (scenario === 'donate' || text.toLowerCase().includes('doar') || text.toLowerCase().includes('doação') || text.toLowerCase().includes('pix')) {
      return 'Sua generosidade faz toda a diferença! As necessidades mais urgentes no momento são água potável, alimentos não perecíveis e cobertores. Você pode entregar nos pontos de coleta ou doar via Pix com total transparência.';
    }
    return 'Estou aqui para te apoiar em momentos difíceis. Posso te indicar abrigos seguros, pontos de acolhimento, opções para ser voluntário ou como doar para quem precisa.';
  };

  const sendMessage = useCallback((userText: string, scenario?: ScenarioId, onDetails?: (sc: ScenarioId) => void) => {
    if (!userText.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      scenario,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const farolMsg: ChatMessage = {
        id: `farol-${Date.now()}`,
        sender: 'farol',
        text: getFarolReply(userText, scenario),
        scenario: scenario || 'emergency',
        showDetailsButton: Boolean(scenario),
      };
      setMessages((prev) => [...prev, farolMsg]);
      setIsTyping(false);
    }, 1200);
  }, []);

  const triggerScenario = useCallback((scenario: ScenarioId) => {
    let userMsg = '';
    if (scenario === 'emergency') {
      userMsg = 'Eu preciso de um lugar seguro… tem algum abrigo por perto?';
    } else if (scenario === 'volunteer') {
      userMsg = 'Quero ajudar. Sou cozinheiro. Tem algum lugar aqui por perto precisando de ajuda?';
    } else if (scenario === 'donate') {
      userMsg = 'Quero ajudar de alguma forma, tem alguma ideia de como posso ajudar na situação?';
    }

    sendMessage(userMsg, scenario);
  }, [sendMessage]);

  return {
    messages,
    isTyping,
    sendMessage,
    triggerScenario,
    resetChat: () => {
      setMessages([
        {
          id: 'initial',
          sender: 'farol',
          text: 'Olá! Eu sou o FAROL. Como posso te ajudar hoje?',
        },
      ]);
      setIsTyping(false);
    },
  };
}
