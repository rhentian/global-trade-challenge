export const dashboardQ2 = {
  title: "Bananas Ecuador",
  subtitle: "Competition by volume vs margin",
  question: "Can Ecuadorian bananas compete without volume?",
  
  kpis: [
    { v: "$1,456", l: "Peak", d: "Oct 2025", up: true, c: "var(--cyan)" },
    { v: "$1,157", l: "Minimum", d: "Dec 2025", up: false, c: "var(--red)" },
    { v: "-20.5%", l: "Decline", d: "2 months", up: false, c: "var(--orange)" },
    { v: "$1,215", l: "Current", d: "Feb 2026", up: false, c: "var(--orange)" }
  ],

  sparkChart: {
    title: "Banana prices Ecuador 2025-2026",
    description: "20.5% decline during low-demand period",
    values: [1456, 1398, 1312, 1287, 1245, 1198, 1157, 1172, 1189, 1203, 1215],
    color: "#00d4ff"
  },

  options: [
    {
      title: "Option 1: Pure Commodity",
      destination: "Destination: USA, China",
      price: "$0.95-1.20/lb",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: [
        "Market saturation",
        "Margins 5-8%",
        "Competition by volume"
      ],
      recommended: false
    },
    {
      title: "Option 2: Organic Certificate",
      destination: "Destination: EU, Japan",
      price: "$1.50-2.10/lb",
      color: "#f5c400",
      border: "#f5c400",
      highlights: [
        "Premium +50-70%",
        "Traceability premium",
        "Specialized market"
      ],
      recommended: false
    },
    {
      title: "Option 3: GI 'Banana de Manabí'",
      destination: "Destination: Global premium",
      price: "$2.20-2.80/lb",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: [
        "Margin +120%",
        "Protected origin",
        "RECOMMENDED"
      ],
      recommended: true
    }
  ],

  narrative: `
    <h4>The correct answer explained</h4>
    <p><strong style="color: #06ffa5;">GI "Banana de Manabí" is the correct answer - don't compete by volume.</strong></p>
    <p><strong>The volume problem:</strong> Ecuador produces 30% of world bananas, but this is a WEAKNESS, not a strength:</p>
    <ul>
      <li><strong>Global volume ↑ = Prices ↓:</strong> Chinese/Peruvian competition grows 15% annually</li>
      <li><strong>Current commodity margin:</strong> 5-8% (unsustainable for small/medium producers)</li>
      <li><strong>Trap: Winning by volume is impossible.</strong> China always produces cheaper.</li>
    </ul>
    <p><u>Solution:</u> <strong style="color: #06ffa5;">Differentiation by origin.</strong> GI "Banana de Manabí" restricts supply to specific region, generates <strong>+120% margin vs commodity</strong> (5-8% → 18-22%).</p>
  `,

  recommendation: `
    <strong>🎯 Strategy: GI Banana de Manabí in 12 months</strong><br><br>
    <strong>Step 1 (0-3 months):</strong> Organic + Fair Trade certification ($4,000-5,000 total). Immediate access to EU premium market = $1.80/lb (vs $1.20 commodity). Contracts with Germany/Netherlands distributors = price stability.<br><br>
    <strong>Step 2 (3-6 months):</strong> Register GI "Banana de Manabí" with SENAC Ecuador. Document origin + unique region characteristics (volcanic soil, climate). Cost: $8,000-12,000 shared among cooperative (50+ producers).<br><br>
    <strong>Step 3 (6-12 months):</strong> Launch "Manabí Banana" brand in premium markets: Germany, Switzerland, Japan, USA. Target price $2.50/lb (vs $1.20 commodity = +108% premium).<br><br>
    <strong>Step 4 (Financial ROI):</strong> 1 hectare bananas = 35 MT/year. Commodity: 35MT × $0.95/lb = $18,375/year. GI Manabí: 35MT × $2.50/lb = $48,625/year. Difference: $30,250/year additional margin. GI investment payback: 2-3 months.
  `,

  source: "FRED PBANSOPUSDM, ITC Trade Map, Ecuapass"
};