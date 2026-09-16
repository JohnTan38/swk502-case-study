'use client';

import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface PdfOption {
  id: string;
  filename: string;
  displayName: string;
  description: string;
  badge: string;
  size: string;
}

const PDF_OPTIONS: PdfOption[] = [
  {
    id: 'genogram-aisyah-family',
    filename: 'genogram-aisyah-family.pdf',
    displayName: 'Genogram & Eco-Map (Single Page)',
    description: 'Figure 1 & Figure 2 integrated visual formulation resized to single page',
    badge: 'Single Page',
    size: '1 Page • PDF'
  },
  {
    id: 'SWK502_Aisyah_Case_Study',
    filename: 'SWK502_Aisyah_Case_Study.pdf',
    displayName: 'SWK502 Aisyah Case Study (Full Deck)',
    description: 'Complete 28-slide SUSS Distinction Defence presentation deck',
    badge: 'Full Slide Deck',
    size: '28 Pages • PDF'
  }
];

export function PdfDownloadDropdown() {
  const [selectedPdfId, setSelectedPdfId] = useState<string>(PDF_OPTIONS[0].id);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [downloading, setDownloading] = useState<boolean>(false);
  const [lastDownloaded, setLastDownloaded] = useState<string | null>(null);

  const selectedOption = PDF_OPTIONS.find((opt) => opt.id === selectedPdfId) || PDF_OPTIONS[0];

  const triggerDownload = (option: PdfOption) => {
    setDownloading(true);
    setLastDownloaded(option.displayName);

    // Create invisible anchor to trigger direct browser download
    const link = document.createElement('a');
    link.href = `/files/${option.filename}`;
    link.download = option.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 1200);

    setTimeout(() => {
      setLastDownloaded(null);
    }, 4000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerDownload(selectedOption);
  };

  return (
    <div className="relative inline-block text-left" data-testid="pdf-download-container">
      {/* Download Trigger / Form */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        {/* Dropdown Selector Button */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium glass-card border border-slate-300 text-slate-800 hover:text-slate-950 hover:border-sky-500 transition-all shadow-sm"
            data-testid="pdf-dropdown-trigger"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <FileText className="w-4 h-4 text-sky-700" />
            <span className="font-semibold max-w-[130px] sm:max-w-[180px] truncate">
              {selectedOption.id}
            </span>
            <span className="hidden md:inline-block text-[10px] px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 font-mono font-semibold">
              {selectedOption.badge}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Glass Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 sm:left-0 sm:right-auto mt-2 w-72 sm:w-80 rounded-2xl bg-white/95 backdrop-blur-xl p-2 shadow-2xl z-50 border border-slate-200 text-slate-900"
                role="listbox"
                data-testid="pdf-dropdown-menu"
              >
                <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200 flex items-center justify-between">
                  <span>Select PDF Document</span>
                  <Sparkles className="w-3 h-3 text-amber-500" />
                </div>
                <div className="py-1 space-y-1">
                  {PDF_OPTIONS.map((option) => {
                    const isSelected = option.id === selectedPdfId;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setSelectedPdfId(option.id);
                          setIsOpen(false);
                          // Auto trigger on direct item click
                          triggerDownload(option);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex flex-col gap-1 ${
                          isSelected
                            ? 'bg-sky-100 border border-sky-400 text-sky-950 font-medium'
                            : 'hover:bg-slate-100 text-slate-700 hover:text-slate-950'
                        }`}
                        data-testid={`pdf-option-${option.id}`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-semibold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                            {option.displayName}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono">
                            {option.size}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug pl-5">
                          {option.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Explicit Submit / Download Action Button */}
        <button
          type="submit"
          disabled={downloading}
          data-testid="pdf-download-submit"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-sky-700 hover:bg-sky-600 text-white shadow-md shadow-sky-700/25 hover:shadow-sky-700/40 active:scale-95 transition-all disabled:opacity-60"
        >
          <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
          <span>{downloading ? 'Downloading...' : 'Download'}</span>
        </button>
      </form>

      {/* Download Success Toast Notification */}
      <AnimatePresence>
        {lastDownloaded && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute top-12 right-0 mt-2 whitespace-nowrap px-3.5 py-2 rounded-xl bg-emerald-900 text-emerald-100 border border-emerald-700 text-xs shadow-xl flex items-center gap-2 z-50 backdrop-blur-md"
            data-testid="download-success-toast"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Downloading: <strong>{lastDownloaded}</strong></span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
