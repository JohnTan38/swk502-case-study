'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Layers, GitBranch, Target, Compass, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEARCH_SUGGESTIONS, SLIDES_DATA } from '@/data/caseStudyData';
import { SearchSuggestion } from '@/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSlide?: (slideNumber: number) => void;
}

export function SearchModal({ isOpen, onClose, onNavigateToSlide }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K listener handled by parent or here
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filtered auto-suggestions + slide results
  const trimmed = query.trim().toLowerCase();
  
  const filteredSuggestions: SearchSuggestion[] = query.trim() === ''
    ? SEARCH_SUGGESTIONS.slice(0, 8)
    : [
        // Exact and fuzzy matches from indexed suggestions
        ...SEARCH_SUGGESTIONS.filter((item) =>
          item.title.toLowerCase().includes(trimmed) ||
          item.subtitle.toLowerCase().includes(trimmed) ||
          item.tags.some((t) => t.includes(trimmed))
        ),
        // Additional slide matches
        ...SLIDES_DATA.filter((slide) =>
          slide.title.toLowerCase().includes(trimmed) ||
          slide.contentSummary.toLowerCase().includes(trimmed) ||
          (slide.keyPoints && slide.keyPoints.some((kp) => kp.toLowerCase().includes(trimmed)))
        )
        .filter((slide) => !SEARCH_SUGGESTIONS.some((s) => s.slideNumber === slide.slideNumber))
        .map((slide) => ({
          id: `slide-${slide.slideNumber}`,
          title: `Slide ${slide.slideNumber}: ${slide.title}`,
          subtitle: slide.subtitle || slide.contentSummary.slice(0, 90) + '...',
          category: `Slide ${slide.slideNumber} • ${slide.badge || 'Presentation'}`,
          targetSection: 'presentation-deck',
          slideNumber: slide.slideNumber,
          tags: [slide.category, 'slide']
        }))
      ];

  const handleSelect = (item: SearchSuggestion) => {
    onClose();

    if (item.slideNumber && onNavigateToSlide && item.targetSection === 'presentation-deck') {
      onNavigateToSlide(item.slideNumber);
      return;
    }

    if (item.targetSection) {
      const element = document.getElementById(item.targetSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        element.classList.add('ring-2', 'ring-sky-500', 'ring-offset-4', 'ring-offset-white');
        setTimeout(() => {
          element.classList.remove('ring-2', 'ring-sky-500', 'ring-offset-4', 'ring-offset-white');
        }, 2000);
      } else if (item.slideNumber && onNavigateToSlide) {
        onNavigateToSlide(item.slideNumber);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredSuggestions.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredSuggestions.length) % Math.max(1, filteredSuggestions.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredSuggestions[selectedIndex]) {
        handleSelect(filteredSuggestions[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('Diagram') || category.includes('Formulation')) return <GitBranch className="w-4 h-4 text-sky-700" />;
    if (category.includes('Theory')) return <BookOpen className="w-4 h-4 text-purple-700" />;
    if (category.includes('Intervention')) return <Target className="w-4 h-4 text-emerald-700" />;
    if (category.includes('Downloads')) return <Sparkles className="w-4 h-4 text-amber-600" />;
    if (category.includes('Developmental')) return <Compass className="w-4 h-4 text-indigo-700" />;
    return <Layers className="w-4 h-4 text-blue-700" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
            data-testid="search-modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', duration: 0.28 }}
            className="relative w-full max-w-2xl rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl overflow-hidden z-10 text-slate-900"
            data-testid="search-modal"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 sm:px-6 py-4 border-b border-slate-200 gap-3">
              <Search className="w-5 h-5 text-sky-700 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search concepts, theories, genogram, PPCT, BERSAMA, slides..."
                className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
                data-testid="search-input"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-block px-2 py-1 rounded bg-slate-100 text-[10px] font-mono text-slate-600 border border-slate-200">
                ESC to close
              </kbd>
            </div>

            {/* Suggestions List */}
            <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1" data-testid="search-results-list">
              <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                <span>{query ? `Suggestions & Matches (${filteredSuggestions.length})` : 'Recommended Quick Jumps'}</span>
                <span className="text-[10px] text-slate-500 font-mono">Use ↑ ↓ Enter</span>
              </div>

              {filteredSuggestions.length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-sm">
                  No matching topics found for &ldquo;<span className="text-slate-900 font-medium">{query}</span>&rdquo;.
                </div>
              ) : (
                filteredSuggestions.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`group flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-sky-100/90 border border-sky-400 text-sky-950 translate-x-1 shadow-sm'
                          : 'hover:bg-slate-100 text-slate-800 border border-transparent'
                      }`}
                      data-testid={`search-suggestion-${item.id}`}
                    >
                      <div className="flex items-start gap-3 min-w-0 pr-2">
                        <div className={`p-2 rounded-xl mt-0.5 shrink-0 ${isSelected ? 'bg-sky-200/80' : 'bg-slate-100'}`}>
                          {getCategoryIcon(item.category)}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-sm font-semibold text-slate-900 truncate group-hover:text-sky-800 transition-colors">
                              {item.title}
                            </h4>
                            <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-slate-100 text-sky-800 border border-slate-200">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 truncate mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-sky-700 translate-x-0.5' : 'text-slate-400 opacity-0 group-hover:opacity-100'}`} />
                    </div>
                  );
                })
              )}
            </div>

            {/* Quick Keyword Filter Chips */}
            <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex items-center gap-2 overflow-x-auto text-xs text-slate-600">
              <span className="text-[11px] font-semibold text-slate-500 uppercase shrink-0">Popular:</span>
              {['Genogram', 'Eco-Map', 'Functional Theory', 'PPCT', 'BERSAMA 16-Week', 'PDF Download', 'Singapore Pathways'].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => {
                    setQuery(chip);
                    setSelectedIndex(0);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white hover:bg-sky-100 hover:text-sky-900 text-slate-700 border border-slate-200 text-[11px] whitespace-nowrap transition-all shadow-sm"
                >
                  {chip}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
