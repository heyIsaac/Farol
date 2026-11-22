export interface VolunteerOpportunity {
  id: string;
  title: string;
  organization: string;
  address: string;
  distance: number;
  schedule: string;
  volunteers: {
    needed: number;
    current: number;
  };
  tasks: string[];
  skills: string[];
  urgency: 'alta' | 'média' | 'baixa';
  phone: string;
}

export const VOLUNTEER_OPPORTUNITIES: VolunteerOpportunity[] = [
  {
    id: 'volunteer-001',
    title: 'Cozinha Solidária',
    organization: 'Casa do Bem',
    address: 'Rua Solidária, 321 - Centro',
    distance: 1.5,
    schedule: '8h às 18h',
    volunteers: { needed: 5, current: 2 },
    tasks: ['preparo de refeições', 'distribuição', 'limpeza'],
    skills: ['culinária básica'],
    urgency: 'alta',
    phone: '(11) 3456-7890',
  },
  {
    id: 'volunteer-002',
    title: 'Centro de Distribuição',
    organization: 'Ajuda Mútua',
    address: 'Av. Doação, 654 - Vila Nova',
    distance: 0.8,
    schedule: '6h às 22h',
    volunteers: { needed: 3, current: 1 },
    tasks: ['organização de doações', 'triagem', 'empacotamento'],
    skills: ['organização', 'força física'],
    urgency: 'média',
    phone: '(11) 9876-5432',
  },
  {
    id: 'volunteer-003',
    title: 'Apoio Psicológico',
    organization: 'Mente Sã',
    address: 'Rua Esperança, 987 - Centro',
    distance: 2.3,
    schedule: '9h às 17h',
    volunteers: { needed: 2, current: 0 },
    tasks: ['escuta ativa', 'acolhimento', 'encaminhamentos'],
    skills: ['psicologia', 'assistência social'],
    urgency: 'alta',
    phone: '(11) 1357-2468',
  },
];
