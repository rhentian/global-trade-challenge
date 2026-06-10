export const dashboardQ3 = {
  title: "Cut Flowers Kenya",
  subtitle: "AI/IoT vs post-harvest losses",
  question: "How do AI prediction + IoT reduce post-harvest losses?",
  
  kpis: [
    { v: "$29.80", l: "Peak", d: "Dec (Xmas)", up: true, c: "var(--cyan)" },
    { v: "$13.80", l: "Minimum", d: "Jun", up: false, c: "var(--red)" },
    { v: "-53.7%", l: "Volatility", d: "Seasonal", up: false, c: "var(--orange)" },
    { v: "40%", l: "Loss", d: "Without AI", up: false, c: "var(--red)" }
  ],

  sparkChart: {
    title: "Kenya rose prices and loss rate",
    description: "Extreme seasonality + 40% post-harvest losses without AI",
    values: [29.80, 27.45, 22.10, 18.90, 15.60, 13.80, 14.20, 16.50, 19.30, 23.40, 26.10, 28.90],
    color: "#7c4dff"
  },

  options: [
    {
      title: "Option 1: Without AI/IoT",
      destination: "Method: Manual + experience",
      price: "40% post-harvest loss",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: ["Manual monitoring", "40% flowers discarded", "Negative margins"],
      recommended: false
    },
    {
      title: "Option 2: Basic IoT",
      destination: "Temperature + humidity",
      price: "22% loss, $35k investment",
      color: "#f5c400",
      border: "#f5c400",
      highlights: ["Temp/humidity sensors", "45% reduction", "ROI 2.5 years"],
      recommended: false
    },
    {
      title: "Option 3: AI+IoT Stack",
      destination: "Prediction, optimization",
      price: "6% loss, $60k investment",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: ["AI demand prediction", "85% loss reduction", "ROI 180-220% in 18m"],
      recommended: true
    }
  ],

  narrative: `
    <h4>The correct answer explained</h4>
    <p><strong style="color: #06ffa5;">AI+IoT Stack is the only viable solution.</strong></p>
    <p><strong>Fresh flower crisis:</strong> Roses have <strong>7-day maximum shelf life</strong> (Day 0: Kenya harvest → Day 1-2: Air Kenya-EU → Day 3-5: Store distribution → Day 6-7: Consumer before withering).</p>
    <ul>
      <li><strong>Without temperature/humidity control:</strong> 40% of flowers die between harvest and store = $80k/year loss for $200k producer</li>
      <li><strong>Critical problem:</strong> No "second chance". Wilted flowers = total waste.</li>
      <li><strong>AI solves:</strong> Predicts exact demand 7 days ahead → Harvest only what sells → Losses drop to 6%</li>
    </ul>
    <p><u>Conclusion:</u> <strong style="color: #06ffa5;">AI+IoT = difference between bankruptcy (40% loss) and 25%+ margin</strong></p>
  `,

  recommendation: `
    <strong>🎯 AI+IoT Stack: $60k investment, 180-220% ROI in 18 months</strong><br><br>
    <strong>Step 1 (0-2 months):</strong> Install IoT sensors in rose fields: temperature, humidity, light, plant stress. Cost: $20,000. Connect to central cloud database. Setup + training: 2-3 weeks.<br><br>
    <strong>Step 2 (2-4 months):</strong> Train AI model with 5-year EU sales history (who buys roses, when, how much). Prediction: exact demand by city/florist/date 7 days ahead. Cost: $25,000 (Groq API + data science).<br><br>
    <strong>Step 3 (4-6 months):</strong> Automate harvest: AI predicts Monday sell 500k roses → Harvest Monday 550k (10% buffer). Result: 85% loss reduction (40% to 6%). System maintenance cost: $5,000/year.<br><br>
    <strong>Step 4 (Financial ROI):</strong> Current loss: 40% × $200k = $80k/year lost. With AI: 6% × $200k = $12k/year. Annual savings: $68k. Payback: $60k ÷ $68k = 10.6 months. Then: $68k/year pure margin for 5+ years.
  `,

  source: "FAOSTAT, Kenya Flower Council, Agritech benchmark"
};