export interface DonationPoint {
  id: string;
  name: string;
  category: 'roupas' | 'alimentos' | 'medicamentos' | 'higiene';
  urgency: 'alta' | 'média' | 'baixa';
  address: string;
  distance: number;
  schedule: string;
  neededItems: string[];
  phone: string;
}

export interface UrgentNeed {
  item: string;
  category: string;
  urgency: 'alta' | 'urgente' | 'média';
  location: string;
}

export interface SupportContact {
  id: string;
  name: string;
  phone: string;
  description: string;
  hours: string;
  badge?: string;
}

export const DONATION_POINTS: DonationPoint[] = [
  {
    id: 'donation-001',
    name: 'Centro de Doações - Roupas e Cobertores',
    category: 'roupas',
    urgency: 'alta',
    address: 'Centro Comunitário - Rua das Flores, 123',
    distance: 1.2,
    schedule: '8h às 20h',
    neededItems: ['cobertores', 'agasalhos', 'roupas infantis', 'calçados'],
    phone: '(11) 1234-5678',
  },
  {
    id: 'donation-002',
    name: 'Ponto de Coleta - Alimentos e Água',
    category: 'alimentos',
    urgency: 'alta',
    address: 'Ginásio Municipal - Av. Central, 456',
    distance: 2.1,
    schedule: '24 horas',
    neededItems: ['água mineral', 'alimentos não perecíveis', 'leite em pó', 'enlatados'],
    phone: '(11) 8765-4321',
  },
  {
    id: 'donation-003',
    name: 'Farmácia Solidária - Medicamentos e Higiene',
    category: 'medicamentos',
    urgency: 'média',
    address: 'Posto de Saúde - Rua da Paz, 789',
    distance: 0.8,
    schedule: '7h às 19h',
    neededItems: ['kits de higiene', 'fraldas descartáveis', 'analgésicos', 'curativos'],
    phone: '(11) 2468-1357',
  },
];

export const URGENT_NEEDS: UrgentNeed[] = [
  { item: 'Água Potável', category: 'Alimentos', urgency: 'urgente', location: 'Ginásio Municipal' },
  { item: 'Cobertores', category: 'Vestuário', urgency: 'alta', location: 'Centro Comunitário' },
  { item: 'Fraldas Infantis', category: 'Higiene', urgency: 'alta', location: 'Posto de Saúde' },
  { item: 'Alimentos não perecíveis', category: 'Alimentos', urgency: 'alta', location: 'Casa do Bem' },
  { item: 'Kits de Primeiros Socorros', category: 'Saúde', urgency: 'urgente', location: 'Posto de Saúde' },
];

export const SUPPORT_CONTACTS: SupportContact[] = [
  {
    id: 'cvv',
    name: 'CVV - Centro de Valorização da Vida',
    phone: '188',
    description: 'Apoio emocional gratuito e 24h por telefone ou chat.',
    hours: '24 horas por dia',
    badge: 'Nacional',
  },
  {
    id: 'samu',
    name: 'SAMU - Serviço de Atendimento Móvel',
    phone: '192',
    description: 'Emergências médicas e resgate imediato.',
    hours: '24 horas por dia',
    badge: 'Emergência',
  },
  {
    id: 'defesa-civil',
    name: 'Defesa Civil',
    phone: '199',
    description: 'Alertas e resgates em áreas de risco e alagamento.',
    hours: '24 horas por dia',
    badge: 'Desastres',
  },
  {
    id: 'bombeiros',
    name: 'Corpo de Bombeiros',
    phone: '193',
    description: 'Resgate, combate a incêndios e emergências em desastres.',
    hours: '24 horas por dia',
    badge: 'Emergência',
  },
  {
    id: 'caps',
    name: 'CAPS - Atenção Psicossocial',
    phone: '(11) 3333-4444',
    description: 'Atendimento psicológico e psiquiátrico público especializado.',
    hours: 'Segunda a Sexta, 8h às 18h',
  },
];

export const PIX_DATA = {
  bank: 'Banco do Brasil (001)',
  agency: '1234-5',
  account: '98765-4',
  keyType: 'E-mail / Chave Aleatória',
  pixKey: 'doacoes@farol.org.br',
  beneficiary: 'FAROL Apoio a Desastres Naturais',
  suggestedValues: [20, 50, 100, 200],
};
