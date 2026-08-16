import { decodeEntities } from '../utils/decode-entities.js';

const CASES = [
  ['customer&#8217;s', 'customer’s'],
  ['get_query_var(&#8216;paged&#8217;)', 'get_query_var(‘paged’)'],
  ['Tom &amp; Jerry', 'Tom & Jerry'],
  ['&lt;div&gt;', '<div>'],
  ['&quot;quoted&quot;', '"quoted"'],
  ['&#038;', '&'],
  ['plain text', 'plain text'],
  ['', ''],
];

let failed = 0;
for (const [input, expected] of CASES) {
  const actual = decodeEntities(input);
  const ok = actual === expected;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${JSON.stringify(input)} -> ${JSON.stringify(actual)}`);
}

if (failed > 0) {
  console.error(`\n${failed} decode case(s) failed.`);
  process.exit(1);
}
console.log(`\nAll ${CASES.length} decode cases passed.`);
