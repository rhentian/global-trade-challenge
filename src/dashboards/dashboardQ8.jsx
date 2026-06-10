export const dashboardQ8 = {
  title: "Quinua Real Bolivia",
  subtitle: "Geografical Indication vs commodity",
  question: "¿Por qué Quinua con GI resiste mientras commodity se desploma?",
  
  kpis: [
    { v: "$1.80", l: "Commodity", d: "Peak", up: true, c: "var(--cyan)" },
    { v: "$0.88", l: "Commodity", d: "Low (-51%)", up: false, c: "var(--red)" },
    { v: "$5.50", l: "GI certified", d: "Peak", up: true, c: "var(--green)" },
    { v: "$4.98", l: "GI certified", d: "Low (-9%)", up: false, c: "var(--orange)" }
  ],

  sparkChart: {
    title: "Quinua: commodity vs Geographical Indication",
    description: "GI resiste volatilidad (5.7x premium estable)",
    values: [1.80, 1.65, 1.42, 1.28, 1.12, 0.98, 0.88, 0.95, 1.05, 1.15, 1.25, 1.35],
    color: "#00d4ff"
  },

  options: [
    {
      title: "Opción 1: Commodity Puro",
      destination: "Mercado global spot",
      price: "$0.88-1.80/kg",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: ["Volatilidad -51%", "Competencia china", "Márgenes 2-3%"],
      recommended: false
    },
    {
      title: "Opción 2: Certif. Orgánica",
      destination: "EU, USA premium",
      price: "$2.50-3.20/kg",
      color: "#f5c400",
      border: "#f5c400",
      highlights: ["2x commodity", "Contratos estables", "Margen 8%"],
      recommended: false
    },
    {
      title: "Opción 3: GI Quinua Bolivia",
      destination: "Origen protegido",
      price: "$4.98-5.50/kg",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: ["5.7x premium", "-9% caída (vs -51%)", "RECOMENDADO"],
      recommended: true
    }
  ],

  narrative: `
    <h4>La respuesta correcta explicada</h4>
    <p><strong style="color: #06ffa5;">GI (Geografical Indication) Quinua Bolivia es la respuesta correcta - suministro restringido por geografía = precio permanente.</strong></p>
    <p><strong>Por qué GI resiste volatilidad cuando commodity se desploma:</strong></p>
    <ul>
      <li><strong>Commodity Quinua:</strong> Se produce en Bolivia, Perú, India, China → oferta global infinita → cuando demanda baja, precio colapsa 51%</li>
      <li><strong>GI Quinua Real:</strong> SOLO se produce en Yungas Bolivia (>3,500 msnm). Geografía NO replicable en China, India. Suministro RESTRINGIDO → demanda > oferta → precio resiste (-9% vs -51%)</li>
    </ul>
    <p><u>Datos 2025-2026:</u> Commodity: $1.80 → $0.88 (<strong style="color: #ff3d71;">-51% en 12 meses</strong>). GI Bolivia: $5.50 → $4.98 (<strong style="color: #06ffa5;">-9% en 12 meses, premium 5.7x se mantiene</strong>). Conclusión: <strong style="color: #06ffa5;">GI = barrera artificial contra commoditización. Monopolio semi-legal.</strong></p>
  `,

  recommendation: `
    <strong>🎯 GI Roadmap: Inversión $45-75k, ROI infinito (20+ años de premium)</strong><br><br>
    <strong>Línea 1 (Meses 0-3 - Organización):</strong> Cooperativa de 50+ productores Yungas Bolivia. Recopilar: certificados, análisis químicos, mapeo terrenos, histórico de 5 años. Documentación = prueba que "Quinua Real" es SOLO de esta región. Costo: $5-10k.<br><br>
    <strong>Línea 2 (Meses 3-6 - Validación nacional):</strong> SENAC Bolivia (órgano oficial) certifica "Quinua Real de Yungas". Inspecciones de terreno, muestreos, análisis. Costo: $10-15k. Resultado: Bolivia Official Recognition.<br><br>
    <strong>Línea 3 (Meses 6-12 - Registro EU PDO):</strong> Protected Designation of Origin (PDO) en Europa. Garantiza: SOLO Yungas Bolivia puede llamarse "Quinua Real". Precio premium +300% permanente. Costo: $30-50k (EU bureaucracy).<br><br>
    <strong>Línea 4 (ROI perpetuo):</strong> 50 productores × 2 MT/año × $4/kg premium (vs commodity) = $400,000/año de margen extra colectivo. Total inversión GI: $45-75k. Payback: 3-6 meses. Luego: $400k/año de margen puro durante 20+ años (GI nunca expira).
  `,

  source: "FAOSTAT, ITC Trade Map, GI Registry Bolivia"
};