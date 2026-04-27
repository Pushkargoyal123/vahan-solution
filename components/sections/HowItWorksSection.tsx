const STEPS = [
  {
    number: "1",
    title: "Enter Details",
    description:
      "Enter your vehicle number to begin. No mobile number or registration required.",
    image: "https://vahan-solutions-frontend.vercel.app/assets/Vahan_how_1-BI8dM4ku.webp",
  },
  {
    number: "2",
    title: "View Your Challans",
    description:
      "See all pending and paid challans instantly. Select which ones you want to resolve.",
    image: "https://vahan-solutions-frontend.vercel.app/assets/Vahan_how_2-DMimZTqB.webp",
  },
  {
    number: "3",
    title: "Resolve Challans Easily",
    description:
      "Resolve and pay your challans easily online — no court visits, no hassle.",
    image: "https://vahan-solutions-frontend.vercel.app/assets/Vahan_how_3-BRrRHbxR.webp",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="vs-container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="vs-label">Simple 3-Step Process</span>
          <h2 className="vs-h2">How Vahan Solutions Works</h2>
          <div className="accent-line" style={{ margin: "14px auto 0" }} />
        </div>

        <div className="hiw-3col">
          {STEPS.map((step, i) => (
            <div key={i} className="hiw-step-card">
              <div className="hiw-img-wrap">
                <img src={step.image} alt={step.title} />
                <div className="hiw-step-badge">{step.number}</div>
              </div>
              <div className="hiw-step-content">
                <h3 className="vs-h3" style={{ marginBottom: 10 }}>{step.title}</h3>
                <p className="vs-body" style={{ fontSize: 14 }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
