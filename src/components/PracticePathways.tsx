'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, ShieldAlert, HeartHandshake, School, DollarSign, Users, Scale, ArrowRight } from 'lucide-react';
import { PRACTICE_PATHWAYS } from '@/data/caseStudyData';

export function PracticePathways() {
  const getIcon = (need: string) => {
    if (need.includes('School') || need.includes('Attendance')) return <School className="w-5 h-5 text-sky-700" />;
    if (need.includes('Relational') || need.includes('Family')) return <HeartHandshake className="w-5 h-5 text-indigo-700" />;
    if (need.includes('Financial') || need.includes('Material')) return <DollarSign className="w-5 h-5 text-emerald-700" />;
    if (need.includes('Kinship') || need.includes('Shelter')) return <Users className="w-5 h-5 text-amber-700" />;
    return <ShieldAlert className="w-5 h-5 text-rose-700" />;
  };

  return (
    <section id="practice-pathways" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-testid="practice-pathways-section">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="glass-badge px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-sm">
            Slide 27 • Singapore Social Service Architecture
          </span>
          <span className="text-xs text-slate-800 font-semibold">Statutory Boundaries &amp; Ethics</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
          Practice Pathways, Ethics and Escalation
        </h2>
        <p className="text-sm sm:text-base text-slate-800 mt-1 max-w-3xl leading-relaxed font-normal">
          A coordinated Singapore plan requires clear ownership across family, school, and statutory systems while upholding professional ethics and legal mandates.
        </p>
      </div>

      {/* Pathways Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {PRACTICE_PATHWAYS.map((pathway, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.07 }}
            className="glass-card p-6 rounded-3xl tile-popup border border-slate-300 space-y-4 flex flex-col justify-between shadow-md text-slate-950"
            data-testid={`pathway-card-${idx}`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-sky-100 text-sky-950 border border-sky-300">
                  Pathway #{idx + 1}
                </span>
                <div className="p-2 rounded-xl bg-slate-100 border border-slate-200 shadow-inner">
                  {getIcon(pathway.need)}
                </div>
              </div>

              <div>
                <h3 className="text-base font-extrabold text-slate-950 font-serif">
                  {pathway.need}
                </h3>
                <p className="text-xs font-bold text-sky-950 mt-1 font-mono">
                  {pathway.leadPathway}
                </p>
              </div>

              <div className="text-xs text-slate-900 bg-slate-100/90 p-3 rounded-2xl border border-slate-200 space-y-1 font-medium">
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block font-mono">
                  Concrete Case Action:
                </span>
                <p className="leading-relaxed">{pathway.caseAction}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <span className="text-[10px] font-bold text-rose-950 uppercase tracking-wider block font-mono">
                Statutory / Practice Boundary:
              </span>
              <p className="text-[11px] text-slate-800 leading-snug mt-1 font-semibold">
                {pathway.boundary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ethical Centre Banner */}
      <div className="glass-card p-6 rounded-3xl border border-sky-300 bg-sky-50 shadow-xl flex items-start sm:items-center gap-4 text-slate-950">
        <div className="p-3 rounded-2xl bg-sky-100 text-sky-900 border border-sky-200 shrink-0">
          <Scale className="w-6 h-6 text-sky-700" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-slate-950 uppercase tracking-wider font-mono">
            Ethical Centre of Casework Practice
          </h4>
          <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium">
            D2 participates as a young person with <strong className="text-sky-950 font-bold">voice and evolving autonomy</strong>. Safety duties and caregiver responsibilities remain actively supported rather than bypassed.
          </p>
        </div>
      </div>

    </section>
  );
}
