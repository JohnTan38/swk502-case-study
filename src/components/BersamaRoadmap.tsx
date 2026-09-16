'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Users, User, Clock, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Compass, Sparkles } from 'lucide-react';
import { BERSAMA_PHASES, SESSION_ARCHITECTURE } from '@/data/caseStudyData';
import { BersamaPhase } from '@/types';

export function BersamaRoadmap() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [dualFocusView, setDualFocusView] = useState<'all' | 'person' | 'environment'>('all');

  const currentPhase: BersamaPhase = BERSAMA_PHASES[activePhaseIndex];

  return (
    <section id="bersama-roadmap" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-testid="bersama-section">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="glass-badge-emerald px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-mono shadow-sm">
              Slides 15 &amp; 16 • Intervention Protocol
            </span>
            <span className="text-xs text-slate-800 font-semibold">Adapted FFT &amp; Functional Casework</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
            BERSAMA: A 16-Week Dual-Focus Intervention
          </h2>
          <p className="text-sm sm:text-base text-slate-800 mt-1.5 max-w-3xl leading-relaxed">
            <strong className="text-sky-900 font-extrabold">B</strong>uilding <strong className="text-sky-900 font-extrabold">E</strong>ngagement, <strong className="text-sky-900 font-extrabold">R</strong>elational <strong className="text-sky-900 font-extrabold">S</strong>afety, <strong className="text-sky-900 font-extrabold">A</strong>utonomy, <strong className="text-sky-900 font-extrabold">M</strong>astery and <strong className="text-sky-900 font-extrabold">A</strong>ttendance.
          </p>
        </div>

        {/* Dual Focus Filter */}
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-200/90 border border-slate-300 self-start md:self-auto shadow-inner">
          <button
            type="button"
            onClick={() => setDualFocusView('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              dualFocusView === 'all'
                ? 'bg-sky-800 text-white shadow-md'
                : 'text-slate-700 hover:text-slate-950'
            }`}
            data-testid="filter-all"
          >
            All Tracks
          </button>
          <button
            type="button"
            onClick={() => setDualFocusView('person')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              dualFocusView === 'person'
                ? 'bg-indigo-800 text-white shadow-md'
                : 'text-slate-700 hover:text-slate-950'
            }`}
            data-testid="filter-person"
          >
            <User className="w-3.5 h-3.5" />
            <span>Person-Directed</span>
          </button>
          <button
            type="button"
            onClick={() => setDualFocusView('environment')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              dualFocusView === 'environment'
                ? 'bg-emerald-800 text-white shadow-md'
                : 'text-slate-700 hover:text-slate-950'
            }`}
            data-testid="filter-environment"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Environment-Directed</span>
          </button>
        </div>
      </div>

      {/* Phase Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {BERSAMA_PHASES.map((phase, idx) => {
          const isSelected = activePhaseIndex === idx;
          return (
            <button
              key={phase.phaseId}
              type="button"
              onClick={() => setActivePhaseIndex(idx)}
              className={`p-4 rounded-2xl text-left transition-all border ${
                isSelected
                  ? 'glass-card border-emerald-600 bg-emerald-50/95 shadow-lg ring-2 ring-emerald-400'
                  : 'glass-panel border-slate-300 hover:border-slate-400 text-slate-800 shadow-sm'
              }`}
              data-testid={`phase-tab-${phase.phaseId}`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className={isSelected ? 'text-emerald-950 font-bold' : 'text-slate-700 font-semibold'}>
                  Phase {phase.phaseNumber}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-bold border border-slate-300">
                  {phase.weeks}
                </span>
              </div>
              <div className="text-sm font-extrabold text-slate-950 truncate">
                {phase.name.split(':')[1] || phase.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Phase Detail Content */}
      <motion.div
        key={currentPhase.phaseId}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-300/90 space-y-6 shadow-xl mb-12 text-slate-950"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
          <div>
            <span className="text-xs font-mono text-emerald-900 font-bold uppercase tracking-wider">
              {currentPhase.weeks} Roadmap Specification
            </span>
            <h3 className="text-2xl font-extrabold text-slate-950 font-serif mt-0.5">
              {currentPhase.name}
            </h3>
          </div>
          <div className="text-xs text-slate-900 font-medium max-w-md bg-slate-100/90 p-3.5 rounded-2xl border border-slate-200">
            <strong className="text-slate-950">Core Objective:</strong> {currentPhase.objective}
          </div>
        </div>

        {/* Dual Focus Objectives Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {(dualFocusView === 'all' || dualFocusView === 'person') && (
            <div className="glass-card p-5 rounded-2xl border border-indigo-300 space-y-3 bg-indigo-50/80 shadow-md">
              <div className="flex items-center gap-2 text-indigo-950 font-extrabold text-sm font-serif">
                <User className="w-4 h-4 text-indigo-800" />
                <h4>Person-Directed Track (D2 Safety, Voice, Education)</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-900 font-medium">
                {currentPhase.personDirected.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-700 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(dualFocusView === 'all' || dualFocusView === 'environment') && (
            <div className="glass-card p-5 rounded-2xl border border-emerald-300 space-y-3 bg-emerald-50/80 shadow-md">
              <div className="flex items-center gap-2 text-emerald-950 font-extrabold text-sm font-serif">
                <Users className="w-4 h-4 text-emerald-800" />
                <h4>Environment-Directed Track (Family, Kin &amp; Services)</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-900 font-medium">
                {currentPhase.environmentDirected.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Core Practices, Indicators, and Decision Point */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          
          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 shadow-sm">
            <span className="text-[10px] font-bold text-sky-950 uppercase tracking-wider font-mono block">
              Core Clinical Practices:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-800">
              {currentPhase.corePractices.map((cp, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-sky-700 font-bold">•</span>
                  <span className="font-medium">{cp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 shadow-sm">
            <span className="text-[10px] font-bold text-emerald-950 uppercase tracking-wider font-mono block">
              Observable Review Indicators:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-800">
              {currentPhase.indicators.map((ind, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span className="font-medium">{ind}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-2xl border border-amber-300 bg-amber-50/95 space-y-2 shadow-sm">
            <span className="text-[10px] font-bold text-amber-950 uppercase tracking-wider font-mono flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-800" />
              Decision Point:
            </span>
            <p className="text-xs text-amber-950 leading-relaxed font-semibold">
              {currentPhase.decisionPoint}
            </p>
          </div>

        </div>
      </motion.div>

      {/* Slide 18: Session Architecture Section */}
      <div id="session-architecture" className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="glass-badge px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-sm">
            Slide 18 • Clinical Delivery
          </span>
          <span className="text-xs text-slate-800 font-semibold">Micro-Session Structure</span>
        </div>
        <h3 className="text-2xl font-extrabold text-slate-950 font-serif">
          60-Minute Session Architecture
        </h3>
        <p className="text-sm text-slate-800 max-w-3xl leading-relaxed">
          A single joint family meeting is insufficient for a conflict pattern shaped by power, shame, and safety concerns. Work is partitioned across 3 distinct spaces.
        </p>

        {/* 3 Clinical Spaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SESSION_ARCHITECTURE.spaces.map((sp, idx) => (
            <div key={idx} className="glass-card p-5 rounded-2xl tile-popup border border-slate-200/90 space-y-2 shadow-md">
              <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-200">
                Space #{idx + 1}
              </span>
              <h4 className="text-base font-extrabold text-slate-950 font-serif">{sp.name}</h4>
              <p className="text-xs text-slate-800 leading-relaxed font-medium">{sp.purpose}</p>
            </div>
          ))}
        </div>

        {/* 60-Minute Timeline Breakdown */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-200/90 space-y-4 shadow-md">
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2">
            <Clock className="w-4 h-4 text-sky-700" />
            Standard 60-Minute Session Sequence
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {SESSION_ARCHITECTURE.breakdown.map((item, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1 shadow-sm">
                <div className="text-xs font-bold font-mono text-sky-800">{item.time}</div>
                <div className="text-xs font-extrabold text-slate-950 truncate">{item.phase}</div>
                <div className="text-[11px] text-slate-700 leading-tight font-medium">{item.focus}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
