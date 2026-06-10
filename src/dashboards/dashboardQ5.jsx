export const dashboardQ5 = {
  title: "Red Sea Logistics Crisis",
  subtitle: "Impacto por shelf life del producto",
  question: "¿Quién sufre más: 7 días o 20+ días shelf life?",
  
  kpis: [
    { v: "$4.40/kg", l: "Air Oct", d: "2025", up: false, c: "var(--cyan)" },
    { v: "$7.20/kg", l: "Air Ene", d: "2026 (+64%)", up: false, c: "var(--red)" },
    { v: "40-60%", l: "Quiebra", d: "Productores Flores", up: false, c: "var(--red)" },
    { v: "0%", l: "Impacto", d: "Cacao/Café", up: true, c: "var(--green)" }
  ],

  sparkChart: {
    title: "Costo flete aéreo Red Sea crisis Oct 2025 - Ene 2026",
    description: "Crisis de transporte: air freight +64%, maritime redirigido",
    values: [4.40, 4.85, 5.30, 5.75, 6.20, 6.65, 7.10, 7.20, 6.90, 6.50, 6.10, 5.70],
    color: "#ff3d71"
  },

  options: [
    {
      title: "Opción 1: Flores (7 días)",
      destination: "Shelf life: 7 días máx",
      price: "40% producción arruinada",
      color: "#ff3d71",
      border: "#ff3d71",
      highlights: ["Obligado air freight", "Air = 40% del costo", "40-60% productores quiebran"],
      recommended: false
    },
    {
      title: "Opción 2: Bananos (20 días)",
      destination: "Shelf life: 20 días",
      price: "Marítimo aún viable",
      color: "#f5c400",
      border: "#f5c400",
      highlights: ["Maritime redirigido + demora", "10-15% pérdida aceptable", "Impacto moderado"],
      recommended: false
    },
    {
      title: "Opción 3: Cacao/Café (180+ días)",
      destination: "Shelf life: 180+ días",
      price: "CERO impacto",
      color: "#06ffa5",
      border: "#06ffa5",
      highlights: ["Maritime standard", "Demora irrelevante", "RECOMENDADO"],
      recommended: true
    }
  ],

  narrative: `
    <h4>La respuesta correcta explicada</h4>
    <p><strong style="color: #06ffa5;">Cacao/Café (180+ días) sufren cero impacto - esta es la respuesta correcta.</strong></p>
    <p><strong>Crisis Red Sea Octubre 2025 - Enero 2026:</strong> Houthis bloquearon Suez. 3 opciones de rutas:</p>
    <ul>
      <li><strong>Ruta Suez (BLOQUEADA):</strong> 2 semanas normal (ya no disponible)</li>
      <li><strong>Cabo Buena Esperanza:</strong> 6-7 semanas = +40% costo (viable para long shelf life)</li>
      <li><strong>Air freight urgente:</strong> 48h entrega = +64% costo (insostenible para la mayoría)</li>
    </ul>
    <p><u>Impacto por shelf life:</u></p>
    <ul>
      <li><strong style="color: #ff3d71;">Flores (7 días):</strong> OBLIGADO air freight (+64% cost en margen 15-20% = -40-60% margen total). 40-60% productores quiebran en 3 meses.</li>
      <li><strong style="color: #f5c400;">Bananos (20 días):</strong> Maritime + demora aceptable (no se pudren). Impacto -5-10% tolerable.</li>
      <li><strong style="color: #06ffa5;">Cacao/Café (180+ días):</strong> Esperar 6 semanas = irrelevante. Zero impacto en precios.</li>
    </ul>
  `,

  recommendation: `
    <strong>🎯 Estrategia de supervivencia: Diversificación por shelf life</strong><br><br>
    <strong>Línea 1 (Para productores FLORES en crisis mode):</strong> Negociar contratos con air freight incluido = buyer absorbe cost extra. Integración vertical: construir cooler local + packaging optimizado (-10% volumen, +15% valor). Buscar buyer EU más cercano (Países Bajos vs Italia) = ahorra 2-3 días de transporte.<br><br>
    <strong>Línea 2 (Para productores BANANOS):</strong> Forward contracts con maritime rates fijo + contingencia air freight. Precio garantizado permite absorber +$1.50/MT costo extra si air es necesario.<br><br>
    <strong>Línea 3 (Para productores CACAO/CAFÉ - ideal):</strong> Estrategia hedging: Compra tierra donde crecer flores + cacao simultaneamente. Diversificación natural = si crisis logística (como Red Sea), flores pueden ir air, cacao va maritime. Portfolio balanceado por shelf life = resistencia a cualquier shock.<br><br>
    <strong>Línea 4 (Conclusión):</strong> <strong style="color: #06ffa5;">Monocultivo + shelf life corto = máximo riesgo.</strong> Portfolio diversificado por duración de productos = supervivencia garantizada incluso en crisis logísticas 6+ meses.
  `,

  source: "IATA Freight, Freightos Air Cargo Index, Maersk Shipping"
};