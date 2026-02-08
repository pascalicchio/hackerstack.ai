#!/bin/bash
# Morning Product Research Report - 10 AM EST
# Sends daily research summary to Fillipe

DATA_DIR="/root/.openclaw/hackerstack/data/products"
TODAY=$(date +%Y-%m-%d)
SUMMARY_FILE="$DATA_DIR/daily-summary-${TODAY}.txt"

echo "📊 MORNING PRODUCT RESEARCH REPORT"
echo "Date: $TODAY"
echo "=================================="

# Get yesterday's research
YESTERDAY=$(date -d "yesterday" +%Y-%m-%d)
YESTERDAY_SUMMARY="$DATA_DIR/daily-summary-${YESTERDAY}.txt"

if [ -f "$YESTERDAY_SUMMARY" ]; then
    echo ""
    echo "=== YESTERDAY'S RESEARCH ==="
    cat "$YESTERDAY_SUMMARY"
    
    # Extract tweets
    echo ""
    echo "=== 🐦 TWEETS TO POST ==="
    grep -A 5 "🐦 Tweet Draft:" "$YESTERDAY_SUMMARY" | tail -10
    
else
    echo ""
    echo "No research found for yesterday."
    echo ""
    echo "Products researched this week:"
    ls -la "$DATA_DIR"/daily-summary-*.txt 2>/dev/null | tail -7
fi

echo ""
echo "=== 📁 Today's Research ==="
echo "Research in progress..."

# Create report file for Telegram
REPORT_FILE="/tmp/product-research-report.txt"
cat > "$REPORT_FILE" << EOF
📊 *HackerStack Daily Product Research*

📅 *Date:* $TODAY

---

EOF

if [ -f "$YESTERDAY_SUMMARY" ]; then
    # Extract key info for Telegram
    echo "*Products Researched Yesterday:*" >> "$REPORT_FILE"
    grep "^# Product Research:" "$YESTERDAY_SUMMARY" | sed 's/# Product Research: //' >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
    
    echo "*Top Keywords:*" >> "$REPORT_FILE"
    grep "Keyword" "$YESTERDAY_SUMMARY" | head -2 >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
    
    echo "*SEO Scores:*" >> "$REPORT_FILE"
    grep "seo_score:" "$YESTERDAY_SUMMARY" | head -2 >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
    
    echo "*Tweets:*" >> "$REPORT_FILE"
    grep -A 3 "🐦 Tweet Draft:" "$YESTERDAY_SUMMARY" | head -8 >> "$REPORT_FILE"
else
    echo "No previous research found." >> "$REPORT_FILE"
fi

echo "" >> "$REPORT_FILE"
echo "---" >> "$REPORT_FILE"
echo "🔗 Full report: $YESTERDAY_SUMMARY" >> "$REPORT_FILE"

echo ""
cat "$REPORT_FILE"

# Send to Telegram (if configured)
TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-8548030805:AAHZvR2rqhQSodhc0jwg0_VUuhQATHLUNx0}"
TELEGRAM_CHAT_ID="5950588303"

if [ "$1" = "--send" ]; then
    python3 << PYTHON
import urllib.request
import urllib.parse

TOKEN = "$TELEGRAM_BOT_TOKEN"
CHAT_ID = "$TELEGRAM_CHAT_ID"

with open('/tmp/product-research-report.txt', 'r') as f:
    text = f.read()

url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
data = urllib.parse.urlencode({
    'chat_id': CHAT_ID,
    'text': text,
    'parse_mode': 'Markdown'
}).encode()

try:
    urllib.request.urlopen(url, data)
    print("✅ Report sent to Telegram!")
except Exception as e:
    print(f"❌ Failed to send: {e}")
PYTHON
fi

echo ""
echo "✅ Report generated: /tmp/product-research-report.txt"
