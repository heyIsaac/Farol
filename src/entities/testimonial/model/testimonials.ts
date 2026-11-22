export interface Testimonial {
  id: string;
  name: string;
  roleOrLocation: string;
  image: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'mariana',
    name: 'Mariana Souza',
    roleOrLocation: 'Blumenau - SC',
    image: '/assets/imgs/mariana-souza.webp',
    quote:
      'A água já estava na porta e eu não sabia pra onde ir. Falei com o Farol, ele me indicou um abrigo próximo que aceitava pets e consegui sair com meus filhos e nosso cachorro em segurança.',
  },
  {
    id: 'eduardo',
    name: 'Eduardo Freitas',
    roleOrLocation: 'Voluntário, Recife - PE',
    image: '/assets/imgs/eduardo-freitas.webp',
    quote:
      'Queria ajudar, mas não sabia como. Perguntei ao Farol e ele me disse que um abrigo perto de mim precisava de alimentos. Levei pessoalmente no mesmo dia. Foi simples e real.',
  },
  {
    id: 'juliana',
    name: 'Juliana Alves',
    roleOrLocation: 'Porto Alegre - RS',
    image: '/assets/imgs/juliana-alves.webp',
    quote:
      'Estava sozinha e em pânico. Contei isso ao Farol e ele respondeu com calma, me perguntou se eu estava segura e me mostrou um abrigo a 2 km. Consegui chegar com ajuda de vizinhos. Me senti ouvida.',
  },
];
