#!/bin/bash
# Google Analytics & Search Console Automation Wrapper

cd /root/.openclaw/hackerstack

echo "🤖 GSC Automation"
echo "================="

case "$1" in
  setup)
    echo "Setting up new project: $2 $3"
    npx tsx gsc-automation.ts setup "$2" "$3"
    ;;
  daily)
    echo "Running daily analytics..."
    npx tsx gsc-automation.ts daily
    ;;
  analytics)
    echo "Getting analytics for: $2"
    npx tsx gsc-automation.ts analytics "$2"
    ;;
  add-site)
    echo "Adding site: $2"
    npx tsx gsc-automation.ts add-site "$2"
    ;;
  submit-sitemap)
    echo "Submitting sitemap for: $2"
    npx tsx gsc-automation.ts submit-sitemap "$2"
    ;;
  reindex)
    echo "Re-indexing: $2"
    npx tsx gsc-automation.ts reindex "$2"
    ;;
  list)
    echo "Listing projects..."
    npx tsx gsc-automation.ts list
    ;;
  help|*)
    echo "Usage: ./gsc-auto.sh <command> [options]"
    echo ""
    echo "Commands:"
    echo "  setup \"Name\" domain.com    - Set up new project"
    echo "  daily                      - Daily analytics on all projects"
    echo "  analytics domain.com       - Get search analytics"
    echo "  add-site domain.com        - Add site to Search Console"
    echo "  submit-sitemap domain.com  - Submit sitemap"
    echo "  reindex https://...        - Request URL indexing"
    echo "  list                       - List all projects"
    echo ""
    echo "Examples:"
    echo "  ./gsc-auto.sh setup \"My SaaS\" mysaas.com"
    echo "  ./gsc-auto.sh daily"
    echo "  ./gsc-auto.sh analytics mysaas.com"
    ;;
esac
