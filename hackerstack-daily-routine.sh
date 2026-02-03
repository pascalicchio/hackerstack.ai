#!/bin/bash
# hackerstack-daily-routine.sh
# Automated daily tasks for HackerStack (05:00 - 08:00 UTC)

export X_API_KEY="HGqD0GcBHL78oLPKHIjFgwHGK"
export X_API_SECRET="x76A9ZTvRmyUxK1iIubHSSlFM1raPyqmoGHAvtYu3IA1y2l5rE"
export X_ACCESS_TOKEN="2016752032586022912-BDTvs84H74yYJ7qc87QBoiiiBQ9YOl"
export X_ACCESS_SECRET="ZiGPpNfovG8jF4cz5HrnfouhzpNahZtj3PiupVKHN6yCQ"

SCRIPT_DIR="/root/.openclaw/hackerstack"
X_SCRIPT="/root/.openclaw/skills/x-api/scripts/x-post.mjs"

LOG_FILE="$SCRIPT_DIR/cron/logs/daily-routine.log"

log() {
    echo "[$(date -u '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# ============ 05:00 ============
# Morning Blog Post
post_blog_porning() {
    log "📝 Posting morning blog promotion..."
    node "$X_SCRIPT" "☕ Good morning, indie hackers!

New day, new tools to explore. Check out our latest guide:

🔧 Claude vs ChatGPT for Coding
📖 Read: https://hackerstack.dev/blog

#IndieHacker #AI #BuildInPublic"
}

# ============ 06:00 ============
# Tool Feature
feature_tool() {
    log "🔧 Featuring a tool..."
    node "$X_SCRIPT" "Tool of the day: Cursor (AI code editor)

It's not just an editor—it's your AI pair programmer.

Features:
• Context-aware autocomplete
• Intelligent refactoring
• VS Code compatible

Try it free: https://cursor.sh

#Coding #AI #IndieHacker"
}

# ============ 07:00 ============
# Engagement Sprint
engagement_sprint() {
    log "🤝 Running engagement sprint..."
    # Like and reply to AI/indie hacker tweets
    cd /root/.openclaw && bash engagement-engine.sh
}

# ============ 07:30 ============
# Quick Tip
post_tip() {
    log "💡 Posting quick tip..."
    node "$X_SCRIPT" "💡 Quick tip: Use Claude for architecture decisions, Cursor for coding, ChatGPT for quick questions.

Stack smart. 🚀

#IndieHacker #AI"
}

# ============ 07:45 ============
# Evening Prep
prep_report() {
    log "📊 Preparing daily summary..."
    # Create a summary of the day's activity
    echo "Daily summary for $(date -u +%Y-%m-%d)" > "$SCRIPT_DIR/cron/logs/daily-summary.md"
    echo "- Blog posts published" >> "$SCRIPT_DIR/cron/logs/daily-summary.md"
    echo "- Tools featured" >> "$SCRIPT_DIR/cron/logs/daily-summary.md"
    echo "- Engagement completed" >> "$SCRIPT_DIR/cron/logs/daily-summary.md"
}

# Main
case "$1" in
    05:00) post_blog_porning ;;
    06:00) feature_tool ;;
    07:00) engagement_sprint ;;
    07:30) post_tip ;;
    07:45) prep_report ;;
    *)
        echo "Usage: $0 <time> (05:00, 06:00, 07:00, 07:30, 07:45)"
        echo "Or run without args for help"
        ;;
esac
