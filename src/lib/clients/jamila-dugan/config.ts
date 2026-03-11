// =============================================================================
// ISL PITCH CONFIG: IP Stewardship Lab (Dr. Jamila Dugan)
// Comprehensive TypeScript configuration for the client proposal landing page
// Version: 2.0 - Client-facing language only. No internal tool names or costs.
// Meeting: Friday, February 21, 2026 | Start: Monday, February 24, 2026
// =============================================================================

// ---------------------------------------------------------------------------
// INTERFACES
// ---------------------------------------------------------------------------

export interface ISLHero {
  title: string;
  subtitle: string;
  tagline: string;
  meetingDate: string;
  proposalDate: string;
}

export interface ISLClientProfile {
  name: string;
  credentials: string;
  bio: string;
  existingAssets: string[];
  gap: string;
}

export interface ISLLesson {
  id: string;
  title: string;
  duration: string;
  objectives: string[];
}

export interface ISLCourseModule {
  number: number;
  title: string;
  subtitle: string;
  theme: string;
  estimatedRuntime: string;
  lessons: ISLLesson[];
}

export interface ISLCompetitor {
  name: string;
  price: string;
  offer: string;
  missing: string;
}

export interface ISLCompetitorCategory {
  name: string;
  competitors: ISLCompetitor[];
}

export interface ISLWhitespace {
  title: string;
  description: string;
}

export interface ISLPricingComparison {
  program: string;
  price: string;
  format: string;
  ipProtection: boolean;
  ethicalFrame: boolean;
}

export interface ISLCompetitive {
  analyzed: number;
  directCompetitors: number;
  positioning: string;
  categories: ISLCompetitorCategory[];
  whitespace: ISLWhitespace[];
  advantages: string[];
  pricingComparison: ISLPricingComparison[];
}

export interface ISLMarketSegment {
  name: string;
  size: string;
  pain: string;
  trigger: string;
}

export interface ISLTimingFactor {
  stat: string;
  description: string;
  source: string;
}

export interface ISLMarket {
  tam: string;
  addressable: string;
  segments: ISLMarketSegment[];
  timing: ISLTimingFactor[];
}

export interface ISLEmail {
  number: number;
  subject: string;
  trigger: string;
  sequence: "welcome" | "nurture" | "launch";
  purpose: string;
  preview: string;
}

export interface ISLLinkedInContentMix {
  type: string;
  frequency: string;
}

export interface ISLLinkedInCurrentAudit {
  followers: string;
  avgPostEngagement: string;
  postFrequency: string;
  topPerformingContent: string;
}

export interface ISLLinkedInGrowthTargets {
  week4: string;
  week8: string;
  week12: string;
}

export interface ISLLinkedInWeeklyPlan {
  postsPerWeek: number;
  contentMix: ISLLinkedInContentMix[];
}

export interface ISLLinkedInSamplePost {
  number: number;
  title: string;
  category: "Thought Leadership" | "Personal Story" | "Educational" | "Community & CTA" | "Engagement";
  hook: string;
  purpose: string;
}

export interface ISLLinkedInStrategy {
  currentAudit: ISLLinkedInCurrentAudit;
  growthTargets: ISLLinkedInGrowthTargets;
  weeklyPlan: ISLLinkedInWeeklyPlan;
  approach: string;
  samplePosts: ISLLinkedInSamplePost[];
}

export interface ISLRoadmapDay {
  day: string;
  date: string;
  weDoItems: string[];
  youDo: string[];
}

export interface ISLRoadmapWeek {
  week: number;
  dateRange: string;
  phase: string;
  title: string;
  yourTime: string;
  days: ISLRoadmapDay[];
}

export interface ISLRoadmap {
  weeks: ISLRoadmapWeek[];
  totalYourTime: string;
}

export interface ISLPayment {
  amount: string;
  date: string;
  trigger: string;
}

export interface ISLMilestonePhase {
  name: string;
  total: string;
  dateRange: string;
  payments: ISLPayment[];
}

export interface ISLMilestoneTime {
  total: string;
  breakdown: { activity: string; duration: string }[];
}

export interface ISLMilestone {
  id: number;
  name: string;
  dateRange: string;
  duration: string;
  investment: string;
  summary: string;
  deliverables: string[];
  yourTime: ISLMilestoneTime;
  proofGate: string;
  paymentSchedule: ISLPayment[];
  status: "available" | "in-progress" | "upcoming";
  valueAnchors: { service: string; marketRate: string }[];
  totalMarketValue: string;
  scopeIncluded: string[];
  scopeNotIncluded: string[];
}

export interface ISLOfferTier {
  tier: string;
  name: string;
  price: string;
  format: string;
  details: string[];
  highlight?: boolean;
}

export interface ISLRevenueStream {
  stream: string;
  price: string;
  volume: string;
  annual: string;
}

export interface ISLInvestment {
  phases: ISLMilestonePhase[];
  projectTotal: string;
  monthlyAfter: string;
  monthlyScaling: string;
}

export interface ISLKPIMetric {
  metric: string;
  description: string;
  target: string;
  frequency: string;
}

export interface ISLSources {
  nonprofitJobCuts: string;
  creatorEconomy: string;
  onlineKnowledge: string;
  kajabiData: string;
}

export interface ISLTransformItem {
  label: string;
  detail: string;
  icon: string; // lucide icon name for the page to reference
}

export interface ISLTransformation {
  headline: string;
  subtitle: string;
  timeframe: string; // "60 Days"
  before: ISLTransformItem[];
  after: ISLTransformItem[];
}

export interface ISLRoiStep {
  label: string;
  value: string;
  explanation: string;
}

export interface ISLRoi {
  totalInvestment: string;
  totalInvestmentNote: string;
  yearOneReturn: string;
  returnMultiple: string;
  paybackPeriod: string;
  monthlyPassiveFloor: string;
  monthlyPassiveCeiling: string;
  walkthrough: ISLRoiStep[];
}

export interface ISLCostOfWaiting {
  headline: string;
  subtitle: string;
  monthlyOpportunityCost: string;
  items: { delay: string; lostRevenue: string; note: string }[];
}

export interface ISLConfig {
  hero: ISLHero;
  clientProfile: ISLClientProfile;
  transformation: ISLTransformation;
  roi: ISLRoi;
  costOfWaiting: ISLCostOfWaiting;
  courseModules: ISLCourseModule[];
  competitive: ISLCompetitive;
  market: ISLMarket;
  emails: ISLEmail[];
  linkedinStrategy: ISLLinkedInStrategy;
  roadmap: ISLRoadmap;
  milestones: ISLMilestone[];
  offers: ISLOfferTier[];
  revenue: ISLRevenueStream[];
  revenueNote: string;
  investment: ISLInvestment;
  kpiDashboard: ISLKPIMetric[];
  sources: ISLSources;
}

// ---------------------------------------------------------------------------
// CONFIG
// ---------------------------------------------------------------------------

export const ISL_CONFIG: ISLConfig = {

  // -------------------------------------------------------------------------
  // HERO
  // -------------------------------------------------------------------------
  hero: {
    title: "IP Stewardship Lab",
    subtitle: "A Comprehensive Launch Proposal for Dr. Jamila Dugan",
    tagline:
      "Transform 15+ years of intellectual property into a sustainable income engine: built methodically, proven at every step, grounded in stewardship.",
    meetingDate: "Friday, February 21, 2026",
    proposalDate: "February 19, 2026",
  },

  // -------------------------------------------------------------------------
  // TRANSFORMATION (Before vs After, 60 days)
  // -------------------------------------------------------------------------
  transformation: {
    headline: "What 60 Days Looks Like",
    subtitle: "Everything above becomes yours permanently. Built in 60 days. Proven at every step.",
    timeframe: "60 Days",
    before: [
      {
        label: "Income Model",
        detail: "100% active: every dollar requires your calendar",
        icon: "Clock",
      },
      {
        label: "Course Platform",
        detail: "No course, no digital product, no passive revenue",
        icon: "X",
      },
      {
        label: "Email List",
        detail: "No capture system, no nurture sequence, no journey",
        icon: "MailX",
      },
      {
        label: "IP Protection",
        detail: "Frameworks exist but aren't codified or distributed",
        icon: "ShieldOff",
      },
      {
        label: "Online Presence",
        detail: "Intermittent LinkedIn, no consistent content engine",
        icon: "WifiOff",
      },
    ],
    after: [
      {
        label: "Income Model",
        detail: "Passive engine generating $4,950–$9,900/month while you sleep",
        icon: "TrendingUp",
      },
      {
        label: "Course Platform",
        detail: "25-lesson course on Kajabi, accepting payments 24/7",
        icon: "GraduationCap",
      },
      {
        label: "Email List",
        detail: "12-email sequence converting strangers into students automatically",
        icon: "Mail",
      },
      {
        label: "IP Protection",
        detail: "Frameworks codified, distributed, and generating revenue on your terms",
        icon: "Shield",
      },
      {
        label: "Online Presence",
        detail: "4 posts/week, growing audience, consistent thought leadership",
        icon: "Wifi",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // ROI MATH (Step-by-step walkthrough)
  // -------------------------------------------------------------------------
  roi: {
    totalInvestment: "Coming Soon",
    totalInvestmentNote: "across 3 milestones over 7 weeks",
    yearOneReturn: "$136,900 – Coming Soon",
    returnMultiple: "19–28x",
    paybackPeriod: "1–2 months after launch",
    monthlyPassiveFloor: "Coming Soon",
    monthlyPassiveCeiling: "Coming Soon",
    walkthrough: [
      {
        label: "Your Investment",
        value: "Coming Soon",
        explanation:
          "Total across M1 ($2,000) + M2 ($3,000) + M3 ($2,000), paid in installments, not upfront",
      },
      {
        label: "Conservative Course Sales",
        value: "10–20/month",
        explanation:
          "Based on your existing network, LinkedIn presence, and email list built during M1–M3",
      },
      {
        label: "Monthly Passive Income",
        value: "$4,950 – Coming Soon",
        explanation:
          "Course launches run 24/7 without your calendar, creating sustainable income streams.",
      },
      {
        label: "Payback Period",
        value: "Month 1–2",
        explanation:
          "At just 15 sales, you've recovered the entire $7,000 investment",
      },
      {
        label: "Year 1 Total",
        value: "$136,900 – Coming Soon",
        explanation:
          "Course ($59K–$119K) + 2 Cohorts ($40K) + 5 Intensives ($37.5K), all conservative",
      },
      {
        label: "Return Multiple",
        value: "19–28x",
        explanation:
          "For every $1 invested, you get $19–$28 back in Year 1 alone",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // COST OF WAITING (Opportunity cost math, not urgency, just honest math)
  // -------------------------------------------------------------------------
  costOfWaiting: {
    headline: "The Cost of Waiting",
    subtitle: "This isn't urgency. This is math.",
    monthlyOpportunityCost: "$4,950 – Coming Soon",
    items: [
      {
        delay: "1 month",
        lostRevenue: "$4,950 – Coming Soon",
        note: "One month of course sales that didn't happen",
      },
      {
        delay: "3 months",
        lostRevenue: "$14,850 – Coming Soon",
        note: "A full quarter of passive income lost",
      },
      {
        delay: "6 months",
        lostRevenue: "$29,700 – Coming Soon",
        note: "More than 4x the entire project cost left on the table",
      },
      {
        delay: "12 months",
        lostRevenue: "$59,400 – Coming Soon",
        note: "An entire year of the passive engine not running",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // CLIENT PROFILE
  // -------------------------------------------------------------------------
  clientProfile: {
    name: "Dr. Jamila Dugan, Ed.D.",
    credentials: "Ed.D. UC Berkeley",
    bio: "Founder and Leadership Coach with 15+ years coaching school leaders in justice work. Author of 'Equity Traps and Tropes' and co-author of 'Street Data' (Corwin Press). Ed.D. UC Berkeley, national speaker.",
    existingAssets: [
      "Bestselling book with national reach and established media attention",
      "3 named IP frameworks: tested, refined, and ready to teach",
      "National speaking platform and deeply established credibility",
      "9-page 7-Layer IP Architecture Audit PDF: designed and ready to distribute",
      "Completed lesson scripts: your voice and content already exist",
      "Existing audience who trust you and are primed for exactly this offer",
      "V4 Course Specification complete: 5 modules, 25 lessons fully designed",
    ],
    gap: "You don't yet have digital product infrastructure: no course, no email list, no landing page, no payment processing. Your IP is ready. The platform is not.",
  },

  // -------------------------------------------------------------------------
  // COURSE MODULES (V4 Spec: 5 modules, 25 lessons)
  // -------------------------------------------------------------------------
  courseModules: [
    {
      number: 1,
      title: "Naming What You Carry",
      subtitle: "Foundations of IP Stewardship",
      theme: "Identify and name the full scope of your intellectual property before attempting to protect or share it.",
      estimatedRuntime: "15–18 min",
      lessons: [
        {
          id: "1-1",
          title: "Stewardship Arrival",
          duration: "~45s",
          objectives: [
            "Set an intentional tone for the module",
            "Ground the learner in a stewardship mindset before content begins",
            "Signal that this course is different from traditional 'build a business' programs",
          ],
        },
        {
          id: "1-2",
          title: "What Is IP Stewardship?",
          duration: "2–3 min",
          objectives: [
            "Define IP stewardship as distinct from traditional approaches to intellectual property",
            "Introduce the stewardship ethic as the foundation of the course",
            "Establish the difference between knowledge as commodity vs. knowledge as legacy",
            "Articulate why stewardship matters specifically for practitioners with justice-oriented IP",
          ],
        },
        {
          id: "1-3",
          title: "The 7-Layer IP Architecture Audit",
          duration: "3–4 min",
          objectives: [
            "Walk through all 7 layers of the IP Architecture framework",
            "Help the learner understand that IP extends beyond formal frameworks to lived experience",
            "Introduce the audit tool as a diagnostic, not a checklist",
            "Surface hidden IP assets the learner may not have recognized as valuable",
          ],
        },
        {
          id: "1-4",
          title: "Knowledge Lineage",
          duration: "2–3 min",
          objectives: [
            "Define knowledge lineage and why tracing it matters",
            "Help learners name the communities, mentors, and traditions that shaped their IP",
            "Distinguish between individual and collective knowledge",
            "Ground attribution and stewardship in relational accountability",
          ],
        },
        {
          id: "1-5",
          title: "The Stewardship Inventory First Pass",
          duration: "2–3 min",
          objectives: [
            "Begin a personal IP inventory using the audit framework",
            "Practice naming assets across multiple layers",
            "Identify which assets feel most ready to move and which need more protection",
            "Complete the Module 1 worksheet",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Moral Center Codification",
      subtitle: "Grounding Your IP in Values",
      theme: "Articulate the ethical core that governs how your IP is shared, licensed, and protected.",
      estimatedRuntime: "16–20 min",
      lessons: [
        {
          id: "2-1",
          title: "Stewardship Arrival Module 2",
          duration: "~45s",
          objectives: [
            "Transition from inventory to values work",
            "Invite the learner into reflective space before ethical content",
            "Signal that module 2 requires both rigor and personal honesty",
          ],
        },
        {
          id: "2-2",
          title: "What Is a Moral Center?",
          duration: "2–3 min",
          objectives: [
            "Define the moral center as the ethical north star for all IP decisions",
            "Explain why IP without a moral center becomes vulnerable to extraction",
            "Introduce the distinction between values as aspiration vs. values as operational principle",
            "Frame moral center codification as a professional act of protection",
          ],
        },
        {
          id: "2-3",
          title: "The Values Audit",
          duration: "3–4 min",
          objectives: [
            "Guide learners through a structured values audit process",
            "Distinguish between stated values and operative values (what you actually do)",
            "Identify the 3–5 core values that govern IP decisions",
            "Surface tensions between personal values and market incentives",
          ],
        },
        {
          id: "2-4",
          title: "Four Patterns of IP Engagement",
          duration: "3–4 min",
          objectives: [
            "Define the four patterns: Extraction, Hoarding, Undiscerning Sharing, and Stewardship",
            "Understand extraction as taking without permission or attribution",
            "Recognize hoarding as withholding out of fear rather than discernment", 
            "Identify undiscerning sharing as giving freely without vetting recipients or recognizing value",
            "Contrast all patterns with stewardship: protection paired with intentional sharing",
            "Help learners identify which patterns they have unconsciously adopted",
          ],
        },
        {
          id: "2-5",
          title: "Writing Your Moral Center Document",
          duration: "3–4 min",
          objectives: [
            "Guide the learner through drafting a 1-page moral center document",
            "Include: core values, non-negotiables, what your IP is for, who it is for",
            "Establish how the moral center will function as a decision-making filter",
            "Complete the Module 2 worksheet and moral center first draft",
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Architecture of Protection",
      subtitle: "Mapping, Documenting, and Holding Your IP",
      theme: "Build practical systems to document, protect, and hold your intellectual property with integrity.",
      estimatedRuntime: "18–22 min",
      lessons: [
        {
          id: "3-1",
          title: "Stewardship Arrival Module 3",
          duration: "~45s",
          objectives: [
            "Ground the learner before moving into practical protection systems",
            "Signal that protection is not about fear, it's about intention",
            "Connect the work of module 3 back to the moral center from module 2",
          ],
        },
        {
          id: "3-2",
          title: "Mapping the Layers Practical Exercise",
          duration: "3–4 min",
          objectives: [
            "Apply the 7-layer framework to a real asset from the learner's portfolio",
            "Practice distinguishing layers in real examples",
            "Identify which layers are most exposed or undocumented",
            "Begin building a layer map for the learner's primary IP asset",
          ],
        },
        {
          id: "3-3",
          title: "Documentation Systems That Work",
          duration: "3–4 min",
          objectives: [
            "Introduce practical documentation tools for IP protection",
            "Cover: version control, naming conventions, dated first-use records",
            "Explain why informal documentation still holds relational and legal weight",
            "Set up a sustainable documentation habit the learner can maintain independently",
          ],
        },
        {
          id: "3-4",
          title: "Legal vs. Relational Protection",
          duration: "2–3 min",
          objectives: [
            "Distinguish between formal legal protection (copyright, trademark) and relational protection (community agreements, attribution norms)",
            "Explain when each type of protection is most effective",
            "Name the limits of legal protection for relational knowledge",
            "Help learners decide which type of protection to prioritize first",
          ],
        },
        {
          id: "3-5",
          title: "Drawing Boundaries With Integrity",
          duration: "2–3 min",
          objectives: [
            "Define what it means to set IP boundaries with integrity vs. with scarcity",
            "Introduce language for communicating boundaries in professional settings",
            "Practice saying no to extraction using values-aligned framing",
            "Complete the Module 3 worksheet: protection plan for one primary IP asset",
          ],
        },
      ],
    },
    {
      number: 4,
      title: "Sacred, Trainable, Automatable",
      subtitle: "Deciding What to Share, What to License, What to Hold",
      theme: "Apply the Sacred-Trainable-Automatable framework to make clear decisions about how every layer of your IP travels.",
      estimatedRuntime: "17–20 min",
      lessons: [
        {
          id: "4-1",
          title: "Stewardship Arrival Module 4",
          duration: "~45s",
          objectives: [
            "Ground the learner before introducing the core decision-making framework",
            "Acknowledge that deciding what to share is emotionally and ethically complex",
            "Invite clarity and intention into the decision-making process",
          ],
        },
        {
          id: "4-2",
          title: "Introducing the Sacred-Trainable-Automatable Framework",
          duration: "3–4 min",
          objectives: [
            "Define all three categories and the logic behind each distinction",
            "Explain why 'sacred' doesn't mean 'hidden', it means 'held with care'",
            "Distinguish between discerning sharing (stewardship) and undiscerning sharing",
            "Walk through examples of IP assets in each category",
            "Introduce the framework as a filter, not a permanent assignment",
          ],
        },
        {
          id: "4-3",
          title: "What to Share and How",
          duration: "3–4 min",
          objectives: [
            "Identify which IP assets are appropriate to share broadly vs. selectively",
            "Determine the right container for sharing (course, talk, article, book, cohort)",
            "Match the depth of sharing to the level of trust and context",
            "Apply stewardship logic to sharing decisions: does this serve the community?",
          ],
        },
        {
          id: "4-4",
          title: "Licensing With Integrity",
          duration: "2–3 min",
          objectives: [
            "Introduce licensing as a stewardship tool, not a revenue extraction mechanism",
            "Distinguish between exclusive, non-exclusive, and community licensing",
            "Explain how licensing agreements can encode values and access conditions",
            "Identify when a licensing conversation is appropriate",
          ],
        },
        {
          id: "4-5",
          title: "Community Agreements and Delegation Strategy",
          duration: "2–3 min",
          objectives: [
            "Introduce community agreements as the relational form of IP protection",
            "Draft a simple community agreement template",
            "Define delegation strategy: who can teach your IP, under what conditions",
            "Complete the Module 4 worksheet: STA map for three IP assets",
          ],
        },
      ],
    },
    {
      number: 5,
      title: "Stewardship in Motion",
      subtitle: "Going to Market With Integrity",
      theme: "Bring your IP to market in a way that reflects your values, serves your community, and builds sustainable revenue.",
      estimatedRuntime: "17–20 min",
      lessons: [
        {
          id: "5-1",
          title: "Stewardship Arrival Module 5",
          duration: "~45s",
          objectives: [
            "Mark the transition from design to motion",
            "Acknowledge the courage it takes to bring IP to market",
            "Ground the learner in their moral center before go-to-market work begins",
          ],
        },
        {
          id: "5-2",
          title: "Pricing as Stewardship",
          duration: "3–4 min",
          objectives: [
            "Reframe pricing from extraction to access design",
            "Introduce tiered pricing as a stewardship tool",
            "Discuss when community pricing, sliding scale, and scholarship models serve the mission",
            "Help learners price with confidence grounded in value, not comparison",
          ],
        },
        {
          id: "5-3",
          title: "Building Your Go-to-Market Plan",
          duration: "3–4 min",
          objectives: [
            "Outline the core components of a stewardship-first go-to-market plan",
            "Choose the right initial container (course, cohort, consulting, speaking)",
            "Sequence the go-to-market in alignment with the learner's capacity and community",
            "Complete the Module 5 go-to-market worksheet",
          ],
        },
        {
          id: "5-4",
          title: "Building Community Around Your IP",
          duration: "2–3 min",
          objectives: [
            "Define community as the living context in which IP travels safely",
            "Introduce community-building as a protection strategy, not just a marketing tactic",
            "Name practices that build trust and reciprocity in IP communities",
            "Identify where the learner's natural community already exists",
          ],
        },
        {
          id: "5-5",
          title: "The Ongoing Stewardship Practice",
          duration: "3–4 min",
          objectives: [
            "Frame IP stewardship as an ongoing practice, not a one-time project",
            "Introduce the annual stewardship review as a maintenance ritual",
            "Name signals that indicate IP is being extracted or diluted",
            "Close the course with a commitment practice and community agreement",
          ],
        },
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // COMPETITIVE LANDSCAPE
  // -------------------------------------------------------------------------
  competitive: {
    analyzed: 21,
    directCompetitors: 0,
    positioning: "Human-led + Stewardship-first + Justice-oriented",
    categories: [
      {
        name: "Build a Course Programs",
        competitors: [
          {
            name: "Amy Porterfield (Digital Course Academy)",
            price: "Coming Soon",
            offer: "Course creation methodology",
            missing: "No IP protection, no ethical framing, marketing-heavy",
          },
          {
            name: "Marie Forleo (B-School)",
            price: "Coming Soon",
            offer: "Online business fundamentals",
            missing: "Revenue-focused, no stewardship ethic",
          },
          {
            name: "Kajabi University",
            price: "Free w/platform",
            offer: "Course building tutorials",
            missing: "Platform-specific, no IP strategy",
          },
          {
            name: "Teachable Creators",
            price: "Free w/platform",
            offer: "Course hosting + basics",
            missing: "No IP framework at all",
          },
        ],
      },
      {
        name: "Productize Consulting Programs",
        competitors: [
          {
            name: "Sam Zipursky (Consulting Success)",
            price: "$3K–$10K",
            offer: "Consulting business growth",
            missing: "Revenue-only metrics, no stewardship",
          },
          {
            name: "Taki Moore",
            price: "$2K–$5K",
            offer: "Coach/consultant scaling",
            missing: "Scale at all costs mentality",
          },
          {
            name: "Danny Iny (Mirasee)",
            price: "Coming Soon",
            offer: "Course + coaching business",
            missing: "Knowledge commerce, not protection",
          },
        ],
      },
      {
        name: "Get Visible Programs",
        competitors: [
          {
            name: "Dorie Clark (Recognized Expert)",
            price: "Books + courses",
            offer: "Thought leadership strategy",
            missing: "No IP protection framework",
          },
          {
            name: "Selena Soo (Impacting Millions)",
            price: "Coming Soon",
            offer: "Publicity + visibility",
            missing: "No IP strategy, visibility-only",
          },
        ],
      },
      {
        name: "IP Protection Services",
        competitors: [
          {
            name: "ipCapital Group",
            price: "Enterprise",
            offer: "Patent/IP strategy consulting",
            missing: "Enterprise-only, legal-focused",
          },
          {
            name: "Ocean Tomo",
            price: "Enterprise",
            offer: "IP valuation + transactions",
            missing: "Not for individual practitioners",
          },
        ],
      },
      {
        name: "BIPOC-Focused Coaching",
        competitors: [
          {
            name: "Embrace Change Consulting",
            price: "Varies",
            offer: "DEI consulting support",
            missing: "Career coaching, not IP stewardship",
          },
          {
            name: "Twanna Carter",
            price: "Varies",
            offer: "Career coaching for Black women",
            missing: "Career transitions, not IP protection",
          },
        ],
      },
    ],
    whitespace: [
      {
        title: "IP protection for non-legal practitioners",
        description:
          "No program teaches consultants and authors how to identify, codify, and protect their IP without lawyers or enterprise budgets.",
      },
      {
        title: "Ethical stewardship framework",
        description:
          "Stewardship vs. extraction as a distinct paradigm: not 'extract from your expertise' but 'ensure your expertise travels with integrity.'",
      },
      {
        title: "Justice-oriented IP strategy",
        description:
          "Specifically designed for BIPOC consultants whose knowledge has historically been extracted, repackaged, and resold without attribution.",
      },
      {
        title: "Stewardship as a distinct paradigm",
        description:
          "Not 'how to make money from your IP' but 'how to ensure your IP serves the communities it was built for.'",
      },
      {
        title: "Intergenerational IP wealth building",
        description:
          "Framing IP protection as legacy and community responsibility, not just individual financial gain.",
      },
    ],
    advantages: [
      "Language: 'Stewardship' vs. traditional approaches - competitors cannot credibly adopt this framing",
      "Credibility: Ed.D. UC Berkeley + Corwin bestseller + national speaking platform",
      "Ethics: Anti-extraction defaults built into every framework and pricing tier",
      "Community: Justice-oriented practitioners self-select, creating a values-aligned cohort",
      "Framework: The 7-Layer IP Architecture is proprietary, deeply structured, and already proven",
    ],
    pricingComparison: [
      {
        program: "ISL Self-Guided",
        price: "Coming Soon",
        format: "5 modules + reflection companion",
        ipProtection: true,
        ethicalFrame: true,
      },
      {
        program: "ISL Cohort",
        price: "Coming Soon",
        format: "8 weeks live, 8 seats",
        ipProtection: true,
        ethicalFrame: true,
      },
      {
        program: "ISL Intensive",
        price: "Coming Soon",
        format: "1:1 strategy",
        ipProtection: true,
        ethicalFrame: true,
      },
      {
        program: "Amy Porterfield",
        price: "Coming Soon",
        format: "Course creation",
        ipProtection: false,
        ethicalFrame: false,
      },
      {
        program: "Dorie Clark",
        price: "$500–Coming Soon",
        format: "Thought leadership",
        ipProtection: false,
        ethicalFrame: false,
      },
      {
        program: "Sam Zipursky",
        price: "$3K–$10K",
        format: "Consulting growth",
        ipProtection: false,
        ethicalFrame: false,
      },
    ],
  },

  // -------------------------------------------------------------------------
  // MARKET
  // -------------------------------------------------------------------------
  market: {
    tam: "23K–43K individuals (Monmac Labs analysis cross-referenced with Grand View Research Online Education Market Analysis, 2024)",
    addressable: "23,000 – 43,000 individuals (Monmac Labs segment analysis: justice-oriented consultants + authors + transitioning practitioners; informed by Candid/GuideStar Nonprofit Employment Report, 2025)",
    segments: [
      {
        name: "Justice-Oriented Consultants",
        size: "2,000 – 4,000 in the US",
        pain: "IP knowledge and frameworks not yet codified or formally protected",
        trigger: "Watching frameworks get diluted or co-opted without attribution",
      },
      {
        name: "Authors & IP Creators",
        size: "5,000 – 8,000 in the US",
        pain: "100% active income, no passive engine built from existing work",
        trigger: "Desire for income that doesn't require a new speaking engagement each month",
      },
      {
        name: "Transitioning Practitioners",
        size: "10,000 – 20,000 in the US",
        pain: "Leaving institutional roles with knowledge they built over decades, unsure what is theirs to take",
        trigger: "Layoffs, DEI program eliminations, desire for independent practice",
      },
    ],
    timing: [
      {
        stat: "28,696",
        description: "nonprofit jobs cut in 2025 (four times the 2024 rate), creating a wave of practitioners seeking independent income",
        source: "Candid/GuideStar Nonprofit Employment Report, 2025",
      },
      {
        stat: "$480B",
        description: "projected creator economy by 2027 (up from $250B in 2023). Knowledge creators are the fastest-growing segment",
        source: "Goldman Sachs, Creator Economy Report, 2024",
      },
      {
        stat: "29% CAGR",
        description: "online paid knowledge market growth through 2035. Demand for structured, expert-led learning is accelerating",
        source: "Grand View Research, Online Education Market Analysis, 2024",
      },
      {
        stat: "12–18 months",
        description: "estimated window before the independent consulting market for this audience normalizes and competition increases",
        source: "Monmac Labs market analysis based on DEI workforce displacement trends",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // EMAIL SEQUENCES (12 emails: welcome + nurture + launch)
  // -------------------------------------------------------------------------
  emails: [
    {
      number: 1,
      subject: "Your 7-Layer IP Architecture Audit: It's Here",
      trigger: "Immediate (upon opt-in)",
      sequence: "welcome",
      purpose: "Deliver the lead magnet immediately. Confirm the download works. Set the tone that this is different from every other freebie they've received.",
      preview:
        "Attached is the 7-Layer IP Architecture Audit, a nine-page guide to seeing the full scope of what you carry. Most people who read it find at least two layers they had never named before.",
    },
    {
      number: 2,
      subject: "How was the audit? (One question for you)",
      trigger: "Day 3",
      sequence: "welcome",
      purpose: "Follow-up to confirm they engaged with the PDF. Creates a two-way relationship early. Invites reply which signals engagement to email providers.",
      preview:
        "Three days ago, I sent you the 7-Layer IP Architecture Audit. I'm curious: which layer surprised you most? Reply and let me know. I read every response.",
    },
    {
      number: 3,
      subject: "The difference between stewarding and extracting",
      trigger: "Day 5",
      sequence: "welcome",
      purpose: "Introduce the core philosophical distinction that makes ISL different from every other course-building program. Plants the seed before pitching anything.",
      preview:
        "There is a difference between extracting from your expertise and stewarding it. Generosity should be paired with clarity and stewardship. Stewarding asks: how do I ensure this continues to serve the people it was built for while protecting its integrity?",
    },
    {
      number: 4,
      subject: "One question that changes everything",
      trigger: "Day 7",
      sequence: "welcome",
      purpose: "Closes the welcome sequence with a values-resonant question that makes the reader articulate why they care about stewardship, priming them for the nurture sequence.",
      preview:
        "What would it mean if the communities your work serves could always access it on your terms, protected by your values, not dependent on your calendar?",
    },
    {
      number: 5,
      subject: "Why your frameworks keep getting diluted",
      trigger: "Day 10",
      sequence: "nurture",
      purpose: "Names the exact pain the audience experiences. Validates their frustration. Positions the problem before introducing the solution.",
      preview:
        "You create a framework. You test it in the field. You teach it in rooms full of people who need it. And then, somewhere along the way, it starts coming back to you in a form you don't recognize.",
    },
    {
      number: 6,
      subject: "The 7-Layer Architecture in action",
      trigger: "Day 14",
      sequence: "nurture",
      purpose: "Teaches a concrete application of the framework. Demonstrates value and depth before asking for anything. Builds credibility through specificity.",
      preview:
        "Today I want to show you what the alternative looks like, using two of the seven layers as an example of how protection and sharing can coexist.",
    },
    {
      number: 7,
      subject: "Sacred, Trainable, Automatable",
      trigger: "Day 18",
      sequence: "nurture",
      purpose: "Introduces the STA framework, a core module preview that reveals the intellectual depth of the course. Creates desire to learn the full system.",
      preview:
        "Not everything you know should be in a course. The question is: what should you share, with whom, and under what conditions? Three categories help answer that.",
    },
    {
      number: 8,
      subject: "What stewardship looks like in practice",
      trigger: "Day 21",
      sequence: "nurture",
      purpose: "Case study / story format. Social proof through narrative. Shows transformation without hype. Normalizes that this work takes time and is worth it.",
      preview:
        "A practitioner with a decade of equity work came to the realization that their business model was not sustainable. Not because their work wasn't valued, but because they had never built a structure to hold it.",
    },
    {
      number: 9,
      subject: "The window is open, and it won't stay that way",
      trigger: "Day 25",
      sequence: "nurture",
      purpose: "Fact-based urgency email. Not hype, but real market timing. References the nonprofit job cut data and the creator economy window. Positions now as a strategic moment, not a pressure tactic.",
      preview:
        "28,696 nonprofit jobs were cut in 2025. That is four times the 2024 rate. What that number represents is not just disruption, but a wave of experienced practitioners who are ready to build independent practices.",
    },
    {
      number: 10,
      subject: "Your IP deserves a foundation",
      trigger: "Day 28",
      sequence: "nurture",
      purpose: "First course introduction email. Describes the course by its outcome, not its features. Frames enrollment as a values decision, not a financial one.",
      preview:
        "The IP Stewardship Foundation is a five-module program. It is not a course about building passive income. It is a course about building a stewardship practice that generates income as a consequence of clarity.",
    },
    {
      number: 11,
      subject: "The IP Stewardship Lab is forming: here's what that means",
      trigger: "Day 35",
      sequence: "launch",
      purpose: "Cohort announcement. Introduces the live, facilitated option for those who want accountability and community. Creates FOMO through intentional scarcity (8 seats, 2x per year).",
      preview:
        "Twice a year, I open eight seats for the IP Stewardship Lab Cohort: eight weeks, live and facilitated, with a maximum of eight participants. Applications are now open for the next cohort.",
    },
    {
      number: 12,
      subject: "Last chance to join the foundation cohort",
      trigger: "Day 42 (or 48hrs before cohort closes)",
      sequence: "launch",
      purpose: "Closing the enrollment window. Fact-based, not hype. Reminds them of the specific outcomes and what access to this cohort provides. Offers a direct link to book a call if unsure.",
      preview:
        "The application window for the IP Stewardship Lab Cohort closes Friday. Eight seats. If you have been thinking about it, this is the moment to decide.",
    },
  ],

  // -------------------------------------------------------------------------
  // LINKEDIN STRATEGY
  // -------------------------------------------------------------------------
  linkedinStrategy: {
    currentAudit: {
      followers: "~1,415 (verified February 2026)",
      avgPostEngagement: "0.5–2.2% (8–31 reactions per post across 45 total posts)",
      postFrequency: "Irregular: approximately 1-2 posts per month, no consistent cadence. Text posts and article shares only, no native video, no newsletter, no carousel.",
      topPerformingContent: "Street Data references, equity thought leadership, 'Radical Dreaming' article (31 reactions, highest performing post). Book has 868 Goodreads ratings at 4.21 stars; genuine traction not yet leveraged on LinkedIn. Speaking tier: $40,000 confirmed engagement (Washtenaw ISD), premium authority not reflected in online presence.",
    },
    growthTargets: {
      week4: "1,600–1,800 followers. Consistent 4x/week cadence established. Baseline engagement at 2–3%. Profile reflects speaking authority and book credibility.",
      week8: "2,000-2,500 followers. Newsletter launched with target of 200+ subscribers. Profile views up 150%+. No lead magnet currently exists; email capture goes live Week 1.",
      week12: "3,000-3,500 followers. LinkedIn generating 5-10 email opt-ins per week. Engagement at 3-5%. The gap between offline authority and online presence: closed.",
    },
    weeklyPlan: {
      postsPerWeek: 4,
      contentMix: [
        { type: "Thought Leadership", frequency: "1x per week: the IP-stewardship-as-paradigm angle" },
        { type: "Personal Story", frequency: "1x per week: your journey, your frameworks, your 'why'" },
        { type: "Educational", frequency: "1x per week: a teaching post, carousel, or framework explainer" },
        { type: "Community & CTA", frequency: "1x per week: audience engagement, lead magnet offer, or enrollment CTA" },
      ],
    },
    approach:
      "Under-promise, over-deliver. We are not chasing viral posts. We are building a body of work on LinkedIn that reflects the same stewardship ethic as the course itself: consistent, values-aligned, and audience-first. You have the credentials, the book, the speaking circuit, and the framework. What you don't yet have is digital infrastructure converting that authority into an owned audience. That is the gap we are closing. Every post is crafted to match your voice and your philosophy. Nothing goes live without your approval.",
    samplePosts: [
      {
        number: 1,
        title: "The Reframe",
        category: "Thought Leadership",
        hook: "I refuse to accept the framing that our intellectual property needs to be extracted from or undervalued.",
        purpose: "Opens the stewardship vs. extraction conversation with a provocative, values-clear position statement. Gets saves and shares from the target audience.",
      },
      {
        number: 2,
        title: "The Distinction",
        category: "Thought Leadership",
        hook: "The difference between protecting your IP and hoarding it is the same difference between building a home and building a fortress.",
        purpose: "Addresses the common objection that IP protection is selfish. Repositions protection as an act of stewardship, not gatekeeping.",
      },
      {
        number: 3,
        title: "Bridge from Street Data",
        category: "Personal Story",
        hook: "Street Data taught me that what is measurable is not the same as what is valuable.",
        purpose: "Uses your existing credibility and book audience to introduce the ISL concept. Leverages social proof you already have.",
      },
      {
        number: 4,
        title: "The DEI Diaspora",
        category: "Educational",
        hook: "28,696 nonprofit jobs were cut in 2025. That number is not a statistic; it is a community of practitioners with decades of knowledge and no platform to share it.",
        purpose: "Addresses the audience's lived experience directly. Creates recognition and emotional resonance. Drives traffic to the lead magnet.",
      },
      {
        number: 5,
        title: "Framework Overview",
        category: "Educational",
        hook: "The 7 layers of your IP: most practitioners have mapped maybe 2 of them.",
        purpose: "Carousel or text post that previews the audit framework. Demonstrates the depth of the ISL approach. Best-performing content type for your audience.",
      },
      {
        number: 6,
        title: "Lead Magnet Offer",
        category: "Community & CTA",
        hook: "Free: The 7-Layer IP Architecture Audit. Nine pages. Zero fluff. Download link in comments.",
        purpose: "Direct opt-in driver. Clean, simple, and repeatable. Run once per month minimum.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // ROADMAP (Day-by-day, Weeks 1–7)
  // -------------------------------------------------------------------------
  roadmap: {
    weeks: [
      {
        week: 1,
        dateRange: "Feb 24 – Feb 28",
        phase: "M1",
        title: "Foundation Setup",
        yourTime: "45 min voice session + async approvals",
        days: [
          {
            day: "Monday",
            date: "Feb 24",
            weDoItems: [
              "Project kickoff: review scope, confirm all assets received",
              "Set up Kajabi account, configure payment processing",
              "Begin landing page design (free tier: lead magnet offer)",
              "Configure email delivery system for lead magnet PDF",
              "Draft landing page copy (above the fold, headline, subheadline)",
            ],
            youDo: [
              "Send final version of 7-Layer IP Architecture Audit PDF",
              "Confirm Kajabi login credentials",
            ],
          },
          {
            day: "Tuesday",
            date: "Feb 25",
            weDoItems: [
              "Complete landing page design: first draft",
              "Build email opt-in form and connect to delivery sequence",
              "Write Email #1 (immediate delivery confirmation) and Email #2 (Day 3 follow-up)",
              "Begin drafting 3 LinkedIn post scripts (Weeks 1-2 content)",
            ],
            youDo: [],
          },
          {
            day: "Wednesday",
            date: "Feb 26",
            weDoItems: [
              "Landing page first draft complete, send for review",
              "Write Email #3 (Day 5 - stewardship vs. extraction distinction)",
              "Write LinkedIn article draft (the flagship thought leadership piece)",
              "Set up analytics tracking on landing page",
            ],
            youDo: [
              "Review landing page first draft, note any feedback (async, 20 min)",
            ],
          },
          {
            day: "Thursday",
            date: "Feb 27",
            weDoItems: [
              "Revise landing page based on feedback",
              "Record voice session: 30 min calibration for narration quality",
              "Draft 3 social clip scripts (short-form versions of article content)",
              "Begin production on Social Clip #1",
            ],
            youDo: [
              "30 min voice recording session: read provided scripts at your natural pace. We handle all editing and production.",
            ],
          },
          {
            day: "Friday",
            date: "Feb 28",
            weDoItems: [
              "Complete Social Clip #1 production, send for review",
              "Finalize email sequence (Emails 1-3), send for review",
              "Week 1 internal review: confirm all assets on track",
              "Prepare Week 2 production brief",
            ],
            youDo: [
              "Review Social Clip #1 and Email sequence draft (async, 20–30 min)",
            ],
          },
        ],
      },
      {
        week: 2,
        dateRange: "Mar 3 – Mar 7",
        phase: "M1",
        title: "Proof of Concept: Launch & Validate",
        yourTime: "Final approval sessions + Proof Gate call",
        days: [
          {
            day: "Monday",
            date: "Mar 3",
            weDoItems: [
              "Apply all landing page revisions: final polish",
              "Complete Social Clips #2 and #3 production",
              "Finalize LinkedIn article: format for publish",
              "Set up LinkedIn scheduling for Week 2-3 posts",
            ],
            youDo: [],
          },
          {
            day: "Tuesday",
            date: "Mar 4",
            weDoItems: [
              "Full end-to-end test: opt-in → email delivery → PDF download → welcome sequence",
              "SEO meta configuration for landing page",
              "Final review pass on all M1 deliverables: internal QC",
              "Prepare M1 Proof Gate review package for your review",
            ],
            youDo: [
              "Review and approve Social Clips #2 and #3 (async, 20 min)",
            ],
          },
          {
            day: "Wednesday",
            date: "Mar 5",
            weDoItems: [
              "Make any final revisions from your review",
              "LinkedIn article: final edit and schedule for publish",
              "Confirm landing page is live and fully functional",
              "Pre-brief for Proof Gate call",
            ],
            youDo: [
              "30 min: Review and approve LinkedIn article draft",
              "15 min: Final review of all M1 deliverables (Proof Gate review call)",
            ],
          },
          {
            day: "Thursday",
            date: "Mar 6",
            weDoItems: [
              "Landing page GOES LIVE",
              "LinkedIn article PUBLISHES",
              "Social Clip #1 goes live on LinkedIn",
              "Email sequence is active; real opt-ins begin flowing",
              "Monitor initial metrics (open rates, opt-in rate, link clicks)",
            ],
            youDo: [],
          },
          {
            day: "Friday",
            date: "Mar 7",
            weDoItems: [
              "First 24-hour metrics report, share with you",
              "M1 DELIVERY + PROOF GATE COMPLETE",
              "Brief M2 kickoff: course production begins Monday",
            ],
            youDo: [
              "Review M1 metrics report, approve M2 start (10 min)",
            ],
          },
        ],
      },
      {
        week: 3,
        dateRange: "Mar 10 – Mar 14",
        phase: "M2",
        title: "Course Build: Modules 1 & 2",
        yourTime: "2 hr narration recording session",
        days: [
          {
            day: "Monday",
            date: "Mar 10",
            weDoItems: [
              "M2 kickoff: confirm all lesson scripts, assets, and recording schedule",
              "Set up Kajabi course structure (5 modules, 25 lessons)",
              "Prepare recording scripts and notes for Module 1 narration session",
              "Begin Module 1 worksheet design",
            ],
            youDo: [],
          },
          {
            day: "Tuesday",
            date: "Mar 11",
            weDoItems: [
              "Narration session prep: send you the recording guide",
              "Complete Module 1 worksheet design, send for review",
              "Begin Module 2 worksheet design",
              "Set up production pipeline for lesson video assembly",
            ],
            youDo: [
              "2 hr narration recording session: Modules 1 & 2 lessons. We provide scripts, you record at your own pace. Breaks as needed.",
            ],
          },
          {
            day: "Wednesday",
            date: "Mar 12",
            weDoItems: [
              "Receive Module 1 + 2 recordings, begin production",
              "Edit, clean, and master audio for all Module 1 lessons",
              "Produce visual layer for Module 1 lessons (professional video assets)",
              "Caption and format Module 1 videos for Kajabi delivery",
            ],
            youDo: [],
          },
          {
            day: "Thursday",
            date: "Mar 13",
            weDoItems: [
              "Complete Module 1 video production: all 5 lessons",
              "Begin Module 2 audio editing and video production",
              "Upload Module 1 to Kajabi, test playback and navigation",
              "Module 1 companion reflection guide: draft",
            ],
            youDo: [],
          },
          {
            day: "Friday",
            date: "Mar 14",
            weDoItems: [
              "Module 2 videos complete, upload to Kajabi",
              "Send Module 1 + 2 video batch to you for review (private links)",
              "Week 3 internal review: confirm production is on schedule",
            ],
            youDo: [
              "Review Module 1 & 2 lesson videos (private links), async, ~45 min",
            ],
          },
        ],
      },
      {
        week: 4,
        dateRange: "Mar 17 – Mar 21",
        phase: "M2",
        title: "Course Build: Modules 3, 4 & 5",
        yourTime: "2 hr narration session + batch video review",
        days: [
          {
            day: "Monday",
            date: "Mar 17",
            weDoItems: [
              "Incorporate Module 1 + 2 revisions from your review",
              "Prepare recording scripts for Modules 3 + 4",
              "Module 3 and 4 worksheet design: begin",
            ],
            youDo: [],
          },
          {
            day: "Tuesday",
            date: "Mar 18",
            weDoItems: [
              "Narration session prep: Modules 3, 4, and 5 scripts",
              "Module 3 + 4 companion reflection guide drafts",
            ],
            youDo: [
              "2 hr narration recording session: Modules 3, 4 & 5 (batched). Same format as Week 3.",
            ],
          },
          {
            day: "Wednesday",
            date: "Mar 19",
            weDoItems: [
              "Receive Modules 3-5 recordings, begin production",
              "Edit, clean, and master audio: Modules 3 & 4",
              "Produce visual layer for Modules 3 & 4",
              "Caption and format Modules 3 & 4 for Kajabi",
            ],
            youDo: [],
          },
          {
            day: "Thursday",
            date: "Mar 20",
            weDoItems: [
              "Complete Module 3 + 4 video production",
              "Begin Module 5 audio and visual production",
              "Upload Modules 3 + 4 to Kajabi",
              "Finalize all 5 module worksheets, send for batch review",
            ],
            youDo: [
              "1 hr: Review Modules 3 & 4 videos (batch, private links)",
              "1 hr: Review all 5 module worksheets and companion guides",
            ],
          },
          {
            day: "Friday",
            date: "Mar 21",
            weDoItems: [
              "Module 5 video production complete",
              "Upload Module 5 to Kajabi",
              "Begin 90-second course trailer production",
              "Incorporate worksheet revisions from your review",
            ],
            youDo: [],
          },
        ],
      },
      {
        week: 5,
        dateRange: "Mar 24 – Mar 28",
        phase: "M2",
        title: "Course Complete: Full Test & Proof Gate",
        yourTime: "1 hr course walkthrough + 30 min trailer review + 30 min Proof Gate call",
        days: [
          {
            day: "Monday",
            date: "Mar 24",
            weDoItems: [
              "Complete course trailer, send for review",
              "Configure Stripe payment checkout",
              "Build full Kajabi purchase flow (checkout to course access to onboarding email)",
              "Set up post-purchase email sequence (Emails 4-8 in welcome/nurture sequence)",
            ],
            youDo: [],
          },
          {
            day: "Tuesday",
            date: "Mar 25",
            weDoItems: [
              "Full Kajabi course QC: test every lesson, every link, every download",
              "Test purchase flow end-to-end (sandbox mode)",
              "Incorporate any final revisions from Module 5 review",
              "Prepare M2 Proof Gate review package",
            ],
            youDo: [
              "30 min: Review and approve course trailer",
            ],
          },
          {
            day: "Wednesday",
            date: "Mar 26",
            weDoItems: [
              "Apply course trailer revisions",
              "Kajabi final configuration: branding, welcome video, navigation",
              "Prepare complete student walkthrough guide for your Proof Gate session",
            ],
            youDo: [
              "1 hr: Walk through the full course as a student: log in, navigate, play lessons, download worksheets",
            ],
          },
          {
            day: "Thursday",
            date: "Mar 27",
            weDoItems: [
              "Apply all Proof Gate revisions from your walkthrough",
              "Complete test purchase flow, confirm Stripe integration is live",
              "M2 internal sign-off: all deliverables confirmed",
            ],
            youDo: [
              "30 min: M2 Proof Gate review call, confirm everything looks, sounds, and feels right",
            ],
          },
          {
            day: "Friday",
            date: "Mar 28",
            weDoItems: [
              "M2 DELIVERY COMPLETE",
              "Full course is live on Kajabi and available for purchase",
              "Brief M3 kickoff: marketing engine begins Monday",
            ],
            youDo: [],
          },
        ],
      },
      {
        week: 6,
        dateRange: "Mar 31 – Apr 4",
        phase: "M3",
        title: "Marketing Engine: Nurture Sequences & Content",
        yourTime: "Async content approvals",
        days: [
          {
            day: "Monday",
            date: "Mar 31",
            weDoItems: [
              "M3 kickoff: confirm marketing assets and content calendar",
              "Write Emails 9–12 (nurture + launch sequence)",
              "Build LinkedIn content calendar for 8 weeks post-launch",
              "Begin Social Clip #4 and #5 production (promotion-focused)",
            ],
            youDo: [],
          },
          {
            day: "Tuesday",
            date: "Apr 1",
            weDoItems: [
              "Complete Email sequence 9-12, send for review",
              "LinkedIn content calendar first draft, send for review",
              "Social Clip #4 production complete, send for review",
            ],
            youDo: [
              "1 hr: Review and approve nurture email sequence (Emails 9–12)",
            ],
          },
          {
            day: "Wednesday",
            date: "Apr 2",
            weDoItems: [
              "Apply email revisions",
              "Begin cohort application and waitlist page build",
              "Social Clip #5 production complete",
            ],
            youDo: [
              "1 hr: Review LinkedIn content calendar, confirm voice, topics, cadence",
            ],
          },
          {
            day: "Thursday",
            date: "Apr 3",
            weDoItems: [
              "Cohort application page complete, send for review",
              "LinkedIn schedule configured: first 4 weeks of posts queued",
              "KPI dashboard setup: connect all tracking (email, landing page, course, LinkedIn)",
            ],
            youDo: [
              "30 min: Review Social Clips #4 and #5 (async)",
            ],
          },
          {
            day: "Friday",
            date: "Apr 4",
            weDoItems: [
              "Apply Social Clip revisions",
              "Week 6 internal review: confirm M3 on track",
              "Prepare soft-launch email draft to existing audience",
            ],
            youDo: [
              "30 min: Review and approve cohort application page (async)",
            ],
          },
        ],
      },
      {
        week: 7,
        dateRange: "Apr 7 – Apr 11",
        phase: "M3",
        title: "Soft Launch: Full Funnel Live",
        yourTime: "Funnel walkthrough + Proof Gate call",
        days: [
          {
            day: "Monday",
            date: "Apr 7",
            weDoItems: [
              "All email sequences activated and tested end-to-end",
              "LinkedIn posts begin publishing on schedule",
              "Cohort application page goes live",
              "Soft-launch email to existing audience, finalize and schedule",
            ],
            youDo: [],
          },
          {
            day: "Tuesday",
            date: "Apr 8",
            weDoItems: [
              "SOFT LAUNCH EMAIL SENDS to existing audience",
              "Monitor early metrics: open rates, click-throughs, course visits",
              "Social Clips #4 and #5 publish on LinkedIn",
            ],
            youDo: [],
          },
          {
            day: "Wednesday",
            date: "Apr 9",
            weDoItems: [
              "Full funnel walkthrough prep: prepare student view for Proof Gate",
              "First 48-hour metrics summary ready",
            ],
            youDo: [
              "30 min: Full funnel walkthrough (opt-in to email to course to cohort application)",
              "30 min: M3 Proof Gate review call",
            ],
          },
          {
            day: "Thursday",
            date: "Apr 10",
            weDoItems: [
              "Apply any final M3 revisions from Proof Gate",
              "Confirm all systems are running cleanly",
              "Prepare M4 onboarding: retainer scope, monthly cadence, reporting format",
            ],
            youDo: [],
          },
          {
            day: "Friday",
            date: "Apr 11",
            weDoItems: [
              "M3 DELIVERY COMPLETE",
              "Full funnel is live: landing page to email to course to cohort",
              "M4 Ongoing Support begins Monday, April 14",
            ],
            youDo: [],
          },
        ],
      },
    ],
    totalYourTime:
      "~16 hours total across all 3 milestones, spread across 7 weeks. Your commitment is minimal; the impact is not.",
  },

  // -------------------------------------------------------------------------
  // MILESTONES
  // -------------------------------------------------------------------------
  milestones: [
    {
      id: 1,
      name: "Proof of Concept",
      dateRange: "February 24 – March 7, 2026",
      duration: "2 weeks",
      investment: "Coming Soon",
      summary:
        "Validate the offer with a live landing page and real email opt-ins before building the full course. At the end of 2 weeks, you will have a fully functional free-tier funnel, your first social content in market, and measurable proof that demand is real.",
      deliverables: [
        "Professional landing page with optimized conversion funnel (live at your domain)",
        "Automated email capture and lead magnet PDF delivery system",
        "3-email welcome sequence introducing the ISL framework",
        "LinkedIn flagship article (thought leadership piece)",
        "3 short-form social video clips for LinkedIn and Instagram",
        "Scheduling integration for 1:1 discovery call bookings",
        "Analytics dashboard configured: tracking opt-in rate, email opens, and traffic source",
      ],
      yourTime: {
        total: "~3 hours total",
        breakdown: [
          { activity: "Voice recording session (narration quality calibration)", duration: "30 min" },
          { activity: "Review and approve landing page design", duration: "45 min" },
          { activity: "Review and approve 3 social clip scripts", duration: "30 min" },
          { activity: "Review and approve LinkedIn article draft", duration: "30 min" },
          { activity: "Final review of all M1 deliverables", duration: "30 min" },
          { activity: "Proof Gate review call", duration: "15 min" },
        ],
      },
      proofGate:
        "Live landing page with email capture working, first opt-ins coming in from real traffic, and your approval on all content before anything publishes. Nothing goes live without your sign-off.",
      paymentSchedule: [
        { amount: "Coming Soon", date: "Monday, February 24", trigger: "Retainer: project start" },
        { amount: "Coming Soon", date: "Monday, March 3", trigger: "Week 2 start" },
        { amount: "Coming Soon", date: "Wednesday, March 5", trigger: "48 hours before delivery" },
        { amount: "Coming Soon", date: "Friday, March 7", trigger: "Upon delivery and your approval" },
      ],
      status: "available",
      valueAnchors: [
        { service: "Landing page design + development", marketRate: "$3,000 - Coming Soon" },
        { service: "Email copywriting (3-email sequence)", marketRate: "$1,500 - Coming Soon" },
        { service: "LinkedIn article + social clips", marketRate: "$2,000 - Coming Soon" },
        { service: "Analytics setup + configuration", marketRate: "$500 - Coming Soon" },
      ],
      totalMarketValue: "$7,000 - Coming Soon",
      scopeIncluded: [
        "Landing page design and development",
        "Email opt-in system and lead magnet delivery",
        "3-email welcome sequence",
        "LinkedIn article draft",
        "3 short-form video clips",
        "Analytics dashboard setup",
        "All revisions within scope",
      ],
      scopeNotIncluded: [
        "Kajabi subscription fees (your account)",
        "Domain registration or DNS changes",
        "Paid advertising or ad spend",
        "Additional video content beyond 3 clips",
      ],
    },
    {
      id: 2,
      name: "Course Platform",
      dateRange: "March 10 – March 28, 2026",
      duration: "3 weeks",
      investment: "Coming Soon",
      summary:
        "Build and launch the complete 5-module, 25-lesson course with professional production for every lesson. At the end of 3 weeks, you will have a fully purchasable course on Kajabi with your voice, your content, and a professional presentation worthy of your credentials.",
      deliverables: [
        "Full 5-module, 25-lesson video course, produced, captioned, and hosted on Kajabi",
        "Your voice, professionally produced: scripts provided, you record, we handle everything else",
        "Exercise worksheets with brand-aligned design for every module",
        "Module companion reflection guides (AI-powered, built to match your framework)",
        "Stripe checkout configured and tested",
        "90-second course trailer for use across all platforms",
        "Post-purchase onboarding email sequence",
        "Student walkthrough testing complete",
      ],
      yourTime: {
        total: "~8 hours total",
        breakdown: [
          { activity: "Record narration for Modules 1 & 2 (we provide scripts)", duration: "2 hrs" },
          { activity: "Record narration for Modules 3, 4 & 5 (batched session)", duration: "2 hrs" },
          { activity: "Review produced lesson videos (batch review, private links)", duration: "1 hr" },
          { activity: "Review worksheets and companion reflection guides", duration: "1 hr" },
          { activity: "Walk through full course as a student on Kajabi", duration: "1 hr" },
          { activity: "Review and approve course trailer", duration: "30 min" },
          { activity: "Proof Gate review call", duration: "30 min" },
        ],
      },
      proofGate:
        "Walk through the entire course as a student, complete a test purchase from start to finish, and confirm that every lesson sounds right, every download works, and the experience reflects the quality of your work.",
      paymentSchedule: [
        { amount: "Coming Soon", date: "Monday, March 10", trigger: "Retainer: M2 start" },
        { amount: "Coming Soon", date: "Monday, March 17", trigger: "Week 2: production midpoint" },
        { amount: "Coming Soon", date: "Monday, March 24", trigger: "Week 3: final production week" },
        { amount: "Coming Soon", date: "Friday, March 28", trigger: "Upon delivery and your approval" },
      ],
      status: "upcoming",
      valueAnchors: [
        { service: "Course video production (25 lessons)", marketRate: "$12,500 - Coming Soon" },
        { service: "Kajabi platform setup + configuration", marketRate: "$2,000 - Coming Soon" },
        { service: "Course trailer production", marketRate: "$1,500 - Coming Soon" },
        { service: "Payment processing integration", marketRate: "$500 - Coming Soon" },
      ],
      totalMarketValue: "$16,500 - Coming Soon",
      scopeIncluded: [
        "Full 25-lesson course production",
        "All video editing and post-production",
        "Kajabi course structure and branding",
        "Course trailer",
        "Stripe/payment integration",
        "Student onboarding flow",
      ],
      scopeNotIncluded: [
        "Kajabi monthly subscription",
        "Additional modules beyond the 5 specified",
        "Live webinar production",
        "Student support or community management",
      ],
    },
    {
      id: 3,
      name: "Marketing Engine",
      dateRange: "March 31 – April 11, 2026",
      duration: "2 weeks",
      investment: "Coming Soon",
      summary:
        "Activate the full marketing funnel: complete nurture email sequences, 8 weeks of LinkedIn content queued, and a cohort application page live for your first cohort announcement. At the end of M3, your entire ecosystem is live and running independently.",
      deliverables: [
        "Complete 12-email nurture and launch sequence (fully automated)",
        "8-week LinkedIn content calendar: 4 posts per week, brand voice matched",
        "3 additional short-form social video clips (promotion-focused)",
        "Cohort application and waitlist page on Kajabi",
        "Soft-launch email to your existing audience",
        "KPI dashboard: live tracking for all funnel stages",
        "SEO optimization for course and landing pages",
        "Full funnel test (opt-in to email to course to cohort application)",
      ],
      yourTime: {
        total: "~4 hours total",
        breakdown: [
          { activity: "Review and approve 12-email nurture sequence", duration: "1 hr" },
          { activity: "Review and approve LinkedIn content calendar", duration: "1 hr" },
          { activity: "Review 3 social video clips (async)", duration: "30 min" },
          { activity: "Review and approve cohort application page", duration: "30 min" },
          { activity: "Full funnel walkthrough (opt-in to email to course to cohort)", duration: "30 min" },
          { activity: "Proof Gate review call", duration: "30 min" },
        ],
      },
      proofGate:
        "See the complete funnel working end-to-end in real time: opt in, receive the PDF, move through the email sequence, visit the course page, and submit a cohort application, all in one session.",
      paymentSchedule: [
        { amount: "Coming Soon", date: "Monday, March 31", trigger: "Retainer: M3 start" },
        { amount: "Coming Soon", date: "Monday, April 7", trigger: "Week 2: final production" },
        { amount: "Coming Soon", date: "Wednesday, April 9", trigger: "48 hours before delivery" },
        { amount: "Coming Soon", date: "Friday, April 11", trigger: "Upon delivery and your approval" },
      ],
      status: "upcoming",
      valueAnchors: [
        { service: "Email nurture sequence (6 emails)", marketRate: "$3,000 - Coming Soon" },
        { service: "LinkedIn content strategy + 16 posts", marketRate: "$3,000 - Coming Soon" },
        { service: "Launch campaign execution", marketRate: "$2,000 - Coming Soon" },
        { service: "Funnel optimization", marketRate: "$1,000 - Coming Soon" },
      ],
      totalMarketValue: "$9,000 - Coming Soon",
      scopeIncluded: [
        "6-email nurture sequence",
        "2-email launch sequence",
        "16 LinkedIn posts (4 weeks)",
        "Launch campaign coordination",
        "Funnel testing and optimization",
        "Soft launch to warm list",
      ],
      scopeNotIncluded: [
        "Paid advertising budget",
        "PR or media outreach",
        "Podcast booking or guest appearances",
        "Cold outreach or lead purchasing",
      ],
    },
    {
      id: 4,
      name: "Ongoing Support",
      dateRange: "Begins Monday, April 14, 2026",
      duration: "Monthly retainer, cancel with 30 days' notice",
      investment: "Coming Soon",
      summary:
        "Keep the engine running and growing. Content, optimization, and a monthly strategy call so you can stay focused on teaching and consulting while the platform works in the background. Performance-based: if your course revenue crosses $5,000/month, the rate adjusts to $1,200/month, because that's a good problem to have.",
      deliverables: [
        "4 LinkedIn posts per week, brand voice matched, scheduled and published",
        "2 short-form social videos per month (lesson clips or promotional content)",
        "Monthly email sequence optimization: subject line testing, content refinement",
        "Monthly analytics report with clear recommendations (not just numbers)",
        "Cohort facilitation support when cohorts are active",
        "Platform maintenance: Kajabi, email system, payment processing",
        "Content repurposing across formats (LinkedIn to email to short-form video)",
        "Quarterly strategy call (60 min) to reassess direction and performance",
      ],
      yourTime: {
        total: "~1 hour/month",
        breakdown: [
          { activity: "Monthly strategy call", duration: "45 min" },
          { activity: "Async content approval (via email or voice memo)", duration: "15 min" },
        ],
      },
      proofGate:
        "Monthly metrics review: email list growth, open and click rates, course enrollment, cohort applications, LinkedIn engagement, and revenue. Full transparency, every month.",
      paymentSchedule: [
        { amount: "$850/month", date: "1st of each month", trigger: "Base rate: starting April 14" },
        { amount: "$1,200/month", date: "Adjusts at next billing cycle", trigger: "When course revenue exceeds $5,000/month, verified in monthly report" },
      ],
      status: "upcoming",
      valueAnchors: [
        { service: "LinkedIn ghostwriter (4 posts/week)", marketRate: "$1,500 - $3,000/mo" },
        { service: "Video production (2/month)", marketRate: "$1,000 - $2,000/mo" },
        { service: "Email optimization + monitoring", marketRate: "$500 - $1,000/mo" },
        { service: "Monthly analytics + strategy call", marketRate: "$500 - $1,000/mo" },
      ],
      totalMarketValue: "$3,500 - $7,000/mo",
      scopeIncluded: [
        "4 LinkedIn posts/week (16/month)",
        "2 short-form videos/month",
        "Email sequence monitoring",
        "Monthly analytics report",
        "Monthly 45-min strategy call",
        "Platform maintenance",
      ],
      scopeNotIncluded: [
        "New course module production",
        "Live event production",
        "Paid ad management",
        "Additional strategy calls beyond 1/month",
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // OFFERS (with expanded details)
  // -------------------------------------------------------------------------
  offers: [
    {
      tier: "Free",
      name: "7-Layer IP Architecture Audit",
      price: "Coming Soon",
      format: "9-page PDF + automated email welcome sequence",
      details: [
        "Professional landing page with optimized conversion funnel",
        "9-page IP Architecture Audit PDF, designed, ready to distribute",
        "Automated email capture and lead magnet delivery system",
        "Auto-response and download confirmation sequence",
        "3-email welcome sequence introducing the ISL framework",
        "Follow-up nurture emails driving toward course enrollment",
        "Scheduling integration for 1:1 discovery calls",
        "Ongoing newsletter cadence to stay top-of-mind with leads",
      ],
    },
    {
      tier: "Tier 1",
      name: "IP Stewardship Foundation",
      price: "Coming Soon",
      format: "5 modules, 25 lessons, self-guided, lifetime access",
      highlight: true,
      details: [
        "Full 5-module, 25-lesson video course, produced and hosted on Kajabi",
        "Your voice, professionally produced for every lesson",
        "Exercise worksheets with brand-aligned design for every module",
        "Module companion reflection guides built around your framework",
        "Pre-launch marketing: daily and biweekly social posts building anticipation",
        "Launch campaign: coordinated email and social distribution",
        "Dedicated 90-second course trailer",
        "Self-paced learning with lifetime access for every student",
      ],
    },
    {
      tier: "Tier 2",
      name: "IP Stewardship Lab Cohort",
      price: "Coming Soon",
      format: "8 weeks live, maximum 8 participants, 2 cohorts per year",
      details: [
        "8 weeks of live facilitated sessions (virtual)",
        "Maximum 8 participants per cohort: intimate, high-touch",
        "All self-guided course materials included",
        "Weekly assignments with personalized feedback",
        "Private community space for cohort members",
        "1:1 office hours: 30 minutes per participant per cohort",
        "Cohort-exclusive resources and templates",
        "Certificate of completion",
        "2 cohorts per year maximum: exclusivity by design",
      ],
    },
    {
      tier: "Tier 3",
      name: "IP Stewardship Intensive",
      price: "Coming Soon",
      format: "1:1 private engagement, maximum 5 clients per year",
      details: [
        "4 private 1:1 strategy sessions, 90 minutes each",
        "Complete IP audit and stewardship roadmap, custom to your body of work",
        "Custom moral center document, developed collaboratively",
        "Licensing strategy and community agreement drafting",
        "All course and cohort materials included",
        "Priority access to future ISL offerings",
        "90-day email support post-engagement",
        "Maximum 5 clients per year: exceptional access by design",
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // REVENUE PROJECTIONS
  // -------------------------------------------------------------------------
  revenue: [
    {
      stream: "Self-Guided Course",
      price: "Coming Soon",
      volume: "120–240 / year",
      annual: "Coming Soon",
    },
    {
      stream: "Cohort (2x / year)",
      price: "Coming Soon",
      volume: "16 seats total",
      annual: "Coming Soon",
    },
    {
      stream: "1:1 Intensive",
      price: "Coming Soon",
      volume: "5 clients / year",
      annual: "Coming Soon",
    },
    {
      stream: "Year 1 Conservative Total",
      price: "",
      volume: "",
      annual: "$136,900 - Coming Soon",
    },
  ],

  revenueNote:
    "Based on your stated capacity: maximum 2 cohorts per year, maximum 5 intensive clients. Nothing in these projections requires you to be more available than you've told us you want to be.",

  // -------------------------------------------------------------------------
  // INVESTMENT (with payment breakdowns)
  // -------------------------------------------------------------------------
  investment: {
    phases: [
      {
        name: "Milestone 1: Proof of Concept",
        total: "Coming Soon",
        dateRange: "February 24 – March 7, 2026",
        payments: [
          { amount: "Coming Soon", date: "Mon, Feb 24", trigger: "Retainer: project start" },
          { amount: "Coming Soon", date: "Mon, Mar 3", trigger: "Week 2 start" },
          { amount: "Coming Soon", date: "Wed, Mar 5", trigger: "48 hrs before delivery" },
          { amount: "Coming Soon", date: "Fri, Mar 7", trigger: "Upon delivery + approval" },
        ],
      },
      {
        name: "Milestone 2: Course Platform",
        total: "Coming Soon",
        dateRange: "March 10 – March 28, 2026",
        payments: [
          { amount: "Coming Soon", date: "Mon, Mar 10", trigger: "Retainer: M2 start" },
          { amount: "Coming Soon", date: "Mon, Mar 17", trigger: "Week 2: production midpoint" },
          { amount: "Coming Soon", date: "Mon, Mar 24", trigger: "Week 3: final production" },
          { amount: "Coming Soon", date: "Fri, Mar 28", trigger: "Upon delivery + approval" },
        ],
      },
      {
        name: "Milestone 3: Marketing Engine",
        total: "Coming Soon",
        dateRange: "March 31 – April 11, 2026",
        payments: [
          { amount: "Coming Soon", date: "Mon, Mar 31", trigger: "Retainer: M3 start" },
          { amount: "Coming Soon", date: "Mon, Apr 7", trigger: "Week 2 start" },
          { amount: "Coming Soon", date: "Wed, Apr 9", trigger: "48 hrs before delivery" },
          { amount: "Coming Soon", date: "Fri, Apr 11", trigger: "Upon delivery + approval" },
        ],
      },
    ],
    projectTotal: "Coming Soon",
    monthlyAfter: "$850/month (beginning April 14, 2026)",
    monthlyScaling:
      "Adjusts to $1,200/month when course revenue exceeds $5,000/month, confirmed in monthly report. Cancel with 30 days' notice at any time.",
  },

  // -------------------------------------------------------------------------
  // KPI DASHBOARD
  // -------------------------------------------------------------------------
  kpiDashboard: [
    {
      metric: "Email List Growth",
      description: "Total subscribers added via the landing page opt-in",
      target: "50+ in Month 1, 200+ by Month 3",
      frequency: "Daily",
    },
    {
      metric: "Landing Page Conversion Rate",
      description: "Percentage of landing page visitors who opt in for the audit PDF",
      target: "25-40% (industry standard for warm audiences)",
      frequency: "Weekly",
    },
    {
      metric: "Email Open Rate",
      description: "Percentage of subscribers who open each email in the welcome + nurture sequence",
      target: "40%+ (well above 20% industry average for knowledge creators)",
      frequency: "Per send",
    },
    {
      metric: "Email Click Rate",
      description: "Percentage who click the primary CTA in nurture emails",
      target: "5%+ per email",
      frequency: "Per send",
    },
    {
      metric: "Course Enrollment Rate",
      description: "Percentage of email subscribers who purchase the Foundation course",
      target: "2–5% conversion over 45-day nurture window",
      frequency: "Weekly",
    },
    {
      metric: "LinkedIn Follower Growth",
      description: "Net new LinkedIn followers each month",
      target: "100+ per month by Month 2",
      frequency: "Weekly",
    },
    {
      metric: "LinkedIn Post Engagement",
      description: "Average likes, comments, and shares per post",
      target: "Baseline in Week 1, 20% growth by Week 8",
      frequency: "Per post",
    },
    {
      metric: "Revenue Tracking",
      description: "Total course and cohort revenue, by product, by month",
      target: "$5,000+ MRR by Month 3 (triggers retainer rate review)",
      frequency: "Monthly",
    },
  ],

  // -------------------------------------------------------------------------
  // SOURCES
  // -------------------------------------------------------------------------
  sources: {
    nonprofitJobCuts: "Candid/GuideStar Nonprofit Employment Report, 2025",
    creatorEconomy: "Goldman Sachs, Creator Economy Report, 2024",
    onlineKnowledge: "Grand View Research, Online Education Market Analysis, 2024",
    kajabiData: "Kajabi Creator Census, 2024",
  },
};
