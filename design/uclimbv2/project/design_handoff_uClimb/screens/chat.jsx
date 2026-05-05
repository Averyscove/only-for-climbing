// chat.jsx — Group chats list + thread view + Story viewer + Composer + Onboarding

function ChatListScreen() {
  const chats = [
    { name: 'CRUSHERS 🪨', sub: 'Mara: SENT IT 🔥', time: '2m', unread: 4, group: true, accent: true },
    { name: 'Sunday Slab Society', sub: 'Ari: bringing tape', time: '14m', unread: 1, group: true },
    { name: 'Jules', sub: 'wanna sesh tmrw?', time: '1h', unread: 2 },
    { name: 'Tomo', sub: '📷 sent a photo', time: '3h' },
    { name: 'Outdoor Trip · Castle Rock', sub: 'Ben: parking is at the lot', time: '1d', group: true },
    { name: 'Comp Crew', sub: 'You: i\'ll be there', time: '2d', group: true },
    { name: 'Nat', sub: 'how was the V7??', time: '3d' },
  ];
  return (
    <Phone>
      <StatusBarLight />
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 80, overflow: 'hidden' }}>
        <div style={{ padding: '8px 16px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: UC.display, fontSize: 28, fontWeight: 900, letterSpacing: -0.8, lineHeight: 1, textTransform: 'uppercase' }}>CHAT</span>
          <IconBtn size={32}>{Icon.plus(15)}</IconBtn>
        </div>
        {/* search */}
        <div style={{ margin: '0 16px 12px', height: 32, border: `1.5px solid ${UC.rule}`, display: 'flex', alignItems: 'center', gap: 8, padding: '0 10px' }}>
          {Icon.search(13, UC.ink3)}
          <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.ink3, letterSpacing: 0.5 }}>SEARCH MESSAGES</span>
        </div>
        {/* active heads */}
        <div style={{ display: 'flex', gap: 14, padding: '0 16px 12px', overflowX: 'hidden' }}>
          {['Jules', 'Tomo', 'Nat', 'Ari', 'Ben'].map((n, i) => (
            <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, position: 'relative' }}>
              <Avatar size={44} label={n.slice(0, 2).toUpperCase()} />
              {i < 2 && <div style={{ position: 'absolute', top: 30, right: -2, width: 12, height: 12, background: UC.accent, border: `1.5px solid ${UC.paper}`, borderRadius: '50%' }} />}
              <span style={{ fontFamily: UC.mono, fontSize: 9, letterSpacing: 0.5, textTransform: 'uppercase', color: UC.ink2, fontWeight: 600 }}>{n}</span>
            </div>
          ))}
        </div>
        <Hairline color={UC.rule} />
        {/* chat rows */}
        <div>
          {chats.map((c, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 16px',
              borderBottom: `1px solid ${UC.ruleSoft}`,
              background: c.accent ? `${UC.accent}10` : 'transparent',
            }}>
              <div style={{ position: 'relative' }}>
                <Avatar size={42} label={c.name.slice(0, 2).toUpperCase()} />
                {c.group && (
                  <div style={{
                    position: 'absolute', bottom: -2, right: -2,
                    background: UC.ink, color: '#fff',
                    fontFamily: UC.mono, fontSize: 8, fontWeight: 800, letterSpacing: 0.5,
                    padding: '2px 4px', border: `1.5px solid ${UC.paper}`,
                  }}>GRP</div>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontWeight: 700, fontSize: 14, color: UC.ink, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.name}</span>
                  <span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, letterSpacing: 0.5 }}>{c.time}</span>
                </div>
                <div style={{ fontSize: 13, color: c.unread ? UC.ink : UC.ink3, fontWeight: c.unread ? 600 : 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: 2 }}>{c.sub}</div>
              </div>
              {c.unread && (
                <div style={{
                  minWidth: 20, height: 20, padding: '0 6px',
                  background: UC.accent, color: '#fff',
                  fontFamily: UC.mono, fontSize: 11, fontWeight: 800,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{c.unread}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <TabBar active="chat" />
    </Phone>
  );
}

// ── Group chat thread ──────────────────────────────────────
function ChatThreadScreen() {
  const msgs = [
    { who: 'Ari',  side: 'l', txt: 'who\'s in for sunday slab?', time: '9:40' },
    { who: 'Jules', side: 'l', txt: 'me. but only if pizza after', time: '9:41' },
    { who: 'You',  side: 'r', txt: 'down. tony\'s?', time: '9:42' },
    { who: 'Ben',  side: 'l', txt: 'what time?', time: '9:43' },
    { who: 'Mara', side: 'l', achievement: true, time: '9:45' },
    { who: 'Mara', side: 'l', txt: 'btw. just sent BLOOD ORANGE 🩸', time: '9:45' },
    { who: 'You',  side: 'r', txt: 'WHAT no way 🤯🤯🤯', time: '9:46' },
  ];
  return (
    <Phone>
      <StatusBarLight />
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column' }}>
        {/* header */}
        <div style={{
          padding: '8px 12px 12px', display: 'flex', alignItems: 'center', gap: 10,
          borderBottom: `1.5px solid ${UC.rule}`,
        }}>
          <IconBtn size={32}>{Icon.back(14)}</IconBtn>
          <Avatar size={34} label="CR" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: UC.ink, display: 'flex', alignItems: 'center', gap: 6 }}>
              CRUSHERS <span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3 }}>·8</span>
            </div>
            <div style={{ fontFamily: UC.mono, fontSize: 9, color: UC.accent, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700 }}>● 4 ACTIVE</div>
          </div>
          <IconBtn size={32}>{Icon.more(15)}</IconBtn>
        </div>
        {/* messages */}
        <div style={{ flex: 1, padding: '14px 12px', overflowY: 'hidden', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {msgs.map((m, i) => {
            const isR = m.side === 'r';
            if (m.achievement) {
              return (
                <div key={i} style={{ alignSelf: 'flex-start', display: 'flex', gap: 8, maxWidth: '85%' }}>
                  <Avatar size={26} label="MA" />
                  <div style={{
                    border: `1.5px solid ${UC.rule}`, background: UC.card,
                    padding: 10, position: 'relative',
                    boxShadow: `3px 3px 0 ${UC.rule}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <GradeChip grade="V7" />
                      <span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink2, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>FIRST SEND</span>
                    </div>
                    <Stripes height={90} dark label="VIDEO · 0:24" />
                    <div style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink, marginTop: 6, letterSpacing: 0.5, textTransform: 'uppercase' }}>"BLOOD ORANGE" · 14 ATTEMPTS</div>
                  </div>
                </div>
              );
            }
            return (
              <div key={i} style={{ alignSelf: isR ? 'flex-end' : 'flex-start', maxWidth: '78%', display: 'flex', gap: 8, alignItems: 'flex-end' }}>
                {!isR && <Avatar size={22} label={m.who.slice(0, 2).toUpperCase()} />}
                <div>
                  {!isR && (
                    <div style={{ fontFamily: UC.mono, fontSize: 9, color: UC.ink3, letterSpacing: 0.5, textTransform: 'uppercase', fontWeight: 700, marginBottom: 2, marginLeft: 2 }}>{m.who}</div>
                  )}
                  <div style={{
                    padding: '8px 12px',
                    background: isR ? UC.ink : UC.card,
                    color: isR ? '#fff' : UC.ink,
                    border: `1.5px solid ${UC.rule}`,
                    fontSize: 13, lineHeight: 1.4,
                    boxShadow: isR ? 'none' : `2px 2px 0 ${UC.ruleSoft}`,
                  }}>{m.txt}</div>
                </div>
              </div>
            );
          })}
        </div>
        {/* composer */}
        <div style={{
          padding: '10px 12px 16px', borderTop: `1.5px solid ${UC.rule}`,
          display: 'flex', alignItems: 'center', gap: 8, background: UC.paper,
        }}>
          <IconBtn size={36}>{Icon.camera(16)}</IconBtn>
          <div style={{
            flex: 1, height: 36, border: `1.5px solid ${UC.rule}`,
            display: 'flex', alignItems: 'center', padding: '0 10px',
            fontFamily: UC.mono, fontSize: 11, color: UC.ink3, letterSpacing: 0.5,
          }}>
            <span style={{ flex: 1 }}>MESSAGE THE CRUSHERS</span>
            <span style={{ width: 2, height: 14, background: UC.accent }} />
          </div>
          <IconBtn size={36} accent>{Icon.send(16, '#fff')}</IconBtn>
        </div>
      </div>
    </Phone>
  );
}

// ── Story viewer ──────────────────────────────────────────
function StoryViewerScreen() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#0a0908', color: '#fff', overflow: 'hidden', fontFamily: UC.sans }}>
      {/* full bleed video placeholder */}
      <div style={{
        position: 'absolute', inset: 0,
        background: '#1a1714',
        backgroundImage: `repeating-linear-gradient(135deg, transparent 0 18px, rgba(255,255,255,0.03) 18px 19px)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontFamily: UC.mono, fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 2, textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 12px' }}>VIDEO · STORY</span>
      </div>
      {/* progress bars */}
      <div style={{ position: 'absolute', top: 50, left: 12, right: 12, display: 'flex', gap: 4, zIndex: 5 }}>
        {[1,1,0.6,0,0].map((p, i) => (
          <div key={i} style={{ flex: 1, height: 2, background: 'rgba(255,255,255,0.25)' }}>
            <div style={{ width: `${p * 100}%`, height: '100%', background: '#fff' }} />
          </div>
        ))}
      </div>
      {/* header */}
      <div style={{ position: 'absolute', top: 60, left: 12, right: 12, display: 'flex', alignItems: 'center', gap: 10, zIndex: 5 }}>
        <Avatar size={32} label="MA" dark />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>mara.sends</div>
          <div style={{ fontFamily: UC.mono, fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: 0.5, textTransform: 'uppercase' }}>BOULDER PROJECT · 8M</div>
        </div>
        <Tag accent dark>LIVE SEND</Tag>
        <span style={{ fontFamily: UC.mono, fontSize: 16, opacity: 0.6 }}>×</span>
      </div>
      {/* center caption sticker */}
      <div style={{
        position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%, -50%) rotate(-3deg)',
        background: UC.accent, color: '#fff',
        fontFamily: UC.display, fontSize: 36, fontWeight: 900,
        padding: '8px 16px', letterSpacing: -0.5, textTransform: 'uppercase',
        boxShadow: '4px 4px 0 #000',
      }}>FIRST V7</div>
      <div style={{
        position: 'absolute', top: '52%', left: '50%', transform: 'translate(-50%, -50%) rotate(2deg)',
        background: '#fff', color: UC.ink,
        fontFamily: UC.mono, fontSize: 11, fontWeight: 800,
        padding: '6px 10px', letterSpacing: 1, textTransform: 'uppercase',
        boxShadow: '3px 3px 0 #000',
      }}>"BLOOD ORANGE"</div>
      {/* reaction strip */}
      <div style={{
        position: 'absolute', bottom: 90, left: 12, right: 12,
        display: 'flex', gap: 8, alignItems: 'center', zIndex: 5,
      }}>
        {['🔥','💪','🤯','🤝'].map(e => (
          <div key={e} style={{
            width: 38, height: 38, fontSize: 18,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.3)',
          }}>{e}</div>
        ))}
      </div>
      {/* reply */}
      <div style={{
        position: 'absolute', bottom: 30, left: 12, right: 12,
        display: 'flex', alignItems: 'center', gap: 8, zIndex: 5,
      }}>
        <div style={{
          flex: 1, height: 38, border: '1px solid rgba(255,255,255,0.4)',
          padding: '0 14px', display: 'flex', alignItems: 'center',
          fontFamily: UC.mono, fontSize: 11, color: 'rgba(255,255,255,0.6)',
          letterSpacing: 0.5,
        }}>SEND MARA A MESSAGE</div>
        <div style={{ width: 38, height: 38, border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {Icon.heart(18, '#fff')}
        </div>
        <div style={{ width: 38, height: 38, border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {Icon.send(16, '#fff')}
        </div>
      </div>
    </div>
  );
}

// ── Composer (post / story / send) ─────────────────────────
function ComposerScreen() {
  return (
    <Phone>
      <StatusBarLight />
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '8px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: UC.mono, fontSize: 12, color: UC.ink3, letterSpacing: 1 }}>×</span>
          <span style={{ fontFamily: UC.mono, fontSize: 11, letterSpacing: 2, fontWeight: 700, textTransform: 'uppercase' }}>NEW · LOG</span>
          <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.accent, letterSpacing: 1, fontWeight: 800 }}>POST →</span>
        </div>
        {/* mode tabs */}
        <div style={{ display: 'flex', gap: 6, padding: '4px 16px 14px', justifyContent: 'center' }}>
          {['POST', 'STORY', 'SEND', 'LIVE'].map((m, i) => (
            <span key={m} style={{
              fontFamily: UC.mono, fontSize: 11, fontWeight: 800, letterSpacing: 1,
              padding: '6px 12px', borderRadius: 999,
              background: i === 2 ? UC.accent : 'transparent',
              color: i === 2 ? '#fff' : UC.ink2,
              border: `1.5px solid ${i === 2 ? UC.accent : UC.ruleSoft}`,
            }}>{m}</span>
          ))}
        </div>
        {/* media tile */}
        <div style={{ padding: '0 16px' }}>
          <div style={{ position: 'relative' }}>
            <Stripes height={220} dark label="TAP TO ADD VIDEO" />
            <div style={{
              position: 'absolute', bottom: 10, left: 10,
              background: UC.paper, border: `1.5px solid ${UC.rule}`,
              padding: '4px 8px', fontFamily: UC.mono, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
            }}>0:24 · 4K</div>
          </div>
        </div>
        {/* send detail block */}
        <div style={{ padding: '14px 16px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <GradeChip grade="V7" big />
            <div style={{ flex: 1 }}>
              <input style={{
                fontFamily: UC.display, fontSize: 22, fontWeight: 900,
                letterSpacing: -0.4, textTransform: 'uppercase',
                background: 'transparent', border: 'none', width: '100%', padding: 0,
                color: UC.ink, outline: 'none',
              }} defaultValue='"BLOOD ORANGE"' />
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6, marginTop: 4,
                fontFamily: UC.mono, fontSize: 10, color: UC.ink3, letterSpacing: 0.5, textTransform: 'uppercase',
              }}>
                {Icon.pin(11, UC.ink3)} BOULDER PROJECT · OAK · WALL 4
              </div>
            </div>
          </div>
          {/* style tags */}
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {[['SENT', true], ['FLASH', false], ['PROJECT', false], ['OVERHANG', true], ['DYNO', true], ['CRIMPS', false]].map(([t, on]) => (
              <span key={t} style={{
                fontFamily: UC.mono, fontSize: 10, fontWeight: 700, padding: '5px 9px', letterSpacing: 1,
                background: on ? UC.ink : 'transparent', color: on ? '#fff' : UC.ink2,
                border: `1.5px solid ${on ? UC.ink : UC.ruleSoft}`,
              }}>{t}</span>
            ))}
          </div>
          {/* attempts/sessions */}
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, border: `1.5px solid ${UC.rule}`, padding: '8px 12px' }}>
              <div style={{ fontFamily: UC.mono, fontSize: 9, letterSpacing: 1.5, color: UC.ink3, textTransform: 'uppercase', fontWeight: 700 }}>ATTEMPTS</div>
              <div style={{ fontFamily: UC.display, fontSize: 22, fontWeight: 900, lineHeight: 1, marginTop: 2 }}>14</div>
            </div>
            <div style={{ flex: 1, border: `1.5px solid ${UC.rule}`, padding: '8px 12px' }}>
              <div style={{ fontFamily: UC.mono, fontSize: 9, letterSpacing: 1.5, color: UC.ink3, textTransform: 'uppercase', fontWeight: 700 }}>SESSIONS</div>
              <div style={{ fontFamily: UC.display, fontSize: 22, fontWeight: 900, lineHeight: 1, marginTop: 2 }}>3</div>
            </div>
            <div style={{ flex: 1, border: `1.5px solid ${UC.rule}`, padding: '8px 12px', background: UC.fill }}>
              <div style={{ fontFamily: UC.mono, fontSize: 9, letterSpacing: 1.5, color: UC.ink3, textTransform: 'uppercase', fontWeight: 700 }}>STAR</div>
              <div style={{ fontFamily: UC.display, fontSize: 22, fontWeight: 900, lineHeight: 1, marginTop: 2 }}>★★★★☆</div>
            </div>
          </div>
          <textarea defaultValue="Finally stuck the dyno. Two months of trying. The crimps still hate me." style={{
            border: `1.5px dashed ${UC.rule}`, padding: 10, fontFamily: UC.sans, fontSize: 13, lineHeight: 1.4,
            color: UC.ink, background: UC.paper, resize: 'none', height: 60, outline: 'none', marginTop: 4,
          }} />
        </div>
      </div>
    </Phone>
  );
}

// ── Onboarding ────────────────────────────────────────────
function OnboardingScreen() {
  return (
    <Phone>
      <StatusBarLight />
      <div style={{ position: 'absolute', inset: 0, padding: '60px 22px 40px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontFamily: UC.display, fontWeight: 900, fontSize: 36, letterSpacing: -1.5, textTransform: 'uppercase', lineHeight: 1 }}>uClimb</span>
            <span style={{ width: 12, height: 12, background: UC.accent, display: 'inline-block' }} />
          </div>
          <div style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, marginTop: 4 }}>
            BUILT BY CLIMBERS · NO CHALK CULT
          </div>
          {/* Hero */}
          <div style={{
            marginTop: 38, fontFamily: UC.display, fontSize: 44, fontWeight: 900,
            letterSpacing: -1.5, lineHeight: 0.95, textTransform: 'uppercase',
          }}>
            LOG IT.<br/>
            SEND IT.<br/>
            <span style={{ color: UC.accent }}>SHARE IT.</span>
          </div>
          <div style={{ marginTop: 18, fontSize: 14, color: UC.ink2, lineHeight: 1.5, maxWidth: 280 }}>
            Track your sends and projects. Find the crew. Plan the sesh. Talk smack in group chats.
          </div>
          {/* Feature list */}
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              ['01', 'POST SENDS', 'video, stats, the works'],
              ['02', 'JOIN CREWS', 'group chats + plan climbs'],
              ['03', 'TRACK PROJECTS', 'attempts · sessions · grades'],
            ].map(([n, t, sub]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.accent, fontWeight: 800, letterSpacing: 1 }}>{n}</span>
                <div>
                  <div style={{ fontFamily: UC.display, fontSize: 14, fontWeight: 900, letterSpacing: -0.2, textTransform: 'uppercase' }}>{t}</div>
                  <div style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, letterSpacing: 0.5, textTransform: 'uppercase', marginTop: 2 }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            padding: '14px 16px', textAlign: 'center', background: UC.accent, color: '#fff',
            fontFamily: UC.display, fontSize: 16, fontWeight: 900, letterSpacing: 0.5, textTransform: 'uppercase',
            border: `1.5px solid ${UC.rule}`, boxShadow: `4px 4px 0 ${UC.rule}`,
          }}>START CLIMBING →</div>
          <div style={{
            padding: '12px 16px', textAlign: 'center',
            fontFamily: UC.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: UC.ink2,
          }}>ALREADY HAVE AN ACCOUNT? LOG IN</div>
        </div>
      </div>
    </Phone>
  );
}

Object.assign(window, { ChatListScreen, ChatThreadScreen, StoryViewerScreen, ComposerScreen, OnboardingScreen });
