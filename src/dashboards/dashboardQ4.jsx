export const dashboardQ4 = {
  title: "Specialty Coffee Colombia",
  subtitle: "Choosing the right buyer in volatile market",
  question: "How to choose the right buyer in a volatile market?",
  
  kpis: [
    { v: "$4.10/lb", l: "Peak", d: "Nov 2025", up: true, c: "var(--cyan)" },
    { v: "$3.21/lb", l: "Minimum", d: "Feb 2026", up: false, c: "var(--red)" },
    { v: "-21.7%", l: "Decline", d: "3 months", up: false, c: "var(--orange)" },
    { v: "$6.00-8.00/lb", l: "Direct Trade", d: "Premium", up: true, c: "var(--cyan)" }
  ],

  sparkChart: {
    title: "Specialty Arabica prices vs commodity",
    description: "Commodity volatile ($4.10→$3.21), specialty stable ($4.50-5.50)",
    values: [4.10, 3.98, 3.85, 3.72, 3.58, 3.46, 3.35, 3.43, 3.52, 3.61, 3.70, 3.80],
    color: "#f5c400"
  },

  options: [
    {
      title: "Option 1: Commodity",
      destination: "Destination: USA generic",
      price: "$3.21/lb (volatile)",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: [
        "Extreme volatility",
        "No long-term contract",
        "Minimum margin"
      ],
      recommended: false
    },
    {
      title: "Option 2: Specialty EU",
      destination: "Destination: Germany, Italy",
      price: "$4.50-5.50/lb (stable)",
      color: "#f5c400",
      border: "#f5c400",
      highlights: [
        "12-24 month contracts",
        "Premium traceability",
        "+25% margin"
      ],
      recommended: false
    },
    {
      title: "Option 3: Direct Trade",
      destination: "Destination: Premium roasters",
      price: "$6.00-8.00/lb (maximum)",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: [
        "Direct buyer relationship",
        "Multi-year contracts",
        "RECOMMENDED"
      ],
      recommended: true
    }
  ],

  narrative: `
    <h4>The correct answer explained</h4>
    <p><strong style="color: #06ffa5;">Direct Trade is the correct option.</strong> Here's why:</p>
    <p><strong>Same coffee, 3 buyers, 3 radically different prices:</strong></p>
    <ul>
      <li><strong>Commodity (NYC Futures):</strong> $3.21/lb (volatile, no contract, fell 21.7% in 3 months)</li>
      <li><strong>Specialty EU (SCA 80+):</strong> $4.50-5.50/lb (stable thanks to 12-24 month contracts, down only 5%)</li>
      <li><strong>Direct Trade (Premium roaster):</strong> $6.00-8.00/lb (direct relationship, multi-year contracts, volatility resistance)</li>
    </ul>
    <p><u>Key:</u> <strong style="color: #06ffa5;">Choosing the right buyer reduces volatility 75%.</strong> It's not spot price that matters, but contract stability and long-term buyer-seller relationship.</p>
  `,

  recommendation: `
    <strong>📊 Roadmap: Commodity → Specialty → Direct Trade (12 months)</strong><br><br>
    <strong>Step 1 - Immediate (0-3 months):</strong> SCA (Specialty Coffee Association) certification, cost $500. Guarantees 80+ score = access to premium buyers. 12-month forward contract with German/Italian importer = $4.50/lb guaranteed.<br><br>
    <strong>Step 2 - Short term (3-6 months):</strong> Direct visit to premium EU roasters (Germany, Switzerland, Italy). Negotiate Direct Trade = buyer-producer relationship without intermediaries = $6.00-8.00/lb + 3-5 year contract.<br><br>
    <strong>Step 3 - Financial results:</strong> Commodity $3.21 → Specialty $4.50 = +40% premium. Specialty $4.50 → Direct Trade $7.00 = +56% additional. Total: +120% vs commodity = margin 5-8% → 18-25%.<br><br>
    <strong>Step 4 - Timeline ROI:</strong> Switch to Direct Trade in month 6 = $4,500/year additional margin per hectare. Switching cost = $2,000. Payback = 5.3 months. Then: $4,500/year perpetual.
  `,

  source: "FRED PCOFFOTMUSDM, SCA Grading, Direct Trade Certified"
};