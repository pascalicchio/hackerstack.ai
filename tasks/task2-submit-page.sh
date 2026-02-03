#!/bin/bash
# Task 2: Create "Submit a Tool" landing page enhancement
# Scheduled: 2026-02-03 22:45 UTC

echo "[$(date)] Starting Task 2: Submit Tool Landing Page"

# Update navigation to include Submit link
sed -i 's|<li><a href="/contact"|<li><a href="/submit"|g' /root/.openclaw/hackerstack/src/app/page.tsx

# Add Submit button to header if not exists
if ! grep -q "Submit a Tool" /root/.openclaw/hackerstack/src/app/page.tsx; then
    sed -i '/<li><a href="\/privacy"/a\              <li><a href="/submit" className="hover:text-[#fafafa]">Submit a Tool</a></li>' /root/.openclaw/hackerstack/src/app/page.tsx
fi

echo "[$(date)] Task 2 complete: Submit page linked in navigation"
