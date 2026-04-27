const DRIVING_OFFENCES = [
  { offence: "Overloading",                         first: "₹20,000 + ₹2,000 (per extra ton)",           repeat: "—" },
  { offence: "Dangerous / Rash driving",            first: "₹1,000 or 1 year imprisonment or both",      repeat: "₹10,000 + 2-year imprisonment" },
  { offence: "Using mobile phone while driving",    first: "₹500",                                        repeat: "₹5,000" },
  { offence: "Overspeeding",                        first: "₹500",                                        repeat: "₹5,000" },
  { offence: "Drunken driving / abetment",          first: "₹1,000 – ₹1,500",                            repeat: "₹10,000 or 6 months imprisonment" },
  { offence: "Riding without helmet or turban",     first: "₹100",                                        repeat: "₹1,000 + scrapping of license 3 months" },
  { offence: "Driving without seatbelt",            first: "₹100",                                        repeat: "₹1,000" },
];

const DOCUMENT_OFFENCES = [
  { offence: "Driving without a valid license",          first: "₹500",                                       repeat: "₹5,000" },
  { offence: "Underage driver",                          first: "₹25,000 or imprisonment for 3 years",        repeat: "—" },
  { offence: "Driving without vehicle registration",     first: "₹2,000 – ₹5,000",                           repeat: "₹5,000 – ₹10,000 or 1-year imprisonment" },
  { offence: "Driving without PUCC",                     first: "₹10,000 and upto 6 months imprisonment",    repeat: "—" },
  { offence: "Driving an uninsured vehicle",             first: "₹200 – ₹400",                               repeat: "₹2,000 – ₹4,000" },
  { offence: "Driving without a valid permit",           first: "₹10,000",                                    repeat: "—" },
  { offence: "Driving without a seatbelt",               first: "₹100",                                       repeat: "₹1,000" },
];

function OffenceTable({ title, rows }: { title: string; rows: typeof DRIVING_OFFENCES }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <h3
        style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
          fontWeight: 700, color: "var(--text)", marginBottom: 20,
        }}
      >
        {title}
      </h3>
      <div style={{ overflowX: "auto", borderRadius: 14, border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Offence</th>
              <th>First Offence</th>
              <th>Repeat Offence</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 500, color: "var(--text)" }}>{item.offence}</td>
                <td>{item.first}</td>
                <td>{item.repeat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="vs-container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="vs-label">Traffic Offences</span>
          <h2 className="vs-h2">Top Traffic Offences &amp; Penalties in India</h2>
          <p className="vs-body" style={{ maxWidth: 680, margin: "14px auto 0" }}>
            Staying informed about the latest traffic violations in India is highly crucial.
          </p>
        </div>

        <OffenceTable title="Driving Offences" rows={DRIVING_OFFENCES} />
        <OffenceTable title="Invalid Documents Offences" rows={DOCUMENT_OFFENCES} />

        {/* Disclaimer */}
        <div
          style={{
            padding: "18px 24px",
            background: "#fffbeb",
            border: "1px solid #fbbf24",
            borderRadius: 12,
            marginBottom: 28,
          }}
        >
          <p style={{ fontSize: 14, color: "#92400e", lineHeight: 1.7 }}>
            <strong>Note:</strong> Penalties may vary depending on the location (city/state) and
            amendments in the MVA.
          </p>
        </div>

        <p
          className="vs-body"
          style={{ textAlign: "center", maxWidth: 860, margin: "0 auto" }}
        >
          E-Challan was incorporated to simplify the complete traffic management system and make
          the entire process transparent and convenient. The easiest way to avoid penalisation
          is by complying with traffic laws and regulations.
        </p>
      </div>
    </section>
  );
}
