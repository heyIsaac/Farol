'use client';

import { useState, useRef, useCallback } from 'react';
import { SCENARIOS, ScenarioId } from '@/entities/scenario';

export interface AudioItem {
  src: string;
  status: string;
}

export function useAudioSequence() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioStatus, setAudioStatus] = useState('');
  const [hasFinishedSequence, setHasFinishedSequence] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<ScenarioId | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sequenceRef = useRef<AudioItem[]>([]);
  const currentIndexRef = useRef<number>(0);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setAudioStatus('');
  }, []);

  const playNext = useCallback(() => {
    const sequence = sequenceRef.current;
    const index = currentIndexRef.current;

    if (index >= sequence.length) {
      setIsPlaying(false);
      setAudioStatus('');
      setHasFinishedSequence(true);
      return;
    }

    const currentItem = sequence[index];
    setAudioStatus(currentItem.status);

    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    audio.src = currentItem.src;
    audio.currentTime = 0;

    audio.onended = () => {
      currentIndexRef.current++;
      // If next is blip or audio, play right away
      playNext();
    };

    audio.onerror = () => {
      // Graceful fallback if audio cannot be played
      currentIndexRef.current++;
      playNext();
    };

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn('Audio play error, advancing sequence:', err);
        currentIndexRef.current++;
        playNext();
      });
  }, []);

  const startSequence = useCallback(
    (scenarioId: ScenarioId) => {
      stopAudio();
      setCurrentScenario(scenarioId);
      setHasFinishedSequence(false);

      const scenario = SCENARIOS[scenarioId];

      const sequence: AudioItem[] = [
        {
          src: scenario.userAudio,
          status: 'Reproduzindo sua fala...',
        },
        {
          src: '/assets/audio/blip.mp3',
          status: '',
        },
        {
          src: scenario.farolAudio,
          status: 'FAROL respondendo...',
        },
      ];

      sequenceRef.current = sequence;
      currentIndexRef.current = 0;
      setIsPlaying(true);
      playNext();
    },
    [stopAudio, playNext]
  );

  return {
    isPlaying,
    audioStatus,
    hasFinishedSequence,
    currentScenario,
    startSequence,
    stopAudio,
    resetSequence: () => {
      stopAudio();
      setHasFinishedSequence(false);
      setCurrentScenario(null);
    },
  };
}
