#!/bin/bash
# analyze-video.sh — Pull transcript + analyze a YouTube video for actionable nuggets
# Usage: ./analyze-video.sh <VIDEO_ID_OR_URL>

VIDEO=$1
API_KEY="${TRANSCRIPT_API_KEY:-sk_0NmewVFYpl4qERVWHCI0gfv9Jgy1ihB2h4l69jDMPAs}"
OUTDIR="$(dirname "$0")/reports"
mkdir -p "$OUTDIR"

if [ -z "$VIDEO" ]; then
  echo "Usage: $0 <video_id_or_url>"
  exit 1
fi

# Extract video ID if full URL passed
VIDEO_ID=$(echo "$VIDEO" | grep -oP '(?<=v=)[^&]+' || echo "$VIDEO")

echo "Fetching transcript for: $VIDEO_ID"

TRANSCRIPT=$(curl -s "https://transcriptapi.com/api/v2/youtube/transcript?video_id=$VIDEO_ID" \
  -H "Authorization: Bearer $API_KEY")

TITLE=$(echo "$TRANSCRIPT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('video_info',{}).get('title','Unknown'))" 2>/dev/null)
TEXT=$(echo "$TRANSCRIPT" | python3 -c "
import sys, json
d = json.load(sys.stdin)
segments = d.get('transcript', [])
print(' '.join(s.get('text','') for s in segments))
" 2>/dev/null)

echo "Title: $TITLE"
echo "Transcript length: ${#TEXT} chars"
echo "$TEXT" > "$OUTDIR/${VIDEO_ID}_transcript.txt"
echo "Saved to $OUTDIR/${VIDEO_ID}_transcript.txt"
