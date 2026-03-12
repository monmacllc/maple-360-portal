"use client";

import { useEffect, useRef, useState } from "react";
import { supabase, type Comment } from "@/lib/supabase";

const T = {
  bgPrimary: "#FAF8F5",
  bgSecondary: "#FFFFFF",
  bgLight: "#F8F6F3",
  teal: "#7ECBC4",
  tealLight: "#4ECDC4",
  coral: "#FF6B6B",
  slate: "#2D3436",
  textPrimary: "#4A5568",
  textSecondary: "#718096",
  lightGray: "#E8E4DE",
  green: "#48BB78",
  shadow: "rgba(0, 0, 0, 0.08)",
};

interface FeedbackSectionProps {
  clientSlug: string;
  deliverableSlug: string;
}

function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 60) return "just now";
  if (diffMinutes < 60)
    return `${diffMinutes} minute${diffMinutes === 1 ? "" : "s"} ago`;
  if (diffHours < 24)
    return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
  });
}

function LoadingSpinner() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "16px",
        height: "16px",
        border: `2px solid ${T.lightGray}`,
        borderTopColor: T.teal,
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
        verticalAlign: "middle",
        marginRight: "8px",
      }}
      aria-hidden="true"
    />
  );
}

export default function FeedbackSection({
  clientSlug,
  deliverableSlug,
}: FeedbackSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [supabaseError, setSupabaseError] = useState(false);
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitHover, setSubmitHover] = useState(false);
  const errorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Guard: if env vars are missing, show fallback
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      setSupabaseError(true);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchComments() {
      try {
        const { data, error } = await supabase
          .from("portal_comments")
          .select("*")
          .eq("client_slug", clientSlug)
          .eq("deliverable_slug", deliverableSlug)
          .order("created_at", { ascending: true });

        if (!cancelled) {
          if (error) {
            console.error("FeedbackSection fetch error:", error);
            setSupabaseError(true);
          } else {
            setComments((data as Comment[]) ?? []);
          }
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("FeedbackSection unexpected error:", err);
          setSupabaseError(true);
          setLoading(false);
        }
      }
    }

    fetchComments();

    const channel = supabase
      .channel(`portal_comments:${clientSlug}:${deliverableSlug}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "portal_comments",
          filter: `client_slug=eq.${clientSlug}`,
        },
        (payload) => {
          const newComment = payload.new as Comment;
          if (newComment.deliverable_slug === deliverableSlug) {
            setComments((prev) => {
              if (prev.some((c) => c.id === newComment.id)) return prev;
              return [...prev, newComment];
            });
          }
        }
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, [clientSlug, deliverableSlug]);

  useEffect(() => {
    return () => {
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
    };
  }, []);

  async function handleSubmit() {
    const trimmedContent = content.trim();

    if (!trimmedContent || submitting) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const { error } = await supabase.from("portal_comments").insert({
        client_slug: clientSlug,
        deliverable_slug: deliverableSlug,
        author: "Client",
        content: trimmedContent,
      });

      if (error) throw error;

      setContent("");
    } catch (err) {
      console.error("FeedbackSection insert error:", err);
      const message =
        err instanceof Error ? err.message : "Failed to post comment.";
      setSubmitError(message);

      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
      errorTimerRef.current = setTimeout(() => setSubmitError(null), 3000);
    } finally {
      setSubmitting(false);
    }
  }

  if (supabaseError) {
    return (
      <div
        style={{
          borderTop: `4px solid ${T.teal}`,
          background: T.bgSecondary,
          borderRadius: "12px",
          boxShadow: `0 2px 12px ${T.shadow}`,
          padding: "24px",
          color: T.textSecondary,
          fontSize: "0.9rem",
        }}
      >
        Feedback system is being set up. Check back soon.
      </div>
    );
  }

  return (
    <>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      <div
        style={{
          borderTop: `4px solid ${T.teal}`,
          background: T.bgSecondary,
          borderRadius: "12px",
          boxShadow: `0 2px 12px ${T.shadow}`,
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Header */}
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: "1.2rem",
              fontWeight: 700,
              color: T.slate,
              marginBottom: "4px",
            }}
          >
            Leave Your Feedback
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "0.875rem",
              color: T.textSecondary,
            }}
          >
            Your comments are visible to the Maple 360 team in real time.
          </p>
        </div>

        {/* Comment thread */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {loading ? (
            <div
              style={{
                color: T.textSecondary,
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LoadingSpinner />
              Loading&hellip;
            </div>
          ) : comments.length === 0 ? (
            <p
              style={{
                margin: 0,
                color: T.textSecondary,
                fontSize: "0.875rem",
                fontStyle: "italic",
              }}
            >
              No feedback yet. Be the first to share your thoughts.
            </p>
          ) : (
            comments.map((comment) => {
              const isTeam = comment.author === "Maple 360";
              return (
                <div
                  key={comment.id}
                  style={{
                    background: T.bgLight,
                    borderRadius: "8px",
                    padding: "12px 14px",
                    borderLeft: isTeam
                      ? `3px solid ${T.teal}`
                      : "3px solid transparent",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: T.teal,
                      }}
                    >
                      {comment.author}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: T.lightGray,
                      }}
                    >
                      {formatRelativeTime(comment.created_at)}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: T.textPrimary,
                      whiteSpace: "pre-wrap",
                      lineHeight: 1.5,
                    }}
                  >
                    {comment.content}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Input area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            borderTop: `1px solid ${T.lightGray}`,
            paddingTop: "20px",
          }}
        >
          <textarea
            placeholder="Leave your feedback here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            style={{
              width: "100%",
              minHeight: "100px",
              fontSize: "0.9rem",
              padding: "10px 12px",
              border: `1px solid ${T.lightGray}`,
              borderRadius: "6px",
              color: T.textPrimary,
              background: T.bgSecondary,
              resize: "vertical",
              outline: "none",
              fontFamily: "inherit",
              lineHeight: 1.5,
              boxSizing: "border-box",
            }}
          />

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={handleSubmit}
              disabled={!content.trim() || submitting}
              onMouseEnter={() => setSubmitHover(true)}
              onMouseLeave={() => setSubmitHover(false)}
              style={{
                background: T.teal,
                color: "#FFFFFF",
                fontSize: "0.9rem",
                fontWeight: 700,
                padding: "9px 22px",
                border: "none",
                borderRadius: "8px",
                cursor:
                  !content.trim() || submitting ? "not-allowed" : "pointer",
                opacity:
                  !content.trim() || submitting
                    ? 0.5
                    : submitHover
                    ? 0.85
                    : 1,
                transition: "opacity 0.15s ease",
                fontFamily: "inherit",
              }}
            >
              {submitting ? "Posting..." : "Post Comment"}
            </button>
          </div>

          {submitError && (
            <p
              style={{
                margin: 0,
                fontSize: "0.825rem",
                color: T.coral,
              }}
            >
              {submitError}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
