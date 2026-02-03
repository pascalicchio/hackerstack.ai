#!/bin/bash
# HackerStack Smart Daily Routine
# Posts based on day-of-week optimal engagement windows
# All times in UTC (user is EST, UTC-5)

export X_API_KEY="HGqD0GcBHL78oLPKHIjFgwHGK"
export X_API_SECRET="x76A9ZTvRmyUxK1iIubHSSlFM1raPyqmoGHAvtYu3IA1y2l5rE"
export X_ACCESS_TOKEN="2016752032586022912-BDTvs84H74yYJ7qc87QBoiiiBQ9YOl"
export X_ACCESS_SECRET="ZiGPpNfovG8jF4cz5HrnfouhzpNahZtj3PiupVKHN6yCQ"

BLUESKY_SCRIPT="/root/.openclaw/workspace/bluesky-post.js"
X_SCRIPT="/root/.openclaw/skills/x-api/scripts/x-post.mjs"
SCRIPT_DIR="/root/.openclaw/hackerstack"
LOG_FILE="$SCRIPT_DIR/cron/logs/daily-routine.log"

log() {
    echo "[$(date -u '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Get day of week (0=Sun, 1=Mon, ..., 6=Sat)
DAY=$(date +%u)

# Post to BOTH platforms
post_both() {
    local message="$1"
    log "Posting: $message"
    node "$X_SCRIPT" "$message" >> "$LOG_FILE" 2>&1
    node "$BLUESKY_SCRIPT" "$message" >> "$LOG_FILE" 2>&1
}

# ============ DAY-BY-DAY SCHEDULE ============
# Times are in UTC (convert from EST by adding 5 hours)
# EST=UTC-5

case "$DAY" in
    1) # MONDAY: Primary 13:00-15:00 UTC, Secondary 19:00-20:00 UTC
        log "📅 Monday: Primary window 13:00-15:00 UTC (8-10 AM EST)"
        post_both "☕ Monday kickoff! Time to build something great.

What's on your roadmap this week?

#IndieHacker #MondayMotivation"
        ;;
    2) # TUESDAY: Primary 14:00-16:00 UTC, Secondary 22:00-23:00 UTC
        log "📅 Tuesday: Primary window 14:00-16:00 UTC (9-11 AM EST)"
        post_both "🚀 Tuesday is for shipping.

What are you launching this week?

#IndieHacker #BuildInPublic"
        ;;
    3) # WEDNESDAY: Primary 14:00-18:00 UTC, Secondary 22:00-01:00 UTC
        log "📅 Wednesday: Primary window 14:00-18:00 UTC (9 AM-1 PM EST) - Best overall day!"
        post_both "💡 Mid-week check-in.

Stuck on a problem? Sometimes stepping away helps.

What's blocking you?

#IndieHacker #Productivity"
        ;;
    4) # THURSDAY: Primary 15:00-19:00 UTC, Secondary 23:00-00:00 UTC
        log "📅 Thursday: Primary window 15:00-19:00 UTC (10 AM-2 PM EST) - Great for tutorials!"
        post_both "📚 Thursday = Learn day.

Drop a tool you discovered recently. I'll start:

Cursor.sh - AI pair programmer

Your turn!

#IndieHacker #Learning"
        ;;
    5) # FRIDAY: Primary 13:00-16:00 UTC, Secondary 18:00-19:00 UTC
        log "📅 Friday: Primary window 13:00-16:00 UTC (8-11 AM EST) - Wrap up the week!"
        post_both "🎯 Friday focus: What shipped this week?

Own your wins, however small.

#IndieHacker #FridayFeeling"
        ;;
    6) # SATURDAY: Primary 14:00-16:00 UTC, Secondary 00:00-02:00 UTC (+1)
        log "📅 Saturday: Primary window 14:00-16:00 UTC (9-11 AM EST) - Lighthearted content!"
        post_both "🌿 Saturday vibe: Work smarter, not harder.

What are you exploring this weekend?

#IndieHacker #WeekendVibes"
        ;;
    0) # SUNDAY: Primary 13:00-15:00 UTC, Secondary 23:00-02:00 UTC
        log "📅 Sunday: Primary window 13:00-15:00 UTC (8-10 AM EST) - Prep for the week!"
        post_both "�Sunday reset: Plan your wins for next week.

One thing you're committing to:

#IndieHacker #SundayPrep"
        ;;
esac

# Engagement sprint (runs every 4 hours via separate cron)
engagement_sprint() {
    log "🤝 Running engagement sprint..."
    cd /root/.openclaw && bash engagement-engine.sh >> "$LOG_FILE" 2>&1
}

# Analytics check
run_analytics() {
    log "📊 Running daily analytics..."
    cd /root/.openclaw/hackerstack && ./gsc-auto.sh daily >> "$SCRIPT_DIR/cron/logs/gsc-daily.log" 2>&1
}

# Usage: ./smart-routine.sh <command>
case "$1" in
    post) post_both "$2" ;;
    engage) engagement_sprint ;;
    analytics) run_analytics ;;
    *)
        echo "Usage: $0 <post|engage|analytics> [message]"
        ;;
esac
