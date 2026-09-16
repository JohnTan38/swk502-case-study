'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Compass, ArrowRight, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { CHRONOSYSTEM_TIMELINE } from '@/data/caseStudyData';
import { ChronosystemEvent } from '@/types';

export function ChronosystemTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<ChronosystemEvent>(CHRONOSYSTEM_TIMELINE[CHRONOSYSTEM_TIMELINE.length - 1]);

  return (
    <section id="chronosystem-timeline" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-testid="chronosystem-section">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="glass-badge px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-sm">
            Slide 3 • Chronosystem Dimension
          </span>
          <span className="text-xs text-slate-800 font-semibold">Bronfenbrenner PPCT Framework</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
          Family Transitions Across D2&apos;s Development
        </h2>
        <p className="text-sm sm:text-base text-slate-800 mt-1 max-w-3xl leading-relaxed font-normal">
          Timing matters because repeated transitions change the quality and availability of daily relationships. The chronology indicates <em className="text-sky-950 font-semibold">cumulative change</em> rather than a single sudden trigger.
        </p>
      </div>

      {/* Stepped Interactive Timeline Bar */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-300 mb-8 overflow-x-auto shadow-md">
        <div className="flex items-center justify-between min-w-[700px] relative px-4 py-4">
          
          {/* Connecting Line */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1.5 bg-slate-300 -z-0" />
          
          {CHRONOSYSTEM_TIMELINE.map((event, idx) => {
            const isSelected = selectedEvent.year === event.year;
            return (
              <div key={event.year} className="relative z-10 flex flex-col items-center group">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xs transition-all shadow-md ${
                    isSelected
                      ? 'bg-sky-800 text-white scale-110 shadow-sky-800/40 ring-4 ring-sky-300'
                      : 'bg-white border-2 border-slate-300 text-slate-800 hover:text-slate-950 hover:border-sky-500 hover:scale-105'
                  }`}
                  data-testid={`timeline-step-${idx}`}
                >
                  <Calendar className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-sky-700'}`} />
                </button>
                <span className={`mt-2 font-mono text-xs font-bold ${isSelected ? 'text-sky-950' : 'text-slate-800'}`}>
                  {event.year}
                </span>
                <span className="text-[11px] text-slate-700 font-semibold max-w-[100px] text-center truncate mt-0.5 group-hover:text-slate-950">
                  {event.title}
                </span>
              </div>
            );
          })}

        </div>
      </div>

      {/* Detailed Event Inspection Card */}
      <motion.div
        key={selectedEvent.year}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 sm:p-8 rounded-3xl border border-sky-300 grid grid-cols-1 md:grid-cols-12 gap-6 shadow-xl text-slate-950"
        data-testid="selected-timeline-event"
      >
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-sky-100 text-sky-950 text-xs font-mono font-extrabold border border-sky-300">
              Year {selectedEvent.year}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-300 font-semibold">
              {selectedEvent.category}
            </span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-950 font-serif">
            {selectedEvent.title}
          </h3>
          <p className="text-sm text-slate-900 leading-relaxed bg-slate-100/90 p-4 rounded-2xl border border-slate-200 font-medium">
            {selectedEvent.description}
          </p>
        </div>

        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1.5 shadow-sm">
            <span className="text-[10px] font-bold text-sky-950 uppercase tracking-wider block font-mono">
              Attachment Context:
            </span>
            <p className="text-xs text-slate-900 leading-relaxed font-medium">
              {selectedEvent.attachmentContext}
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1.5 shadow-sm">
            <span className="text-[10px] font-bold text-amber-950 uppercase tracking-wider block font-mono">
              Systemic Reorganization:
            </span>
            <p className="text-xs text-slate-900 leading-relaxed font-medium">
              {selectedEvent.systemicShift}
            </p>
          </div>

          <div className="sm:col-span-2 p-4 rounded-2xl border border-emerald-300 bg-emerald-50/95 space-y-1.5 shadow-sm">
            <span className="text-[10px] font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              Chronosystem Reading &amp; Practice Insight:
            </span>
            <p className="text-xs text-emerald-950 leading-relaxed font-semibold">
              {selectedEvent.keyLearning}
            </p>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
