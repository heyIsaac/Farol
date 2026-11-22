<div align="center">

# 🚢 FAROL

**Uma luz guia em momentos de crise.**  
*Plataforma inteligente e acessível de auxílio humanitário e coordenação em desastres naturais.*

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Base_UI-000000?style=for-the-badge)](https://ui.shadcn.com/)
[![FSD Architecture](https://img.shields.io/badge/Architecture-FSD-orange?style=for-the-badge)](https://feature-sliced.design/)

</div>

---

## 📖 Visão Geral

Desastres naturais aumentaram mais de **250% em 4 anos**. No momento crítico de uma emergência (enchentes, deslizamentos, temporais), a ajuda muitas vezes se torna lenta, descoordenada e inacessível — especialmente para quem está sob pânico, sem sinal estável ou com dificuldades visuais e motoras.

O **Farol** nasce como uma ponte digital e humana:
- **Auxílio em Tempo Real**: Conexão imediata com abrigos seguros, pontos de arrecadação e postos de apoio.
- **Interação Multimodal (Voz e Texto)**: Suporte por comandos de voz sintetizados e transcrição rápida, permitindo operação mãos-livres em cenários de risco extremo.
- **Acessibilidade Universal**: Interface limpa, alto contraste, fontes legíveis (`Rethink Sans` e `Montserrat`) e feedback sonoro acolhedor.
- **Canal de Emergência Direto**: Discagem em um clique para Defesa Civil (199), SAMU (192), Bombeiros (193) e CVV (188).

---

## 🏛️ Arquitetura Feature-Sliced Design (FSD)

O projeto foi totalmente modernizado a partir de uma base estática legada para o ecossistema **Next.js 16 + Tailwind CSS v4 + TypeScript**, adotando a metodologia **Feature-Sliced Design (FSD)** para assegurar escalabilidade, separação clara de responsabilidades e desacoplamento de regras de negócio e interface:

```
src/
├── app/                  # Next.js App Router (Routing, Layouts, Globals)
│   ├── page.tsx          # Rota: / (Landing Page institucional)
│   ├── cadastro/page.tsx # Rota: /cadastro (Página de Registro / Onboarding)
│   ├── app/page.tsx      # Rota: /app (Ambiente Interativo do Farol)
│   ├── layout.tsx        # Shell global, fontes Google, scripts auxiliares
│   └── globals.css       # Tailwind v4, tokens de tema e keyframes de animação
│
├── views/                # Camada FSD: Pages / Views
│   ├── home/             # View da Landing Page
│   ├── cadastro/         # View da Página de Cadastro
│   └── farol-app/        # View do Farol App interativo
│
├── widgets/              # Camada FSD: Widgets (Blocos autônomos de UI)
│   ├── navbar/           # Cabeçalho com navegação e status
│   ├── hero/             # Apresentação de alto impacto com Spline 3D
│   ├── spline-scene/     # Visualizador 3D interativo
│   ├── statistics/       # Seção de métricas com efeito morphing e rocks parallax
│   ├── solution/         # Transição de narrativa Farol em 3 estágios
│   ├── features/         # Apresentação modular das soluções
│   ├── audio-demo/       # Demonstração de voz com equalizador dinâmico
│   ├── testimonials/     # Prova social e histórias reais
│   ├── cta/              # Radar concêntrico pulsante e convite ao download
│   ├── footer/           # Rodapé institucional com links e créditos
│   ├── signup-visual/    # Painel ilustrativo lateral do cadastro
│   └── farol-interface/  # Telas e modais da aplicação interativa
│
├── features/             # Camada FSD: Features (Interações do usuário)
│   ├── voice-interaction/# Reconhecimento de voz, modal e animações sonoras
│   ├── audio-player/     # Orquestração e fallback de sequências sonoras
│   ├── chat-assistant/   # Chat de IA empática com respostas contextuais
│   └── signup-form/      # Validação e cadastro de usuários
│
├── entities/             # Camada FSD: Entities (Modelos e dados de domínio)
│   ├── scenario/         # Cenários guiados (Emergência, Voluntariado, Doação)
│   ├── shelter/          # Abrigos, rotas, capacidade e serviços
│   ├── volunteer/        # Vagas e cadastro de habilidades solidárias
│   ├── donation/         # Itens prioritários, pontos de coleta e PIX
│   └── testimonial/      # Depoimentos e avaliações de impacto
│
└── shared/               # Camada FSD: Shared (Componentes e utilitários base)
    ├── ui/               # Componentes shadcn/ui e Base UI adaptados
    ├── lib/              # Hooks (useAos, cn) e utilitários de animação
    ├── config/           # Constantes e configurações do sistema
    └── types/            # Tipos e interfaces TypeScript transversais
```

---

## 🎯 Páginas e Recursos

### 1. Landing Page (`/`)
- **Hero 3D Interativo**: Integração com cena Spline interativa em tempo real.
- **Narrativa Suave**: Animações de texto com efeito morphing (blur e fade) que transmitem a mensagem de impacto de forma orgânica.
- **Demonstração Sonora**: Player de demonstração de voz com equalizador SVG sincronizado.
- **Scroll e Parallax**: Seções dinâmicas de conscientização com pedras planetárias em órbita e elementos visuais fluidos.
- **Radar CTA**: Efeito de radar concêntrico pulsante chamando para a instalação do aplicativo.

### 2. Cadastro e Onboarding (`/cadastro`)
- Layout split adaptativo e minimalista.
- Formulário validado com suporte a termos de uso e política de privacidade.
- Painel visual acolhedor com ilustração botânica flutuante.

### 3. Aplicação Interativa Farol (`/app`)
- **Assistente por Voz**: Simulação de interação por comando vocal em múltiplos perfis de áudio (River e Thomas), com bips de confirmação e resposta sonora sintetizada.
- **3 Cenários Críticos**:
  - 🚨 **Preciso de Ajuda (Emergência)**: Lista de abrigos mais próximos, percentual de ocupação ao vivo, serviços disponíveis (médico, pets, alimentação) e rota.
  - 🤝 **Quero Ser Voluntário**: Oportunidades por categoria (saúde, logística, apoio emocional, cozinha solidária) com botão de engajamento rápido.
  - 📦 **Quero Doar**: Lista atualizada de necessidades urgentes, locais de entrega e doação financeira instantânea via PIX com botão "Copiar Chave".
- **Botão SOS "Ajuda Agora"**: Acesso imediato aos telefones públicos de emergência no Brasil.
- **Modo Texto**: Chat interativo para situações em que falar ou ouvir não é possível ou seguro.

---

## 🎨 Identidade Visual e Design Tokens

| Token | Cor Hex | Aplicação Principal |
| :--- | :--- | :--- |
| **Farol Green** | `#54BF44` | Cor primária da marca e destaques |
| **Farol Green Hover** | `#459A37` | Estados de hover em botões primários |
| **Farol Green CTA** | `#25B610` | Botões de ação prioritária |
| **Farol Dark Green** | `#263228` | Fundo principal e tipografia contrastada |
| **Farol Light Green**| `#DEF3C6` | Badges, pílulas e realces suaves |
| **Farol Cream** | `#F4F1ED` | Superfícies secundárias e fundos claros |
| **Emergency Red** | `#DC3545` | Alertas críticos e botão SOS |
| **Volunteer Blue** | `#0D6EFD` | Cenários de voluntariado |
| **Donation Orange** | `#FD7E14` | Campanhas de doação |

- **Tipografia**:
  - `Rethink Sans`: Títulos, métricas e elementos de destaque.
  - `Montserrat`: Textos corridos, botões, modais e legendas.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior (recomendado 20 LTS).
- Gerenciador de pacotes: `npm`, `pnpm` ou `yarn`.

### Passo a Passo

1. **Clone o repositório:**
```bash
git clone git@github.com:heyIsaac/farol.git
cd farol
```

2. **Instale as dependências:**
```bash
npm install
# ou
pnpm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```
http://localhost:3000
```

### Comandos Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local Next.js com Turbopack em modo desenvolvimento |
| `npm run build` | Compila e gera o build de produção estático/otimizado |
| `npm run start` | Inicia o servidor Node.js com o build de produção |
| `npm run lint` | Executa a verificação estática de código com ESLint |

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes**: [shadcn/ui](https://ui.shadcn.com/) / [@base-ui/react](https://base-ui.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **3D**: [@splinetool/viewer](https://spline.design/)
- **Animações**: CSS Animations, GSAP / ScrollTrigger concepts, Intersection Observer API
- **Arquitetura**: [Feature-Sliced Design (FSD)](https://feature-sliced.design/)

---

## 📄 Licença

Este projeto é desenvolvido para fins educacionais e humanitários sob a licença [MIT](LICENSE).

<div align="center">
  <sub>Construído com dedicação para salvar vidas e coordenar auxílio em momentos de emergência.</sub>
</div>
