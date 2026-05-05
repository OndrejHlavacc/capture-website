import { Reveal, Container, Button, Tag, Dot, IconArrow, IconBolt } from './ui';
import { COPY } from '../copy';

function MicLevel() {
  const heights = [4, 8, 14, 22, 28, 22, 16, 10, 6, 4, 8, 12, 18, 10, 6, 4];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 3, marginTop: 4, height: 32, paddingLeft: 32 }}>
      {heights.map((h, i) => (
        <span key={i} style={{ width: 3, height: h, background: "var(--accent)", opacity: 0.25 + (h / 40), borderRadius: 2 }} />
      ))}
    </div>
  );
}

function TranscriptBubble({ who, text, tone }) {
  const isUser = tone === "user";
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <div style={{
        width: 22, height: 22, borderRadius: 999,
        background: isUser ? "var(--bg-soft)" : "var(--accent)",
        color: isUser ? "var(--ink-2)" : "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 10, fontWeight: 600, flexShrink: 0,
      }}>{isUser ? "Y" : "C"}</div>
      <div>
        <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)", marginBottom: 2 }}>{who}</div>
        <div style={{ fontSize: 13.5, color: "var(--ink)", lineHeight: 1.45, maxWidth: 360 }}>{text}</div>
      </div>
    </div>
  );
}

function MiniStep({ n, title, tag, warn }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", border: "1px solid var(--line)", borderRadius: 10, background: "var(--card)", marginBottom: 6 }}>
      <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)", width: 16 }}>{n}</div>
      <div style={{ fontSize: 12.5, color: "var(--ink)", flex: 1 }}>{title}</div>
      {warn && <Tag tone="warn">!</Tag>}
      <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)" }}>{tag}</div>
    </div>
  );
}

function HeroProductCard({ lang }) {
  const L = {
    en: { title: "Month-end close — accounting", stage: "Recording · 04:12", role: "Role: Senior accountant", type: "You", ai: "Capture" },
    cs: { title: "Měsíční uzávěrka — účetnictví", stage: "Nahrávání · 04:12", role: "Role: Senior účetní", type: "Vy", ai: "Capture" },
  }[lang];
  const line = lang === "cs" ? "Takže v pondělí stáhnu bankovní výpisy a…" : "So on Monday I pull the bank statements and…";
  const aiLine = lang === "cs" ? "Z jaké banky a kdo má přístup?" : "Which bank, and who has access?";

  return (
    <div style={{
      width: "min(820px, 100%)", margin: "44px auto 0",
      background: "var(--card)", border: "1px solid var(--line)", borderRadius: 18,
      boxShadow: "0 30px 60px -40px rgba(15,20,18,0.25), 0 2px 0 rgba(15,20,18,0.02)", padding: 14,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 8px 12px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {[0,1,2].map(i => <span key={i} style={{ width: 9, height: 9, borderRadius: 999, background: "#E4E1D9" }} />)}
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--muted)", marginLeft: 6 }}>capture.so / sessions / close-q2</div>
        <div style={{ flex: 1 }} />
        <Tag tone="accent"><Dot color="var(--accent)" size={6} />{L.stage}</Tag>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr" }}>
        <div style={{ padding: "16px 16px 14px", borderRight: "1px solid var(--line)" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
            <div className="display" style={{ fontSize: 15, fontWeight: 600 }}>{L.title}</div>
            <div className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>{L.role}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <TranscriptBubble who={L.type} text={line} tone="user" />
            <TranscriptBubble who={L.ai} text={aiLine} tone="ai" />
            <MicLevel />
          </div>
        </div>
        <div style={{ padding: "16px 14px 14px", background: "var(--bg)" }}>
          <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
            {lang === "cs" ? "Zachycené kroky" : "Captured steps"}
          </div>
          <MiniStep n="01" title={lang === "cs" ? "Stáhnout bankovní výpisy" : "Pull bank statements"} tag="10 min" />
          <MiniStep n="02" title={lang === "cs" ? "Odsouhlasit s účtem 221" : "Reconcile with ledger 221"} tag="25 min" warn />
          <MiniStep n="03" title={lang === "cs" ? "Upravit kurzové rozdíly" : "Post FX differences"} tag="15 min" />
          <div style={{ height: 10 }} />
          <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)" }}>
            {lang === "cs" ? "Celkem 3 kroky · ~50 min" : "3 steps so far · ~50 min"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ lang }) {
  const t = COPY[lang].hero;
  const pill = COPY[lang].pill;
  const kpi = COPY[lang].kpi;
  return (
    <section style={{ paddingTop: 56, paddingBottom: 40 }}>
      <Container>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px 5px 8px", border: "1px solid var(--line-2)", borderRadius: 999, background: "var(--card)", fontSize: 12.5, color: "var(--ink-2)" }}>
              <span style={{ width: 18, height: 18, borderRadius: 999, background: "var(--accent-soft)", color: "var(--accent-ink)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <IconBolt size={11} />
              </span>
              {pill}
            </span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display" style={{ textAlign: "center", margin: "22px auto 0", fontWeight: 500, fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.98, letterSpacing: "-0.035em", color: "var(--ink)", maxWidth: 1060, textWrap: "balance" }}>
            <span>{t.h1Line1}</span><br />
            <span style={{ color: "var(--muted)", fontStyle: "italic", fontWeight: 400 }}>{t.h1Line2}</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p style={{ textAlign: "center", maxWidth: 640, margin: "26px auto 0", fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)" }}>{t.sub}</p>
        </Reveal>
        <Reveal delay={220}>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 28 }}>
            <Button variant="primary" iconRight={<IconArrow />}>{t.primary}</Button>
            <Button variant="ghost">{t.secondary}</Button>
          </div>
        </Reveal>
        <Reveal delay={280}>
          <div className="mono" style={{ textAlign: "center", marginTop: 22, fontSize: 11.5, letterSpacing: "0.08em", color: "var(--muted)", textTransform: "uppercase" }}>{t.trust}</div>
        </Reveal>
        <Reveal delay={360}><HeroProductCard lang={lang} /></Reveal>
        <Reveal delay={440}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", maxWidth: 820, margin: "40px auto 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
            {kpi.map((k, i) => (
              <div key={i} style={{ padding: "18px 12px", borderLeft: i === 0 ? "none" : "1px solid var(--line)", textAlign: "center" }}>
                <div className="display" style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em" }}>{k.n}</div>
                <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)", marginTop: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>{k.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { TranscriptBubble, MicLevel, MiniStep };
