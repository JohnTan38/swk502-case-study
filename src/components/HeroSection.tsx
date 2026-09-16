'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Clock, AlertTriangle, ShieldCheck, ArrowDownRight, Compass, Sparkles, BookCheck } from 'lucide-react';
import { CASE_META } from '@/data/caseStudyData';

export function HeroSection() {
  const stats = [
    {
      icon: <Home className="w-5 h-5 text-amber-600" />,
      label: 'Household Space',
      value: '2-Room Rental Flat',
      sub: '8 occupants; severe crowding & privacy deprivation',
      borderAccent: 'border-amber-300/80'
    },
    {
      icon: <Clock className="w-5 h-5 text-sky-700" />,
      label: 'Economic Structure',
      value: 'Single Shift Earner',
      sub: 'Stepfather injured 2010; rotating shifts remove parent',
      borderAccent: 'border-sky-300/80'
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-700" />,
      label: 'Subsystem Coalition',
      value: 'Parentified D1 (19)',
      sub: 'Enmeshed with mother; protects family vs own future',
      borderAccent: 'border-indigo-300/80'
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-rose-600" />,
      label: 'Presenting Signal',
      value: 'D2 (17) & D3 (15)',
      sub: 'School absence & absconding to maternal aunt for relief',
      borderAccent: 'border-rose-300/80'
    }
  ];

  return (
    <section id="overview" className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-testid="hero-section">
      
      {/* Background Ambient Glows */}
      <div className="glow-orb w-96 h-96 bg-sky-200/50 top-0 left-1/4" />
      <div className="glow-orb w-80 h-80 bg-blue-200/50 top-20 right-1/4" />

      <div className="relative z-10 space-y-8">
        
        {/* Distinction Badge & Institution Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2.5"
        >
          <span className="glass-badge-gold px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            {CASE_META.distinctionBadge}
          </span>
          <span className="glass-badge px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-sm">
            {CASE_META.courseCode} • {CASE_META.courseTitle}
          </span>
          <span className="text-xs text-slate-800 font-semibold">
            {CASE_META.institution}
          </span>
        </motion.div>

        {/* Main Presentation Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-serif leading-tight">
            ABSENT FROM SCHOOL.{' '}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-extrabold">
              PRESENT IN A SYSTEM.
            </span>
          </h1>
          <p className="text-lg sm:text-2xl text-slate-800 font-normal max-w-4xl leading-relaxed">
            {CASE_META.presentationSubtitle} — <span className="text-slate-950 font-semibold">{CASE_META.tagline}</span>
          </p>
        </motion.div>

        {/* Central Proposition Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="p-6 sm:p-8 rounded-3xl border border-sky-400/50 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/25 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-sky-500/25 text-sky-300 border border-sky-400/40 shrink-0 mt-1">
              <ShieldCheck className="w-6 h-6 text-sky-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-300 font-mono">
                  Central Proposition
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-300 font-medium">Core Practice Thesis</span>
              </div>
              <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                &ldquo;{CASE_META.centralProposition}&rdquo;
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {CASE_META.frameworks.map((fw) => (
                  <span
                    key={fw}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 text-sky-200 border border-sky-400/30 font-mono font-semibold"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Interactive Pop-up Stat Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + idx * 0.08 }}
              className={`glass-card p-5 rounded-2xl tile-popup border ${item.borderAccent} cursor-default shadow-md`}
              data-testid={`stat-tile-${idx}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {item.label}
                </span>
                <div className="p-2 rounded-xl bg-slate-100 border border-slate-200 shadow-inner">
                  {item.icon}
                </div>
              </div>
              <div className="text-lg font-extrabold text-slate-950 mb-1">
                {item.value}
              </div>
              <div className="text-xs text-slate-700 leading-snug font-medium">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Jump Action Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href="#visualizer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-sky-700 hover:bg-sky-600 text-white font-bold text-sm shadow-lg shadow-sky-700/30 transition-all hover:scale-105"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Genogram &amp; Eco-Map</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>
          <a
            href="#bersama-roadmap"
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-card text-slate-900 hover:text-sky-950 font-bold text-sm border border-slate-300 hover:border-sky-500 transition-all hover:scale-105 shadow-sm"
          >
            <BookCheck className="w-4 h-4 text-emerald-700" />
            <span>16-Week BERSAMA Plan</span>
          </a>
        </div>

      </div>
    </section>
  );
}
