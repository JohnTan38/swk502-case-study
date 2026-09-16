export interface SlideItem {
  id: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  badge?: string;
  category: 'overview' | 'formulation' | 'theory' | 'intervention' | 'evaluation' | 'pathways' | 'appendix';
  contentSummary: string;
  keyPoints?: string[];
  tableHeaders?: string[];
  tableRows?: string[][];
  infographicType?: 'genogram' | 'ecomap' | 'timeline' | 'cycle' | 'theory-pillars' | 'techniques' | 'strengths' | 'limitations' | 'bersama' | 'session' | 'dashboard' | 'matrix';
  speakerNotes?: string;
}

export interface SearchSuggestion {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  targetSection: string;
  slideNumber?: number;
  tags: string[];
}

export interface GenogramMember {
  id: string;
  name: string;
  age?: number | string;
  role: string;
  status: string;
  clinicalSignificance: string;
  tag: string;
  keyDyads: string[];
}

export interface EcoMapNode {
  id: string;
  name: string;
  category: 'education' | 'kin' | 'social-service' | 'healthcare' | 'work' | 'community';
  connectionType: 'strong' | 'tenuous' | 'conflicted' | 'boundary-crossing';
  description: string;
  clinicalImplication: string;
  actionRequired: string;
}

export interface ChronosystemEvent {
  year: string;
  title: string;
  category: string;
  description: string;
  attachmentContext: string;
  systemicShift: string;
  keyLearning: string;
}

export interface BersamaPhase {
  phaseNumber: number;
  phaseId: string;
  name: string;
  weeks: string;
  objective: string;
  personDirected: string[];
  environmentDirected: string[];
  corePractices: string[];
  indicators: string[];
  decisionPoint: string;
}

export interface MeasurementDomain {
  domain: string;
  baseline: string;
  indicator: string;
  reviewPoint: string;
  currentScore: number; // 0 to 100
  targetDescription: string;
}

export interface PracticePathwayItem {
  need: string;
  leadPathway: string;
  caseAction: string;
  boundary: string;
}
