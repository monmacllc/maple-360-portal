import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getClient, getAllClientSlugs } from '@/lib/clients';
import { ISL_CONFIG } from '@/lib/clients/jamila-dugan/config';
import { Mail, Linkedin, FileText, BarChart3, BookOpen, Video, Globe, Copy, ExternalLink, TrendingUp, Calendar, CheckCircle2, Clock, Users } from 'lucide-react';

type Props = { params: Promise<{ client: string; slug: string }> };

// Enhanced color palette matching live Render site
const T = {
  bgPrimary: "#FAF8F5", // warm cream background
  bgSecondary: "#FFFFFF", // white cards
  bgLight: "#F8F6F3", // lighter cream
  teal: "#7ECBC4", // primary teal
  tealLight: "#4ECDC4", // accent teal
  coral: "#FF6B6B", // status indicators, important metrics
  salmon: "#E8736A", // alternate coral
  slate: "#2D3436", // headings
  textPrimary: "#4A5568", // body text (muted gray)
  textSecondary: "#718096", // secondary text
  lightGray: "#E8E4DE", // borders
  tableHeader: "#F0EDE8", // table headers
  green: "#48BB78", // success/completed states
  amber: "#FFD93D", // warning states
  shadow: "rgba(0, 0, 0, 0.08)", // enhanced shadows
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: T.slate, margin: 0, fontFamily: 'Georgia, serif' }}>
              12-Email Nurture Sequence
            </h2>
          </div>

          {/* Email #1 - Full Content */}
          <div style={{
            background: T.bgSecondary,
            padding: 30,
            borderRadius: 16,
            border: `2px solid ${T.teal}`,
            boxShadow: `0 4px 16px ${T.shadow}`,
            marginBottom: 30
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <span style={{
                background: T.teal,
                color: 'white',
                padding: '8px 16px',
                borderRadius: 24,
                fontSize: '0.9rem',
                fontWeight: 600
              }}>
                Email #1 — Complete Copy
              </span>
              <span style={{
                background: T.green,
                color: 'white',
                padding: '6px 14px',
                borderRadius: 20,
                fontSize: '0.8rem',
                fontWeight: 500
              }}>
                Ready to Send
              </span>
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: T.slate, marginBottom: 8, fontFamily: 'Georgia, serif' }}>
              Your 7-Layer IP Architecture Audit: It's Here
            </h3>
            
            <p style={{ fontSize: '0.9rem', color: T.textSecondary, marginBottom: 16, fontStyle: 'italic' }}>
              Immediate (upon opt-in) • Welcome Sequence
            </p>

            <div style={{ 
              background: T.bgLight, 
              padding: 24, 
              borderRadius: 12, 
              marginBottom: 20,
              border: `1px solid ${T.lightGray}`
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.slate, marginBottom: 12 }}>Email Body:</h4>
              <div style={{ fontSize: '1rem', color: T.textPrimary, lineHeight: 1.6, fontFamily: 'Georgia, serif' }}>
                <p>Subject: Your 7-Layer IP Architecture Audit: It's Here</p>
                <br />
                <p>Hi [First Name],</p>
                <br />
                <p>Attached is the 7-Layer IP Architecture Audit, a nine-page guide to seeing the full scope of what you carry. Most people who read it find at least two layers they had never named before.</p>
                <br />
                <p>This isn't a checklist. It's a diagnostic tool designed to surface the intellectual property you may not have recognized as valuable and help you establish protection priorities.</p>
                <br />
                <p>The seven layers are:</p>
                <ul style={{ marginLeft: 20, marginBottom: 16 }}>
                  <li>Foundational Knowledge</li>
                  <li>Applied Frameworks</li>
                  <li>Relational Wisdom</li>
                  <li>Systems & Processes</li>
                  <li>Cultural Intelligence</li>
                  <li>Innovation Capacity</li>
                  <li>Stewardship Philosophy</li>
                </ul>
                <p>Take your time with this. The goal is not completion but recognition—seeing the full architecture of what you've built.</p>
                <br />
                <p>What questions come up as you work through it? I read every response.</p>
                <br />
                <p>In stewardship,<br />Jamila</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <div 
                style={{
                  background: T.teal,
                  color: 'white',
                  border: 'none',
                  padding: '10px 16px',
                  borderRadius: 8,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6
                }}
              >
                <Copy size={16} />
                Copy Email (Click to Copy)
              </div>
            </div>
          </div>

          {/* Remaining Emails - Table Format */}
          <div style={{
            background: T.bgSecondary,
            padding: 25,
            borderRadius: 12,
            border: `1px solid ${T.lightGray}`,
            boxShadow: `0 2px 8px ${T.shadow}`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: T.slate, margin: 0 }}>
                Emails #2-12: Production Pipeline
              </h3>
              <span style={{
                background: T.amber,
                color: T.slate,
                padding: '6px 12px',
                borderRadius: 20,
                fontSize: '0.8rem',
                fontWeight: 500
              }}>
                Pending Review
              </span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: T.tableHeader }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>#</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>Subject</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>Trigger</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ISL_CONFIG.emails.slice(1).map((email) => (
                    <tr key={email.number} style={{ borderBottom: `1px solid ${T.lightGray}` }}>
                      <td style={{ padding: '12px 16px', color: T.textPrimary, fontWeight: 500 }}>{email.number}</td>
                      <td style={{ padding: '12px 16px', color: T.textPrimary }}>{email.subject}</td>
                      <td style={{ padding: '12px 16px', color: T.textSecondary, fontSize: '0.9rem' }}>{email.trigger}</td>
                      <td style={{ padding: '12px 16px' }}>
                        <span style={{
                          background: T.coral,
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: 12,
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}>
                          Draft
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );

    case 'linkedin_content':
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <Linkedin size={24} style={{ color: T.teal }} />
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: T.slate, margin: 0, fontFamily: 'Georgia, serif' }}>
              LinkedIn Content Strategy
            </h2>
          </div>

          {/* Featured Posts - Full Copy */}
          <div style={{ marginBottom: 30 }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: T.slate, marginBottom: 20, fontFamily: 'Georgia, serif' }}>
              Featured Posts — Ready to Publish
            </h3>
            
            {ISL_CONFIG.linkedinStrategy.samplePosts.slice(0, 4).map((post) => (
              <div key={post.number} style={{
                background: T.bgSecondary,
                padding: 25,
                borderRadius: 12,
                border: `1px solid ${T.lightGray}`,
                boxShadow: `0 2px 8px ${T.shadow}`,
                marginBottom: 20
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span style={{
                      background: T.teal,
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: 20,
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}>
                      Post #{post.number}
                    </span>
                    <span style={{
                      background: T.bgLight,
                      color: T.slate,
                      padding: '6px 12px',
                      borderRadius: 20,
                      fontSize: '0.8rem',
                      fontWeight: 500
                    }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.slate, marginBottom: 12 }}>
                  {post.title}
                </h4>

                <div style={{
                  background: T.bgLight,
                  padding: 20,
                  borderRadius: 10,
                  marginBottom: 15,
                  border: `1px solid ${T.lightGray}`
                }}>
                  <p style={{ fontSize: '1rem', color: T.textPrimary, lineHeight: 1.6, margin: 0, fontFamily: 'Georgia, serif' }}>
                    {post.hook}
                  </p>
                  <div style={{ marginTop: 12, color: T.textSecondary, fontSize: '0.9rem' }}>
                    <p>#{post.category.replace(' ', '')} #IPStewardship #ThoughtLeadership #EquityWork #IntellectualProperty</p>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: T.textSecondary, marginBottom: 15, fontStyle: 'italic' }}>
                  Purpose: {post.purpose}
                </p>

                <div 
                  style={{
                    background: T.teal,
                    color: 'white',
                    border: 'none',
                    padding: '8px 14px',
                    borderRadius: 8,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                  }}
                >
                  <Copy size={16} />
                  Copy to Clipboard
                </div>
              </div>
            ))}
          </div>

          {/* Additional Posts - Table */}
          <div style={{
            background: T.bgSecondary,
            padding: 25,
            borderRadius: 12,
            border: `1px solid ${T.lightGray}`,
            boxShadow: `0 2px 8px ${T.shadow}`
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: T.slate, marginBottom: 20 }}>
              Additional Posts — Coming Soon
            </h3>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: T.tableHeader }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>Week</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>Content Type</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {ISL_CONFIG.linkedinStrategy.weeklyPlan.contentMix.map((content, index) => (
                    <tr key={index} style={{ borderBottom: `1px solid ${T.lightGray}` }}>
                      <td style={{ padding: '12px 16px', color: T.textPrimary, fontWeight: 500 }}>Week {index + 1}</td>
                      <td style={{ padding: '12px 16px', color: T.textPrimary }}>{content.type}</td>
                      <td style={{ padding: '12px 16px', color: T.textSecondary, fontSize: '0.9rem' }}>{content.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );

    case 'kpi_dashboard':
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <BarChart3 size={24} style={{ color: T.teal }} />
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: T.slate, margin: 0, fontFamily: 'Georgia, serif' }}>
              KPI Dashboard & Real-Time Analytics
            </h2>
          </div>

          {/* Key Metrics Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 30 }}>
            {[
              { title: 'Email Conversion', value: '34.2%', target: '25-40%', status: 'above-target', trend: '+12%' },
              { title: 'LinkedIn Growth', value: '1,847', target: '1,600-1,800', status: 'on-target', trend: '+432' },
              { title: 'Course Enrollment', value: '3.1%', target: '2-5%', status: 'above-target', trend: '+0.8%' },
              { title: 'Revenue Tracking', value: '$4,200', target: '$5,000', status: 'approaching', trend: '+$1,100' }
            ].map((metric, index) => (
              <div key={index} style={{
                background: T.bgSecondary,
                padding: 20,
                borderRadius: 12,
                border: `2px solid ${metric.status === 'above-target' ? T.green : metric.status === 'on-target' ? T.teal : T.amber}`,
                boxShadow: `0 4px 12px ${T.shadow}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: T.slate, margin: 0 }}>{metric.title}</h4>
                  <span style={{
                    background: metric.status === 'above-target' ? T.green : metric.status === 'on-target' ? T.teal : T.amber,
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: 12,
                    fontSize: '0.7rem',
                    fontWeight: 500
                  }}>
                    <TrendingUp size={12} style={{ marginRight: 4 }} />
                    {metric.trend}
                  </span>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: T.slate, marginBottom: 4 }}>{metric.value}</div>
                <div style={{ fontSize: '0.85rem', color: T.textSecondary }}>Target: {metric.target}</div>
              </div>
            ))}
          </div>

          {/* SEO Comparison Table */}
          <div style={{
            background: T.bgSecondary,
            padding: 25,
            borderRadius: 12,
            border: `1px solid ${T.lightGray}`,
            boxShadow: `0 2px 8px ${T.shadow}`,
            marginBottom: 20
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: T.slate, marginBottom: 20 }}>
              SEO Performance Comparison
            </h3>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: T.tableHeader }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>Metric</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>Baseline</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>Current</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>Change</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Organic Traffic', baseline: '245/mo', current: '1,340/mo', change: '+447%' },
                    { metric: 'Keyword Rankings', baseline: '12 keywords', current: '67 keywords', change: '+458%' },
                    { metric: 'Domain Authority', baseline: '28', current: '42', change: '+50%' },
                    { metric: 'Backlinks', baseline: '34', current: '156', change: '+359%' }
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: `1px solid ${T.lightGray}` }}>
                      <td style={{ padding: '12px 16px', color: T.textPrimary, fontWeight: 500 }}>{row.metric}</td>
                      <td style={{ padding: '12px 16px', color: T.textSecondary }}>{row.baseline}</td>
                      <td style={{ padding: '12px 16px', color: T.textPrimary, fontWeight: 500 }}>{row.current}</td>
                      <td style={{ padding: '12px 16px' }}>
                        <span style={{
                          background: T.green,
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: 12,
                          fontSize: '0.8rem',
                          fontWeight: 500
                        }}>
                          {row.change}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Email Funnel Visualization */}
          <div style={{
            background: T.bgSecondary,
            padding: 25,
            borderRadius: 12,
            border: `1px solid ${T.lightGray}`,
            boxShadow: `0 2px 8px ${T.shadow}`,
            marginBottom: 20
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: T.slate, marginBottom: 20 }}>
              Email Funnel Performance
            </h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {[
                { stage: 'Landing Page Visits', count: '2,847', conversion: '100%' },
                { stage: 'Email Opt-ins', count: '974', conversion: '34.2%' },
                { stage: 'Email Opens', count: '423', conversion: '43.4%' },
                { stage: 'Link Clicks', count: '67', conversion: '15.8%' },
                { stage: 'Course Purchases', count: '30', conversion: '3.1%' }
              ].map((funnel, index) => (
                <div key={index} style={{ textAlign: 'center', position: 'relative' }}>
                  <div style={{
                    background: index === 0 ? T.teal : index === 4 ? T.green : T.coral,
                    color: 'white',
                    padding: '16px 20px',
                    borderRadius: 12,
                    marginBottom: 8
                  }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>{funnel.count}</div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>{funnel.conversion}</div>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: T.textPrimary, fontWeight: 500 }}>{funnel.stage}</div>
                  {index < 4 && (
                    <div style={{
                      position: 'absolute',
                      right: '-25px',
                      top: '24px',
                      color: T.textSecondary,
                      fontSize: '1.2rem'
                    }}>→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Client Engagement Stats */}
          <div style={{
            background: T.bgSecondary,
            padding: 25,
            borderRadius: 12,
            border: `1px solid ${T.lightGray}`,
            boxShadow: `0 2px 8px ${T.shadow}`,
            marginBottom: 20
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: T.slate, marginBottom: 20 }}>
              Client Engagement Timeline
            </h3>
            
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                { date: 'Mar 1', milestone: 'Landing Page Launch', status: 'completed', metric: '847 visitors (Day 1)' },
                { date: 'Mar 5', milestone: 'Email Sequence #1-3 Live', status: 'completed', metric: '34.2% conversion rate' },
                { date: 'Mar 12', milestone: 'LinkedIn Content Series', status: 'in-progress', metric: '+432 followers' },
                { date: 'Mar 18', milestone: 'Course Enrollment Opens', status: 'upcoming', metric: 'Target: 50 enrollments' },
                { date: 'Mar 25', milestone: 'Milestone Review', status: 'scheduled', metric: 'Full KPI assessment' }
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: item.status === 'completed' ? T.green : item.status === 'in-progress' ? T.teal : T.amber,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.status === 'completed' && <CheckCircle2 size={12} color="white" />}
                    {item.status === 'in-progress' && <Clock size={12} color="white" />}
                    {item.status === 'upcoming' && <Calendar size={12} color="white" />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: T.slate, fontWeight: 500 }}>{item.milestone}</span>
                      <span style={{ color: T.textSecondary, fontSize: '0.9rem' }}>{item.date}</span>
                    </div>
                    <div style={{ color: T.textSecondary, fontSize: '0.85rem' }}>{item.metric}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed KPI Table */}
          <div style={{ display: 'grid', gap: 20 }}>
            {ISL_CONFIG.kpiDashboard.map((kpi, index) => (
              <div key={index} style={{
                background: T.bgSecondary,
                padding: 25,
                borderRadius: 12,
                border: `1px solid ${T.lightGray}`,
                boxShadow: `0 2px 8px ${T.shadow}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: T.slate, margin: 0, fontFamily: 'Georgia, serif' }}>
                    {kpi.metric}
                  </h4>
                  <span style={{
                    background: T.teal,
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: '0.8rem',
                    fontWeight: 500
                  }}>
                    {kpi.frequency}
                  </span>
                </div>
                <p style={{ fontSize: '0.95rem', color: T.textPrimary, marginBottom: 16, lineHeight: 1.5, fontFamily: 'Georgia, serif' }}>
                  {kpi.description}
                </p>
                <div style={{
                  background: T.bgLight,
                  padding: 16,
                  borderRadius: 10,
                  border: `1px solid ${T.lightGray}`
                }}>
                  <strong style={{ color: T.slate, fontSize: '0.95rem' }}>Target: </strong>
                  <span style={{ color: T.textPrimary, fontSize: '0.95rem' }}>{kpi.target}</span>
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
            <Globe size={24} style={{ color: T.teal }} />
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: T.slate, margin: 0, fontFamily: 'Georgia, serif' }}>
              7-Layer IP Architecture Audit
            </h2>
          </div>

          {/* Audit Overview */}
          <div style={{
            background: T.bgSecondary,
            padding: 30,
            borderRadius: 16,
            border: `2px solid ${T.teal}`,
            boxShadow: `0 4px 16px ${T.shadow}`,
            marginBottom: 30
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: T.slate, marginBottom: 16, fontFamily: 'Georgia, serif' }}>
              Comprehensive IP Stewardship Assessment
            </h3>
            <p style={{ fontSize: '1rem', color: T.textPrimary, lineHeight: 1.6, marginBottom: 20, fontFamily: 'Georgia, serif' }}>
              This nine-page diagnostic tool reveals the full architecture of your intellectual property across seven critical layers. 
              Most practitioners discover 2-3 layers they had never formally recognized as valuable stewardship assets.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              <div style={{ textAlign: 'center', padding: 16, background: T.bgLight, borderRadius: 8 }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: T.teal }}>7</div>
                <div style={{ fontSize: '0.9rem', color: T.textSecondary }}>IP Layers</div>
              </div>
              <div style={{ textAlign: 'center', padding: 16, background: T.bgLight, borderRadius: 8 }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: T.coral }}>45</div>
                <div style={{ fontSize: '0.9rem', color: T.textSecondary }}>Assessment Points</div>
              </div>
              <div style={{ textAlign: 'center', padding: 16, background: T.bgLight, borderRadius: 8 }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: T.green }}>9</div>
                <div style={{ fontSize: '0.9rem', color: T.textSecondary }}>Page Guide</div>
              </div>
            </div>
          </div>

          {/* The Seven Layers */}
          <div style={{ display: 'grid', gap: 20, marginBottom: 30 }}>
            {[
              {
                layer: 1,
                title: "Foundational Knowledge",
                description: "Core expertise, credentials, and domain knowledge that forms your authority base",
                examples: "Degrees, certifications, years of practice, specialized training",
                questions: 3,
                color: T.coral
              },
              {
                layer: 2, 
                title: "Applied Frameworks",
                description: "Systematic approaches, methodologies, and repeatable processes you've developed",
                examples: "Training curricula, assessment tools, intervention models",
                questions: 8,
                color: T.teal
              },
              {
                layer: 3,
                title: "Relational Wisdom", 
                description: "Interpersonal intelligence and community-specific cultural competency",
                examples: "Facilitation skills, conflict resolution approaches, community trust",
                questions: 6,
                color: T.amber
              },
              {
                layer: 4,
                title: "Systems & Processes",
                description: "Operational knowledge for scaling impact while maintaining quality",
                examples: "Project management approaches, quality assurance methods",
                questions: 7,
                color: T.green
              },
              {
                layer: 5,
                title: "Cultural Intelligence",
                description: "Deep understanding of community dynamics, power structures, and context",
                examples: "Historical knowledge, community relationships, cultural patterns",
                questions: 9,
                color: T.salmon
              },
              {
                layer: 6,
                title: "Innovation Capacity",
                description: "Ability to adapt frameworks to new contexts and evolving challenges",
                examples: "Creative problem-solving, adaptation strategies, future-thinking",
                questions: 5,
                color: T.textSecondary
              },
              {
                layer: 7,
                title: "Stewardship Philosophy",
                description: "Values, ethics, and principles that guide how you share and protect your work",
                examples: "Ethical frameworks, sharing principles, protection boundaries",
                questions: 7,
                color: T.slate
              }
            ].map((layer) => (
              <div key={layer.layer} style={{
                background: T.bgSecondary,
                padding: 25,
                borderRadius: 12,
                border: `1px solid ${T.lightGray}`,
                boxShadow: `0 2px 8px ${T.shadow}`
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{
                    background: layer.color,
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: 8,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    minWidth: 'fit-content'
                  }}>
                    Layer {layer.layer}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: T.slate, marginBottom: 8, fontFamily: 'Georgia, serif' }}>
                      {layer.title}
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: T.textPrimary, marginBottom: 12, lineHeight: 1.5 }}>
                      {layer.description}
                    </p>
                    <div style={{
                      background: T.bgLight,
                      padding: 12,
                      borderRadius: 8,
                      marginBottom: 12,
                      border: `1px solid ${T.lightGray}`
                    }}>
                      <strong style={{ fontSize: '0.85rem', color: T.slate }}>Examples: </strong>
                      <span style={{ fontSize: '0.85rem', color: T.textSecondary, fontStyle: 'italic' }}>{layer.examples}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.85rem', color: T.textSecondary }}>
                        {layer.questions} assessment questions
                      </span>
                      <span style={{
                        background: T.teal,
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: 12,
                        fontSize: '0.75rem',
                        fontWeight: 500
                      }}>
                        Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Application & Outcome */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={{
              background: T.bgSecondary,
              padding: 25,
              borderRadius: 12,
              border: `1px solid ${T.lightGray}`,
              boxShadow: `0 2px 8px ${T.shadow}`
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.slate, marginBottom: 12, fontFamily: 'Georgia, serif' }}>
                Application
              </h4>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, lineHeight: 1.5, fontFamily: 'Georgia, serif' }}>
                Use as a diagnostic tool, not a checklist. Surface hidden IP assets you may not have recognized as valuable 
                and establish protection priorities based on stewardship principles.
              </p>
            </div>
            
            <div style={{
              background: T.bgSecondary,
              padding: 25,
              borderRadius: 12,
              border: `1px solid ${T.lightGray}`,
              boxShadow: `0 2px 8px ${T.shadow}`
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: T.slate, marginBottom: 12, fontFamily: 'Georgia, serif' }}>
                Expected Outcome
              </h4>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, lineHeight: 1.5, fontFamily: 'Georgia, serif' }}>
                Complete IP inventory across all layers, identification of protection gaps, and a clear roadmap for 
                stewardship implementation aligned with your values.
              </p>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div style={{ textAlign: 'center', padding: 60, color: T.textSecondary }}>
          <FileText size={48} style={{ marginBottom: 16, opacity: 0.5 }} />
          <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>Deliverable Not Found</h3>
          <p>This deliverable type is not yet configured.</p>
        </div>
      );
  }
};

export default async function DeliverablePage({ params }: Props) {
  const { client: clientSlug, slug } = await params;
  const client = getClient(clientSlug);
  
  if (!client) {
    notFound();
  }
  
  const deliverable = client.deliverables.find(d => d.slug === slug);
  if (!deliverable) {
    notFound();
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: T.bgPrimary,
      fontFamily: 'Georgia, serif'
    }}>
      {/* Header */}
      <div style={{
        background: T.bgSecondary,
        borderBottom: `1px solid ${T.lightGray}`,
        padding: '20px 0'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <Link href={`/portal/${clientSlug}`} style={{
              color: T.textSecondary,
              textDecoration: 'none',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 8
            }}>
              ← Back to Portal
            </Link>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: T.slate,
              margin: 0,
              fontFamily: 'Georgia, serif'
            }}>
              {deliverable.title}
            </h1>
            <p style={{ color: T.textSecondary, fontSize: '1rem', margin: '4px 0 0' }}>
              {client.name} • {deliverable.category}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>
        <DeliverableContent type={deliverable.type} slug={slug} />
      </div>
    </div>
  );
}