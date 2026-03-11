// Save as test-pages.mjs and run with: node test-pages.mjs
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

// Test landing page
await page.goto('http://localhost:8080/landing/jamila-dugan');
const landingText = await page.textContent('body');

// Check for violations
const violations = [];
const banned = ['sales funnel', 'monetiz', 'Undermonetized', 'equity education consultant', 'licensing framework', 'Comprehensive Launch Proposal'];
for (const term of banned) {
  if (landingText.toLowerCase().includes(term.toLowerCase())) {
    violations.push(`FOUND: "${term}"`);
  }
}

// Check for required content
const required = ['IP Stewardship Lab', 'Founder and Leadership Coach', 'Undiscerning Sharing'];
for (const term of required) {
  if (!landingText.includes(term)) {
    violations.push(`MISSING: "${term}"`);
  }
}

console.log('Landing page violations:', violations.length ? violations : 'NONE');

// Test portal page
await page.goto('http://localhost:8080/portal/jamila-dugan');
const portalText = await page.textContent('body');
console.log('Portal loads:', portalText.includes('Dr. Jamila Dugan') ? 'YES' : 'NO');
console.log('Portal has deliverables:', portalText.includes('Deliverable') || portalText.includes('deliverable') ? 'YES' : 'NO');

await browser.close();