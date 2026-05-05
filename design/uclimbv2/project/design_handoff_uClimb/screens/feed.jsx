// feed.jsx — main feed: stories rail + posts (sends, projects, sessions)

function FeedHeader() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '8px 16px 12px',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{
          fontFamily: UC.display, fontWeight: 900, fontSize: 26,
          letterSpacing: -1, color: UC.ink,
        }}>uClimb</span>
        <span style={{
          fontFamily: UC.mono, fontSize: 9, color: UC.accent,
          letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700,
        }}>β</span>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <IconBtn size={34}>{Icon.search(16)}</IconBtn>
        <IconBtn size={34}>{Icon.bell(16)}</IconBtn>
      </div>
    </div>
  );
}

function StoryRail() {
  const stories = [
    { id: 'me', label: 'You', mine: true },
    { id: 'mara', label: 'Mara', live: true, grade: 'V7' },
    { id: 'jules', label: 'Jules', grade: 'V5' },
    { id: 'ben', label: 'Ben', grade: 'V9' },
    { id: 'ari', label: 'Ari', grade: 'V4' },
    { id: 'tomo', label: 'Tomo', grade: 'V8' },
    { id: 'nat', label: 'Nat', grade: 'V6' },
  ];
  return (
    <div style={{
      display: 'flex', gap: 12, padding: '4px 16px 14px',
      overflowX: 'hidden',
    }}>
      {stories.map((s) => (
        <div key={s.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, flexShrink: 0 }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 62, height: 62,
              border: `1.5px ${s.live ? 'solid' : 'dashed'} ${s.live ? UC.accent : UC.rule}`,
              padding: 3,
              background: s.mine ? UC.fill : 'transparent',
            }}>
              <div style={{
                width: '100%', height: '100%',
                background: UC.fillDark,
                backgroundImage: `repeating-linear-gradient(135deg, transparent 0 6px, #3a342e 6px 7px)`,
              }} />
            </div>
            {s.mine && (
              <div style={{
                position: 'absolute', bottom: -2, right: -2,
                width: 22, height: 22, background: UC.accent,
                border: `1.5px solid ${UC.paper}`, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{Icon.plus(12, '#fff')}</div>
            )}
            {s.grade && !s.mine && (
              <div style={{
                position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)',
                background: UC.ink, color: '#fff',
                fontFamily: UC.mono, fontSize: 9, fontWeight: 800,
                padding: '2px 5px', letterSpacing: 0.5,
              }}>{s.grade}</div>
            )}
          </div>
          <span style={{
            fontFamily: UC.mono, fontSize: 9, letterSpacing: 0.5,
            textTransform: 'uppercase', color: UC.ink2, fontWeight: 600,
          }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function PostHeader({ name, handle, where, when, group }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px 12px' }}>
      <Avatar size={38} label={name.slice(0, 2).toUpperCase()} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: UC.ink }}>{name}</span>
          <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.ink3 }}>@{handle}</span>
        </div>
        <div style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, letterSpacing: 0.4, textTransform: 'uppercase' }}>
          {where} · {when}{group && <> · <span style={{ color: UC.accent }}>{group}</span></>}
        </div>
      </div>
      {Icon.more(18, UC.ink3)}
    </div>
  );
}

function PostActions() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '12px 16px 6px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {Icon.heart(20, UC.ink)}
        <span style={{ fontFamily: UC.mono, fontSize: 12, fontWeight: 600 }}>42</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {Icon.comment(20, UC.ink)}
        <span style={{ fontFamily: UC.mono, fontSize: 12, fontWeight: 600 }}>8</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {Icon.share(20, UC.ink)}
      </div>
      <div style={{ flex: 1 }} />
      {Icon.bookmark(20, UC.ink)}
    </div>
  );
}

// ── Achievement post (HERO — variant A: Stat band) ──────────
function AchievementPostA() {
  return (
    <div style={{
      margin: '0 16px 18px', background: UC.card,
      border: `1.5px solid ${UC.rule}`,
      boxShadow: `4px 4px 0 ${UC.rule}`,
    }}>
      <PostHeader name="Mara K." handle="mara.sends" where="Boulder Project · Oakland" when="2H AGO" group="CRUSHERS" />
      {/* Achievement banner */}
      <div style={{ position: 'relative' }}>
        <Stripes height={260} dark label="VIDEO · 0:24" />
        {/* corner stat block */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: UC.paper, padding: '8px 10px',
          border: `1.5px solid ${UC.rule}`,
          fontFamily: UC.mono,
        }}>
          <div style={{ fontSize: 9, letterSpacing: 1.5, color: UC.ink3, textTransform: 'uppercase', fontWeight: 600 }}>FIRST SEND</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: UC.ink, lineHeight: 1, marginTop: 2 }}>V7</div>
        </div>
        {/* badge */}
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: UC.accent, color: '#fff',
          padding: '6px 10px',
          fontFamily: UC.mono, fontSize: 10, fontWeight: 800,
          letterSpacing: 1.5, textTransform: 'uppercase',
        }}>SENT ↑</div>
        {/* bottom strip */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: UC.ink, color: '#fff',
          padding: '10px 12px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontFamily: UC.mono, fontSize: 10, letterSpacing: 1,
          textTransform: 'uppercase',
        }}>
          <span>"BLOOD ORANGE"</span>
          <span>14 ATTEMPTS · 3 SESSIONS</span>
        </div>
      </div>
      {/* caption */}
      <div style={{ padding: '14px 16px 0', fontSize: 14, color: UC.ink, lineHeight: 1.45 }}>
        Finally stuck the dyno. Two months of trying. The crimps still hate me.
      </div>
      <PostActions />
      <Hairline style={{ margin: '6px 16px 0' }} />
      <div style={{ padding: '10px 16px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Avatar size={22} label="JU" />
        <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.ink3, letterSpacing: 0.3 }}>
          <b style={{ color: UC.ink }}>jules</b> Insane!! you owe me a session 🤝
        </span>
      </div>
    </div>
  );
}

// ── Plain photo post ────────────────────────────────────────
function PhotoPost() {
  return (
    <div style={{
      margin: '0 16px 18px', background: UC.card,
      border: `1.5px solid ${UC.rule}`,
    }}>
      <PostHeader name="Tomo R." handle="tomohawk" where="Movement · Denver" when="6H AGO" />
      <Stripes height={300} label="PHOTO" />
      <div style={{ padding: '12px 16px 0', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        <Pill>SESSION · 2H 14M</Pill>
        <Pill>8 PROBLEMS</Pill>
        <Pill style={{ borderColor: UC.accent, color: UC.accent }}>NEW PR</Pill>
      </div>
      <div style={{ padding: '12px 16px 0', fontSize: 14, color: UC.ink, lineHeight: 1.45 }}>
        Comp prep round 1. Quads are toast.
      </div>
      <PostActions />
    </div>
  );
}

// ── Event post (someone created a meetup) ───────────────────
function EventPost() {
  return (
    <div style={{
      margin: '0 16px 18px', background: UC.paper,
      border: `1.5px dashed ${UC.rule}`,
    }}>
      <div style={{ padding: '12px 14px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Tag accent>EVENT</Tag>
        <span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, letterSpacing: 1, textTransform: 'uppercase' }}>
          Ari posted
        </span>
        <div style={{ flex: 1 }} />
        <span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3 }}>4H</span>
      </div>
      <div style={{ padding: '0 14px 14px' }}>
        <div style={{
          fontFamily: UC.display, fontSize: 24, fontWeight: 900,
          color: UC.ink, lineHeight: 1, letterSpacing: -0.5,
          textTransform: 'uppercase', marginBottom: 12,
        }}>
          SUNDAY SLAB SOCIETY
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '6px 12px', fontSize: 13 }}>
          <span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, textTransform: 'uppercase', letterSpacing: 1 }}>WHEN</span>
          <span style={{ color: UC.ink, fontWeight: 600 }}>Sun, May 4 · 10:00 AM</span>
          <span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, textTransform: 'uppercase', letterSpacing: 1 }}>WHERE</span>
          <span style={{ color: UC.ink }}>The Crag SF · Bay 4</span>
          <span style={{ fontFamily: UC.mono, fontSize: 10, color: UC.ink3, textTransform: 'uppercase', letterSpacing: 1 }}>WHO</span>
          <span style={{ color: UC.ink }}>All levels · slab focus</span>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 14, alignItems: 'center' }}>
          <div style={{ display: 'flex', marginRight: 4 }}>
            {['AR', 'JU', 'BE', 'NA'].map((l, i) => (
              <div key={l} style={{ marginLeft: i === 0 ? 0 : -8 }}>
                <Avatar size={26} label={l} />
              </div>
            ))}
          </div>
          <span style={{ fontFamily: UC.mono, fontSize: 11, color: UC.ink2, letterSpacing: 0.5 }}>
            12 GOING · 4 INTERESTED
          </span>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <div style={{
            flex: 1, padding: '10px 12px', textAlign: 'center',
            background: UC.accent, color: '#fff',
            fontFamily: UC.mono, fontSize: 11, fontWeight: 700,
            letterSpacing: 1, textTransform: 'uppercase',
            border: `1.5px solid ${UC.rule}`,
          }}>I'M IN</div>
          <div style={{
            padding: '10px 14px', textAlign: 'center',
            border: `1.5px solid ${UC.rule}`, background: 'transparent',
            fontFamily: UC.mono, fontSize: 11, fontWeight: 700,
            letterSpacing: 1, textTransform: 'uppercase', color: UC.ink,
          }}>MAYBE</div>
        </div>
      </div>
    </div>
  );
}

function FeedScreen() {
  return (
    <Phone>
      <StatusBarLight />
      <div style={{
        position: 'absolute', top: 54, left: 0, right: 0, bottom: 80,
        overflow: 'hidden',
      }}>
        <FeedHeader />
        <Hairline color={UC.rule} />
        <StoryRail />
        <Hairline color={UC.rule} />
        <div style={{ paddingTop: 16 }}>
          <AchievementPostA />
          <EventPost />
          <PhotoPost />
        </div>
      </div>
      <TabBar active="home" />
    </Phone>
  );
}

Object.assign(window, { FeedScreen, AchievementPostA });
