// hifi-chat.jsx — story viewer + chat list + group thread

function HFStoryView() {
  return (
    <HFPhone dark>
      <div onClick={() => window.UC && window.UC.navigate('feed')} style={{ position: 'absolute', inset: 0, cursor: 'pointer' }}>
        <Photo src={HF_IMG.send2} height="100%" dim={0.2} />
        {/* Progress bars */}
        <div style={{ position: 'absolute', top: 56, left: 12, right: 12, display: 'flex', gap: 4 }}>
          {[1,1,0.6,0,0].map((p, i) => (
            <div key={i} style={{ flex: 1, height: 2.5, background: 'rgba(255,255,255,0.25)', overflow: 'hidden' }}>
              <div style={{ width: `${p * 100}%`, height: '100%', background: '#fff' }} />
            </div>
          ))}
        </div>
        {/* Header */}
        <div style={{ position: 'absolute', top: 70, left: 14, right: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
          <HFAvatar size={32} src={HF_IMG.ben} ring={HF.accent} />
          <div style={{ flex: 1 }}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>Ben T.</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: HF.mono, fontSize: 9, letterSpacing: 1, textTransform: 'uppercase' }}>● LIVE · MOVEMENT DEN</div>
          </div>
          <HFIconBtn size={30} dark>{HFIcon.more(14, '#fff')}</HFIconBtn>
        </div>
        {/* Sticker overlays */}
        <div style={{ position: 'absolute', top: 180, left: 24, transform: 'rotate(-6deg)', background: HF.accent, color: '#fff', padding: '10px 14px', fontFamily: HF.display, fontSize: 22, letterSpacing: -0.5, textTransform: 'uppercase', boxShadow: `4px 4px 0 ${HF.dark}` }}>
          PROJECT DAY ✕
        </div>
        <div style={{ position: 'absolute', top: 250, right: 24, transform: 'rotate(4deg)', background: '#fff', color: HF.ink, padding: '8px 12px', fontFamily: HF.mono, fontSize: 11, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', boxShadow: `3px 3px 0 ${HF.accent}` }}>
          V9 ATTEMPT #38
        </div>
        <div style={{ position: 'absolute', top: 330, left: 30, color: '#fff', fontFamily: HF.mono, fontSize: 12, letterSpacing: 1, fontWeight: 700, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', padding: '6px 10px', borderRadius: 999 }}>
          📍 the cave · bay 3
        </div>
        {/* Reply bar */}
        <div style={{ position: 'absolute', left: 12, right: 12, bottom: 30, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ flex: 1, height: 42, border: '1.5px solid rgba(255,255,255,0.5)', borderRadius: 999, padding: '0 16px', display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.7)', fontSize: 13, fontFamily: HF.mono, letterSpacing: 0.5 }}>SEND BETA →</div>
          <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{HFIcon.heart(20, '#fff')}</div>
          <div style={{ width: 42, height: 42, borderRadius: '50%', background: HF.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 6px 18px ${HF.accent}88` }}>{HFIcon.send(18, '#fff')}</div>
        </div>
      </div>
    </HFPhone>
  );
}

function HFChatListScreen() {
  const chats = [
    { name: 'CRUSHERS CREW', sub: 'mara: who\'s in for sat?', time: '2M', unread: 3, group: true, avs: [HF_IMG.mara, HF_IMG.ari, HF_IMG.jules] },
    { name: 'Jules R.', sub: 'sent you that beta vid 🎥', time: '14M', unread: 1, src: HF_IMG.jules, online: true },
    { name: 'BAY AREA BOULDER', sub: 'tomo: comp prep monday?', time: '1H', unread: 12, group: true, avs: [HF_IMG.tomo, HF_IMG.ben, HF_IMG.nat, HF_IMG.finn] },
    { name: 'Ari M.', sub: 'you: pulling up at 7', time: '3H', src: HF_IMG.ari },
    { name: 'Ben T.', sub: 'ben sent a story', time: '5H', src: HF_IMG.ben, story: true },
    { name: 'PROJECT BLOOD ORANGE', sub: 'mara: SENT ITTTT 🔥🔥', time: '1D', group: true, avs: [HF_IMG.mara, HF_IMG.you] },
    { name: 'Finn O.', sub: 'haha that slab was wild', time: '2D', src: HF_IMG.finn },
  ];
  return (
    <HFPhone>
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 80, overflowY: 'auto', overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}>
        <div style={{ padding: '8px 16px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: HF.display, fontSize: 28, letterSpacing: -0.8, textTransform: 'uppercase' }}>CHAT</div>
          <HFIconBtn size={32} accent>{HFIcon.plus(15, '#fff')}</HFIconBtn>
        </div>
        <div style={{ padding: '0 16px 12px', display: 'flex', gap: 12, alignItems: 'center', height: 36, border: `1.5px solid ${HF.ruleSft}`, margin: '0 16px 14px', background: HF.card }}>
          <span style={{ paddingLeft: 12 }}>{HFIcon.search(13, HF.ink3)}</span>
          <span style={{ fontFamily: HF.mono, fontSize: 11, color: HF.ink3, letterSpacing: 0.5 }}>SEARCH PEOPLE & GROUPS</span>
        </div>
        <div style={{ padding: '0 16px' }}>
          {chats.map((c, i) => (
            <div key={i} onClick={() => window.UC && window.UC.navigate('thread')} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: `1px solid ${HF.ruleSft}`, cursor: 'pointer' }}>
              {c.group ? (
                <div style={{ width: 44, height: 44, position: 'relative', flexShrink: 0 }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 30, height: 30, borderRadius: '50%', overflow: 'hidden', border: `2px solid ${HF.paper}` }}>
                    <img src={c.avs[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: 30, height: 30, borderRadius: '50%', overflow: 'hidden', border: `2px solid ${HF.paper}` }}>
                    <img src={c.avs[1]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              ) : (
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <HFAvatar size={44} src={c.src} ring={c.story ? HF.accent : null} />
                  {c.online && <span style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, background: HF.moss, borderRadius: '50%', border: `2.5px solid ${HF.paper}` }} />}
                </div>
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                  <span style={{ fontWeight: c.unread ? 800 : 600, fontSize: 13, color: HF.ink, letterSpacing: c.group ? 0.5 : 0, textTransform: c.group ? 'uppercase' : 'none' }}>{c.name}</span>
                  <span style={{ fontFamily: HF.mono, fontSize: 9, color: c.unread ? HF.accent : HF.ink3, letterSpacing: 1, fontWeight: 700 }}>{c.time}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginTop: 2 }}>
                  <span style={{ fontSize: 12, color: c.unread ? HF.ink2 : HF.ink3, fontWeight: c.unread ? 600 : 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.sub}</span>
                  {c.unread && <span style={{ minWidth: 18, height: 18, padding: '0 5px', borderRadius: 9, background: HF.accent, color: '#fff', fontFamily: HF.mono, fontSize: 10, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HFTabBar active="chat" />
    </HFPhone>
  );
}

function HFGroupChatScreen() {
  return (
    <HFPhone>
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '8px 14px 12px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: `1px solid ${HF.ruleSft}` }}>
          <div onClick={() => window.UC && window.UC.navigate('chats')} style={{ cursor: 'pointer' }}>
            <HFIconBtn size={32}>{HFIcon.back(14)}</HFIconBtn>
          </div>
          <div style={{ display: 'flex' }}>
            {[HF_IMG.mara, HF_IMG.ari, HF_IMG.jules].map((s, i) => (
              <div key={i} style={{ marginLeft: i ? -8 : 0 }}>
                <HFAvatar size={26} src={s} />
              </div>
            ))}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: HF.display, fontSize: 13, letterSpacing: -0.2, textTransform: 'uppercase' }}>CRUSHERS CREW</div>
            <div style={{ fontFamily: HF.mono, fontSize: 9, color: HF.accent, letterSpacing: 1, fontWeight: 700, textTransform: 'uppercase' }}>● 4 ACTIVE · 7 MEMBERS</div>
          </div>
          <HFIconBtn size={32}>{HFIcon.more(14)}</HFIconBtn>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', WebkitOverflowScrolling: 'touch', padding: '14px 14px 8px' }}>
          <div style={{ textAlign: 'center', fontFamily: HF.mono, fontSize: 9, letterSpacing: 1.5, color: HF.ink3, textTransform: 'uppercase', marginBottom: 14 }}>━ TUE 4:12 PM ━</div>

          {/* Mara message */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
            <HFAvatar size={26} src={HF_IMG.mara} />
            <div style={{ maxWidth: '74%' }}>
              <div style={{ fontFamily: HF.mono, fontSize: 9, color: HF.ink3, letterSpacing: 1, marginBottom: 3, fontWeight: 700 }}>MARA · 4:12</div>
              <div style={{ background: HF.card, border: `1px solid ${HF.ruleSft}`, padding: '8px 11px', fontSize: 13, color: HF.ink, lineHeight: 1.4 }}>finally got blood orange today 😭🔥</div>
            </div>
          </div>

          {/* Embedded send card */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
            <div style={{ width: 26 }} />
            <div style={{ width: 220, border: `1.5px solid ${HF.rule}`, background: HF.dark, color: '#fff', overflow: 'hidden' }}>
              <Photo src={HF_IMG.send1} height={130}>
                <div style={{ position: 'absolute', top: 8, left: 8, background: HF.accent, color: '#fff', fontFamily: HF.mono, fontSize: 9, fontWeight: 800, padding: '3px 7px', letterSpacing: 1.5 }}>SENT V7</div>
              </Photo>
              <div style={{ padding: '8px 10px' }}>
                <div style={{ fontFamily: HF.display, fontSize: 13, letterSpacing: -0.2, textTransform: 'uppercase' }}>BLOOD ORANGE · V7</div>
                <div style={{ fontFamily: HF.mono, fontSize: 9, color: 'rgba(255,255,255,0.6)', letterSpacing: 0.8, marginTop: 3, textTransform: 'uppercase' }}>14 ATTEMPTS · BOULDER PROJECT</div>
              </div>
            </div>
          </div>

          {/* Reactions */}
          <div style={{ display: 'flex', gap: 6, marginLeft: 34, marginTop: -8, marginBottom: 16 }}>
            <span style={{ fontFamily: HF.mono, fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 999, border: `1px solid ${HF.rule}`, background: HF.paper2 }}>🔥 4</span>
            <span style={{ fontFamily: HF.mono, fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 999, border: `1px solid ${HF.rule}`, background: HF.paper2 }}>💪 2</span>
          </div>

          {/* Ari message */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
            <HFAvatar size={26} src={HF_IMG.ari} />
            <div style={{ maxWidth: '74%' }}>
              <div style={{ fontFamily: HF.mono, fontSize: 9, color: HF.ink3, letterSpacing: 1, marginBottom: 3, fontWeight: 700 }}>ARI · 4:14</div>
              <div style={{ background: HF.card, border: `1px solid ${HF.ruleSft}`, padding: '8px 11px', fontSize: 13, color: HF.ink, lineHeight: 1.4 }}>insane!!! who's coming sat to celebrate 🍻</div>
            </div>
          </div>

          {/* My message */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 6 }}>
            <div style={{ background: HF.accent, color: '#fff', padding: '8px 11px', fontSize: 13, lineHeight: 1.4, maxWidth: '74%', boxShadow: `2px 2px 0 ${HF.accent2}` }}>i'm in. 10am? 🤝</div>
          </div>
          <div style={{ textAlign: 'right', fontFamily: HF.mono, fontSize: 9, color: HF.ink3, letterSpacing: 1, fontWeight: 700, marginBottom: 14 }}>READ · 4:16</div>

          {/* Typing */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <HFAvatar size={26} src={HF_IMG.jules} />
            <div style={{ background: HF.card, border: `1px solid ${HF.ruleSft}`, padding: '10px 14px', display: 'flex', gap: 4 }}>
              {[0,1,2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: HF.ink3, opacity: 0.4 + i * 0.2 }} />)}
            </div>
            <span style={{ fontFamily: HF.mono, fontSize: 9, color: HF.ink3, letterSpacing: 1, fontWeight: 700 }}>JULES IS TYPING</span>
          </div>
        </div>
        {/* Composer */}
        <div style={{ padding: '10px 14px 14px', borderTop: `1px solid ${HF.ruleSft}`, display: 'flex', alignItems: 'center', gap: 8, background: HF.card }}>
          <HFIconBtn size={36}>{HFIcon.camera(15)}</HFIconBtn>
          <div style={{ flex: 1, height: 36, border: `1.5px solid ${HF.ruleSft}`, padding: '0 12px', display: 'flex', alignItems: 'center', background: HF.paper, fontSize: 13, color: HF.ink3 }}>say something good…</div>
          <HFIconBtn size={36} accent>{HFIcon.send(15, '#fff')}</HFIconBtn>
        </div>
      </div>
    </HFPhone>
  );
}

Object.assign(window, { HFStoryView, HFChatListScreen, HFGroupChatScreen });
