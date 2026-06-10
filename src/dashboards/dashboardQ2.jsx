export const dashboardQ2 = {
  title: "Bananos Ecuador",
  subtitle: "Competencia por volumen vs margen",
  question: "¿Pueden los bananos ecuatorianos competir sin volumen?",
  
  kpis: [
    { v: "$1,456", l: "Pico", d: "Oct 2025", up: true, c: "var(--cyan)" },
    { v: "$1,157", l: "Mínimo", d: "Dic 2025", up: false, c: "var(--red)" },
    { v: "-20.5%", l: "Caída", d: "2 meses", up: false, c: "var(--orange)" },
    { v: "$1,215", l: "Actual", d: "Feb 2026", up: false, c: "var(--orange)" }
  ],

  sparkChart: {
    title: "Precios bananos Ecuador 2025-2026",
    description: "Caída del 20.5% en período de baja demanda",
    values: [1456, 1398, 1312, 1287, 1245, 1198, 1157, 1172, 1189, 1203, 1215],
    color: "#00d4ff"
  },

  options: [
    {
      title: "Opción 1: Commodity Puro",
      destination: "Destino: USA, China",
      price: "$0.95-1.20/lb",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: [
        "Saturación de mercado",
        "Márgenes 5-8%",
        "Competencia por volumen"
      ],
      recommended: false
    },
    {
      title: "Opción 2: Certificado Orgánico",
      destination: "Destino: EU, Japón",
      price: "$1.50-2.10/lb",
      color: "#f5c400",
      border: "#f5c400",
      highlights: [
        "Premio +50-70%",
        "Trazabilidad premium",
        "Mercado especializado"
      ],
      recommended: false
    },
    {
      title: "Opción 3: GI 'Banano de Manabí'",
      destination: "Destino: Premium global",
      price: "$2.20-2.80/lb",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: [
        "Margen +120%",
        "Origen protegido",
        "RECOMENDADO"
      ],
      recommended: true
    }
  ],

  narrative: `
    <h4>La respuesta correcta explicada</h4>
    <p><strong style="color: #06ffa5;">GI "Banano de Manabí" es la respuesta correcta - no compitas por volumen.</strong></p>
    <p><strong>El problema del volumen:</strong> Ecuador produce 30% de bananos mundiales, pero esto es una DEBILIDAD, no una ventaja:</p>
    <ul>
      <li><strong>Volumen global ↑ = Precios ↓:</strong> Competencia china/peruana crece 15% anual</li>
      <li><strong>Margen commodity actual:</strong> 5-8% (insostenible para pequeños/medianos productores)</li>
      <li><strong>Trampa: Ganar por volumen es imposible.</strong> China siempre produce más barato.</li>
    </ul>
    <p><u>Solución:</u> <strong style="color: #06ffa5;">Diferenciación por origen.</strong> GI "Banano de Manabí" restringe suministro a región específica, genera <strong>+120% margen vs commodity</strong> (5-8% → 18-22%).</p>
  `,

  recommendation: `
    <strong>🎯 Estrategia: GI Banano de Manabí en 12 meses</strong><br><br>
    <strong>Línea 1 (0-3 meses):</strong> Certificación orgánica + Fair Trade ($4,000-5,000 total). Acceso inmediato a mercado EU premium = $1.80/lb (vs $1.20 commodity). Contratos con distribuidores Alemania/Holanda = estabilidad de precio.<br><br>
    <strong>Línea 2 (3-6 meses):</strong> Registro GI "Banano de Manabí" con SENAC Ecuador. Documentación de origen + características únicas región (suelo volcánico, clima). Costo: $8,000-12,000 repartido entre cooperativa (50+ productores).<br><br>
    <strong>Línea 3 (6-12 meses):</strong> Lanzamiento marca "Manabí Banana" en mercados premium: Alemania, Suiza, Japón, USA. Precio target $2.50/lb (vs $1.20 commodity = +108% premium).<br><br>
    <strong>Línea 4 (ROI financiero):</strong> 1 hectárea bananos = 35 MT/año. Commodity: 35MT × $0.95/lb = $18,375/año. GI Manabí: 35MT × $2.50/lb = $48,625/año. Diferencia: $30,250/año de margen adicional. Payback inversión GI: 2-3 meses.
  `,

  source: "FRED PBANSOPUSDM, ITC Trade Map, Ecuapass"
};