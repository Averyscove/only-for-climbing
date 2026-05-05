// Wordmark.jsx — Only for Climbing wordmark, two-line stacked.
// Drop into your project and import. Loads Archivo Black via CSS @font-face
// or a Google Fonts <link> in your document head:
//
//   <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">
//
// Usage:
//   <Wordmark height={22} />                    // default ink
//   <Wordmark height={22} variant="paper" />    // for dark surfaces
//   <Wordmark height={56} variant="white" />    // for photo (dim ≥35%)
//   <Wordmark height={22} variant="mono" />     // single-color, no orange dot
//   <Wordmark height={22} variant="mono-white" />

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

export function Wordmark({
  height = 22,
  variant = 'ink',
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.ink;
  // Two-line stack. Line height is ~half the total target height.
  const lineH = Math.round(height * 0.46);
  const fontSize = Math.round(height * 0.48);

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        lineHeight: 1,
        fontFamily: '"Archivo Black", "Inter", system-ui, sans-serif',
        fontSize,
        letterSpacing: '-0.025em',
        textTransform: 'uppercase',
        color: v.type,
        ...style,
      }}
      role="img"
      aria-label="Only for Climbing"
      {...rest}
    >
      <span style={{ lineHeight: `${lineH}px` }}>ONLY FOR</span>
      <span style={{ lineHeight: `${lineH}px` }}>
        CLIMBING<span style={{ color: v.dot }}>.</span>
      </span>
    </div>
  );
}

export default Wordmark;
