export const dashboardQ5 = {
  title: "Red Sea Logistics Crisis",
  subtitle: "Impact by product shelf life",
  question: "Who suffers more: 7 days or 20+ days shelf life?",
  
  kpis: [
    { v: "$4.40/kg", l: "Air Oct", d: "2025", up: false, c: "var(--cyan)" },
    { v: "$7.20/kg", l: "Air Jan", d: "2026 (+64%)", up: false, c: "var(--red)" },
    { v: "40-60%", l: "Bankruptcy", d: "Flower Producers", up: false, c: "var(--red)" },
    { v: "0%", l: "Impact", d: "Cacao/Coffee", up: true, c: "var(--green)" }
  ],

  sparkChart: {
    title: "Air freight cost Red Sea crisis Oct 2025 - Jan 2026",
    description: "Transport crisis: air freight +64%, maritime rerouted",
    values: [4.40, 4.85, 5.30, 5.75, 6.20, 6.65, 7.10, 7.20, 6.90, 6.50, 6.10, 5.70],
    color: "#ff3d71"
  },

  options: [
    {
      title: "Option 1: Flowers (7 days)",
      destination: "Shelf life: 7 days max",
      price: "40% production ruined",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: ["Forced air freight", "Air = 40% of cost", "40-60% producers bankrupt"],
      recommended: false
    },
    {
      title: "Option 2: Bananas (20 days)",
      destination: "Shelf life: 20 days",
      price: "Maritime still viable",
      color: "#f5c400",
      border: "#f5c400",
      highlights: ["Maritime rerouted + delay", "10-15% acceptable loss", "Moderate impact"],
      recommended: false
    },
    {
      title: "Option 3: Cacao/Coffee (180+ days)",
      destination: "Shelf life: 180+ days",
      price: "ZERO impact",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: ["Maritime standard", "Delay irrelevant", "RECOMMENDED"],
      recommended: true
    }
  ],

  narrative: `
    <h4>The correct answer explained</h4>
    <p><strong style="color: #06ffa5;">Cacao/Coffee (180+ days) suffer zero impact - this is the correct answer.</strong></p>
    <p><strong>Red Sea crisis October 2025 - January 2026:</strong> Houthis blocked Suez. 3 routing options:</p>
    <ul>
      <li><strong>Suez route (BLOCKED):</strong> 2 weeks normal (no longer available)</li>
      <li><strong>Cape of Good Hope:</strong> 6-7 weeks = +40% cost (viable for long shelf life)</li>
      <li><strong>Urgent air freight:</strong> 48h delivery = +64% cost (unsustainable for most)</li>
    </ul>
    <p><u>Impact by shelf life:</u></p>
    <ul>
      <li><strong style="color: #ff3d71;">Flowers (7 days):</strong> FORCED air freight (+64% cost on 15-20% margin = -40-60% total margin). 40-60% producers bankrupt in 3 months.</li>
      <li><strong style="color: #f5c400;">Bananas (20 days):</strong> Maritime + acceptable delay (don't rot). -5-10% impact tolerable.</li>
      <li><strong style="color: #06ffa5;">Cacao/Coffee (180+ days):</strong> Waiting 6 weeks = irrelevant. Zero impact on prices.</li>
    </ul>
  `,

  recommendation: `
    <strong>🎯 Survival strategy: Diversification by shelf life</strong><br><br>
    <strong>Line 1 (For FLOWER producers in crisis mode):</strong> Negotiate contracts with air freight included = buyer absorbs extra cost. Vertical integration: build local cooler + optimized packaging (-10% volume, +15% value). Find closer EU buyer (Netherlands vs Italy) = saves 2-3 transport days.<br><br>
    <strong>Line 2 (For BANANA producers):</strong> Forward contracts with fixed maritime rates + air freight contingency. Guaranteed price allows absorbing +$1.50/MT extra cost if air needed.<br><br>
    <strong>Line 3 (For CACAO/COFFEE producers - ideal):</strong> Hedging strategy: Buy land to grow flowers + cacao simultaneously. Natural diversification = if logistics crisis (like Red Sea), flowers go air, cacao goes maritime. Balanced portfolio by shelf life = resilience to any shock.<br><br>
    <strong>Line 4 (Key lesson):</strong> <strong style="color: #06ffa5;">Monoculture + short shelf life = maximum risk.</strong> Diversified portfolio by product duration = guaranteed survival even in 6+ month logistics crises.
  `,

  source: "IATA Freight, Freightos Air Cargo Index, Maersk Shipping"
};