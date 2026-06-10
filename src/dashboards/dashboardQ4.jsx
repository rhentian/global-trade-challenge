export const dashboardQ4 = {
  title: "Specialty Coffee Colombia",
  subtitle: "Elección de comprador correcto",
  question: "¿Cómo elegir el comprador correcto en mercado volátil?",
  
  kpis: [
    { v: "$4.10/lb", l: "Pico", d: "Nov 2025", up: true, c: "var(--cyan)" },
    { v: "$3.21/lb", l: "Mínimo", d: "Feb 2026", up: false, c: "var(--red)" },
    { v: "-21.7%", l: "Caída", d: "3 meses", up: false, c: "var(--orange)" },
    { v: "$6.00-8.00/lb", l: "Direct Trade", d: "Premium", up: true, c: "var(--cyan)" }
  ],

  sparkChart: {
    title: "Precios Arabica specialty vs commodity",
    description: "Commodity volátil ($4.10→$3.21), specialty estable ($4.50-5.50)",
    values: [4.10, 3.98, 3.85, 3.72, 3.58, 3.46, 3.35, 3.43, 3.52, 3.61, 3.70, 3.80],
    color: "#f5c400"
  },

  options: [
    {
      title: "Opción 1: Commodity",
      destination: "Destino: USA generic",
      price: "$3.21/lb (volátil)",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: [
        "Volatilidad extrema",
        "Sin contrato long term",
        "Margen mínimo"
      ],
      recommended: false
    },
    {
      title: "Opción 2: Specialty EU",
      destination: "Destino: Alemania, Italia",
      price: "$4.50-5.50/lb (estable)",
      color: "#f5c400",
      border: "#f5c400",
      highlights: [
        "Contratos 12-24 meses",
        "Trazabilidad premium",
        "Margen +25%"
      ],
      recommended: false
    },
    {
      title: "Opción 3: Direct Trade",
      destination: "Destino: Roasters premium",
      price: "$6.00-8.00/lb (máximo)",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: [
        "Relación directa buyer",
        "Contratos multi-año",
        "RECOMENDADO"
      ],
      recommended: true
    }
  ],

  narrative: `
    <h4>La respuesta correcta explicada</h4>
    <p><strong style="color: #06ffa5;">Direct Trade es la opción correcta.</strong> Aquí por qué:</p>
    <p><strong>Mismo café, 3 compradores, 3 precios radicalmente diferentes:</strong></p>
    <ul>
      <li><strong>Commodity (NYC Futures):</strong> $3.21/lb (volátil, sin contrato, cayó 21.7% en 3 meses)</li>
      <li><strong>Specialty EU (SCA 80+):</strong> $4.50-5.50/lb (estable gracias a contratos 12-24 meses, bajó solo 5%)</li>
      <li><strong>Direct Trade (Roaster premium):</strong> $6.00-8.00/lb (relación directa, contratos multi-año, resistance a volatilidad)</li>
    </ul>
    <p><u>Clave:</u> <strong style="color: #06ffa5;">Elegir el comprador correcto reduce volatilidad 75%.</strong> No es el precio spot el que importa, sino la estabilidad del contrato y la relación buyer-seller a largo plazo.</p>
  `,

  recommendation: `
    <strong>📊 Roadmap: Commodity → Specialty → Direct Trade (12 meses)</strong><br><br>
    <strong>Línea 1 - Immediate (0-3 meses):</strong> Certificación SCA (Specialty Coffee Association, costo $500). Garantiza 80+ puntos = acceso a buyers premium. Contrato forward 12 meses con importer alemán/italiano = $4.50/lb garantizado.<br><br>
    <strong>Línea 2 - Short term (3-6 meses):</strong> Visita directa a roasters premium EU (Alemania, Suiza, Italia). Negocia Direct Trade = relación comprador-productor sin intermediarios = $6.00-8.00/lb + contrato 3-5 años.<br><br>
    <strong>Línea 3 - Resultado números:</strong> Commodity $3.21 → Specialty $4.50 = +40% premium. Specialty $4.50 → Direct Trade $7.00 = +56% adicional. Total: +120% vs commodity = margen 5-8% → 18-25%.<br><br>
    <strong>Línea 4 - Timeline ROI:</strong> Cambio a Direct Trade en mes 6 = $4,500/año de margen extra por hectárea de café. Costo cambio = $2,000. Payback = 5.3 meses. Luego: $4,500/año perpetua.
  `,

  source: "FRED PCOFFOTMUSDM, SCA Grading, Direct Trade Certified"
};