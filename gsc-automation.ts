#!/usr/bin/env node
/**
 * Google Analytics & Search Console Automation
 * Complete system for managing GA4 and GSC for any project
 */

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// ============================================================================
// CONFIGURATION
// ============================================================================

interface ProjectConfig {
  name: string;
  domain: string;
  sitemapUrl: string;
  ga4PropertyId?: string;
}

interface Credentials {
  client_email: string;
  private_key: string;
  project_id: string;
}

const CREDENTIALS_PATH = path.join(__dirname, 'analytics-credentials.json');
const PROJECTS_PATH = path.join(__dirname, 'projects.json');

// ============================================================================
// GOOGLE CLIENT SETUP
// ============================================================================

function loadCredentials(): Credentials {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    throw new Error(`Credentials file not found at ${CREDENTIALS_PATH}. Please add your service account JSON file.`);
  }
  return JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
}

function createClients(credentials: Credentials) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    },
    scopes: [
      'https://www.googleapis.com/auth/analytics.readonly',
      'https://www.googleapis.com/auth/webmasters',
      'https://www.googleapis.com/auth/indexing',
    ],
  });

  const searchconsole = google.searchconsole({ version: 'v1', auth });
  const indexing = google.indexing({ version: 'v3', auth });
  const analytics = google.analyticsdata({ version: 'v1beta', auth });

  return { searchconsole, indexing, analytics, auth };
}

// ============================================================================
// SEARCH CONSOLE OPERATIONS
// ============================================================================

async function addSite(searchconsole: any, domain: string): Promise<boolean> {
  console.log(`\n➕ Adding site: ${domain}`);
  try {
    await searchconsole.sites.add({ siteUrl: domain, requestBody: { siteUrl: domain } });
    console.log('✅ Site added successfully!');
    return true;
  } catch (error: any) {
    if (error.message?.includes('already exists')) {
      console.log('⚠️ Site already exists');
      return true;
    }
    console.error(`❌ Error adding site: ${error.message}`);
    return false;
  }
}

async function submitSitemap(searchconsole: any, siteUrl: string, sitemapUrl: string): Promise<boolean> {
  console.log(`\n📤 Submitting sitemap: ${sitemapUrl}`);
  try {
    await searchconsole.sitemaps.submit({ siteUrl, feedpath: sitemapUrl });
    console.log('✅ Sitemap submitted!');
    return true;
  } catch (error: any) {
    console.error(`❌ Error submitting sitemap: ${error.message}`);
    return false;
  }
}

async function listSitemaps(searchconsole: any, siteUrl: string): Promise<void> {
  console.log(`\n📋 Sitemaps for ${siteUrl}:`);
  try {
    const response = await searchconsole.sitemaps.list({ siteUrl });
    const sitemaps = response.data.sitemap || [];
    if (sitemaps.length === 0) {
      console.log('  No sitemaps found');
    } else {
      sitemaps.forEach((sitemap: any) => {
        console.log(`  - ${sitemap.path} (${sitemap.isPending ? 'pending' : 'indexed'})`);
      });
    }
  } catch (error: any) {
    console.error(`❌ Error: ${error.message}`);
  }
}

async function reindexUrl(indexing: any, url: string): Promise<boolean> {
  console.log(`\n🔄 Requesting indexing: ${url}`);
  try {
    await indexing.urlNotifications.publish({
      requestBody: { url, type: 'URL_UPDATED' },
    });
    console.log('✅ Indexing requested!');
    return true;
  } catch (error: any) {
    console.error(`❌ Error: ${error.message}`);
    return false;
  }
}

async function getSearchAnalytics(searchconsole: any, siteUrl: string): Promise<void> {
  console.log(`\n📊 Search Analytics for ${siteUrl}:`);
  try {
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const response = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: { startDate, endDate, dimensions: ['query'], rowLimit: 10 },
    });

    const rows = response.data.rows || [];
    if (rows.length === 0) {
      console.log('  No data yet (site might not be indexed)');
    } else {
      console.log('  Top Queries:');
      rows.forEach((row: any, i: number) => {
        console.log(`    ${i + 1}. ${row.keys[0]} (${row.clicks} clicks, position ${row.position?.toFixed(1)})`);
      });
    }
  } catch (error: any) {
    console.error(`❌ Error: ${error.message}`);
  }
}

// ============================================================================
// PROJECT MANAGEMENT
// ============================================================================

function loadProjects(): Record<string, ProjectConfig> {
  if (!fs.existsSync(PROJECTS_PATH)) {
    return {};
  }
  return JSON.parse(fs.readFileSync(PROJECTS_PATH, 'utf8'));
}

function saveProject(config: ProjectConfig): void {
  const projects = loadProjects();
  projects[config.domain] = config;
  fs.writeFileSync(PROJECTS_PATH, JSON.stringify(projects, null, 2));
  console.log(`\n✅ Project saved: ${config.name}`);
}

function listProjects(): void {
  const projects = loadProjects();
  console.log('\n📁 Managed Projects:');
  Object.values(projects).forEach((project) => {
    console.log(`  - ${project.name} (${project.domain})`);
  });
}

// ============================================================================
// MAIN AUTOMATION FOR NEW PROJECTS
// ============================================================================

async function setupNewProject(name: string, domain: string): Promise<void> {
  console.log(`\n🚀 Setting up new project: ${name}`);
  console.log(`   Domain: ${domain}`);

  // Load credentials and create clients
  const credentials = loadCredentials();
  const { searchconsole, indexing, analytics } = createClients(credentials);

  const sitemapUrl = `https://${domain}/sitemap.xml`;

  // Step 1: Add site to Search Console
  const siteAdded = await addSite(searchconsole, domain);
  if (!siteAdded) {
    console.log('❌ Failed to add site. Do you have owner permission?');
    return;
  }

  // Step 2: Submit sitemap
  await submitSitemap(searchconsole, domain, sitemapUrl);

  // Step 3: Re-index home page
  await reindexUrl(indexing, domain);

  // Step 4: Save project config
  const config: ProjectConfig = { name, domain, sitemapUrl };
  saveProject(config);

  // Step 5: Show analytics
  await getSearchAnalytics(searchconsole, domain);

  console.log(`\n✅ Project "${name}" is now set up!`);
  console.log('   - Site added to Search Console');
  console.log('   - Sitemap submitted');
  console.log('   - Home page submitted for indexing');
}

// ============================================================================
// DAILY/HOURLY ROUTINE
// ============================================================================

async function dailyRoutine(): Promise<void> {
  console.log('\n🌅 Running daily analytics routine...');
  
  const credentials = loadCredentials();
  const { searchconsole, analytics } = createClients(credentials);
  const projects = loadProjects();

  for (const [domain, project] of Object.entries(projects)) {
    console.log(`\n--- ${project.name} ---`);
    await getSearchAnalytics(searchconsole, domain);
  }

  console.log('\n✅ Daily routine complete!');
}

// ============================================================================
// CLI INTERFACE
// ============================================================================

const command = process.argv[2];

async function main() {
  console.log('🤖 Google Analytics & Search Console Automation');
  console.log('================================================');

  try {
    switch (command) {
      case 'setup':
        // Usage: node gsc-automation.ts setup "My Project" example.com
        const name = process.argv[3];
        const domain = process.argv[4];
        if (!name || !domain) {
          console.log('Usage: node gsc-automation.ts setup "Project Name" domain.com');
          process.exit(1);
        }
        await setupNewProject(name, domain);
        break;

      case 'daily':
        await dailyRoutine();
        break;

      case 'add-site':
        const siteDomain = process.argv[3];
        if (!siteDomain) {
          console.log('Usage: node gsc-automation.ts add-site domain.com');
          process.exit(1);
        }
        const creds = loadCredentials();
        const clients = createClients(creds);
        await addSite(clients.searchconsole, siteDomain);
        break;

      case 'submit-sitemap':
        const sitemapDomain = process.argv[3];
        if (!sitemapDomain) {
          console.log('Usage: node gsc-automation.ts submit-sitemap domain.com');
          process.exit(1);
        }
        const creds2 = loadCredentials();
        const clients2 = createClients(creds2);
        await submitSitemap(clients2.searchconsole, `https://${sitemapDomain}`, `https://${sitemapDomain}/sitemap.xml`);
        break;

      case 'reindex':
        const url = process.argv[3];
        if (!url) {
          console.log('Usage: node gsc-automation.ts reindex https://domain.com/page');
          process.exit(1);
        }
        const creds3 = loadCredentials();
        const clients3 = createClients(creds3);
        await reindexUrl(clients3.indexing, url);
        break;

      case 'analytics':
        const analyticsDomain = process.argv[3];
        if (!analyticsDomain) {
          console.log('Usage: node gsc-automation.ts analytics domain.com');
          process.exit(1);
        }
        const creds4 = loadCredentials();
        const clients4 = createClients(creds4);
        await getSearchAnalytics(clients4.searchconsole, `https://${analyticsDomain}`);
        break;

      case 'list':
        listProjects();
        break;

      default:
        console.log(`
🤖 Google Analytics & Search Console Automation

Commands:
  setup "Name" domain.com    - Set up new project (adds site, submits sitemap, re-indexes)
  daily                     - Run daily analytics check on all projects
  analytics domain.com      - Get search analytics for a domain
  add-site domain.com       - Add site to Search Console
  submit-sitemap domain.com - Submit sitemap.xml to Search Console
  reindex https://...       - Request indexing for a URL
  list                      - List all managed projects

Usage:
  node gsc-automation.ts setup "My SaaS" mysaas.com
  node gsc-automation.ts daily
  node gsc-automation.ts analytics mysaas.com

First Time Setup:
  1. Add your service account JSON to analytics-credentials.json
  2. Grant owner permission in Search Console
  3. Run: node gsc-automation.ts setup "Project" domain.com
        `);
    }
  } catch (error: any) {
    console.error(`\n❌ Error: ${error.message}`);
    if (error.message.includes('sufficient permission')) {
      console.log('\n💡 Tip: Grant owner permission in Search Console:');
      console.log('   1. Go to https://search.google.com/search-console');
      console.log('   2. Select your site');
      console.log('   3. Settings → Users and permissions → Add user');
      console.log('   4. Add: (email from your credentials file)');
    }
    process.exit(1);
  }
}

main();
