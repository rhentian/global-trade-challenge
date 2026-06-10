export const GROQ_MODEL = 'llama-3.1-8b-instant';
export const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

export const QUESTIONS = [
  {
    id: 1,
    flag: '🇪🇨',
    prod: 'Fine-Aroma Cacao · Ecuador',
    q: 'Ecuador produces ~63% of world fine-aroma cacao. Your 200 MT/year could earn 2–3× commodity price — but only in the right market. Where do you go first?',
    opts: [
      { l: 'A', t: '🇪🇺 EU — Germany, Belgium & Switzerland' },
      { l: 'B', t: '🇺🇸 USA — bulk commodity brokers' },
      { l: 'C', t: '🇨🇳 China — e-commerce platforms' },
      { l: 'D', t: '🇨🇮 Ivory Coast — re-export strategy' }
    ],
    correct: 0,
    explanation: 'The EU (especially Germany, Belgium, Switzerland) is the premium fine-aroma cacao buyer. These countries have certifications like UTZ, Rainforest Alliance, and organic standards that guarantee 2-3x commodity prices. The USA focuses on bulk/commodity, China lacks specialty infrastructure, and Ivory Coast is a competitor, not a buyer.'
  },

  {
    id: 2,
    flag: '🍌',
    prod: 'Banana Exports · Certification Crisis',
    q: 'Your biggest EU client — 40% of your revenue — cancelled because you lack Rainforest Alliance certification. What\'s your move?',
    opts: [
      { l: 'A', t: 'Pivot 100% to Middle East immediately' },
      { l: 'B', t: 'Start RA certification + bridge to Middle East' },
      { l: 'C', t: 'Pivot to domestic banana processing' },
      { l: 'D', t: 'Legal action against EU client' }
    ],
    correct: 1,
    explanation: 'The best strategy is parallel action: pursue Rainforest Alliance certification (takes 6-12 months but opens EU again) while diversifying into Middle East markets (no certification barrier). This hedges risk and maximizes revenue long-term. Pure pivot loses EU market permanently, processing is capital-heavy, legal action is costly.'
  },

  {
    id: 3,
    flag: '🌹',
    prod: 'Cut Flowers · Kenya',
    q: 'Your AI system predicts 34% higher rose demand in Germany next February. How do you respond? (Model accuracy: 87%)',
    opts: [
      { l: 'A', t: 'Wait to confirm before acting' },
      { l: 'B', t: 'Pre-book freight capacity + scale production now' },
      { l: 'C', t: 'Divert excess to domestic Kenyan market' },
      { l: 'D', t: 'Rely on experience, not the AI model' }
    ],
    correct: 1,
    explanation: 'With 87% accuracy, the AI signal is strong. February is Valentine\'s Day (proven demand spike in Germany). Act now: pre-book freight (limited capacity during peak), scale production (lead time ~4-6 weeks). Waiting loses the opportunity, domestic diversion wastes premium pricing, and ignoring AI ignores competitive advantage.'
  },

  {
    id: 4,
    flag: '☕',
    prod: 'Specialty Coffee · Colombia',
    q: 'A Colombian specialty coffee cooperative chooses between buyers. Which maximizes sustainable long-term revenue?',
    opts: [
      { l: 'A', t: 'US commodity trader — $4.20/lb, 5-year contract' },
      { l: 'B', t: 'German specialty roaster — $6.80/lb, spot' },
      { l: 'C', t: 'D2C subscription app — $9.50/lb, 3-month pilot' },
      { l: 'D', t: 'Split 50/50 US trader + Germany' }
    ],
    correct: 1,
    explanation: 'German specialty roaster at $6.80/lb offers the best balance: premium pricing (vs US commodity), relationship-based stability (vs volatile spot), and long-term partnership potential (vs 3-month pilot risk). The D2C app is higher-priced but unproven; US commodity locks in low price; split strategy dilutes brand.'
  },

  {
    id: 5,
    flag: '🚢',
    prod: 'Logistics · Red Sea Crisis',
    q: 'Red Sea crisis: container costs +250%, transit +12 days. Your fresh cut flowers (7-day shelf life) must reach Rotterdam. What do you do?',
    opts: [
      { l: 'A', t: 'Continue Suez route — faster despite cost' },
      { l: 'B', t: 'Air freight premium orders — accept the cost' },
      { l: 'C', t: 'Cape of Good Hope — avoid the crisis zone' },
      { l: 'D', t: 'Pause exports 2–3 months' }
    ],
    correct: 1,
    explanation: 'With only 7-day shelf life, Suez transit delays mean product spoils (19-day Cape route is worse). Air freight premium orders keeps high-value SKUs moving, maintains customer relationships, and captures premium pricing. Pausing loses market share to competitors; continuing Suez risks total loss.'
  },

  {
    id: 6,
    flag: '🔋',
    prod: 'Lithium · Chile Value Chain',
    q: 'Global EV demand is creating a lithium supply crisis. Chile holds ~26% of world reserves. What is Chile\'s highest-value export strategy?',
    opts: [
      { l: 'A', t: 'Export raw lithium carbonate — fastest revenue' },
      { l: 'B', t: 'Attract EV manufacturers to process locally' },
      { l: 'C', t: 'Nationalize all mining and restrict exports' },
      { l: 'D', t: 'Wait for lithium prices to recover' }
    ],
    correct: 1,
    explanation: 'Processing locally (batteries, cells) captures 3-5x more value than raw carbonate. Attracting EV battery plants creates jobs, IP, and long-term revenue. Raw export leaves value to other countries; nationalization kills investment; waiting is passive in a supply-constrained market.'
  },

  {
    id: 7,
    flag: '🍫',
    prod: 'Value-Added Processing · Ecuador',
    q: 'Ecuador exports raw cacao at $2,800/MT. Should it invest in domestic chocolate processing?',
    opts: [
      { l: 'A', t: 'Keep exporting raw cacao — no capital risk' },
      { l: 'B', t: 'Invest in domestic chocolate processing' },
      { l: 'C', t: 'License processing tech to a European company' },
      { l: 'D', t: 'Focus on domestic Ecuador market only' }
    ],
    correct: 1,
    explanation: 'Processing cacao into chocolate, cocoa butter, cocoa liquor multiplies value 3-5x ($8,000–$12,000/MT equivalent). Ecuador has climate advantage + cacao quality. Domestic investment builds export IP and capture global margins. Licensing loses margin to Europe; raw export leaves money on table; domestic-only ignores global demand.'
  },

  {
    id: 8,
    flag: '🌾',
    prod: 'Quinoa · Bolivia GI',
    q: 'Peru and Ecuador enter the quinoa market, undercutting Bolivian prices by 15–20%. How does Bolivia protect its premium position?',
    opts: [
      { l: 'A', t: 'Lower prices to match competitors on volume' },
      { l: 'B', t: 'GI registration + organic cert + EU health food brands' },
      { l: 'C', t: 'Scale production and enter US mass market' },
      { l: 'D', t: 'Redirect to domestic Bolivian food industry' }
    ],
    correct: 1,
    explanation: 'Geographical Indication (GI) + organic certification establishes "Bolivian Quinoa" as a protected premium brand (like Champagne). This locks higher pricing with EU health/organic buyers, differentiates from Peruvian/Ecuadorian bulk. Price competition loses margin; scaling mass market erases premium; domestic redirects wastes export opportunity.'
  }
];

export function buildChartPrompt(question, answer1, answer2, player1, player2) {
  return `Trade case: ${question.q}\n\nPlayer ${player1} chose: ${question.opts[answer1]?.t || 'No answer'}\nPlayer ${player2} chose: ${question.opts[answer2]?.t || 'No answer'}\n\nCorrect: ${question.opts[question.correct].t}\n\nExplain the market dynamics briefly.`;
}