'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Users2, ZoomIn, Info, Check, ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { GENOGRAM_MEMBERS, ECOMAP_NODES } from '@/data/caseStudyData';
import { GenogramMember, EcoMapNode } from '@/types';

export function GenogramEcoMapHub() {
  const [activeTab, setActiveTab] = useState<'genogram' | 'ecomap'>('genogram');
  const [selectedMember, setSelectedMember] = useState<GenogramMember | null>(GENOGRAM_MEMBERS[1]); // D2 default
  const [selectedNode, setSelectedNode] = useState<EcoMapNode | null>(ECOMAP_NODES[0]); // Secondary school default
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const getConnectionBadge = (type: EcoMapNode['connectionType']) => {
    switch (type) {
      case 'strong':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">Strong / Resourceful</span>;
      case 'tenuous':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-200 text-slate-700 border border-slate-300">Tenuous (Dashed)</span>;
      case 'conflicted':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300">Stressful / Conflicted</span>;
      case 'boundary-crossing':
        return <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-sky-100 text-sky-800 border border-sky-300">Strong but Boundary-Crossing</span>;
    }
  };

  return (
    <section id="visualizer" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-testid="visualizer-section">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="glass-badge px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-sm">
              Figures 1 &amp; 2 • Clinical Mapping
            </span>
            <span className="text-xs text-slate-800 font-semibold">Structural &amp; Ecological Formulations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
            Relational Architecture &amp; System Eco-Map
          </h2>
          <p className="text-sm sm:text-base text-slate-800 mt-1 max-w-2xl leading-relaxed font-normal">
            Interactive diagnostic mapping of internal family subsystems (Figure 1) and external ecological support coordination (Figure 2).
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-200/90 border border-slate-300 self-start md:self-auto shadow-inner">
          <button
            type="button"
            onClick={() => setActiveTab('genogram')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'genogram'
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/40'
                : 'text-slate-700 hover:text-slate-950'
            }`}
            data-testid="tab-genogram"
          >
            <Users2 className="w-4 h-4" />
            <span>Fig 1: Genogram</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ecomap')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'ecomap'
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/40'
                : 'text-slate-700 hover:text-slate-950'
            }`}
            data-testid="tab-ecomap"
          >
            <Network className="w-4 h-4" />
            <span>Fig 2: Eco-Map</span>
          </button>
        </div>
      </div>

      {/* Main Content Area: Diagram + Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left / Top: High-Res Diagram Canvas (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-3xl glass-panel p-4 sm:p-6 border border-slate-300 overflow-hidden group shadow-xl">
            
            {/* Header Badge on Diagram */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <span className="text-xs font-bold text-sky-950 font-mono">
                {activeTab === 'genogram' ? 'Figure 1: Genogram of the Aisyah Family' : 'Figure 2: Eco-map System Connections'}
              </span>
              <button
                onClick={() => setLightboxImage(activeTab === 'genogram' ? '/images/genogram-aisyah-family.png' : '/images/eco-map.png')}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-slate-950 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors shadow-sm"
                title="Expand fullscreen"
              >
                <ZoomIn className="w-3.5 h-3.5 text-sky-700" />
                <span>Fullscreen</span>
              </button>
            </div>

            {/* Diagram Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white p-2 sm:p-4 flex items-center justify-center cursor-pointer shadow-inner border border-slate-200"
                 onClick={() => setLightboxImage(activeTab === 'genogram' ? '/images/genogram-aisyah-family.png' : '/images/eco-map.png')}>
              <Image
                src={activeTab === 'genogram' ? '/images/genogram-aisyah-family.png' : '/images/eco-map.png'}
                alt={activeTab === 'genogram' ? 'Genogram of Aisyah Family' : 'Eco-map of System Connections'}
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Diagram Caption & Key Takeaway */}
            <div className="pt-4 text-xs text-slate-800 leading-relaxed border-t border-slate-200 mt-4 font-normal">
              {activeTab === 'genogram' ? (
                <p>
                  <strong className="text-slate-950 font-bold">Analytical Core:</strong> A mother-eldest daughter (Aisyah &amp; D1) coalition that has absorbed executive functions, a conflictual mother-second daughter (Aisyah &amp; D2) dyad, and a cross-household attachment to the maternal aunt that competes with household authority.
                </p>
              ) : (
                <p>
                  <strong className="text-slate-950 font-bold">Diagnostic Pattern:</strong> Not an absence of resources, but the <em>direction</em> of strongest ties. The household&apos;s two thickest connections run to an employer that removes a parent and a kin household that receives the runaway adolescent. Every formal support is dashed.
                </p>
              )}
            </div>

            {/* Quick Download PDF CTA inside visualizer */}
            <div className="pt-3 flex items-center justify-between text-xs border-t border-slate-100 mt-2">
              <span className="text-slate-700 font-medium">Available in single-page reference PDF</span>
              <a
                href="/files/genogram-aisyah-family.pdf"
                download="genogram-aisyah-family.pdf"
                className="flex items-center gap-1.5 text-sky-800 hover:text-sky-950 font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download genogram-aisyah-family.pdf</span>
              </a>
            </div>

          </div>
        </div>

        {/* Right / Bottom: Interactive Node & Member Inspector (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {activeTab === 'genogram' ? (
            /* Genogram Members List & Selected Inspector */
            <div className="space-y-4">
              <div className="glass-panel p-5 rounded-3xl border border-slate-300 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider font-mono flex items-center gap-2">
                    <Users2 className="w-4 h-4 text-sky-700" />
                    Family Members ({GENOGRAM_MEMBERS.length})
                  </h3>
                  <span className="text-[11px] text-slate-700 font-semibold">Select to inspect</span>
                </div>
                
                {/* Horizontal / Grid Member Chips */}
                <div className="grid grid-cols-2 gap-2">
                  {GENOGRAM_MEMBERS.map((member) => {
                    const isSelected = selectedMember?.id === member.id;
                    return (
                      <button
                        key={member.id}
                        type="button"
                        onClick={() => setSelectedMember(member)}
                        className={`text-left p-2.5 rounded-xl text-xs transition-all border ${
                          isSelected
                            ? 'bg-sky-100 border-sky-500 text-sky-950 font-bold shadow-sm ring-1 ring-sky-400'
                            : 'bg-white border-slate-200 text-slate-800 hover:bg-sky-50 hover:text-slate-950'
                        }`}
                        data-testid={`member-button-${member.id}`}
                      >
                        <div className="font-extrabold truncate text-slate-950">{member.name}</div>
                        <div className="text-[10px] text-slate-600 font-medium truncate">{member.role}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Member Detail Card */}
              {selectedMember && (
                <motion.div
                  key={selectedMember.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-6 rounded-3xl border border-sky-300 space-y-4 shadow-xl text-slate-950"
                  data-testid="selected-member-card"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-200 font-mono">
                        {selectedMember.tag}
                      </span>
                      <h4 className="text-xl font-extrabold text-slate-950 mt-1">
                        {selectedMember.name}
                      </h4>
                      <p className="text-xs text-slate-700 font-semibold">{selectedMember.role} • Age: {selectedMember.age || 'N/A'}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 font-bold">
                        {selectedMember.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-900 bg-sky-50/90 p-3.5 rounded-2xl border border-sky-200">
                    <span className="font-bold text-sky-950 uppercase tracking-wider text-[10px] block">
                      Clinical Significance:
                    </span>
                    <p className="leading-relaxed font-medium">{selectedMember.clinicalSignificance}</p>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">
                      Key Relational Dyads:
                    </span>
                    <ul className="space-y-1">
                      {selectedMember.keyDyads.map((dyad, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-900 font-medium">
                          <Check className="w-3.5 h-3.5 text-sky-700 shrink-0 font-bold" />
                          <span>{dyad}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            /* Eco-Map Nodes List & Selected Inspector */
            <div className="space-y-4">
              <div className="glass-panel p-5 rounded-3xl border border-slate-300 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider font-mono flex items-center gap-2">
                    <Network className="w-4 h-4 text-emerald-700" />
                    Ecological Settings ({ECOMAP_NODES.length})
                  </h3>
                  <span className="text-[11px] text-slate-700 font-semibold">Select to inspect</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {ECOMAP_NODES.map((node) => {
                    const isSelected = selectedNode?.id === node.id;
                    return (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => setSelectedNode(node)}
                        className={`text-left p-2.5 rounded-xl text-xs transition-all border ${
                          isSelected
                            ? 'bg-sky-100 border-sky-500 text-sky-950 font-bold shadow-sm ring-1 ring-sky-400'
                            : 'bg-white border-slate-200 text-slate-800 hover:bg-sky-50 hover:text-slate-950'
                        }`}
                        data-testid={`node-button-${node.id}`}
                      >
                        <div className="font-extrabold truncate text-slate-950">{node.name}</div>
                        <div className="text-[10px] text-slate-600 font-medium truncate">{node.category}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Node Detail Card */}
              {selectedNode && (
                <motion.div
                  key={selectedNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-6 rounded-3xl border border-emerald-300 space-y-4 shadow-xl text-slate-950"
                  data-testid="selected-node-card"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-xl font-extrabold text-slate-950">
                        {selectedNode.name}
                      </h4>
                      <p className="text-xs text-slate-700 font-semibold capitalize">{selectedNode.category} Setting</p>
                    </div>
                    {getConnectionBadge(selectedNode.connectionType)}
                  </div>

                  <p className="text-xs text-slate-900 bg-slate-100/90 p-3 rounded-xl border border-slate-200 font-medium leading-relaxed">
                    {selectedNode.description}
                  </p>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-sky-950 uppercase tracking-wider text-[10px] block">
                        Clinical Implication:
                      </span>
                      <p className="text-slate-900 leading-relaxed font-medium">{selectedNode.clinicalImplication}</p>
                    </div>
                    <div>
                      <span className="font-bold text-emerald-950 uppercase tracking-wider text-[10px] block">
                        Intervention Action Required:
                      </span>
                      <p className="text-slate-950 font-semibold leading-relaxed">{selectedNode.actionRequired}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}

        </div>

      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all"
              >
                ✕
              </button>
              <div className="relative w-full h-[75vh]">
                <Image
                  src={lightboxImage}
                  alt="High resolution diagram"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
