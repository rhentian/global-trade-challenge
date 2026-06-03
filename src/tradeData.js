// TradeIQ PRO — Question Bank with Chart Data
export const QUESTIONS = [
  {
    id: 1,
    flag: '🇪🇨',
    prod: 'FINE-AROMA CACAO · ECUADOR',
    q: "Ecuador produces ~63% of world fine-aroma cacao. Your 200 MT/year could earn 2–3× commodity price — but only in the right market. Where do you go first?",
    opts: [
      { l: 'A', t: '🇪🇺 EU — Germany, Belgium & Switzerland', w: 'Correct. EU specialty markets pay 2–3× commodity for certified fine-aroma. Germany processes ~1M tons of chocolate annually.' },
      { l: 'B', t: '🇺🇸 USA — bulk commodity brokers', w: 'US bulk pricing erases the fine-aroma premium entirely.' },
      { l: 'C', t: '🇨🇳 China — e-commerce platforms', w: "China's specialty chocolate culture is nascent. Not viable as first market." },
      { l: 'D', t: '🇨🇮 Ivory Coast — re-export strategy', w: "Ivory Coast produces 44% of world cocoa — competing on their home turf." }
    ],
    correct: 0,
    chart: {
      kpi1: { v: '$9,001', l: 'Cacao Spot Price', d: 'per MT · IMF May 2025', c: '#c9a84c' },
      kpi2: { v: '3.3×', l: 'EU Premium Multiplier', d: 'vs commodity price', c: '#4caf50' },
      title: 'Cacao Price by Market (USD/MT)',
      bars: [['EU Specialty', 9000, '#c9a84c'], ['Japan', 6200, '#8a7a5a'], ['USA Specialty', 5200, '#6a6040'], ['Commodity', 2800, '#3a3020']],
      max: 9000,
      spark: [5800, 6200, 5500, 7200, 8500, 9001],
      sparktitle: 'Global Cacao Price Trend (USD/MT) 2019–2024',
      sparkc: '#c9a84c',
      groqContext: 'Ecuadorian fine-aroma cacao export strategy. Current spot price $9,001/MT (IMF May 2025). EU specialty buyers pay $6,000-10,000/MT (3.3x premium). Germany processes 1M tons chocolate annually. Compare EU vs USA vs China vs Ivory Coast as export destinations.'
    }
  },
  {
    id: 2,
    flag: '🦐',
    prod: 'WHITE SHRIMP · TARIFF SHOCK',
    q: "A 25% import tariff hits your Ecuadorian shrimp overnight — +$52,500/month in costs. 48 hours to decide. What do you do?",
    opts: [
      { l: 'A', t: 'Absorb it — keep everything unchanged', w: 'Absorbing $52,500/month erodes margin unsustainably within one quarter.' },
      { l: 'B', t: 'Switch 100% to Vietnamese shrimp immediately', w: 'Different feed formulation causes perceptible quality difference. Brand damage risk.' },
      { l: 'C', t: 'Split 60% Vietnam + 40% Ecuador, raise menu 8%', w: 'Correct. Blended cost drops to ~$4.32/kg. 68% of diners accept tariff-related price adjustments.' },
      { l: 'D', t: 'Remove shrimp from menu for 3 months', w: 'Removing 20–30% of menu revenue is worse than absorbing the tariff.' }
    ],
    correct: 2,
    chart: {
      kpi1: { v: '$4.20', l: 'Shrimp Wholesale', d: 'per kg · US market 2025', c: '#c9a84c' },
      kpi2: { v: '$14K', l: 'Net Monthly Cost', d: 'with split strategy vs $52.5K', c: '#4caf50' },
      title: 'Monthly Cost Exposure by Strategy (USD)',
      bars: [['C — Split 60/40', 14000, '#4caf50'], ['B — 100% Vietnam', 18000, '#c9a84c'], ['A — Absorb fully', 52500, '#e53935']],
      max: 52500,
      spark: [3.2, 3.8, 4.5, 3.9, 4.1, 4.2],
      sparktitle: 'US Shrimp Wholesale Price (USD/kg) 2019–2024',
      sparkc: '#c9a84c',
      groqContext: 'Ecuadorian shrimp importer facing 25% US tariff. Current shrimp wholesale $4.20/kg. Full tariff exposure: $52,500/month. Split sourcing (60% Vietnam $3.80/kg + 40% Ecuador $5.25/kg) yields blended cost ~$4.32/kg and net exposure ~$14,000/month. NRA research: 68% of diners accept tariff-related price adjustments.'
    }
  },
  {
    id: 3,
    flag: '🍌',
    prod: 'BANANA EXPORTS · CERT CRISIS',
    q: "Your biggest EU client — 40% of your revenue — cancelled because you lack Rainforest Alliance certification. What's your move?",
    opts: [
      { l: 'A', t: 'Pivot 100% to Middle East immediately', w: 'Price drops from ~$1.40 → $0.80/box permanently. EU market access lost.' },
      { l: 'B', t: 'Start RA certification + bridge to Middle East', w: 'Correct dual-track: Middle East cash flow while certification runs. EU pays 20–40% premium for certified produce.' },
      { l: 'C', t: 'Pivot to domestic banana processing', w: 'Requires $150K–300K+ capital and 18–24 months to positive cash flow. Too slow.' },
      { l: 'D', t: 'Legal action against EU client', w: 'Certification non-compliance is legal grounds for termination. Does not restore revenue.' }
    ],
    correct: 1,
    chart: {
      kpi1: { v: '$1,100', l: 'Banana Spot Price', d: 'per MT · World Bank 2025', c: '#c9a84c' },
      kpi2: { v: '8.4×', l: 'RA Cert. ROI', d: 'over 3 years', c: '#4caf50' },
      title: 'Banana Export Price by Destination (USD/box)',
      bars: [['EU Certified', 1.50, '#4caf50'], ['EU Uncertified', 1.20, '#c9a84c'], ['Middle East', 0.80, '#6a6040'], ['China', 0.78, '#3a3020']],
      max: 1.50,
      spark: [3.2, 3.5, 3.1, 3.7, 3.9, 3.8],
      sparktitle: 'Ecuador Banana Exports (USD B) 2019–2024',
      sparkc: '#c9a84c',
      groqContext: 'Ecuador banana exporter lost 40% of EU revenue due to missing Rainforest Alliance certification. Banana spot price $1,100/MT (World Bank 2025). EU certified price $1.50/box vs Middle East $0.80/box. RA certification costs $30-70K, takes 12-18 months, ROI 8.4x over 3 years. Colombia and Philippines already certified.'
    }
  },
  {
    id: 4,
    flag: '🫐',
    prod: 'BLUEBERRIES · PERU',
    q: "A Peruvian blueberry producer must choose a logistics strategy for peak season (Oct–Jan). Which maximizes net revenue?",
    opts: [
      { l: 'A', t: 'Air freight 100% to US — maximize speed', w: 'Air freight at $2.10/kg erodes 34% of gross revenue at $6.20/kg.' },
      { l: 'B', t: 'Sea freight to EU — higher price, lower freight', w: 'Correct. EU pays $1.60/kg more. Sea freight saves $1.70/kg vs air. Combined: +$3.30/kg advantage.' },
      { l: 'C', t: 'Split US and EU equally by air', w: 'Air freight to two markets doubles complexity with no benefit.' },
      { l: 'D', t: 'Hold inventory — wait for better prices', w: 'Blueberries have a 21–25 day shelf life. Holding leads to spoilage.' }
    ],
    correct: 1,
    chart: {
      kpi1: { v: '~$6.50', l: 'EU Blueberry Price', d: 'per kg · wholesale 2025', c: '#c9a84c' },
      kpi2: { v: '+$3.30', l: 'Net EU Advantage', d: 'vs USA air freight route', c: '#4caf50' },
      title: 'Net Revenue per kg by Route (USD)',
      bars: [['EU Sea Freight', 7.40, '#4caf50'], ['EU Air Freight', 5.70, '#c9a84c'], ['USA Air Freight', 4.10, '#6a6040']],
      max: 7.40,
      spark: [5.2, 5.8, 5.1, 6.0, 6.8, 7.4],
      sparktitle: 'EU Organic Blueberry Price (USD/kg) 2019–2024',
      sparkc: '#c9a84c',
      groqContext: 'Peruvian blueberry exporter choosing logistics strategy for Oct-Jan peak season. EU price ~$6.50/kg vs US $6.20/kg. Air freight to US costs $2.10/kg, sea freight to EU costs $0.40/kg. Net EU sea freight advantage: +$3.30/kg. Product shelf life: 21-25 days refrigerated. EU sea transit: 21 days.'
    }
  },
  {
    id: 5,
    flag: '🌹',
    prod: 'CUT FLOWERS · KENYA',
    q: "Your AI system predicts 34% higher rose demand in Germany next February. How do you respond? (Model accuracy: 87%)",
    opts: [
      { l: 'A', t: 'Wait to confirm before acting', w: 'Pre-booking requires 21-day lead time. Waiting closes the window entirely.' },
      { l: 'B', t: 'Pre-book freight capacity + scale production now', w: 'Correct. At 87% accuracy, acting is rational. Pre-booking at standard vs 2.5–3× spot rates = major savings.' },
      { l: 'C', t: 'Divert excess to domestic Kenyan market', w: "Kenya's domestic market cannot absorb industrial volumes." },
      { l: 'D', t: 'Rely on experience, not the AI model', w: 'AI demand forecasting outperforms human intuition on seasonal patterns by 25–35%.' }
    ],
    correct: 1,
    chart: {
      kpi1: { v: '$0.22', l: 'Rose Auction Price', d: 'per stem · FloraHolland avg', c: '#c9a84c' },
      kpi2: { v: '87%', l: 'AI Forecast Accuracy', d: 'on seasonal demand events', c: '#4caf50' },
      title: 'Germany Rose Demand Index (Standard vs Peak)',
      bars: [["Valentine's Peak", 180, '#4caf50'], ["Mother's Day", 165, '#c9a84c'], ['AI Feb Forecast', 134, '#e8c96e'], ['Standard Month', 100, '#4a4030']],
      max: 180,
      spark: [82, 88, 75, 95, 110, 134],
      sparktitle: 'Germany Rose Import Demand Index 2019–2024',
      sparkc: '#c9a84c',
      groqContext: "Kenyan rose exporter with AI demand forecast showing 34% higher Germany demand next February. Model has 87% historical accuracy on seasonal events. Air freight must be pre-booked 21 days in advance. Valentine's spot freight rate is 2.5-3x standard rate. 800,000 stems inventory. Pre-booking at standard rates saves $0.08-0.12/stem."
    }
  },
  {
    id: 6,
    flag: '☕',
    prod: 'SPECIALTY COFFEE · COLOMBIA',
    q: "A Colombian specialty coffee cooperative chooses between buyers. Which maximizes sustainable long-term revenue?",
    opts: [
      { l: 'A', t: 'US commodity trader — $4.20/lb, 5-year contract', w: 'Near ICE price floor. 5-year lock eliminates upside as specialty premiums widen.' },
      { l: 'B', t: 'German specialty roaster — $6.80/lb, spot', w: "Correct. $2.60/lb premium = 62% more revenue. Germany is Europe's largest specialty coffee market." },
      { l: 'C', t: 'D2C subscription app — $9.50/lb, 3-month pilot', w: '$9.50/lb compelling but a 3-month pilot is too fragile as primary revenue source.' },
      { l: 'D', t: 'Split 50/50 US trader + Germany', w: 'Splitting dilutes the premium relationship. Build depth with Germany first.' }
    ],
    correct: 1,
    chart: {
      kpi1: { v: '$8,470', l: 'Arabica Coffee Price', d: 'per MT · World Bank 2025 (+51% YoY)', c: '#c9a84c' },
      kpi2: { v: '+62%', l: 'Germany vs Broker', d: 'revenue per pound', c: '#4caf50' },
      title: 'Coffee Price by Channel (USD/lb)',
      bars: [['Japan Specialty', 7.20, '#e8c96e'], ['Germany Direct', 6.80, '#4caf50'], ['USA Broker', 4.20, '#6a6040'], ['Commodity Floor', 2.10, '#3a3020']],
      max: 8,
      spark: [3.8, 4.2, 3.6, 5.1, 7.2, 8.47],
      sparktitle: 'Arabica Coffee Global Price (USD/kg) 2019–2024',
      sparkc: '#c9a84c',
      groqContext: 'Colombian specialty coffee cooperative (86-92 SCA cupping score) choosing between buyers. Arabica hit $8,470/MT in 2025 (+51% YoY, World Bank). Options: US commodity trader $4.20/lb 5-year contract, German specialty roaster $6.80/lb spot market, D2C app $9.50/lb 3-month pilot. Germany is largest EU specialty coffee market.'
    }
  },
  {
    id: 7,
    flag: '🚢',
    prod: 'LOGISTICS · RED SEA CRISIS',
    q: "Red Sea crisis: container costs +250%, transit +12 days. Your fresh cut flowers (7-day shelf life) must reach Rotterdam. What do you do?",
    opts: [
      { l: 'A', t: 'Continue Suez route — faster despite cost', w: '18-day Suez transit exceeds the 7-day shelf life. Flowers arrive unsellable.' },
      { l: 'B', t: 'Air freight premium orders — accept the cost', w: 'Correct. At €8–14/kg wholesale and €4.50–5.50/kg air freight, premium roses remain profitable.' },
      { l: 'C', t: 'Cape of Good Hope — avoid the crisis zone', w: '30-day transit vs 7-day shelf life. Product arrives spoiled regardless.' },
      { l: 'D', t: 'Pause exports 2–3 months', w: "Valentine's and Mother's Day = 40–60% of annual revenue. A pause is catastrophic." }
    ],
    correct: 1,
    chart: {
      kpi1: { v: '+250%', l: 'Container Surcharge', d: 'Red Sea crisis 2024', c: '#e53935' },
      kpi2: { v: '2 days', l: 'Air Freight Transit', d: 'Nairobi → Amsterdam', c: '#4caf50' },
      title: 'Transit Days vs Product Shelf Life',
      bars: [['Air Freight', 2, '#4caf50'], ['Shelf Life Max', 7, '#c9a84c'], ['Suez Route', 18, '#e53935'], ['Cape Route', 30, '#8a0000']],
      max: 32,
      spark: [100, 110, 105, 145, 210, 250],
      sparktitle: 'Container Freight Rate Index (2019=100)',
      sparkc: '#e53935',
      groqContext: 'Kenyan cut flower exporter during Red Sea shipping crisis. Container costs +250%, transit time +12 days. Fresh cut flowers have 7-day shelf life. Suez route: 18 days (exceeds shelf life). Cape of Good Hope: 30 days (exceeds shelf life). Air freight Nairobi-Amsterdam: 2 days, cost €4.50-5.50/kg. Product wholesale value: €8-14/kg.'
    }
  },
  {
    id: 8,
    flag: '🔋',
    prod: 'LITHIUM · CHILE VALUE CHAIN',
    q: "Global EV demand is creating a lithium supply crisis. Chile holds ~26% of world reserves. What is Chile's highest-value export strategy?",
    opts: [
      { l: 'A', t: 'Export raw lithium carbonate — fastest revenue', w: 'Chile permanently cedes 2–4× value-add from processing to foreign manufacturers.' },
      { l: 'B', t: 'Attract EV manufacturers to process locally', w: 'Correct. Battery-grade hydroxide commands 2–4× raw carbonate. FDI from EV manufacturers funds processing.' },
      { l: 'C', t: 'Nationalize all mining and restrict exports', w: 'Restrictions accelerate EV manufacturer diversification to Australia, Argentina, DRC.' },
      { l: 'D', t: 'Wait for lithium prices to recover', w: 'Major EV manufacturers are signing 10-year supply agreements now. Window is time-limited.' }
    ],
    correct: 1,
    chart: {
      kpi1: { v: '$21.30', l: 'Lithium Carbonate', d: 'per kg NE Asia · May 2026 (+17%)', c: '#c9a84c' },
      kpi2: { v: '2–4×', l: 'Hydroxide Premium', d: 'over raw carbonate', c: '#4caf50' },
      title: 'Lithium Price by Grade/Market (USD/kg)',
      bars: [['Battery Hydroxide', 45, '#4caf50'], ['NE Asia Carbonate', 21.30, '#c9a84c'], ['Europe Carbonate', 12.86, '#8a7a5a'], ['S. America', 8.59, '#4a4030']],
      max: 45,
      spark: [12, 18, 52, 28, 18, 21.30],
      sparktitle: 'Lithium Carbonate Price (USD/kg) NE Asia 2019–2024',
      sparkc: '#c9a84c',
      groqContext: 'Chile lithium export strategy. Lithium carbonate NE Asia: $21.30/kg (+17% MoM May 2026). Battery-grade hydroxide: $35-45/kg (2-4x premium). Chile holds 26% of world reserves. EV demand growing +38%/yr. IRA mandates FTA-partner content - Chile qualifies. Options: raw carbonate export vs attract EV manufacturers to process locally.'
    }
  },
  {
    id: 9,
    flag: '🍫',
    prod: 'VALUE-ADDED PROCESSING · ECUADOR',
    q: "Ecuador exports raw cacao at $2,800/MT. Should it invest in domestic chocolate processing?",
    opts: [
      { l: 'A', t: 'Keep exporting raw cacao — no capital risk', w: 'Ecuador leaves 3–5× value-add on the table permanently. Price-takers forever.' },
      { l: 'B', t: 'Invest in domestic chocolate processing', w: 'Correct. Even with 8% EU duty, $2,800 → $10,000+/MT creates compelling unit economics.' },
      { l: 'C', t: 'License processing tech to a European company', w: 'Licensing transfers long-term margin and brand value to Europe.' },
      { l: 'D', t: 'Focus on domestic Ecuador market only', w: "Ecuador's 18M population cannot absorb commercial processing scale." }
    ],
    correct: 1,
    chart: {
      kpi1: { v: '$9,001', l: 'Raw Cacao Spot', d: 'per MT · IMF May 2025', c: '#c9a84c' },
      kpi2: { v: '4.4×', l: 'Processing Multiplier', d: 'raw → premium chocolate', c: '#4caf50' },
      title: 'Value per MT by Processing Stage (USD)',
      bars: [['Raw Cacao', 9001, '#4a4030'], ['Artisan Chocolate', 15000, '#c9a84c'], ['Premium Branded', 22000, '#e8c96e'], ['Luxury Brand', 35000, '#4caf50']],
      max: 35000,
      spark: [2800, 3200, 2900, 5500, 7200, 9001],
      sparktitle: 'Ecuador Raw Cacao Export Value (USD/MT) 2019–2024',
      sparkc: '#c9a84c',
      groqContext: 'Ecuador cacao vertical integration decision. Raw cacao spot $9,001/MT (IMF May 2025). Processing stages: raw cacao → cacao mass → artisan chocolate $15,000/MT → premium branded $22,000/MT → luxury brand $35,000/MT. Factory investment: $2-4M for 500MT/yr capacity. Ecuador labor cost advantage vs EU: 35-45%. EU import duty on processed chocolate: 8%.'
    }
  },
  {
    id: 10,
    flag: '🌺',
    prod: 'QUINOA · BOLIVIA GI',
    q: "Peru and Ecuador enter the quinoa market, undercutting Bolivian prices by 15–20%. How does Bolivia protect its premium position?",
    opts: [
      { l: 'A', t: 'Lower prices to match competitors on volume', w: "Bolivia cannot match Peru or Ecuador's cost. Race to the bottom." },
      { l: 'B', t: 'GI registration + organic cert + EU health food brands', w: 'Correct. Geographic Indication legally differentiates Bolivian Royal Quinoa. EU pays 30–60% premium for certified origin.' },
      { l: 'C', t: 'Scale production and enter US mass market', w: 'US mass market competes purely on price. Bolivia loses to Peru on cost at scale.' },
      { l: 'D', t: 'Redirect to domestic Bolivian food industry', w: "Bolivia's domestic market cannot absorb commercial production at viable prices." }
    ],
    correct: 1,
    chart: {
      kpi1: { v: '~$2,000', l: 'Quinoa FOB Price', d: 'per MT · Bolivia commodity', c: '#c9a84c' },
      kpi2: { v: '+105%', l: 'GI Certified Premium', d: 'vs commodity price', c: '#4caf50' },
      title: 'Quinoa Price by Origin/Channel (USD/kg)',
      bars: [['Bolivia GI Organic', 6.50, '#4caf50'], ['US Natural Retail', 4.10, '#c9a84c'], ['EU Organic', 3.75, '#8a7a5a'], ['Bolivia Commodity', 2.00, '#4a4030']],
      max: 7,
      spark: [2.2, 2.5, 2.1, 2.8, 3.2, 4.10],
      sparktitle: 'US Quinoa Import Volume (000 MT) 2019–2024',
      sparkc: '#c9a84c',
      groqContext: 'Bolivia Royal Quinoa competitive positioning. Bolivia commodity FOB ~$2,000/MT. Peru and Ecuador undercutting by 15-20%. GI (Geographic Indication) registration cost: $30-50K one-time. Organic certification: $6-12K/yr. GI + organic unlocks EU organic retail at $6.50/kg vs $1.70/kg generic competitor. EU health food market growing 12%/yr.'
    }
  }
];

export const GROQ_MODEL = 'llama-3.3-70b-versatile';
export const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

export function buildGroqPrompt(question, p1Answer, p2Answer, p1Name, p2Name) {
  const p1opt = p1Answer >= 0 ? question.opts[p1Answer] : null;
  const p2opt = p2Answer >= 0 ? question.opts[p2Answer] : null;
  const correctOpt = question.opts[question.correct];

  return `You are a trade intelligence analyst. A student game just answered this international trade scenario:

SCENARIO: ${question.q}
TOPIC: ${question.prod}

${p1Name} answered: "${p1opt ? p1opt.t : 'No answer'}" ${p1Answer === question.correct ? '(CORRECT)' : '(WRONG)'}
${p2Name} answered: "${p2opt ? p2opt.t : 'No answer'}" ${p2Answer === question.correct ? '(CORRECT)' : '(WRONG)'}
CORRECT ANSWER: "${correctOpt.t}"

MARKET CONTEXT: ${question.chart.groqContext}

Write a SHORT trade intelligence analysis (3-4 sentences max). Be direct and specific:
1. WHY the correct answer is optimal (use 1-2 specific data points from the context)
2. WHY the wrong answer(s) fail (be brief)
3. ONE key trade principle this illustrates

Tone: Expert but accessible. No bullet points. No headers. Just clear, sharp prose.
Max 120 words.`;
}