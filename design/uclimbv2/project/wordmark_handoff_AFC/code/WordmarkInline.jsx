// WordmarkInline.jsx — single-line variant of the All for Climbing wordmark.
// Use ONLY in the iOS feed top bar (16 px) and the onboarding hero (28–36 px).
// For everything else, use the stacked Wordmark.

import React from 'react';

const COLORS = {
  ink:    '#13110e',
  paper:  '#ece4d6',
  white:  '#ffffff',
  accent: '#e85d2a',
};

const VARIANTS = {
  ink:        { type: COLORS.ink,   dot: COLORS.accent },
  paper:      { type: COLORS.paper, dot: COLORS.accent },
  white:      { type: COLORS.white, dot: COLORS.accent },
  mono:       { type: COLORS.ink,   dot: COLORS.ink   },
  'mono-white': { type: COLORS.white, dot: COLORS.white },
};

export function WordmarkInline({
  height = 16,
  variant = 'ink',
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.ink;
  const fontSize = Math.round(height * 1.0);

  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: '"Archivo Black", "Inter", system-ui, sans-serif',
        fontSize,
        letterSpacing: '-0.04em',
        textTransform: 'uppercase',
        color: v.type,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        ...style,
      }}
      role="img"
      aria-label="All for Climbing"
      {...rest}
    >
      ALL FOR CLIMBING<span style={{ color: v.dot }}>.</span>
    </span>
  );
}

export default WordmarkInline;
