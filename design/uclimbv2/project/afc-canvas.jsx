// afc-canvas.jsx — design canvas presentation of 6 horizontal lockups for All for Climbing.

const SURFACES = {
  paper: { bg: '#ece4d6', label: 'PAPER · DEFAULT', ink: '#13110e', onDark: false },
  ink:   { bg: '#13110e', label: 'INK · DARK MODE', ink: '#ece4d6', onDark: true },
  photo: { bg: 'photo',   label: 'PHOTO · DIMMED', ink: '#ffffff', onDark: true },
};

const PHOTO_URL = 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80';

function LockupTile({ Comp, size, surface, label }) {
  const s = SURFACES[surface];
  const useDark = s.onDark;
  const bg = surface === 'photo'
    ? { backgroundImage: `url(${PHOTO_URL})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: s.bg };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...bg, borderTop: '1px solid #cfc6b3' }}>
      {surface === 'photo' && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,12,10,0.55)' }} />
      )}
      <div style={{
        position: 'absolute', top: 8, left: 10,
        fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
        letterSpacing: 1.6, color: useDark ? 'rgba(255,255,255,0.5)' : 'rgba(19,17,14,0.45)',
        textTransform: 'uppercase', zIndex: 2,
      }}>{label}</div>
      <div style={{
        position: 'absolute', top: 8, right: 10,
        fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
        letterSpacing: 1.6, color: useDark ? 'rgba(255,255,255,0.4)' : 'rgba(19,17,14,0.38)',
        textTransform: 'uppercase', zIndex: 2,
      }}>{s.label}</div>
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: Math.max(120, size * 2.8), padding: '40px 24px',
      }}>
        <Comp h={size} ink={s.ink} accent="#e85d2a" onDark={useDark} />
      </div>
    </div>
  );
}

function HeaderPreview({ Comp }) {
  return (
    <div style={{ background: '#ece4d6', borderTop: '1px solid #cfc6b3' }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
        letterSpacing: 1.6, color: 'rgba(19,17,14,0.45)',
        textTransform: 'uppercase', padding: '8px 14px 0',
      }}>In-app header · 22px · feed top bar</div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 16px 16px', borderBottom: '1px solid #bfb4a0',
      }}>
        <Comp h={22} ink="#13110e" accent="#e85d2a" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: '50%',
            border: '1.5px solid #1a1714',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="#13110e" strokeWidth="1.6" strokeLinecap="round"><circle cx="8" cy="8" r="5"/><path d="M12 12l3.5 3.5"/></svg>
          </div>
          <div style={{ position: 'relative' }}>
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="#13110e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13V8a5 5 0 0110 0v5l1.5 2H2.5L4 13z"/><path d="M7 16a2 2 0 004 0"/></svg>
            <span style={{ position: 'absolute', top: 0, right: 0, width: 7, height: 7, borderRadius: '50%', background: '#e85d2a' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ShareCardPreview({ Comp }) {
  return (
    <div style={{ background: '#ece4d6', borderTop: '1px solid #cfc6b3', padding: '20px 24px 24px' }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
        letterSpacing: 1.6, color: 'rgba(19,17,14,0.45)',
        textTransform: 'uppercase', marginBottom: 12,
      }}>Share card top · 32px · ink on paper</div>
      <div style={{
        background: '#f6efe1', border: '1.5px solid #1a1714',
        boxShadow: '4px 4px 0 #1a1714', padding: '18px 18px 22px',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingBottom: 14, borderBottom: '1px solid #bfb4a0', marginBottom: 14,
          gap: 12, flexWrap: 'wrap',
        }}>
          <Comp h={32} ink="#13110e" accent="#e85d2a" />
          <span style={{
            fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 800,
            letterSpacing: 2, color: '#5e564b', textTransform: 'uppercase',
          }}>SEND № 047</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ fontFamily: 'var(--display)', fontSize: 64, color: '#e85d2a', letterSpacing: -3, lineHeight: 0.9 }}>V7</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--display)', fontSize: 22, letterSpacing: -0.5, lineHeight: 1.05 }}>Blood Orange</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.5, color: '#5e564b', marginTop: 4, textTransform: 'uppercase', fontWeight: 700 }}>14 attempts · 3 sesh · oak</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueePreview({ Comp }) {
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      backgroundImage: `url(${PHOTO_URL})`, backgroundSize: 'cover', backgroundPosition: 'center',
      borderTop: '1px solid #cfc6b3',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,12,10,0.55)' }} />
      <div style={{
        position: 'relative', zIndex: 2, padding: '32px 24px 36px',
        display: 'flex', flexDirection: 'column', gap: 16,
      }}>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
          letterSpacing: 1.6, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase',
        }}>Marquee · 48px · onboarding hero</span>
        <Comp h={48} ink="#ffffff" accent="#e85d2a" onDark={true} />
      </div>
    </div>
  );
}

function LockupArtboard({ entry }) {
  const { id, name, why, component: Comp } = entry;
  return (
    <div style={{
      width: '100%',
      background: '#ece4d6', display: 'flex', flexDirection: 'column',
      fontFamily: 'var(--sans)', color: '#13110e',
    }}>
      <div style={{ padding: '20px 22px 18px', borderBottom: '2px solid #1a1714' }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 800,
          letterSpacing: 2, color: '#e85d2a', textTransform: 'uppercase',
        }}>Direction {id}</div>
        <div style={{
          fontFamily: 'var(--display)', fontSize: 26, letterSpacing: -0.6,
          textTransform: 'uppercase', marginTop: 2, lineHeight: 1.05,
        }}>{name}</div>
        <div style={{
          fontFamily: 'var(--sans)', fontSize: 13, color: '#2c2823',
          lineHeight: 1.5, marginTop: 6, maxWidth: 540,
        }}>{why}</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <LockupTile Comp={Comp} size={32} surface="paper" label="32 PX" />
        <LockupTile Comp={Comp} size={32} surface="ink"   label="32 PX" />
        <LockupTile Comp={Comp} size={32} surface="photo" label="32 PX" />
      </div>

      <HeaderPreview Comp={Comp} />
      <ShareCardPreview Comp={Comp} />
      <MarqueePreview Comp={Comp} />

      <div style={{
        background: '#e2d9c8', borderTop: '1px solid #cfc6b3',
        padding: '20px 22px 22px',
      }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
          letterSpacing: 1.6, color: 'rgba(19,17,14,0.5)',
          textTransform: 'uppercase', marginBottom: 14,
        }}>Scale ladder · 16 / 22 / 32 / 48 px</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
          <Comp h={16} ink="#13110e" accent="#e85d2a" />
          <Comp h={22} ink="#13110e" accent="#e85d2a" />
          <Comp h={32} ink="#13110e" accent="#e85d2a" />
          <Comp h={48} ink="#13110e" accent="#e85d2a" />
        </div>
      </div>
    </div>
  );
}

function AFCCanvas() {
  return (
    <DesignCanvas>
      <DCSection
        id="horizontal"
        title="All for Climbing — Horizontal Lockup"
        subtitle="6 directions paired with the orange-tile icon · pick one for the in-app header"
      >
        {LOCKUPS.map((entry) => (
          <DCArtboard
            key={entry.id}
            id={`lock-${entry.id}`}
            label={`${entry.id} · ${entry.name}`}
            width={720}
            height={1240}
          >
            <LockupArtboard entry={entry} />
          </DCArtboard>
        ))}
      </DCSection>
    </DesignCanvas>
  );
}

Object.assign(window, { AFCCanvas, LockupArtboard, LockupTile, HeaderPreview, ShareCardPreview, MarqueePreview });
