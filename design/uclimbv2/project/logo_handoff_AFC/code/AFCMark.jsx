// AFCMark — single source of truth for the All for Climbing logo.
// Drop this file into your project and import; or copy the SVG path verbatim.
//
// Path is on a 100x100 viewBox. Mountain silhouette traced from the source icon.
// The "." accent in the wordmark uses the brand chalk-orange.

import React from 'react';

export const AFC_PATH =
  "M 10.5 76.2 L 29.7 51.3 L 34.8 56.6 L 57.7 21.6 L 64.5 39 L 60 41.5 L 68 41.5 L 75 51.7 L 88.7 76.2 Z";

export const AFC_COLORS = {
  ink:    '#13110e',  // near-black
  paper:  '#ece4d6',  // chalky cream
  accent: '#e85d2a',  // chalk orange (use ONLY for the trailing "." or for the icon background)
};

/**
 * AFCMark — the silhouette only.
 *
 *   <AFCMark size={24} />                            // black mark, transparent bg
 *   <AFCMark size={64} color="#fff" bg="#e85d2a" />  // white-on-orange app icon
 *   <AFCMark size={20} color="#fff" />               // for use on dark photos
 */
export function AFCMark({ size = 24, color = '#13110e', bg, rounded = 0.22, style }) {
  if (bg) {
    const r = rounded * 100;
    return (
      <svg viewBox="0 0 100 100" width={size} height={size} style={style} aria-label="All for Climbing">
        <rect width="100" height="100" rx={r} ry={r} fill={bg} />
        <path d={AFC_PATH} fill={color} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={style} aria-label="All for Climbing">
      <path d={AFC_PATH} fill={color} />
    </svg>
  );
}

/**
 * AFCLockup — mark + wordmark "All for Climbing." horizontally.
 * Use the display variant for marketing/share cards; the mono variant for
 * tags, footers, and any small all-caps utility context.
 */
export function AFCLockup({
  size = 22,
  color = AFC_COLORS.ink,
  accent = AFC_COLORS.accent,
  mono = false,
  gap = 8,
  style,
}) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap, ...style }}>
      <AFCMark size={size} color={color} />
      <span
        style={{
          fontFamily: mono
            ? '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace'
            : '"Archivo Black", "Inter", system-ui, sans-serif',
          fontSize: Math.round(size * 0.72),
          fontWeight: mono ? 800 : 900,
          letterSpacing: mono ? 1.5 : -0.5,
          textTransform: mono ? 'uppercase' : 'none',
          lineHeight: 1,
          color,
          whiteSpace: 'nowrap',
        }}
      >
        {mono ? (
          'ALL FOR CLIMBING'
        ) : (
          <>All for Climbing<span style={{ color: accent }}>.</span></>
        )}
      </span>
    </div>
  );
}
