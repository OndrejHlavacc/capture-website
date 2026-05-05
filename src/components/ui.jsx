import { useEffect, useRef } from 'react';

export function Reveal({ children, delay = 0, as: Tag = "div", className = "", style = {}, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh && r.bottom > 0) { el.classList.add("in"); return; }
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { el.classList.add("in"); obs.unobserve(el); }
      }
    }, { threshold: 0.05 });
    obs.observe(el);
    const fallback = setTimeout(() => el.classList.add("in"), 800);
    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

export function Container({ children, style = {}, className = "", size = "default" }) {
  const maxW = size === "wide" ? 1240 : size === "narrow" ? 860 : 1120;
  return (
    <div className={className} style={{ maxWidth: maxW, margin: "0 auto", padding: "0 28px", ...style }}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, tone = "muted" }) {
  return (
    <div className="mono" style={{
      fontSize: 11.5, letterSpacing: "0.14em", textTransform: "uppercase",
      color: tone === "accent" ? "var(--accent-ink)" : "var(--muted)", fontWeight: 500,
    }}>
      {children}
    </div>
  );
}

export function Button({ variant = "primary", children, iconRight = null, onClick, style = {} }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 8,
    fontFamily: "'Inter Tight', 'Inter', sans-serif", fontSize: 14.5, fontWeight: 500,
    padding: "10px 16px", borderRadius: 999, cursor: "pointer", border: "1px solid transparent",
    transition: "transform .15s ease, background .15s ease, border-color .15s ease, color .15s ease",
    letterSpacing: "-0.005em",
  };
  const variants = {
    primary: { background: "var(--ink)", color: "#fff", borderColor: "var(--ink)" },
    accent:  { background: "var(--accent)", color: "#fff", borderColor: "var(--accent)" },
    ghost:   { background: "transparent", color: "var(--ink)", borderColor: "var(--line-2)" },
    link:    { background: "transparent", color: "var(--ink)", borderColor: "transparent", padding: "10px 4px" },
  };
  return (
    <button
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
    >
      {children}{iconRight}
    </button>
  );
}

export function Dot({ color = "var(--muted)", size = 6 }) {
  return <span style={{ display: "inline-block", width: size, height: size, borderRadius: 999, background: color }} />;
}

export function Tag({ children, tone = "neutral" }) {
  const palette = {
    neutral: { bg: "var(--bg-soft)", fg: "var(--ink-2)", bd: "var(--line)" },
    accent:  { bg: "var(--accent-soft)", fg: "var(--accent-ink)", bd: "transparent" },
    warn:    { bg: "var(--warn-soft)", fg: "var(--warn)", bd: "transparent" },
    ok:      { bg: "#DCEAD7", fg: "var(--ok)", bd: "transparent" },
    outline: { bg: "transparent", fg: "var(--ink-2)", bd: "var(--line-2)" },
  }[tone];
  return (
    <span className="mono" style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: palette.bg, color: palette.fg, border: `1px solid ${palette.bd}`,
      fontSize: 11, padding: "3px 8px", borderRadius: 999, letterSpacing: "0.02em", whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}

export const IconArrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" />
  </svg>
);
export const IconPlus = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M7 2v10M2 7h10" />
  </svg>
);
export const IconMinus = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M2 7h10" />
  </svg>
);
export const IconCheck = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7.5 6 10.5 11 4" />
  </svg>
);
export const IconMic = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="4" height="7" rx="2"/>
    <path d="M3 8a4 4 0 0 0 8 0M7 12v-1"/>
  </svg>
);
export const IconBolt = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 1 3 8h3l-1 5 5-7H7Z"/>
  </svg>
);
