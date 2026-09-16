import {
  SlideItem,
  SearchSuggestion,
  GenogramMember,
  EcoMapNode,
  ChronosystemEvent,
  BersamaPhase,
  MeasurementDomain,
  PracticePathwayItem
} from '@/types';

export const CASE_META = {
  courseCode: 'SWK502',
  courseTitle: 'Casework & Family Intervention',
  institution: 'Singapore University of Social Sciences (SUSS)',
  presentationTitle: 'ABSENT FROM SCHOOL. PRESENT IN A SYSTEM.',
  presentationSubtitle: 'Absconding as a developmental and ecological signal',
  tagline: 'A bioecological case formulation and dual-focus family intervention for the Aisyah family',
  distinctionBadge: 'DISTINCTION DEFENCE',
  frameworks: ['Bronfenbrenner PPCT', 'Functional Casework', 'Structural Family Intervention'],
  centralProposition: 'D2’s absconding may function as an immediate escape from relational strain. Sustainable change therefore requires safer proximal processes at home and coordinated support across school, kin and social services.',
  caseSummary: {
    client: 'D2 (17 years old, female)',
    mother: 'Aisyah (36 years old, index carer)',
    household: '8 residents living in a 2-room rental flat',
    earner: 'Single earner (current husband/stepfather) on rotating shift work',
    eldestDaughter: 'D1 (19 years old, parentified role)',
    youngerSister: 'D3 (15 years old, following D2)',
    youngerBrothers: 'S1 (10 years old), S2 (2 years old)',
    grandfather: 'Maternal grandfather (chronic health needs)',
    refuge: 'Maternal aunt (provides shelter, competing authority structure)'
  }
};

export const GENOGRAM_MEMBERS: GenogramMember[] = [
  {
    id: 'aisyah',
    name: 'Aisyah',
    age: 36,
    role: 'Index Carer & Mother',
    status: 'High Caregiving Burden',
    clinicalSignificance: 'Under extreme stress managing 8 household members in a 2-room flat. Escalating conflict with D2; forms enmeshed executive coalition with D1.',
    tag: 'Care + Authority',
    keyDyads: ['Enmeshed coalition with D1 (19)', 'Conflictual escalatory loop with D2 (17)', 'Married to Current Husband (2009)']
  },
  {
    id: 'd2',
    name: 'D2 (Index Adolescent)',
    age: 17,
    role: 'Index Client / Student',
    status: 'Repeated Absconding & School Absence',
    clinicalSignificance: 'Experiences home as crowded and unfair. Leaves to maternal aunt’s home during escalating conflict for immediate relief, voice, and autonomy.',
    tag: 'Voice + Autonomy (Index)',
    keyDyads: ['Conflictual with Mother (Aisyah)', 'Close bond with D3 (15) who follows her', 'Cross-household refuge & confiding in Maternal Aunt']
  },
  {
    id: 'd1',
    name: 'D1',
    age: 19,
    role: 'Eldest Daughter',
    status: 'Parentified Adolescent',
    clinicalSignificance: 'Carries adult-like executive and caregiving responsibilities. Protects the family system while constraining her own developmental transition to work/tertiary education.',
    tag: 'Parentified Subsystem',
    keyDyads: ['Enmeshed coalition with Mother (Aisyah)', 'Carries care burden for younger siblings']
  },
  {
    id: 'd3',
    name: 'D3',
    age: 15,
    role: 'Second Daughter',
    status: 'Following D2 Pattern',
    clinicalSignificance: 'Begun accompanying D2 when absconding. Risk of behavioral modeling and school disengagement.',
    tag: 'Vulnerable Sibling',
    keyDyads: ['Close bond with D2', 'Shares bedroom pressure in rental flat']
  },
  {
    id: 'husband',
    name: 'Current Husband (Stepfather)',
    age: 'Adult',
    role: 'Stepfather & Sole Earner',
    status: 'Shift Work / Post-2010 Injury',
    clinicalSignificance: 'Suffered workplace injury in 2010. Works rotating shift hours, which physically removes a parent during peak household stress times and limits co-parenting governance.',
    tag: 'Sole Income / Shift Work',
    keyDyads: ['Married Aisyah in 2009', 'Father of S1 (10) and S2 (2)']
  },
  {
    id: 'aunt',
    name: 'Maternal Aunt',
    age: 'Adult',
    role: 'Maternal Sister / Kin Refuge',
    status: 'Cross-Household Shelter',
    clinicalSignificance: 'Provides psychological safety and physical refuge to D2, but currently operates without a return plan, creating competing authority with Aisyah.',
    tag: 'Kin Refuge + Bridge',
    keyDyads: ['Confiding bond with D2', 'Tenuous/conflicted kin dynamic with Aisyah']
  },
  {
    id: 'grandfather',
    name: 'Maternal Grandfather',
    age: 'Elderly',
    role: 'Grandfather',
    status: 'Chronic Health Needs',
    clinicalSignificance: 'Resides in the 2-room flat; requires daily physical care and medical supervision, increasing maternal caregiving strain.',
    tag: 'Healthcare Needs',
    keyDyads: ['Cared for by Aisyah & D1']
  },
  {
    id: 's1_s2',
    name: 'S1 (10) & S2 (2)',
    age: '10 & 2',
    role: 'Half-Brothers',
    status: 'Dependent Children',
    clinicalSignificance: 'High physical dependency in cramped 2-room flat; caregiving duties are frequently delegated to D1.',
    tag: 'Young Dependents',
    keyDyads: ['Dependent on Aisyah & D1']
  }
];

export const ECOMAP_NODES: EcoMapNode[] = [
  {
    id: 'school',
    name: 'Secondary School',
    category: 'education',
    connectionType: 'conflicted',
    description: 'Truancy; D3 withdrawal; no active home-school link established.',
    clinicalImplication: 'Attendance and grades declining rapidly without proactive multi-agency case conference.',
    actionRequired: 'Establish named school contact, MOE student welfare officer liaison, and re-entry protocol.'
  },
  {
    id: 'aunt-household',
    name: 'Aunt’s Household',
    category: 'kin',
    connectionType: 'boundary-crossing',
    description: 'Provides shelter and emotional refuge; source of kin conflict and maternal competition.',
    clinicalImplication: 'Strong attachment provides safety, but absence of return agreements undermines parental authority.',
    actionRequired: 'Structure a formal Safe-Stay Agreement and transparent communication bridge with mother.'
  },
  {
    id: 'fsc',
    name: 'Family Service Centre (FSC)',
    category: 'social-service',
    connectionType: 'tenuous',
    description: 'Inconsistent engagement; missed appointments; previous casework paused.',
    clinicalImplication: 'Missed visits reflect conservation of maternal energy under severe stress rather than refusal of help.',
    actionRequired: 'Contracted engagement using Functional Casework: co-designed goals, home visits, small manageable steps.'
  },
  {
    id: 'sso-comcare',
    name: 'MSF SSO / ComCare',
    category: 'social-service',
    connectionType: 'tenuous',
    description: 'SPMF exhausted; ComLink+ eligibility untested; previous financial aid ended.',
    clinicalImplication: 'Severe financial strain amplifies parental irritability and daily crisis triage.',
    actionRequired: 'Re-assess ComCare Short-to-Medium Term Assistance (SMTA) and link with ComLink+ family coach.'
  },
  {
    id: 'employment',
    name: 'Stepfather’s Employment',
    category: 'work',
    connectionType: 'strong',
    description: 'Stable income provider, but rotating shifts remove a parent during crucial evening routines.',
    clinicalImplication: 'Prevents father from participating in family conflict de-escalation and household routines.',
    actionRequired: 'Align casework session times to husband’s shift roster; establish predictable evening chore routines.'
  },
  {
    id: 'extended-kin',
    name: 'Extended Kin Network',
    category: 'kin',
    connectionType: 'conflicted',
    description: 'Aisyah judged as “controlling”; maternal isolation from wider family support.',
    clinicalImplication: 'Maternal shame prevents seeking informal babysitting or emotional respite.',
    actionRequired: 'Reframe maternal protection in family meetings and negotiate neutral kin support.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Hospital MSW',
    category: 'healthcare',
    connectionType: 'tenuous',
    description: 'Historic mistrust of Medical Social Workers (MSW); grandfather’s chronic health needs.',
    clinicalImplication: 'Paperwork hurdles and clinic visits consume maternal time without integrated care support.',
    actionRequired: 'Coordinate hospital medical social worker for home care subsidies and medication delivery.'
  },
  {
    id: 'community-m3',
    name: 'Community / M³ (MENDAKI, Mosque, PPIS)',
    category: 'community',
    connectionType: 'tenuous',
    description: 'MENDAKI education support, Mosque welfare, and PPIS family services largely untapped.',
    clinicalImplication: 'Rich socio-cultural and academic resources remain disconnected from the household.',
    actionRequired: 'Warm referral to MENDAKI tuition/youth mentoring and local mosque community care fund.'
  }
];

export const CHRONOSYSTEM_TIMELINE: ChronosystemEvent[] = [
  {
    year: '2002',
    title: 'Paternal Departure',
    category: 'Family Structure',
    description: 'First husband leaves family and relocates to Malaysia. D1 is an infant, Aisyah becomes sole caregiver.',
    attachmentContext: 'Early attachment context established under single-mother distress.',
    systemicShift: 'Loss of paternal presence and income support.',
    keyLearning: 'Foundational reliance on extended maternal family network.'
  },
  {
    year: '2008',
    title: 'Marriage Dissolved',
    category: 'Legal / Relational',
    description: 'Formal divorce finalized after 6 years of separation.',
    attachmentContext: 'Loss becomes formalized in legal and systemic records.',
    systemicShift: 'Single-parent legal status; formal closure of first marital subsystem.',
    keyLearning: 'Aisyah assumes full legal guardianship and protective authority.'
  },
  {
    year: '2009',
    title: 'Mother Remarries',
    category: 'Subsystem Reorganization',
    description: 'Aisyah marries current husband. Blended family forms within rental flat.',
    attachmentContext: 'Family subsystem reorganizes; new marital dyad introduced.',
    systemicShift: 'Boundary adjustments between biological daughters (D1, D2) and stepfather.',
    keyLearning: 'D2 must adapt to new household hierarchy and rules.'
  },
  {
    year: '2010',
    title: 'Stepfather Injured',
    category: 'Economic Shock',
    description: 'Workplace injury impacts stepfather’s earning capacity and physical mobility.',
    attachmentContext: 'Income and trust in formal service delivery severely strained.',
    systemicShift: 'Shift to lower-wage rotating shift employment; emergence of chronic financial strain.',
    keyLearning: 'Economic vulnerability increases household stress transmission.'
  },
  {
    year: 'c. 2009 / 2017',
    title: 'Half-Brothers Born (S1 & S2)',
    category: 'Household Density',
    description: 'Birth of S1 (now 10) and S2 (now 2). Household expands to 8 residents in a 2-room flat.',
    attachmentContext: 'Care demands explode; adult-like responsibilities delegated to D1.',
    systemicShift: 'Severe physical crowding; lack of private study/sleeping space for adolescents.',
    keyLearning: 'D2 feels overlooked and overburdened with household chores.'
  },
  {
    year: 'Present',
    title: 'Aid Exhaustion & FSC Referral',
    category: 'Ecological Crisis',
    description: 'Financial aid ends; school truancy triggers secondary school and FSC intervention.',
    attachmentContext: 'Autonomy pressure meets fewer buffers; D2 absconds to aunt.',
    systemicShift: 'Inter-agency involvement (School, FSC, SSO, Aunt).',
    keyLearning: 'Opportunity for coordinated, strengths-based dual-focus intervention.'
  }
];

export const FUNCTIONAL_THEORY_PILLARS = [
  {
    id: 'will',
    title: '1. The Will and Human Agency',
    subtitle: 'Belief in person’s innate creative power',
    description: 'Belief in a person’s innate, creative power to determine their own life path. Resistance is not pathology, but the client’s exercise of self-direction under pressure.',
    caseContext: 'D2’s absconding and Aisyah’s missed visits are treated as active expressions of agency and coping, rather than uncooperative defiance.'
  },
  {
    id: 'self-determination',
    title: '2. Client’s Right to Self-Determination',
    subtitle: 'Client is the primary author of change',
    description: 'The client is the primary author of their change and controls the therapeutic outcome. Workers facilitate rather than prescribe.',
    caseContext: 'D2 defines her own educational and relationship goals; Aisyah chooses practical priority tasks.'
  },
  {
    id: 'start-where-client-is',
    title: '3. Start Where the Client Is',
    subtitle: 'Focus on conscious, immediate needs',
    description: 'The focus is on the client’s current, conscious needs, not a hidden unconscious diagnosis or historical pathologizing.',
    caseContext: 'Prioritizing immediate safety and reducing daily household chaos before exploring deep historical grievances.'
  },
  {
    id: 'evolving-assessment',
    title: '4. Ongoing, Evolving Assessment',
    subtitle: 'Dynamic process within helping relationship',
    description: 'Assessment is not a one-time intake label, but a dynamic, joint process that deepens through ongoing transactions.',
    caseContext: 'Hypotheses regarding D2’s absconding are continuously revised based on session reactions and weekly trials.'
  },
  {
    id: 'importance-of-relationship',
    title: '5. Importance of Relationship',
    subtitle: 'Help emerges through authentic transactions',
    description: 'Help emerges through the experiencing and transactions within the unique helping bond between worker and client.',
    caseContext: 'Creating a genuine, non-judgmental container where Aisyah and D2 can practice vulnerable dialogue.'
  },
  {
    id: 'time-as-component',
    title: '6. Time as an Organising Component',
    subtitle: 'Structured beginning, middle, and end',
    description: 'Intervention is structured with three clear phases (Beginning, Middle, End) to drive growth and momentum through planned separation.',
    caseContext: 'Fixed 16-session contract prevents dependency and focuses effort on achievable milestones.'
  }
];

export const KEY_TECHNIQUES = [
  {
    id: 'here-and-now',
    title: '1. Focus on the Here and Now',
    subtitle: 'Active relationship, not past trauma',
    content: 'Interventions focus on present interactions and immediate feelings within the helping dynamic rather than analyzing past history.'
  },
  {
    id: 'structured-phases',
    title: '2. Structured Time Phases',
    subtitle: 'Time is a dynamic tool for change',
    content: 'Uses Beginning, Middle, and End phases to build momentum and drive client growth through planned separation (termination).'
  },
  {
    id: 'experiential-building',
    title: '3. Experiential Relationship-Building',
    subtitle: 'Help comes from lived interaction',
    content: 'The worker supports autonomy by “experiencing” the client in the room, not through intellectualized detachment or diagnostic labeling.'
  },
  {
    id: 'dual-boundary',
    title: '4. Dual Boundary Setting',
    subtitle: 'Framing agency and social limits',
    content: 'Clarifies expectations using agency function (policy, procedures) and legal limits (“Boundaries of Stability”) to encourage client choice.'
  },
  {
    id: 'relational-trust',
    title: '5. Relational Engagement & Trust',
    subtitle: 'Authentic connection for trust-building',
    content: 'Forms a secure, authentic bond allowing clients to safely explore choices and overcome internal and systemic tension.'
  },
  {
    id: 'synthesis-techniques',
    title: 'Synthesis of Techniques',
    subtitle: 'How methods work together',
    content: 'Integration of these methods mobilizes client Will, respects autonomy, and facilitates growth within safe, structured parameters.'
  }
];

export const CRITICAL_EVALUATION = {
  strengths: [
    {
      id: 'empowered-autonomy',
      title: '1. Empowered Client Autonomy',
      desc: 'Recognizes clients as active decision-makers with the internal will and capability to change.'
    },
    {
      id: 'clear-structure',
      title: '2. Clear Structure & Focus',
      desc: 'Uses defined time limits and specific agency functions to maintain organization, predictability, and productivity.'
    },
    {
      id: 'practical-resource',
      title: '3. Practical Resource-Driven',
      desc: 'Connects clients directly to concrete, available community resources and support programs (ComCare, FSC, School).'
    },
    {
      id: 'positive-growth',
      title: '4. Positive Growth-Oriented',
      desc: 'Emphasizes current strengths, collaborative problem-solving, and future developmental potential.'
    }
  ],
  strengthsSynthesis: 'Integration of strengths mobilizes client decision-making, leverages agency structure, and connects directly to resources for tangible progress.',
  limitations: [
    {
      id: 'rigid-agency',
      title: '1. Rigid Agency Focus',
      desc: 'Can restrict the social worker’s helpfulness if client needs fall outside strict, pre-defined institutional functions.'
    },
    {
      id: 'ignores-trauma',
      title: '2. Ignores Deep Trauma',
      desc: 'Heavy focus on the present makes it less effective for clients requiring deep, long-term psychological healing from past trauma.'
    },
    {
      id: 'overemphasizes-will',
      title: '3. Overemphasizes Willpower',
      desc: 'Assumes all clients have equal capacity to exercise free will, potentially overlooking severe mental health crises or systemic oppression.'
    },
    {
      id: 'strict-time',
      title: '4. Strict Time Constraints',
      desc: 'The artificial enforcement of rigid time phases may not align with the messy, unpredictable nature of human crisis.'
    }
  ],
  limitationsSynthesis: 'Integration of limitations highlights the dangers of rigid frameworks, personal biases, structural barriers, and artificial time pressures.'
};

export const MAINTENANCE_CYCLE_STEPS = [
  {
    step: 1,
    title: '1. Pressure',
    detail: 'Crowding in 2-room flat, caregiving demands, perceived unfairness in chore allocation.'
  },
  {
    step: 2,
    title: '2. Escalation',
    detail: 'High-intensity verbal conflict with Mother over boundaries, curfew, and authority.'
  },
  {
    step: 3,
    title: '3. Departure',
    detail: 'D2 leaves home abruptly for immediate emotional and physical distance.'
  },
  {
    step: 4,
    title: '4. Relief',
    detail: 'Conflict stops immediately. Maternal Aunt provides unconditional shelter and refuge (short-term negative reinforcement).'
  },
  {
    step: 5,
    title: '5. Return Without Repair',
    detail: 'D2 returns home when tension cools; old rules resume while underlying emotional meanings remain unresolved.'
  },
  {
    step: 6,
    title: '6. System Fragmentation',
    detail: 'School, FSC, Maternal Kin, and Home act separately with no coordinated communication.'
  }
];

export const PPCT_MODEL = {
  process: {
    title: 'Process (Proximal Processes)',
    description: 'Recurring day-to-day interactions: escalating mother-daughter conflict, caregiving burden, school contact, and post-crisis repair routines.',
    significance: 'The engine of development. Intervention targets these interactions directly.'
  },
  person: {
    title: 'Person (Characteristics & Agency)',
    description: 'D2’s demand for autonomy, cognitive appraisals of fairness, developmental age (17), emotional regulation, and innate coping agency.',
    significance: 'D2’s actions reflect active agency rather than passive deviance.'
  },
  context: {
    title: 'Context (Microsystem to Macrosystem)',
    description: '2-room rental flat (8 occupants), maternal aunt’s home, secondary school, FSC, MSF SSO/ComCare policies, and community norms.',
    significance: 'Mesosystem coordination between School, FSC, and Kin is required.'
  },
  time: {
    title: 'Time (Chronosystem & Microtime)',
    description: 'Chronosystem cumulative transitions (2002 divorce to present aid exhaustion) + Microtime rhythm of conflict and return cycles.',
    significance: 'Developmental timing shapes how cumulative shocks erode coping reserves.'
  }
};

export const BERSAMA_PHASES: BersamaPhase[] = [
  {
    phaseNumber: 0,
    phaseId: 'engage',
    name: 'Phase 0: Engage',
    weeks: 'Weeks 0–2',
    objective: 'Establish safety, consent, separate client voices, and clear working contract.',
    personDirected: [
      'Engage D2 in individual private space to elicit her own definition of safety and goals.',
      'Validate feelings of being unheard without blaming mother.'
    ],
    environmentDirected: [
      'Engage Aisyah and stepfather around immediate stress relief and session scheduling.',
      'Formulate initial Safe-Stay Agreement with Maternal Aunt.'
    ],
    corePractices: [
      'Home-based visits and flexible meeting locations',
      'Explicit confidentiality boundaries and safeguarding mandate',
      'Contracting 16-session rhythm'
    ],
    indicators: [
      'Known safe whereabouts at all times',
      'Attendance at planned initial meetings'
    ],
    decisionPoint: 'Confirm client engagement and agreement on initial safety parameters.'
  },
  {
    phaseNumber: 1,
    phaseId: 'reframe',
    name: 'Phase 1: Reframe',
    weeks: 'Weeks 3–4',
    objective: 'Map behavioral sequences, reduce interpersonal blame, and establish shared formulation.',
    personDirected: [
      'Help D2 identify physical and emotional cues that precede the impulse to abscond.',
      'Explore exceptions: times when conflict was de-escalated successfully.'
    ],
    environmentDirected: [
      'Reframe D2’s absconding from "rebellion" to "signal of overwhelming strain".',
      'Map the 6-stage maintenance cycle together as a family system.'
    ],
    corePractices: [
      'Relational reframing and conflict cycle mapping',
      'Neutralizing parental blame toward maternal aunt'
    ],
    indicators: [
      'Reduced blaming statements during joint sessions',
      'Shared understanding of the maintenance cycle'
    ],
    decisionPoint: 'Week 4 formulation review: Validate whether family accepts shared relational frame.'
  },
  {
    phaseNumber: 2,
    phaseId: 'change',
    name: 'Phase 2: Change',
    weeks: 'Weeks 5–12',
    objective: 'Practise emotional repair, establish clear boundaries, and restructure household routines.',
    personDirected: [
      'Equip D2 with self-advocacy and emotional regulation tools ("Planned Time-Out Protocol").',
      'Explore educational re-entry or vocational training options tailored to her interests.'
    ],
    environmentDirected: [
      'Redistribute chore and caregiving loads away from D1 and D2 to protect developmental spaces.',
      'Implement structured contact protocol between Aisyah and Maternal Aunt during stays.'
    ],
    corePractices: [
      'Live behavioral rehearsals and structured communication drills',
      'Sequencing practical ComCare/financial applications one step at a time'
    ],
    indicators: [
      'Fewer high-intensity escalations',
      'Shortened duration of absences and proactive check-ins'
    ],
    decisionPoint: 'Week 8 midpoint review: Adapt intervention intensity if early behavioral signals stall.'
  },
  {
    phaseNumber: 3,
    phaseId: 'generalise',
    name: 'Phase 3: Generalise',
    weeks: 'Weeks 13–16',
    objective: 'Consolidate gains, finalize school/vocational pathway, and prepare sustainable transition.',
    personDirected: [
      'D2 fully owns and monitors her school attendance or alternative education pathway.',
      'Create personalized relapse prevention card.'
    ],
    environmentDirected: [
      'Multi-agency case conference with School, FSC, SSO, and Kin network to cement warm handover.',
      'Connect family with long-term ComLink+ family coach.'
    ],
    corePractices: [
      'Relapse rehearsal (practicing response to hypothetical conflict trigger)',
      'Gradual planned termination and warm community linkages'
    ],
    indicators: [
      'Consistent school/program attendance above agreed baseline',
      'Family independently resolves conflicts without crisis worker intervention'
    ],
    decisionPoint: 'Week 16 closing evaluation: Confirm sustainable community safety net and safe re-entry route.'
  }
];

export const SESSION_ARCHITECTURE = {
  totalDuration: '60 Minutes',
  spaces: [
    {
      name: 'D2 Individual Space',
      purpose: 'Separate check-in for personal goals, confidentiality limits, emotional safety, and translating concerns into acceptable language.'
    },
    {
      name: 'Caregiver Space',
      purpose: 'Support parental stress regulation, clarify authority boundaries, and practice discipline without humiliation or threats.'
    },
    {
      name: 'Joint Family Practice',
      purpose: 'Short, highly structured conversations with a pause plan; rehearse repair and return agreements before testing harder topics.'
    }
  ],
  breakdown: [
    { time: '10 min', phase: 'Check Safety', color: 'rose', focus: 'Review past week’s whereabouts, crisis signals, and emotional regulation.' },
    { time: '10 min', phase: 'Name Progress', color: 'amber', focus: 'Highlight concrete small wins and successful communication moments.' },
    { time: '20 min', phase: 'Practise One Sequence', color: 'blue', focus: 'Live behavioral rehearsal of one communication or de-escalation rule.' },
    { time: '10 min', phase: 'Agree the Week', color: 'emerald', focus: 'Set ONE clear, manageable task for each member with specific checkpoints.' },
    { time: '10 min', phase: 'Private Close', color: 'navy', focus: 'Individual debrief and reassurance for D2 and caregivers separately.' }
  ]
};

export const MEASUREMENT_DOMAINS: MeasurementDomain[] = [
  {
    domain: 'Safety & Known Whereabouts',
    baseline: 'Unknown locations, sudden departures, no contact plan.',
    indicator: '100% of nights spent at verified safe location; contact protocol utilized.',
    reviewPoint: 'Weekly',
    currentScore: 85,
    targetDescription: 'Zero unsafe uncontactable absences; aunt reports check-ins within 2 hours.'
  },
  {
    domain: 'Education & Vocational Attendance',
    baseline: 'Declining attendance (<40%), failing grades, D3 withdrawal.',
    indicator: 'School attendance percentage, morning punctuality, D2-rated school fit.',
    reviewPoint: 'Weeks 4, 8, 16',
    currentScore: 72,
    targetDescription: 'Achieve >75% attendance in tailored curriculum or vocational skills training.'
  },
  {
    domain: 'Family Interaction & Conflict Repair',
    baseline: 'Frequent escalations, yelling, slamming doors, unresolved return.',
    indicator: 'Conflict frequency, intensity score (1-10), and completed repair conversations.',
    reviewPoint: 'Fortnightly',
    currentScore: 65,
    targetDescription: 'Escalations reduced to <1/week; 80% resolved using planned pause protocol.'
  },
  {
    domain: 'D2-Defined Subjective Progress',
    baseline: 'Feeling misunderstood, silenced, and unfairly burdened by chores.',
    indicator: '0–10 scale rating for Voice, Fairness, and Future Hope plus narrative diary.',
    reviewPoint: 'Every Session',
    currentScore: 80,
    targetDescription: 'Voice and fairness ratings sustained above 7/10 for 4 consecutive weeks.'
  },
  {
    domain: 'System Coordination & Agency Linkage',
    baseline: 'Fragmented services, missed FSC appointments, expired ComCare.',
    indicator: 'Named lead worker, shared inter-agency care plan, completed warm referrals.',
    reviewPoint: 'Weeks 2, 8, 16',
    currentScore: 90,
    targetDescription: 'Unified case conferences held with MOE, SSO, FSC, and Aunt participating.'
  }
];

export const PRACTICE_PATHWAYS: PracticePathwayItem[] = [
  {
    need: 'School Attendance & Reintegration',
    leadPathway: 'MOE School Counsellor / Student Welfare Officer (SWO)',
    caseAction: 'Named school coordinator; attendance pacing; customized academic support and pastoral check-ins.',
    boundary: 'Secondary school attendance is supportive; do not confuse with primary school statutory compulsory education enforcement.'
  },
  {
    need: 'Family Relational Intervention',
    leadPathway: 'Family Service Centre (FSC)',
    caseAction: 'Home-based engagement, 16-session BERSAMA protocol, parent-child mediation, sibling support.',
    boundary: 'Voluntary consent and casework boundaries remain explicit; agency cannot legally compel attendance.'
  },
  {
    need: 'Financial & Basic Material Strain',
    leadPathway: 'MSF Social Service Office (SSO) / ComCare & ComLink+',
    caseAction: 'Re-assess ComCare SMTA eligibility, debt relief, utilities assistance, and ComLink+ family coach.',
    boundary: 'Assistance requires transparent financial declaration and structured periodic reviews.'
  },
  {
    need: 'Kinship Refuge & Shelter',
    leadPathway: 'Maternal Aunt & Extended Kin Network',
    caseAction: 'Formalize Safe-Stay and Return Protocol; bridge communication with mother without alienating aunt.',
    boundary: 'Verify physical safety and respect D2’s voice while upholding parental legal guardianship.'
  },
  {
    need: 'Child Protection Concerns',
    leadPathway: 'Child Protective Service (CPS) / MSF Safeguarding',
    caseAction: 'Document, consult, and escalate immediately if severe abuse, exploitation, or self-harm thresholds are met.',
    boundary: 'Adolescent absconding due to family conflict alone does not automatically trigger statutory child protection removal.'
  }
];

export const ACADEMIC_REFERENCES = [
  {
    author: 'Bronfenbrenner, U., & Morris, P. A.',
    year: '2006',
    title: 'The bioecological model of human development',
    source: 'In R. M. Lerner & W. Damon (Eds.), Handbook of child psychology: Theoretical models of human development (6th ed., Vol. 1, pp. 793–828). John Wiley & Sons.'
  },
  {
    author: 'Conger, R. D., Conger, K. J., Elder, G. H., Lorenz, F. O., Simons, R. L., & Whitbeck, L. B.',
    year: '1992',
    title: 'A family process model of economic hardship and adjustment of early adolescent boys',
    source: 'Child Development, 63(3), 526–541.'
  },
  {
    author: 'Gubbels, J., van der Put, C. E., & Assink, M.',
    year: '2019',
    title: 'Risk factors for school absenteeism and dropout: A meta-analytic review',
    source: 'Journal of Youth and Adolescence, 48(9), 1637–1667.'
  },
  {
    author: 'Littell, J. H., Campbell, M., Green, S., & Toews, B.',
    year: '2023',
    title: 'Functional Family Therapy for families of youth with behaviour problems',
    source: 'Campbell Systematic Reviews, 19(4), e1357.'
  },
  {
    author: 'Ministry of Social and Family Development (MSF)',
    year: '2023',
    title: 'ComCare Schemes and Social Service Directories in Singapore',
    source: 'Singapore Government Publishing.'
  },
  {
    author: 'Singapore Statutes Online',
    year: '1993',
    title: 'Children and Young Persons Act 1993 (CYPA)',
    source: 'Legislation Division, Attorney-General’s Chambers, Singapore.'
  }
];

export const SLIDES_DATA: SlideItem[] = [
  {
    id: 1,
    slideNumber: 1,
    title: 'ABSENT FROM SCHOOL. PRESENT IN A SYSTEM.',
    subtitle: 'Absconding as a developmental and ecological signal',
    badge: 'DISTINCTION DEFENCE',
    category: 'overview',
    contentSummary: 'A bioecological case formulation and dual-focus family intervention for the Aisyah family. Grounded in Bronfenbrenner PPCT, functional casework, and family systems theory.',
    keyPoints: [
      'Central proposition: D2’s absconding functions as an immediate escape from relational strain.',
      'Sustainable change requires safer proximal processes at home and coordinated support across school, kin, and social services.',
      'Framework: SUSS SWK502 Casework & Family Intervention Distinction Defence.'
    ],
    infographicType: 'matrix',
    speakerNotes: 'Set the tone with an ecological rather than individual-blaming stance. The title encapsulates our core thesis: school absence is a system symptom.'
  },
  {
    id: 2,
    slideNumber: 2,
    title: 'Case at a glance',
    subtitle: 'Observed facts, provisional meanings and missing information',
    badge: 'CASE ORIENTATION',
    category: 'overview',
    contentSummary: 'Observed presentation of D2 (17) and D3 (15); family context of 8 residents in a two-room rental flat with single earner on shift work; working hypotheses and open assessment questions.',
    keyPoints: [
      'Observed Presentation: D2 (17) repeated school absence, declining grades, absconding to maternal aunt; D3 (15) accompanying her.',
      'Family Context: 8 residents in a 2-room flat. 1 adult rotating shifts. Financial assistance ended. D1 carries adult-like duties.',
      'Working Hypothesis: Absconding reduces conflict quickly and provides perceived safety, autonomy, or recognition.',
      'Open Questions: Where does D2 stay? What happens before leaving and after return? How does D2 describe fairness?'
    ],
    tableHeaders: ['Category', 'Key Facts', 'Practice Meaning'],
    tableRows: [
      ['Observed Presentation', 'D2 (17) truancy, absconding to maternal aunt; D3 (15) following.', 'Adolescent coping mechanism in response to relational and household stress.'],
      ['Family Context', '8 residents in 2-room rental flat; sole earner on shift work.', 'High physical density, lack of privacy, role overload for D1.'],
      ['Working Hypothesis', 'Absconding is negatively reinforced by temporary conflict reduction.', 'Intervention must change interactions before departure and upon return.']
    ],
    speakerNotes: 'Analytical rule: facts are retained as facts; mechanisms remain hypotheses until tested with D2 and the family.'
  },
  {
    id: 3,
    slideNumber: 3,
    title: 'Family transitions across D2’s development',
    subtitle: 'Timing matters because repeated transitions change the quality of daily relationships',
    badge: 'CHRONOSYSTEM',
    category: 'formulation',
    contentSummary: 'Chronosystem timeline from 2002 paternal departure, 2008 divorce, 2009 remarriage, 2010 stepfather injury, c.2009/2017 sibling births, to present aid exhaustion and FSC referral.',
    keyPoints: [
      '2002: Paternal departure -> Early attachment context established under distress.',
      '2008: Marriage dissolved -> Loss becomes formalized in legal boundaries.',
      '2009: Mother remarries -> Family subsystem reorganizes; new parental dynamic.',
      '2010: Stepfather injured -> Income and trust in formal services strained.',
      'c. 2009/2017: Half-brothers born -> Care demands and sibling roles change dramatically.',
      'Present: Aid exhausted, FSC referral -> Autonomy pressure meets fewer environmental buffers.'
    ],
    infographicType: 'timeline',
    speakerNotes: 'The chronology suggests cumulative change rather than a single trigger. Verify attachment qualities and D2’s narrative.'
  },
  {
    id: 4,
    slideNumber: 4,
    title: 'Relational architecture',
    subtitle: 'Three relationship patterns organise stress and support',
    badge: 'FAMILY STRUCTURE',
    category: 'formulation',
    contentSummary: 'Analysis of three relational dyads: 1) Executive overload (Mother-D1 enmeshed coalition), 2) Conflict and escape (Mother-D2 coercive loop), 3) Kin refuge (D2-Maternal Aunt cross-household shelter).',
    keyPoints: [
      'Executive Overload: Mother and D1 carry household management; D1’s parentified role protects family but restricts her development.',
      'Conflict and Escape: Mother-D2 conflict forms a coercive loop: escalation -> departure -> short-term relief -> unresolved return.',
      'Kin Refuge: Maternal aunt offers attachment and practical shelter; can become a bridge for repair if boundaries are negotiated.'
    ],
    infographicType: 'genogram',
    speakerNotes: 'Structural family concepts informed by Minuchin (1974). Case relationships remain provisional until jointly mapped.'
  },
  {
    id: 5,
    slideNumber: 5,
    title: 'The household is connected, but the connections do not yet coordinate',
    subtitle: 'The intervention target includes links between settings, not only behaviour in the home',
    badge: 'ECOLOGICAL FORMULATION',
    category: 'formulation',
    contentSummary: 'Eco-map visualization examining ecological ties between the Aisyah Household and Secondary School (weak), Maternal Aunt (refuge without return plan), FSC (missed contact), and SSO/ComCare (aid ended).',
    keyPoints: [
      'School: Attendance and academic support needed; currently weak school-home link.',
      'Maternal Aunt: High emotional trust, but operates without a structured return plan.',
      'FSC: Engagement and case coordination required, but hindered by missed contacts.',
      'SSO / ComCare: Income and practical support expired; ComLink+ eligibility untested.'
    ],
    infographicType: 'ecomap',
    speakerNotes: 'Singapore pathways: MOE counselling, MSF FSCs, and Social Service Offices.'
  },
  {
    id: 6,
    slideNumber: 6,
    title: 'Unpacking the Functional Theory in Social Work',
    subtitle: '6 foundational principles that anchor client agency and structural helping',
    badge: 'THEORY PILLARS',
    category: 'theory',
    contentSummary: 'The 6 core pillars of Functional Theory: 1. Will & Agency, 2. Self-Determination, 3. Start Where Client Is, 4. Ongoing Assessment, 5. Importance of Relationship, 6. Time as an Organising Component.',
    keyPoints: [
      'Will and Human Agency: Belief in person’s innate creative power to determine life path.',
      'Right to Self-Determination: Client is the primary author of change.',
      'Start Where the Client Is: Focus on conscious, current needs over hidden pathology.',
      'Ongoing Assessment: Dynamic process evolving inside the helping bond.',
      'Importance of Relationship: Help emerges through experiential transactions.',
      'Time Component: Beginning, middle, and end phases structure growth.'
    ],
    infographicType: 'theory-pillars',
    speakerNotes: 'Jessie Taft, Virginia Robinson, Ruth Smalley functional social work legacy applied in modern casework.'
  },
  {
    id: 7,
    slideNumber: 7,
    title: 'Key Techniques of Functional Theory in Social Work',
    subtitle: 'Translating theory into micro-practice skills and boundary settings',
    badge: 'CLINICAL TECHNIQUES',
    category: 'theory',
    contentSummary: 'Core casework techniques: Focus on Here and Now, Structured Time Phases, Experiential Relationship-Building, Dual Boundary Setting, Relational Engagement & Trust, and their synthesis.',
    keyPoints: [
      'Focus on Here & Now: Interventions center on active relationship and immediate feelings.',
      'Structured Time Phases: Beginning, middle, and end create therapeutic momentum.',
      'Experiential Relationship: Experiencing the client in the room rather than detached intellectual analysis.',
      'Dual Boundary Setting: Framing agency policy and legal safety boundaries to encourage choice.',
      'Relational Engagement: Secure bond allows safe exploration of choices and tension.'
    ],
    infographicType: 'techniques',
    speakerNotes: 'Integration of these methods mobilizes client will and autonomy within clear boundaries.'
  },
  {
    id: 8,
    slideNumber: 8,
    title: 'Critical Evaluation: Strengths',
    subtitle: 'How functional casework empowers client autonomy and leverages agency structure',
    badge: 'EVALUATION',
    category: 'theory',
    contentSummary: 'Evaluation of strengths: Empowered client autonomy, clear structure and focus, practical resource-driven linkages, and positive growth-oriented mindset.',
    keyPoints: [
      'Empowered Client Autonomy: Recognizes clients as active decision-makers with internal will.',
      'Clear Structure & Focus: Defined time limits and agency function maintain organization.',
      'Practical Resource-Driven: Direct connection to concrete community programs and services.',
      'Positive Growth-Oriented: Emphasizes strengths, problem-solving, and future potential.'
    ],
    infographicType: 'strengths',
    speakerNotes: 'Synthesis of strengths: Mobilizes client decision-making and connects to tangible resources.'
  },
  {
    id: 9,
    slideNumber: 9,
    title: 'Critical Evaluation: Limitations',
    subtitle: 'Navigating structural, trauma-related, and temporal boundaries in practice',
    badge: 'EVALUATION',
    category: 'theory',
    contentSummary: 'Evaluation of limitations: Rigid agency focus, neglect of deep historical trauma, potential overemphasis on willpower, and strict time constraints during human crises.',
    keyPoints: [
      'Rigid Agency Focus: Can restrict helpfulness if needs exceed predefined agency mandate.',
      'Ignores Deep Trauma: Present-focus is less suitable for severe unresolved trauma.',
      'Overemphasizes Willpower: Assumes equal capacity for free will despite systemic oppression.',
      'Strict Time Constraints: Artificial time phases may clash with unpredictable crises.'
    ],
    infographicType: 'limitations',
    speakerNotes: 'Critical appraisal: Balance functional structure with trauma-informed and ecological flexibility.'
  },
  {
    id: 10,
    slideNumber: 10,
    title: 'Functional theory: interpreting behaviour in context',
    subtitle: 'The formulation stays provisional and tests meaning before assigning motivation',
    badge: 'FUNCTIONAL FORMULATION',
    category: 'formulation',
    contentSummary: 'Case interpretation table applying functional lenses: Will and avoidance, Family role allocation, Agency structure, and Boundary crisis.',
    tableHeaders: ['Functional Lens', 'Case Interpretation', 'Practice Implication'],
    tableRows: [
      ['Will and Avoidance', 'Missed appointments and documents may conserve limited energy and preserve control under strain.', 'Test meaning collaboratively. Agree on smaller commitments before labeling resistance.'],
      ['Family Role Allocation', 'D1 carries parent-like responsibilities while father has limited role in governance.', 'Clarify adult responsibilities and restore age-appropriate roles without assigning blame.'],
      ['Agency Structure', 'Forms, scheduled visits and eligibility criteria create predictable boundaries.', 'Explain why each requirement matters, pace paperwork, use consistency as intervention.'],
      ['Boundary Crisis', 'D2’s stays with aunt provide distance when boundaries at home feel unsafe.', 'Assess safety and negotiate planned pause, contact, and return protocol.']
    ],
    speakerNotes: 'Functional casework treats missed appointments as communication of stress and agency.'
  },
  {
    id: 11,
    slideNumber: 11,
    title: 'Restoring family function through structured casework',
    subtitle: 'Each action links a concrete task to an observable review marker',
    badge: 'INTERVENTION DESIGN',
    category: 'intervention',
    contentSummary: 'Structured intervention priorities: Contracted engagement, Manageable problem-solving, Rebalanced family roles, and Planned time frame and transition.',
    tableHeaders: ['Intervention Priority', 'Concrete Casework Action', 'Intended Change & Review Marker'],
    tableRows: [
      ['Contracted Engagement', 'Co-write working agreement covering fortnightly sessions, one attainable task, contact rhythm.', 'Attendance and task completion improve. Reasons for missed commitments guide adaptation.'],
      ['Manageable Problem-Solving', 'Sequence urgent practical work, beginning with one agreed application or document set.', 'Incomplete tasks decrease; Aisyah reports less overwhelm during reviews.'],
      ['Rebalanced Family Roles', 'Connect D1 with education/employment support. Agree which duties remain with adults.', 'D1 carries fewer adult tasks while caregivers complete accepted responsibilities.'],
      ['Planned Time Frame & Transition', 'Use 16-session frame with scheduled reviews, transition plan, and route back if risk rises.', 'Progress continues with fewer crisis-led contacts and clearer use of community supports.']
    ],
    speakerNotes: 'Link every task to an observable review marker to monitor progress collaboratively.'
  },
  {
    id: 12,
    slideNumber: 12,
    title: 'Why the absconding pattern may persist',
    subtitle: 'A provisional maintenance cycle integrates meaning, interaction and ecology',
    badge: 'EDITORIAL INFOGRAPHIC',
    category: 'formulation',
    contentSummary: 'The 6-stage maintenance cycle: 1. Pressure -> 2. Escalation -> 3. Departure -> 4. Relief (Negative Reinforcement) -> 5. Return without Repair -> 6. System Fragmentation. Key leverage: change what happens before leaving and after return.',
    keyPoints: [
      'Step 1: Pressure (Crowding, demands, perceived unfairness)',
      'Step 2: Escalation (High-intensity conflict and control)',
      'Step 3: Departure (D2 leaves for immediate distance)',
      'Step 4: Relief (Conflict stops. Aunt provides refuge - short-term negative reinforcement)',
      'Step 5: Return without Repair (Rules resume; unresolved emotions persist)',
      'Step 6: System Fragmentation (School, FSC, kin, and home act separately)'
    ],
    infographicType: 'cycle',
    speakerNotes: 'Informed by Patterson coercive family process theory and Bronfenbrenner PPCT.'
  },
  {
    id: 13,
    slideNumber: 13,
    title: 'PPCT as the primary explanatory framework',
    subtitle: 'Development emerges through recurring interaction between the person and changing environments over time',
    badge: 'THEORY ANCHOR',
    category: 'theory',
    contentSummary: 'Bronfenbrenner’s Process, Person, Context, Time (PPCT) model applied to the Aisyah family case formulation.',
    keyPoints: [
      'Process: Conflict, caregiving, school contact, and repair routines.',
      'Person: D2’s agency, developmental timing, beliefs, and resources.',
      'Context: Home, aunt, school, FSC, employment, and social policy.',
      'Time: Episode sequence, cumulative transitions, and intervention phases.'
    ],
    speakerNotes: 'Case implication: The unit of change is the recurring interaction pattern across microsystems.'
  },
  {
    id: 14,
    slideNumber: 14,
    title: 'From formulation to change logic',
    subtitle: 'The intervention changes recurring interactions, then tests whether functioning improves',
    badge: 'THEORY INTEGRATION',
    category: 'intervention',
    contentSummary: 'Linear change logic flow: Formulation -> Mechanisms -> Actions -> Early Signals -> Outcomes. Includes the vital feedback rule.',
    tableHeaders: ['Formulation', 'Mechanisms', 'Actions', 'Early Signals', 'Outcomes'],
    tableRows: [
      [
        'Conflict and fragmented supports maintain absence.',
        'Safety, voice, repair, routines, and coordinated support.',
        'Home sessions, school plan, kin agreement, and practical help.',
        'Fewer escalations, known whereabouts, agreed returns.',
        'Improved attendance, family functioning, sustained safety.'
      ]
    ],
    keyPoints: [
      'Feedback Rule: If early signals do not improve, revisit formulation rather than increasing pressure on D2 or family.'
    ],
    speakerNotes: 'PPCT explains context; functional casework structures engagement; family techniques target interaction.'
  },
  {
    id: 15,
    slideNumber: 15,
    title: 'BERSAMA: a 16-week dual-focus intervention',
    subtitle: 'Building Engagement, Relational Safety, Autonomy, Mastery and Attendance',
    badge: 'INTERVENTION PROTOCOL',
    category: 'intervention',
    contentSummary: 'The 16-week BERSAMA protocol: Weeks 0-2 ENGAGE, Weeks 3-4 REFRAME, Weeks 5-12 CHANGE, Weeks 13-16 GENERALISE. Dual focus: Person-directed vs Environment-directed.',
    keyPoints: [
      'Weeks 0-2 (ENGAGE): Safety, consent, separate voices, initial contracting.',
      'Weeks 3-4 (REFRAME): Map sequences, eliminate blame, create shared formulation.',
      'Weeks 5-12 (CHANGE): Practise repair, establish boundaries, stabilize routines.',
      'Weeks 13-16 (GENERALISE): School re-entry, relapse plan, warm community handover.',
      'Dual Focus: Person-directed (D2 safety, voice, education) + Environment-directed (family patterns, kin agreements, school links).'
    ],
    infographicType: 'bersama',
    speakerNotes: 'Adapted from Functional Family Therapy (FFT) principles tailored for Singapore local context.'
  },
  {
    id: 16,
    slideNumber: 16,
    title: 'BERSAMA phase plan, responsibilities and indicators',
    subtitle: 'A 16-session pathway turns formulation into observable family change',
    badge: 'IMPLEMENTATION ROADMAP',
    category: 'intervention',
    contentSummary: 'Detailed phase plan outlining action steps and functional rationales across Beginning, Middle, and End intervention phases.',
    tableHeaders: ['Time Phase', 'Action Step', 'Functional Rationale'],
    tableRows: [
      ['Beginning (W0-2)', 'Contracted engagement', 'Co-write clear agreement on session rhythm, immediate goals, and paperwork responsibilities.'],
      ['Beginning (W0-2)', 'Planned time frame', 'Set fixed 16-session frame with review points and agreed route back if risk increases.'],
      ['Middle (W3-12)', 'Manageable tasks', 'Sequence one urgent practical task at a time to reduce overwhelm and build completion.'],
      ['Middle (W3-12)', 'Rebalanced roles', 'Support D1’s education/work pathway while adults resume agreed caregiving duties.'],
      ['End (W13-16)', 'Consolidation & transition', 'Review indicators, rehearse responses to setbacks, confirm community supports, close responsibly.']
    ],
    speakerNotes: 'Maintains functional casework discipline while honoring Singapore family complexities.'
  },
  {
    id: 17,
    slideNumber: 17,
    title: 'Measurement tests the formulation, not the family’s compliance',
    subtitle: 'Combine behavioural, relational and person-defined indicators',
    badge: 'EVALUATION DASHBOARD',
    category: 'evaluation',
    contentSummary: 'Outcome measurement matrix spanning Safety, Education, Family Interaction, D2-Defined Progress, and System Coordination.',
    tableHeaders: ['Outcome Domain', 'Baseline', 'Weekly / Fortnightly Indicator', 'Review Point'],
    tableRows: [
      ['Safety', 'Unknown locations and return pattern.', 'Nights at known safe location and contact plan used.', 'Weekly'],
      ['Education', 'Attendance and grades declining.', 'Attendance percentage, punctuality, D2-rated school fit.', 'Weeks 4, 8, 16'],
      ['Family Interaction', 'Escalation and leaving.', 'Conflict frequency, intensity, and repair completion.', 'Fortnightly'],
      ['D2-Defined Progress', 'Feeling misunderstood and unfairly treated.', '0-10 voice, fairness, and hope ratings plus narrative.', 'Every session'],
      ['System Coordination', 'Fragmented agency response.', 'Named lead, shared plan, completed warm referrals.', 'Weeks 2, 8, 16']
    ],
    infographicType: 'dashboard',
    speakerNotes: 'Evaluation tests the validity of the social work hypothesis, not client obedience.'
  },
  {
    id: 18,
    slideNumber: 18,
    title: 'Session architecture protects voice and builds family capacity',
    subtitle: 'A single family meeting is insufficient for a conflict pattern shaped by power and safety',
    badge: 'PRACTICE DELIVERY',
    category: 'intervention',
    contentSummary: 'Clinical session design: D2 space, Caregiver space, and Joint practice within a 60-minute structured format.',
    keyPoints: [
      'D2 Space: Separate check-in for goals, confidentiality, safety, translating concerns.',
      'Caregiver Space: Support stress regulation, clarify authority, practice discipline without humiliation.',
      'Joint Practice: Short, structured dialogue with pause plan; rehearse repair before testing hard topics.',
      '60-Min Flow: 10m Check safety -> 10m Name progress -> 20m Practise sequence -> 10m Agree week -> 10m Private close.'
    ],
    infographicType: 'session',
    speakerNotes: 'Confidentiality and information sharing boundaries explained separately to D2 and caregivers before joint work.'
  },
  {
    id: 19,
    slideNumber: 19,
    title: 'A defensible social work proposition',
    subtitle: 'The most useful explanation is the one that creates safer, testable opportunities for change',
    badge: 'DISTINCTION CLAIM',
    category: 'overview',
    contentSummary: 'Synthesized defense proposition and comprehensive academic bibliography linking theory, assessment, actions, indicators, and statutory bounds.',
    keyPoints: [
      'Core Proposition: D2’s absence can be read as communication within a strained ecology. The response combines immediate safety, credible role for D2, family interaction change, and coordinated school-social support.',
      'Distinction Claim: Theory is translated directly into assessment questions, actions, indicators, and boundaries.',
      'Selected References: Bronfenbrenner & Morris (2006), Conger et al. (1992), Gubbels et al. (2019), Littell et al. (2023), MOE & MSF Singapore, CYPA 1993.'
    ],
    speakerNotes: 'Full references recorded with evidence anchors.'
  },
  {
    id: 20,
    slideNumber: 20,
    title: 'Thank you. Q & A',
    subtitle: 'SUSS SWK502 Casework & Family Intervention Defence',
    badge: 'CLOSING',
    category: 'overview',
    contentSummary: 'Closing slide with notes on supplementary slides extending the biopsychosocial ecological formulation and evidence appraisal.',
    keyPoints: [
      'Presentation concluding summary.',
      'Supplementary slides provide in-depth context for biopsychosocial research and integrated phased plans.',
      'Open floor for committee discussion and clinical inquiry.'
    ],
    speakerNotes: 'Transition smoothly to technical defense of theoretical choices and Singapore practice applicability.'
  },
  {
    id: 21,
    slideNumber: 21,
    title: 'Integrated biopsychosocial-ecological formulation',
    subtitle: 'Each domain links a case marker to an assessment need and a modifiable process',
    badge: 'ASSESSMENT APPENDIX',
    category: 'appendix',
    contentSummary: 'Five-domain formulation matrix: Biological/Developmental, Psychological, Relational, Social/Material, Ecological/Temporal.',
    tableHeaders: ['Domain', 'Case Marker', 'Assessment Focus', 'Changeable Process'],
    tableRows: [
      ['Biological / Developmental', 'Age 17. Sleep and health unknown.', 'Development, sleep, health, substance exposure, neurodiversity.', 'Routines, health access, regulation skills.'],
      ['Psychological', 'Feels misunderstood and unfairly treated.', 'Meaning of leaving, mood, threat appraisal, coping and agency.', 'Voice, coping, emotion regulation.'],
      ['Relational', 'Escalating mother-D2 conflict. D1 parentified.', 'Sequence before and after absence, roles and alliances.', 'Communication, boundaries, repair.'],
      ['Social / Material', 'Crowding, shift work, financial pressure.', 'Housing routines, income, caregiving and transport.', 'Practical relief and predictable care.'],
      ['Ecological / Temporal', 'School-FSC-kin links fragmented.', 'Service history, attendance pattern, transition timing.', 'Coordinated mesosystem response.']
    ],
    speakerNotes: 'Formulation: Repeated absence is maintained by interactions across domains. No single factor is sufficient on its own.'
  },
  {
    id: 22,
    slideNumber: 22,
    title: 'Safety, risk and strengths',
    subtitle: 'Immediate safeguarding runs alongside a strengths-based assessment',
    badge: 'RISK & PROTECTION',
    category: 'appendix',
    contentSummary: 'Safeguarding priorities (Location safety, Escalation, Education, Sibling pattern, Caregiver capacity) alongside overlooked family strengths.',
    tableHeaders: ['Priority', 'Risk or Uncertainty', 'Existing Protection', 'Immediate Action'],
    tableRows: [
      ['Location Safety', 'Where D2 stays and who is present.', 'Known maternal aunt relationship.', 'Verify safe location and contact plan.'],
      ['Escalation', 'Conflict precedes leaving.', 'Family continues seeking help.', 'Agree pause, exit, and return protocol.'],
      ['Education', 'Attendance and grades declining.', 'MOE school support exists.', 'Named school contact and attendance plan.'],
      ['Sibling Pattern', 'D3 has begun accompanying D2.', 'Sibling bond can support change.', 'Assess D3 separately; avoid blaming D2.'],
      ['Caregiver Capacity', 'Crowding, shift work, financial strain.', 'Stepfather employed. Kin network present.', 'Practical relief and shared caregiving plan.']
    ],
    keyPoints: [
      'Strengths: D2 seeks connection with known kin. Maternal aunt, D1’s competence, school link, and prior service engagement are assets.'
    ],
    speakerNotes: 'Safeguarding note: Assess immediate safety and statutory thresholds using current agency protocols and Singapore law.'
  },
  {
    id: 23,
    slideNumber: 23,
    title: 'Candidate theories and retained roles',
    subtitle: 'PPCT organises the formulation; complementary theories sharpen specific mechanisms',
    badge: 'THEORY SELECTION',
    category: 'theory',
    contentSummary: 'Systematic comparison of PPCT, Structural Family Theory, Coercive Family Process, Attachment Theory, Family Stress Model, and Functional Casework.',
    tableHeaders: ['Theory', 'What it Explains Well', 'Limit in this Case', 'Retained Role'],
    tableRows: [
      ['PPCT Bioecology', 'Cross-level interaction and developmental timing.', 'Broad unless proximal processes are specified.', 'Primary explanatory frame.'],
      ['Structural Family Theory', 'Boundaries, hierarchy, and parentification.', 'Can understate D2’s subjective meaning.', 'Relational assessment.'],
      ['Coercive Family Process', 'How conflict and departure reinforce each other.', 'May narrow attention to behavior sequences.', 'Maintenance mechanism.'],
      ['Attachment Theory', 'Refuge-seeking and felt security.', 'Retrospective inference can overreach.', 'Hypothesis about secure-base needs.'],
      ['Family Stress Model', 'Material pressure through family processes.', 'Original evidence is context-specific.', 'Economic pathway hypothesis.'],
      ['Functional Casework', 'Agency, choice, time, and engagement.', 'Not an outcome model by itself.', 'Helping-process discipline.']
    ],
    keyPoints: [
      'Selection Rule: Retain a theory only when it changes an assessment question, intervention action, or evaluation indicator.'
    ],
    speakerNotes: 'Demonstrates theoretical parsimony and academic rigor for distinction defence.'
  },
  {
    id: 24,
    slideNumber: 24,
    title: 'Functional casework turns agency limits into a clear offer',
    subtitle: 'Engagement protects choice while making time, role and responsibility explicit',
    badge: 'HELPING PROCESS',
    category: 'theory',
    contentSummary: 'Five operational tenets of functional casework: Diagnosis tied to service, Conscious use of time, Agency function, Structure as content, Relationship and choice.',
    keyPoints: [
      '1. Diagnosis Tied to Service: Build a shared, provisional account linked to concrete goals.',
      '2. Conscious Use of Time: Name the beginning, middle, and ending from the outset.',
      '3. Agency Function: Clarify what the FSC can offer and what it cannot compel.',
      '4. Structure as Content: Explore missed meetings and paperwork barriers without moralising.',
      '5. Relationship and Choice: Offer D2 a distinct voice and voluntary participation.'
    ],
    speakerNotes: 'Functional casework tradition: Rank, Taft, Robinson, Smalley applied critically within contemporary ethics and safeguarding.'
  },
  {
    id: 25,
    slideNumber: 25,
    title: 'Evidence supports disciplined adaptation, not certainty',
    subtitle: 'The intervention remains a monitored practice hypothesis',
    badge: 'CRITICAL APPRAISAL',
    category: 'evaluation',
    contentSummary: 'Appraisal of evidence base: Strong conceptual fit of PPCT; Mixed intervention evidence (2023 Campbell review on FFT); Context gap regarding non-Western populations.',
    keyPoints: [
      'Strong Conceptual Fit: PPCT explains cross-level and time-dependent processes. Family Stress Model identifies pathways.',
      'Mixed Intervention Evidence: 2023 Campbell review found no consistent evidence that FFT outperformed comparison conditions; certainty low.',
      'Context Gap: Much evidence originates outside Singapore. Local feasibility and cultural meaning require direct testing.',
      'Practice Standard: Use transparent goals, routine outcome monitoring, and predefined review points. Revise formulation if needed.'
    ],
    speakerNotes: 'Transparent evaluation acknowledging systematic review findings and Singapore context specifics.'
  },
  {
    id: 26,
    slideNumber: 26,
    title: 'Phase plan, responsibilities and indicators',
    subtitle: 'Each phase links a person goal with an environmental change',
    badge: 'INTERVENTION MATRIX',
    category: 'intervention',
    contentSummary: 'Granular breakdown of Phase 0 (Engage), Phase 1 (Reframe), Phase 2 (Change), and Phase 3 (Generalise) with explicit decision points at Weeks 4, 8, and 16.',
    tableHeaders: ['Phase', 'Person-Directed Objective', 'Environment-Directed Objective', 'Core Practice', 'Indicator'],
    tableRows: [
      ['0. Engage (W0–2)', 'D2 names safety and preferred outcomes.', 'Adults agree contact and return protocol.', 'Home visits, separate meetings, safety map.', 'Known whereabouts and sessions attended.'],
      ['1. Reframe (W3–4)', 'D2 identifies triggers and exceptions.', 'Family replaces blame with sequence language.', 'Relational reframing and conflict mapping.', 'Lower blame and shared formulation.'],
      ['2. Change (W5–12)', 'Coping, negotiation, and self-advocacy.', 'Clear boundaries, repair, and caregiving redistribution.', 'Practice conversations and problem solving.', 'Fewer escalations and shorter absences.'],
      ['3. Generalise (W13–16)', 'Education/vocation plan owned by D2.', 'School-FSC-kin plan survives case closure.', 'School conference and relapse prevention.', 'Attendance trend and warm handover.']
    ],
    keyPoints: [
      'Decision Points: Week 4 confirms formulation; Week 8 triggers adaptation if change absent; Week 16 requires safe route back.'
    ],
    speakerNotes: 'Time-limited structure follows functional casework principles.'
  },
  {
    id: 27,
    slideNumber: 27,
    title: 'Practice pathways, ethics and escalation',
    subtitle: 'A coordinated plan requires clear ownership across family, school and statutory systems',
    badge: 'SINGAPORE PRACTICE',
    category: 'pathways',
    contentSummary: 'Mapping of Singapore practice pathways across Attendance (MOE), Family Intervention (FSC), Financial Pressure (SSO/ComCare), Kin Support (Aunt), and Protection Concerns (CPS).',
    tableHeaders: ['Need', 'Lead Pathway', 'Case Action', 'Boundary'],
    tableRows: [
      ['Attendance', 'School counsellor / Student Welfare Officer', 'Named contact, attendance review, reintegration plan.', 'Secondary-school response is supportive; do not misstate primary compulsory rules.'],
      ['Family Intervention', 'Family Service Centre', 'Home-based engagement, family sessions, case coordination.', 'Consent, confidentiality, and agency mandate remain explicit.'],
      ['Financial Pressure', 'Social Service Office / ComCare', 'Reassess income and practical needs; coordinate benefits.', 'Eligibility requires current assessment.'],
      ['Kin Support', 'Maternal aunt and family network', 'Safe-stay and return agreement with shared caregiving.', 'Verify safety and D2’s wishes.'],
      ['Protection Concerns', 'Agency safeguarding process / CPS (where thresholds apply)', 'Document, consult, and escalate according to current protocol.', 'Absence alone does not establish statutory grounds.']
    ],
    keyPoints: [
      'Ethical Centre: D2 participates as a young person with voice and evolving autonomy. Safety duties and caregiver responsibilities remain active.'
    ],
    speakerNotes: 'Official sources: MOE counselling guidance, MSF ComCare directories, Singapore Statutes Online CYPA.'
  },
  {
    id: 28,
    slideNumber: 28,
    title: 'Appendix: How to read the supporting material',
    subtitle: 'Context for the formulation and evidence appraisal',
    badge: 'APPENDIX',
    category: 'appendix',
    contentSummary: 'Instructions on integrating supplementary slides with the main deck. Re-iterating that the formulation is probabilistic rather than deterministic.',
    keyPoints: [
      'Supplementary slides extend the biopsychosocial ecological formulation through Bronfenbrenner’s PPCT model.',
      'Show how research evidence supports disciplined adaptation to this family’s circumstances.',
      'Probabilistic Stance: Valence of likely outcomes changes as proximal processes, relationships, and environmental conditions change.'
    ],
    speakerNotes: 'Conceptual anchor: Bronfenbrenner and Morris (2006).'
  }
];

export const SEARCH_SUGGESTIONS: SearchSuggestion[] = [
  {
    id: 's-genogram',
    title: 'Genogram of Aisyah Family',
    subtitle: 'Figure 1: 3-generation family tree, 8-resident household, parentification & dyads',
    category: 'Formulation & Diagram',
    targetSection: 'visualizer',
    slideNumber: 4,
    tags: ['genogram', 'family tree', 'aisyah', 'd1', 'd2', 'd3', 'husband', 'aunt', 'grandfather', 'parentified', 'dyad', 'rental flat']
  },
  {
    id: 's-ecomap',
    title: 'Eco-Map System Connections',
    subtitle: 'Figure 2: Secondary School, FSC, SSO ComCare, Aunt, Healthcare, M3',
    category: 'Formulation & Diagram',
    targetSection: 'visualizer',
    slideNumber: 5,
    tags: ['eco-map', 'ecomap', 'school', 'fsc', 'sso', 'comcare', 'maternal aunt', 'healthcare', 'mendaki', 'm3', 'tenuous', 'conflicted']
  },
  {
    id: 's-pdf-download',
    title: 'Download Case Study PDFs',
    subtitle: 'Download single-page Genogram & Eco-Map PDF or Full SUSS Slide Deck',
    category: 'Downloads',
    targetSection: 'downloads',
    slideNumber: 1,
    tags: ['pdf', 'download', 'genogram-aisyah-family', 'swk502_aisyah_case_study', 'export', 'files']
  },
  {
    id: 's-functional-theory',
    title: 'Functional Theory in Social Work (6 Pillars)',
    subtitle: 'Will & Agency, Self-Determination, Here & Now, Evolving Assessment, Time Phases',
    category: 'Theoretical Framework',
    targetSection: 'theory-pillars',
    slideNumber: 6,
    tags: ['functional theory', 'will', 'agency', 'self-determination', 'start where client is', 'time phases', 'smalley', 'taft', 'robinson']
  },
  {
    id: 's-ppct',
    title: 'Bronfenbrenner PPCT Bioecological Model',
    subtitle: 'Process, Person, Context, Time as primary explanatory frame',
    category: 'Theoretical Framework',
    targetSection: 'ppct-model',
    slideNumber: 13,
    tags: ['ppct', 'bronfenbrenner', 'bioecological', 'process', 'person', 'context', 'time', 'mesosystem', 'chronosystem']
  },
  {
    id: 's-bersama',
    title: 'BERSAMA 16-Week Dual-Focus Intervention',
    subtitle: 'Phase 0 Engage, Phase 1 Reframe, Phase 2 Change, Phase 3 Generalise',
    category: 'Intervention Protocol',
    targetSection: 'bersama-roadmap',
    slideNumber: 15,
    tags: ['bersama', '16-week', 'engage', 'reframe', 'change', 'generalise', 'fft', 'dual focus', 'person-directed', 'environment-directed']
  },
  {
    id: 's-maintenance-cycle',
    title: 'Absconding Maintenance Cycle',
    subtitle: '6-stage loop: Pressure -> Escalation -> Departure -> Relief -> Return -> Fragmentation',
    category: 'Clinical Formulation',
    targetSection: 'maintenance-cycle',
    slideNumber: 12,
    tags: ['absconding', 'cycle', 'coercive', 'pressure', 'escalation', 'departure', 'relief', 'negative reinforcement', 'patterson']
  },
  {
    id: 's-timeline',
    title: 'Family Chronosystem Timeline (2002–Present)',
    subtitle: 'Paternal departure (2002) to Stepfather injury (2010) & FSC referral',
    category: 'Developmental History',
    targetSection: 'chronosystem-timeline',
    slideNumber: 3,
    tags: ['timeline', 'chronosystem', '2002', '2008', '2009', '2010', '2017', 'transitions', 'divorce', 'injury', 'brothers']
  },
  {
    id: 's-session-arch',
    title: '60-Minute Session Architecture',
    subtitle: 'D2 Space, Caregiver Space, Joint Practice (Safety, Progress, Rehearsal, Task, Close)',
    category: 'Clinical Delivery',
    targetSection: 'session-architecture',
    slideNumber: 18,
    tags: ['session', '60-minute', 'd2 space', 'caregiver space', 'joint practice', 'check safety', 'practise sequence', 'planned pause']
  },
  {
    id: 's-evaluation',
    title: 'Critical Evaluation: Strengths & Limitations',
    subtitle: 'Empowerment & structure vs. rigid agency focus & trauma neglect',
    category: 'Critical Appraisal',
    targetSection: 'critical-evaluation',
    slideNumber: 8,
    tags: ['strengths', 'limitations', 'evaluation', 'rigidity', 'trauma', 'willpower', 'time limits', 'autonomy']
  },
  {
    id: 's-practice-pathways',
    title: 'Singapore Practice Pathways & CYPA Boundaries',
    subtitle: 'MOE School, FSC, SSO ComCare, Kin Support, CPS Safeguarding thresholds',
    category: 'Singapore Policy & Ethics',
    targetSection: 'practice-pathways',
    slideNumber: 27,
    tags: ['singapore', 'moe', 'fsc', 'sso', 'comcare', 'cps', 'cypa', 'child protection', 'statutory', 'ethics']
  },
  {
    id: 's-measurement',
    title: 'Outcome Measurement Dashboard',
    subtitle: '5 Domains: Safety, Education, Family Interaction, D2 Voice, System Coordination',
    category: 'Outcome Evaluation',
    targetSection: 'measurement-dashboard',
    slideNumber: 17,
    tags: ['measurement', 'dashboard', 'indicators', 'baseline', 'review points', 'safety', 'education', 'attendance', 'voice']
  },
  {
    id: 's-candidate-theories',
    title: 'Candidate Theories & Retained Roles Matrix',
    subtitle: 'PPCT, Structural, Coercive Process, Attachment, Family Stress Model, Functional Casework',
    category: 'Theoretical Matrix',
    targetSection: 'candidate-theories',
    slideNumber: 23,
    tags: ['theories', 'structural family therapy', 'attachment', 'family stress model', 'coercive process', 'selection rule']
  },
  {
    id: 's-references',
    title: 'Academic References & Literature Evidence',
    subtitle: 'Bronfenbrenner (2006), Conger (1992), Gubbels (2019), Littell Campbell Review (2023)',
    category: 'Evidence Base',
    targetSection: 'academic-references',
    slideNumber: 19,
    tags: ['references', 'citations', 'bronfenbrenner', 'conger', 'gubbels', 'littell', 'campbell review', 'evidence']
  }
];
