export type ScenarioId = 'emergency' | 'volunteer' | 'donate';

export interface ScenarioAction {
  id: string;
  icon: string;
  text: string;
}

export interface Scenario {
  id: ScenarioId;
  name: string;
  color: string;
  icon: string;
  userMessage: string;
  farolResponse: string;
  actions: ScenarioAction[];
  urgencyLevel: 'high' | 'medium' | 'low';
  showEmergencyButton: boolean;
  userAudio: string;
  farolAudio: string;
}

export const SCENARIOS: Record<ScenarioId, Scenario> = {
  emergency: {
    id: 'emergency',
    name: 'Emergência',
    color: '#dc3545',
    icon: 'triangle-alert',
    userMessage: 'Estou com medo, não sei para onde ir',
    farolResponse:
      'Entendo como você deve estar se sentindo. Vou te ajudar a encontrar um lugar seguro. Posso acessar sua localização para encontrar abrigos próximos?',
    actions: [
      { id: 'find-shelter', icon: 'home', text: 'Encontrar Abrigo' },
      { id: 'get-support', icon: 'heart', text: 'Apoio Emocional' },
      { id: 'emergency-contacts', icon: 'phone', text: 'Contatos de Emergência' },
    ],
    urgencyLevel: 'high',
    showEmergencyButton: true,
    userAudio: '/assets/audio/thomas-ajuda.mp3',
    farolAudio: '/assets/audio/river-ajuda.mp3',
  },
  volunteer: {
    id: 'volunteer',
    name: 'Voluntariado',
    color: '#0d6efd',
    icon: 'hands-helping',
    userMessage: 'Quero me voluntariar para ajudar',
    farolResponse:
      'Que bom que você quer ajudar! Existe uma força especial em pessoas como você. Vou encontrar oportunidades de voluntariado na sua região.',
    actions: [
      { id: 'find-opportunities', icon: 'search', text: 'Ver Oportunidades' },
      { id: 'register-skills', icon: 'user-plus', text: 'Cadastrar Habilidades' },
      { id: 'nearby-needs', icon: 'map-pin', text: 'Necessidades Próximas' },
    ],
    urgencyLevel: 'medium',
    showEmergencyButton: false,
    userAudio: '/assets/audio/thomas-voluntario.mp3',
    farolAudio: '/assets/audio/river-voluntario.mp3',
  },
  donate: {
    id: 'donate',
    name: 'Doação',
    color: '#fd7e14',
    icon: 'heart',
    userMessage: 'Gostaria de doar alguma coisa',
    farolResponse:
      'Sua generosidade faz toda a diferença! Vou te mostrar as necessidades mais urgentes na sua região e como você pode contribuir.',
    actions: [
      { id: 'donate-items', icon: 'package', text: 'Doar Itens' },
      { id: 'donate-money', icon: 'banknote', text: 'Doação em Dinheiro' },
      { id: 'urgent-needs', icon: 'alert-circle', text: 'Necessidades Urgentes' },
    ],
    urgencyLevel: 'low',
    showEmergencyButton: false,
    userAudio: '/assets/audio/thomas-doar.mp3',
    farolAudio: '/assets/audio/river-doar.mp3',
  },
};
