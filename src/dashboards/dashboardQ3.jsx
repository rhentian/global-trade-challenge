export const dashboardQ3 = {
  title: "Cut Flowers Kenya",
  subtitle: "AI/IoT vs pérdidas post-cosecha",
  question: "¿Cómo predicción AI + IoT reducen pérdidas post-cosecha?",
  
  kpis: [
    { v: "$29.80", l: "Pico", d: "Dic (Xmas)", up: true, c: "var(--cyan)" },
    { v: "$13.80", l: "Mínimo", d: "Jun", up: false, c: "var(--red)" },
    { v: "-53.7%", l: "Volatilidad", d: "Estacional", up: false, c: "var(--orange)" },
    { v: "40%", l: "Pérdida", d: "Sin AI", up: false, c: "var(--red)" }
  ],

  sparkChart: {
    title: "Precios rosas Kenya y tasa de pérdida",
    description: "Estacionalidad extrema + pérdidas post-cosecha del 40% sin AI",
    values: [29.80, 27.45, 22.10, 18.90, 15.60, 13.80, 14.20, 16.50, 19.30, 23.40, 26.10, 28.90],
    color: "#7c4dff"
  },

  options: [
    {
      title: "Opción 1: Sin AI/IoT",
      destination: "Método: Manual + experiencia",
      price: "40% pérdida post-cosecha",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: ["Manual monitoring", "40% flores desechadas", "Márgenes negativos"],
      recommended: false
    },
    {
      title: "Opción 2: IoT Básico",
      destination: "Temperatura + humedad",
      price: "22% pérdida, $35k inversión",
      color: "#f5c400",
      border: "#f5c400",
      highlights: ["Sensores temperatura/HR", "Reducción 45%", "ROI 2.5 años"],
      recommended: false
    },
    {
      title: "Opción 3: AI+IoT Stack",
      destination: "Predicción, optimización",
      price: "6% pérdida, $60k inversión",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: ["Predicción demanda AI", "85% reducción pérdidas", "ROI 180-220% en 18m"],
      recommended: true
    }
  ],

  narrative: `
    <h4>La respuesta correcta explicada</h4>
    <p><strong style="color: #06ffa5;">AI+IoT Stack es la única solución viable.</strong></p>
    <p><strong>Crisis de flores frescas:</strong> Rosas tienen <strong>7 días máximo de shelf life</strong> (Día 0: Cosecha Kenya → Día 1-2: Air Kenya-EU → Día 3-5: Distribución tienda → Día 6-7: Consumidor antes de marchitar).</p>
    <ul>
      <li><strong>Sin control temperature/humedad:</strong> 40% de flores mueren entre cosecha y tienda = pérdida $80k/año para productor $200k</li>
      <li><strong>Problema crítico:</strong> No hay "segunda oportunidad". Flores que se marchitan = basura total.</li>
      <li><strong>AI soluciona:</strong> Predice demanda exacta 7 días ahead → Cosecha solo lo vendible → Pérdidas caen a 6%</li>
    </ul>
    <p><u>Conclusión:</u> <strong style="color: #06ffa5;">AI+IoT = diferencia entre quiebra (40% pérdida) y margen 25%+</strong></p>
  `,

  recommendation: `
    <strong>🎯 Stack AI+IoT: Inversión $60k, ROI 180-220% en 18 meses</strong><br><br>
    <strong>Línea 1 (0-2 meses):</strong> Instalación IoT sensors en campos de rosas: temperatura, humedad, luz, estrés planta. Costo: $20,000. Conecta a cloud database central. Integración: 2-3 semanas setup + training.<br><br>
    <strong>Línea 2 (2-4 meses):</strong> Entrenamiento modelo AI con histórico 5 años de ventas EU (quién compra rosas, cuándo, cantidad). Predicción: demanda exacta por ciudad/floristería/fecha 7 días ahead. Costo: $25,000 (Groq API + data science).<br><br>
    <strong>Línea 3 (4-6 meses):</strong> Automatización cosecha: AI predice Lunes vendo 500k rosas → Cosecha Lunes 550k (buffer 10%). Resultado: Pérdidas -85% (de 40% a 6%). Sistema costo mantenimiento: $5,000/año.<br><br>
    <strong>Línea 4 (ROI números):</strong> Pérdida actual: 40% × $200k = $80k/año perdidos. Con AI: 6% × $200k = $12k/año. Ahorro anual: $68k. Payback: $60k ÷ $68k = 10.6 meses. Luego: $68k/año de margen puro durante 5+ años.
  `,

  source: "FAOSTAT, Kenya Flower Council, Agritech benchmark"
};