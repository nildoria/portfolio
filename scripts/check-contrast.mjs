import { readFileSync } from 'node:fs';

const CSS_PATH = new URL('../app/css/globals.css', import.meta.url);

const toLinear = (channel) => {
  const c = channel / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(toLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const ratio = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const parseTokens = (css) => {
  const tokens = {};
  for (const m of css.matchAll(/--color-([a-z-]+):\s*(#[0-9a-fA-F]{6})/g)) {
    tokens[m[1]] = m[2];
  }
  return tokens;
};

// [foreground, background, minimum, label]
const CHECKS = [
  ['hi', 'bg', 4.5, 'headings on page'],
  ['mid', 'bg', 4.5, 'body on page'],
  ['low', 'bg', 4.5, 'meta on page'],
  ['accent', 'bg', 4.5, 'links on page'],
  ['hi', 'surface', 4.5, 'headings on card'],
  ['mid', 'surface', 4.5, 'body on card'],
  ['low', 'surface', 4.5, 'meta on card'],
  ['hi', 'sunken', 4.5, 'headings on band'],
  ['mid', 'sunken', 4.5, 'body on band'],
  ['low', 'sunken', 4.5, 'meta on band'],
  ['accent', 'sunken', 4.5, 'links on band'],
  ['accent', 'surface', 4.5, 'links on card'],
  ['bg', 'accent', 4.5, 'primary button label'],
  ['line-input', 'bg', 3.0, 'input border on page'],
  ['line-input', 'surface', 3.0, 'input border on card'],
];

let css;
try {
  css = readFileSync(CSS_PATH, 'utf8');
} catch {
  console.error('FAIL: app/css/globals.css not found');
  process.exit(1);
}

const tokens = parseTokens(css);
let failed = 0;

for (const [fg, bg, min, label] of CHECKS) {
  if (!tokens[fg] || !tokens[bg]) {
    console.error(`FAIL  ${label}: missing token --color-${!tokens[fg] ? fg : bg}`);
    failed++;
    continue;
  }
  const r = ratio(tokens[fg], tokens[bg]);
  const ok = r >= min;
  if (!ok) failed++;
  console.log(
    `${ok ? 'PASS' : 'FAIL'}  ${label.padEnd(26)} ${fg}/${bg}  ${r.toFixed(2)}:1  (min ${min})`
  );
}

if (failed > 0) {
  console.error(`\n${failed} contrast check(s) failed.`);
  process.exit(1);
}
console.log(`\nAll ${CHECKS.length} contrast checks passed.`);
