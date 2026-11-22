export interface Shelter {
  id: string;
  name: string;
  address: string;
  distance: number;
  capacity: {
    current: number;
    max: number;
  };
  services: string[];
  accessibility: boolean;
  pets: boolean;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const SHELTERS: Shelter[] = [
  {
    id: 'shelter-001',
    name: 'Centro Comunitário São José',
    address: 'Rua das Flores, 123 - Centro',
    distance: 1.2,
    capacity: { current: 45, max: 80 },
    services: ['refeições', 'banheiros', 'atendimento médico'],
    accessibility: true,
    pets: true,
    phone: '(11) 1234-5678',
    coordinates: { lat: -23.5505, lng: -46.6333 },
  },
  {
    id: 'shelter-002',
    name: 'Ginásio Municipal',
    address: 'Av. Central, 456 - Vila Nova',
    distance: 2.1,
    capacity: { current: 120, max: 150 },
    services: ['banheiros', 'atendimento médico', 'segurança'],
    accessibility: true,
    pets: false,
    phone: '(11) 8765-4321',
    coordinates: { lat: -23.5515, lng: -46.6343 },
  },
  {
    id: 'shelter-003',
    name: 'Igreja do Bom Pastor',
    address: 'Rua da Paz, 789 - Jardim Esperança',
    distance: 0.8,
    capacity: { current: 25, max: 40 },
    services: ['refeições', 'apoio espiritual'],
    accessibility: false,
    pets: true,
    phone: '(11) 2468-1357',
    coordinates: { lat: -23.5495, lng: -46.6323 },
  },
];
