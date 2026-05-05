// Tweaks panel — accent color, density, show/hide sections.

function TweaksPanel({ active, tweaks, setTweaks }) {
  if (!active) return null;

  const update = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
  };
  const updateSection = (key, val) => {
    const sections = { ...tweaks.sections, [key]: val };
    setTweaks({ ...tweaks, sections });
    window.parent.postMessage(
      { type: "__edit_mode_set_keys", edits: { sections } },
      "*"
    );
  };

  const swatch = (key, hex) => (
    <button
      key={key}
      onClick={() => update({ accent: key })}
      aria-label={key}
      style={{
        width: 26, height: 26, borderRadius: 999,
        background: hex,
        border: tweaks.accent === key ? "2px solid var(--ink)" : "2px solid var(--line)",
        cursor: "pointer",
        padding: 0,
      }}
    />
  );

  const sectionToggles = [
    { key: "interview", label: "Interview slab" },
    { key: "sop", label: "SOP slab" },
    { key: "how", label: "How it works" },
    { key: "features", label: "Features" },
    { key: "logos", label: "Logo wall" },
    { key: "faq", label: "FAQ" },
    { key: "cta", label: "CTA" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        width: 296,
        background: "var(--card)",
        border: "1px solid var(--line-2)",
        borderRadius: 14,
        boxShadow: "0 22px 50px -24px rgba(15,20,18,0.3)",
        padding: 16,
        zIndex: 100,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div className="display" style={{ fontSize: 14, fontWeight: 600 }}>Tweaks</div>
        <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>live</div>
      </div>

      {/* Accent */}
      <div style={{ marginBottom: 14 }}>
        <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Accent</div>
        <div style={{ display: "flex", gap: 8 }}>
          {swatch("teal", ACCENTS.teal.accent)}
          {swatch("slate", ACCENTS.slate.accent)}
          {swatch("plum", ACCENTS.plum.accent)}
          {swatch("ember", ACCENTS.ember.accent)}
          {swatch("ink", ACCENTS.ink.accent)}
        </div>
      </div>

      {/* Density */}
      <div style={{ marginBottom: 14 }}>
        <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Density</div>
        <div style={{ display: "flex", gap: 6 }}>
          {["compact", "comfortable", "spacious"].map((d) => (
            <button
              key={d}
              onClick={() => update({ density: d })}
              style={{
                flex: 1,
                padding: "6px 8px",
                borderRadius: 8,
                border: tweaks.density === d ? "1px solid var(--ink)" : "1px solid var(--line-2)",
                background: tweaks.density === d ? "var(--ink)" : "var(--card)",
                color: tweaks.density === d ? "#fff" : "var(--ink-2)",
                fontSize: 12,
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div>
        <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Sections</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {sectionToggles.map((s) => {
            const on = tweaks.sections[s.key];
            return (
              <label
                key={s.key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 8px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 13,
                  color: on ? "var(--ink)" : "var(--muted)",
                }}
              >
                <span
                  style={{
                    width: 28,
                    height: 16,
                    borderRadius: 999,
                    background: on ? "var(--accent)" : "var(--line-2)",
                    position: "relative",
                    transition: "background .15s",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: 2,
                      left: on ? 14 : 2,
                      width: 12,
                      height: 12,
                      borderRadius: 999,
                      background: "#fff",
                      transition: "left .15s",
                    }}
                  />
                </span>
                <span>{s.label}</span>
                <input
                  type="checkbox"
                  checked={on}
                  onChange={(e) => updateSection(s.key, e.target.checked)}
                  style={{ display: "none" }}
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TweaksPanel });
