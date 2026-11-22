'use client';

import React from 'react';
import { Navbar } from '@/widgets/navbar';
import { HeroSection } from '@/widgets/hero';
import { SplineScene } from '@/widgets/spline-scene';
import { StatisticsSection } from '@/widgets/statistics';
import { SolutionSection } from '@/widgets/solution';
import { FeaturesSection } from '@/widgets/features';
import { AudioDemoSection } from '@/widgets/audio-demo';
import { TestimonialsSection } from '@/widgets/testimonials';
import { CtaSection } from '@/widgets/cta';
import { Footer } from '@/widgets/footer';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SplineScene />
      <StatisticsSection />
      <SolutionSection />
      <FeaturesSection />
      <AudioDemoSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
};
