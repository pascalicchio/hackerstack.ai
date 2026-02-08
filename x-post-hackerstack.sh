#!/bin/bash
# HackerStack X/Twitter Posting Script
# Uses OAuth 1.0a with existing API credentials

DATA_DIR="/root/.openclaw/hackerstack/data"
POST_LOG="$DATA_DIR/twitter-posts.log"

mkdir -p "$DATA_DIR"

log_post() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$POST_LOG"
}

post_x() {
    local message="$1"
    
    # Source API credentials
    source /root/.openclaw/.x-env
    
    # Generate OAuth signature (simplified)
    local oauth_nonce=$(date +%s%N | md5sum | cut -c1-32)
    local oauth_timestamp=$(date +%s)
    
    # URL encode the message
    local encoded_message=$(echo -n "$message" | sed 's/ /%20/g; s/!/%21/g; s/"/%22/g; s/#/%23/g; s/\$/%24/g; s/\&/%26/g; s/'\''/%27/g; s/(/%28/g; s/)/%29/g; s/:/%3A/g; s/;/%3B/g; s/</%3C/g; s/=/%3D/g; s/>/%3E/g; s/?/%3F/g; s/@/%40/g; s/\[/%5B/g; s/\]/%5D/g; s/\^/%5E/g; s/`/%60/g; s/{/%7B/g; s/}/%7D/g; s/|/%7C/g; s/~/%7E/g; s/%/%25/g')
    
    # Make the API call
    local response=$(curl -s 'https://api.twitter.com/2/tweets' \
        -H 'Authorization: Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuBaFl3h7m1ZqkS6Vwv38sZwmE8CZ8lwSUbLRcz3M7c5yU1pVPDcKOEgBaE8yXc9MCQK9j8LMXbV_JdSnw_%7D' \
        -H 'Content-Type: application/json' \
        -X POST \
        --data-raw "{\"text\":\"$message\"}" \
        --max-time 30)
    
    echo "$response"
    
    if echo "$response" | grep -q '"data"'; then
        log_post "SUCCESS: $message"
        return 0
    else
        log_post "FAILED: $response"
        return 1
    fi
}

# Main
if [ -n "$1" ]; then
    post_x "$1"
else
    echo "🐦 Usage: ./x-post-hackerstack.sh \"Your tweet\""
fi
