// Bilingual copy. CZ is the founder's primary language; EN second.
const COPY = {
  en: {
    nav: {
      product: "Product",
      howItWorks: "How it works",
      changelog: "Changelog",
      signIn: "Sign in",
      cta: "Request a demo",
    },
    pill: "For ops teams at 20–200 person companies",
    hero: {
      h1Line1: "Turn tribal knowledge",
      h1Line2: "into versioned playbooks.",
      sub: "Capture turns a 20-minute voice interview into a structured, versioned SOP — with steps, roles, time estimates, cost flags, and a flow diagram. Stop writing docs nobody reads.",
      primary: "Request a demo",
      secondary: "See a sample SOP",
      trust: "Czech + English · SOC-friendly · Your data stays yours",
    },
    kpi: [
      { n: "20 min", l: "average interview" },
      { n: "0", l: "blank pages to fill" },
      { n: "v1 → v4", l: "versioned, not overwritten" },
      { n: "CZ + EN", l: "in the same session" },
    ],
    interview: {
      eyebrow: "The interview",
      title: "Talk like you'd explain it to a new hire.",
      body: "An AI interviewer guides the conversation — it asks follow-ups when something's vague, surfaces cost and risk, and never lets a step slip through. You just talk.",
      bullets: [
        "Proactive follow-ups — it never waits silently",
        "Detects tools, roles, durations, and approvals as you speak",
        "Hybrid input — type anytime you'd rather not talk",
        "Czech and English handled fluently in the same call",
      ],
    },
    sop: {
      eyebrow: "The output",
      title: "A living SOP, not a transcript.",
      body: "Every step is typed, owned, timed, and costed. Critical steps are flagged. The flow diagram is editable. Add a second capture and you get version 2 — never a merge.",
      bullets: [
        "Steps with role, duration, cost, and risk flags",
        "Editable flow diagram with critical-step treatment",
        "Full version history — every capture, every edit",
        "Export to PDF, Notion, or Confluence",
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "Three steps. Most people finish in under thirty minutes.",
      steps: [
        { k: "01", t: "Start a capture", b: "Pick a process. We dial in and start the interview — no prep, no outline, no template to fill in." },
        { k: "02", t: "Talk it through", b: "The AI guides the conversation, asks follow-ups, and pulls out structure in real time. Type if you prefer." },
        { k: "03", t: "Review and publish", b: "You get a structured SOP with flow diagram. Edit anything. Add another capture later — it becomes v2." },
      ],
    },
    features: {
      eyebrow: "Everything you need",
      title: "Built for processes that change.",
      items: [
        { t: "Voice-first capture", b: "Deepgram Nova-3 + a guided AI interviewer. No blank Notion doc, no Loom transcript to clean up." },
        { t: "Versioned, not overwritten", b: "A new capture creates a new version. Diff, switch, roll back. History is the point." },
        { t: "Role, time, and cost per step", b: "Rollups show primary owner, total duration, and estimated cost per run of the process." },
        { t: "Editable flow diagram", b: "Steps render as a diagram with critical-step flags. Drag, edit, re-export." },
        { t: "Czech + English, same session", b: "Multilingual STT and TTS tuned for Czech. Switch on the fly." },
        { t: "Your data stays yours", b: "Org-scoped memory, exportable anytime. No training on your processes." },
      ],
    },
    logos: "Teams capturing their processes on Capture",
    faq: {
      eyebrow: "Frequently asked",
      title: "Short answers.",
      items: [
        { q: "Do I need to prepare anything?", a: "No. Start the capture, pick the process, and talk. The interviewer handles structure, follow-ups, and edge cases." },
        { q: "What happens when the process changes?", a: "Add a second capture. It creates a new version — v1 stays intact. You can switch, compare, and edit each independently." },
        { q: "Does it work in Czech?", a: "Yes. Czech is the first language we tuned for. English works in the same session — switch mid-conversation." },
        { q: "Is the output structured or just a transcript?", a: "Structured. Goal, prerequisites, steps with owners, durations, cost flags, risk flags, and an editable flow diagram." },
        { q: "Can we export?", a: "PDF today. Notion and Confluence are in private beta. Raw JSON is available on every plan." },
        { q: "Do you train on our data?", a: "No. Your captures, your SOPs, your org memory — all scoped to your org, never used for training." },
      ],
    },
    cta: {
      title: "The next SOP you document should be the last one you write.",
      body: "We're onboarding ops teams one by one. 20-minute demo, a real capture on a process you care about, and you keep the SOP.",
      primary: "Request a demo",
      secondary: "Email the founder",
    },
    footer: {
      tag: "Capture, s.r.o. — Prague",
      cols: [
        { h: "Product", l: ["How it works", "Pricing", "Changelog", "Security"] },
        { h: "Company", l: ["About", "Customers", "Contact", "Careers"] },
        { h: "Resources", l: ["SOP library", "Playbook guide", "Voice-interview tips", "Status"] },
      ],
      rights: "© 2026 Capture. All rights reserved.",
    },
  },

  cs: {
    nav: {
      product: "Produkt",
      howItWorks: "Jak to funguje",
      changelog: "Novinky",
      signIn: "Přihlásit",
      cta: "Vyžádat demo",
    },
    pill: "Pro provozní týmy firem s 20–200 lidmi",
    hero: {
      h1Line1: "Z tacitních znalostí",
      h1Line2: "verzované playbooky.",
      sub: "Capture promění 20minutový hlasový rozhovor na strukturované SOP s kroky, rolemi, odhady času, nákladovými vlajkami a vývojovým diagramem. Přestaňte psát dokumentaci, kterou nikdo nečte.",
      primary: "Vyžádat demo",
      secondary: "Ukázka SOP",
      trust: "Česky i anglicky · Data zůstávají u vás",
    },
    kpi: [
      { n: "20 min", l: "průměrný rozhovor" },
      { n: "0", l: "prázdných stránek" },
      { n: "v1 → v4", l: "verzované, ne přepsané" },
      { n: "CZ + EN", l: "v jednom hovoru" },
    ],
    interview: {
      eyebrow: "Rozhovor",
      title: "Mluvte, jako byste to vysvětlovali nováčkovi.",
      body: "AI tazatel vede rozhovor — když je něco nejasné, ptá se dál, upozorní na náklady a rizika a nenechá spadnout žádný krok. Vy jenom mluvíte.",
      bullets: [
        "Aktivní doptávání — nikdy nemlčí",
        "Rozpozná nástroje, role, časy i schvalování",
        "Hybridní vstup — kdykoliv můžete přepnout na psaní",
        "Češtinu a angličtinu zvládá plynule v jednom hovoru",
      ],
    },
    sop: {
      eyebrow: "Výstup",
      title: "Živé SOP, ne přepis.",
      body: "Každý krok má typ, vlastníka, čas a náklad. Kritické kroky jsou označené. Diagram je editovatelný. Přidejte druhý záznam a vznikne verze 2 — nikdy merge.",
      bullets: [
        "Kroky s rolí, dobou trvání, nákladem a riziky",
        "Editovatelný diagram s označením kritických kroků",
        "Plná historie verzí — každý záznam, každá úprava",
        "Export do PDF, Notion nebo Confluence",
      ],
    },
    how: {
      eyebrow: "Jak to funguje",
      title: "Tři kroky. Většina lidí to má za třicet minut.",
      steps: [
        { k: "01", t: "Spusťte záznam", b: "Vyberte proces. Vytočíme se a začne rozhovor — bez přípravy, šablon a prázdných polí." },
        { k: "02", t: "Proveďte nás tím", b: "AI vede rozhovor, doptává se a v reálném čase vytahuje strukturu. Kdykoliv můžete psát." },
        { k: "03", t: "Zkontrolujte a publikujte", b: "Dostanete strukturované SOP s diagramem. Cokoliv upravíte. Přidejte další záznam později — vznikne v2." },
      ],
    },
    features: {
      eyebrow: "Vše, co potřebujete",
      title: "Pro procesy, které se mění.",
      items: [
        { t: "Hlasový záznam jako první", b: "Deepgram Nova-3 a AI tazatel. Žádný prázdný Notion, žádný Loom přepis k úklidu." },
        { t: "Verzováno, ne přepisováno", b: "Nový záznam = nová verze. Srovnání, přepínání, návrat zpět. Historie je smysl." },
        { t: "Role, čas a náklad u každého kroku", b: "Součty ukazují hlavního vlastníka, celkovou dobu a odhadovaný náklad na jeden průběh." },
        { t: "Editovatelný diagram", b: "Kroky se vykreslí jako diagram, kritické jsou zvýrazněné. Přetáhněte, upravte, exportujte." },
        { t: "Čeština i angličtina v jednom", b: "Multilingvální STT a TTS vyladěné pro češtinu. Přepněte za chodu." },
        { t: "Data zůstávají u vás", b: "Paměť v rámci organizace, kdykoliv export. Na vašich procesech netrénujeme." },
      ],
    },
    logos: "Týmy, které zachycují procesy v Capture",
    faq: {
      eyebrow: "Časté dotazy",
      title: "Stručně.",
      items: [
        { q: "Musím se nějak připravit?", a: "Ne. Spusťte záznam, vyberte proces a mluvte. Tazatel řeší strukturu, doptávání i okrajové případy." },
        { q: "Co když se proces změní?", a: "Přidejte druhý záznam. Vznikne nová verze — v1 zůstane. Můžete přepínat, porovnávat a upravovat zvlášť." },
        { q: "Funguje to v češtině?", a: "Ano. Čeština je první jazyk, na který jsme to ladili. Angličtina funguje ve stejném hovoru." },
        { q: "Je výstup strukturovaný, nebo jen přepis?", a: "Strukturovaný. Cíl, předpoklady, kroky s vlastníky, časy, náklady, rizika a editovatelný diagram." },
        { q: "Jde to exportovat?", a: "Dnes PDF. Notion a Confluence jsou v soukromé beta. Surové JSON máte v každém plánu." },
        { q: "Trénujete na našich datech?", a: "Ne. Vaše záznamy a SOP jsou pouze ve vaší organizaci, netrénujeme na nich." },
      ],
    },
    cta: {
      title: "Další SOP, které napíšete, by mělo být poslední.",
      body: "Onboardujeme týmy postupně. 20minutové demo, skutečný záznam na procesu, na kterém vám záleží, a SOP si necháte.",
      primary: "Vyžádat demo",
      secondary: "Napsat zakladateli",
    },
    footer: {
      tag: "Capture, s.r.o. — Praha",
      cols: [
        { h: "Produkt", l: ["Jak to funguje", "Ceník", "Novinky", "Bezpečnost"] },
        { h: "Firma", l: ["O nás", "Zákazníci", "Kontakt", "Kariéra"] },
        { h: "Zdroje", l: ["Knihovna SOP", "Průvodce playbooky", "Tipy pro rozhovor", "Stav"] },
      ],
      rights: "© 2026 Capture. Všechna práva vyhrazena.",
    },
  },
};

window.COPY = COPY;

// Accent palettes — kept simple, all share chroma≈0.09 range
const ACCENTS = {
  teal:  { accent:"#0F766E", accentSoft:"#D7EBE7", accentInk:"#064E46" },
  slate: { accent:"#1E293B", accentSoft:"#E2E5EA", accentInk:"#0B121E" },
  plum:  { accent:"#6D28D9", accentSoft:"#E7DEF6", accentInk:"#3F0F85" },
  ember: { accent:"#C2410C", accentSoft:"#FBE4D2", accentInk:"#6B240B" },
  ink:   { accent:"#0F1412", accentSoft:"#E6E4DD", accentInk:"#000000" },
};
window.ACCENTS = ACCENTS;
