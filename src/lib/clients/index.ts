export interface ClientConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  deliverables: {
    slug: string;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'review' | 'completed';
    type: 'landing_page' | 'email_sequence' | 'linkedin_content' | 'social_clips' | 'module' | 'site_audit' | 'kpi_dashboard' | 'email_capture';
  }[];
  milestones: {
    id: string;
    title: string;
    status: 'pending' | 'active' | 'completed';
    payment: number;
    deliverables: string[];
  }[];
}

export function getClient(slug: string): ClientConfig | null {
  return clients[slug] || null;
}

export function getAllClientSlugs(): string[] {
  return Object.keys(clients);
}

const clients: Record<string, ClientConfig> = {
  'vanessa-michele': {
    id: 'vanessa-michele',
    name: 'Vanessa Michele',
    slug: 'vanessa-michele',
    tagline: 'ZL Buy a House — Social Media Launch',
    colors: {
      primary: '#2ECCC4',
      secondary: '#4ECDC4',
      accent: '#FF6B6B',
      background: '#FAF8F5',
      text: '#2D3436',
    },
    deliverables: [
      { slug: 'brand_story', title: 'Brand Story Framework', description: 'North Star statement, content pillars, and voice guide', status: 'in-progress', type: 'module' },
      { slug: 'video_bank', title: '30-Video Content Bank', description: 'Scripted concepts with hooks and opening lines', status: 'pending', type: 'module' },
      { slug: 'launch_calendar', title: '12-Week Launch Calendar', description: 'Week-by-week plan from setup to full launch', status: 'pending', type: 'module' },
      { slug: 'email_sequence', title: '5-Email Welcome Sequence', description: 'Written and built — auto-triggers on waitlist join', status: 'pending', type: 'email_sequence' },
      { slug: 'seo_audit', title: 'Website SEO & AEO/GEO Audit', description: 'Keyword strategy and AI search optimization', status: 'pending', type: 'site_audit' },
      { slug: 'b2b_one_pager', title: 'B2B Sales One-Pager', description: 'For title companies, mortgage brokers, and insurers', status: 'pending', type: 'module' },
      { slug: 'social_setup', title: 'Social Platform Setup', description: 'TikTok, Instagram, Facebook — optimized and cross-linked', status: 'pending', type: 'module' },
      { slug: 'strategy_call', title: 'Strategy Walkthrough Call', description: '60-minute recorded session and summary doc', status: 'pending', type: 'module' },
    ],
    milestones: [
      { id: 'setup', title: 'Setup (Weeks 1–2)', status: 'active', payment: 2500, deliverables: ['brand_story', 'social_setup', 'strategy_call'] },
      { id: 'warmup', title: 'Warm-Up (Weeks 3–4)', status: 'pending', payment: 0, deliverables: ['video_bank', 'email_sequence'] },
      { id: 'reveal', title: 'Book Reveal (Weeks 5–8)', status: 'pending', payment: 0, deliverables: ['launch_calendar', 'seo_audit'] },
      { id: 'launch', title: 'Full Launch (Weeks 9–12)', status: 'pending', payment: 0, deliverables: ['b2b_one_pager'] },
    ],
  },
  'jamila-dugan': {
    id: 'jamila-dugan',
    name: 'Dr. Jamila Dugan',
    slug: 'jamila-dugan',
    tagline: 'IP Stewardship Lab',
    colors: {
      primary: '#2ECCC4',
      secondary: '#4ECDC4',
      accent: '#2ECCC4',
      background: '#FAF8F5',
      text: '#2D3436',
    },
    deliverables: [
      { slug: 'site_audit', title: '7-Layer IP Architecture Audit', description: 'Comprehensive audit of intellectual property across all seven layers', status: 'completed', type: 'site_audit' },
      { slug: 'landing_page', title: 'Product Landing Page', description: 'Public-facing landing page for the IP Stewardship Lab course', status: 'completed', type: 'landing_page' },
      { slug: 'kpi_dashboard', title: 'KPI Dashboard', description: 'Analytics and performance tracking dashboard', status: 'completed', type: 'kpi_dashboard' },
      { slug: 'email_capture', title: 'Email Capture System', description: 'Lead magnet and email opt-in integration', status: 'completed', type: 'email_capture' },
      { slug: 'module_1', title: 'Module 1: Stewardship Arrival', description: 'First course module with video lessons and materials', status: 'completed', type: 'module' },
      { slug: 'email_sequence', title: 'Email Nurture Sequence', description: '8-email welcome and nurture sequence', status: 'completed', type: 'email_sequence' },
      { slug: 'linkedin_content', title: 'LinkedIn Content Strategy', description: '20 LinkedIn posts and content calendar', status: 'completed', type: 'linkedin_content' },
      { slug: 'social_clips', title: 'Social Media Clips', description: 'Short-form video clips for social distribution', status: 'completed', type: 'social_clips' },
    ],
    milestones: [
      { id: 'start', title: 'Project Kickoff', status: 'completed', payment: 500, deliverables: ['site_audit'] },
      { id: 'm1', title: 'Milestone 1: Foundation', status: 'completed', payment: 500, deliverables: ['landing_page', 'kpi_dashboard', 'email_capture'] },
      { id: 'm2', title: 'Milestone 2: Content', status: 'completed', payment: 500, deliverables: ['module_1', 'email_sequence'] },
      { id: 'm3', title: 'Milestone 3: Distribution', status: 'completed', payment: 500, deliverables: ['linkedin_content', 'social_clips'] },
    ],
  },
};