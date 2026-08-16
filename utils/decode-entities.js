const NAMED = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  hellip: '…',
  mdash: '—',
  ndash: '–',
  rsquo: '’',
  lsquo: '‘',
  ldquo: '“',
  rdquo: '”',
};

export function decodeEntities(input) {
  if (!input) return '';
  return String(input).replace(
    /&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,
    (match, entity) => {
      if (entity[0] === '#') {
        const code =
          entity[1] === 'x' || entity[1] === 'X'
            ? parseInt(entity.slice(2), 16)
            : parseInt(entity.slice(1), 10);
        return Number.isNaN(code) ? match : String.fromCodePoint(code);
      }
      return NAMED[entity] ?? match;
    }
  );
}
