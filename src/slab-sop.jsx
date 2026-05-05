// "SOP + Flow diagram" product slab.

function SlabSop({ lang }) {
  const t = COPY[lang].sop;
  return (
    <section style={{ padding: "80px 0 56px", background: "var(--bg-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
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
          <SopProductFrame lang={lang} />
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

function SopProductFrame({ lang }) {
  const L = {
    en: {
      title: "SOP — Month-end close",
      version: "v3  ·  updated from capture #4",
      history: "History",
      tabs: ["Steps", "Flow diagram", "Versions"],
      rollup: "Rollup",
      r_time: "Total time",
      r_time_v: "2h 10m",
      r_cost: "Est. cost / run",
      r_cost_v: "€ 184",
      r_role: "Primary role",
      r_role_v: "Senior accountant",
      steps: [
        { n: "01", t: "Pull bank statements from ČSOB", role: "Senior acc.", time: "10 min", flags: [] },
        { n: "02", t: "Reconcile against ledger 221",     role: "Senior acc.", time: "25 min", flags: ["financial"] },
        { n: "03", t: "Post FX differences",              role: "Senior acc.", time: "15 min", flags: [] },
        { n: "04", t: "Controller approval",              role: "Controller",  time: "5 min",  flags: ["approval"] },
        { n: "05", t: "Close period in ERP",              role: "Senior acc.", time: "3 min",  flags: ["irreversible"] },
      ],
      flag_financial: "financial",
      flag_approval: "approval",
      flag_irreversible: "irreversible",
      diag_title: "Flow diagram",
      diag_sub: "Critical steps flagged",
      versions: "Versions",
      v_items: [
        { v: "v3", meta: "Apr 18 · Capture #4 · Pavel K.", cur: true },
        { v: "v2", meta: "Mar 30 · Capture #3 · Pavel K." },
        { v: "v1", meta: "Feb 12 · Capture #1 · Pavel K." },
      ],
    },
    cs: {
      title: "SOP — Měsíční uzávěrka",
      version: "v3  ·  aktualizováno ze záznamu #4",
      history: "Historie",
      tabs: ["Kroky", "Diagram", "Verze"],
      rollup: "Souhrn",
      r_time: "Celkový čas",
      r_time_v: "2h 10m",
      r_cost: "Odhad nákladu / průběh",
      r_cost_v: "€ 184",
      r_role: "Hlavní role",
      r_role_v: "Senior účetní",
      steps: [
        { n: "01", t: "Stáhnout výpisy z ČSOB",           role: "Senior úč.", time: "10 min", flags: [] },
        { n: "02", t: "Odsouhlasit s účtem 221",          role: "Senior úč.", time: "25 min", flags: ["finance"] },
        { n: "03", t: "Zaúčtovat kurzové rozdíly",        role: "Senior úč.", time: "15 min", flags: [] },
        { n: "04", t: "Schválení controllera",            role: "Controller", time: "5 min",  flags: ["schválení"] },
        { n: "05", t: "Uzavřít období v ERP",             role: "Senior úč.", time: "3 min",  flags: ["nevratné"] },
      ],
      flag_financial: "finance",
      flag_approval: "schválení",
      flag_irreversible: "nevratné",
      diag_title: "Diagram",
      diag_sub: "Kritické kroky vyznačeny",
      versions: "Verze",
      v_items: [
        { v: "v3", meta: "18. 4. · Záznam #4 · Pavel K.", cur: true },
        { v: "v2", meta: "30. 3. · Záznam #3 · Pavel K." },
        { v: "v1", meta: "12. 2. · Záznam #1 · Pavel K." },
      ],
    },
  }[lang];

  return (
    <div
      style={{
        border: "1px solid var(--line)",
        background: "var(--card)",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 40px 80px -60px rgba(15,20,18,0.3)",
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
          background: "var(--bg)",
        }}
      >
        <div className="display" style={{ fontWeight: 600, fontSize: 14 }}>{L.title}</div>
        <Tag tone="outline">{L.version}</Tag>
        <div style={{ flex: 1 }} />
        <div className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>{L.history}</div>
      </div>

      {/* tabs */}
      <div style={{ display: "flex", gap: 22, padding: "8px 20px 0", borderBottom: "1px solid var(--line)" }}>
        {L.tabs.map((tab, i) => (
          <div
            key={tab}
            style={{
              fontSize: 13,
              color: i === 0 ? "var(--ink)" : "var(--muted)",
              fontWeight: 500,
              padding: "8px 0 10px",
              borderBottom: i === 0 ? "2px solid var(--ink)" : "2px solid transparent",
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr" }}>
        {/* LEFT — steps list */}
        <div style={{ padding: "22px 24px", borderRight: "1px solid var(--line)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>#</th>
                <th style={thStyle}>{lang === "cs" ? "Krok" : "Step"}</th>
                <th style={thStyle}>{lang === "cs" ? "Role" : "Role"}</th>
                <th style={{ ...thStyle, textAlign: "right" }}>{lang === "cs" ? "Čas" : "Time"}</th>
              </tr>
            </thead>
            <tbody>
              {L.steps.map((s) => (
                <tr key={s.n} style={{ borderTop: "1px solid var(--line)" }}>
                  <td className="mono" style={{ ...tdStyle, color: "var(--muted)", width: 34 }}>{s.n}</td>
                  <td style={tdStyle}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 13.5 }}>{s.t}</span>
                      {s.flags.map((f) => {
                        const tone = f === "financial" || f === "finance" ? "warn" : f === "irreversible" || f === "nevratné" ? "warn" : "accent";
                        return <Tag key={f} tone={tone}>{f}</Tag>;
                      })}
                    </div>
                  </td>
                  <td style={{ ...tdStyle, color: "var(--muted)", fontSize: 12.5 }}>{s.role}</td>
                  <td className="mono" style={{ ...tdStyle, textAlign: "right", color: "var(--muted)", fontSize: 12, width: 70 }}>{s.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT — rollup + mini flow + versions */}
        <div style={{ padding: "20px 22px", background: "var(--bg)" }}>
          <Eyebrow>{L.rollup}</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 10 }}>
            <RollupCell label={L.r_time} value={L.r_time_v} />
            <RollupCell label={L.r_cost} value={L.r_cost_v} />
            <RollupCell label={L.r_role} value={L.r_role_v} />
          </div>

          <div style={{ height: 16 }} />
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <div className="display" style={{ fontSize: 13, fontWeight: 600 }}>{L.diag_title}</div>
            <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)" }}>{L.diag_sub}</div>
          </div>
          <MiniFlow />

          <div style={{ height: 16 }} />
          <Eyebrow>{L.versions}</Eyebrow>
          <div style={{ marginTop: 8 }}>
            {L.v_items.map((v) => (
              <div
                key={v.v}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 10px",
                  border: "1px solid var(--line)",
                  borderRadius: 8,
                  background: v.cur ? "var(--accent-soft)" : "var(--card)",
                  marginBottom: 6,
                }}
              >
                <span className="mono" style={{ fontSize: 11.5, fontWeight: 500, color: v.cur ? "var(--accent-ink)" : "var(--ink-2)" }}>{v.v}</span>
                <span style={{ fontSize: 12.5, color: "var(--muted)" }}>{v.meta}</span>
                {v.cur && <span style={{ marginLeft: "auto" }}><Tag tone="accent">current</Tag></span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const thStyle = {
  textAlign: "left",
  fontSize: 10.5,
  fontFamily: "'JetBrains Mono', monospace",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--muted)",
  fontWeight: 500,
  padding: "0 8px 8px",
};
const tdStyle = {
  padding: "10px 8px",
  fontSize: 13,
  verticalAlign: "middle",
};

function RollupCell({ label, value }) {
  return (
    <div style={{ padding: "10px 12px", background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10 }}>
      <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
      <div className="display" style={{ fontSize: 17, fontWeight: 600, marginTop: 2, letterSpacing: "-0.01em" }}>{value}</div>
    </div>
  );
}

function MiniFlow() {
  // Simple linear flow diagram with one branch and a flagged critical node.
  return (
    <div
      style={{
        marginTop: 8,
        padding: "20px 14px",
        border: "1px solid var(--line)",
        background: "var(--card)",
        borderRadius: 12,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <svg viewBox="0 0 460 140" style={{ width: "100%", height: 140 }}>
        {/* grid dots */}
        <defs>
          <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#EFECE4" />
          </pattern>
        </defs>
        <rect width="460" height="140" fill="url(#dots)" />

        {/* connectors */}
        <g stroke="#B9B5A9" strokeWidth="1.2" fill="none">
          <path d="M70 40 H130" />
          <path d="M190 40 H250" />
          <path d="M310 40 H370" />
          <path d="M220 55 V90 H250" />
        </g>

        {/* nodes */}
        <FlowNode x={10}  y={22} label="Pull" />
        <FlowNode x={130} y={22} label="Reconcile" critical />
        <FlowNode x={250} y={22} label="FX post" />
        <FlowNode x={370} y={22} label="Close" irreversible />
        <FlowNode x={250} y={72} label="Approve" approval />
      </svg>
    </div>
  );
}

function FlowNode({ x, y, label, critical, approval, irreversible }) {
  const fill = critical || irreversible ? "#FBE8D8" : approval ? "#D7EBE7" : "#FFFFFF";
  const stroke = critical || irreversible ? "#E7AE7D" : approval ? "#7FC3B8" : "#D8D4C8";
  const fg = critical || irreversible ? "#8A3B0F" : approval ? "#0B5A52" : "#1A1F1D";
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width="60" height="36" rx="8" fill={fill} stroke={stroke} />
      <text x="30" y="22" textAnchor="middle" fontSize="10.5" fontFamily="Inter, sans-serif" fill={fg} fontWeight="500">{label}</text>
    </g>
  );
}

Object.assign(window, { SlabSop });
