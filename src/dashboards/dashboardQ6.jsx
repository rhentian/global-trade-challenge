export const dashboardQ6 = {
  title: "Lithium Chile",
  subtitle: "Extreme volatility in energy commodities",
  question: "How to manage extreme volatility in energy commodities?",
  
  kpis: [
    { v: "$14,200/MT", l: "Jan 2025", d: "Price", up: true, c: "var(--cyan)" },
    { v: "$8,500/MT", l: "Jan 2026", d: "-40% crash", up: false, c: "var(--red)" },
    { v: "$26,278/MT", l: "Feb 2026", d: "+209% spike", up: true, c: "var(--cyan)" },
    { v: "208%", l: "Range", d: "12 months", up: false, c: "var(--red)" }
  ],

  sparkChart: {
    title: "Lithium prices: -40% crash → +209% spike",
    description: "Extreme volatility: producers without hedging go bankrupt",
    values: [14200, 13800, 12900, 11500, 10200, 9100, 8500, 9200, 11000, 15500, 20000, 26278],
    color: "#00e676"
  },

  options: [
    {
      title: "Option 1: Without Hedging",
      destination: "Spot market exposure",
      price: "Total volatility",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: ["208% price range", "Mid-size producers: bankruptcy", "Result: insolvency"],
      recommended: false
    },
    {
      title: "Option 2: Partial Hedging",
      destination: "40% forward contracts",
      price: "Residual risk",
      color: "#f5c400",
      border: "#f5c400",
      highlights: ["40% production locked", "Survives crisis", "Narrow margin"],
      recommended: false
    },
    {
      title: "Option 3: Full Hedging",
      destination: "60-80% forward contracts",
      price: "Minimum price guaranteed",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: ["60-80% secured", "Survives crises", "RECOMMENDED"],
      recommended: true
    }
  ],

  narrative: `
    <h4>The correct answer explained</h4>
    <p><strong style="color: #06ffa5;">60-80% hedging with forward contracts is the only solution - without it, insolvency.</strong></p>
    <p><strong>Real case: Lithium 2025-2026, the most extreme volatility in the market:</strong></p>
    <ul>
      <li><strong>January 2025:</strong> $14,200/MT (expected peak)</li>
      <li><strong>January 2026:</strong> $8,500/MT (<strong style="color: #ff3d71;">-40% crash</strong> due to weak EV demand + China overproduction)</li>
      <li><strong>February 2026:</strong> $26,278/MT (<strong style="color: #06ffa5;">+209% spike</strong> from supply shortage reports)</li>
      <li><strong>Annual range:</strong> <strong style="color: #ff3d71;">208% volatility = unmanageable without hedging</strong></li>
    </ul>
    <p><u>Historical cases:</u> SQM (Chile) hedged 70% → survived + 15% margin. Mid-size producers without hedging → bankruptcy in 2026. Conclusion: <strong style="color: #06ffa5;">Hedging is not optional, it's survival.</strong></p>
  `,

  recommendation: `
    <strong>🎯 60-80% hedging with 12-24 month forward contracts: Guaranteed survival</strong><br><br>
    <strong>Line 1 (Minimum investment cost):</strong> Hedging costs only 2-3% of spot price = minimal investment vs risk. Example: 10,000 MT/year producer × 2% cost = $224,000 invested (insurance cost). In return: income guarantee against 200%+ volatility.<br><br>
    <strong>Line 2 (Real numbers - crash scenario):</strong> Without hedging at $8.5k: Revenue = 10,000 MT × $8.5k = $85M. With 70% hedging: (7,000 MT @ $14k fixed) + (3,000 MT @ spot $8.5k) = Revenue = $124.5M. Difference: $39.5M saved = hedging cost ($224k) is trivial insurance premium.<br><br>
    <strong>Line 3 (Implementation):</strong> 12-24 month forward contracts with specialized traders or futures exchange. Structure: 60% year 1, 70% year 2, 80% year 3. Guarantees 15% margin even in 200%+ volatility.<br><br>
    <strong>Line 4 (Key lesson):</strong> <strong style="color: #06ffa5;">Lithium without hedging = Russian roulette.</strong> SQM hedged 70% → successful multinational. Mid-size unhedged → bankruptcy in 12 months. ROI hedging: infinite (survival = everything).
  `,

  source: "Bloomberg Lithium, Benchmark Mineral Intelligence"
};