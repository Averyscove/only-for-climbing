// hifi-events.jsx — events list, plan, map

function HFEventsScreen() {
  const evts = [
    { day: 'TODAY', date: '27', mo: 'APR', title: 'TUESDAY NIGHT FLASH', loc: 'Boulder Project · OAK', time: '7:00 PM', going: 18, host: HF_IMG.ari, accent: true, src: HF_IMG.gym2 },
    { day: 'WED', date: '28', mo: 'APR', title: 'NEW SETS · V4-V7', loc: 'Movement · DEN', time: '6:30 PM', going: 7, host: HF_IMG.tomo, src: HF_IMG.gym1 },
    { day: 'SAT', date: '03', mo: 'MAY', title: 'SLAB SOCIETY', loc: 'The Crag · SF', time: '10:00 AM', going: 12, host: HF_IMG.jules, src: HF_IMG.send3 },
    { day: 'SUN', date: '04', mo: 'MAY', title: 'OUTDOOR · CASTLE ROCK', loc: 'Castle Rock SP', time: '8:00 AM', going: 24, host: HF_IMG.ben, src: HF_IMG.outdoor2 },
  ];
  return (
    <HFPhone>
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 80, overflow: 'hidden' }}>
        <div style={{ padding: '8px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: HF.display, fontSize: 28, letterSpacing: -0.8, lineHeight: 1, textTransform: 'uppercase' }}>DISCOVER</div>
          <HFIconBtn size={32} accent>{HFIcon.plus(15, '#fff')}</HFIconBtn>
        </div>
        <div style={{ margin: '0 16px 12px', display: 'flex', border: `1px solid ${HF.rule}` }}>
          {['EVENTS', 'MAP', 'GYMS'].map((t, i) => (
            <div key={t} style={{ flex: 1, padding: '8px 0', textAlign: 'center', fontFamily: HF.mono, fontSize: 11, letterSpacing: 1, fontWeight: 700, background: i === 0 ? HF.ink : 'transparent', color: i === 0 ? '#fff' : HF.ink, borderRight: i < 2 ? `1px solid ${HF.rule}` : 'none' }}>{t}</div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6, padding: '0 16px 12px', overflowX: 'hidden' }}>
          {[['NEAR ME', true], ['THIS WEEK', false], ['OUTDOOR', false], ['BEGINNER', false]].map(([t, on]) => (
            <span key={t} style={{ fontFamily: HF.mono, fontSize: 10, fontWeight: 700, padding: '5px 10px', borderRadius: 999, letterSpacing: 1, background: on ? HF.ink : 'transparent', color: on ? '#fff' : HF.ink, border: `1px solid ${HF.rule}` }}>{t}</span>
          ))}
        </div>
        <div style={{ padding: '0 12px' }}>
          {evts.map((e, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: 4, marginBottom: 14, background: HF.card, border: `1px solid ${HF.ruleSft}`, borderRadius: 3, overflow: 'hidden' }}>
              <Photo src={e.src} style={{ width: 88, flexShrink: 0 }} dim={0.25}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: HF.mono }}>
                  <span style={{ fontSize: 9, letterSpacing: 1.5, fontWeight: 700 }}>{e.day}</span>
                  <span style={{ fontFamily: HF.display, fontSize: 26, letterSpacing: -0.5, lineHeight: 1, marginTop: 2 }}>{e.date}</span>
                  <span style={{ fontSize: 9, letterSpacing: 1.5, fontWeight: 700, marginTop: 2 }}>{e.mo}</span>
                </div>
              </Photo>
              <div style={{ flex: 1, minWidth: 0, padding: '10px 12px 10px 0' }}>
                <div style={{ fontFamily: HF.display, fontSize: 14, lineHeight: 1.1, letterSpacing: -0.2, textTransform: 'uppercase' }}>{e.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6, fontFamily: HF.mono, fontSize: 9, color: HF.ink3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                  {HFIcon.pin(10, HF.ink3)} {e.loc}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2, fontFamily: HF.mono, fontSize: 9, color: HF.ink3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                  {HFIcon.cal(10, HF.ink3)} {e.time}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                  <HFAvatar size={20} src={e.host} />
                  <span style={{ fontFamily: HF.mono, fontSize: 10, color: HF.ink2, letterSpacing: 0.5, fontWeight: 700 }}>{e.going} GOING</span>
                  <div style={{ flex: 1 }} />
                  {e.accent && <span style={{ fontFamily: HF.mono, fontSize: 9, color: HF.accent, fontWeight: 800, letterSpacing: 1 }}>● LIVE</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HFTabBar active="plan" />
    </HFPhone>
  );
}

function HFPlanScreen() {
  return (
    <HFPhone>
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
        <div style={{ padding: '8px 16px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <HFIconBtn size={32}>{HFIcon.back(14)}</HFIconBtn>
          <div style={{ fontFamily: HF.mono, fontSize: 11, letterSpacing: 2, color: HF.ink3, textTransform: 'uppercase', fontWeight: 700 }}>NEW · CLIMB</div>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: HF.mono, fontSize: 11, color: HF.accent, letterSpacing: 1, fontWeight: 800 }}>POST →</span>
        </div>
        <div style={{ padding: '0 16px' }}>
          <div style={{ fontFamily: HF.display, fontSize: 28, letterSpacing: -0.8, lineHeight: 1.05, textTransform: 'uppercase' }}>
            LET'S BOULDER<br/>
            <span style={{ color: HF.ink4 }}>WHAT'S THE PLAN?</span>
            <span style={{ display: 'inline-block', width: 10, height: 22, background: HF.accent, marginLeft: 6, verticalAlign: 'text-bottom' }} />
          </div>
        </div>
        <div style={{ padding: '20px 16px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { k: 'TITLE', v: 'Sunday Slab Society', input: true },
            { k: 'GYM / CRAG', v: 'The Crag · SF', icon: 'pin' },
            { k: 'DATE', v: 'Sunday, May 4', icon: 'cal' },
            { k: 'TIME', v: '10:00 AM — 1:00 PM', icon: 'cal' },
          ].map((f) => (
            <div key={f.k}>
              <div style={{ fontFamily: HF.mono, fontSize: 9, letterSpacing: 2, color: HF.ink3, textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>{f.k}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: `1.5px solid ${HF.rule}`, padding: '6px 0' }}>
                {f.icon === 'pin' && HFIcon.pin(15, HF.ink2)}
                {f.icon === 'cal' && HFIcon.cal(15, HF.ink2)}
                <span style={{ flex: 1, fontSize: 16, color: HF.ink, fontWeight: f.input ? 800 : 500 }}>{f.v}</span>
                {f.input && <span style={{ width: 2, height: 18, background: HF.accent }} />}
              </div>
            </div>
          ))}
          <div>
            <div style={{ fontFamily: HF.mono, fontSize: 9, letterSpacing: 2, color: HF.ink3, textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>GRADE RANGE</div>
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              {['V0','V1','V2','V3','V4','V5','V6','V7','V8','V9','V10'].map((g, i) => {
                const active = i >= 2 && i <= 7;
                const edge = i === 2 || i === 7;
                return (
                  <span key={g} style={{ fontFamily: HF.mono, fontSize: 11, fontWeight: 800, padding: '6px 9px', background: active ? (edge ? HF.accent : HF.ink) : 'transparent', color: active ? '#fff' : HF.ink2, border: `1.5px solid ${active ? (edge ? HF.accent : HF.ink) : HF.ruleSft}` }}>{g}</span>
                );
              })}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: HF.mono, fontSize: 9, letterSpacing: 2, color: HF.ink3, textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>WHO CAN SEE</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {[['PUBLIC', true], ['CREW', false], ['CRUSHERS', false]].map(([l, on]) => (
                <div key={l} style={{ flex: 1, padding: '10px 0', textAlign: 'center', fontFamily: HF.mono, fontSize: 10, letterSpacing: 1, fontWeight: 800, border: `1.5px solid ${HF.rule}`, background: on ? HF.ink : 'transparent', color: on ? '#fff' : HF.ink }}>{l}</div>
              ))}
            </div>
          </div>
          <div style={{ background: HF.paper2, border: `1.5px dashed ${HF.rule}`, padding: 12, fontFamily: HF.mono, fontSize: 11, color: HF.ink2, lineHeight: 1.5 }}>
            "Slab focus. Bring tape. Pizza after at <u>Tony's</u>."
          </div>
        </div>
      </div>
    </HFPhone>
  );
}

function HFMapScreen() {
  return (
    <HFPhone>
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 80, overflow: 'hidden' }}>
        <div style={{ padding: '12px 16px 8px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <HFIconBtn size={32}>{HFIcon.back(14)}</HFIconBtn>
          <div style={{ flex: 1, height: 32, border: `1.5px solid ${HF.rule}`, display: 'flex', alignItems: 'center', gap: 8, padding: '0 10px', background: HF.card }}>
            {HFIcon.search(13, HF.ink3)}
            <span style={{ fontFamily: HF.mono, fontSize: 11, color: HF.ink3, letterSpacing: 0.5 }}>SEARCH CRAGS, GYMS</span>
          </div>
        </div>
        <div style={{ position: 'relative', margin: '0 12px', border: `1px solid ${HF.rule}`, height: 420, overflow: 'hidden' }}>
          <Photo src={HF_IMG.outdoor2} height="100%" dim={0.45} />
          <svg width="100%" height="100%" viewBox="0 0 360 420" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
            {[0,1,2,3,4,5,6].map(i => (
              <path key={i} d={`M -20 ${40 + i * 60} Q 100 ${20 + i * 60} 200 ${50 + i * 60} T 380 ${30 + i * 60}`} stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none"/>
            ))}
            <path d="M 0 240 L 360 220" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" strokeDasharray="6 3"/>
            {[
              [80, 110, 'BP'], [240, 80, 'CR'],
              [180, 280, 'MV'], [300, 320, 'CG'],
            ].map(([x, y, l]) => (
              <g key={l}>
                <circle cx={x} cy={y} r="22" fill={HF.accent} fillOpacity="0.25"/>
                <rect x={x - 16} y={y - 16} width="32" height="32" fill="#fff" stroke={HF.ink} strokeWidth="1.5"/>
                <text x={x} y={y + 4} textAnchor="middle" fontFamily={HF.mono} fontSize="11" fontWeight="800" fill={HF.ink}>{l}</text>
              </g>
            ))}
            <g>
              <circle cx="160" cy="200" r="16" fill={HF.accent} fillOpacity="0.35"/>
              <circle cx="160" cy="200" r="7" fill={HF.accent} stroke="#fff" strokeWidth="2"/>
            </g>
          </svg>
        </div>
        <div style={{ margin: '12px 12px 0', border: `1px solid ${HF.rule}`, background: HF.card, padding: 10, display: 'flex', gap: 12 }}>
          <Photo src={HF_IMG.gym1} style={{ width: 64, height: 64, flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: HF.display, fontSize: 16, letterSpacing: -0.3, textTransform: 'uppercase' }}>BOULDER PROJECT</div>
            <div style={{ fontFamily: HF.mono, fontSize: 10, color: HF.ink3, letterSpacing: 0.5, textTransform: 'uppercase', marginTop: 4 }}>2.4 MI · OAK · OPEN ‘TIL 11P</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
              <HFTag>140 PROBLEMS</HFTag>
              <HFTag accent>12 FRIENDS HERE</HFTag>
            </div>
          </div>
        </div>
      </div>
      <HFTabBar active="plan" />
    </HFPhone>
  );
}

Object.assign(window, { HFEventsScreen, HFPlanScreen, HFMapScreen });
