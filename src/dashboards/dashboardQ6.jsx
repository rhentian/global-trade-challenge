export const dashboardQ6 = {
  title: "Lithium Chile",
  subtitle: "Volatilidad extrema en commodities energéticos",
  question: "¿Cómo manejar volatilidad extrema en commodities energéticos?",
  
  kpis: [
    { v: "$14,200/MT", l: "Ene 2025", d: "Precio", up: true, c: "var(--cyan)" },
    { v: "$8,500/MT", l: "Ene 2026", d: "-40% crash", up: false, c: "var(--red)" },
    { v: "$26,278/MT", l: "Feb 2026", d: "+209% spike", up: true, c: "var(--cyan)" },
    { v: "208%", l: "Rango", d: "12 meses", up: false, c: "var(--red)" }
  ],

  sparkChart: {
    title: "Precios litio: caída -40% → spike +209%",
    description: "Volatilidad extrema: productores sin hedging se quiebran",
    values: [14200, 13800, 12900, 11500, 10200, 9100, 8500, 9200, 11000, 15500, 20000, 26278],
    color: "#00e676"
  },

  options: [
    {
      title: "Opción 1: Sin Hedging",
      destination: "Spot market exposure",
      price: "Volatilidad total",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: ["208% rango de precios", "Productores medianos: quiebra", "Resultado: insolvencia"],
      recommended: false
    },
    {
      title: "Opción 2: Hedging Parcial",
      destination: "40% forward contracts",
      price: "Riesgo residual",
      color: "#f5c400",
      border: "#f5c400",
      highlights: ["40% de producción asegurado", "Surviven crisis", "Margen estrecho"],
      recommended: false
    },
    {
      title: "Opción 3: Hedging Total",
      destination: "60-80% forward contracts",
      price: "Precio mínimo garantizado",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: ["60-80% asegurado", "Sobrevive crises", "RECOMENDADO"],
      recommended: true
    }
  ],

  narrative: `
    <h4>La respuesta correcta explicada</h4>
    <p><strong style="color: #06ffa5;">Hedging 60-80% con contratos forward es la única solución - sin esto es insolvencia.</strong></p>
    <p><strong>Caso real: Lithium 2025-2026, la volatilidad más extrema del mercado:</strong></p>
    <ul>
      <li><strong>Enero 2025:</strong> $14,200/MT (pico expected)</li>
      <li><strong>Enero 2026:</strong> $8,500/MT (<strong style="color: #ff3d71;">-40% crash</strong> por demanda EV débil + overproducción China)</li>
      <li><strong>Febrero 2026:</strong> $26,278/MT (<strong style="color: #06ffa5;">+209% spike</strong> por reports de supply shortage)</li>
      <li><strong>Rango anual:</strong> <strong style="color: #ff3d71;">208% volatilidad = inmanejable sin hedging</strong></li>
    </ul>
    <p><u>Casos históricos:</u> SQM (Chile) hedgeó 70% → sobrevivió + margen 15%. Productores medianos sin hedging → quiebre en 2026. Conclusión: <strong style="color: #06ffa5;">Hedging no es opción, es supervivencia.</strong></p>
  `,

  recommendation: `
    <strong>🎯 Hedging 60-80% con contratos forward 12-24 meses: Supervivencia garantizada</strong><br><br>
    <strong>Línea 1 (Inversión mínima por costo):</strong> Hedging cuesta solo 2-3% del precio spot = inversión mínima vs riesgo. Ejemplo: productor 10,000 MT/año × 2% costo = $224,000 investido (costo insurance). A cambio: garantía de ingresos contra volatilidad 200%+.<br><br>
    <strong>Línea 2 (Números reales - scenario crash):</strong> Sin hedging en crash $8.5k: Ingresos = 10,000 MT × $8.5k = $85M. Con hedging 70%: (7,000 MT @ $14k fijo) + (3,000 MT @ spot $8.5k) = Ingresos = $124.5M. Diferencia: $39.5M salvados = costo hedging ($224k) es pago de insurance trivial.<br><br>
    <strong>Línea 3 (Implementación):</strong> Contratos forward 12-24 meses con traders especializados o canje de futuros. Estructura: 60% año 1, 70% año 2, 80% año 3. Garantiza margen 15% incluso en volatilidad 200%+.<br><br>
    <strong>Línea 4 (Lección clave):</strong> <strong style="color: #06ffa5;">Lithium sin hedging = roulette rusa.</strong> SQM hedgeó 70% → multinacional exitosa. Medianos sin hedging → quiebra en 12 meses. ROI hedging: infinito (sobrevivencia = todo).
  `,

  source: "Bloomberg Lithium, Benchmark Mineral Intelligence"
};