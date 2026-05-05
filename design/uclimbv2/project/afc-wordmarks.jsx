// afc-wordmarks.jsx — 12 wordmark-only treatments of "All for Climbing".
// No mountain mark. Pure typography + composition.
// Each accepts h (target height in px) so we can preview at multiple sizes.

const WMC = {
  ink:    '#13110e',
  paper:  '#ece4d6',
  accent: '#e85d2a',
  accent2:'#c43c0c',
  ink3:   '#5e564b',
};

// 01 — Single line, display, with the orange period (the existing pattern, distilled).
function WM01({ h = 22, ink = WMC.ink, accent = WMC.accent }) {
  const fs = Math.round(h * 1.0);
  return (
    <span style={{
      fontFamily: 'var(--display)', fontSize: fs, letterSpacing: -0.6,
      color: ink, lineHeight: 1, whiteSpace: 'nowrap', textTransform: 'none',
    }}>All for Climbing<span style={{ color: accent }}>.</span></span>
  );
}

// 02 — All caps, ultra-tight, no period. Editorial masthead feel.
function WM02({ h = 22, ink = WMC.ink, accent = WMC.accent }) {
  const fs = Math.round(h * 1.0);
  return (
    <span style={{
      fontFamily: 'var(--display)', fontSize: fs, letterSpacing: -1.2,
      color: ink, lineHeight: 1, whiteSpace: 'nowrap', textTransform: 'uppercase',
    }}>ALL FOR CLIMBING<span style={{ color: accent }}>.</span></span>
  );
}

// 03 — Mono utility caps, wide tracking. Reads like a tag/log line.
function WM03({ h = 22, ink = WMC.ink, accent = WMC.accent }) {
  const fs = Math.round(h * 0.78);
  return (
    <span style={{
      fontFamily: 'var(--mono)', fontWeight: 800, fontSize: fs,
      letterSpacing: 2.4, color: ink, lineHeight: 1,
      whiteSpace: 'nowrap', textTransform: 'uppercase',
    }}>ALL · FOR · CLIMBING</span>
  );
}

// 04 — Two-line stacked, display, left-aligned. Posters / share-card masthead.
function WM04({ h = 22, ink = WMC.ink, accent = WMC.accent }) {
  // h is total height; fs is half (two lines)
  const fs = Math.round(h * 0.48);
  const lh = Math.round(fs * 0.96);
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1, gap: 0 }}>
      <span style={{
        fontFamily: 'var(--display)', fontSize: fs, lineHeight: `${lh}px`,
        letterSpacing: -0.6, color: ink, textTransform: 'uppercase',
      }}>ALL FOR</span>
      <span style={{
        fontFamily: 'var(--display)', fontSize: fs, lineHeight: `${lh}px`,
        letterSpacing: -0.6, color: ink, textTransform: 'uppercase',
      }}>CLIMBING<span style={{ color: accent }}>.</span></span>
    </div>
  );
}

// 05 — Highlighted "FOR" — the connecting word as a tinted block.
// Concept: the brand pivots on "for" — it's *for* climbers. Make it the focal point.
function WM05({ h = 22, ink = WMC.ink, accent = WMC.accent }) {
  const fs = Math.round(h * 0.92);
  const pad = Math.round(h * 0.12);
  return (
    <span style={{
      fontFamily: 'var(--display)', fontSize: fs, letterSpacing: -0.6,
      color: ink, lineHeight: 1, whiteSpace: 'nowrap',
      display: 'inline-flex', alignItems: 'center', gap: Math.round(h * 0.18),
      textTransform: 'uppercase',
    }}>
      <span>ALL</span>
      <span style={{
        background: accent, color: '#fff',
        padding: `${pad}px ${pad * 1.6}px`,
        lineHeight: 1, display: 'inline-block',
      }}>FOR</span>
      <span>CLIMBING</span>
    </span>
  );
}

// 06 — Slash separators, mono. Filename / route-tag feel.
function WM06({ h = 22, ink = WMC.ink, accent = WMC.accent }) {
  const fs = Math.round(h * 0.74);
  return (
    <span style={{
      fontFamily: 'var(--mono)', fontWeight: 800, fontSize: fs,
      letterSpacing: 1.2, color: ink, lineHeight: 1,
      whiteSpace: 'nowrap', textTransform: 'uppercase',
    }}>ALL<span style={{ color: accent, padding: '0 0.45em' }}>/</span>FOR<span style={{ color: accent, padding: '0 0.45em' }}>/</span>CLIMBING</span>
  );
}

// 07 — Kerned condensed: A•F•C super-tight, almost touching. Most logo-like.
function WM07({ h = 22, ink = WMC.ink, accent = WMC.accent }) {
  const fs = Math.round(h * 1.0);
  return (
    <span style={{
      fontFamily: 'var(--display)', fontSize: fs, letterSpacing: -2.4,
      color: ink, lineHeight: 1, whiteSpace: 'nowrap',
      textTransform: 'uppercase', fontStyle: 'italic',
    }}>AllForClimbing<span style={{ color: accent, letterSpacing: 0 }}>.</span></span>
  );
}

// 08 — Three lines, hard right-aligned. Newspaper deck.
function WM08({ h = 22, ink = WMC.ink, accent = WMC.accent }) {
  const fs = Math.round(h * 0.34);
  const lh = Math.round(fs * 1.0);
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0 }}>
      <span style={{ fontFamily: 'var(--display)', fontSize: fs, lineHeight: `${lh}px`, letterSpacing: -0.5, color: ink, textTransform: 'uppercase' }}>ALL</span>
      <span style={{ fontFamily: 'var(--display)', fontSize: fs, lineHeight: `${lh}px`, letterSpacing: -0.5, color: ink, textTransform: 'uppercase' }}>FOR</span>
      <span style={{ fontFamily: 'var(--display)', fontSize: fs, lineHeight: `${lh}px`, letterSpacing: -0.5, color: ink, textTransform: 'uppercase' }}>CLIMBING<span style={{ color: accent }}>.</span></span>
    </div>
  );
}

// 09 — Outlined / chiseled. Display word with a hard offset shadow in accent.
// Echoes the app's signature "4×4 hard shadow" pattern, applied to type.
function WM09({ h = 22, ink = WMC.ink, accent = WMC.accent }) {
  const fs = Math.round(h * 1.0);
  const off = Math.max(2, Math.round(h * 0.12));
  return (
    <span style={{
      fontFamily: 'var(--display)', fontSize: fs, letterSpacing: -0.7,
      color: ink, lineHeight: 1, whiteSpace: 'nowrap', textTransform: 'uppercase',
      textShadow: `${off}px ${off}px 0 ${accent}`,
      paddingRight: off, paddingBottom: off, display: 'inline-block',
    }}>ALL FOR CLIMBING</span>
  );
}

// 10 — "ALL FOR" small mono, "CLIMBING" giant display. Hierarchical.
// The product is "Climbing"; "All for" is the qualifier.
function WM10({ h = 22, ink = WMC.ink, accent = WMC.accent }) {
  const big = Math.round(h * 0.68);
  const small = Math.round(h * 0.18);
  const lh = Math.round(big * 1.0);
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1, gap: Math.round(h * 0.06) }}>
      <span style={{
        fontFamily: 'var(--mono)', fontWeight: 800, fontSize: small,
        letterSpacing: 2.8, color: ink, textTransform: 'uppercase',
      }}>ALL · FOR</span>
      <span style={{
        fontFamily: 'var(--display)', fontSize: big, lineHeight: `${lh}px`,
        letterSpacing: -1.2, color: ink, textTransform: 'uppercase',
      }}>CLIMBING<span style={{ color: accent }}>.</span></span>
    </div>
  );
}

// 11 — Underlined "CLIMBING" — accent rule beneath the action word.
function WM11({ h = 22, ink = WMC.ink, accent = WMC.accent }) {
  const fs = Math.round(h * 1.0);
  const ul = Math.max(2, Math.round(h * 0.1));
  return (
    <span style={{
      fontFamily: 'var(--display)', fontSize: fs, letterSpacing: -0.6,
      color: ink, lineHeight: 1, whiteSpace: 'nowrap', textTransform: 'uppercase',
      display: 'inline-flex', alignItems: 'baseline',
    }}>
      <span style={{ paddingRight: '0.18em' }}>ALL FOR</span>
      <span style={{
        borderBottom: `${ul}px solid ${accent}`,
        paddingBottom: Math.round(h * 0.04),
      }}>CLIMBING</span>
    </span>
  );
}

// 12 — Reversed. Orange box + paper-colored type knockout. The app icon's
// chromatic logic, applied to the wordmark itself.
function WM12({ h = 22, ink = WMC.ink, accent = WMC.accent, paper = WMC.paper }) {
  const fs = Math.round(h * 0.74);
  const padX = Math.round(h * 0.36);
  const padY = Math.round(h * 0.22);
  return (
    <span style={{
      fontFamily: 'var(--display)', fontSize: fs, letterSpacing: -0.5,
      color: paper, lineHeight: 1, whiteSpace: 'nowrap', textTransform: 'uppercase',
      background: accent, padding: `${padY}px ${padX}px`,
      display: 'inline-block',
    }}>ALL FOR CLIMBING<span style={{ color: WMC.ink }}>.</span></span>
  );
}

const WORDMARKS = [
  { id: '01', name: 'Title Case · Orange Dot', why: 'The cleanest distillation of the existing system. Display word in title case, the orange period as the only accent.', component: WM01 },
  { id: '02', name: 'Tight Caps Masthead', why: 'All caps, ultra-tight tracking. Editorial. Reads as serious, established — like a newspaper masthead.', component: WM02 },
  { id: '03', name: 'Mono Bullet Tag', why: 'Mono caps with bullet separators. Reads like a route tag or log line — fits the V-grade utility language already in the app.', component: WM03 },
  { id: '04', name: 'Two-Line Stack', why: 'Two lines, left-aligned. Compact horizontal footprint, strong vertical rhythm. Best for square-ish placements.', component: WM04 },
  { id: '05', name: 'FOR Highlighted', why: 'A small idea: the connecting word becomes the focal point — orange block on FOR. The word "for" is the brand promise.', component: WM05 },
  { id: '06', name: 'Slashed Path', why: 'ALL/FOR/CLIMBING with orange slashes. Reads like a filepath, a route tag, or a beta sequence.', component: WM06 },
  { id: '07', name: 'Italic Kerned', why: 'Words run together, italic, super-tight. Most "logo-like" of the set — feels like a single carved unit.', component: WM07 },
  { id: '08', name: 'Right-Aligned Deck', why: 'Three lines, right-aligned. A newspaper deck. Excellent on share cards and posters.', component: WM08 },
  { id: '09', name: 'Hard Shadow', why: 'The app already uses 4×4 hard shadows everywhere. Apply that signature to the type itself: ink word, orange shadow.', component: WM09 },
  { id: '10', name: 'Hierarchical', why: '"ALL · FOR" small in mono; CLIMBING gigantic. The action word dominates; the rest qualifies it.', component: WM10 },
  { id: '11', name: 'Underlined Action', why: 'Accent rule under "CLIMBING" — the verb gets a baseline, like a route call-out.', component: WM11 },
  { id: '12', name: 'Reversed Block', why: 'Knockout: orange block, paper type. Borrows the icon\'s tile-and-knockout logic for the wordmark itself.', component: WM12 },
];

Object.assign(window, {
  WMC,
  WM01, WM02, WM03, WM04, WM05, WM06, WM07, WM08, WM09, WM10, WM11, WM12,
  WORDMARKS,
});
