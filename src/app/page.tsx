'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { SearchModal } from '@/components/SearchModal';
import { HeroSection } from '@/components/HeroSection';
import { GenogramEcoMapHub } from '@/components/GenogramEcoMapHub';
import { ChronosystemTimeline } from '@/components/ChronosystemTimeline';
import { FunctionalTheoryPillars } from '@/components/FunctionalTheoryPillars';
import { CandidateTheoriesMatrix } from '@/components/CandidateTheoriesMatrix';
import { AbscondingCycleDiagram } from '@/components/AbscondingCycleDiagram';
import { BersamaRoadmap } from '@/components/BersamaRoadmap';
import { PracticePathways } from '@/components/PracticePathways';
import { MeasurementDashboard } from '@/components/MeasurementDashboard';
import { SlideDeckView } from '@/components/SlideDeckView';
import { ReferencesSection } from '@/components/ReferencesSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [currentMode, setCurrentMode] = useState<'portal' | 'slides'>('portal');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [targetSlideNumber, setTargetSlideNumber] = useState<number>(1);

  const handleNavigateToSlide = (slideNum: number) => {
    setTargetSlideNumber(slideNum);
    setCurrentMode('slides');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      
      {/* Sticky Glass Navbar */}
      <Navbar
        currentMode={currentMode}
        onModeChange={(mode) => setCurrentMode(mode)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Global Search & Autocomplete Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToSlide={handleNavigateToSlide}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {currentMode === 'portal' ? (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero & Executive Overview */}
            <HeroSection />

            {/* Interactive Genogram & Eco-Map Visualizers */}
            <GenogramEcoMapHub />

            {/* Bronfenbrenner PPCT Chronosystem Timeline */}
            <ChronosystemTimeline />

            {/* Functional Theory 6 Pillars, Techniques & Evaluation */}
            <FunctionalTheoryPillars />

            {/* Candidate Theories & Retained Roles Comparison */}
            <CandidateTheoriesMatrix />

            {/* Absconding Maintenance Cycle */}
            <AbscondingCycleDiagram />

            {/* BERSAMA 16-Week Intervention Roadmap & Session Architecture */}
            <BersamaRoadmap />

            {/* Practice Pathways, Ethics & Statutory Bounds */}
            <PracticePathways />

            {/* Outcome Measurement Dashboard */}
            <MeasurementDashboard />

            {/* Academic References & Legal Citations */}
            <ReferencesSection />
          </div>
        ) : (
          <div className="animate-fadeIn py-6">
            <SlideDeckView
              initialSlide={targetSlideNumber}
              onSlideChange={(num) => setTargetSlideNumber(num)}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
