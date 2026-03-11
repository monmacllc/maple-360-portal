// =============================================================================
// VANESSA MICHELE CONFIG: ZL Buy a House — Social Media Launch
// Client portal configuration for Vanessa Michele
// Deal closed: March 11, 2026 | Setup: $2,500 | Monthly: $800/mo (Done For You)
// =============================================================================

export const VANESSA_CONFIG = {
  client: {
    name: 'Vanessa Michele',
    slug: 'vanessa-michele',
    tagline: 'ZL Buy a House — Social Media Launch',
    setupFee: 2500,
    monthlyRetainer: 800,
    tier: 'Done For You',
    stripeLink: 'https://buy.stripe.com/eVq14gfxfckX92t0s97bW00',
    startDate: '2026-03-11',
  },

  colors: {
    primary: '#2ECCC4',
    secondary: '#4ECDC4',
    accent: '#FF6B6B',
    background: '#FAF8F5',
    text: '#2D3436',
    teal: '#2ECCC4',
    coral: '#FF6B6B',
    cream: '#FAF8F5',
    slate: '#2D3436',
  },

  hero: {
    title: 'ZL Buy a House',
    subtitle: 'Social Media Launch Strategy',
    tagline: 'Where a mother\'s love becomes a movement — and a business.',
    proposalDate: 'March 11, 2026',
    callDate: 'March 11, 2026',
  },

  clientProfile: {
    name: 'Vanessa Michele',
    bio: 'Vanessa is a Sacramento-based mother, entrepreneur, and content creator. Her children\'s coloring book "ZL Buy a House" was born from her family\'s real estate journey — named for her daughters Zou and Liana. The book teaches children about homeownership through art, with a sweepstakes mechanic where kids draw their dream house to win.',
    daughters: ['Zou (younger, healthy)', 'Liana (older)'],
    contentStyle: 'Spontaneous family videos — Sacramento trips, nature moments, puppet shows. No AI avatars. Real life, real family.',
    website: 'In progress (Bulgarian designer via Tony Robbins network)',
    socialStatus: 'Rebuilding — Facebook restored, Instagram and TikTok to create',
    businessBackground: 'Trucking industry connections with $20K+ marketing budgets. Tony Robbins network. AREAA adjacent.',
  },

  book: {
    title: 'ZL Buy a House',
    premise: 'Children\'s coloring book teaching homeownership through family story and art',
    copies: '~60,000 arriving from China',
    cogs: 0.56, // per unit
    sweepstakesMechanic: 'Kids draw their dream house → upload → win prizes',
    drawDate: 'December 12, 2026 (Zou\'s birthday)',
    prizes: {
      first: '$1,000 travel voucher',
      second: '$500 × 2',
      third: '$200 × 10',
    },
    pricing: {
      b2c: { range: '$2–$3 for volume' },
      b2b: [
        { qty: '100–299', price: 10 },
        { qty: '300–499', price: 8.50 },
        { qty: '500–999', price: 7.50 },
        { qty: '1000+', price: 6.50 },
      ],
    },
  },

  contentPillars: [
    { id: 1, name: 'Family & Legacy', description: 'Zou, Liana, greenhouse, everyday moments — the love behind the book' },
    { id: 2, name: 'Entrepreneurial Mindset', description: 'Teaching kids that creation is normal and that business starts at home' },
    { id: 3, name: 'The Book Journey', description: 'Behind-the-scenes, page reveals, printing updates, launch milestones' },
    { id: 4, name: 'Health & Home', description: 'Nature, donkey milk, composted soil, homemade remedies — lifestyle authenticity' },
    { id: 5, name: 'Strength Over Circumstance', description: 'Real talk about creating instead of collapsing — the strength frame, not sympathy' },
    { id: 6, name: 'Real Estate & Business', description: 'The B2B opportunity — why title companies, agents, and lenders should bulk buy' },
    { id: 7, name: 'Nature & Motherhood', description: 'Earth as mother — connecting children to nature, seasonal content' },
  ],

  b2bTargets: [
    { type: 'Title Companies', pitch: 'Gifting 200+ books per quarter — branded closing gifts that stand out' },
    { type: 'Mortgage Brokers', pitch: 'Client appreciation + referral tool — teaching families they serve about homeownership' },
    { type: 'Insurance Agents', pitch: 'Homeowner education — pair with home insurance conversations' },
    { type: 'Real Estate Agents', pitch: 'Open house gift, buyer gift, referral generator — memorable and mission-aligned' },
    { type: 'Lenders / Banks', pitch: 'First-time homebuyer programs — educational gifts at pre-approval meetings' },
  ],

  milestones: [
    {
      id: 'setup',
      title: 'Setup',
      weeks: 'Weeks 1–2',
      status: 'active',
      description: 'Accounts configured, brand framework built, strategy call completed',
      deliverables: ['brand_story', 'social_setup', 'strategy_call'],
    },
    {
      id: 'warmup',
      title: 'Warm-Up',
      weeks: 'Weeks 3–4',
      status: 'pending',
      description: 'First posts live, waitlist landing page active, audience building begins',
      deliverables: ['video_bank', 'email_sequence'],
    },
    {
      id: 'reveal',
      title: 'Book Reveal',
      weeks: 'Weeks 5–8',
      status: 'pending',
      description: 'Content ramp, sweepstakes announced, pre-orders open, first B2B outreach',
      deliverables: ['launch_calendar', 'seo_audit'],
    },
    {
      id: 'launch',
      title: 'Full Launch',
      weeks: 'Weeks 9–12',
      status: 'pending',
      description: 'Sample books arrive, testimonials collected, Amazon listing, bulk B2B push',
      deliverables: ['b2b_one_pager'],
    },
  ],

  deliverables: {
    brand_story: {
      title: 'Brand Story Framework',
      status: 'in-progress',
      overview: 'Your North Star statement, seven content pillars, and complete voice guide. This is the foundation every piece of content is built on.',
      northStar: 'ZL Buy a House exists to show children — through their own family\'s story — that homeownership is possible, accessible, and worth dreaming about.',
      voiceGuide: {
        tone: 'Warm, strong, direct. Never pitying. Never salesy. Always human.',
        avoid: ['victimhood framing', 'corporate language', 'hashtag spam', 'performative positivity'],
        use: ['real moments', 'your daughters\' voices', 'the "why" behind the book', 'strength over circumstance'],
      },
    },
    video_bank: {
      title: '30-Video Content Bank',
      status: 'pending',
      overview: '30 scripted video concepts with hooks, opening lines, and content notes. Covers all seven pillars across TikTok, Instagram Reels, and Facebook.',
      productionNote: 'Vanessa records spontaneous family video → shares via Google Drive → MonMac mutes audio, adds music and AI voiceover (ElevenLabs voice clone), overlays narration. Style: cohesive weekly story arcs.',
    },
    launch_calendar: {
      title: '12-Week Launch Calendar',
      status: 'pending',
      overview: 'Week-by-week execution plan from setup to full launch. Each week has a theme, content focus, B2B action, and milestone check.',
      weeks: [
        { week: 1, theme: 'Setup & Foundation', focus: 'Accounts live, bio optimized, first intro post' },
        { week: 2, theme: 'Brand Introduction', focus: 'Brand story videos, content pillars established' },
        { week: 3, theme: 'Waitlist Launch', focus: 'Waitlist landing page live, email sequence triggered' },
        { week: 4, theme: 'Audience Building', focus: 'Consistent posting, first B2B outreach emails' },
        { week: 5, theme: 'Book Reveal', focus: 'Page reveals, printing progress content, sweepstakes teaser' },
        { week: 6, theme: 'Sweepstakes Launch', focus: 'Sweepstakes announced, UGC campaign begins' },
        { week: 7, theme: 'Pre-Orders Open', focus: 'Amazon listing prep, pre-order links live' },
        { week: 8, theme: 'B2B Push Phase 1', focus: 'First B2B meetings, one-pager in market' },
        { week: 9, theme: 'Books Arrive', focus: 'Unboxing content, testimonials from inner circle' },
        { week: 10, theme: 'Social Proof', focus: 'Reviews, UGC shares, community highlights' },
        { week: 11, theme: 'B2B Push Phase 2', focus: 'Second round B2B outreach, bulk order pipeline' },
        { week: 12, theme: 'Full Launch', focus: 'All channels firing, press push, Amazon live' },
      ],
    },
    email_sequence: {
      title: '5-Email Welcome Sequence',
      status: 'pending',
      overview: 'Auto-triggers when someone joins the waitlist. Builds anticipation, tells the family story, drives pre-orders and B2B conversations.',
      emails: [
        { number: 1, subject: 'You\'re on the list — here\'s why this book exists', goal: 'Story and connection. The Zou and Liana origin story. Welcome to the community.' },
        { number: 2, subject: 'What your child will do with this book', goal: 'Product walkthrough. The coloring mechanic, the dream house draw, the sweepstakes.' },
        { number: 3, subject: 'The business behind the book', goal: 'B2B education. How bulk orders work. Why this is a gift that serves your clients.' },
        { number: 4, subject: 'Meet the family (a short video)', goal: 'Humanize. Video embed from TikTok/Instagram. Vanessa + Zou + Liana.' },
        { number: 5, subject: 'Pre-orders open [DATE]', goal: 'CTA. Pre-order link, bulk order contact, sweepstakes reminder.' },
      ],
    },
    seo_audit: {
      title: 'Website SEO & AEO/GEO Audit',
      status: 'pending',
      overview: 'Full keyword strategy and AI search optimization for ZL Buy a House. Includes Reddit AEO play for real estate professional searches.',
      keyTargets: [
        '"innovative open house gifts" (AI search target — appear in ChatGPT/Claude answers)',
        '"children\'s book about buying a house"',
        '"real estate gifts for clients 2026"',
        '"homebuyer education book for kids"',
        '"bulk real estate closing gifts"',
      ],
      aeoPlay: 'Post in r/realtors, r/realestateinvesting with transparent Monmac-branded answers to "best client gifts for real estate agents" — seeds LLM citation for Vanessa\'s book.',
    },
    b2b_one_pager: {
      title: 'B2B Sales One-Pager',
      status: 'pending',
      overview: 'A single polished PDF for outreach to title companies, mortgage brokers, insurance agents, and realtors. Designed to be forwarded.',
      headline: 'Give Your Clients a Gift They\'ll Actually Keep',
      subhead: 'ZL Buy a House — the children\'s coloring book that teaches families about homeownership. Bulk pricing available. Custom cover options for branded orders.',
      sections: ['The Book', 'Who It\'s For', 'Bulk Pricing', 'Custom Branding Options', 'How to Order'],
    },
    social_setup: {
      title: 'Social Platform Setup',
      status: 'in-progress',
      overview: 'TikTok, Instagram, and Facebook — all optimized, bio-linked, cross-connected. Content style guide and first 5 posts drafted.',
      platforms: [
        { platform: 'TikTok', handle: '@zlbuyahouse (to create)', bio: 'Raising dreamers 🏡 | ZL Buy a House — available [DATE] | 🎨 Draw your dream home → win', status: 'pending' },
        { platform: 'Instagram', handle: '@zlbuyahouse (to create)', bio: 'Children\'s coloring book 📖 | Homeownership starts with a dream | Link for pre-orders ↓', status: 'pending' },
        { platform: 'Facebook', handle: 'Restored (rebuilding)', bio: 'ZL Buy a House — teaching children that homeownership is possible.', status: 'active' },
      ],
    },
    strategy_call: {
      title: 'Strategy Walkthrough Call',
      status: 'completed',
      overview: '60-minute recorded strategy session with Quan Zou. Covered the full launch plan, content production workflow, B2B outreach approach, and 12-week roadmap.',
      date: 'March 11, 2026',
      recordingNote: 'Recording and summary doc to be delivered to client folder.',
      keyDecisions: [
        'Done For You tier selected ($800/mo) — Vanessa wants minimum personal involvement',
        'Production flow: Vanessa records raw video → Google Drive → MonMac adds music + AI voice clone (ElevenLabs)',
        'B2B first: title companies as primary institutional buyer target',
        'No paid ads until organic brand is established (Weeks 5+)',
        'Sweepstakes draw date locked: December 12 (Zou\'s birthday)',
      ],
    },
  },

  revenue: {
    scenario: {
      conservative: { titleCos: 5, booksPerQtr: 200, qtrlyRevenue: 6500 },
      target: { titleCos: 10, booksPerMonth: 1000, monthlyRevenue: 6500 },
      stretch: { b2bAccounts: 25, booksPerMonth: 3000, monthlyRevenue: 19500 },
    },
    year1Target: '$1,000,000',
    breakEven: '10 title companies × 1,000 books/month × $6.50 = $65,000/mo gross',
  },
};

export type VanessaConfig = typeof VANESSA_CONFIG;
