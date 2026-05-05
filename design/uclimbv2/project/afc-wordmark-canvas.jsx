// afc-wordmark-canvas.jsx — design canvas for 12 wordmark-only treatments.

const WM_PHOTO = 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80';

function WMTile({ Comp, size, surface }) {
  const isPhoto = surface === 'photo';
  const isInk = surface === 'ink';
  const ink = isInk || isPhoto ? '#ece4d6' : '#13110e';
  const bg = isPhoto
    ? { backgroundImage: `url(${WM_PHOTO})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: isInk ? '#13110e' : '#ece4d6' };
  const label = isPhoto ? 'PHOTO · DIM' : isInk ? 'INK' : 'PAPER';
  const labelColor = isInk || isPhoto ? 'rgba(255,255,255,0.5)' : 'rgba(19,17,14,0.45)';
  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...bg, borderTop: '1px solid #cfc6b3' }}>
      {isPhoto && <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,12,10,0.55)' }} />}
      <div style={{
        position: 'absolute', top: 8, right: 10, zIndex: 2,
        fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
        letterSpacing: 1.6, color: labelColor, textTransform: 'uppercase',
      }}>{label}</div>
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: Math.max(120, size * 3), padding: '40px 24px',
      }}>
        <Comp h={size} ink={ink} accent="#e85d2a" />
      </div>
    </div>
  );
}

function WMHeaderPreview({ Comp }) {
  return (
    <div style={{ background: '#ece4d6', borderTop: '1px solid #cfc6b3' }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
        letterSpacing: 1.6, color: 'rgba(19,17,14,0.45)',
        textTransform: 'uppercase', padding: '8px 14px 0',
      }}>In-app header · 22 px</div>
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

function WMMarquee({ Comp }) {
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      backgroundImage: `url(${WM_PHOTO})`, backgroundSize: 'cover', backgroundPosition: 'center',
      borderTop: '1px solid #cfc6b3',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,12,10,0.55)' }} />
      <div style={{ position: 'relative', zIndex: 2, padding: '36px 24px 40px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
          letterSpacing: 1.6, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase',
        }}>Onboarding hero · 44 px</span>
        <Comp h={44} ink="#ffffff" accent="#e85d2a" />
      </div>
    </div>
  );
}

function WMArtboard({ entry }) {
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
        }}>№ {id}</div>
        <div style={{
          fontFamily: 'var(--display)', fontSize: 24, letterSpacing: -0.5,
          textTransform: 'uppercase', marginTop: 2, lineHeight: 1.05,
        }}>{name}</div>
        <div style={{
          fontFamily: 'var(--sans)', fontSize: 13, color: '#2c2823',
          lineHeight: 1.5, marginTop: 6,
        }}>{why}</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <WMTile Comp={Comp} size={28} surface="paper" />
        <WMTile Comp={Comp} size={28} surface="ink" />
        <WMTile Comp={Comp} size={28} surface="photo" />
      </div>

      <WMHeaderPreview Comp={Comp} />
      <WMMarquee Comp={Comp} />

      <div style={{
        background: '#e2d9c8', borderTop: '1px solid #cfc6b3',
        padding: '20px 22px 22px',
      }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 700,
          letterSpacing: 1.6, color: 'rgba(19,17,14,0.5)',
          textTransform: 'uppercase', marginBottom: 14,
        }}>Scale ladder · 14 / 20 / 28 / 40 px</div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 28, flexWrap: 'wrap' }}>
          <Comp h={14} ink="#13110e" accent="#e85d2a" />
          <Comp h={20} ink="#13110e" accent="#e85d2a" />
          <Comp h={28} ink="#13110e" accent="#e85d2a" />
          <Comp h={40} ink="#13110e" accent="#e85d2a" />
        </div>
      </div>
    </div>
  );
}

function WMCanvas() {
  return (
    <DesignCanvas>
      <DCSection
        id="wordmarks"
        title="All for Climbing — Wordmark Studies"
        subtitle="12 ways to write it. No mountain. Type, color, composition only."
      >
        {WORDMARKS.map((entry) => (
          <DCArtboard
            key={entry.id}
            id={`wm-${entry.id}`}
            label={`${entry.id} · ${entry.name}`}
            width={680}
            height={1100}
          >
            <WMArtboard entry={entry} />
          </DCArtboard>
        ))}
      </DCSection>
    </DesignCanvas>
  );
}

Object.assign(window, { WMCanvas, WMArtboard, WMTile, WMHeaderPreview, WMMarquee });
