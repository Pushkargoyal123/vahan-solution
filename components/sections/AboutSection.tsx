const DRIVING_OFFENCES = [
  { offence: "Overloading", first: "₹20,000 + ₹2,000 (per extra ton)", repeat: "—" },
  { offence: "Dangerous / Rash driving", first: "₹1,000 or 1 year imprisonment or both", repeat: "₹10,000 + 2-year imprisonment" },
  { offence: "Using mobile phone while driving", first: "₹500", repeat: "₹5,000" },
  { offence: "Overspeeding", first: "₹500", repeat: "₹5,000" },
  { offence: "Drunken driving / abetment", first: "₹1,000 – ₹1,500", repeat: "₹10,000 or 6 months imprisonment" },
  { offence: "Riding without helmet or turban", first: "₹100", repeat: "₹1,000 + scrapping of license 3 months" },
  { offence: "Driving without seatbelt", first: "₹100", repeat: "₹1,000" },
];

const DOCUMENT_OFFENCES = [
  { offence: "Driving without a valid license", first: "₹500", repeat: "₹5,000" },
  { offence: "Underage driver", first: "₹25,000 or imprisonment for 3 years", repeat: "—" },
  { offence: "Driving without vehicle registration", first: "₹2,000 – ₹5,000", repeat: "₹5,000 – ₹10,000 or 1-year imprisonment" },
  { offence: "Driving without PUCC", first: "₹10,000 and upto 6 months imprisonment", repeat: "—" },
  { offence: "Driving an uninsured vehicle", first: "₹200 – ₹400", repeat: "₹2,000 – ₹4,000" },
  { offence: "Driving without a valid permit", first: "₹10,000", repeat: "—" },
  { offence: "Driving without a seatbelt", first: "₹100", repeat: "₹1,000" },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#1a202c",
              marginBottom: 20,
            }}
          >
            Top traffic offences & penalties in India
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "#718096",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            Staying informed about the latest traffic violations in India is highly crucial.
          </p>
        </div>

        {/* Driving Offences Table */}
        <div style={{ marginBottom: 48 }}>
          <h3
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#1a202c",
              marginBottom: 24,
            }}
          >
            Driving offences
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <thead>
                <tr style={{ background: "#f7fafc" }}>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1a202c",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    Offence
                  </th>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1a202c",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    First Offence
                  </th>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1a202c",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    Repeat Offence
                  </th>
                </tr>
              </thead>
              <tbody>
                {DRIVING_OFFENCES.map((item, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "16px", fontSize: 14, color: "#1a202c" }}>
                      {item.offence}
                    </td>
                    <td style={{ padding: "16px", fontSize: 14, color: "#718096" }}>
                      {item.first}
                    </td>
                    <td style={{ padding: "16px", fontSize: 14, color: "#718096" }}>
                      {item.repeat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Invalid Documents Offences Table */}
        <div style={{ marginBottom: 48 }}>
          <h3
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#1a202c",
              marginBottom: 24,
            }}
          >
            Invalid Documents offences
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <thead>
                <tr style={{ background: "#f7fafc" }}>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1a202c",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    Offence
                  </th>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1a202c",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    First Offence
                  </th>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1a202c",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    Repeat Offence
                  </th>
                </tr>
              </thead>
              <tbody>
                {DOCUMENT_OFFENCES.map((item, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "16px", fontSize: 14, color: "#1a202c" }}>
                      {item.offence}
                    </td>
                    <td style={{ padding: "16px", fontSize: 14, color: "#718096" }}>
                      {item.first}
                    </td>
                    <td style={{ padding: "16px", fontSize: 14, color: "#718096" }}>
                      {item.repeat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <div
          style={{
            padding: 24,
            background: "#fffbeb",
            border: "1px solid #fbbf24",
            borderRadius: 12,
            marginBottom: 24,
          }}
        >
          <p style={{ fontSize: 14, color: "#92400e", lineHeight: 1.7 }}>
            <strong>Note:</strong> *Penalties might vary depending on the location (city/state) and amendments in the MVA.
          </p>
        </div>

        {/* Bottom Text */}
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "#4a5568",
            textAlign: "center",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          E-Challan was incorporated to simplify the complete traffic management system and make the entire process transparent and convenient for individuals and concerned authorities as well. The easiest way to evade the possibility of getting penalised is by complying with the traffic laws and regulations.
        </p>
      </div>
    </section>
  );
}