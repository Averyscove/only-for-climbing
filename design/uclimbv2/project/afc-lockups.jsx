// afc-lockups.jsx — six horizontal lockup directions for All for Climbing.
// Each lockup is a self-contained React component that renders to a target height.
// Sized using a `h` prop so we can preview at 22px (in-app header), 32px (share-card),
// and 48px (marketing/onboarding).

const AFC_PATH =
  "M 10.5 76.2 L 29.7 51.3 L 34.8 56.6 L 57.7 21.6 L 64.5 39 L 60 41.5 L 68 41.5 L 75 51.7 L 88.7 76.2 Z";

const COLOR = {
  ink:    '#13110e',
  paper:  '#ece4d6',
  accent: '#e85d2a',
  white:  '#ffffff',
};

// ─── Atomic mark renderers ──────────────────────────────────

// Silhouette only. Color is the fill.
function MarkSilhouette({ size, color = COLOR.ink, style }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={style} aria-hidden="true">
      <path d={AFC_PATH} fill={color} />
    </svg>
  );
}

// Orange tile (the app icon as-is).
function MarkTile({ size, bg = COLOR.accent, fg = COLOR.white, radius = 0.22, style }) {
  const r = radius * 100;
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={style} aria-hidden="true">
      <rect width="100" height="100" rx={r} ry={r} fill={bg} />
      <path d={AFC_PATH} fill={fg} />
    </svg>
  );
}

// Knockout tile — black tile, orange mark (alt for dark surfaces).
function MarkKnockoutTile({ size, style }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={style} aria-hidden="true">
      <rect width="100" height="100" rx="22" ry="22" fill={COLOR.ink} />
      <path d={AFC_PATH} fill={COLOR.accent} />
    </svg>
  );
}

// ─── 6 lockup directions ───────────────────────────────────
// Sizing: every lockup is sized to fit a target HEIGHT `h`.
// Inks: every lockup accepts an `ink` color so it can sit on light or dark.

// 01 — Reference. The existing lockup. Silhouette + display word + accent dot.
function Lockup01({ h = 22, ink = COLOR.ink, accent = COLOR.accent }) {
  const fontSize = Math.round(h * 0.78);
  const gap = Math.round(h * 0.36);
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap, height: h, lineHeight: 1 }}>
      <MarkSilhouette size={h} color={ink} />
      <span style={{
        fontFamily: 'var(--display)',
        fontSize, letterSpacing: -0.5, color: ink, whiteSpace: 'nowrap',
      }}>All for Climbing<span style={{ color: accent }}>.</span></span>
    </div>
  );
}

// 02 — Tile + word. Keeps the marketing app icon intact, paired with the wordmark.
// The tile is square-ish so it reads as a unit; the wordmark sits to its right.
function Lockup02({ h = 22, ink = COLOR.ink, accent = COLOR.accent }) {
  const fontSize = Math.round(h * 0.78);
  const gap = Math.round(h * 0.42);
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap, height: h, lineHeight: 1 }}>
      <MarkTile size={h} bg={accent} fg={COLOR.white} radius={0.24} />
      <span style={{
        fontFamily: 'var(--display)',
        fontSize, letterSpacing: -0.5, color: ink, whiteSpace: 'nowrap',
      }}>All for Climbing<span style={{ color: accent }}>.</span></span>
    </div>
  );
}

// 03 — Knockout tile + tight mono caps. More utilitarian; reads like a wayfinding tag.
// Mono caps with bracket nub instead of period accent — feels like a system label.
function Lockup03({ h = 22, ink = COLOR.ink, accent = COLOR.accent, onDark }) {
  const tile = h;
  const fontSize = Math.round(h * 0.46);
  const lineGap = Math.round(h * 0.16);
  const tileBg = onDark ? COLOR.accent : COLOR.ink;
  const tileFg = onDark ? COLOR.ink : COLOR.accent;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: Math.round(h * 0.34), height: h, lineHeight: 1 }}>
      <svg viewBox="0 0 100 100" width={tile} height={tile} aria-hidden="true">
        <rect width="100" height="100" rx="22" ry="22" fill={tileBg} />
        <path d={AFC_PATH} fill={tileFg} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: lineGap }}>
        <span style={{
          fontFamily: 'var(--mono)', fontWeight: 800, fontSize,
          letterSpacing: 1.6, textTransform: 'uppercase', color: ink, lineHeight: 1,
        }}>All for</span>
        <span style={{
          fontFamily: 'var(--mono)', fontWeight: 800, fontSize,
          letterSpacing: 1.6, textTransform: 'uppercase', color: ink, lineHeight: 1,
        }}>Climbing<span style={{ color: accent }}>.</span></span>
      </div>
    </div>
  );
}

// 04 — Stacked. Two-line tight-set with the silhouette LEFT-ALIGNED to the type.
// Reads like a newspaper masthead — broad at marketing scale, square-ish at icon scale.
function Lockup04({ h = 22, ink = COLOR.ink, accent = COLOR.accent }) {
  // h is the total height of the lockup
  const fontSize = Math.round(h * 0.46);
  const lineH = Math.round(fontSize * 1.0);
  const markSize = Math.round(h * 0.46);
  return (
    <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: Math.round(h * 0.24), height: h, lineHeight: 1 }}>
      <MarkSilhouette size={markSize} color={ink} style={{ marginTop: Math.round(h * 0.04) }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: Math.round(h * 0.06) }}>
        <span style={{
          fontFamily: 'var(--display)', fontSize, lineHeight: `${lineH}px`,
          letterSpacing: -0.4, color: ink, textTransform: 'uppercase',
        }}>All for</span>
        <span style={{
          fontFamily: 'var(--display)', fontSize, lineHeight: `${lineH}px`,
          letterSpacing: -0.4, color: ink, textTransform: 'uppercase',
        }}>Climbing<span style={{ color: accent }}>.</span></span>
      </div>
    </div>
  );
}

// 05 — Bolt divider. The mountain's lightning-bolt notch becomes a typographic separator.
// "ALL · FOR ▲ CLIMBING." — the mark sits IN-LINE with the type, not beside it.
function Lockup05({ h = 22, ink = COLOR.ink, accent = COLOR.accent }) {
  const fontSize = Math.round(h * 0.66);
  const markSize = Math.round(h * 0.92);
  const gap = Math.round(h * 0.22);
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap, height: h, lineHeight: 1 }}>
      <span style={{
        fontFamily: 'var(--display)', fontSize, letterSpacing: -0.3,
        color: ink, textTransform: 'uppercase',
      }}>All for</span>
      <MarkSilhouette size={markSize} color={accent} />
      <span style={{
        fontFamily: 'var(--display)', fontSize, letterSpacing: -0.3,
        color: ink, textTransform: 'uppercase',
      }}>Climbing<span style={{ color: accent }}>.</span></span>
    </div>
  );
}

// 06 — Display marquee. Display word set ULTRA tight with a HUGE accent dot
// rendered as a small orange tile (echoes the app icon corner-radius).
// The mark sits as a smaller stamp-style element to the left, slightly offset upward.
function Lockup06({ h = 22, ink = COLOR.ink, accent = COLOR.accent }) {
  const fontSize = Math.round(h * 0.86);
  const dotSize = Math.round(h * 0.34);
  const dotRadius = Math.max(2, Math.round(h * 0.06));
  const markSize = Math.round(h * 1.0);
  const gap = Math.round(h * 0.36);
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap, height: h, lineHeight: 1 }}>
      <MarkSilhouette size={markSize} color={ink} />
      <span style={{
        fontFamily: 'var(--display)', fontSize, letterSpacing: -0.8,
        color: ink, whiteSpace: 'nowrap', display: 'inline-flex',
        alignItems: 'baseline', gap: Math.round(h * 0.06),
      }}>
        All for Climbing
        <span style={{
          width: dotSize, height: dotSize, background: accent,
          borderRadius: dotRadius, display: 'inline-block',
          alignSelf: 'flex-end', marginBottom: Math.round(h * 0.04),
        }} />
      </span>
    </div>
  );
}

// ─── Index of all 6 ────────────────────────────────────────
const LOCKUPS = [
  { id: '01', name: 'Reference', why: 'The existing handoff lockup. Baseline.', component: Lockup01 },
  { id: '02', name: 'Tile + Word', why: 'App icon stays whole. Most direct synergy with the home-screen icon.', component: Lockup02 },
  { id: '03', name: 'System Tag', why: 'Knockout tile + mono small-caps. Reads like a wayfinding tag — feels at home next to V-grade pills.', component: Lockup03 },
  { id: '04', name: 'Stacked Masthead', why: 'Two-line broadsheet feel. Strong on share cards, posters, profile banners.', component: Lockup04 },
  { id: '05', name: 'Bolt Divider', why: 'The mark separates the words instead of preceding them. The lightning bolt becomes punctuation.', component: Lockup05 },
  { id: '06', name: 'Marquee Dot', why: 'The orange period inflates into a small icon-tile dot — ties the wordmark visually back to the app icon.', component: Lockup06 },
];

Object.assign(window, {
  AFC_PATH, COLOR,
  MarkSilhouette, MarkTile, MarkKnockoutTile,
  Lockup01, Lockup02, Lockup03, Lockup04, Lockup05, Lockup06,
  LOCKUPS,
});
