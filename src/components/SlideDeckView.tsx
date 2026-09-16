'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid, BookOpen, Layers, Sparkles, CheckCircle2, MessageSquare, Download } from 'lucide-react';
import { SLIDES_DATA } from '@/data/caseStudyData';
import { SlideItem } from '@/types';

interface SlideDeckViewProps {
  initialSlide?: number;
  onSlideChange?: (slideNumber: number) => void;
}

export function SlideDeckView({ initialSlide = 1, onSlideChange }: SlideDeckViewProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(Math.max(0, initialSlide - 1));
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalSlides = SLIDES_DATA.length;
  const currentSlide: SlideItem = SLIDES_DATA[currentSlideIndex] || SLIDES_DATA[0];

  const goToSlide = useCallback((index: number) => {
    const valid = Math.max(0, Math.min(totalSlides - 1, index));
    setCurrentSlideIndex(valid);
    if (onSlideChange) onSlideChange(valid + 1);
  }, [totalSlides, onSlideChange]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlideIndex + 1);
  }, [currentSlideIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlideIndex - 1);
  }, [currentSlideIndex, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isFullscreen]);

  return (
    <div
      className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all ${
        isFullscreen ? 'fixed inset-0 z-50 max-w-none bg-slate-900 p-4 sm:p-8 flex flex-col justify-between overflow-y-auto' : ''
      }`}
      data-testid="slide-deck-container"
    >
      {/* Top Deck Toolbar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-300/80 mb-6 gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-sky-100 text-sky-800 border border-sky-300">
            Slide {currentSlide.slideNumber} of {totalSlides}
          </span>
          <span className="hidden sm:inline-block text-xs text-slate-600 font-mono">
            {currentSlide.badge || currentSlide.category.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Notes Toggle */}
          <button
            type="button"
            onClick={() => setShowNotes(!showNotes)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              showNotes ? 'bg-amber-500 text-white shadow-md' : 'glass-card text-slate-700 hover:text-slate-950 border border-slate-300'
            }`}
            data-testid="toggle-speaker-notes"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Speaker Notes</span>
          </button>

          {/* Thumbnails Drawer Toggle */}
          <button
            type="button"
            onClick={() => setShowThumbnails(!showThumbnails)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              showThumbnails ? 'bg-sky-700 text-white shadow-md' : 'glass-card text-slate-700 hover:text-slate-950 border border-slate-300'
            }`}
            data-testid="toggle-thumbnails"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Grid Overview</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-xl glass-card text-slate-700 hover:text-slate-950 border border-slate-300 shadow-sm"
            title="Toggle fullscreen"
            data-testid="toggle-fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Slide Card */}
      <div className="relative min-h-[540px] sm:min-h-[620px] rounded-3xl p-6 sm:p-10 border border-slate-300 shadow-2xl flex flex-col justify-between overflow-hidden bg-[url('/images/presentation-bg.svg')] bg-cover bg-center bg-no-repeat">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.slideNumber}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6 flex-1 flex flex-col justify-between relative z-10"
            data-testid={`slide-view-${currentSlide.slideNumber}`}
          >
            {/* Slide Header */}
            <div className="space-y-2 border-b border-slate-300 pb-4">
              <div className="flex items-center justify-between text-xs text-slate-800 font-mono">
                <span className="font-bold tracking-wide">SUSS • SWK502 CASEWORK &amp; FAMILY INTERVENTION</span>
                <span className="font-extrabold text-sky-950 bg-sky-100 border border-sky-300 px-3 py-0.5 rounded-lg shadow-sm">
                  SLIDE {String(currentSlide.slideNumber).padStart(2, '0')}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight leading-tight">
                {currentSlide.title}
              </h2>
              {currentSlide.subtitle && (
                <p className="text-sm sm:text-lg text-slate-800 font-semibold leading-relaxed">
                  {currentSlide.subtitle}
                </p>
              )}
            </div>

            {/* Slide Body: Content Summary / Table / Diagram / Bullets */}
            <div className="space-y-4 my-auto">
              
              {/* If slide has diagram image */}
              {currentSlide.infographicType === 'genogram' && (
                <div className="relative w-full aspect-[16/9] max-h-72 rounded-2xl bg-white p-3 flex items-center justify-center overflow-hidden border border-slate-300 shadow-md">
                  <Image
                    src="/images/genogram-aisyah-family.png"
                    alt="Genogram Diagram"
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {currentSlide.infographicType === 'ecomap' && (
                <div className="relative w-full aspect-[16/9] max-h-72 rounded-2xl bg-white p-3 flex items-center justify-center overflow-hidden border border-slate-300 shadow-md">
                  <Image
                    src="/images/eco-map.png"
                    alt="Eco-Map Diagram"
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {/* Table rendering if present */}
              {currentSlide.tableHeaders && currentSlide.tableRows && (
                <div className="overflow-x-auto rounded-2xl bg-white border border-slate-300 shadow-md">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-950 text-sky-200 font-mono uppercase tracking-wider border-b border-slate-300">
                      <tr>
                        {currentSlide.tableHeaders.map((th, i) => (
                          <th key={i} className="py-3 px-4 sm:px-5 font-bold">{th}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-900">
                      {currentSlide.tableRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-sky-50 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`py-3 px-4 sm:px-5 ${cIdx === 0 ? 'font-bold text-slate-950' : 'text-slate-800 font-medium'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Bullet Points */}
              {currentSlide.keyPoints && currentSlide.keyPoints.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {currentSlide.keyPoints.map((kp, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-3 hover:border-sky-500 hover:shadow-md transition-all">
                      <CheckCircle2 className="w-4 h-4 text-sky-700 mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold">{kp}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* General Summary Card if no table & no bullets */}
              {!currentSlide.tableHeaders && (!currentSlide.keyPoints || currentSlide.keyPoints.length === 0) && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 text-sm sm:text-base text-slate-900 shadow-sm leading-relaxed font-normal">
                  {currentSlide.contentSummary}
                </div>
              )}

            </div>

            {/* Slide Footer */}
            <div className="pt-4 border-t border-slate-300 flex items-center justify-between text-xs text-slate-700">
              <span className="font-mono font-bold text-slate-800">{currentSlide.badge || 'SUSS SWK502'}</span>
              <span className="italic text-slate-600 font-medium">Use keyboard Left / Right arrows or buttons to navigate</span>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* Speaker Notes Drawer (Optional Toggle) */}
      <AnimatePresence>
        {showNotes && currentSlide.speakerNotes && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4 sm:p-5 rounded-2xl border border-amber-400 bg-amber-50 text-xs sm:text-sm text-amber-950 shadow-md"
            data-testid="speaker-notes-container"
          >
            <strong className="font-mono uppercase text-amber-900 font-bold block mb-1">Speaker Notes:</strong>
            <p className="leading-relaxed font-medium">{currentSlide.speakerNotes}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Controls Bar */}
      <div className="flex items-center justify-between pt-6">
        <button
          type="button"
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-card text-sm font-semibold text-slate-800 border border-slate-300 hover:border-sky-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
          data-testid="btn-prev-slide"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Slide</span>
        </button>

        {/* Slide Progress Dots */}
        <div className="hidden sm:flex items-center gap-1.5 max-w-md overflow-x-auto p-1">
          {SLIDES_DATA.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentSlideIndex
                  ? 'w-6 bg-sky-700 shadow-sm shadow-sky-700/50'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              title={`Go to slide ${s.slideNumber}: ${s.title}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-sky-700 hover:bg-sky-600 text-white text-sm font-semibold shadow-lg shadow-sky-700/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          data-testid="btn-next-slide"
        >
          <span>Next Slide</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnail Grid Modal / Drawer */}
      <AnimatePresence>
        {showThumbnails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[85vh] bg-white/95 p-6 rounded-3xl border border-slate-200 shadow-2xl overflow-y-auto space-y-4"
              data-testid="thumbnails-modal"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  All 28 Slides Overview
                </h3>
                <button
                  type="button"
                  onClick={() => setShowThumbnails(false)}
                  className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {SLIDES_DATA.map((slide, idx) => {
                  const isCurrent = idx === currentSlideIndex;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => {
                        goToSlide(idx);
                        setShowThumbnails(false);
                      }}
                      className={`p-3 rounded-2xl text-left transition-all border ${
                        isCurrent
                          ? 'bg-sky-100/90 border-sky-500 text-sky-950 shadow-md'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-sky-50/60 hover:text-slate-950'
                      }`}
                      data-testid={`thumb-slide-${slide.slideNumber}`}
                    >
                      <div className="text-[10px] font-bold font-mono text-sky-700 mb-1">
                        #{slide.slideNumber}
                      </div>
                      <div className="text-xs font-semibold text-slate-900 line-clamp-2">
                        {slide.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
