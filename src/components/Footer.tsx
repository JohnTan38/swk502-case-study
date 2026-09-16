'use client';

import React from 'react';
import { ArrowUp, Github, FileText, GraduationCap, Heart } from 'lucide-react';
import { CASE_META } from '@/data/caseStudyData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950 text-slate-200 py-12 px-4 sm:px-6 lg:px-8" data-testid="app-footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding & Attribution */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <GraduationCap className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-extrabold text-white font-mono">
              {CASE_META.courseCode} • {CASE_META.courseTitle}
            </span>
          </div>
          <p className="text-xs text-slate-300 max-w-md font-medium">
            {CASE_META.institution} — Distinction Defence Case Formulation &amp; Dual-Focus Family Intervention.
          </p>
        </div>

        {/* Quick Links & Downloads */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-200">
          <a
            href="https://github.com/JohnTan38/swk502-case-study"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 hover:text-white transition-all border border-slate-700 font-semibold shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
          <a
            href="/files/genogram-aisyah-family.pdf"
            download="genogram-aisyah-family.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-300 hover:text-sky-100 transition-all border border-slate-700 font-semibold shadow-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Genogram PDF (1 Page)</span>
          </a>
          <a
            href="/files/SWK502_Aisyah_Case_Study.pdf"
            download="SWK502_Aisyah_Case_Study.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-300 hover:text-sky-100 transition-all border border-slate-700 font-semibold shadow-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Full Slide Deck PDF</span>
          </a>
        </div>

        {/* Back to top */}
        <div>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-sky-400 transition-all shadow-sm"
            title="Scroll to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-sky-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
