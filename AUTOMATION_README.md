# Google Analytics & Search Console Automation
# Complete system for managing GA4 and GSC for any project

## Quick Start

### First Time Setup
1. Add your service account JSON to `analytics-credentials.json`
2. Grant owner permission in Google Search Console
3. Run: `npx tsx gsc-automation.ts setup "Project Name" domain.com`

### Daily Commands
```bash
# Run daily analytics check on all projects
npx tsx gsc-automation.ts daily

# Get analytics for a specific domain
npx tsx gsc-automation.ts analytics domain.com

# List all managed projects
npx tsx gsc-automation.ts list
```

## Files

- `analytics-credentials.json` - Service account credentials (NOT committed to Git)
- `projects.json` - List of managed projects
- `gsc-automation.ts` - Main automation script
- `gsc-auto.sh` - Wrapper script for easy use

## Service Account Setup

1. Go to https://console.cloud.google.com
2. Create project or select existing
3. Enable APIs:
   - Google Analytics Data API
   - Search Console API
   - Indexing API
4. Create Service Account:
   - IAM & Admin → Service Accounts
   - Create with role "Viewer"
   - Create JSON key
5. Share access:
   - GA4: Admin → Property Access Management → Add service account email
   - Search Console: Settings → Users and permissions → Add service account email as Owner

## Automation Features

✅ Add domain to Search Console
✅ Submit sitemap.xml
✅ Request indexing for home page
✅ Monitor search analytics (queries, clicks, impressions)
✅ Daily/hourly routine for all projects
✅ Store project configurations
✅ Automatic re-indexing on new content

## Cron Jobs (Optional)

```bash
# Daily analytics report
0 8 * * * cd /root/.openclaw/hackerstack && npx tsx gsc-automation.ts daily >> /var/log/gsc-daily.log
```

## Supported Commands

| Command | Description |
|---------|-------------|
| `setup "Name" domain.com` | Set up new project |
| `daily` | Run daily analytics on all projects |
| `analytics domain.com` | Get search analytics |
| `add-site domain.com` | Add site to Search Console |
| `submit-sitemap domain.com` | Submit sitemap |
| `reindex https://...` | Request URL indexing |
| `list` | List all projects |

## Troubleshooting

### "User does not have sufficient permission"
Grant owner permission in Search Console:
1. Go to https://search.google.com/search-console
2. Select your site
3. Settings → Users and permissions
4. Add user with email from credentials file
5. Select "Owner"

### "Credentials file not found"
Add your service account JSON to `analytics-credentials.json`

### No analytics data
New sites take 24-48 hours to appear in Search Console and GA4.
