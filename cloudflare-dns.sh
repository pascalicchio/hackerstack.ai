#!/bin/bash
# cloudflare-dns.sh - Manage Cloudflare DNS via API

# Usage: ./cloudflare-dns.sh <command> <domain> [record_type] [value]

# Set these in your environment or edit here:
CF_API_TOKEN="YOUR_CLOUDFLARE_API_TOKEN"
CF_EMAIL="your@email.com"
CF_ZONE_ID="YOUR_ZONE_ID"

API_BASE="https://api.cloudflare.com/client/v4"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() {
    echo -e "${GREEN}[✓]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[!]${NC} $1"
}

error() {
    echo -e "${RED}[✗]${NC} $1"
}

# Get Cloudflare API Token
if [ -z "$CF_API_TOKEN" ]; then
    warn "CF_API_TOKEN not set. Please edit this script and add your token."
    exit 1
fi

# Get Zone ID for a domain
get_zone_id() {
    local domain=$1
    curl -s -X GET "$API_BASE/zones?name=$domain" \
        -H "Authorization: Bearer $CF_API_TOKEN" \
        -H "Content-Type: application/json" | jq -r '.result[0].id'
}

# List DNS records
list_records() {
    local domain=$1
    local zone_id=$(get_zone_id $domain)
    
    if [ -z "$zone_id" ] || [ "$zone_id" = "null" ]; then
        error "Domain not found in Cloudflare: $domain"
        exit 1
    fi
    
    log "DNS Records for $domain:"
    curl -s -X GET "$API_BASE/zones/$zone_id/dns_records" \
        -H "Authorization: Bearer $CF_API_TOKEN" \
        -H "Content-Type: application/json" | jq -r '.result[] | "\(.type) \(.name) -> \(.content)"'
}

# Add A record
add_a_record() {
    local domain=$1
    local ip=$2
    local zone_id=$(get_zone_id $domain)
    
    if [ -z "$zone_id" ] || [ "$zone_id" = "null" ]; then
        error "Domain not found in Cloudflare: $domain"
        exit 1
    fi
    
    log "Adding A record for $domain -> $ip"
    curl -s -X POST "$API_BASE/zones/$zone_id/dns_records" \
        -H "Authorization: Bearer $CF_API_TOKEN" \
        -H "Content-Type: application/json" \
        --data "{
            \"type\": \"A\",
            \"name\": \"$domain\",
            \"content\": \"$ip\",
            \"ttl\": 1,
            \"proxied\": false
        }" | jq
}

# Add CNAME record
add_cname_record() {
    local domain=$1
    local cname=$2
    local zone_id=$(get_zone_id $domain)
    
    if [ -z "$zone_id" ] || [ "$zone_id" = "null" ]; then
        error "Domain not found in Cloudflare: $domain"
        exit 1
    fi
    
    log "Adding CNAME for $domain -> $cname"
    curl -s -X POST "$API_BASE/zones/$zone_id/dns_records" \
        -H "Authorization: Bearer $CF_API_TOKEN" \
        -H "Content-Type: application/json" \
        --data "{
            \"type\": \"CNAME\",
            \"name\": \"$domain\",
            \"content\": \"$cname\",
            \"ttl\": 1,
            \"proxied\": false
        }" | jq
}

# Delete all A records for a domain
clear_a_records() {
    local domain=$1
    local zone_id=$(get_zone_id $domain)
    
    if [ -z "$zone_id" ] || [ "$zone_id" = "null" ]; then
        error "Domain not found in Cloudflare: $domain"
        exit 1
    fi
    
    log "Getting A records for $domain..."
    local records=$(curl -s -X GET "$API_BASE/zones/$zone_id/dns_records?type=A" \
        -H "Authorization: Bearer $CF_API_TOKEN" \
        -H "Content-Type: application/json")
    
    echo "$records" | jq -r '.result[] | "\(.id)"' | while read id; do
        if [ ! -z "$id" ]; then
            log "Deleting record $id"
            curl -s -X DELETE "$API_BASE/zones/$zone_id/dns_records/$id" \
                -H "Authorization: Bearer $CF_API_TOKEN" \
                -H "Content-Type: application/json" | jq
        fi
    done
}

# Help
show_help() {
    echo "Cloudflare DNS Manager"
    echo ""
    echo "Usage: $0 <command> <domain> [args]"
    echo ""
    echo "Commands:"
    echo "  list <domain>           - List all DNS records"
    echo "  add-a <domain> <ip>     - Add A record"
    echo "  add-cname <domain> <cname> - Add CNAME record"
    echo "  clear-a <domain>        - Delete all A records"
    echo ""
    echo "Examples:"
    echo "  $0 list example.com"
    echo "  $0 add-a example.com 76.76.21.21"
    echo "  $0 add-cname www.example.com example.vercel.app"
    echo ""
    echo "Environment Variables:"
    echo "  CF_API_TOKEN - Your Cloudflare API Token"
}

# Main
case "$1" in
    list)
        list_records "$2"
        ;;
    add-a)
        add_a_record "$2" "$3"
        ;;
    add-cname)
        add_cname_record "$2" "$3"
        ;;
    clear-a)
        clear_a_records "$2"
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac
