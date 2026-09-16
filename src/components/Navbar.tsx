'use client';

import React, { useState } from 'react';
import { Search, Presentation, LayoutDashboard, Menu, X, GraduationCap, Sparkles } from 'lucide-react';
import { PdfDownloadDropdown } from './PdfDownloadDropdown';

interface NavbarProps {
  currentMode: 'portal' | 'slides';
  onModeChange: (mode: 'portal' | 'slides') => void;
  onOpenSearch: () => void;
}

export function Navbar({ currentMode, onModeChange, onOpenSearch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Genogram & Eco-Map', href: '#visualizer' },
    { label: 'PPCT & Timeline', href: '#chronosystem-timeline' },
    { label: 'Functional Theory', href: '#theory-pillars' },
    { label: 'BERSAMA 16-Wk', href: '#bersama-roadmap' },
    { label: 'Evaluation & Pathways', href: '#measurement-dashboard' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xl border-b border-slate-300 shadow-sm" data-testid="app-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-sky-600/30 border border-white/60 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold font-mono tracking-widest text-sky-900 uppercase">
                  SUSS • SWK502
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 border border-amber-400 text-amber-950 shadow-sm">
                  <Sparkles className="w-2.5 h-2.5 text-amber-700" />
                  Distinction Defence
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-extrabold text-slate-950 tracking-tight leading-none truncate max-w-[200px] sm:max-w-sm">
                Aisyah Case Study
              </h1>
            </div>
          </div>

          {/* Desktop Nav Links (Portal Mode) */}
          {currentMode === 'portal' && (
            <nav className="hidden xl:flex items-center gap-1 text-xs font-bold text-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 rounded-xl hover:bg-sky-100/80 hover:text-sky-950 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Actions: View Switcher, Search, PDF Downloads */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Mode Switcher Toggle */}
            <div className="flex items-center p-1 rounded-2xl bg-slate-200/90 border border-slate-300 shadow-inner">
              <button
                type="button"
                onClick={() => onModeChange('portal')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  currentMode === 'portal'
                    ? 'bg-sky-800 text-white shadow-md shadow-sky-800/30'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
                data-testid="mode-toggle-portal"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Case Portal</span>
              </button>
              <button
                type="button"
                onClick={() => onModeChange('slides')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  currentMode === 'slides'
                    ? 'bg-sky-800 text-white shadow-md shadow-sky-800/30'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
                data-testid="mode-toggle-slides"
              >
                <Presentation className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">28 Slides Deck</span>
              </button>
            </div>

            {/* Global Search Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-xl glass-card border border-slate-300 text-xs text-slate-800 hover:text-slate-950 hover:border-sky-500 transition-all shadow-sm font-semibold"
              data-testid="search-trigger-button"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-sky-700" />
              <span className="hidden md:inline font-bold">Search</span>
              <kbd className="hidden md:inline-block text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-bold border border-slate-300">
                ⌘K
              </kbd>
            </button>

            {/* PDF Download Component */}
            <div className="hidden sm:block" data-testid="desktop-pdf-dropdown">
              <PdfDownloadDropdown />
            </div>

            {/* Mobile menu hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 rounded-xl text-slate-800 hover:text-slate-950 hover:bg-slate-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden py-4 border-t border-slate-200 space-y-3">
            <div className="pb-3 border-b border-slate-200">
              <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2">
                Download PDF
              </span>
              <PdfDownloadDropdown />
            </div>
            {currentMode === 'portal' && (
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-xl text-sm font-bold text-slate-800 hover:bg-sky-50 hover:text-sky-950"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </header>
  );
}
