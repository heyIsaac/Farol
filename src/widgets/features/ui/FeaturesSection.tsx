'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';

interface FeatureItem {
  id: string;
  title: string;
  description: React.ReactNode;
  ctaText: string;
  ctaLink: string;
  image: string;
  imageLeft: boolean;
}

const FEATURES: FeatureItem[] = [
  {
    id: 'feature-1',
    title: 'Escuta que acolhe,\nvoz que acalma',
    description: (
      <>
        O Farol conversa com empatia em momentos de medo e incerteza.
        <br />
        <br />
        Dá orientações práticas, apoia emocionalmente e ajuda você a respirar fundo quando tudo parece fora do lugar.
      </>
    ),
    ctaText: 'Conversar com o Farol',
    ctaLink: '/app',
    image: '/assets/imgs/split-1.webp',
    imageLeft: false,
  },
  {
    id: 'feature-2',
    title: 'Te guia até o que você precisa',
    description: (
      <>
        O Farol encontra abrigos próximos com detalhes sobre acessibilidade, pets, serviços, entre outros.
        <br />
        <br />
        Tudo por voz, de forma simples e rápida. Basta dizer suas necessidades que ele vai te indicar o melhor.
      </>
    ),
    ctaText: 'Descobrir locais próximos',
    ctaLink: '/app',
    image: '/assets/imgs/split-2.webp',
    imageLeft: true,
  },
  {
    id: 'feature-3',
    title: 'Conecta quem quer ajudar com quem precisa',
    description: (
      <>
        Se você quer se voluntariar pra alguma causa ou projeto, o Farol entende suas habilidades e indica onde você ajudar — como cozinhas solidárias, abrigos ou mutirões de apoio.
      </>
    ),
    ctaText: 'Quero contribuir',
    ctaLink: '/app',
    image: '/assets/imgs/split-3.webp',
    imageLeft: false,
  },
  {
    id: 'feature-4',
    title: 'Aponta o melhor destino para sua doação',
    description: (
      <>
        Quer doar? O Farol mostra o que mais falta em cada região e orienta como doar com segurança, impacto e transparência, via entrega ou Pix.
        <br />
        <br />
        Além disso, pode te enviar links de vaquinhas, caso queira fazer uma doação mais direta e digital.
      </>
    ),
    ctaText: 'Quero poder ajudar',
    ctaLink: '/app',
    image: '/assets/imgs/split-4.webp',
    imageLeft: true,
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative z-20 bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-32">
        {FEATURES.map((feature) => (
          <div
            key={feature.id}
            className={`flex flex-col ${
              feature.imageLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } items-center justify-between gap-10 lg:gap-16`}
          >
            {/* Text side */}
            <div className="w-full lg:w-5/12 flex flex-col items-start text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#54BF44] font-rethink leading-[1.15] mb-6 whitespace-pre-line">
                {feature.title}
              </h2>
              <div className="text-base sm:text-lg text-[#263228] font-montserrat font-normal leading-relaxed mb-8 max-w-lg">
                {feature.description}
              </div>
              <Button
                asChild
                className="bg-[#54BF44] hover:bg-[#459A37] text-white rounded-full px-8 py-6 text-base font-semibold font-rethink shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Link href={feature.ctaLink}>{feature.ctaText}</Link>
              </Button>
            </div>

            {/* Media side */}
            <div className="w-full lg:w-6/12 flex items-center justify-center">
              <div className="relative w-full max-w-[540px] aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
