'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { SLIDES_DATA } from '@/data/caseStudyData';

export function CandidateTheoriesMatrix() {
  const slide23 = SLIDES_DATA.find((s) => s.id === 23);
  const rows = slide23?.tableRows || [];

  return (
    <section id="candidate-theories" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-testid="candidate-theories-section">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="glass-badge px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-sm">
            Slide 23 • Theoretical Parsimony
          </span>
          <span className="text-xs text-slate-800 font-semibold">Framework Selection Matrix</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
          Candidate Theories &amp; Retained Roles
        </h2>
        <p className="text-sm sm:text-base text-slate-800 mt-1 max-w-3xl leading-relaxed font-normal">
          PPCT organises the macro-formulation. Complementary theories sharpen specific micro-mechanisms without theoretical bloat.
        </p>
      </div>

      {/* Responsive Glass Table */}
      <div className="glass-panel rounded-3xl border border-slate-300 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 text-sky-200 font-mono text-xs uppercase tracking-wider border-b border-slate-300">
              <tr>
                <th className="py-4 px-4 sm:px-6 font-bold">Theory Framework</th>
                <th className="py-4 px-4 sm:px-6 font-bold">What it Explains Well</th>
                <th className="py-4 px-4 sm:px-6 font-bold">Limit in this Case</th>
                <th className="py-4 px-4 sm:px-6 font-bold">Retained Clinical Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-900">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-sky-50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-extrabold text-slate-950 whitespace-nowrap">
                    <span className="text-sky-700 font-mono font-bold mr-2">#{idx + 1}</span>
                    {row[0]}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-900 leading-relaxed font-medium">
                    {row[1]}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-800 leading-relaxed font-normal">
                    {row[2]}
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-bold text-emerald-950">
                    <span className="inline-block px-3 py-1 rounded-lg bg-emerald-100 border border-emerald-400 font-bold shadow-sm">
                      {row[3]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selection Rule Callout */}
        <div className="p-4 sm:p-5 bg-sky-50 border-t border-sky-200 flex items-center gap-3 text-xs sm:text-sm text-sky-950">
          <ShieldCheck className="w-5 h-5 text-sky-700 shrink-0" />
          <span className="font-medium">
            <strong className="font-bold">Selection Rule:</strong> Retain a theory only when it changes an assessment question, intervention action, or evaluation indicator.
          </span>
        </div>
      </div>

    </section>
  );
}
