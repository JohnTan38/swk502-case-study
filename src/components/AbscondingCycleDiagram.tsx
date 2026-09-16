'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, ArrowRight, ShieldAlert, Key, Zap } from 'lucide-react';
import { MAINTENANCE_CYCLE_STEPS } from '@/data/caseStudyData';

export function AbscondingCycleDiagram() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="maintenance-cycle" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-testid="maintenance-cycle-section">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="glass-badge-rose px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-sm">
            Slide 12 • Coercive Process &amp; PPCT
          </span>
          <span className="text-xs text-slate-800 font-semibold">Provisional Maintenance Cycle</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
          Why the Absconding Pattern May Persist
        </h2>
        <p className="text-sm sm:text-base text-slate-800 mt-1 max-w-3xl leading-relaxed font-normal">
          Absconding is maintained by short-term negative reinforcement. Leaving terminates acute interpersonal distress immediately, which paradoxically locks the family into a recurring cycle.
        </p>
      </div>

      {/* Key Leverage Callout Banner */}
      <div className="mb-8 p-5 rounded-3xl glass-card border border-amber-300 bg-amber-50/95 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md text-amber-950">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-900 border border-amber-300 shadow-inner">
            <Key className="w-5 h-5 text-amber-800" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider font-mono">
              Key Clinical Leverage Point
            </h4>
            <p className="text-xs sm:text-sm text-amber-950 font-semibold mt-0.5">
              Change what happens <strong>before leaving</strong> (de-escalation &amp; planned pauses) and <strong>after return</strong> (structured emotional repair).
            </p>
          </div>
        </div>
        <span className="text-[11px] px-3.5 py-1 rounded-full bg-white text-amber-950 font-mono border border-amber-300 font-bold shrink-0 shadow-sm">
          Negative Reinforcement Loop
        </span>
      </div>

      {/* 6-Step Cycle Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MAINTENANCE_CYCLE_STEPS.map((step) => {
          const isSelected = activeStep === step.step;
          return (
            <motion.div
              key={step.step}
              onClick={() => setActiveStep(step.step)}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`p-6 rounded-3xl cursor-pointer transition-all border ${
                isSelected
                  ? 'glass-card border-sky-500 ring-2 ring-sky-300 shadow-xl bg-white text-slate-950'
                  : 'glass-panel border-slate-300 hover:border-sky-400 text-slate-800 shadow-sm'
              }`}
              data-testid={`cycle-step-${step.step}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold font-mono px-2.5 py-1 rounded-lg ${
                  isSelected ? 'bg-sky-800 text-white shadow-sm' : 'bg-slate-100 text-slate-800 border border-slate-200'
                }`}>
                  Stage {step.step} of 6
                </span>
                <span className="text-xs text-slate-600 font-mono font-bold">Step {step.step}</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-950 font-serif mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {step.detail}
              </p>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
