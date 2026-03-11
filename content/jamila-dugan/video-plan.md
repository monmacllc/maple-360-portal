# IP Stewardship Lab — Video Production Plan
**Client:** Dr. Jamila Dugan | **Prepared by:** Maple 360 | **February 2026**

---

## Overview

This document governs all video production for the IP Stewardship Lab — course lessons, social clips, the course trailer, and ongoing monthly content through the M4 retainer. It covers production specifications, batch sequencing, timeline, quality control, and cost estimates for every asset type.

All video is produced by Maple 360's automated pipeline. Dr. Dugan's time commitment per video is zero beyond the initial script approval. Once she approves a script batch, the pipeline handles the rest.

---

## Production System

### Voice
- **Engine:** ElevenLabs (voice clone)
- **Voice:** Shayla — warm, soothing African-American female voice clone
- **Speed:** 0.80x (unhurried, reflective pacing appropriate for course content)
- **Model:** `eleven_multilingual_v2` (not monolingual — avoids high-pitched artifact)
- **Format:** MP3, then mixed into video by n8n pipeline

### B-Roll Imagery
- **Generator:** Gemini (image generation, prompt-engineered for ISL aesthetic)
- **Representation:** Diverse Black/POC subjects — educators, consultants, practitioners in reflective and dignified contexts. No productivity or performance imagery.
- **ISL color palette:** Warm cream (#FFF9F5 → #FDEEE6), pink #E8548C, cyan #4ECDC4, gold #FFD93D
- **Settings:** Indoor spaces (libraries, offices, studios), outdoor (sunlight through windows, quiet outdoor spaces), hands, writing, stillness
- **Fallback:** Dark textured frames when image generation is not suitable (e.g., abstract concepts)

### Render Engine
- **Tool:** Remotion (React-based video composition)
- **Compositions:** TitleCard (opening) + BRollScene (main content) + CaptionOverlay (TikTok-style synchronized captions)
- **Captions:** `@remotion/captions` with `createTikTokStyleCaptions()` — word-by-word highlighting, gold keyword color (`#FFD93D`), 110% scale on emphasis words
- **Typography:** Georgia serif for title cards, clean sans-serif for caption overlay
- **Animations:** All via `useCurrentFrame()` — no CSS transitions
- **Server:** Express port 3100 (hub/explainer/remotion-broll/)

### Output Formats
Every video is rendered in 3 formats:
| Format | Dimensions | Platform |
|--------|-----------|---------|
| TikTok / Reels / Shorts | 1080 × 1920 (9:16) | TikTok, Instagram Reels, YouTube Shorts |
| YouTube / LinkedIn | 1920 × 1080 (16:9) | YouTube, LinkedIn video, website embeds |
| Instagram Square | 1080 × 1080 (1:1) | Instagram posts, Facebook |

### Thumbnail
- Every video receives one thumbnail per video (16:9 format, JPEG)
- Gemini-powered frame selection: chooses highest quality frame from rendered video
- Text overlay: lesson title + ISL brand treatment
- Delivered alongside the 3 video formats

### Pipeline Flow
Script approved → ElevenLabs TTS (Shayla, 0.80x) → Gemini image gen per scene → Remotion render → FFmpeg 3-format resize → Gemini thumbnail selection → QC review → Delivery

**Estimated render time per lesson:** 3–5 minutes for a 2–4 minute lesson (ratio ~1:1 to 1.25:1)
**Pipeline cost per lesson:** $0.01–$0.11 (ElevenLabs TTS + Gemini image gen) — effectively negligible at this volume

---

## Asset Inventory

### Section 1: Course Videos (25 Lessons)

All course lessons follow the same structure: 45-second Stewardship Arrival (opener) through the lesson content. Each lesson is rendered in all 3 formats with thumbnail.

**Total course video runtime: ~83–100 minutes across 25 lessons**

---

#### Module 1: Naming What You Carry
*Subtitle: Foundations of IP Stewardship | Estimated Module Runtime: 15–18 minutes*

| Lesson | Title | Est. Duration | B-Roll Theme | Notes |
|--------|-------|--------------|-------------|-------|
| 1-1 | Stewardship Arrival | ~45 sec | Still hands, soft light, warm interior | Opens with body, not intellect. Slow dissolves only. |
| 1-2 | What Is IP Stewardship? | ~2–3 min | Practitioner at a desk, writing; library shelves | Reframe: stewardship vs. monetization. Story-first opening. |
| 1-3 | The 7-Layer IP Architecture Audit | ~3–4 min | Visual layering imagery; stacked books; document spread | Introduces the 7 layers by name. Framework reveal structure. |
| 1-4 | Knowledge Lineage | ~2–3 min | Elder hands and younger hands; community gathering imagery | Emotionally resonant. Ancestral knowledge. Slow pacing. |
| 1-5 | The Stewardship Inventory (First Pass) | ~2–3 min | Blank journal, pen poised; open notebook | Guided exercise. Students prompted to begin their own inventory. |

**Module 1 Production Notes:** This module is intentionally slow. Favor longer dissolves and more extended B-roll holds to reinforce the reflective pacing. The 7-Layer lesson (1-3) will benefit from a visual annotation overlay showing each layer's name as it is introduced.

---

#### Module 2: Moral Center Codification
*Subtitle: Grounding Your IP in Values | Estimated Module Runtime: 16–20 minutes*

| Lesson | Title | Est. Duration | B-Roll Theme | Notes |
|--------|-------|--------------|-------------|-------|
| 2-1 | Stewardship Arrival (Module 2) | ~45 sec | Morning light, journal on table, hands in lap | **SAMPLE VIDEO ALREADY PRODUCED AND APPROVED.** Reuse this production spec exactly. |
| 2-2 | What Is a Moral Center? | ~2–3 min | Person at window, looking out; writing in a journal | Distinction: moral center vs. mission statement. Values over branding. |
| 2-3 | The Values Audit | ~3–4 min | Four-quadrant visual overlay; practitioner reviewing documents | Guided exercise. Four-quadrant framework visible on screen. |
| 2-4 | Stewardship vs. Extraction | ~2–3 min | Hands giving and taking; scales; community circle | Story-first. Frank examination of extraction patterns. |
| 2-5 | Writing Your Moral Center Document | ~3–4 min | Close-up writing, pen moving across page; structured document layout | Guided writing exercise. Template structure visible on screen. |

**Module 2 Production Notes:** Lesson 2-1 (Stewardship Arrival) is the approved sample video — use its aesthetic as the reference standard for all subsequent lessons. The sample video has been reviewed and approved by Dr. Dugan as of CP-43.

---

#### Module 3: Architecture of Protection
*Subtitle: Mapping, Documenting, and Holding Your IP | Estimated Module Runtime: 18–22 minutes*

| Lesson | Title | Est. Duration | B-Roll Theme | Notes |
|--------|-------|--------------|-------------|-------|
| 3-1 | Stewardship Arrival (Module 3) | ~45 sec | Protective gesture — hands cupped; warm light, solid surfaces | Frames protection as care, not fear. |
| 3-2 | Mapping the Layers (Practical Exercise) | ~3–4 min | Visual framework/map overlay; radiating layers diagram | Deep-dive companion to Module 1 inventory. Framework annotation overlay. |
| 3-3 | Documentation Systems That Work | ~3–4 min | Organized desktop; folder structure on screen; practitioner organizing materials | Practical content. Can include subtle "screen-style" overlays of documentation structure. |
| 3-4 | Legal vs. Relational Protection | ~2–3 min | Two practitioners in conversation; handshake; community circle | Honest conversation. Split framing: legal vs. relational contexts. |
| 3-5 | Drawing Boundaries With Integrity | ~2–3 min | Person standing at a threshold; clear doorway with light | Values-based boundary-setting. Not defensive posture — stewardship act. |

**Module 3 Production Notes:** This module is the most procedural. Balance the practical tone with the warmer visual palette to avoid clinical feel. Never let the documentation content look like a productivity tutorial.

---

#### Module 4: Sacred, Trainable, Automatable
*Subtitle: Deciding What to Share, What to License, What to Hold | Estimated Module Runtime: 17–20 minutes*

| Lesson | Title | Est. Duration | B-Roll Theme | Notes |
|--------|-------|--------------|-------------|-------|
| 4-1 | Stewardship Arrival (Module 4) | ~45 sec | Hands cupping something precious; quiet, still imagery | Discernment posture. Open and intentional arrival. |
| 4-2 | Introducing the Sacred–Trainable–Automatable Framework | ~3–4 min | Three-panel visual classification overlay; categorized materials | Framework reveal. Clear visual demarcation of three categories. |
| 4-3 | What to Share and How | ~3–4 min | Practitioner presenting; open book with passages highlighted | Decision framework. Community-benefit centering over reach metrics. |
| 4-4 | Licensing With Integrity | ~2–3 min | Contract document (abstract/warm treatment); two-person meeting | Plain language licensing. Values-aligned clause walkthrough. |
| 4-5 | Community Agreements and Delegation Strategy | ~2–3 min | Small group circle; handwritten agreement; mentor-mentee pairing | Community agreement drafting. Delegation protocol overview. |

**Module 4 Production Notes:** The Sacred–Trainable–Automatable framework (4-2) should be rendered with a distinct three-category visual — consider a warm-toned triptych layout. This is a signature framework that warrants visual emphasis.

---

#### Module 5: Stewardship in Motion
*Subtitle: Going to Market With Integrity | Estimated Module Runtime: 17–20 minutes*

| Lesson | Title | Est. Duration | B-Roll Theme | Notes |
|--------|-------|--------------|-------------|-------|
| 5-1 | Stewardship Arrival (Module 5) | ~45 sec | Open doorway, warm light; person standing in threshold with quiet confidence | Final arrival meditation. Honors the journey. |
| 5-2 | Pricing as Stewardship | ~3–4 min | Price tag transformed into values statement; practitioner writing | Reframes pricing as ethical act. Values pricing framework on screen. |
| 5-3 | Building Your Go-to-Market Plan | ~3–4 min | Map/pathway imagery; 90-day outline on warm paper | Practical GTM without urgency tactics. Integrity-centered launch framework. |
| 5-4 | Building Community Around Your IP | ~2–3 min | Circle of practitioners; warm communal space; people listening | Community vs. audience distinction. Community stewardship practices. |
| 5-5 | The Ongoing Stewardship Practice | ~3–4 min | Return to opening imagery — a circle completed; journal, morning light | Closing lesson. Returns to the opening question. Arrival, not urgency. |

**Module 5 Production Notes:** Lesson 5-5 (Closing Lesson) should intentionally echo the visual language of 1-1 (Opening Arrival) — a visual circle completing. This is a deliberate narrative choice that mirrors Jamila's rhetorical pattern of returning to the opening.

---

### Section 2: Course Trailer

**Asset:** 1 × 90-second highlight reel
**Purpose:** Kajabi course preview, landing page hero video, LinkedIn post, email embed
**Format:** All 3 formats (9:16, 16:9, 1:1)
**Production timing:** After all 5 module batches are approved (end of M2, Week 5)

**Trailer Structure:**
- 0:00–0:10 — Opening: Stewardship Arrival imagery (hands, warm light, stillness)
- 0:10–0:25 — Dr. Dugan voice intro: "What does it mean to steward what you carry?"
- 0:25–0:45 — Module montage: one representative moment from each of the 5 modules (B-roll + narration highlights)
- 0:45–1:10 — Core value proposition in Jamila's voice: naming, protection, moral center, sacred/trainable/automatable, going to market with integrity
- 1:10–1:25 — Testimonial placeholder (to be replaced with student testimonial after first cohort)
- 1:25–1:30 — Closing title card: "IP Stewardship Foundation | Dr. Jamila Dugan | [Kajabi Course URL]"

**Script source:** Best-of narration excerpts drawn from approved lesson scripts, assembled by Maple 360 and reviewed by Dr. Dugan before render.

---

### Section 3: M1 Launch Social Clips (3 Videos)

**Purpose:** LinkedIn launch, organic reach during M1 soft-launch period
**Format:** All 3 formats (9:16 primary for LinkedIn/TikTok; 16:9 for YouTube Shorts)
**Production timing:** Weeks 1–2 (M1 execution)

| Clip | Working Title | Source Content | Duration | Hook |
|------|-------------|----------------|----------|------|
| Social 1 | "What Stewardship Actually Means" | Adapted from Email 2 / Lesson 1-2 content | ~30 sec | "We have been taught to manage our ideas rather than steward them. Those are not the same thing." |
| Social 2 | "Not Everything You Know Should Be in a Course" | Adapted from Email 6 / Lesson 4-2 content | ~30 sec | "Not everything you know should be productized. I want to ask you: what should not be?" |
| Social 3 | "Knowledge Lineage — Who Taught You What You Know?" | Adapted from Lesson 1-4 content | ~30 sec | "Who taught you what you know — and did you ever get to thank them?" |

**Production notes for social clips:**
- Same visual system as course videos (Shayla voice, Gemini B-roll, ISL color palette)
- TikTok-style captions mandatory for all social clips (drives 60%+ more watch time)
- No urgency language in captions or overlays
- Closing frame: ISL wordmark + "7-Layer IP Architecture Audit — Free at [landing page URL]"

---

### Section 4: M4 Ongoing Videos (2 Per Month)

Starting Month 8+ (after M3 is live), Maple 360 produces 2 new short-form videos per month as part of the $1,500/month retainer. These rotate through 4 content pillars:

| Pillar | Focus | Example |
|--------|-------|---------|
| Stewardship Stories | Brief narratives of practitioners who did (or didn't) steward their IP | "I sat with a colleague who had just been asked to build a course..." |
| Framework Illumination | Deep-dives into one element of a named framework | "Today, Layer 2: Embodied Practice — the knowledge that lives in your body" |
| Reader Questions | Dr. Dugan's voice responding to a student or community question | "Someone asked me last week: what's the difference between a boundary and a barrier?" |
| Seasonal/Contextual | Tied to current events in the DEI/education landscape | Response to DEI funding cuts, nonprofit sector disruption, academic IP cases |

**Monthly production workflow:**
- Week 1: Maple 360 drafts 2 script concepts (1 paragraph briefs) → Dr. Dugan approves/selects via email
- Week 2: Scripts written, submitted for review (15 min of Dr. Dugan's time)
- Week 3: Scripts approved → pipeline produces all 3 formats + thumbnails
- Week 4: Videos delivered to Dr. Dugan for scheduling in Postiz → posted to LinkedIn, TikTok, YouTube Shorts

---

## Production Timeline (Milestone-Aligned)

### M1: Weeks 1–2

| Asset | Delivery Date | Format | Dr. Dugan Review |
|-------|-------------|--------|-----------------|
| Social Clip 1 | Week 1, Day 5 | All 3 formats + thumbnail | 15 min |
| Social Clip 2 | Week 1, Day 6 | All 3 formats + thumbnail | 15 min |
| Social Clip 3 | Week 2, Day 8 | All 3 formats + thumbnail | 15 min |

**M1 batch total: 3 social clips | 9 video files + 3 thumbnails**

---

### M2: Weeks 3–5 (5 Module Batches)

Videos are produced in module batches — all 5 lessons per module at once — so Dr. Dugan can review a complete module before the next is started.

| Batch | Content | Production Week | Delivery Day | Review Window |
|-------|---------|----------------|-------------|---------------|
| Batch 1: Module 1 | Lessons 1-1 through 1-5 | Week 3 | Day 15 | 48 hours |
| Batch 2: Module 2 | Lessons 2-1 through 2-5 | Week 3 | Day 17 | 48 hours |
| Batch 3: Module 3 | Lessons 3-1 through 3-5 | Week 4 | Day 22 | 48 hours |
| Batch 4: Module 4 | Lessons 4-1 through 4-5 | Week 4 | Day 24 | 48 hours |
| Batch 5: Module 5 | Lessons 5-1 through 5-5 | Week 5 | Day 29 | 48 hours |
| Course Trailer | Best-of highlight reel | Week 5 | Day 33 | 48 hours |

**Note on Lesson 2-1:** The approved sample video already exists. This lesson does not require re-render unless Dr. Dugan requests changes. Production will upload the existing approved video as the final deliverable for 2-1.

**M2 batch total: 25 lessons + 1 trailer | 78 video files + 26 thumbnails**

---

### M3: Weeks 6–7

No new course videos in M3. Social clips from M1 are published during this phase. Any additional clips identified during soft launch planning can be produced in Week 7 with 48-hour turnaround.

---

### M4: Monthly (Month 8 Onward)

2 videos per month per the retainer workflow described above. Monthly production cycle keeps Dr. Dugan's time commitment to approximately 30 minutes per month (script review only).

---

## Quality Control Process

Every video goes through a 4-stage QC gate before delivery:

**Stage 1 — Automated Pipeline QC**
- Quality score ≥5/10 (Gemini-assessed) required to proceed from pipeline
- Videos scoring below threshold are flagged and re-rendered before delivery
- Caption sync checked: word-by-word timing validated against TTS timestamps

**Stage 2 — Maple 360 Internal Review**
- Full playback of every video before sending to Dr. Dugan
- Check: B-roll appropriateness (representation, dignity, brand aesthetic)
- Check: voice pacing, no artifacts, no clipping
- Check: caption accuracy (spot-check 3 segments per video)
- Check: title card text accuracy (lesson number, title, ISL branding)

**Stage 3 — Dr. Dugan Review**
- Delivered as a Loom link or private unlisted YouTube link for easy review
- Estimated review time: 10–15 minutes per module batch (watching at 1.25x speed)
- Single round of revision included per batch; additional rounds billed at hourly rate
- Approval = written confirmation (email or text) — verbal approval not sufficient for production record

**Stage 4 — Final Delivery**
- Approved videos uploaded to Kajabi (course lessons) or Postiz (social scheduling)
- Archive copy stored in `/data/courses/jamila-dugan/[module]/` on Maple 360 server
- All 3 formats + thumbnail archived per lesson

---

## Cost Summary

| Category | Per Video Cost | Total Units | Total Estimated Cost |
|----------|---------------|-------------|---------------------|
| Course Lessons (25) | $0.01–$0.11 | 25 | $0.25–$2.75 |
| Social Clips (3 launch) | $0.01–$0.11 | 3 | $0.03–$0.33 |
| Course Trailer (1) | $0.05–$0.15 | 1 | $0.05–$0.15 |
| M4 Ongoing (24/year) | $0.01–$0.11 | 24/yr | $0.24–$2.64/yr |
| **Total M1–M3 Build-Out** | | **29 videos** | **< $3.25 total** |

These costs represent ElevenLabs TTS + Gemini image generation only. Maple 360's production time (scripting, pipeline configuration, QC, delivery) is covered in the milestone fees. Video infrastructure costs are negligible at this scale.

---

*Video Production Plan — IP Stewardship Lab | Dr. Jamila Dugan | Maple 360 Production | February 2026*
