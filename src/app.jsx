import { useState, useEffect } from 'react';
import { ACCENTS } from './copy';
import Nav from './components/Nav';
import Hero from './components/Hero';
import SlabInterview from './components/SlabInterview';
import SlabSop from './components/SlabSop';
import { HowItWorks, Features, LogoWall, FAQ, CTA, Footer } from './components/Sections';

const TWEAK_DEFAULTS = {
  accent: "teal",
  density: "compact",
  sections: { interview: true, sop: true, how: true, features: true, logos: true, faq: true, cta: true },
};

function applyTheme(tweaks) {
  const r = document.documentElement;
  const a = ACCENTS[tweaks.accent] || ACCENTS.teal;
  r.style.setProperty("--accent", a.accent);
  r.style.setProperty("--accent-soft", a.accentSoft);
  r.style.setProperty("--accent-ink", a.accentInk);
  const padMap = { compact: 0.78, comfortable: 1, spacious: 1.22 };
  r.style.setProperty("--pad", String(padMap[tweaks.density] || 1));
}

export default function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("capture.lang") || "en"; } catch { return "en"; }
  });
  const [tweaks] = useState(TWEAK_DEFAULTS);

  useEffect(() => {
    try { localStorage.setItem("capture.lang", lang); } catch {}
    document.documentElement.lang = lang === "cs" ? "cs" : "en";
  }, [lang]);

  useEffect(() => { applyTheme(tweaks); }, [tweaks]);

  const s = tweaks.sections;
  return (
    <>
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
    </>
  );
}
