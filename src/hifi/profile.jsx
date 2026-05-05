// hifi-profile.jsx — refined profile

function HFProfileScreen() {
  const sends = [
    { grade: 'V7', name: 'Blood Orange', gym: 'Boulder Project', when: 'Today', hero: true, src: HF_IMG.send1 },
    { grade: 'V6', name: 'Slabbath', gym: 'Boulder Project', when: 'Today', src: HF_IMG.send2 },
    { grade: 'V5', name: 'Crimp Reaper', gym: 'Movement DEN', when: '2D', src: HF_IMG.gym1 },
    { grade: 'V6', name: 'Lichen It', gym: 'Movement DEN', when: '2D', src: HF_IMG.outdoor1 },
  ];
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
    <HFPhone>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 80, overflowY: 'auto', overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}>
        {/* Banner image */}
        <div style={{ position: 'relative' }}>
          <Photo src={HF_IMG.outdoor1} height={140} dim={0.35} />
          <div style={{ position: 'absolute', top: 54, left: 14, right: 14, display: 'flex', justifyContent: 'space-between' }}>
            <div onClick={() => window.UC && window.UC.navigate('feed')} style={{ cursor: 'pointer' }}>
              <HFIconBtn size={32} dark>{HFIcon.back(14, '#fff')}</HFIconBtn>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div onClick={() => window.UC && window.UC.navigate('shareC')} style={{ cursor: 'pointer' }}>
                <HFIconBtn size={32} dark>{HFIcon.share(14, '#fff')}</HFIconBtn>
              </div>
              <HFIconBtn size={32} dark>{HFIcon.more(14, '#fff')}</HFIconBtn>
            </div>
          </div>
        </div>
        <div style={{ padding: '0 16px', marginTop: -36, position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
            <div style={{ borderRadius: '50%', padding: 3, background: HF.paper }}>
              <HFAvatar src={HF_IMG.mara} size={84} />
            </div>
            <div style={{ flex: 1, paddingBottom: 6 }}>
              <div style={{ fontFamily: HF.display, fontSize: 22, letterSpacing: -0.5, lineHeight: 1, textTransform: 'uppercase' }}>MARA KAUR</div>
              <div style={{ fontFamily: HF.mono, fontSize: 10, color: HF.ink3, letterSpacing: 1, marginTop: 4, textTransform: 'uppercase' }}>@mara.sends · OAK CA</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
            <HFTag>V7 PEAK</HFTag>
            <HFTag accent>OUTDOOR</HFTag>
            <HFTag>SINCE '21</HFTag>
          </div>
          <div style={{ fontSize: 13, color: HF.ink2, lineHeight: 1.45, marginTop: 10 }}>
            Boulderer · slab > overhang · always projecting something. Sponsored by coffee.
          </div>
        </div>
        {/* Stats */}
        <div style={{ margin: '14px 16px 12px', border: `1px solid ${HF.rule}`, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: HF.card }}>
          {[['SENDS', '212'], ['SESH', '64'], ['SPOTS', '9'], ['CREW', '38']].map(([k, v], i) => (
            <div key={k} style={{ padding: '10px 4px', textAlign: 'center', borderRight: i < 3 ? `1px solid ${HF.ruleSft}` : 'none', background: i === 0 ? HF.paper2 : 'transparent' }}>
              <div style={{ fontFamily: HF.display, fontSize: 20, lineHeight: 1 }}>{v}</div>
              <div style={{ fontFamily: HF.mono, fontSize: 9, letterSpacing: 1.5, color: HF.ink3, textTransform: 'uppercase', marginTop: 4 }}>{k}</div>
            </div>
          ))}
        </div>
        {/* Tabs */}
        <div style={{ padding: '0 16px', display: 'flex', gap: 14, borderBottom: `1px solid ${HF.ruleSft}` }}>
          {['SENDS', 'PYRAMID', 'SPOTS', 'MEDIA'].map((t, i) => (
            <div key={t} style={{ padding: '8px 0', fontFamily: HF.mono, fontSize: 11, letterSpacing: 1, fontWeight: i === 0 ? 800 : 600, color: i === 0 ? HF.ink : HF.ink3, borderBottom: i === 0 ? `2.5px solid ${HF.accent}` : 'none', marginBottom: -1 }}>{t}</div>
          ))}
        </div>
        {/* Pyramid */}
        <div style={{ padding: '12px 16px 4px' }}>
          <div style={{ fontFamily: HF.mono, fontSize: 10, letterSpacing: 1.5, color: HF.ink3, textTransform: 'uppercase', marginBottom: 8 }}>30-DAY PYRAMID</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {pyramid.map((p) => (
              <div key={p.g} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: HF.mono, fontSize: 11, fontWeight: 800, width: 24 }}>{p.g}</span>
                <div style={{ flex: 1, height: 14, background: HF.paper2, border: `1px solid ${HF.ruleSft}`, display: 'flex' }}>
                  <div style={{ width: `${(p.sent / max) * 100}%`, background: HF.ink }} />
                  <div style={{ width: `${(p.project / max) * 100}%`, background: HF.amber }} />
                </div>
                <span style={{ fontFamily: HF.mono, fontSize: 10, color: HF.ink3, width: 38, textAlign: 'right' }}>{p.sent}·{p.project}P</span>
              </div>
            ))}
          </div>
        </div>
        {/* Recent */}
        <div style={{ padding: '12px 16px 0' }}>
          <div style={{ fontFamily: HF.mono, fontSize: 10, letterSpacing: 1.5, color: HF.ink3, textTransform: 'uppercase', marginBottom: 8 }}>RECENT</div>
          {sends.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: i < sends.length - 1 ? `1px solid ${HF.ruleSft}` : 'none' }}>
              <Photo src={s.src} height={48} style={{ width: 48, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: HF.ink, display: 'flex', alignItems: 'center', gap: 6 }}>
                  {s.name}
                  {s.hero && <span style={{ fontFamily: HF.mono, color: HF.accent, fontSize: 9, letterSpacing: 1, fontWeight: 800 }}>★ FIRST</span>}
                </div>
                <div style={{ fontFamily: HF.mono, fontSize: 10, color: HF.ink3, letterSpacing: 0.5, textTransform: 'uppercase' }}>{s.gym} · {s.when}</div>
              </div>
              <HFGrade grade={s.grade} sent />
            </div>
          ))}
        </div>
      </div>
      <HFTabBar active="me" />
    </HFPhone>
  );
}

Object.assign(window, { HFProfileScreen });
