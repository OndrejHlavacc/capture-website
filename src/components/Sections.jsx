import { useState } from 'react';
import { Reveal, Container, Eyebrow, Button, Tag, IconArrow, IconPlus, IconMinus, IconCheck } from './ui';
import { Logo } from './Nav';
import { COPY } from '../copy';

export function HowItWorks({ lang }) {
  const t = COPY[lang].how;
  return (
    <section id="how" style={{ padding: "96px 0 56px" }}>
      <Container>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48, alignItems: "start", marginBottom: 36 }}>
            <div>
              <Eyebrow>{t.eyebrow}</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 46px)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.025em", margin: "10px 0 0", textWrap: "balance" }}>{t.title}</h2>
            </div>
            <div />
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {t.steps.map((s, i) => (
            <Reveal key={s.k} delay={i * 80}>
              <div style={{ padding: "28px 24px 32px", border: "1px solid var(--line)", borderRadius: 16, background: "var(--card)", height: "100%", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--muted)", textTransform: "uppercase" }}>step {s.k}</div>
                  <div className="display" style={{ fontSize: 36, fontWeight: 500, color: "var(--line)", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.k}</div>
                </div>
                <div className="display" style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 8 }}>{s.t}</div>
                <div style={{ fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{s.b}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Features({ lang }) {
  const t = COPY[lang].features;
  return (
    <section id="product" style={{ padding: "80px 0 56px" }}>
      <Container>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 44px" }}>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 46px)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.025em", margin: "10px 0 0", textWrap: "balance" }}>{t.title}</h2>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden", background: "var(--card)" }}>
          {t.items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 60}>
              <div style={{ padding: "26px 24px 28px", borderRight: (i % 3) !== 2 ? "1px solid var(--line)" : "none", borderBottom: i < 3 ? "1px solid var(--line)" : "none", minHeight: 170 }}>
                <span style={{ width: 28, height: 28, borderRadius: 8, background: "var(--accent-soft)", color: "var(--accent-ink)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <IconCheck />
                </span>
                <div className="display" style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>{item.t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)" }}>{item.b}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function LogoWall({ lang }) {
  const label = COPY[lang].logos;
  const marks = ["Konvex", "Halda", "Meridian", "Ateliér", "Northwind", "Sever"];
  return (
    <section style={{ padding: "40px 0 80px" }}>
      <Container>
        <Reveal>
          <div className="mono" style={{ textAlign: "center", fontSize: 11, letterSpacing: "0.16em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 22 }}>{label}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", alignItems: "center", gap: 0, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
            {marks.map((m, i) => (
              <div key={m} className="display" style={{ padding: "26px 12px", textAlign: "center", fontSize: 20, fontWeight: 600, letterSpacing: "-0.015em", color: "var(--muted)", borderLeft: i === 0 ? "none" : "1px solid var(--line)", opacity: 0.75 }}>{m}</div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function FAQ({ lang }) {
  const t = COPY[lang].faq;
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: "80px 0 56px" }}>
      <Container size="narrow">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 36px" }}>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 46px)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.025em", margin: "10px 0 0" }}>{t.title}</h2>
          </div>
        </Reveal>
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {t.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 40}>
                <div style={{ borderBottom: "1px solid var(--line)" }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 16, padding: "20px 4px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
                    <span className="display" style={{ fontSize: 17, fontWeight: 500, letterSpacing: "-0.015em", color: "var(--ink)", flex: 1 }}>{item.q}</span>
                    <span style={{ color: "var(--muted)" }}>{isOpen ? <IconMinus /> : <IconPlus />}</span>
                  </button>
                  <div style={{ maxHeight: isOpen ? 240 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
                    <div style={{ padding: "0 4px 22px", fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 620 }}>{item.a}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function CTA({ lang }) {
  const t = COPY[lang].cta;
  return (
    <section id="cta" style={{ padding: "80px 0 110px" }}>
      <Container>
        <Reveal>
          <div style={{ background: "var(--ink)", color: "#fff", borderRadius: 24, padding: "60px 48px 52px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 28, right: 28, width: 10, height: 10, borderRadius: 999, background: "var(--accent)", boxShadow: "0 0 0 6px rgba(15,118,110,0.18)" }} />
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.02, fontWeight: 500, letterSpacing: "-0.03em", margin: "0 auto 14px", maxWidth: 780, textWrap: "balance" }}>{t.title}</h2>
            <p style={{ maxWidth: 560, margin: "0 auto 26px", fontSize: 16, lineHeight: 1.55, color: "rgba(255,255,255,0.7)" }}>{t.body}</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <Button variant="accent" iconRight={<IconArrow />} style={{ background: "var(--accent)", borderColor: "var(--accent)" }}>{t.primary}</Button>
              <Button variant="ghost" style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>{t.secondary}</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer({ lang }) {
  const t = COPY[lang].footer;
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "44px 0 40px", background: "var(--bg)" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32 }}>
          <div>
            <Logo />
            <div style={{ marginTop: 14, fontSize: 13, color: "var(--muted)" }}>{t.tag}</div>
          </div>
          {t.cols.map((c) => (
            <div key={c.h}>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 14 }}>{c.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {c.l.map((x) => <li key={x}><a href="#" style={{ color: "var(--ink-2)", textDecoration: "none", fontSize: 14 }}>{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 44, paddingTop: 18, borderTop: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, color: "var(--muted)" }}>
          <div>{t.rights}</div>
          <div className="mono" style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>v3 · capture.so</div>
        </div>
      </Container>
    </footer>
  );
}
