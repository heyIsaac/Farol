# 🚢 Farol

Plataforma digital com foco em acessibilidade e empatia, projetada para auxiliar pessoas em situações de desastres naturais — com abrigo, apoio e informação certa, na hora certa.

Migrado com fidelidade visual e funcional completa para **Next.js 16 (App Router)**, **Tailwind CSS v4**, **shadcn/ui** e arquitetura **Feature-Sliced Design (FSD)**.

---

## 🏗️ Arquitetura FSD (Feature-Sliced Design)

O projeto é organizado rigorosamente de acordo com as camadas do padrão FSD:

```
src/
├── app/                  # Camada Next.js App Router (rotas, layouts, metadados, styles)
│   ├── page.tsx          # Rota principal (/) -> Landing Page
│   ├── cadastro/page.tsx # Rota de cadastro (/cadastro)
│   ├── app/page.tsx      # Rota da aplicação interativa (/app)
│   ├── layout.tsx        # Root layout (Google Fonts: Rethink Sans & Montserrat, Spline loader)
│   └── globals.css       # Tailwind CSS v4, variáveis de design e animações
│
├── views/                # Camada FSD: Pages / Views
│   ├── home/             # Composição da Landing Page
│   ├── cadastro/         # Composição da página de Cadastro
│   └── farol-app/        # Composição da aplicação interativa do Farol
│
├── widgets/              # Camada FSD: Widgets (blocos autônomos de UI)
│   ├── navbar/           # Barra de navegação com logotipo e ações
│   ├── hero/             # Hero section com título, descrição e CTA
│   ├── spline-scene/     # Visualizador 3D Spline interativo
│   ├── statistics/       # Seção de estatísticas com GSAP ScrollTrigger e planet rocks
│   ├── solution/         # Seção de solução com animação em 3 etapas e blobs com blur
│   ├── features/         # 4 seções split com mídias e conteúdos alternados
│   ├── audio-demo/       # Demonstração de voz interativa com equalizador SVG animado
│   ├── testimonials/     # Depoimentos reais e efeito parallax da planta
│   ├── cta/              # Seção final com círculos de radar pulsantes e imagem do app
│   ├── footer/           # Rodapé oficial Farol
│   ├── signup-visual/    # Painel visual com formas e planta flutuante para cadastro
│   └── farol-interface/  # Telas da aplicação (/app): Home, Conversa, Resultados, Modo Texto
│
├── features/             # Camada FSD: Features (interações de negócio do usuário)
│   ├── voice-interaction/# Simulação de gravação, modal de voz e fluxo de áudio
│   ├── audio-player/     # Hook useAudioSequence para orquestração de áudios
│   ├── chat-assistant/   # Hook useChat para assistência empática via chat
│   └── signup-form/      # Formulário de cadastro com validações em tempo real
│
├── entities/             # Camada FSD: Entities (modelos de domínio e dados)
│   ├── scenario/         # Cenários (Emergência, Voluntariado, Doação)
│   ├── shelter/          # Abrigos, ocupação, acessibilidade e serviços
│   ├── volunteer/        # Oportunidades de voluntariado e habilidades
│   ├── donation/         # Pontos de coleta, dados PIX e necessidades urgentes
│   └── testimonial/      # Dados dos depoimentos
│
└── shared/               # Camada FSD: Shared (componentes base e utilitários reutilizáveis)
    ├── ui/               # Componentes shadcn/ui (Button, Input, Checkbox, Card, Progress, Badge, etc.)
    ├── lib/              # Utilitários (cn, formatação, hooks)
    ├── config/           # Constantes e configurações do Farol
    └── types/            # Tipagens TypeScript compartilhadas
```

---

## 🎨 Design System e Identidade Visual

### Paleta de Cores
- **Verde Principal**: `#54BF44`
- **Verde Hover**: `#459A37`
- **Verde CTA**: `#25B610`
- **Verde Escuro**: `#263228`
- **Verde Claro**: `#DEF3C6`
- **Creme**: `#F4F1ED`
- **Vermelho Emergência**: `#dc3545`
- **Azul Voluntário**: `#0d6efd`
- **Laranja Doação**: `#fd7e14`

### Tipografia
- **Títulos e Destaques**: `Rethink Sans` (Google Fonts)
- **Textos e Interface**: `Montserrat` (Google Fonts)

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ (recomendado Node.js 20+)
- npm, yarn ou pnpm

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção
```bash
npm run build
npm run start
```

---

## 📱 Páginas e Funcionalidades

1. **Landing Page (`/`)**:
   - Hero com tipografia responsiva e CTA
   - Modelo 3D interativo via Spline
   - Seção interativa de estatísticas com GSAP ScrollTrigger
   - Seção de solução animada
   - Features em layout split
   - Demonstração de áudio interativo com animação de equalizador
   - Depoimentos com cards customizados e animação de planta com parallax
   - Seção de radar com círculos animados e download do app
   - Rodapé completo

2. **Cadastro (`/cadastro`)**:
   - Layout split responsivo
   - Formulário com validação de nome, e-mail, senha e termos
   - Autenticação social simulada com Google
   - Painel lateral com ilustrações flutuantes e logotipo Farol

3. **Aplicação Interativa Farol (`/app`)**:
   - Navegação por voz simulada e controle de reprodução
   - 3 cenários interativos (Emergência, Voluntariado e Doação)
   - Sequência sonora automatizada (fala do usuário -> sinal sonoro -> resposta do Farol)
   - Tela de conversa com bolhas de mensagem e reprodução de áudio
   - Acesso a abrigos próximos com barra de capacidade em tempo real, serviços e rotas
   - Oportunidades de voluntariado e cadastro de habilidades
   - Doação de itens e doação em dinheiro via PIX com cópia de chave em 1 clique
   - Botão de emergência "Ajuda Agora" com discagem rápida para SAMU (192), Defesa Civil (199), Bombeiros (193) e CVV (188)
   - Modo Texto completo com chat em tempo real e sugestões rápidas
