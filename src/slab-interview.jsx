// "Interview UI" product slab — wider, richer version of the hero card.

function SlabInterview({ lang }) {
  const t = COPY[lang].interview;
  return (
    <section style={{ padding: "96px 0 56px" }}>
      <Container>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 44px" }}>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2
              className="display"
              style={{
                fontSize: "clamp(32px, 4.4vw, 56px)",
                lineHeight: 1.02,
                fontWeight: 500,
                letterSpacing: "-0.028em",
                margin: "10px 0 14px",
                textWrap: "balance",
              }}
            >
              {t.title}
            </h2>
            <p style={{ color: "var(--ink-2)", fontSize: 17, lineHeight: 1.55, margin: 0 }}>
              {t.body}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <InterviewProductFrame lang={lang} />
        </Reveal>

        <Reveal delay={180}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 14,
              marginTop: 32,
            }}
          >
            {t.bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent)", marginTop: 2 }}><IconCheck /></span>
                <div style={{ fontSize: 14, lineHeight: 1.45, color: "var(--ink-2)" }}>{b}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function InterviewProductFrame({ lang }) {
  const L = {
    en: {
      process: "Month-end close · accounting",
      timer: "Recording  ·  12:44  ·  CZ→EN",
      panel_left: "Conversation",
      panel_right: "Live extraction",
      user1: "So I pull the statements from ČSOB and then reconcile them against ledger 221.",
      ai1: "Who has access to ČSOB? And about how long does the reconciliation take you?",
      user2: "Just me and our senior accountant. Reconciliation is maybe 20 to 30 minutes.",
      ai2: "Got it — is there a step where you need controller approval before posting?",
      typing: "type a message instead…",
      detect: "Detected",
      now: "Now hearing",
      tag1: "Tool: ČSOB",
      tag2: "Role: Senior accountant",
      tag3: "Duration: ~25 min",
      tag4: "Approval: Controller",
      step_t: "Captured steps",
      step_sub: "Live — updated as you speak",
      s1: "Pull bank statements from ČSOB",
      s2: "Reconcile against ledger 221",
      s3: "Post FX differences",
      s4: "Controller approval",
    },
    cs: {
      process: "Měsíční uzávěrka · účetnictví",
      timer: "Nahrávání  ·  12:44  ·  CZ→EN",
      panel_left: "Rozhovor",
      panel_right: "Živá extrakce",
      user1: "Stáhnu výpisy z ČSOB a pak je odsouhlasím s účtem 221.",
      ai1: "Kdo má přístup do ČSOB? A jak dlouho trvá ten párovací krok?",
      user2: "Jen já a náš senior účetní. Párování zabere tak 20 až 30 minut.",
      ai2: "Rozumím — je někde krok, kdy to musí schválit controller?",
      typing: "napište místo mluvení…",
      detect: "Rozpoznáno",
      now: "Nyní slyšíme",
      tag1: "Nástroj: ČSOB",
      tag2: "Role: Senior účetní",
      tag3: "Doba: ~25 min",
      tag4: "Schválení: Controller",
      step_t: "Zachycené kroky",
      step_sub: "Živě — podle řeči",
      s1: "Stáhnout výpisy z ČSOB",
      s2: "Odsouhlasit s účtem 221",
      s3: "Zaúčtovat kurzové rozdíly",
      s4: "Schválení controllera",
    },
  }[lang];

  return (
    <div
      style={{
        border: "1px solid var(--line)",
        background: "var(--card)",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 40px 80px -60px rgba(15,20,18,0.25)",
      }}
    >
      {/* top chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 18px",
          borderBottom: "1px solid var(--line)",
          background: "var(--bg-soft)",
        }}
      >
        <Logo size={18} />
        <div style={{ width: 1, height: 16, background: "var(--line-2)" }} />
        <div className="mono" style={{ fontSize: 11.5, color: "var(--muted)" }}>
          {L.process}
        </div>
        <div style={{ flex: 1 }} />
        <Tag tone="accent"><Dot color="var(--accent)" />{L.timer}</Tag>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr" }}>
        {/* LEFT — conversation */}
        <div style={{ padding: "22px 26px", borderRight: "1px solid var(--line)" }}>
          <Eyebrow>{L.panel_left}</Eyebrow>
          <div style={{ height: 14 }} />
          <TranscriptBubble who="You" text={L.user1} tone="user" />
          <div style={{ height: 12 }} />
          <TranscriptBubble who="Capture" text={L.ai1} tone="ai" />
          <div style={{ height: 12 }} />
          <TranscriptBubble who="You" text={L.user2} tone="user" />
          <div style={{ height: 12 }} />
          <TranscriptBubble who="Capture" text={L.ai2} tone="ai" />
          <div style={{ height: 18 }} />

          {/* mic + input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 10px 8px 12px",
              border: "1px solid var(--line)",
              borderRadius: 999,
              background: "var(--bg)",
            }}
          >
            <span
              style={{
                width: 26, height: 26, borderRadius: 999,
                background: "var(--accent)", color: "#fff",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <IconMic />
            </span>
            <MicLevel />
            <div style={{ flex: 1 }} />
            <div className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>{L.typing}</div>
          </div>
        </div>

        {/* RIGHT — extraction */}
        <div style={{ padding: "22px 22px", background: "var(--bg)" }}>
          <Eyebrow>{L.panel_right}</Eyebrow>
          <div style={{ height: 12 }} />
          <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)", marginBottom: 6, letterSpacing: "0.1em", textTransform: "uppercase" }}>{L.detect}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            <Tag tone="neutral">{L.tag1}</Tag>
            <Tag tone="neutral">{L.tag2}</Tag>
            <Tag tone="neutral">{L.tag3}</Tag>
            <Tag tone="warn">{L.tag4}</Tag>
          </div>

          <div style={{ height: 18 }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div className="display" style={{ fontSize: 14, fontWeight: 600 }}>{L.step_t}</div>
            <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)" }}>{L.step_sub}</div>
          </div>
          <div style={{ height: 10 }} />
          <MiniStep n="01" title={L.s1} tag="10 min" />
          <MiniStep n="02" title={L.s2} tag="25 min" warn />
          <MiniStep n="03" title={L.s3} tag="15 min" />
          <MiniStep n="04" title={L.s4} tag="5 min" />

          <div style={{ height: 6 }} />
          <div
            className="mono"
            style={{
              fontSize: 10.5,
              color: "var(--muted)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 8px",
              borderRadius: 8,
              background: "var(--card)",
              border: "1px dashed var(--line-2)",
            }}
          >
            <Dot color="var(--accent)" />
            {L.now}…
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SlabInterview });
