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