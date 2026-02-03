#!/bin/bash
# HackerStack Comprehensive Routine Handler
# Commands: post <message> | engage
# Posts to BOTH Twitter + Bluesky

export X_API_KEY="HGqD0GcBHL78oLPKHIjFgwHGK"
export X_API_SECRET="x76A9ZTvRmyUxK1iIubHSSlFM1raPyqmoGHAvtYu3IA1y2l5rE"
export X_ACCESS_TOKEN="2016752032586022912-BDTvs84H74yYJ7qc87QBoiiiBQ9YOl"
export X_ACCESS_SECRET="ZiGPpNfovG8jF4cz5HrnfouhzpNahZtj3PiupVKHN6yCQ"

BLUESKY="/root/.openclaw/workspace/bluesky-post.js"
X_POST="/root/.openclaw/skills/x-api/scripts/x-post.mjs"
ENGAGE="/root/.openclaw/engagement-engine.sh"
LOG="/root/.openclaw/hackerstack/cron/logs/cron.log"

log() { echo "[$(date -u '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG"; }

post_both() {
    log "📤 Posting: $1"
    node "$X_POST" "$1" >> "$LOG" 2>&1
    node "$BLUESKY" "$1" >> "$LOG" 2>&1
}

do_engage() {
    log "🤝 Running 20-min engagement sprint..."
    cd /root/.openclaw && timeout 1200 bash "$ENGAGE" >> "$LOG" 2>&1 &
}

case "$1" in
    post)
        shift
        post_both "$1"
        ;;
    engage)
        do_engage
        ;;
    *)
        echo "Usage: $0 <post|engage> [message]"
        ;;
esac
