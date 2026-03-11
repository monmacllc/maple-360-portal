import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getClient, getAllClientSlugs } from '@/lib/clients';
import { ISL_CONFIG } from '@/lib/clients/jamila-dugan/config';
import { Mail, Linkedin, FileText, BarChart3, BookOpen, Video, Globe } from 'lucide-react';

type Props = { params: Promise<{ client: string; slug: string }> };

// Define the color palette
const T = {
  bgPrimary: "#FAF8F5", // warm cream
  bgSecondary: "#FFFFFF", // white cards
  teal: "#7ECBC4", // soft pastel teal (primary)
  tealLight: "#A8DDD8", // very light pastel teal (secondary)
  textPrimary: "#4A4A4A", // softer charcoal
  textSecondary: "#3D3D3D", // headings
  textMuted: "#8B8B8B", // muted text
  shadow: "rgba(0, 0, 0, 0.04)", // very subtle shadows
};

export async function generateStaticParams() {
  const params: { client: string; slug: string }[] = [];
  for (const clientSlug of getAllClientSlugs()) {
    const client = getClient(clientSlug);
    if (client) {
      for (const d of client.deliverables) {
        params.push({ client: clientSlug, slug: d.slug });
      }
    }
  }
  return params;
}

const DeliverableContent = ({ type, slug }: { type: string; slug: string }) => {
  switch (type) {
    case 'email_sequence':
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <Mail size={24} style={{ color: T.teal }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: T.textSecondary, margin: 0 }}>
              12-Email Nurture Sequence
            </h2>
          </div>
          
          <div style={{ display: 'grid', gap: 20 }}>
            {ISL_CONFIG.emails.map((email) => (
              <div key={email.number} style={{
                background: T.bgSecondary,
                padding: 25,
                borderRadius: 12,
                border: `1px solid ${T.tealLight}`,
                boxShadow: `0 2px 8px ${T.shadow}`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
                  <span style={{
                    background: T.teal,
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}>
                    Email #{email.number}
                  </span>
                  <span style={{
                    background: T.tealLight,
                    color: T.textSecondary,
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    textTransform: 'capitalize'
                  }}>
                    {email.sequence}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: T.textSecondary, marginBottom: 8 }}>
                  {email.subject}
                </h3>
                <p style={{ fontSize: '0.9rem', color: T.textMuted, marginBottom: 12, fontStyle: 'italic' }}>
                  {email.trigger}
                </p>
                <p style={{ fontSize: '1rem', color: T.textPrimary, lineHeight: 1.5 }}>
                  {email.preview}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'linkedin_content':
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <Linkedin size={24} style={{ color: T.teal }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: T.textSecondary, margin: 0 }}>
              LinkedIn Content Strategy
            </h2>
          </div>

          <div style={{
            background: T.bgSecondary,
            padding: 30,
            borderRadius: 12,
            marginBottom: 30,
            border: `1px solid ${T.tealLight}`
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: T.textSecondary, marginBottom: 20 }}>
              Growth Targets & Weekly Plan
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              <div>
                <h4 style={{ color: T.teal, fontSize: '1rem', marginBottom: 8 }}>Current State</h4>
                <p style={{ color: T.textMuted, fontSize: '0.9rem', margin: 0 }}>
                  {ISL_CONFIG.linkedinStrategy.currentAudit.followers} followers
                </p>
                <p style={{ color: T.textMuted, fontSize: '0.9rem', margin: 0 }}>
                  {ISL_CONFIG.linkedinStrategy.currentAudit.avgPostEngagement} engagement
                </p>
              </div>
              <div>
                <h4 style={{ color: T.teal, fontSize: '1rem', marginBottom: 8 }}>12-Week Target</h4>
                <p style={{ color: T.textMuted, fontSize: '0.9rem', margin: 0 }}>
                  {ISL_CONFIG.linkedinStrategy.growthTargets.week12}
                </p>
                <p style={{ color: T.textMuted, fontSize: '0.9rem', margin: 0 }}>
                  3-5% engagement rate
                </p>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: T.textSecondary, marginBottom: 20 }}>
            Sample Posts
          </h3>
          <div style={{ display: 'grid', gap: 20 }}>
            {ISL_CONFIG.linkedinStrategy.samplePosts.map((post) => (
              <div key={post.number} style={{
                background: T.bgSecondary,
                padding: 25,
                borderRadius: 12,
                border: `1px solid ${T.tealLight}`,
                boxShadow: `0 2px 8px ${T.shadow}`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 15 }}>
                  <span style={{
                    background: T.teal,
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}>
                    Post #{post.number}
                  </span>
                  <span style={{
                    background: T.tealLight,
                    color: T.textSecondary,
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: '0.8rem'
                  }}>
                    {post.category}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.textSecondary, marginBottom: 8 }}>
                  {post.title}
                </h4>
                <p style={{ fontSize: '1rem', color: T.textPrimary, lineHeight: 1.6, marginBottom: 12 }}>
                  "{post.hook}"
                </p>
                <p style={{ fontSize: '0.9rem', color: T.textMuted, lineHeight: 1.5 }}>
                  {post.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'module_1':
      const module1 = ISL_CONFIG.courseModules[0];
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <BookOpen size={24} style={{ color: T.teal }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: T.textSecondary, margin: 0 }}>
              {module1.title}: {module1.subtitle}
            </h2>
          </div>

          <div style={{
            background: T.tealLight,
            padding: 20,
            borderRadius: 12,
            marginBottom: 30
          }}>
            <p style={{ fontSize: '1rem', color: T.textPrimary, lineHeight: 1.6, margin: 0 }}>
              <strong>Theme:</strong> {module1.theme}
            </p>
            <p style={{ fontSize: '0.9rem', color: T.textMuted, margin: '8px 0 0', fontWeight: 500 }}>
              Estimated Runtime: {module1.estimatedRuntime}
            </p>
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: T.textSecondary, marginBottom: 20 }}>
            Lesson Breakdown
          </h3>
          <div style={{ display: 'grid', gap: 20 }}>
            {module1.lessons.map((lesson, index) => (
              <div key={lesson.id} style={{
                background: T.bgSecondary,
                padding: 25,
                borderRadius: 12,
                border: `1px solid ${T.tealLight}`,
                boxShadow: `0 2px 8px ${T.shadow}`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 15 }}>
                  <span style={{
                    background: T.teal,
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '50%',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {index + 1}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: T.textMuted }}>
                    {lesson.duration}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.textSecondary, marginBottom: 12 }}>
                  {lesson.title}
                </h4>
                <div>
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: T.textMuted, marginBottom: 8 }}>
                    Learning Objectives:
                  </h5>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {lesson.objectives.map((objective, i) => (
                      <li key={i} style={{ fontSize: '0.9rem', color: T.textPrimary, lineHeight: 1.5, marginBottom: 4 }}>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'site_audit':
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <FileText size={24} style={{ color: T.teal }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: T.textSecondary, margin: 0 }}>
              7-Layer IP Architecture Audit
            </h2>
          </div>

          <div style={{
            background: T.bgSecondary,
            padding: 30,
            borderRadius: 12,
            border: `1px solid ${T.tealLight}`,
            marginBottom: 30
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: T.textSecondary, marginBottom: 20 }}>
              Audit Framework Overview
            </h3>
            <p style={{ fontSize: '1rem', color: T.textPrimary, lineHeight: 1.6 }}>
              The 7-Layer IP Architecture Audit is a comprehensive framework designed to help practitioners identify, map, and protect their intellectual property across all dimensions. This 9-page guide provides a systematic approach to uncovering hidden IP assets and establishing stewardship practices.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            <div style={{
              background: T.bgSecondary,
              padding: 25,
              borderRadius: 12,
              border: `1px solid ${T.tealLight}`
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.textSecondary, marginBottom: 12 }}>
                Purpose
              </h4>
              <p style={{ fontSize: '0.9rem', color: T.textPrimary, lineHeight: 1.5 }}>
                Identify the full scope of your intellectual property before attempting to protect or share it. Most practitioners have mapped maybe 2 of the 7 layers.
              </p>
            </div>
            
            <div style={{
              background: T.bgSecondary,
              padding: 25,
              borderRadius: 12,
              border: `1px solid ${T.tealLight}`
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.textSecondary, marginBottom: 12 }}>
                Application
              </h4>
              <p style={{ fontSize: '0.9rem', color: T.textPrimary, lineHeight: 1.5 }}>
                Use as a diagnostic tool, not a checklist. Surface hidden IP assets you may not have recognized as valuable and establish protection priorities.
              </p>
            </div>
            
            <div style={{
              background: T.bgSecondary,
              padding: 25,
              borderRadius: 12,
              border: `1px solid ${T.tealLight}`
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.textSecondary, marginBottom: 12 }}>
                Outcome
              </h4>
              <p style={{ fontSize: '0.9rem', color: T.textPrimary, lineHeight: 1.5 }}>
                Complete IP inventory across all layers, identification of protection gaps, and a roadmap for stewardship implementation.
              </p>
            </div>
          </div>
        </div>
      );

    case 'kpi_dashboard':
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <BarChart3 size={24} style={{ color: T.teal }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: T.textSecondary, margin: 0 }}>
              KPI Dashboard & Metrics
            </h2>
          </div>

          <div style={{ display: 'grid', gap: 20 }}>
            {ISL_CONFIG.kpiDashboard.map((kpi, index) => (
              <div key={index} style={{
                background: T.bgSecondary,
                padding: 25,
                borderRadius: 12,
                border: `1px solid ${T.tealLight}`,
                boxShadow: `0 2px 8px ${T.shadow}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: T.textSecondary, margin: 0 }}>
                    {kpi.metric}
                  </h4>
                  <span style={{
                    background: T.tealLight,
                    color: T.textSecondary,
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: '0.8rem',
                    fontWeight: 500
                  }}>
                    {kpi.frequency}
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: T.textMuted, marginBottom: 12, lineHeight: 1.5 }}>
                  {kpi.description}
                </p>
                <div style={{
                  background: T.tealLight,
                  padding: 12,
                  borderRadius: 8,
                  border: `1px solid ${T.teal}`
                }}>
                  <strong style={{ color: T.textSecondary, fontSize: '0.9rem' }}>Target: </strong>
                  <span style={{ color: T.textPrimary, fontSize: '0.9rem' }}>{kpi.target}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'email_capture':
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <Mail size={24} style={{ color: T.teal }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: T.textSecondary, margin: 0 }}>
              Lead Magnet & Email Capture
            </h2>
          </div>

          <div style={{
            background: T.tealLight,
            padding: 30,
            borderRadius: 12,
            marginBottom: 30,
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: T.textSecondary, marginBottom: 15 }}>
              7-Layer IP Architecture Audit
            </h3>
            <p style={{ fontSize: '1.1rem', color: T.textPrimary, lineHeight: 1.6 }}>
              9-page PDF guide designed and ready to distribute. Professional landing page with optimized conversion funnel, automated delivery system, and welcome sequence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            <div style={{
              background: T.bgSecondary,
              padding: 25,
              borderRadius: 12,
              border: `1px solid ${T.tealLight}`
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.textSecondary, marginBottom: 12 }}>
                Conversion Strategy
              </h4>
              <p style={{ fontSize: '0.9rem', color: T.textPrimary, lineHeight: 1.5 }}>
                Target: 25-40% conversion rate for warm audiences. Professional landing page with clear value proposition and frictionless opt-in process.
              </p>
            </div>
            
            <div style={{
              background: T.bgSecondary,
              padding: 25,
              borderRadius: 12,
              border: `1px solid ${T.tealLight}`
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.textSecondary, marginBottom: 12 }}>
                Delivery System
              </h4>
              <p style={{ fontSize: '0.9rem', color: T.textPrimary, lineHeight: 1.5 }}>
                Automated email capture and PDF delivery, immediate download confirmation, and follow-up nurture sequence to drive course enrollment.
              </p>
            </div>
            
            <div style={{
              background: T.bgSecondary,
              padding: 25,
              borderRadius: 12,
              border: `1px solid ${T.tealLight}`
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.textSecondary, marginBottom: 12 }}>
                Growth Target
              </h4>
              <p style={{ fontSize: '0.9rem', color: T.textPrimary, lineHeight: 1.5 }}>
                50+ subscribers in Month 1, 200+ by Month 3. Foundation for building audience and driving course sales.
              </p>
            </div>
          </div>
        </div>
      );

    case 'social_clips':
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <Video size={24} style={{ color: T.teal }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: T.textSecondary, margin: 0 }}>
              Social Video Clips
            </h2>
          </div>

          <div style={{
            background: T.bgSecondary,
            padding: 30,
            borderRadius: 12,
            marginBottom: 30,
            border: `1px solid ${T.tealLight}`
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: T.textSecondary, marginBottom: 20 }}>
              Video Content Strategy
            </h3>
            <p style={{ fontSize: '1rem', color: T.textPrimary, lineHeight: 1.6 }}>
              Short-form video clips for LinkedIn and Instagram, professionally produced from your narration. Each clip is designed to showcase your expertise and drive traffic to the lead magnet and course.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 20 }}>
            {[
              {
                title: "IP Stewardship vs. Extraction",
                platform: "LinkedIn + Instagram",
                description: "Introduces the core philosophical distinction that makes ISL different. Plants the stewardship framework before any course mention.",
                duration: "60-90 seconds"
              },
              {
                title: "7-Layer Architecture Overview", 
                platform: "LinkedIn + Instagram",
                description: "Carousel-style video explaining the audit framework. Demonstrates depth and drives lead magnet downloads.",
                duration: "90-120 seconds"
              },
              {
                title: "Sacred, Trainable, Automatable",
                platform: "LinkedIn + Instagram", 
                description: "Preview of core STA framework from Module 4. Creates desire to learn the full system.",
                duration: "60-90 seconds"
              },
              {
                title: "Course Launch Announcement",
                platform: "LinkedIn + Instagram",
                description: "Professional announcement of course availability. Drives traffic to course page and cohort applications.",
                duration: "45-60 seconds"
              },
              {
                title: "Student Success Story",
                platform: "LinkedIn + Instagram",
                description: "Case study format showing transformation. Social proof through narrative without hype.",
                duration: "90-120 seconds"
              }
            ].map((clip, index) => (
              <div key={index} style={{
                background: T.bgSecondary,
                padding: 25,
                borderRadius: 12,
                border: `1px solid ${T.tealLight}`,
                boxShadow: `0 2px 8px ${T.shadow}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: T.textSecondary, margin: 0 }}>
                    {clip.title}
                  </h4>
                  <span style={{
                    background: T.tealLight,
                    color: T.textSecondary,
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: '0.8rem',
                    fontWeight: 500
                  }}>
                    {clip.duration}
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: T.textMuted, marginBottom: 12 }}>
                  <strong>Platforms:</strong> {clip.platform}
                </p>
                <p style={{ fontSize: '1rem', color: T.textPrimary, lineHeight: 1.5 }}>
                  {clip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'landing_page':
      return (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', marginBottom: 30 }}>
            <Globe size={24} style={{ color: T.teal }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: T.textSecondary, margin: 0 }}>
              Landing Page
            </h2>
          </div>

          <div style={{
            background: T.bgSecondary,
            padding: 40,
            borderRadius: 12,
            border: `1px solid ${T.tealLight}`,
            marginBottom: 30
          }}>
            <p style={{ fontSize: '1.1rem', color: T.textPrimary, lineHeight: 1.6, marginBottom: 30 }}>
              Professional course landing page with optimized conversion design, email capture sections, and pastel color palette matching your brand aesthetic.
            </p>

            <Link href={`/landing/jamila-dugan`} style={{
              display: 'inline-block',
              padding: '15px 30px',
              background: `linear-gradient(135deg, ${T.teal}, #6BB8B0)`,
              color: 'white',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.2s ease'
            }}>
              Open Landing Page
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            <div style={{
              background: T.bgSecondary,
              padding: 25,
              borderRadius: 12,
              border: `1px solid ${T.tealLight}`,
              textAlign: 'left'
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.textSecondary, marginBottom: 12 }}>
                Design Features
              </h4>
              <ul style={{ margin: 0, paddingLeft: 20, color: T.textPrimary, fontSize: '0.9rem' }}>
                <li>Soft pastel color palette</li>
                <li>Spa/wellness aesthetic</li>
                <li>Professional typography</li>
                <li>Mobile-responsive design</li>
              </ul>
            </div>
            
            <div style={{
              background: T.bgSecondary,
              padding: 25,
              borderRadius: 12,
              border: `1px solid ${T.tealLight}`,
              textAlign: 'left'
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.textSecondary, marginBottom: 12 }}>
                Email Captures
              </h4>
              <ul style={{ margin: 0, paddingLeft: 20, color: T.textPrimary, fontSize: '0.9rem' }}>
                <li>Free audit download (top)</li>
                <li>Course waitlist (bottom)</li>
                <li>Automated delivery system</li>
                <li>Nurture sequence integration</li>
              </ul>
            </div>
            
            <div style={{
              background: T.bgSecondary,
              padding: 25,
              borderRadius: 12,
              border: `1px solid ${T.tealLight}`,
              textAlign: 'left'
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.textSecondary, marginBottom: 12 }}>
                Content Sections
              </h4>
              <ul style={{ margin: 0, paddingLeft: 20, color: T.textPrimary, fontSize: '0.9rem' }}>
                <li>Course modules overview</li>
                <li>Four patterns framework</li>
                <li>Dr. Dugan bio section</li>
                <li>Call-to-action sections</li>
              </ul>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div style={{ textAlign: 'center', color: T.textMuted }}>
          <p>Content type not recognized: {type}</p>
        </div>
      );
  }
};

export default async function DeliverablePage({ params }: Props) {
  const { client: clientSlug, slug } = await params;
  const client = getClient(clientSlug);
  if (!client) notFound();

  const deliverable = client.deliverables.find(d => d.slug === slug);
  if (!deliverable) notFound();

  return (
    <div style={{ minHeight: '100vh', background: T.bgPrimary, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
        <Link href={`/portal/${clientSlug}`} style={{ 
          color: T.teal, 
          textDecoration: 'none', 
          fontSize: '0.9rem',
          fontWeight: 500
        }}>
          ← Back to Portal
        </Link>

        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 700, 
          color: T.textSecondary, 
          marginTop: '1rem',
          marginBottom: '0.5rem'
        }}>
          {deliverable.title}
        </h1>

        <p style={{ 
          fontSize: '1.1rem', 
          color: T.textMuted, 
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          {deliverable.description}
        </p>

        <div style={{
          background: T.bgSecondary,
          borderRadius: '12px',
          padding: '2.5rem',
          boxShadow: `0 4px 12px ${T.shadow}`,
          border: `1px solid ${T.tealLight}`
        }}>
          <DeliverableContent type={deliverable.type} slug={slug} />
        </div>
      </div>
    </div>
  );
}