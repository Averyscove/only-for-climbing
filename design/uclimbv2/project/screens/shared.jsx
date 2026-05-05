// shared.jsx — Wireframe primitives + theme tokens for uClimb
// All screens compose these. Wireframe == flat grey strokes, dashed
// placeholders, mono labels. Orange used sparingly as the single accent.

const UC = {
  // Surfaces (light wireframe on light canvas — readable, gritty)
  paper:       '#f4f1ec',          // off-white chalky background
  card:        '#ffffff',
  ink:         '#161412',          // near-black text
  ink2:        '#3d3833',          // secondary text
  ink3:        '#7a736b',          // tertiary
  ink4:        '#b8b0a6',          // hairline / placeholder
  rule:        '#1a1714',          // wireframe stroke
  ruleSoft:    '#cfc8bd',          // soft hairline divider
  fill:        '#ece6dc',           // muted fill block
  fillDark:    '#1f1c19',           // dark fill block
  accent:      '#e2531a',           // chalk-orange accent
  accentInk:   '#ffffff',
  good:        '#3d6e3a',           // muted moss green (for "sent" success)
  warn:        '#a87c1f',           // amber for projects/in-progress
  // Type
  mono:        '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace',
  sans:        'Inter, -apple-system, system-ui, sans-serif',
  display:     '"Archivo Black", "Inter", system-ui, sans-serif',
};

// ─── Brand mark — All for Climbing (wireframe variant) ─────
function AFCMark({ size = 22, color = UC.ink, bg, rounded = 0.22, style = {} }) {
  const path = "M 10.5 76.2 L 29.7 51.3 L 34.8 56.6 L 57.7 21.6 L 64.5 39 L 60 41.5 L 68 41.5 L 75 51.7 L 88.7 76.2 Z";
  if (bg) {
    const r = rounded * 100;
    return (
      <svg viewBox="0 0 100 100" width={size} height={size} style={style} aria-label="All for Climbing">
        <rect x="0" y="0" width="100" height="100" rx={r} ry={r} fill={bg} />
        <path d={path} fill={color} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={style} aria-label="All for Climbing">
      <path d={path} fill={color} />
    </svg>
  );
}

function AFCLockup({ size = 22, color, accent, mono = false, gap = 8, style = {} }) {
  const ink = color || UC.ink;
  const dot = accent || UC.accent;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap, ...style }}>
      <AFCMark size={size} color={ink} />
      <span style={{
        fontFamily: mono ? UC.mono : UC.display,
        fontSize: Math.round(size * 0.72),
        fontWeight: mono ? 800 : 900,
        letterSpacing: mono ? 1.5 : -0.5,
        textTransform: mono ? 'uppercase' : 'none',
        lineHeight: 1, color: ink, whiteSpace: 'nowrap',
      }}>
        {mono ? 'ALL FOR CLIMBING' : <>All for Climbing<span style={{ color: dot }}>.</span></>}
      </span>
    </div>
  );
}

// Noise / paper texture overlay — subtle, gives the chalky feel
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.08 0 0 0 0 0.06 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E")`;

// ─── Atoms ──────────────────────────────────────────────────
function Stripes({ height = 160, label, dark = false, ar }) {
  // Diagonal-stripe placeholder (the wireframe "image" cell).
  const stroke = dark ? '#3a342e' : '#bdb6ab';
  const bg = dark ? '#22201d' : '#e8e2d6';
  const ink = dark ? '#7a736b' : '#5d574e';
  const style = ar
    ? { aspectRatio: ar, width: '100%' }
    : { height };
  return (
    <div style={{
      ...style,
      background: bg,
      backgroundImage: `repeating-linear-gradient(135deg, transparent 0 14px, ${stroke}33 14px 15px)`,
      border: `1px solid ${stroke}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {label && (
        <span style={{
          fontFamily: UC.mono, fontSize: 10, letterSpacing: 1.5,
          textTransform: 'uppercase', color: ink,
          background: bg, padding: '4px 8px', border: `1px solid ${stroke}`,
        }}>{label}</span>
      )}
    </div>
  );
}

function Tag({ children, accent, dark, mono = true, style = {} }) {
  return (
    <span style={{
      fontFamily: mono ? UC.mono : UC.sans,
      fontSize: 10, fontWeight: 600,
      letterSpacing: 1, textTransform: 'uppercase',
      padding: '4px 7px', lineHeight: 1,
      border: `1px solid ${accent ? UC.accent : (dark ? '#fff' : UC.rule)}`,
      color: accent ? UC.accent : (dark ? '#fff' : UC.ink),
      background: 'transparent',
      display: 'inline-flex', alignItems: 'center', gap: 4,
      ...style,
    }}>{children}</span>
  );
}

function Pill({ children, filled, style = {} }) {
  return (
    <span style={{
      fontFamily: UC.mono, fontSize: 10, fontWeight: 600,
      letterSpacing: 1, textTransform: 'uppercase',
      padding: '5px 10px', borderRadius: 999, lineHeight: 1,
      background: filled ? UC.ink : 'transparent',
      color: filled ? '#fff' : UC.ink,
      border: `1px solid ${UC.ink}`,
      display: 'inline-flex', alignItems: 'center', gap: 5,
      ...style,
    }}>{children}</span>
  );
}

function Avatar({ size = 36, label = 'AB', dark }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      border: `1.5px solid ${dark ? '#fff' : UC.rule}`,
      background: dark ? '#2a2622' : UC.fill,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: UC.mono, fontSize: size * 0.32, fontWeight: 700,
      color: dark ? '#fff' : UC.ink, flexShrink: 0,
    }}>{label}</div>
  );
}

function Hairline({ dashed, color, style = {} }) {
  return <div style={{
    height: 0,
    borderTop: `1px ${dashed ? 'dashed' : 'solid'} ${color || UC.ruleSoft}`,
    ...style,
  }} />;
}

function GradeChip({ grade, sent, project, flash, dark, big }) {
  // V-scale grade chip. sent = filled, project = orange, flash = double border
  const filled = sent && !project;
  const fg = project ? UC.accent : (dark ? '#fff' : UC.ink);
  return (
    <span style={{
      fontFamily: UC.mono, fontWeight: 800,
      fontSize: big ? 18 : 12, letterSpacing: 0.5,
      padding: big ? '8px 12px' : '4px 7px',
      border: `${flash ? 2 : 1.5}px solid ${fg}`,
      boxShadow: flash ? `inset 0 0 0 1px ${dark ? '#000' : '#fff'}, 0 0 0 1.5px ${fg}` : 'none',
      background: filled ? (dark ? '#fff' : UC.ink) : 'transparent',
      color: filled ? (dark ? UC.ink : '#fff') : fg,
      display: 'inline-block', lineHeight: 1,
    }}>{grade}</span>
  );
}

function IconBtn({ children, size = 36, accent, style = {} }) {
  return (
    <button style={{
      width: size, height: size, borderRadius: 0,
      border: `1.5px solid ${accent ? UC.accent : UC.rule}`,
      background: accent ? UC.accent : 'transparent',
      color: accent ? '#fff' : UC.ink,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', padding: 0, flexShrink: 0,
      ...style,
    }}>{children}</button>
  );
}

// ─── Generic SVG icons (line-art, 1.6 stroke) ────────────────
const Icon = {
  plus: (s = 18, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round">
      <path d="M9 3v12M3 9h12"/></svg>
  ),
  search: (s = 18, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round">
      <circle cx="8" cy="8" r="5"/><path d="M12 12l3.5 3.5"/></svg>
  ),
  bell: (s = 18, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 13V8a5 5 0 0110 0v5l1.5 2H2.5L4 13z"/><path d="M7 16a2 2 0 004 0"/></svg>
  ),
  heart: (s = 20, c = 'currentColor', fill = 'none') => (
    <svg width={s} height={s} viewBox="0 0 22 22" fill={fill} stroke={c} strokeWidth="1.6" strokeLinejoin="round">
      <path d="M11 19s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0118 9c0 5.5-7 10-7 10z"/></svg>
  ),
  comment: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 22 22" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <path d="M3 6a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H9l-4 3v-3H6a3 3 0 01-3-3V6z"/></svg>
  ),
  share: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 22 22" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <path d="M11 3v12M11 3l-4 4M11 3l4 4M4 13v4a2 2 0 002 2h10a2 2 0 002-2v-4"/></svg>
  ),
  bookmark: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 22 22" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <path d="M5 3h12v17l-6-4-6 4V3z"/></svg>
  ),
  pin: (s = 16, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <path d="M9 1.5c-3 0-5 2-5 5 0 3.5 5 9 5 9s5-5.5 5-9c0-3-2-5-5-5z"/><circle cx="9" cy="6.5" r="1.5"/></svg>
  ),
  cal: (s = 16, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <rect x="2.5" y="3.5" width="13" height="12" rx="1"/><path d="M2.5 7h13M6 2v3M12 2v3"/></svg>
  ),
  arrow: (s = 18, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h12M11 5l4 4-4 4"/></svg>
  ),
  back: (s = 18, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 9H3M7 5L3 9l4 4"/></svg>
  ),
  more: (s = 18, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill={c}>
      <circle cx="3.5" cy="9" r="1.5"/><circle cx="9" cy="9" r="1.5"/><circle cx="14.5" cy="9" r="1.5"/></svg>
  ),
  send: (s = 18, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <path d="M2 9l14-6-5 14-2.5-5L2 9z"/></svg>
  ),
  camera: (s = 18, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round">
      <path d="M2 5h3l1.5-2h5L13 5h3v9H2V5z"/><circle cx="9" cy="9.5" r="3"/></svg>
  ),
  // tab bar icons
  tabHome: (s = 22, c = 'currentColor', fill = false) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? c : 'none'} stroke={c} strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
      <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9z"/></svg>
  ),
  tabFlame: (s = 22, c = 'currentColor', fill = false) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? c : 'none'} stroke={c} strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 3c1 3 3 4 3 7a3 3 0 01-6 0c0-1 .5-2 1-2.5C9.5 9 8 11 8 14a4 4 0 008 0c0-3.5-2.5-6-4-11z"/></svg>
  ),
  tabPlus: (s = 26, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 26 26" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round">
      <path d="M13 5v16M5 13h16"/></svg>
  ),
  tabChat: (s = 22, c = 'currentColor', fill = false) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? c : 'none'} stroke={c} strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
      <path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3h-7l-5 4v-4H6a3 3 0 01-3-3V6z"/></svg>
  ),
  tabUser: (s = 22, c = 'currentColor', fill = false) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? c : 'none'} stroke={c} strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
      <circle cx="12" cy="8" r="4"/><path d="M3 21c1.5-4 5-6 9-6s7.5 2 9 6"/></svg>
  ),
};

// ─── Tab bar (shared bottom nav) ─────────────────────────────
function TabBar({ active = 'home' }) {
  const items = [
    { id: 'home', icon: Icon.tabHome, label: 'Feed' },
    { id: 'plan', icon: Icon.tabFlame, label: 'Discover' },
    { id: 'post', icon: Icon.tabPlus, label: '' },
    { id: 'chat', icon: Icon.tabChat, label: 'Chat' },
    { id: 'me',   icon: Icon.tabUser, label: 'Me' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 30,
      paddingBottom: 28, paddingTop: 10,
      background: UC.paper,
      borderTop: `1.5px solid ${UC.rule}`,
      display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start',
    }}>
      {items.map((it) => {
        const isActive = it.id === active;
        const isPost = it.id === 'post';
        if (isPost) {
          return (
            <div key={it.id} style={{
              width: 50, height: 50, borderRadius: 0,
              background: UC.accent, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: `1.5px solid ${UC.rule}`,
              boxShadow: '3px 3px 0 ' + UC.rule,
              marginTop: -6,
            }}>{it.icon(26, '#fff')}</div>
          );
        }
        return (
          <div key={it.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: isActive ? UC.ink : UC.ink3,
          }}>
            {it.icon(22, isActive ? UC.ink : UC.ink3, isActive)}
            <span style={{
              fontFamily: UC.mono, fontSize: 9, letterSpacing: 1,
              textTransform: 'uppercase', fontWeight: 600,
            }}>{it.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// StatusBarLight — no-op; IOSDevice renders its own status bar.
// Kept as an empty fragment so existing screen code keeps working.
function StatusBarLight() { return null; }

// Phone shell with paper background + noise overlay
function Phone({ children, dark }) {
  return (
    <div style={{
      width: '100%', height: '100%', position: 'relative',
      background: dark ? '#171411' : UC.paper,
      color: dark ? '#f4f1ec' : UC.ink,
      fontFamily: UC.sans,
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: NOISE_SVG, backgroundSize: '200px 200px',
        opacity: 0.6, mixBlendMode: 'multiply', zIndex: 1,
      }} />
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

Object.assign(window, {
  UC, NOISE_SVG, Stripes, Tag, Pill, Avatar, Hairline, GradeChip,
  IconBtn, Icon, TabBar, StatusBarLight, Phone,
  AFCMark, AFCLockup,
});
