// profile.jsx — Climber profile: stats, grade pyramid, recent sends

function ProfileScreen() {
  const sends = [
    { grade: 'V7', name: 'Blood Orange', gym: 'Boulder Project', when: 'Today', hero: true },
    { grade: 'V6', name: 'Slabbath', gym: 'Boulder Project', when: 'Today' },
    { grade: 'V5', name: 'Crimp Reaper', gym: 'Movement DEN', when: '2D' },
    { grade: 'V6', name: 'Lichen It', gym: 'Movement DEN', when: '2D' },
    { grade: 'V4', name: 'Warm-up Slab', gym: 'The Crag SF', when: '5D' },
  ];
  // pyramid: V0..V8
  const pyramid = [
    { g: 'V8', sent: 0, project: 1 },
    { g: 'V7', sent: 1, project: 2 },
    { g: 'V6', sent: 4, project: 1 },
    { g: 'V5', sent: 9, project: 0 },
    { g: 'V4', sent: 16, project: 0 },
    { g: 'V3', sent: 28, project: 0 },
  ];
  const max = Math.max(...pyramid.map(p => p.sent + p.project));
  return (
    <Phone>
      <StatusBarLight />
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 80, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '8px 16px 0', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, letterSpacing: 2, textTransform: 'uppercase' }}>@mara.sends</span>
          <div style={{ display: 'flex', gap: 8 }}>
            <IconBtn size={28}>{Icon.share(14)}</IconBtn>
            <IconBtn size={28}>{Icon.more(14)}</IconBtn>
          </div>
        </div>
        <div style={{ padding: '10px 16px 14px', display: 'flex', gap: 14, alignItems: 'center' }}>
          <Avatar size={68} label="MK" />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: UC.display, fontSize: 24, fontWeight: 900, lineHeight: 1, letterSpacing: -0.5, textTransform: 'uppercase' }}>MARA KAUR</div>
            <div style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, letterSpacing: 1, marginTop: 4, textTransform: 'uppercase' }}>OAKLAND, CA · CLIMBING SINCE '21</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
              <Tag>V7 PEAK</Tag>
              <Tag accent>OUTDOOR</Tag>
            </div>
          </div>
        </div>
        {/* Stat row */}
        <div style={{ margin: '0 16px 14px', border: `1.5px solid ${UC.rule}`, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            ['SENDS', '212'],
            ['SESSIONS', '64'],
            ['SPOTS', '9'],
            ['CREW', '38'],
          ].map(([k, v], i) => (
            <div key={k} style={{
              padding: '10px 6px', textAlign: 'center',
              borderRight: i < 3 ? `1.5px solid ${UC.rule}` : 'none',
              background: i === 0 ? UC.fill : 'transparent',
            }}>
              <div style={{ fontFamily: UC.display, fontSize: 20, fontWeight: 900, lineHeight: 1 }}>{v}</div>
              <div style={{ fontFamily: UC.mono, fontSize: 9, letterSpacing: 1.5, color: UC.ink3, textTransform: 'uppercase', marginTop: 4 }}>{k}</div>
            </div>
          ))}
        </div>
        {/* Tabs */}
        <div style={{ padding: '0 16px', display: 'flex', gap: 14, borderBottom: `1.5px solid ${UC.ruleSoft}` }}>
          {['SENDS', 'PYRAMID', 'SPOTS', 'MEDIA'].map((t, i) => (
            <div key={t} style={{
              padding: '10px 0', fontFamily: UC.mono, fontSize: 11, letterSpacing: 1,
              fontWeight: i === 0 ? 800 : 600,
              color: i === 0 ? UC.ink : UC.ink3,
              borderBottom: i === 0 ? `2.5px solid ${UC.accent}` : 'none',
              marginBottom: -1.5,
            }}>{t}</div>
          ))}
        </div>
        {/* Pyramid mini */}
        <div style={{ padding: '14px 16px 4px' }}>
          <div style={{ fontFamily: UC.mono, fontSize: 10, letterSpacing: 1.5, color: UC.ink3, textTransform: 'uppercase', marginBottom: 8 }}>30-DAY PYRAMID</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {pyramid.map((p) => (
              <div key={p.g} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: UC.mono, fontSize: 11, fontWeight: 800, width: 24 }}>{p.g}</span>
                <div style={{ flex: 1, height: 14, background: UC.fill, border: `1px solid ${UC.ruleSoft}`, display: 'flex' }}>
                  <div style={{ width: `${(p.sent / max) * 100}%`, background: UC.ink }} />
                  <div style={{ width: `${(p.project / max) * 100}%`, background: UC.accent }} />
                </div>
                <span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, width: 36, textAlign: 'right' }}>{p.sent}·{p.project}P</span>
              </div>
            ))}
          </div>
        </div>
        {/* Recent sends list */}
        <div style={{ padding: '12px 16px 0' }}>
          <div style={{ fontFamily: UC.mono, fontSize: 10, letterSpacing: 1.5, color: UC.ink3, textTransform: 'uppercase', marginBottom: 8 }}>RECENT SENDS</div>
          {sends.map((s, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 0',
              borderBottom: i < sends.length - 1 ? `1px solid ${UC.ruleSoft}` : 'none',
            }}>
              <GradeChip grade={s.grade} dark={false} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: UC.ink }}>
                  {s.name}{s.hero && <span style={{ fontFamily: UC.mono, color: UC.accent, marginLeft: 6, fontSize: 10, letterSpacing: 1 }}>★ FIRST</span>}
                </div>
                <div style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, letterSpacing: 0.5, textTransform: 'uppercase' }}>{s.gym} · {s.when}</div>
              </div>
              {Icon.arrow(14, UC.ink3)}
            </div>
          ))}
        </div>
      </div>
      <TabBar active="me" />
    </Phone>
  );
}

Object.assign(window, { ProfileScreen });
