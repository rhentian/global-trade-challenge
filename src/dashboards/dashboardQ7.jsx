export const dashboardQ7 = {
  title: "Cacao → Chocolate Value Chain",
  subtitle: "Captura de valor en cadena de suministro",
  question: "¿Por qué cacao cae 69% pero chocolate retail cae solo 5%?",
  
  kpis: [
    { v: "-69%", l: "Cacao caída", d: "Ene 2025 - Mar 2026", up: false, c: "var(--red)" },
    { v: "-5%", l: "Chocolate retail", d: "Mismo período", up: false, c: "var(--orange)" },
    { v: "22%", l: "Margen retail", d: "$10 barra", up: true, c: "var(--cyan)" },
    { v: "5%", l: "Margen productor", d: "Commodity (actual)", up: false, c: "var(--red)" }
  ],

  sparkChart: {
    title: "Precio cacao (commodity) vs chocolate retail",
    description: "Retailer captura beneficios de caída de commodity",
    values: [100, 91, 75, 76, 84, 78, 69, 71, 65, 56, 52, 54, 47, 34, 30, 32],
    color: "#7c4dff"
  },

  options: [
    {
      title: "Opción 1: Commodity Puro",
      destination: "Venta como materia prima",
      price: "$0.50 de barra $10",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: ["5% de valor final", "Crédito a retailer", "Caída proporcional"],
      recommended: false
    },
    {
      title: "Opción 2: Fermentado/Procesado",
      destination: "Producto intermedio",
      price: "$1.50-2.00 de barra",
      color: "#f5c400",
      border: "#f5c400",
      highlights: ["15% de valor", "Margen 8-12%", "Mejor posición"],
      recommended: false
    },
    {
      title: "Opción 3: Chocolate Local",
      destination: "Marca propia ecuatoriana",
      price: "$3.00-3.50 de barra",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: ["30-35% valor", "Margen 15%+", "RECOMENDADO"],
      recommended: true
    }
  ],

  narrative: `
    <h4>La respuesta correcta explicada</h4>
    <p><strong style="color: #06ffa5;">Integración vertical (chocolate marca Ecuador) es la única forma de capturar valor - respuesta correcta.</strong></p>
    <p><strong>La "mágica desaparición de la crisis" - solo para retailers:</strong></p>
    <p>Barra chocolate $10 (Alemania 2026) se descompone así:</p>
    <ul>
      <li><strong>Productor cacao (commodity):</strong> 5% = $0.50 ← <strong style="color: #ff3d71;">ESTE CAYÓ 69% ($0.50→$0.15)</strong></li>
      <li><strong>Procesador/Fabricante:</strong> 18% = $1.80</li>
      <li><strong>Logística/Distribución:</strong> 10% = $1.00</li>
      <li><strong>Retailer (margen):</strong> 22% = $2.20 ← <strong style="color: #06ffa5;">ESTE CRECIÓ (capturó diferencia)</strong></li>
      <li><strong>Otros (impuestos):</strong> 45% = $4.50</li>
    </ul>
    <p><u>Lo que pasó:</u> Cacao commodity: $10,710 → $3,241 (-69%). Chocolate retail: $10.00 → $9.50 (-5%). Diferencia de $0.35/barra × volumen = retailer se embolsa millones. <strong style="color: #06ffa5;">Productor pierde, retailer gana.</strong></p>
  `,

  recommendation: `
    <strong>🎯 Integración vertical: 3 años a control 35% del valor</strong><br><br>
    <strong>Línea 1 (Año 1 - Procesamiento fermentado local):</strong> Construir pequeña planta de fermentación en Ecuador (costo $50k). Vender cacao fermentado (no commodity puro) a chocolateros EU. Captura: 15% de valor barra $10 = margen 8-10% (vs 5% commodity).<br><br>
    <strong>Línea 2 (Año 2 - Chocolatería básica):</strong> Máquina de procesamiento chocolate básica (costo $80k). Hacer chocolate en barra simple "Ecuador". Vender a distribuidores EU. Captura: 25% de valor = margen 12-15%.<br><br>
    <strong>Línea 3 (Año 3 - Marca propia gourmet):</strong> "Ecuador Premium Chocolate" con diseño premium + distribución directa EU+USA. Control 30-35% de valor = margen 15-22%.<br><br>
    <strong>Línea 4 (ROI números):</strong> 1 hectárea cacao commodity = $2,000/año margen. Con integración vertical año 3 = $10,000-12,000/año margen. Multiplicador: 5-6x retorno. Inversión total 3 años: $130k. Payback: 18 meses. Luego: $10k/año de margen puro perpetua.
  `,

  source: "WTO Trade Statistics, ITC Trade Map, Chocolate Industry Report"
};