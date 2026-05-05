// events.jsx — Events list + Map + Plan-a-climb composer

function EventsScreen() {
  const evts = [
    { day: 'TODAY', date: 'APR 27', title: 'TUESDAY NIGHT FLASH', loc: 'Boulder Project · Oakland', time: '7:00 PM', going: 18, host: 'AR', accent: true },
    { day: 'WED', date: 'APR 28', title: 'NEW SETS — V4-V7 SESH', loc: 'Movement · Denver', time: '6:30 PM', going: 7, host: 'TR' },
    { day: 'SAT', date: 'MAY 03', title: 'SLAB SOCIETY', loc: 'The Crag · SF', time: '10:00 AM', going: 12, host: 'JU' },
    { day: 'SUN', date: 'MAY 04', title: 'OUTDOOR · CASTLE ROCK', loc: 'Castle Rock SP', time: '8:00 AM', going: 24, host: 'BE' },
    { day: 'THU', date: 'MAY 08', title: 'COMP NIGHT — QUALIFIERS', loc: 'Boulder Project · OAK', time: '7:30 PM', going: 41, host: 'BP' },
  ];
  return (
    <Phone>
      <StatusBarLight />
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 80, overflow: 'hidden' }}>
        <div style={{ padding: '12px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: UC.display, fontSize: 28, fontWeight: 900, letterSpacing: -0.8, lineHeight: 1, textTransform: 'uppercase' }}>DISCOVER</div>
          <IconBtn size={32} accent>{Icon.plus(16, '#fff')}</IconBtn>
        </div>
        {/* segmented */}
        <div style={{ margin: '0 16px 12px', display: 'flex', border: `1.5px solid ${UC.rule}` }}>
          {['EVENTS', 'MAP', 'CRAGS'].map((t, i) => (
            <div key={t} style={{
              flex: 1, padding: '8px 0', textAlign: 'center',
              fontFamily: UC.mono, fontSize: 11, letterSpacing: 1, fontWeight: 700,
              background: i === 0 ? UC.ink : 'transparent',
              color: i === 0 ? '#fff' : UC.ink,
              borderRight: i < 2 ? `1.5px solid ${UC.rule}` : 'none',
            }}>{t}</div>
          ))}
        </div>
        {/* filter chips */}
        <div style={{ display: 'flex', gap: 6, padding: '0 16px 12px', overflowX: 'hidden' }}>
          <Pill filled>NEAR ME</Pill>
          <Pill>THIS WEEK</Pill>
          <Pill>OUTDOOR</Pill>
          <Pill>BEGINNER</Pill>
        </div>
        {/* event list */}
        <div style={{ padding: '0 16px' }}>
          {evts.map((e, i) => (
            <div key={i} style={{
              display: 'flex', gap: 14, padding: '14px 0',
              borderBottom: i < evts.length - 1 ? `1px dashed ${UC.ruleSoft}` : 'none',
            }}>
              <div style={{
                width: 56, flexShrink: 0,
                background: e.accent ? UC.accent : UC.fill,
                border: `1.5px solid ${UC.rule}`,
                color: e.accent ? '#fff' : UC.ink,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                fontFamily: UC.mono, padding: '8px 0',
              }}>
                <span style={{ fontSize: 9, letterSpacing: 1.5, fontWeight: 700 }}>{e.day}</span>
                <span style={{ fontSize: 18, fontWeight: 900, marginTop: 2, letterSpacing: -0.3 }}>{e.date.split(' ')[1]}</span>
                <span style={{ fontSize: 8, letterSpacing: 1.5, fontWeight: 700, marginTop: 2 }}>{e.date.split(' ')[0]}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: UC.display, fontSize: 15, fontWeight: 900, color: UC.ink, lineHeight: 1.1, letterSpacing: -0.2, textTransform: 'uppercase' }}>{e.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6, fontFamily: UC.mono, fontSize: 10, color: UC.ink3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                  {Icon.pin(11, UC.ink3)} {e.loc}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3, fontFamily: UC.mono, fontSize: 10, color: UC.ink3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                  {Icon.cal(11, UC.ink3)} {e.time}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                  <Avatar size={20} label={e.host} />
                  <span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink2, letterSpacing: 0.5 }}>{e.going} GOING</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="plan" />
    </Phone>
  );
}

// ── Plan a climb (composer) ─────────────────────────────────
function PlanClimbScreen() {
  return (
    <Phone>
      <StatusBarLight />
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
        <div style={{ padding: '8px 16px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <IconBtn size={32}>{Icon.back(14)}</IconBtn>
          <div style={{ fontFamily: UC.mono, fontSize: 11, letterSpacing: 2, color: UC.ink3, textTransform: 'uppercase', fontWeight: 700 }}>NEW · CLIMB</div>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.accent, letterSpacing: 1, fontWeight: 700 }}>POST →</span>
        </div>
        <div style={{ padding: '0 16px' }}>
          <div style={{ fontFamily: UC.display, fontSize: 28, fontWeight: 900, letterSpacing: -0.8, lineHeight: 1.05, textTransform: 'uppercase', marginBottom: 4 }}>
            LET'S BOULDER<br/>
            <span style={{ color: UC.ink4 }}>WHAT'S THE PLAN?</span>
            <span style={{ display: 'inline-block', width: 10, height: 24, background: UC.accent, marginLeft: 6, verticalAlign: 'text-bottom' }} />
          </div>
        </div>
        {/* Form */}
        <div style={{ padding: '20px 16px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { k: 'TITLE', v: 'Sunday Slab Society', input: true },
            { k: 'GYM / CRAG', v: 'The Crag · SF', icon: 'pin' },
            { k: 'DATE', v: 'Sunday, May 4', icon: 'cal' },
            { k: 'TIME', v: '10:00 AM — 1:00 PM', icon: 'cal' },
          ].map((f) => (
            <div key={f.k}>
              <div style={{ fontFamily: UC.mono, fontSize: 9, letterSpacing: 2, color: UC.ink3, textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>{f.k}</div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                borderBottom: `1.5px solid ${UC.rule}`, padding: '6px 0',
              }}>
                {f.icon === 'pin' && Icon.pin(15, UC.ink2)}
                {f.icon === 'cal' && Icon.cal(15, UC.ink2)}
                <span style={{ flex: 1, fontSize: 16, color: UC.ink, fontWeight: f.input ? 800 : 500 }}>{f.v}</span>
                {f.input && <span style={{ width: 2, height: 18, background: UC.accent }} />}
              </div>
            </div>
          ))}
          {/* Grade range */}
          <div>
            <div style={{ fontFamily: UC.mono, fontSize: 9, letterSpacing: 2, color: UC.ink3, textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>GRADE RANGE</div>
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              {['V0','V1','V2','V3','V4','V5','V6','V7','V8','V9','V10'].map((g, i) => {
                const active = i >= 2 && i <= 7;
                const start = i === 2, end = i === 7;
                return (
                  <span key={g} style={{
                    fontFamily: UC.mono, fontSize: 11, fontWeight: 800,
                    padding: '6px 9px',
                    background: active ? (start || end ? UC.accent : UC.ink) : 'transparent',
                    color: active ? '#fff' : UC.ink2,
                    border: `1.5px solid ${active ? (start || end ? UC.accent : UC.ink) : UC.ruleSoft}`,
                  }}>{g}</span>
                );
              })}
            </div>
          </div>
          {/* Visibility */}
          <div>
            <div style={{ fontFamily: UC.mono, fontSize: 9, letterSpacing: 2, color: UC.ink3, textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>WHO CAN SEE</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {[
                { l: 'PUBLIC', a: true },
                { l: 'CREW', a: false },
                { l: 'CRUSHERS', a: false },
              ].map((o) => (
                <div key={o.l} style={{
                  flex: 1, padding: '10px 0', textAlign: 'center',
                  fontFamily: UC.mono, fontSize: 10, letterSpacing: 1, fontWeight: 700,
                  border: `1.5px solid ${UC.rule}`,
                  background: o.a ? UC.ink : 'transparent',
                  color: o.a ? '#fff' : UC.ink,
                }}>{o.l}</div>
              ))}
            </div>
          </div>
          {/* Note */}
          <div style={{
            background: UC.fill, border: `1.5px dashed ${UC.rule}`,
            padding: 12, fontFamily: UC.mono, fontSize: 11, color: UC.ink2, lineHeight: 1.5,
          }}>
            "Slab focus. Bring tape. Pizza after at <u>Tony's</u>."
          </div>
        </div>
      </div>
    </Phone>
  );
}

// ── Map screen ─────────────────────────────────────────────
function MapScreen() {
  return (
    <Phone>
      <StatusBarLight />
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 80, overflow: 'hidden' }}>
        <div style={{ padding: '12px 16px 8px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <IconBtn size={32}>{Icon.back(14)}</IconBtn>
          <div style={{
            flex: 1, height: 32, border: `1.5px solid ${UC.rule}`,
            display: 'flex', alignItems: 'center', gap: 8, padding: '0 10px',
          }}>
            {Icon.search(13, UC.ink3)}
            <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.ink3, letterSpacing: 0.5 }}>SEARCH CRAGS, GYMS, FRIENDS</span>
          </div>
        </div>
        {/* Map */}
        <div style={{ position: 'relative', margin: '0 16px', border: `1.5px solid ${UC.rule}`, height: 400, background: '#e8e2d6', overflow: 'hidden' }}>
          <svg width="100%" height="100%" viewBox="0 0 360 400" preserveAspectRatio="none">
            {/* contour lines */}
            {[0,1,2,3,4,5,6].map(i => (
              <path key={i} d={`M -20 ${40 + i * 60} Q 100 ${20 + i * 60} 200 ${50 + i * 60} T 380 ${30 + i * 60}`} stroke={UC.ruleSoft} strokeWidth="1" fill="none"/>
            ))}
            {/* grid hairlines */}
            {[60, 120, 180, 240, 300].map(x => <line key={x} x1={x} y1="0" x2={x} y2="400" stroke={UC.ruleSoft} strokeWidth="0.5"/>)}
            {/* roads */}
            <path d="M 0 240 L 360 220" stroke={UC.ink3} strokeWidth="1.5" fill="none" strokeDasharray="6 3"/>
            <path d="M 200 0 L 220 400" stroke={UC.ink3} strokeWidth="1.5" fill="none" strokeDasharray="6 3"/>
            {/* pins */}
            {[
              [80, 110, 'BP', 'OAK'],
              [240, 80, 'CR', 'SF'],
              [180, 280, 'MV', 'BAY'],
              [300, 320, 'CG', 'NV'],
            ].map(([x, y, l, k]) => (
              <g key={l}>
                <circle cx={x} cy={y} r="20" fill={UC.accent} fillOpacity="0.18"/>
                <rect x={x - 14} y={y - 14} width="28" height="28" fill={UC.paper} stroke={UC.ink} strokeWidth="1.5"/>
                <text x={x} y={y + 4} textAnchor="middle" fontFamily={UC.mono} fontSize="11" fontWeight="800" fill={UC.ink}>{l}</text>
              </g>
            ))}
            {/* user pin */}
            <g>
              <circle cx="160" cy="200" r="14" fill={UC.accent} fillOpacity="0.25"/>
              <circle cx="160" cy="200" r="6" fill={UC.accent} stroke={UC.paper} strokeWidth="2"/>
            </g>
          </svg>
        </div>
        {/* selected card */}
        <div style={{ margin: '14px 16px 0', border: `1.5px solid ${UC.rule}`, background: UC.card, padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <Stripes height={56} ar="1/1" label="" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: UC.display, fontSize: 16, fontWeight: 900, letterSpacing: -0.3, textTransform: 'uppercase' }}>BOULDER PROJECT</div>
              <div style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, letterSpacing: 0.5, textTransform: 'uppercase', marginTop: 4 }}>2.4 MI · OAKLAND, CA · OPEN ‘TIL 11P</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                <Tag>140 PROBLEMS</Tag>
                <Tag accent>12 FRIENDS HERE</Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TabBar active="plan" />
    </Phone>
  );
}

Object.assign(window, { EventsScreen, PlanClimbScreen, MapScreen });
