export const dashboardQ7 = {
  title: "Cacao → Chocolate Value Chain",
  subtitle: "Value capture in supply chain",
  question: "Why does cacao fall 69% but chocolate retail only 5%?",
  
  kpis: [
    { v: "-69%", l: "Cacao decline", d: "Jan 2025 - Mar 2026", up: false, c: "var(--red)" },
    { v: "-5%", l: "Chocolate retail", d: "Same period", up: false, c: "var(--orange)" },
    { v: "22%", l: "Retail margin", d: "$10 bar", up: true, c: "var(--cyan)" },
    { v: "5%", l: "Producer margin", d: "Commodity (current)", up: false, c: "var(--red)" }
  ],

  sparkChart: {
    title: "Cacao price (commodity) vs chocolate retail",
    description: "Retailer captures benefits of commodity decline",
    values: [100, 91, 75, 76, 84, 78, 69, 71, 65, 56, 52, 54, 47, 34, 30, 32],
    color: "#7c4dff"
  },

  options: [
    {
      title: "Option 1: Pure Commodity",
      destination: "Sale as raw material",
      price: "$0.50 of $10 bar",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: ["5% of final value", "Credit to retailer", "Proportional decline"],
      recommended: false
    },
    {
      title: "Option 2: Fermented/Processed",
      destination: "Intermediate product",
      price: "$1.50-2.00 of bar",
      color: "#f5c400",
      border: "#f5c400",
      highlights: ["15% of value", "8-12% margin", "Better position"],
      recommended: false
    },
    {
      title: "Option 3: Ecuadorian Chocolate Brand",
      destination: "Own brand",
      price: "$3.00-3.50 of bar",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: ["30-35% value", "15%+ margin", "RECOMMENDED"],
      recommended: true
    }
  ],

  narrative: `
    <h4>The correct answer explained</h4>
    <p><strong style="color: #06ffa5;">Vertical integration (Ecuador chocolate brand) is the only way to capture value - correct answer.</strong></p>
    <p><strong>The "magic disappearance of crisis" - only for retailers:</strong></p>
    <p>$10 chocolate bar (Germany 2026) breaks down:</p>
    <ul>
      <li><strong>Cacao producer (commodity):</strong> 5% = $0.50 ← <strong style="color: #ff3d71;">THIS FELL 69% ($0.50→$0.15)</strong></li>
      <li><strong>Processor/Manufacturer:</strong> 18% = $1.80</li>
      <li><strong>Logistics/Distribution:</strong> 10% = $1.00</li>
      <li><strong>Retailer (margin):</strong> 22% = $2.20 ← <strong style="color: #06ffa5;">THIS GREW (captured difference)</strong></li>
      <li><strong>Other (taxes):</strong> 45% = $4.50</li>
    </ul>
    <p><u>What happened:</u> Cacao commodity: $10,710 → $3,241 (-69%). Chocolate retail: $10.00 → $9.50 (-5%). Difference of $0.35/bar × volume = retailer pockets millions. <strong style="color: #06ffa5;">Producer loses, retailer wins.</strong></p>
  `,

  recommendation: `
    <strong>🎯 Vertical integration: 3 years to control 35% of value</strong><br><br>
    <strong>Line 1 (Year 1 - Local fermented processing):</strong> Build small fermentation plant in Ecuador (cost $50k). Sell fermented cacao (not pure commodity) to EU chocolatiers. Capture: 15% of $10 bar value = 8-10% margin (vs 5% commodity).<br><br>
    <strong>Line 2 (Year 2 - Basic chocolate making):</strong> Chocolate processing machine (cost $80k). Make simple chocolate bar "Ecuador". Sell to EU distributors. Capture: 25% of value = 12-15% margin.<br><br>
    <strong>Line 3 (Year 3 - Own premium brand):</strong> "Ecuador Premium Chocolate" with premium design + direct EU+USA distribution. Control 30-35% of value = 15-22% margin.<br><br>
    <strong>Line 4 (ROI numbers):</strong> 1 hectare cacao commodity = $2,000/year margin. With vertical integration year 3 = $10,000-12,000/year margin. Multiplier: 5-6x return. Total 3-year investment: $130k. Payback: 18 months. Then: $10k/year pure margin perpetual.
  `,

  source: "WTO Trade Statistics, ITC Trade Map, Chocolate Industry Report"
};