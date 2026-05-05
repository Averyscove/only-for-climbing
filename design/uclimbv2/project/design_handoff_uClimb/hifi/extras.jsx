// hifi-extras.jsx — composer, onboarding

function HFComposerScreen() {
  return (
    <HFPhone dark>
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '8px 14px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: '#fff', fontFamily: HF.mono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700 }}>CANCEL</span>
          <span style={{ fontFamily: HF.display, fontSize: 14, color: '#fff', letterSpacing: -0.2, textTransform: 'uppercase' }}>NEW SEND</span>
          <span style={{ color: HF.accent, fontFamily: HF.mono, fontSize: 11, letterSpacing: 1.5, fontWeight: 800 }}>SHARE →</span>
        </div>
        <div style={{ position: 'relative', margin: '0 14px', borderRadius: 4, overflow: 'hidden' }}>
          <Photo src={HF_IMG.send1} height={300} dim={0.1}>
            <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', color: '#fff', fontFamily: HF.mono, fontSize: 10, fontWeight: 700, padding: '4px 8px', borderRadius: 999, letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 5 }}>{HFIcon.play(10)} 0:24</div>
            <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10, display: 'flex', gap: 6 }}>
              {[HF_IMG.send1, HF_IMG.send2, HF_IMG.gym1, HF_IMG.shoes].map((s,i)=>(
                <div key={i} style={{ width: 44, height: 44, border: i===0?`2px solid ${HF.accent}`:'2px solid rgba(255,255,255,0.4)', overflow: 'hidden' }}>
                  <img src={s} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
              ))}
              <div style={{ width: 44, height: 44, border: '2px dashed rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{HFIcon.plus(16, '#fff')}</div>
            </div>
          </Photo>
        </div>
        <div style={{ padding: '14px 14px 0', flex: 1, overflow: 'hidden' }}>
          <div style={{ fontFamily: HF.mono, fontSize: 9, letterSpacing: 2, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>CAPTION</div>
          <div style={{ color: '#fff', fontSize: 15, lineHeight: 1.45 }}>
            Finally stuck the dyno. Two months of trying.<br/>
            <span style={{ color: HF.accent, fontWeight: 600 }}>#firstV7 #bloodorange</span>
            <span style={{ display: 'inline-block', width: 2, height: 16, background: HF.accent, marginLeft: 2, verticalAlign: 'text-bottom' }} />
          </div>

          <div style={{ marginTop: 18, padding: '14px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <div style={{ fontFamily: HF.mono, fontSize: 9, letterSpacing: 2, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>LOG IT AS</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontFamily: HF.display, fontSize: 32, color: '#fff', letterSpacing: -1 }}>V7</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>"Blood Orange"</div>
                <div style={{ fontFamily: HF.mono, fontSize: 10, color: 'rgba(255,255,255,0.55)', letterSpacing: 0.8, marginTop: 2, textTransform: 'uppercase' }}>BOULDER PROJECT · OAK</div>
              </div>
              <div style={{ background: HF.accent, color: '#fff', fontFamily: HF.mono, fontSize: 10, fontWeight: 800, padding: '4px 8px', letterSpacing: 1.5 }}>SENT</div>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
              {[['ATTEMPTS', '14'],['STYLE','DYNO'],['HOLDS','CRIMPS']].map(([k,v])=>(
                <div key={k} style={{ flex: 1, padding: 8, border: '1px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ fontFamily: HF.mono, fontSize: 8, letterSpacing: 1.5, color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{k}</div>
                  <div style={{ fontFamily: HF.display, fontSize: 14, color: '#fff', marginTop: 2 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 14, display: 'flex', gap: 6 }}>
            {[['📡 PUBLIC', true], ['👥 CRUSHERS', false], ['🔒 ONLY ME', false]].map(([l, on]) => (
              <div key={l} style={{ padding: '7px 11px', fontFamily: HF.mono, fontSize: 10, fontWeight: 800, letterSpacing: 1, background: on ? HF.accent : 'transparent', color: '#fff', border: `1.5px solid ${on ? HF.accent : 'rgba(255,255,255,0.25)'}` }}>{l}</div>
            ))}
          </div>
        </div>
      </div>
    </HFPhone>
  );
}

function HFOnboardingScreen() {
  return (
    <HFPhone dark>
      <div style={{ position: 'absolute', inset: 0 }}>
        <Photo src={HF_IMG.outdoor1} height="100%" dim={0.5} />
        <div style={{ position: 'absolute', inset: 0, padding: 28, display: 'flex', flexDirection: 'column', boxSizing: 'border-box', color: '#fff' }}>
          <div style={{ paddingTop: 40, display: 'flex', alignItems: 'baseline', gap: 4 }}>
            <span style={{ fontFamily: HF.display, fontSize: 22, letterSpacing: -0.5 }}>uClimb</span>
            <span style={{ width: 8, height: 8, background: HF.accent, display: 'inline-block' }} />
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ fontFamily: HF.mono, fontSize: 11, letterSpacing: 2, color: HF.accent, textTransform: 'uppercase', fontWeight: 800, marginBottom: 12 }}>● FOR CLIMBERS · BY CLIMBERS</div>
          <div style={{ fontFamily: HF.display, fontSize: 56, lineHeight: 0.92, letterSpacing: -2.5, textTransform: 'uppercase' }}>
            FIND YOUR<br/>
            <span style={{ color: HF.accent }}>CREW.</span><br/>
            SEND<br/>
            HARDER.
          </div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, marginTop: 18, maxWidth: 280 }}>
            Log every send. Plan climbs with friends. Share the moments worth bragging about.
          </div>
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ background: HF.accent, color: '#fff', padding: '16px 14px', textAlign: 'center', fontFamily: HF.mono, fontSize: 12, letterSpacing: 1.5, fontWeight: 800, boxShadow: `4px 4px 0 ${HF.dark}` }}>CREATE PROFILE →</div>
            <div style={{ border: '1.5px solid rgba(255,255,255,0.4)', padding: '14px', textAlign: 'center', fontFamily: HF.mono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700, color: '#fff' }}>I ALREADY HAVE AN ACCOUNT</div>
          </div>
          <div style={{ marginTop: 16, fontFamily: HF.mono, fontSize: 9, letterSpacing: 1.5, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', textAlign: 'center', fontWeight: 700 }}>
            BOULDER · SPORT · TRAD · GYMS · CRAGS
          </div>
        </div>
      </div>
    </HFPhone>
  );
}

Object.assign(window, { HFComposerScreen, HFOnboardingScreen });
