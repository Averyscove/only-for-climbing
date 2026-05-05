// achievements.jsx — Three variations of the hero share/achievement card

// ── Variant A: BIG STAT BLOCK (already in feed) ─────────────
// (defined inline here standalone for the variations row)
function ShareCardA() {
  return (
    <div style={{ width: '100%', height: '100%', background: UC.paper, padding: 18, boxSizing: 'border-box', color: UC.ink }}>
      <div style={{
        background: UC.card, border: `1.5px solid ${UC.rule}`,
        boxShadow: `5px 5px 0 ${UC.rule}`, height: '100%',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: `1.5px solid ${UC.rule}` }}>
          <Avatar size={32} label="MK" />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 13 }}>Mara K.</div>
            <div style={{ fontFamily: UC.mono, fontSize: 9, color: UC.ink3, letterSpacing: 1, textTransform: 'uppercase' }}>BOULDER PROJECT · OAK</div>
          </div>
          <Tag accent>SENT</Tag>
        </div>
        <div style={{ flex: 1, position: 'relative' }}>
          <Stripes height="100%" dark label="VIDEO" />
          <div style={{
            position: 'absolute', inset: 'auto 12px 12px',
            background: UC.paper, padding: '12px 14px',
            border: `1.5px solid ${UC.rule}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div style={{ fontFamily: UC.mono, fontSize: 9, letterSpacing: 1.5, color: UC.ink3, textTransform: 'uppercase', fontWeight: 600 }}>FIRST SEND</div>
                <div style={{ fontFamily: UC.display, fontSize: 36, fontWeight: 900, lineHeight: 1, letterSpacing: -1 }}>V7</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: UC.mono, fontSize: 9, color: UC.ink3, letterSpacing: 1, textTransform: 'uppercase' }}>"BLOOD ORANGE"</div>
                <div style={{ fontFamily: UC.mono, fontSize: 11, color: UC.ink2, marginTop: 4 }}>14 ATTEMPTS · 3 SESH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Variant B: TICKER / RECEIPT ──────────────────────────────
function ShareCardB() {
  return (
    <div style={{ width: '100%', height: '100%', background: UC.fillDark, padding: 16, boxSizing: 'border-box', color: UC.ink }}>
      <div style={{
        background: '#f8f5ee', height: '100%',
        border: `1px solid ${UC.ink}`,
        boxShadow: `0 0 0 4px ${UC.fillDark}, 0 0 0 5px ${UC.accent}`,
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        fontFamily: UC.mono,
      }}>
        {/* receipt header */}
        <div style={{ padding: '14px 16px 10px', borderBottom: `1.5px dashed ${UC.ink}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: UC.ink2 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><AFCMark size={10} color={UC.ink} />ALL FOR CLIMBING · LOG</span>
            <span>#00471</span>
          </div>
          <div style={{
            fontFamily: UC.display, fontSize: 28, fontWeight: 900,
            letterSpacing: -0.5, marginTop: 8, lineHeight: 1,
            textTransform: 'uppercase',
          }}>
            SEND<br/>RECEIPT
          </div>
        </div>
        {/* line items */}
        <div style={{ padding: '10px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: 7, fontSize: 11 }}>
          {[
            ['CLIMBER',     'M. KAUR'],
            ['PROBLEM',     'BLOOD ORANGE'],
            ['GRADE',       'V7'],
            ['STYLE',       'OVERHANG · DYNO'],
            ['GYM',         'BOULDER PROJECT'],
            ['SESSION',     '03 / 03'],
            ['ATTEMPTS',    '14'],
            ['DATE',        '04·27·26'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 8, color: UC.ink }}>
              <span style={{ letterSpacing: 1, color: UC.ink3, width: 78 }}>{k}</span>
              <span style={{
                flex: 1, borderBottom: `1px dotted ${UC.ink3}`,
                marginBottom: 2, height: 1,
              }} />
              <span style={{ fontWeight: 700 }}>{v}</span>
            </div>
          ))}
        </div>
        {/* total bar */}
        <div style={{
          background: UC.ink, color: '#fff',
          padding: '12px 16px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        }}>
          <span style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase' }}>TOTAL · FIRST SEND</span>
          <span style={{ fontFamily: UC.display, fontSize: 22, fontWeight: 900 }}>+ V7</span>
        </div>
        {/* barcode */}
        <div style={{ padding: '10px 16px 14px', background: '#f8f5ee' }}>
          <div style={{
            height: 30,
            backgroundImage: `repeating-linear-gradient(90deg, ${UC.ink} 0 1px, transparent 1px 3px, ${UC.ink} 3px 5px, transparent 5px 6px, ${UC.ink} 6px 8px, transparent 8px 11px, ${UC.ink} 11px 13px, transparent 13px 14px)`,
          }} />
          <div style={{ textAlign: 'center', fontSize: 9, letterSpacing: 3, marginTop: 4, color: UC.ink2 }}>
            AFC·MK·V7·24
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Variant C: TOPO / ROUTE CARD ────────────────────────────
function ShareCardC() {
  return (
    <div style={{ width: '100%', height: '100%', background: UC.paper, padding: 16, boxSizing: 'border-box', position: 'relative', color: UC.ink }}>
      <div style={{
        background: UC.card, height: '100%',
        border: `1.5px solid ${UC.rule}`,
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* topo header */}
        <div style={{
          padding: '12px 14px',
          background: UC.ink, color: '#fff',
          fontFamily: UC.mono,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: '#b8b0a6', display: 'inline-flex', alignItems: 'center', gap: 4 }}><AFCMark size={10} color="#b8b0a6" />ALL FOR CLIMBING · TOPO</div>
            <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: 0.5, marginTop: 2 }}>BLOOD ORANGE · WALL 4</div>
          </div>
          <GradeChip grade="V7" big dark />
        </div>
        {/* topo wall */}
        <div style={{ flex: 1, position: 'relative', background: '#ede6d8' }}>
          <Stripes height="100%" label="" />
          <svg viewBox="0 0 200 300" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            {/* Route line */}
            <path d="M 50 280 Q 60 220 90 200 T 110 140 Q 120 100 95 70 Q 75 50 110 30" stroke={UC.accent} strokeWidth="2.5" fill="none" strokeDasharray="4 3" strokeLinecap="round"/>
            {/* Holds */}
            {[
              [50, 280, '1'], [90, 200, '2'], [110, 140, '3'],
              [95, 70, '4'], [110, 30, 'TOP'],
            ].map(([x, y, n], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="8" fill={UC.paper} stroke={UC.ink} strokeWidth="1.5"/>
                <text x={x} y={y + 3} textAnchor="middle" fontSize="9" fontFamily={UC.mono} fontWeight="700" fill={UC.ink}>{n}</text>
              </g>
            ))}
            {/* crux marker */}
            <g>
              <rect x="120" y="105" width="36" height="16" fill={UC.accent} stroke={UC.ink} strokeWidth="1"/>
              <text x="138" y="116" textAnchor="middle" fontSize="9" fontFamily={UC.mono} fontWeight="700" fill="#fff" letterSpacing="1">CRUX</text>
            </g>
          </svg>
          <div style={{
            position: 'absolute', top: 10, right: 10,
            background: UC.paper, border: `1.5px solid ${UC.rule}`,
            padding: '4px 8px', fontFamily: UC.mono, fontSize: 9,
            letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700,
          }}>FA: M. KAUR</div>
        </div>
        {/* footer stats */}
        <div style={{
          padding: '12px 14px', borderTop: `1.5px solid ${UC.rule}`,
          fontFamily: UC.mono,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8,
        }}>
          {[
            ['MOVES', '8'],
            ['ATTEMPTS', '14'],
            ['STYLE', 'DYNO'],
            ['ANGLE', '40°'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 8, letterSpacing: 1.5, color: UC.ink3, textTransform: 'uppercase' }}>{k}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: UC.ink, marginTop: 1 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ShareCardA, ShareCardB, ShareCardC });
