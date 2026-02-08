# HackerStack Twitter/X Automation Setup

## Account: @HackerStackAI

## Status: ⚠️ Awaiting Cookie Setup

### What's Needed

Twitter/X has strict anti-bot measures. To automate posts, we need **browser cookies** from a logged-in session.

### Step 1: Get Twitter Cookies

1. **Open Twitter.com** in Chrome/Firefox
2. **Log in** to @HackerStackAI
3. **Install cookie extension:** "EditThisCookie" or "Cookie-Editor"
4. **Click the extension** → "Export" → Copy cookies
5. **Save to:** `/root/.openclaw/.twitter/cookies_hackerstack.txt`

### Step 2: Make Executable

```bash
chmod +x /root/.openclaw/.twitter/cookies_hackerstack.txt
```

### Step 3: Test Posting

```bash
cd /root/.openclaw/hackerstack
./twitter-post.sh
```

---

## Automated Posting Schedule

Once cookies are configured, tweets will post automatically:

| Time (UTC) | Content |
|-----------|---------|
| 05:00 | Tool feature |
| 06:00 | Productivity tip |
| 07:00 | Blog post share |
| 07:30 | Quick hack |
| 08:00 | Trending topic |

---

## Manual Commands

```bash
# Post a tweet
cd /root/.openclaw/hackerstack
./twitter-post.sh "Your custom message here"

# View post history
cat /root/.openclaw/hackerstack/data/twitter-posts.log
```

---

## Sample Tweet Content

**Tool Announcements:**
- "🚀 New tool alert: [Tool Name] - [Description] → hackerstack.dev/tools/[slug] #indiehacker #AI"

**Blog Posts:**
- "📝 Just published: [Blog Title] → hackerstack.dev/blog/[slug]"

**Engagement:**
- "💡 [Indie hacker tip or insight] #indiehacker"

---

## Troubleshooting

**"Cookies not configured":**
→ Complete Step 1 above

**"401 Unauthorized":**
→ Cookies expired. Re-export from browser

**"Rate limited":**
→ Twitter limits posts. Wait 15-30 minutes

---

## Alternative: Use Twitter API

For more robust automation, apply for Twitter API access:
- **Developer Portal:** https://developer.twitter.com
- **Free tier:** 1,500 tweets/month
- **Required:** API Key, API Secret, Access Token

Once you have API credentials, update the scripts to use API authentication instead of cookies.
