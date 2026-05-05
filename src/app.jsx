// Root app — state, theme vars, edit mode wiring.

function applyTheme(tweaks) {
  const r = document.documentElement;
  const a = ACCENTS[tweaks.accent] || ACCENTS.teal;
  r.style.setProperty("--accent", a.accent);
  r.style.setProperty("--accent-soft", a.accentSoft);
  r.style.setProperty("--accent-ink", a.accentInk);

  const padMap = { compact: 0.78, comfortable: 1, spacious: 1.22 };
  r.style.setProperty("--pad", String(padMap[tweaks.density] || 1));
  document.body.style.setProperty("--section-gap", `${Math.round(96 * (padMap[tweaks.density] || 1))}px`);
}

function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("capture.lang") || "en"; } catch { return "en"; }
  });
  const [tweaks, setTweaks] = useState(window.TWEAK_DEFAULTS);
  const [editActive, setEditActive] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("capture.lang", lang); } catch {}
    document.documentElement.lang = lang === "cs" ? "cs" : "en";
  }, [lang]);

  useEffect(() => { applyTheme(tweaks); }, [tweaks]);

  // Edit-mode protocol — register first, announce second.
  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data;
      if (!d || typeof d !== "object") return;
      if (d.type === "__activate_edit_mode") setEditActive(true);
      if (d.type === "__deactivate_edit_mode") setEditActive(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const s = tweaks.sections;

  // Apply a global density scale on top/bottom padding of sections.
  const mul = { compact: 0.78, comfortable: 1, spacious: 1.22 }[tweaks.density] || 1;

  return (
    <div style={{ ["--mul"]: mul }}>
      <Nav lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      {s.interview && <SlabInterview lang={lang} />}
      {s.sop && <SlabSop lang={lang} />}
      {s.how && <HowItWorks lang={lang} />}
      {s.features && <Features lang={lang} />}
      {s.logos && <LogoWall lang={lang} />}
      {s.faq && <FAQ lang={lang} />}
      {s.cta && <CTA lang={lang} />}
      <Footer lang={lang} />
      <TweaksPanel active={editActive} tweaks={tweaks} setTweaks={setTweaks} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
