const NUM_WORDS = 15;

export const shorten = text =>
  text
    .split(' ')
    .slice(0, NUM_WORDS)
    .join(' ') + '\u2026';
