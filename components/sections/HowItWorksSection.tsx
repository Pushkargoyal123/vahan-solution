const STEPS = [
  {
    number: "1",
    title: "Enter Details",
    description: "Enter your vehicle number to begin. No mobile number or registration required.",
    image: "https://vahan-solutions-frontend.vercel.app/assets/Vahan_how_1-BI8dM4ku.webp",
  },
  {
    number: "2",
    title: "View Your Challans",
    description: "See all pending and paid challans instantly. Select which ones you want to resolve.",
    image: "https://vahan-solutions-frontend.vercel.app/assets/Vahan_how_2-DMimZTqB.webp",
  },
  {
    number: "3",
    title: "Resolve Challans Easily",
    description: "Resolve and pay your challans easily online — no court visits, no hassle.",
    image: "https://vahan-solutions-frontend.vercel.app/assets/Vahan_how_3-BRrRHbxR.webp",
  },
];

export default function HowItWorksSection() {
  return (
    <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#ff6b35",
              marginBottom: 12,
            }}
          >
            How Vahan Solutions Works
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#1a202c",
            }}
          >
            Simple 3-Step Process
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {STEPS.map((step, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                gap: 48,
                alignItems: "center",
              }}
            >
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: "#ff6b35",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 32,
                    fontWeight: 900,
                    color: "#ffffff",
                    marginBottom: 20,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#1a202c",
                    marginBottom: 16,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "#718096",
                  }}
                >
                  {step.description}
                </p>
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
