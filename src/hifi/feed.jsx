// hifi-feed.jsx — refined feed with real imagery

function HFFeedHeader() {
  const openPicker = () => window.UC && window.UC.openPicker && window.UC.openPicker();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 16px 12px' }}>
      <AFCLockup size={20} color={HF.ink} accent={HF.accent} />
      <div style={{ flex: 1 }} />
      <button
        onClick={openPicker}
        title="Browse all screens"
        style={{
          fontFamily: HF.mono, fontSize: 10, fontWeight: 800, letterSpacing: 1.5,
          color: '#fff', background: HF.accent,
          border: 'none', padding: '7px 10px', cursor: 'pointer',
          boxShadow: `2px 2px 0 ${HF.rule}`,
          textTransform: 'uppercase',
        }}
      >SCREENS</button>
      <HFIconBtn size={34}>{HFIcon.search(15)}</HFIconBtn>
      <div style={{ position: 'relative' }}>
        <HFIconBtn size={34}>{HFIcon.bell(15)}</HFIconBtn>
        <span style={{ position: 'absolute', top: 6, right: 6, width: 8, height: 8, background: HF.accent, borderRadius: '50%', border: `1.5px solid ${HF.paper}` }} />
      </div>
    </div>
  );
}

function HFStoryRail() {
  const stories = [
    { id: 'me', label: 'You', mine: true, src: HF_IMG.you },
    { id: 'mara', label: 'Mara', live: true, grade: 'V7', src: HF_IMG.mara },
    { id: 'jules', label: 'Jules', src: HF_IMG.jules, grade: 'V5' },
    { id: 'ben', label: 'Ben', src: HF_IMG.ben, grade: 'V9' },
    { id: 'ari', label: 'Ari', src: HF_IMG.ari, grade: 'V4' },
    { id: 'tomo', label: 'Tomo', src: HF_IMG.tomo, grade: 'V8' },
    { id: 'nat', label: 'Nat', src: HF_IMG.nat, grade: 'V6' },
  ];
  return (
    <div style={{ display: 'flex', gap: 12, padding: '4px 16px 14px', overflowX: 'hidden' }}>
      {stories.map((s) => (
        <div key={s.id} onClick={() => window.UC && window.UC.navigate(s.mine ? 'composer' : 'story')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, flexShrink: 0, cursor: 'pointer' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              padding: 2.5,
              background: s.live
                ? `conic-gradient(from 220deg, ${HF.accent}, ${HF.amber}, ${HF.accent})`
                : (s.mine ? HF.paper2 : HF.ruleSft),
            }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: `2px solid ${HF.paper}` }}>
                <img src={s.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            {s.mine && (
              <div style={{ position: 'absolute', bottom: -2, right: -2, width: 22, height: 22, borderRadius: '50%', background: HF.accent, border: `2px solid ${HF.paper}`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{HFIcon.plus(12, '#fff')}</div>
            )}
            {s.grade && !s.mine && (
              <div style={{ position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)', background: HF.ink, color: '#fff', fontFamily: HF.mono, fontSize: 9, fontWeight: 800, padding: '2px 5px', letterSpacing: 0.5, borderRadius: 2 }}>{s.grade}</div>
            )}
          </div>
          <span style={{ fontFamily: HF.mono, fontSize: 9, letterSpacing: 0.5, textTransform: 'uppercase', color: HF.ink2, fontWeight: 600 }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function HFPostHeader({ name, handle, where, when, group, src }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px 10px' }}>
      <HFAvatar size={38} src={src} label={name.slice(0,2).toUpperCase()} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: HF.ink }}>{name}</span>
          <span style={{ fontFamily: HF.mono, fontSize: 10, color: HF.ink3 }}>@{handle}</span>
        </div>
        <div style={{ fontFamily: HF.mono, fontSize: 10, color: HF.ink3, letterSpacing: 0.5, textTransform: 'uppercase' }}>
          {where} · {when}{group && <> · <span style={{ color: HF.accent }}>{group}</span></>}
        </div>
      </div>
      {HFIcon.more(18, HF.ink3)}
    </div>
  );
}

function HFPostActions({ likes = 142, comments = 18, liked }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '10px 14px 4px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {HFIcon.heart(22, liked ? HF.accent : HF.ink, liked ? HF.accent : 'none')}
        <span style={{ fontFamily: HF.mono, fontSize: 12, fontWeight: 700 }}>{likes}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {HFIcon.comment(22, HF.ink)}
        <span style={{ fontFamily: HF.mono, fontSize: 12, fontWeight: 700 }}>{comments}</span>
      </div>
      {HFIcon.share(22, HF.ink)}
      <div style={{ flex: 1 }} />
      {HFIcon.bookmark(22, HF.ink)}
    </div>
  );
}

// HERO achievement post — refined w/ real photo
function HFAchievementPost() {
  return (
    <div onClick={() => window.UC && window.UC.navigate('shareB')} style={{ margin: '0 12px 16px', background: HF.card, border: `1px solid ${HF.ruleSft}`, borderRadius: 4, overflow: 'hidden', boxShadow: `0 1px 0 ${HF.ruleSft}, 4px 4px 0 ${HF.rule}`, cursor: 'pointer' }}>
      <HFPostHeader name="Mara K." handle="mara.sends" where="Boulder Project · OAK" when="2H" group="CRUSHERS" src={HF_IMG.mara} />
      <div style={{ position: 'relative' }}>
        <Photo src={HF_IMG.send1} height={340} dim={0.15}>
          {/* play badge */}
          <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(13,12,10,0.55)', backdropFilter: 'blur(10px)', borderRadius: 999, padding: '5px 10px', color: '#fff', fontFamily: HF.mono, fontSize: 10, fontWeight: 700, letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 5 }}>
            {HFIcon.play(10)} 0:24
          </div>
          {/* SENT badge top-left */}
          <div style={{ position: 'absolute', top: 12, left: 12, background: HF.accent, color: '#fff', padding: '6px 11px', fontFamily: HF.mono, fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', boxShadow: `2px 2px 0 ${HF.accent2}` }}>SENT ↑</div>
          {/* Stat overlay bottom */}
          <div style={{ position: 'absolute', left: 12, right: 12, bottom: 12, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
            <div style={{ background: 'rgba(13,12,10,0.6)', backdropFilter: 'blur(14px)', padding: '10px 13px', borderRadius: 4, color: '#fff', flex: 1 }}>
              <div style={{ fontFamily: HF.mono, fontSize: 9, letterSpacing: 1.5, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', fontWeight: 700 }}>FIRST V7 · "BLOOD ORANGE"</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 4 }}>
                <span style={{ fontFamily: HF.display, fontSize: 28, letterSpacing: -0.8, lineHeight: 1 }}>V7</span>
                <span style={{ fontFamily: HF.mono, fontSize: 10, opacity: 0.85 }}>14 ATTEMPTS · 3 SESH</span>
              </div>
            </div>
          </div>
        </Photo>
      </div>
      <div style={{ padding: '12px 14px 0', fontSize: 14, color: HF.ink, lineHeight: 1.45 }}>
        Finally stuck the dyno. Two months of trying. The crimps still hate me. <span style={{ color: HF.accent, fontWeight: 600 }}>#firstV7</span>
      </div>
      <HFPostActions likes={284} comments={32} liked />
      <div style={{ padding: '4px 14px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <HFAvatar size={22} src={HF_IMG.jules} />
        <span style={{ fontFamily: HF.mono, fontSize: 11, color: HF.ink3, letterSpacing: 0.3 }}>
          <b style={{ color: HF.ink }}>jules</b> Insane!! you owe me a sesh 🤝
        </span>
      </div>
    </div>
  );
}

function HFEventPost() {
  return (
    <div onClick={() => window.UC && window.UC.navigate('events')} style={{ margin: '0 12px 16px', background: HF.paper2, border: `1px dashed ${HF.rule}`, borderRadius: 4, overflow: 'hidden', cursor: 'pointer' }}>
      <Photo src={HF_IMG.outdoor2} height={150} dim={0.5}>
        <div style={{ position: 'absolute', inset: 0, padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <HFTag accent style={{ background: 'rgba(13,12,10,0.4)', backdropFilter: 'blur(8px)', borderColor: '#fff', color: '#fff' }}>EVENT · MAY 4</HFTag>
            <span style={{ fontFamily: HF.mono, fontSize: 10, color: 'rgba(255,255,255,0.85)', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>HOSTED BY ARI</span>
          </div>
          <div>
            <div style={{ fontFamily: HF.display, fontSize: 28, color: '#fff', letterSpacing: -0.8, lineHeight: 1, textTransform: 'uppercase' }}>SUNDAY SLAB SOCIETY</div>
            <div style={{ fontFamily: HF.mono, fontSize: 10, color: 'rgba(255,255,255,0.85)', letterSpacing: 1, marginTop: 4, textTransform: 'uppercase' }}>10:00 AM · THE CRAG SF · BAY 4</div>
          </div>
        </div>
      </Photo>
      <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex' }}>
          {[HF_IMG.ari, HF_IMG.jules, HF_IMG.ben, HF_IMG.nat].map((s, i) => (
            <div key={i} style={{ marginLeft: i === 0 ? 0 : -8 }}>
              <HFAvatar size={26} src={s} />
            </div>
          ))}
        </div>
        <span style={{ fontFamily: HF.mono, fontSize: 10, color: HF.ink2, letterSpacing: 0.5, fontWeight: 700 }}>12 GOING · 4 INTERESTED</span>
        <div style={{ flex: 1 }} />
        <div style={{ padding: '7px 14px', background: HF.accent, color: '#fff', fontFamily: HF.mono, fontSize: 10, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', boxShadow: `2px 2px 0 ${HF.rule}` }}>I'M IN</div>
      </div>
    </div>
  );
}

function HFSessionPost() {
  return (
    <div style={{ margin: '0 12px 16px', background: HF.card, border: `1px solid ${HF.ruleSft}`, borderRadius: 4, overflow: 'hidden' }}>
      <HFPostHeader name="Tomo R." handle="tomohawk" where="Movement · DEN" when="6H" src={HF_IMG.tomo} />
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 2 }}>
        <Photo src={HF_IMG.gym1} height={200} />
        <div style={{ display: 'grid', gap: 2, gridTemplateRows: '1fr 1fr' }}>
          <Photo src={HF_IMG.shoes} height={99} />
          <Photo src={HF_IMG.hands} height={99} />
        </div>
      </div>
      <div style={{ padding: '12px 14px 0', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        <HFTag>2H 14M · 8 PROBLEMS</HFTag>
        <HFTag accent filled>NEW PR · V6</HFTag>
      </div>
      <div style={{ padding: '10px 14px 0', fontSize: 14, color: HF.ink, lineHeight: 1.45 }}>
        Comp prep round 1. Quads are toast.
      </div>
      <HFPostActions likes={86} comments={11} />
    </div>
  );
}

function HFFeedScreen() {
  return (
    <HFPhone>
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 80, overflowY: 'auto', overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}>
        <HFFeedHeader />
        <div style={{ borderTop: `1px solid ${HF.ruleSft}` }} />
        <HFStoryRail />
        <div style={{ borderTop: `1px solid ${HF.ruleSft}`, paddingTop: 14 }}>
          <HFAchievementPost />
          <HFEventPost />
          <HFSessionPost />
        </div>
      </div>
      <HFTabBar active="home" />
    </HFPhone>
  );
}

Object.assign(window, { HFFeedScreen, HFAchievementPost });
