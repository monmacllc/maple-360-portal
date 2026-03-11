"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Shield, Heart, Target, BookOpen } from "lucide-react";

// Design tokens for light teal+cream theme
const T = {
  bgPrimary: "#FAF8F5", // warm cream
  bgSecondary: "#FFFFFF", // white cards
  teal: "#2ECCC4", // primary teal
  tealLight: "#4ECDC4", // lighter teal
  tealVeryLight: "#E0F9F7", // very light teal for backgrounds
  textPrimary: "#2C3E50", // dark text
  textSecondary: "#5A6C7D", // medium text
  textLight: "#7A8B9C", // light text
  shadow: "rgba(0, 0, 0, 0.08)", // subtle shadows
  shadowMedium: "rgba(0, 0, 0, 0.15)",
};

export default function ISLCourseLanding() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    setIsSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: T.bgPrimary,
        color: T.textPrimary,
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        lineHeight: 1.6,
      }}
    >
      {/* Header */}
      <header style={{ padding: "20px", textAlign: "center", backgroundColor: T.bgSecondary, boxShadow: `0 2px 10px ${T.shadow}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "700", color: T.teal, margin: 0 }}>
            IP Stewardship Lab
          </h1>
          <p style={{ fontSize: "1.1rem", color: T.textSecondary, margin: "5px 0 0", fontWeight: "500" }}>
            A five-module course for educators and consultants
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{ 
            fontSize: "clamp(2.5rem, 6vw, 4rem)", 
            fontWeight: "800", 
            color: T.textPrimary, 
            margin: "0 0 20px",
            lineHeight: 1.1,
            letterSpacing: "-0.02em"
          }}>
            Transform Your Knowledge Into
            <br />
            <span style={{ color: T.teal }}>Protected, Shared Wisdom</span>
          </h2>
          
          <p style={{ 
            fontSize: "1.3rem", 
            color: T.textSecondary, 
            maxWidth: "700px", 
            margin: "0 auto 40px",
            fontWeight: "400"
          }}>
            Learn to protect, steward, and thoughtfully share your intellectual property 
            with the IP Stewardship Lab—where generosity is paired with clarity and stewardship.
          </p>

          {/* Coming Soon Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            background: T.tealVeryLight,
            color: T.teal,
            padding: "10px 24px",
            borderRadius: "50px",
            fontSize: "1rem",
            fontWeight: "600",
            marginBottom: "50px"
          }}>
            Coming Soon
          </div>

          {/* Value Props */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
            gap: "30px",
            marginTop: "60px"
          }}>
            {[
              { icon: <Shield size={24} />, title: "Protection", desc: "Safeguard your intellectual wealth with intention" },
              { icon: <Heart size={24} />, title: "Stewardship", desc: "Share your knowledge with integrity and purpose" },
              { icon: <Target size={24} />, title: "Discernment", desc: "Make clear decisions about what to share and when" }
            ].map((item, i) => (
              <div key={i} style={{
                background: T.bgSecondary,
                padding: "40px 30px",
                borderRadius: "20px",
                boxShadow: `0 10px 30px ${T.shadow}`,
                textAlign: "center"
              }}>
                <div style={{ color: T.teal, marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", margin: "0 0 10px", color: T.textPrimary }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: T.textSecondary, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About Dr. Jamila Dugan */}
        <section style={{ marginBottom: "80px" }}>
          <div style={{
            background: T.bgSecondary,
            borderRadius: "20px",
            padding: "50px",
            boxShadow: `0 20px 50px ${T.shadow}`,
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "40px",
            alignItems: "center",
            maxWidth: "900px",
            margin: "0 auto"
          }}>
            <div style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${T.teal}, ${T.tealLight})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "2rem",
              fontWeight: "700"
            }}>
              JD
            </div>
            <div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: "700", margin: "0 0 10px", color: T.textPrimary }}>
                Dr. Jamila Dugan, Ed.D.
              </h3>
              <p style={{ fontSize: "1.1rem", color: T.teal, fontWeight: "600", margin: "0 0 20px" }}>
                Founder and Leadership Coach, Author, Researcher
              </p>
              <p style={{ fontSize: "1rem", color: T.textSecondary, margin: 0, lineHeight: 1.7 }}>
                With 15+ years coaching school leaders in justice work, Dr. Dugan is the author of 'Equity Traps and Tropes' 
                and co-author of 'Street Data' (Corwin Press). Ed.D. UC Berkeley, national speaker, 
                and expert in transforming knowledge into protected, shared wisdom.
              </p>
            </div>
          </div>
        </section>

        {/* Course Modules */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "700", 
            textAlign: "center", 
            margin: "0 0 20px",
            color: T.textPrimary
          }}>
            Five Modules, 25 Lessons
          </h2>
          <p style={{ 
            fontSize: "1.1rem", 
            color: T.textSecondary, 
            textAlign: "center", 
            margin: "0 0 60px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            A comprehensive journey through intellectual property stewardship, 
            designed for justice-oriented practitioners.
          </p>

          <div style={{ display: "grid", gap: "20px" }}>
            {[
              {
                number: 1,
                title: "Naming What You Carry",
                subtitle: "Foundations of IP Stewardship",
                runtime: "15–18 min"
              },
              {
                number: 2,
                title: "Moral Center Codification",
                subtitle: "Grounding Your IP in Values", 
                runtime: "16–20 min"
              },
              {
                number: 3,
                title: "Architecture of Protection",
                subtitle: "Mapping, Documenting, and Holding Your IP",
                runtime: "18–22 min"
              },
              {
                number: 4,
                title: "Sacred, Trainable, Automatable",
                subtitle: "Deciding What to Share, What to License, What to Hold",
                runtime: "17–20 min"
              },
              {
                number: 5,
                title: "Stewardship in Action",
                subtitle: "Building Systems for Ongoing Protection and Sharing",
                runtime: "18–22 min"
              }
            ].map((module) => (
              <div key={module.number} style={{
                background: T.bgSecondary,
                padding: "30px 40px",
                borderRadius: "15px",
                boxShadow: `0 10px 25px ${T.shadow}`,
                display: "grid",
                gridTemplateColumns: "80px 1fr auto",
                gap: "20px",
                alignItems: "center"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: T.tealVeryLight,
                  color: T.teal,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  fontWeight: "700"
                }}>
                  {module.number}
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: "1.3rem", 
                    fontWeight: "700", 
                    margin: "0 0 5px", 
                    color: T.textPrimary 
                  }}>
                    {module.title}
                  </h4>
                  <p style={{ 
                    fontSize: "1rem", 
                    color: T.textSecondary, 
                    margin: 0 
                  }}>
                    {module.subtitle}
                  </p>
                </div>
                <div style={{
                  background: T.tealVeryLight,
                  color: T.teal,
                  padding: "5px 15px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  whiteSpace: "nowrap"
                }}>
                  {module.runtime}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Four Postures */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "700", 
            textAlign: "center", 
            margin: "0 0 20px",
            color: T.textPrimary
          }}>
            Four Patterns of IP Engagement
          </h2>
          <p style={{ 
            fontSize: "1.1rem", 
            color: T.textSecondary, 
            textAlign: "center", 
            margin: "0 0 60px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            Learn to identify and move beyond patterns that don't serve your values or your community.
          </p>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gap: "20px" 
          }}>
            {[
              { name: "Extraction", desc: "Taking without permission or attribution", color: "#E74C3C" },
              { name: "Hoarding", desc: "Withholding out of fear rather than discernment", color: "#F39C12" },
              { name: "Undiscerning Sharing", desc: "Giving freely without vetting recipients or recognizing value", color: "#9B59B6" },
              { name: "Stewardship", desc: "Protection paired with intentional sharing", color: T.teal }
            ].map((posture, i) => (
              <div key={i} style={{
                background: T.bgSecondary,
                padding: "30px 25px",
                borderRadius: "15px",
                boxShadow: `0 10px 25px ${T.shadow}`,
                textAlign: "center",
                borderTop: `4px solid ${posture.color}`
              }}>
                <h4 style={{ 
                  fontSize: "1.2rem", 
                  fontWeight: "700", 
                  margin: "0 0 15px", 
                  color: posture.color 
                }}>
                  {posture.name}
                </h4>
                <p style={{ 
                  fontSize: "0.95rem", 
                  color: T.textSecondary, 
                  margin: 0,
                  lineHeight: 1.6
                }}>
                  {posture.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Email Capture */}
        <section style={{ marginBottom: "80px" }}>
          <div style={{
            background: `linear-gradient(135deg, ${T.teal}, ${T.tealLight})`,
            padding: "60px 50px",
            borderRadius: "20px",
            textAlign: "center",
            color: "white",
            maxWidth: "800px",
            margin: "0 auto"
          }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: "700", margin: "0 0 20px" }}>
              Join the Waitlist
            </h2>
            <p style={{ fontSize: "1.1rem", margin: "0 0 40px", opacity: 0.9 }}>
              Be the first to know when the IP Stewardship Lab opens for enrollment.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} style={{ 
                display: "flex", 
                gap: "15px", 
                maxWidth: "400px", 
                margin: "0 auto",
                flexWrap: "wrap",
                justifyContent: "center"
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    flex: 1,
                    minWidth: "250px",
                    padding: "15px 20px",
                    borderRadius: "50px",
                    border: "none",
                    fontSize: "1rem",
                    outline: "none"
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: T.textPrimary,
                    color: "white",
                    border: "none",
                    padding: "15px 30px",
                    borderRadius: "50px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    whiteSpace: "nowrap"
                  }}
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <CheckCircle2 size={24} />
                <span style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                  Thank you! You're on the waitlist.
                </span>
              </div>
            )}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ 
        background: T.textPrimary, 
        color: "white", 
        padding: "40px 20px", 
        textAlign: "center" 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "700", margin: "0 0 10px" }}>
            IP Stewardship Lab
          </h3>
          <p style={{ opacity: 0.8, margin: 0 }}>
            Where generosity is paired with clarity and stewardship.
          </p>
        </div>
      </footer>
    </div>
  );
}