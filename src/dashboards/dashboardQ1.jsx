export const dashboardQ1 = {
  title: "Fine-Aroma Cacao Ecuador",
  subtitle: "Extreme volatility in commodity prices",
  question: "How to protect against cacao volatility?",
  
  kpis: [
    { v: "$10,710", l: "Peak", d: "Jan 2025", up: true, c: "var(--cyan)" },
    { v: "$3,241", l: "Minimum", d: "Mar 2026", up: false, c: "var(--red)" },
    { v: "-69.7%", l: "Decline", d: "16 months", up: false, c: "var(--red)" },
    { v: "$3,392", l: "Current", d: "Apr 2026", up: false, c: "var(--orange)" }
  ],

  sparkChart: {
    title: "Historical cacao prices 2025-2026",
    description: "69.7% collapse in 16 months - worst commodity of the period",
    values: [10710.35, 9792.66, 8079.56, 8132.22, 9000.79, 8401.95, 7371.89, 7604.12, 7006.53, 5953.57, 5590.71, 5814.86, 5018.13, 3587.19, 3241.49, 3392.14],
    color: "#ff3d71"
  },

  options: [
    {
      title: "Option 1: Pure Commodity",
      destination: "Destination: China/USA",
      price: "$3,500/MT",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: [
        "Extreme volatility",
        "Margins 2-3%",
        "Result: Ruin without hedging"
      ],
      recommended: false
    },
    {
      title: "Option 2: Premium Certificate",
      destination: "Destination: Germany/Belgium",
      price: "$8,500-12,000/MT",
      color: "#f5c400",
      border: "#f5c400",
      highlights: [
        "3-4x higher price",
        "Stable contracts",
        "UTZ/Rainforest Certification"
      ],
      recommended: false
    },
    {
      title: "Option 3: GI (Maximum Protection)",
      destination: "Destination: Global premium market",
      price: "$12,000-15,000/MT",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: [
        "Margins 12-15%",
        "Volatility resistance",
        "RECOMMENDED"
      ],
      recommended: true
    }
  ],

  narrative: `
    <h4>The correct answer explained</h4>
    <p><strong style="color: #06ffa5;">GI (Geographical Indication) is the correct option.</strong> Here's why:</p>
    <p><strong>Cacao crisis 2025-2026:</strong> Ecuador produces 30% of the world's fine cacao, but faced the worst price crisis of the decade:</p>
    <ul>
      <li><strong>January 2025:</strong> $10,710/MT (historic peak)</li>
      <li><strong>March 2026:</strong> $3,241/MT (<strong style="color: #ff3d71;">-69.7% in 16 months</strong>)</li>
      <li><strong>Cause:</strong> Global overproduction + financial speculation + weak EU demand</li>
    </ul>
    <p><u>Result for commodity producers:</u> <strong style="color: #ff3d71;">Total ruin without forward contracts.</strong> Margins of 2-3% evaporate. GI solves this because <strong style="color: #06ffa5;">it restricts supply to specific origin (non-replicable)</strong> → permanent premium price.</p>
  `,

  recommendation: `
    <strong>🎯 GI Roadmap: 3 steps in 12 months</strong><br><br>
    <strong>Step 1 (0-3 months):</strong> UTZ or Rainforest Alliance certification ($2,000-3,000). Guarantees access to premium EU buyers. Negotiate 12-month forward contracts with Germany/Belgium = $8,500-10,000/MT guaranteed (vs $3,500 commodity).<br><br>
    <strong>Step 2 (3-9 months):</strong> Protected Designation of Origin (GI) registration for "Fine Aroma Cacao Ecuador". Coordination with official body + EU validation. Total cost $15,000-25,000 shared among cooperative.<br><br>
    <strong>Step 3 (9-12 months):</strong> Launch "Ecuador Cacao GI" brand in global premium market (Germany, Switzerland, USA). Guaranteed price $12,000-15,000/MT + 3-5 year contracts = volatility elimination.<br><br>
    <strong>Explosive ROI:</strong> Commodity $3,500/MT = 2% margin. GI $12,000/MT = 15% margin. Per hectare: $700/year → $3,600/year. GI investment payback: 4-6 months.
  `,

  source: "IMF PCOCO, FRED PCOCOUSDM, World Bank Commodity Database"
};