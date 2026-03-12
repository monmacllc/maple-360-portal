-- Run this in the Supabase Dashboard SQL Editor
-- Dashboard > SQL Editor > New Query > paste > Run

CREATE TABLE IF NOT EXISTS portal_comments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  client_slug text NOT NULL,
  deliverable_slug text NOT NULL,
  author text NOT NULL DEFAULT 'Client',
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Index for fast lookups by client + deliverable
CREATE INDEX IF NOT EXISTS idx_portal_comments_lookup
  ON portal_comments(client_slug, deliverable_slug, created_at DESC);

-- Enable Row Level Security (required for Supabase anon key access)
ALTER TABLE portal_comments ENABLE ROW LEVEL SECURITY;

-- Policy: allow anyone to read comments (portal is semi-public)
CREATE POLICY "Allow read portal_comments" ON portal_comments
  FOR SELECT USING (true);

-- Policy: allow anyone to insert comments (no auth required)
CREATE POLICY "Allow insert portal_comments" ON portal_comments
  FOR INSERT WITH CHECK (true);

-- Enable realtime for this table
ALTER PUBLICATION supabase_realtime ADD TABLE portal_comments;
