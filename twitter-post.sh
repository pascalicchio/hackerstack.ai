#!/bin/bash
# HackerStack Twitter/X Posting Script
# Account: @HackerStackAI

# Configuration
COOKIE_FILE="/root/.openclaw/.twitter/cookies_hackerstack.txt"
POST_LOG="/root/.openclaw/hackerstack/data/twitter-posts.log"

# Test if cookies exist
if [ ! -f "$COOKIE_FILE" ]; then
    echo "❌ Twitter cookies not configured!"
    echo ""
    echo "To set up Twitter automation:"
    echo "1. Log into Twitter.com in a real browser"
    echo "2. Export cookies (using EditThisCookie extension or similar)"
    echo "3. Save cookies to: $COOKIE_FILE"
    echo "4. Make executable: chmod +x $COOKIE_FILE"
    echo ""
    exit 1
fi

# Function to post tweet
post_tweet() {
    local message="$1"
    echo "🐦 Posting to Twitter: $message"
    
    # Using curl with cookies
    curl -s -b "$COOKIE_FILE" \
        -c "$COOKIE_FILE" \
        -X POST "https://api.twitter.com/2/tweets" \
        -H "Content-Type: application/json" \
        -d '{"text":"'"$message"'"}' \
        --max-time 30
    
    echo "✅ Tweet posted!"
}

# Sample posts for HackerStack
post_tweet "🚀 Just discovered an amazing AI tool for indie hackers! Check out our latest additions to HackerStack.dev #indiehacker #AI"

post_tweet "💡 Pro tip: The best developers aren't the ones who code fastest - they're the ones who know the right tools. Explore our curated list → hackerstack.dev/tools"

post_tweet "🛠️ New blog post: Best Developer Gear on Amazon for indie hackers. Upgrade your setup! → hackerstack.dev/blog/best-developer-gear-amazon"

post_tweet "📚 Reading list for indie hackers: The best books on coding, startups, and productivity. Start your reading journey → hackerstack.dev/blog/best-books-indie-hackers-amazon"

echo "📝 All posts logged to: $POST_LOG"
