'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Phone, AlertTriangle, X } from 'lucide-react';
import { SCENARIOS, ScenarioId } from '@/entities/scenario';
import { SUPPORT_CONTACTS } from '@/entities/donation';
import { useAudioSequence } from '@/features/audio-player';
import { AppHeader } from './AppHeader';
import { HomeScreen } from './HomeScreen';
import { VoiceModal } from './VoiceModal';
import { ConversationScreen } from './ConversationScreen';
import { ResultsScreen } from './ResultsScreen';
import { TextModeScreen } from './TextModeScreen';
import { BottomControls } from './BottomControls';
import { Button } from '@/shared/ui/button';

type Screen = 'home' | 'conversation' | 'results';

export const FarolAppInterface: React.FC = () => {
  const router = useRouter();
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedScenarioId, setSelectedScenarioId] = useState<ScenarioId>('emergency');
  const [selectedActionId, setSelectedActionId] = useState<string>('find-shelter');
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isTextModeOpen, setIsTextModeOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const {
    isPlaying,
    audioStatus,
    hasFinishedSequence,
    currentScenario,
    startSequence,
    stopAudio,
    resetSequence,
  } = useAudioSequence();

  // Handlers
  const handleBack = () => {
    if (currentScreen === 'results') {
      setCurrentScreen('conversation');
    } else if (currentScreen === 'conversation') {
      stopAudio();
      resetSequence();
      setCurrentScreen('home');
    } else {
      router.push('/');
    }
  };

  const handleMicClick = () => {
    if (isPlaying) {
      stopAudio();
      return;
    }

    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setIsVoiceModalOpen(true);
    }, 1500);
  };

  const handleSelectScenario = (scenarioId: ScenarioId) => {
    setSelectedScenarioId(scenarioId);
    setIsVoiceModalOpen(false);
    startSequence(scenarioId);
  };

  const handleViewDetails = () => {
    stopAudio();
    setCurrentScreen('conversation');
  };

  const handleSelectAction = (actionId: string) => {
    setSelectedActionId(actionId);
    setCurrentScreen('results');
  };

  const handleTextModeScenario = (scenarioId: ScenarioId) => {
    setSelectedScenarioId(scenarioId);
    setSelectedActionId(
      scenarioId === 'emergency'
        ? 'find-shelter'
        : scenarioId === 'volunteer'
        ? 'find-opportunities'
        : 'donate-items'
    );
    setCurrentScreen('conversation');
  };

  const activeScenario = SCENARIOS[selectedScenarioId] || SCENARIOS.emergency;

  return (
    <div className="min-h-screen bg-white flex flex-col pt-20">
      {/* Fixed App Header */}
      <AppHeader
        onBack={handleBack}
        canGoBack={currentScreen !== 'home'}
      />

      {/* Main Screen Content */}
      <main className="flex-1 w-full flex flex-col justify-center">
        {currentScreen === 'home' && (
          <HomeScreen
            isPlaying={isPlaying}
            audioStatus={audioStatus}
            hasFinishedSequence={hasFinishedSequence}
            onSplineClick={() => setIsVoiceModalOpen(true)}
            onViewDetails={handleViewDetails}
          />
        )}

        {currentScreen === 'conversation' && (
          <ConversationScreen
            scenario={activeScenario}
            onSelectAction={handleSelectAction}
            onEmergencyHelp={() => setIsEmergencyModalOpen(true)}
          />
        )}

        {currentScreen === 'results' && (
          <ResultsScreen
            actionId={selectedActionId}
            onBack={() => setCurrentScreen('conversation')}
          />
        )}
      </main>

      {/* Fixed Bottom Controls (only shown on home screen) */}
      {currentScreen === 'home' && (
        <BottomControls
          isPlaying={isPlaying}
          isRecording={isRecording}
          onMicClick={handleMicClick}
          onChatClick={() => setIsTextModeOpen(true)}
        />
      )}

      {/* Voice Selection Modal */}
      <VoiceModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        onSelectScenario={handleSelectScenario}
      />

      {/* Text Mode Chat Modal */}
      <TextModeScreen
        isOpen={isTextModeOpen}
        onClose={() => setIsTextModeOpen(false)}
        onViewScenarioDetails={handleTextModeScenario}
      />

      {/* Immediate Emergency Help Modal */}
      {isEmergencyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[24px] p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3 text-red-600">
                <AlertTriangle className="size-6 shrink-0" />
                <h3 className="text-xl font-bold font-rethink text-[#263228]">
                  Ajuda Imediata de Emergência
                </h3>
              </div>
              <button
                onClick={() => setIsEmergencyModalOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500"
              >
                <X className="size-4" />
              </button>
            </div>

            <p className="text-sm font-montserrat text-[#6c757d]">
              Se você ou alguém próximo está em risco iminente de vida, ligue imediatamente para os serviços oficiais:
            </p>

            <div className="space-y-3">
              {SUPPORT_CONTACTS.slice(0, 4).map((c) => (
                <div
                  key={c.id}
                  className="p-4 rounded-xl border border-gray-200 flex items-center justify-between gap-3 hover:bg-red-50/50 transition-colors"
                >
                  <div>
                    <strong className="block text-base font-rethink text-[#263228]">
                      {c.name}
                    </strong>
                    <span className="text-xs text-[#6c757d] font-montserrat">
                      {c.hours}
                    </span>
                  </div>
                  <Button
                    asChild
                    className="bg-[#dc3545] hover:bg-red-700 text-white rounded-lg px-4 py-2 font-bold shrink-0"
                  >
                    <a href={`tel:${c.phone}`}>
                      <Phone className="size-4 mr-1.5" />
                      Ligar {c.phone}
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => setIsEmergencyModalOpen(false)}
              className="w-full rounded-full py-5 border-gray-200 text-[#263228]"
            >
              Fechar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
