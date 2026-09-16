'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Sliders, CheckCircle2, AlertTriangle, ShieldCheck, TrendingUp, Info } from 'lucide-react';
import { MEASUREMENT_DOMAINS } from '@/data/caseStudyData';
import { MeasurementDomain } from '@/types';

export function MeasurementDashboard() {
  const [scores, setScores] = useState<{ [key: string]: number }>(() => {
    const initial: { [key: string]: number } = {};
    MEASUREMENT_DOMAINS.forEach((d) => {
      initial[d.domain] = d.currentScore;
    });
    return initial;
  });

  const handleScoreChange = (domain: string, val: number) => {
    setScores((prev) => ({ ...prev, [domain]: val }));
  };

  const averageScore = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / MEASUREMENT_DOMAINS.length
  );

  return (
    <section id="measurement-dashboard" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-testid="measurement-section">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="glass-badge px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-sm">
              Slide 17 • Routine Outcome Monitoring
            </span>
            <span className="text-xs text-slate-800 font-semibold">Collaborative Indicators</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
            Measurement Tests the Formulation, Not Compliance
          </h2>
          <p className="text-sm sm:text-base text-slate-800 mt-1 max-w-3xl leading-relaxed font-normal">
            Combines behavioral, relational, and person-defined indicators. If indicators do not shift, the clinical hypothesis is revised.
          </p>
        </div>

        {/* Overall Health Score Card */}
        <div className="glass-panel p-4 rounded-2xl border border-sky-300 flex items-center gap-4 self-start md:self-auto shadow-md">
          <div>
            <span className="text-[11px] font-mono text-slate-700 uppercase tracking-wider block font-bold">
              Formulation Health
            </span>
            <div className="text-2xl font-black text-slate-950 font-mono flex items-baseline gap-1">
              <span>{averageScore}%</span>
              <span className="text-xs text-sky-800 font-bold">Trajectory</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-800 shadow-inner">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* 5 Measurement Domain Cards with Live Sliders */}
      <div className="space-y-4 mb-8">
        {MEASUREMENT_DOMAINS.map((domain, idx) => {
          const currentVal = scores[domain.domain] ?? domain.currentScore;
          return (
            <div
              key={idx}
              className="glass-card p-5 sm:p-6 rounded-3xl border border-slate-300 space-y-4 shadow-md text-slate-950"
              data-testid={`domain-card-${idx}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-sky-950">
                      Domain {idx + 1}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 font-mono font-semibold border border-slate-300">
                      Review: {domain.reviewPoint}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-950 font-serif">
                    {domain.domain}
                  </h3>
                </div>

                {/* Score badge */}
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <span className="text-xs text-slate-700 font-mono font-bold">Indicator Metric:</span>
                  <span className={`text-sm font-black font-mono px-3.5 py-1 rounded-xl border shadow-sm ${
                    currentVal >= 75
                      ? 'bg-emerald-100 text-emerald-950 border-emerald-400'
                      : currentVal >= 50
                      ? 'bg-amber-100 text-amber-950 border-amber-400'
                      : 'bg-rose-100 text-rose-950 border-rose-400'
                  }`}>
                    {currentVal}%
                  </span>
                </div>
              </div>

              {/* Progress Slider */}
              <div className="space-y-1.5">
                <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300 shadow-inner">
                  <motion.div
                    className={`h-full rounded-full transition-all duration-300 ${
                      currentVal >= 75
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-500'
                        : currentVal >= 50
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-400'
                        : 'bg-gradient-to-r from-rose-600 to-rose-400'
                    }`}
                    style={{ width: `${currentVal}%` }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={currentVal}
                  onChange={(e) => handleScoreChange(domain.domain, parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-700"
                  aria-label={`Adjust ${domain.domain}`}
                  data-testid={`slider-${idx}`}
                />
              </div>

              {/* Details: Baseline vs Target */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
                <div className="bg-slate-100/90 p-3.5 rounded-2xl border border-slate-200">
                  <span className="font-bold text-rose-950 uppercase tracking-wider text-[10px] block font-mono">
                    Baseline presentation:
                  </span>
                  <p className="text-slate-900 mt-1 font-medium leading-snug">{domain.baseline}</p>
                </div>

                <div className="bg-sky-50 p-3.5 rounded-2xl border border-sky-200">
                  <span className="font-bold text-sky-950 uppercase tracking-wider text-[10px] block font-mono">
                    Review Indicator:
                  </span>
                  <p className="text-slate-900 mt-1 font-medium leading-snug">{domain.indicator}</p>
                </div>

                <div className="bg-emerald-50 p-3.5 rounded-2xl border border-emerald-200">
                  <span className="font-bold text-emerald-950 uppercase tracking-wider text-[10px] block font-mono">
                    Target milestone:
                  </span>
                  <p className="text-emerald-950 mt-1 font-semibold leading-snug">{domain.targetDescription}</p>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Slide 14 Feedback Rule Banner */}
      <div className="glass-panel p-5 rounded-3xl border border-amber-300 bg-amber-50 shadow-md flex items-start gap-4">
        <AlertTriangle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-slate-900 leading-relaxed font-normal">
          <strong className="text-amber-950 font-mono uppercase tracking-wider block mb-1 font-bold">
            Slide 14 Feedback Rule:
          </strong>
          If early indicators do not show observable improvement by Week 4 or Week 8, the social worker must <strong className="text-slate-950 font-bold">revisit the formulation hypothesis</strong> rather than increasing pressure or moralising against D2 or the family.
        </div>
      </div>

    </section>
  );
}
