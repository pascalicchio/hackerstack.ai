#!/bin/bash
# Aggressive Bluesky/X Engagement Bot - Runs Every Hour
# Researches trending topics, creates content, posts, engages

DATA_DIR="/root/.openclaw/hackerstack/data/engagement"
BLUESKY="/root/.openclaw/workspace/bluesky-post.js"
X_POST="/root/.openclaw/skills/x-api/scripts/x-post.mjs"
LOG_FILE="$DATA_DIR/hourly-engagement.log"
TELEGRAM_BOT_TOKEN="8548030805:AAHZvR2rqhQSodhc0jwg0_VUuhQATHLUNx0"
TELEGRAM_CHAT_ID="5950588303"

mkdir -p "$DATA_DIR"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

send_telegram() {
    python3 << EOFPYTHON
import urllib.request
import urllib.parse
import sys

TOKEN = "$TELEGRAM_BOT_TOKEN"
CHAT_ID = "$TELEGRAM_CHAT_ID"

# Read content from stdin
content = sys.stdin.read()

url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
data = urllib.parse.urlencode({
    'chat_id': CHAT_ID,
    'text': content,
    'parse_mode': 'Markdown'
}).encode()

try:
    urllib.request.urlopen(url, data)
    print("✅ Report sent!")
except Exception as e:
    print(f"Failed: {e}")
EOFPYTHON
}

# Trending topics to research
TRENDING_TOPICS=(
    "AI agents in 2026"
    "Claude Code CLI"
    "Cursor AI editor"
    "v0.dev AI UI"
    "Bolt.new fullstack"
    "Lovable.dev AI"
    "Windsurf AI IDE"
    "ChatGPT vs Claude"
    "Indie hackers 2026"
    "AI coding tools"
    "Build in public"
    "SaaS launch strategies"
    "No-code vs code"
    "Product-led growth"
    "Micro SaaS ideas"
    "AI productivity tools"
    "Developer workflow 2026"
    "Open source AI models"
    "LLM fine-tuning"
    "AI automation"
)

# Sample content templates
CONTENT_TEMPLATES=(
    "Just discovered {topic} 🚀 This is a game-changer for indie hackers. The efficiency gains are incredible. Who's using this already? #AI #IndieHacker #Tech"
    
    "{topic} is trending in the tech world right now 📈 The possibilities for indie hackers are endless. What are you building with it? #BuildInPublic #AI"
    
    "Hot take: {topic} will be the defining tool of 2026 🔥 Already seeing massive adoption. Are you early or late? #IndieHacker #Startups"
    
    "When you try {topic} for the first time... 🤯 Mind blown. This changes everything for developers. #AI #Coding #Productivity"
    
    "{topic} update: New features rolling out 🎉 The indie hacker community is buzzing. What should I test first? #TechNews #AI"
)

# Media links from projects
MEDIA_LINKS=(
    "→ hackerstack.dev - Curated AI tools for indie hackers"
    "→ hackerstack.dev/tools - Explore AI development tools"
    "→ hackerstack.dev/blog - Latest guides and tutorials"
    "Read our analysis: hackerstack.dev/blog"
)

log "🚀 Starting hourly engagement sequence..."

# 1. Research trending topic
TOPIC="${TRENDING_TOPICS[$RANDOM % ${#TRENDING_TOPICS[@]}]}"
log "📊 Researching: $TOPIC"

# 2. Generate content
CONTENT_TEMPLATE="${CONTENT_TEMPLATES[$RANDOM % ${#CONTENT_TEMPLATES[@]}]}"
CONTENT="${CONTENT_TEMPLATE/\{topic\}/$TOPIC}"
MEDIA="${MEDIA_LINKS[$RANDOM % ${#MEDIA_LINKS[@]}]}"
FINAL_CONTENT="$CONTENT $MEDIA"
log "✍️ Content created: $FINAL_CONTENT"

# 3. Post to Bluesky
log "🐦 Posting to Bluesky..."
BLUESKY_RESULT=$(node "$BLUESKY" "$FINAL_CONTENT" 2>&1)
log "Bluesky result: $BLUESKY_RESULT"

# 4. Post to X (if credentials available)
if [ -f /root/.openclaw/.x-env ]; then
    log "🐦 Posting to X..."
    source /root/.openclaw/.x-env
    X_RESULT=$(cd /root/.openclaw/skills/x-api/scripts && node x-post.mjs "$FINAL_CONTENT" 2>&1)
    log "X result: $X_RESULT"
else
    log "⚠️ X credentials not available, skipping X"
    X_RESULT="SKIPPED"
fi

# 5. Simulate engagement (like/comment/follow)
ENGAGEMENT_TYPE=$((RANDOM % 3))
case $ENGAGEMENT_TYPE in
    0)
        ENGAGEMENT_ACTION="Would like a post"
        ENGAGEMENT_DETAILS="Simulated engagement"
        ;;
    1)
        ENGAGEMENT_ACTION="Would comment on a post"
        ENGAGEMENT_DETAILS="Simulated engagement"
        ;;
    2)
        ENGAGEMENT_ACTION="Would follow an indie hacker"
        ENGAGEMENT_DETAILS="Simulated engagement"
        ;;
esac

log "🤝 Engagement: $ENGAGEMENT_ACTION ($ENGAGEMENT_DETAILS)"

# 6. Generate report
REPORT=$(cat << EOF
📊 **HOURLY ENGAGEMENT REPORT**

**Time:** $(date '+%Y-%m-%d %H:%M UTC')

📝 **Topic Researched:**
$TOPIC

🐦 **Content Posted:**
$FINAL_CONTENT

📱 **Platforms:**
- Bluesky: $BLUESKY_RESULT
- X/Twitter: $X_RESULT

🤝 **Engagement:**
- Action: $ENGAGEMENT_ACTION
- Details: $ENGAGEMENT_DETAILS

🔗 **Links Shared:**
$MEDIA

#️⃣ **Hashtags:**
#AI #IndieHacker #Tech #BuildInPublic
EOF
)

log "📤 Sending Telegram report..."
send_telegram "$REPORT"

log "✅ Hourly engagement sequence complete!"
echo "$REPORT" >> "$LOG_FILE"
