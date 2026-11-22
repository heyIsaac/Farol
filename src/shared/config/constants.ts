export const APP_CONFIG = {
  name: 'Farol',
  tagline: 'INTELIGÊNCIA ARTIFICIAL EMPÁTICA E ACOLHEDORA',
  title: 'A voz que guia, acolhe e conecta em meio ao caos.',
  description:
    'Uma assistente de voz inteligente e empática, pronta para ajudar em desastres — com abrigo, apoio e informação certa, na hora certa.',
  splineUrl: 'https://prod.spline.design/ToHaFddndQMn1ErO/scene.splinecode',
  routes: {
    home: '/',
    app: '/app',
    cadastro: '/cadastro',
    login: '/app',
  },
  colors: {
    primary: '#54BF44',
    primaryHover: '#459A37',
    primaryCta: '#25B610',
    darkGreen: '#263228',
    lightGreen: '#DEF3C6',
    cream: '#F4F1ED',
  },
} as const;
