'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Clock, Compass, Shield, UserCheck, CheckCircle, AlertCircle, Wrench, ArrowRight, SplitSquareVertical } from 'lucide-react';
import { FUNCTIONAL_THEORY_PILLARS, KEY_TECHNIQUES, CRITICAL_EVALUATION } from '@/data/caseStudyData';

export function FunctionalTheoryPillars() {
  const [activeSubTab, setActiveSubTab] = useState<'pillars' | 'techniques' | 'evaluation'>('pillars');

  return (
    <section id="theory-pillars" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-testid="functional-theory-section">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="glass-badge-gold px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-mono shadow-sm">
              Slides 6–11 • Theoretical Foundation
            </span>
            <span className="text-xs text-slate-800 font-semibold">Taft, Robinson &amp; Smalley Tradition</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
            Functional Theory in Social Work &amp; Casework Design
          </h2>
          <p className="text-sm sm:text-base text-slate-800 mt-1 max-w-2xl leading-relaxed font-normal">
            Unpacking the 6 core pillars, clinical techniques, and balanced evaluation of functional casework applied to the Aisyah family.
          </p>
        </div>

        {/* Sub-tab Navigation */}
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-200/90 border border-slate-300 self-start md:self-auto shadow-inner">
          <button
            type="button"
            onClick={() => setActiveSubTab('pillars')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeSubTab === 'pillars'
                ? 'bg-sky-800 text-white shadow-md shadow-sky-800/30'
                : 'text-slate-700 hover:text-slate-950'
            }`}
            data-testid="tab-theory-pillars"
          >
            6 Core Pillars
          </button>
          <button
            type="button"
            onClick={() => setActiveSubTab('techniques')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeSubTab === 'techniques'
                ? 'bg-sky-800 text-white shadow-md shadow-sky-800/30'
                : 'text-slate-700 hover:text-slate-950'
            }`}
            data-testid="tab-theory-techniques"
          >
            Key Techniques
          </button>
          <button
            type="button"
            onClick={() => setActiveSubTab('evaluation')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeSubTab === 'evaluation'
                ? 'bg-sky-800 text-white shadow-md shadow-sky-800/30'
                : 'text-slate-700 hover:text-slate-950'
            }`}
            data-testid="tab-theory-evaluation"
          >
            Strengths vs Limits
          </button>
        </div>
      </div>

      {/* Sub-Tab 1: The 6 Core Pillars */}
      {activeSubTab === 'pillars' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="pillars-grid">
          {FUNCTIONAL_THEORY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="glass-card p-6 rounded-3xl tile-popup border border-slate-300 space-y-3 flex flex-col justify-between shadow-md"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-sky-100 text-sky-950 border border-sky-300">
                    Pillar #{idx + 1}
                  </span>
                  <BookOpen className="w-4 h-4 text-sky-700" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-950 font-serif">
                  {pillar.title}
                </h3>
                <p className="text-xs text-sky-950 font-bold">
                  {pillar.subtitle}
                </p>
                <p className="text-xs text-slate-800 leading-relaxed pt-1 font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 bg-amber-50/95 p-3.5 rounded-2xl border border-amber-300 shadow-inner">
                <span className="text-[10px] font-bold text-amber-950 uppercase tracking-wider block font-mono">
                  Case Application:
                </span>
                <p className="text-[11px] text-slate-900 leading-snug mt-1 font-medium">
                  {pillar.caseContext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Sub-Tab 2: Key Techniques */}
      {activeSubTab === 'techniques' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="techniques-grid">
          {KEY_TECHNIQUES.map((tech, idx) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="glass-card p-6 rounded-3xl tile-popup border border-indigo-300 space-y-3 shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-indigo-100 text-indigo-950 border border-indigo-300">
                  Technique #{idx + 1}
                </span>
                <Wrench className="w-4 h-4 text-indigo-800" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-950 font-serif">
                {tech.title}
              </h3>
              <p className="text-xs text-indigo-950 font-bold">
                {tech.subtitle}
              </p>
              <p className="text-xs text-slate-800 leading-relaxed pt-1 font-normal">
                {tech.content}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Sub-Tab 3: Critical Evaluation (Strengths vs Limitations) */}
      {activeSubTab === 'evaluation' && (
        <div className="space-y-8" data-testid="evaluation-grid">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Strengths Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-400">
                <CheckCircle className="w-5 h-5 text-emerald-700" />
                <h3 className="text-lg font-extrabold text-emerald-950 font-serif">
                  Critical Evaluation: Strengths
                </h3>
              </div>
              <div className="space-y-3">
                {CRITICAL_EVALUATION.strengths.map((item) => (
                  <div key={item.id} className="bg-white p-4 rounded-2xl border border-emerald-300 shadow-sm space-y-1">
                    <h4 className="text-sm font-extrabold text-slate-950">{item.title}</h4>
                    <p className="text-xs text-slate-800 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/95 border border-emerald-300 text-xs text-emerald-950 shadow-sm font-medium">
                <strong className="font-bold">Synthesis of Strengths:</strong> {CRITICAL_EVALUATION.strengthsSynthesis}
              </div>
            </div>

            {/* Limitations Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-rose-400">
                <AlertCircle className="w-5 h-5 text-rose-700" />
                <h3 className="text-lg font-extrabold text-rose-950 font-serif">
                  Critical Evaluation: Limitations
                </h3>
              </div>
              <div className="space-y-3">
                {CRITICAL_EVALUATION.limitations.map((item) => (
                  <div key={item.id} className="bg-white p-4 rounded-2xl border border-rose-300 shadow-sm space-y-1">
                    <h4 className="text-sm font-extrabold text-slate-950">{item.title}</h4>
                    <p className="text-xs text-slate-800 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-2xl bg-rose-50/95 border border-rose-300 text-xs text-rose-950 shadow-sm font-medium">
                <strong className="font-bold">Synthesis of Limitations:</strong> {CRITICAL_EVALUATION.limitationsSynthesis}
              </div>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}
