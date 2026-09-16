'use client';

import React from 'react';
import { BookOpen, ExternalLink, Bookmark, Scale } from 'lucide-react';
import { ACADEMIC_REFERENCES } from '@/data/caseStudyData';

export function ReferencesSection() {
  return (
    <section id="academic-references" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-testid="references-section">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="glass-badge px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-sm">
            Slide 19 • Literature &amp; Evidence Base
          </span>
          <span className="text-xs text-slate-800 font-semibold">Academic &amp; Statutory Citations</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
          Selected References &amp; Singapore Legal Anchors
        </h2>
        <p className="text-sm sm:text-base text-slate-800 mt-1 max-w-3xl leading-relaxed font-normal">
          Empirical literature and legislative grounding supporting the biopsychosocial-ecological case formulation and disciplined intervention adaptation.
        </p>
      </div>

      {/* References Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ACADEMIC_REFERENCES.map((ref, idx) => (
          <div
            key={idx}
            className="glass-card p-5 rounded-2xl tile-popup border border-slate-300 space-y-2 shadow-sm text-slate-950"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-sky-950 bg-sky-100 px-2 py-0.5 rounded border border-sky-300">
                [{idx + 1}] {ref.year}
              </span>
              <Bookmark className="w-4 h-4 text-slate-500" />
            </div>
            <h3 className="text-sm font-extrabold text-slate-950">
              {ref.author} ({ref.year}).
            </h3>
            <p className="text-xs text-slate-900 italic font-medium">
              {ref.title}
            </p>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              {ref.source}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
