export const dashboardQ8 = {
  title: "Quinoa Real Bolivia",
  subtitle: "Geographical Indication vs commodity",
  question: "Why does GI Quinoa resist while commodity crashes?",
  
  kpis: [
    { v: "$1.80", l: "Commodity", d: "Peak", up: true, c: "var(--cyan)" },
    { v: "$0.88", l: "Commodity", d: "Low (-51%)", up: false, c: "var(--red)" },
    { v: "$5.50", l: "GI certified", d: "Peak", up: true, c: "var(--green)" },
    { v: "$4.98", l: "GI certified", d: "Low (-9%)", up: false, c: "var(--orange)" }
  ],

  sparkChart: {
    title: "Quinoa: commodity vs Geographical Indication",
    description: "GI resists volatility (5.7x stable premium)",
    values: [1.80, 1.65, 1.42, 1.28, 1.12, 0.98, 0.88, 0.95, 1.05, 1.15, 1.25, 1.35],
    color: "#00d4ff"
  },

  options: [
    {
      title: "Option 1: Pure Commodity",
      destination: "Global spot market",
      price: "$0.88-1.80/kg",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: ["-51% volatility", "Chinese competition", "2-3% margins"],
      recommended: false
    },
    {
      title: "Option 2: Organic Certificate",
      destination: "EU, USA premium",
      price: "$2.50-3.20/kg",
      color: "#f5c400",
      border: "#f5c400",
      highlights: ["2x commodity", "Stable contracts", "8% margin"],
      recommended: false
    },
    {
      title: "Option 3: GI Quinoa Bolivia",
      destination: "Protected origin",
      price: "$4.98-5.50/kg",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: ["5.7x premium", "-9% fall (vs -51%)", "RECOMMENDED"],
      recommended: true
    }
  ],

  narrative: `
    <h4>The correct answer explained</h4>
    <p><strong style="color: #06ffa5;">GI (Geographical Indication) Quinoa Bolivia is the correct answer - supply restricted by geography = permanent price.</strong></p>
    <p><strong>Why GI resists volatility when commodity crashes:</strong></p>
    <ul>
      <li><strong>Commodity Quinoa:</strong> Produced in Bolivia, Peru, India, China → infinite global supply → when demand drops, price collapses 51%</li>
      <li><strong>GI Quinoa Real:</strong> ONLY produced in Yungas Bolivia (>3,500 masl). Geography NOT replicable in China, India. Supply RESTRICTED → demand > supply → price resists (-9% vs -51%)</li>
    </ul>
    <p><u>Data 2025-2026:</u> Commodity: $1.80 → $0.88 (<strong style="color: #ff3d71;">-51% in 12 months</strong>). GI Bolivia: $5.50 → $4.98 (<strong style="color: #06ffa5;">-9% in 12 months, 5.7x premium maintained</strong>). Conclusion: <strong style="color: #06ffa5;">GI = artificial barrier against commoditization. Semi-legal monopoly.</strong></p>
  `,

  recommendation: `
    <strong>🎯 GI Roadmap: $45-75k investment, infinite ROI (20+ years of premium)</strong><br><br>
    <strong>Step 1 (Months 0-3 - Organization):</strong> Cooperative of 50+ Yungas Bolivia producers. Gather: certificates, chemical analysis, land mapping, 5-year history. Documentation = proof that "Quinoa Real" is ONLY from this region. Cost: $5-10k.<br><br>
    <strong>Step 2 (Months 3-6 - National validation):</strong> SENAC Bolivia (official body) certifies "Quinoa Real de Yungas". Field inspections, sampling, analysis. Cost: $10-15k. Result: Bolivia Official Recognition.<br><br>
    <strong>Step 3 (Months 6-12 - EU PDO registration):</strong> Protected Designation of Origin (PDO) in Europe. Guarantee: ONLY Yungas Bolivia can be called "Quinoa Real". Permanent +300% price premium. Cost: $30-50k (EU bureaucracy).<br><br>
    <strong>Step 4 (Perpetual ROI):</strong> 50 producers × 2 MT/year × $4/kg premium (vs commodity) = $400,000/year collective additional margin. Total GI investment: $45-75k. Payback: 3-6 months. Then: $400k/year pure margin for 20+ years (GI never expires).
  `,

  source: "FAOSTAT, ITC Trade Map, GI Registry Bolivia"
};