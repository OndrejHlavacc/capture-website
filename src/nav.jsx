// Top navigation — compact, light, bilingual toggle.
function Logo({ size = 22 }) {
  // Simple geometric wordmark: "●" dot + "capture" — neutral, startupy.
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <span
        style={{
          width: size * 0.48,
          height: size * 0.48,
          borderRadius: 999,
          background: "var(--ink)",
          position: "relative",
          display: "inline-block",
        }}
      >
        <span
          style={{
            position: "absolute",
            inset: "22% 22% auto auto",
            width: "28%",
            height: "28%",
            background: "var(--accent)",
            borderRadius: 999,
          }}
        />
      </span>
      <span
        className="display"
        style={{ fontWeight: 600, fontSize: size * 0.82, letterSpacing: "-0.02em" }}
      >
        capture
      </span>
    </div>
  );
}

function LangToggle({ lang, onChange }) {
  const opt = (code, label) => (
    <button
      onClick={() => onChange(code)}
      key={code}
      className="mono"
      style={{
        background: lang === code ? "var(--ink)" : "transparent",
        color: lang === code ? "#fff" : "var(--muted)",
        border: "none",
        padding: "4px 9px",
        borderRadius: 999,
        fontSize: 11,
        letterSpacing: "0.08em",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: 3,
        border: "1px solid var(--line-2)",
        borderRadius: 999,
        background: "var(--card)",
      }}
    >
      {opt("en", "EN")}
      {opt("cs", "CZ")}
    </div>
  );
}

function Nav({ lang, setLang }) {
  const t = COPY[lang].nav;
  const items = [
    { id: "product", label: t.product },
    { id: "how", label: t.howItWorks },
    { id: "changelog", label: t.changelog },
  ];
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: "rgba(250,250,247,0.72)",
        borderBottom: "1px solid rgba(230,228,221,0.6)",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: 64,
            gap: 18,
          }}
        >
          <Logo />
          <nav
            style={{
              display: "flex",
              gap: 22,
              marginLeft: 28,
              flex: 1,
            }}
          >
            {items.map((i) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                style={{
                  textDecoration: "none",
                  color: "var(--ink-2)",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {i.label}
              </a>
            ))}
          </nav>
          <LangToggle lang={lang} onChange={setLang} />
          <a
            href="#"
            style={{
              fontSize: 14,
              color: "var(--ink-2)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            {t.signIn}
          </a>
          <Button variant="accent" iconRight={<IconArrow />} style={{ whiteSpace: "nowrap" }}>
            {t.cta}
          </Button>
        </div>
      </Container>
    </div>
  );
}

Object.assign(window, { Nav, Logo, LangToggle });
