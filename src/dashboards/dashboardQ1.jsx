export const dashboardQ1 = {
  title: "Fine-Aroma Cacao Ecuador",
  subtitle: "Volatilidad extrema en precios commodity",
  question: "¿Cómo protegerse de la volatilidad del cacao?",
  
  kpis: [
    { v: "$10,710", l: "Pico", d: "Ene 2025", up: true, c: "var(--cyan)" },
    { v: "$3,241", l: "Mínimo", d: "Mar 2026", up: false, c: "var(--red)" },
    { v: "-69.7%", l: "Caída", d: "16 meses", up: false, c: "var(--red)" },
    { v: "$3,392", l: "Actual", d: "Abr 2026", up: false, c: "var(--orange)" }
  ],

  sparkChart: {
    title: "Precios históricos cacao 2025-2026",
    description: "Desplome del 69.7% en 16 meses - peor commodity del período",
    values: [10710.35, 9792.66, 8079.56, 8132.22, 9000.79, 8401.95, 7371.89, 7604.12, 7006.53, 5953.57, 5590.71, 5814.86, 5018.13, 3587.19, 3241.49, 3392.14],
    color: "#ff3d71"
  },

  options: [
    {
      title: "Opción 1: Commodity Puro",
      destination: "Destino: China/USA",
      price: "$3,500/MT",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: [
        "Volatilidad extrema",
        "Márgenes 2-3%",
        "Resultado: Ruina sin hedging"
      ],
      recommended: false
    },
    {
      title: "Opción 2: Certificado Premium",
      destination: "Destino: Alemania/Bélgica",
      price: "$8,500-12,000/MT",
      color: "#f5c400",
      border: "#f5c400",
      highlights: [
        "3-4x más precio",
        "Contratos estables",
        "Certificación UTZ/Rainforest"
      ],
      recommended: false
    },
    {
      title: "Opción 3: GI (Máxima Protección)",
      destination: "Destino: Mercado premium global",
      price: "$12,000-15,000/MT",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: [
        "Márgenes 12-15%",
        "Resistencia a volatilidad",
        "RECOMENDADO"
      ],
      recommended: true
    }
  ],

  narrative: `
    <h4>La respuesta correcta explicada</h4>
    <p><strong style="color: #06ffa5;">GI (Geografical Indication) es la opción correcta.</strong> Aquí por qué:</p>
    <p><strong>Crisis de cacao 2025-2026:</strong> Ecuador produce 30% del cacao fino mundial, pero enfrentó la peor crisis de precios de la década:</p>
    <ul>
      <li><strong>Enero 2025:</strong> $10,710/MT (pico histórico)</li>
      <li><strong>Marzo 2026:</strong> $3,241/MT (<strong style="color: #ff3d71;">-69.7% en 16 meses</strong>)</li>
      <li><strong>Causa:</strong> Sobreproducción global + especulación financiera + debilidad demanda EU</li>
    </ul>
    <p><u>Resultado para productores commodity:</u> <strong style="color: #ff3d71;">Ruina total sin contratos forward.</strong> Márgenes de 2-3% se evaporan. GI resuelve esto porque <strong style="color: #06ffa5;">restringe suministro a origen específico (no replicable)</strong> → precio premium permanente.</p>
  `,

  recommendation: `
    <strong>🎯 Roadmap GI: 3 pasos en 12 meses</strong><br><br>
    <strong>Paso 1 (0-3 meses):</strong> Certificación UTZ o Rainforest Alliance ($2,000-3,000). Garantiza acceso a compradores premium EU. Negocia contratos forward 12 meses con Alemania/Bélgica = $8,500-10,000/MT garantizado (vs $3,500 commodity).<br><br>
    <strong>Paso 2 (3-9 meses):</strong> Registro de Denominación de Origen Protegida (GI) para "Cacao Fine Aroma Ecuador". Coordinación con órgano oficial + validación EU. Costo total $15,000-25,000 repartido entre cooperativa.<br><br>
    <strong>Paso 3 (9-12 meses):</strong> Lanzamiento marca "Ecuador Cacao GI" en mercado premium global (Alemania, Suiza, USA). Precio garantizado $12,000-15,000/MT + contratos 3-5 años = eliminación de volatilidad.<br><br>
    <strong>ROI explosivo:</strong> Commodity $3,500/MT = margen 2%. GI $12,000/MT = margen 15%. Por hectárea: $700/año → $3,600/año. Payback de inversión GI: 4-6 meses.
  `,

  source: "IMF PCOCO, FRED PCOCOUSDM, World Bank Commodity Database"
};