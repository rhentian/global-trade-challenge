import { useState, useEffect, useRef } from 'react';
import { QUESTIONS, GROQ_MODEL, GROQ_URL } from './tradeData.js';
import { dashboardQ1 } from "./dashboards/dashboardQ1.jsx";
import { dashboardQ2 } from "./dashboards/dashboardQ2.jsx";
import { dashboardQ3 } from "./dashboards/dashboardQ3.jsx";
import { dashboardQ4 } from "./dashboards/dashboardQ4.jsx";
import { dashboardQ5 } from "./dashboards/dashboardQ5.jsx";
import { dashboardQ6 } from "./dashboards/dashboardQ6.jsx";
import { dashboardQ7 } from "./dashboards/dashboardQ7.jsx";
import { dashboardQ8 } from "./dashboards/dashboardQ8.jsx";
import './App.css';

const TMAX = 45;
const TOTAL_ROUNDS = 1;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}



// ── SVG CHARTS ──

function KPIGrid({ kpis }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '0.55rem',
      marginBottom: '0.9rem'
    }}>
      {kpis.map((k, i) => (
        <div key={i} style={{
          background: '#0b0e22',
          border: '1px solid #1e2850',
          borderRadius: '10px',
          padding: '0.72rem 0.65rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `2px solid ${k.c || '#00d4ff'}`
        }}>
          <div style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '1.12rem',
            fontWeight: 700,
            marginBottom: '0.09rem',
            color: k.c || '#00d4ff',
            lineHeight: 1.2
          }}>
            {k.v}
          </div>
          <div style={{
            fontSize: '0.55rem',
            fontWeight: 600,
            color: '#4a5a90',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            lineHeight: 1.3
          }}>
            {k.l}
          </div>
          <div style={{
            fontSize: '0.58rem',
            fontWeight: 400,
            marginTop: '0.07rem',
            lineHeight: 1.3,
            color: k.up ? '#00e676' : '#ff3d71'
          }}>
            {k.d}
          </div>
        </div>
      ))}
    </div>
  );
}

function BarChartSVG({ title, data, description }) {
  const maxValue = Math.max(...data.map(d => d[1]));

  return (
    <div style={{
      background: '#0b0e22',
      border: '1px solid #1e2850',
      borderRadius: '10px',
      padding: '0.92rem',
      marginBottom: '0.88rem'
    }}>
      <div style={{
        fontSize: '0.6rem',
        fontWeight: 700,
        color: '#4a5a90',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '0.25rem',
        lineHeight: 1.35
      }}>
        {title}
      </div>
      {description && (
        <div style={{
          fontSize: '0.52rem',
          color: '#6a7aaa',
          marginBottom: '0.55rem',
          fontWeight: 400,
          lineHeight: 1.4
        }}>
          {description}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.42rem' }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.48rem' }}>
            <div style={{
              minWidth: '82px',
              fontSize: '0.63rem',
              fontWeight: 500,
              color: '#8899cc',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {d[0]}
            </div>
            <div style={{
              flex: 1,
              height: '16px',
              background: '#0f132a',
              borderRadius: '3px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                height: '100%',
                borderRadius: '3px',
                background: d[2],
                width: `${(d[1] / maxValue) * 100}%`,
                transition: 'width 1.1s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '4px'
              }}>
                <span style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  color: '#fff',
                  whiteSpace: 'nowrap'
                }}>
                  {d[1]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SparkChart({ title, values, color, description }) {
  const W = 500, H = 58, p = 7;
  const mn = Math.min(...values);
  const mx = Math.max(...values);
  const rng = mx - mn || 1;

  const points = values
    .map((v, i) => `${p + (i / (values.length - 1)) * (W - p * 2)},${H - p - ((v - mn) / rng) * (H - p * 2)}`)
    .join(' ');

  const area = `${p},${H} ${points} ${p + (W - p * 2)},${H}`;
  const years = ['Ene 25', 'Feb 25', 'Mar 25', 'Abr 25', 'May 25', 'Jun 25', 'Jul 25', 'Ago 25', 'Sep 25', 'Oct 25', 'Nov 25', 'Dic 25', 'Ene 26', 'Feb 26', 'Mar 26', 'Abr 26', 'May 26', 'Jun 26'].slice(0, values.length);

  return (
    <div style={{
      background: '#0b0e22',
      border: '1px solid #1e2850',
      borderRadius: '10px',
      padding: '0.92rem',
      marginBottom: '0.88rem'
    }}>
      <div style={{
        fontSize: '0.6rem',
        fontWeight: 700,
        color: '#4a5a90',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '0.25rem'
      }}>
        {title}
      </div>
      {description && (
        <div style={{
          fontSize: '0.52rem',
          color: '#6a7aaa',
          marginBottom: '0.55rem',
          fontWeight: 400,
          lineHeight: 1.4
        }}>
          {description}
        </div>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: '62px', overflow: 'visible' }}>
        <defs>
          <linearGradient id={`sg_${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity=".28" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={area} fill={`url(#sg_${color})`} />
        <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
        {values.map((v, i) => {
          const x = p + (i / (values.length - 1)) * (W - p * 2);
          const y = H - p - ((v - mn) / rng) * (H - p * 2);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="3.5" fill={color} stroke="#0b0e22" strokeWidth="1.5" />
              <text x={x} y={y - 8} textAnchor="middle" fill={color} fontSize="8" fontWeight="600" fontFamily="'Poppins', sans-serif">
                {v}
              </text>
            </g>
          );
        })}
        {years.map((yr, i) => {
          const x = p + (i / (values.length - 1)) * (W - p * 2);
          return (
            <text key={i} x={x} y={H + 1} textAnchor="middle" fill="#4a5a90" fontSize="7.5" fontFamily="'Poppins', sans-serif">
              {yr}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

function CompMeter({ title, data, description }) {
  const maxValue = 100;

  return (
    <div style={{
      background: '#0b0e22',
      border: '1px solid #1e2850',
      borderRadius: '10px',
      padding: '0.92rem',
      marginBottom: '0.88rem'
    }}>
      <div style={{
        fontSize: '0.6rem',
        fontWeight: 700,
        color: '#4a5a90',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '0.25rem'
      }}>
        {title}
      </div>
      {description && (
        <div style={{
          fontSize: '0.52rem',
          color: '#6a7aaa',
          marginBottom: '0.55rem',
          fontWeight: 400,
          lineHeight: 1.4
        }}>
          {description}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.42rem' }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.52rem' }}>
            <div style={{
              fontSize: '0.63rem',
              fontWeight: 500,
              color: '#8899cc',
              minWidth: '74px'
            }}>
              {d[0]}
            </div>
            <div style={{
              flex: 1,
              height: '8px',
              background: '#0f132a',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                borderRadius: '4px',
                background: d[2],
                width: `${d[1]}%`,
                transition: 'width 1.1s ease'
              }} />
            </div>
            <div style={{
              fontSize: '0.6rem',
              fontWeight: 600,
              color: '#e8eeff',
              minWidth: '28px',
              textAlign: 'right'
            }}>
              {d[1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DonutChartSVG({ title, data, description }) {
  const W = 500;
  const H = 300;
  const cx = W / 2;
  const cy = H / 2;
  const outerRadius = 70;
  const innerRadius = 45;

  // Calcular ángulos
  let currentAngle = -90;
  const slices = data.map(item => {
    const sliceAngle = (item.value / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;
    currentAngle = endAngle;
    return { ...item, startAngle, endAngle, sliceAngle };
  });

  // Función para convertir ángulo a coordenadas
  const polarToCartesian = (angle, radius) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad)
    };
  };

  return (
    <div style={{
      background: '#0b0e22',
      border: '1px solid #1e2850',
      borderRadius: '10px',
      padding: '0.92rem',
      marginBottom: '0.88rem'
    }}>
      <div style={{
        fontSize: '0.6rem',
        fontWeight: 700,
        color: '#4a5a90',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '0.25rem'
      }}>
        {title}
      </div>
      {description && (
        <div style={{
          fontSize: '0.52rem',
          color: '#6a7aaa',
          marginBottom: '0.55rem',
          fontWeight: 400,
          lineHeight: 1.4
        }}>
          {description}
        </div>
      )}
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {/* Gráfico SVG */}
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '280px', height: '180px' }}>
          {slices.map((slice, i) => {
            const outerStartPos = polarToCartesian(slice.startAngle, outerRadius);
            const outerEndPos = polarToCartesian(slice.endAngle, outerRadius);
            const innerStartPos = polarToCartesian(slice.startAngle, innerRadius);
            const innerEndPos = polarToCartesian(slice.endAngle, innerRadius);
            const largeArc = slice.sliceAngle > 180 ? 1 : 0;

            const pathData = [
              `M ${outerStartPos.x} ${outerStartPos.y}`,
              `A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${outerEndPos.x} ${outerEndPos.y}`,
              `L ${innerEndPos.x} ${innerEndPos.y}`,
              `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerStartPos.x} ${innerStartPos.y}`,
              'Z'
            ].join(' ');

            // Posición para label
            const labelAngle = slice.startAngle + slice.sliceAngle / 2;
            const labelRadius = (outerRadius + innerRadius) / 2;
            const labelPos = polarToCartesian(labelAngle, labelRadius);

            return (
              <g key={i}>
                <path d={pathData} fill={slice.color} stroke="#0b0e22" strokeWidth="1.5" />
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#fff"
                  fontSize="11"
                  fontWeight="700"
                  fontFamily="'Poppins', sans-serif"
                >
                  {slice.value}%
                </text>
              </g>
            );
          })}
        </svg>

        {/* Leyenda */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {slices.map((slice, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '2px',
                backgroundColor: slice.color
              }} />
              <div style={{
                fontSize: '0.65rem',
                fontWeight: 500,
                color: '#8899cc',
                lineHeight: 1.3
              }}>
                <strong style={{ color: '#e8eeff' }}>{slice.value}%</strong> {slice.label.replace(/\n/g, ' ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente: Dashboard de Drivers
function DriversDashboard({ title, description, data }) {
  const maxImpact = Math.max(...data.map(d => Math.abs(d.impact)));

  return (
    <div style={{
      background: '#0b0e22',
      border: '1px solid #1e2850',
      borderRadius: '10px',
      padding: '0.92rem',
      marginBottom: '0.88rem'
    }}>
      <div style={{
        fontSize: '0.6rem',
        fontWeight: 700,
        color: '#4a5a90',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '0.25rem'
      }}>
        {title}
      </div>
      {description && (
        <div style={{
          fontSize: '0.52rem',
          color: '#6a7aaa',
          marginBottom: '0.55rem',
          fontWeight: 400,
          lineHeight: 1.4
        }}>
          {description}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.42rem' }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.48rem' }}>
            <div style={{
              minWidth: '82px',
              fontSize: '0.63rem',
              fontWeight: 500,
              color: '#8899cc',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {d.label}
            </div>
            <div style={{
              flex: 1,
              height: '16px',
              background: '#0f132a',
              borderRadius: '3px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                height: '100%',
                borderRadius: '3px',
                background: d.color,
                width: `${(Math.abs(d.impact) / maxImpact) * 100}%`,
                transition: 'width 1.1s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: d.impact >= 0 ? 'flex-end' : 'flex-start',
                paddingRight: d.impact >= 0 ? '4px' : '0px',
                paddingLeft: d.impact < 0 ? '4px' : '0px'
              }}>
                <span style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  color: '#fff',
                  whiteSpace: 'nowrap'
                }}>
                  {d.impact > 0 ? '+' : ''}{d.impact}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente: Dashboard de Pronóstico de Demanda
function ForecastDashboard({ title, description, data }) {
  const allValues = [...data.historical.map(d => d.demand), data.forecast.demand];
  const minDemand = Math.min(...allValues);
  const maxDemand = Math.max(...allValues);
  const range = maxDemand - minDemand;

  // Calcular posiciones Y normalizadas (0-100)
  const normalizeY = (val) => {
    return ((val - minDemand) / range) * 100;
  };

  const W = 500;
  const H = 120;
  const padding = 30;
  const graphW = W - padding * 2;
  const graphH = H - padding * 2;

  // Puntos históricos
  const historicalPoints = data.historical.map((d, i) => {
    const x = padding + (i / (data.historical.length - 1)) * graphW;
    const y = padding + graphH - (normalizeY(d.demand) / 100) * graphH;
    return { ...d, x, y };
  });

  // Punto de predicción
  const forecastPoint = {
    x: padding + (data.historical.length / (data.historical.length - 1)) * graphW,
    y: padding + graphH - (normalizeY(data.forecast.demand) / 100) * graphH
  };

  // Banda de confianza
  const upperBandY = padding + graphH - (normalizeY(data.confidenceBand.upper) / 100) * graphH;
  const lowerBandY = padding + graphH - (normalizeY(data.confidenceBand.lower) / 100) * graphH;

  const historicalPath = historicalPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <div style={{
      background: '#0b0e22',
      border: '1px solid #1e2850',
      borderRadius: '10px',
      padding: '0.92rem',
      marginBottom: '0.88rem'
    }}>
      <div style={{
        fontSize: '0.6rem',
        fontWeight: 700,
        color: '#4a5a90',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '0.25rem'
      }}>
        {title}
      </div>
      {description && (
        <div style={{
          fontSize: '0.52rem',
          color: '#6a7aaa',
          marginBottom: '0.55rem',
          fontWeight: 400,
          lineHeight: 1.4
        }}>
          {description}
        </div>
      )}
      
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: '120px', overflow: 'visible' }}>
        {/* Banda de confianza */}
        <rect
          x={padding}
          y={upperBandY}
          width={graphW}
          height={lowerBandY - upperBandY}
          fill="#00d4ff"
          opacity="0.1"
          stroke="none"
        />
        
        {/* Línea superior banda */}
        <line
          x1={padding}
          y1={upperBandY}
          x2={padding + graphW}
          y2={upperBandY}
          stroke="#00d4ff"
          strokeWidth="1"
          strokeDasharray="4,2"
          opacity="0.4"
        />
        
        {/* Línea inferior banda */}
        <line
          x1={padding}
          y1={lowerBandY}
          x2={padding + graphW}
          y2={lowerBandY}
          stroke="#00d4ff"
          strokeWidth="1"
          strokeDasharray="4,2"
          opacity="0.4"
        />

        {/* Línea histórica */}
        <path
          d={historicalPath}
          fill="none"
          stroke="#7c4dff"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Línea de predicción (punteada) */}
        <line
          x1={historicalPoints[historicalPoints.length - 1].x}
          y1={historicalPoints[historicalPoints.length - 1].y}
          x2={forecastPoint.x}
          y2={forecastPoint.y}
          stroke="#00e676"
          strokeWidth="2.5"
          strokeDasharray="5,3"
        />

        {/* Puntos históricos */}
        {historicalPoints.map((p, i) => (
          <g key={`hist-${i}`}>
            <circle cx={p.x} cy={p.y} r="3.5" fill="#7c4dff" stroke="#0b0e22" strokeWidth="1.5" />
            <text
              x={p.x}
              y={p.y - 12}
              textAnchor="middle"
              fill="#7c4dff"
              fontSize="9"
              fontWeight="600"
              fontFamily="'Poppins', sans-serif"
            >
              {p.demand}MT
            </text>
            <text
              x={p.x}
              y={H - 8}
              textAnchor="middle"
              fill="#4a5a90"
              fontSize="8"
              fontFamily="'Poppins', sans-serif"
            >
              {p.year}
            </text>
          </g>
        ))}

        {/* Punto de predicción */}
        <g>
          <circle
            cx={forecastPoint.x}
            cy={forecastPoint.y}
            r="4"
            fill="#00e676"
            stroke="#0b0e22"
            strokeWidth="1.5"
          />
          <text
            x={forecastPoint.x}
            y={forecastPoint.y - 15}
            textAnchor="middle"
            fill="#00e676"
            fontSize="10"
            fontWeight="700"
            fontFamily="'Poppins', sans-serif"
          >
            {data.forecast.demand}MT
          </text>
          <text
            x={forecastPoint.x}
            y={H - 8}
            textAnchor="middle"
            fill="#4a5a90"
            fontSize="8"
            fontFamily="'Poppins', sans-serif"
          >
            Feb 2026
          </text>
        </g>
      </svg>

      {/* Leyenda */}
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.8rem', fontSize: '0.65rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{ width: '10px', height: '2px', backgroundColor: '#7c4dff' }} />
          <span style={{ color: '#8899cc' }}>Histórico</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{ width: '10px', height: '2px', backgroundColor: '#00e676', backgroundImage: 'repeating-linear-gradient(90deg, #00e676 0, #00e676 3px, transparent 3px, transparent 6px)' }} />
          <span style={{ color: '#8899cc' }}>Predicción</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#00d4ff', opacity: 0.1, border: '1px solid #00d4ff' }} />
          <span style={{ color: '#8899cc' }}>Banda Confianza ±8%</span>
        </div>
      </div>
    </div>
  );
}

// Componente: Line Chart - Proyección 5 años
function ProjectionLineChart({ title, description, data }) {
  const W = 500;
  const H = 150;
  const padding = 40;
  const graphW = W - padding * 2;
  const graphH = H - padding * 2;

  // Encontrar min/max para normalización
  const allValues = [...data.buyerA, ...data.buyerB];
  const minVal = Math.min(...allValues);
  const maxVal = Math.max(...allValues);
  const range = maxVal - minVal || 1;

  // Normalizar valores (0-100)
  const normalizeY = (val) => {
    return ((val - minVal) / range) * 100;
  };

  // Generar puntos para Comprador A
  const pointsA = data.buyerA.map((val, i) => {
    const x = padding + (i / (data.buyerA.length - 1)) * graphW;
    const y = padding + graphH - (normalizeY(val) / 100) * graphH;
    return { x, y, val };
  });

  // Generar puntos para Comprador B
  const pointsB = data.buyerB.map((val, i) => {
    const x = padding + (i / (data.buyerB.length - 1)) * graphW;
    const y = padding + graphH - (normalizeY(val) / 100) * graphH;
    return { x, y, val };
  });

  // Path strings
  const pathA = pointsA.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const pathB = pointsB.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <div style={{
      background: '#0b0e22',
      border: '1px solid #1e2850',
      borderRadius: '10px',
      padding: '0.92rem',
      marginBottom: '0.88rem'
    }}>
      <div style={{
        fontSize: '0.6rem',
        fontWeight: 700,
        color: '#4a5a90',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '0.25rem'
      }}>
        {title}
      </div>
      {description && (
        <div style={{
          fontSize: '0.52rem',
          color: '#6a7aaa',
          marginBottom: '0.55rem',
          fontWeight: 400,
          lineHeight: 1.4
        }}>
          {description}
        </div>
      )}

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: '140px', overflow: 'visible' }}>
        {/* Grid de referencia */}
        <line x1={padding} y1={padding + graphH / 2} x2={padding + graphW} y2={padding + graphH / 2} 
              stroke="#1e2850" strokeWidth="1" strokeDasharray="2,2" opacity="0.3" />

        {/* Línea Comprador A (roja, volátil) */}
        <path d={pathA} fill="none" stroke={data.colorA} strokeWidth="2.5" strokeLinejoin="round" />
        
        {/* Línea Comprador B (verde, estable) */}
        <path d={pathB} fill="none" stroke={data.colorB} strokeWidth="2.5" strokeLinejoin="round" />

        {/* Puntos Comprador A */}
        {pointsA.map((p, i) => (
          <g key={`a-${i}`}>
            <circle cx={p.x} cy={p.y} r="3" fill={data.colorA} stroke="#0b0e22" strokeWidth="1" />
            <text x={p.x} y={p.y - 10} textAnchor="middle" fill={data.colorA} 
                  fontSize="8" fontWeight="600" fontFamily="'Poppins', sans-serif">
              {p.val}
            </text>
          </g>
        ))}

        {/* Puntos Comprador B */}
        {pointsB.map((p, i) => (
          <g key={`b-${i}`}>
            <circle cx={p.x} cy={p.y} r="3" fill={data.colorB} stroke="#0b0e22" strokeWidth="1" />
            <text x={p.x} y={p.y - 10} textAnchor="middle" fill={data.colorB} 
                  fontSize="8" fontWeight="600" fontFamily="'Poppins', sans-serif">
              {p.val}
            </text>
          </g>
        ))}

        {/* Labels de años en X */}
        {data.years.map((year, i) => {
          const x = padding + (i / (data.years.length - 1)) * graphW;
          return (
            <text key={i} x={x} y={H - 10} textAnchor="middle" fill="#4a5a90" 
                  fontSize="8" fontFamily="'Poppins', sans-serif">
              {year}
            </text>
          );
        })}
      </svg>

      {/* Leyenda */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.8rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <div style={{ width: '12px', height: '2px', backgroundColor: data.colorA, marginTop: '4px' }} />
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#e8eeff' }}>{data.labelA}</div>
            <div style={{ fontSize: '0.55rem', color: '#6a7aaa' }}>{data.descA}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <div style={{ width: '12px', height: '2px', backgroundColor: data.colorB, marginTop: '4px' }} />
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#e8eeff' }}>{data.labelB}</div>
            <div style={{ fontSize: '0.55rem', color: '#6a7aaa' }}>{data.descB}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente: Tabla Rutas Logísticas
function RoutesTable({ title, description, data }) {
  return (
    <div style={{
      background: '#0b0e22',
      border: '1px solid #1e2850',
      borderRadius: '10px',
      padding: '0.92rem',
      marginBottom: '0.88rem'
    }}>
      <div style={{
        fontSize: '0.6rem',
        fontWeight: 700,
        color: '#4a5a90',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '0.25rem'
      }}>
        {title}
      </div>
      {description && (
        <div style={{
          fontSize: '0.52rem',
          color: '#6a7aaa',
          marginBottom: '0.55rem',
          fontWeight: 400,
          lineHeight: 1.4
        }}>
          {description}
        </div>
      )}

      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '0.65rem',
          color: '#8899cc'
        }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1e2850' }}>
              <th style={{
                textAlign: 'left',
                padding: '0.5rem',
                fontWeight: 700,
                color: '#4a5a90',
                textTransform: 'uppercase',
                fontSize: '0.55rem'
              }}>
                Ruta
              </th>
              <th style={{
                textAlign: 'center',
                padding: '0.5rem',
                fontWeight: 700,
                color: '#4a5a90',
                textTransform: 'uppercase',
                fontSize: '0.55rem'
              }}>
                Tiempo
              </th>
              <th style={{
                textAlign: 'center',
                padding: '0.5rem',
                fontWeight: 700,
                color: '#4a5a90',
                textTransform: 'uppercase',
                fontSize: '0.55rem'
              }}>
                Costo
              </th>
              <th style={{
                textAlign: 'center',
                padding: '0.5rem',
                fontWeight: 700,
                color: '#4a5a90',
                textTransform: 'uppercase',
                fontSize: '0.55rem'
              }}>
                Viable
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((route, i) => (
              <tr key={i} style={{
                borderBottom: '1px solid #1e2850',
                backgroundColor: route.viable ? 'rgba(6, 255, 165, 0.05)' : 'rgba(255, 61, 113, 0.05)'
              }}>
                <td style={{ padding: '0.5rem', fontWeight: 500, color: '#e8eeff' }}>
                  {route.name}
                </td>
                <td style={{ padding: '0.5rem', textAlign: 'center' }}>
                  {route.days} días
                </td>
                <td style={{ padding: '0.5rem', textAlign: 'center' }}>
                  ${route.cost.toLocaleString()}
                </td>
                <td style={{
                  padding: '0.5rem',
                  textAlign: 'center',
                  color: route.viable ? '#06ffa5' : '#ff3d71',
                  fontWeight: 700
                }}>
                  {route.viable ? '✅ SÍ' : '❌ NO'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{
        marginTop: '0.55rem',
        fontSize: '0.52rem',
        color: '#6a7aaa',
        fontStyle: 'italic'
      }}>
        Objetivo: Comparar opciones de transporte por tiempo y costo.
      </div>
    </div>
  );
}

// Componente: Margen por Escenario
function MarginByScenarioChart({ title, description, data }) {
  const maxMargin = Math.max(...data.map(d => Math.abs(d.margin)));

  return (
    <div style={{
      background: '#0b0e22',
      border: '1px solid #1e2850',
      borderRadius: '10px',
      padding: '0.92rem',
      marginBottom: '0.88rem'
    }}>
      <div style={{
        fontSize: '0.6rem',
        fontWeight: 700,
        color: '#4a5a90',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '0.25rem'
      }}>
        {title}
      </div>
      {description && (
        <div style={{
          fontSize: '0.52rem',
          color: '#6a7aaa',
          marginBottom: '0.55rem',
          fontWeight: 400,
          lineHeight: 1.4
        }}>
          {description}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.42rem' }}>
        {data.map((d, i) => {
          const isNegative = d.margin < 0;
          const percentage = (Math.abs(d.margin) / maxMargin) * 100;

          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.48rem' }}>
              <div style={{
                minWidth: '100px',
                fontSize: '0.63rem',
                fontWeight: 500,
                color: '#8899cc',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                {d.scenario}
              </div>
              <div style={{
                flex: 1,
                height: '16px',
                background: '#0f132a',
                borderRadius: '3px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isNegative ? 'flex-start' : 'flex-end'
              }}>
                {d.margin !== 0 && (
                  <div style={{
                    height: '100%',
                    borderRadius: '3px',
                    background: d.color,
                    width: `${percentage}%`,
                    transition: 'width 1.1s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isNegative ? 'flex-start' : 'flex-end',
                    paddingRight: isNegative ? '0px' : '4px',
                    paddingLeft: isNegative ? '4px' : '0px'
                  }}>
                    <span style={{
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      color: '#fff',
                      whiteSpace: 'nowrap'
                    }}>
                      {d.margin >= 0 ? '+' : ''}{(d.margin / 1000).toFixed(0)}k
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: '0.55rem',
        fontSize: '0.52rem',
        color: '#6a7aaa',
        fontStyle: 'italic'
      }}>
        Objetivo: Ver cuál opción genera menor pérdida o mayor utilidad.
      </div>
    </div>
  );
}

function DashboardView({ data }) {
  if (!data) return null;

  return (
    <div style={{
      background: 'rgba(201,168,76,0.06)',
      border: '1px solid rgba(201,168,76,0.2)',
      borderRadius: '8px',
      padding: '1.5rem',
      marginTop: '1.5rem',
      animation: 'slideInUp 0.5s ease'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ color: '#c9a84c', margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700 }}>
          {data.title}
        </h3>
        <p style={{ color: '#999', fontSize: '12px', margin: 0 }}>
          {data.subtitle}
        </p>
      </div>

      {data.kpis && <KPIGrid kpis={data.kpis} />}

      {data.barChart && (
        <BarChartSVG 
          title={data.barChart.title} 
          data={data.barChart.data} 
          description={data.barChart.description}
        />
      )}

      {data.marginByProcessing && (
        <MarginByProcessingChart 
          title={data.marginByProcessing.title} 
          data={data.marginByProcessing.data}
          description={data.marginByProcessing.description}
        />
      )}

      {data.evDemand && (
        <EVDemandChart 
          title={data.evDemand.title} 
          data={data.evDemand.data}
          description={data.evDemand.description}
        />
      )}

      {data.valueChainStretch && (
        <ValueChainStretchChart 
          title={data.valueChainStretch.title} 
          data={data.valueChainStretch.data}
          description={data.valueChainStretch.description}
        />
      )}

      {data.sparkChart && (
        <SparkChart 
          title={data.sparkChart.title} 
          values={data.sparkChart.values} 
          color={data.sparkChart.color}
          description={data.sparkChart.description}
        />
      )}

      {data.donutChart && (
        <DonutChartSVG 
          title={data.donutChart.title} 
          data={data.donutChart.data}
          description={data.donutChart.description}
        />
      )}

      {data.driversData && (
        <DriversDashboard 
          title={data.driversData.title} 
          data={data.driversData.data}
          description={data.driversData.description}
        />
      )}

      {data.forecastData && (
        <ForecastDashboard 
          title={data.forecastData.title} 
          data={data.forecastData.data}
          description={data.forecastData.description}
        />
      )}

      {data.projectionChart && (
        <ProjectionLineChart 
          title={data.projectionChart.title} 
          data={data.projectionChart.data}
          description={data.projectionChart.description}
        />
      )}

      {data.routesTable && (
        <RoutesTable 
          title={data.routesTable.title} 
          data={data.routesTable.data}
          description={data.routesTable.description}
        />
      )}

      {data.marginScenarios && (
        <MarginByScenarioChart 
          title={data.marginScenarios.title} 
          data={data.marginScenarios.data}
          description={data.marginScenarios.description}
        />
      )}

      {data.compMeter && (
        <CompMeter 
          title={data.compMeter.title} 
          data={data.compMeter.data}
          description={data.compMeter.description}
        />
      )}

      {data.narrative && (
        <div style={{
          fontSize: '0.85rem',
          fontWeight: 400,
          lineHeight: 1.8,
          color: '#8899cc',
          marginBottom: '0.92rem'
        }} dangerouslySetInnerHTML={{ __html: data.narrative }} />
      )}

      {data.recommendation && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(0,230,118,0.07), rgba(0,212,255,0.04))',
          border: '1px solid rgba(0,230,118,0.2)',
          borderRadius: '10px',
          padding: '0.92rem 1.05rem',
          marginBottom: '0.82rem'
        }}>
          <div style={{
            fontSize: '0.6rem',
            fontWeight: 700,
            color: '#00e676',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '0.36rem'
          }}>
            ✅ Recommended Action
          </div>
          <div style={{
            fontSize: '0.86rem',
            fontWeight: 400,
            lineHeight: 1.65,
            color: '#e8eeff'
          }} dangerouslySetInnerHTML={{ __html: data.recommendation }} />
        </div>
      )}

      <p style={{ color: '#666', fontSize: '11px', marginTop: '1rem', marginBottom: 0 }}>
        Source: {data.source}
      </p>
    </div>
  );
}

// ── FETCH DASHBOARD ──
function fetchDashboardFromGroq(question, groqKey) {
  const dashboards = {
    1: dashboardQ1, 2: dashboardQ2, 3: dashboardQ3, 4: dashboardQ4,
    5: dashboardQ5, 6: dashboardQ6, 7: dashboardQ7, 8: dashboardQ8
  };
  return dashboards[question.id] || null;
}

// ── SCREENS ──

function Splash({ onStart }) {
  return (
    <div className="screen splash">
      <div className="orb o1" /><div className="orb o2" />
      <div className="splash-content">
        <div className="eyebrow"><span className="dot" />Economics of Globalization · Intercultural Day 2026</div>
        <h1 className="splash-title">GLOBAL TRADE</h1>
        <h2 className="splash-subtitle">Challenge</h2>

        <p className="splash-tagline">
          Real export cases. Real market data.<br />
          <strong>Fastest correct answer wins.</strong>
        </p>
        <div className="splash-stats">
          {[['45s', 'Per Question'], ['1', 'Round'], ['1', 'Winner']].map(([n, l]) => (
            <div key={l} className="stat"><div className="stat-n">{n}</div><div className="stat-l">{l}</div></div>
          ))}
        </div>
        <button className="btn-gold btn-interactive" onClick={onStart}>⚔ ENTER THE ARENA</button>
        <p className="splash-note">Speed · Accuracy · Intelligence · Globalization</p>
      </div>
    </div>
  );
}

function Setup({ onLaunch }) {
  const [p1, setP1] = useState('Player 1');
  const [p2, setP2] = useState('Player 2');
  return (
    <div className="screen setup">
      <div className="setup-wrap">
        <h2 className="setup-title">Register Competitors</h2>
        <p className="setup-sub">Enter player names. Same question — answers hidden until both respond.</p>
        <div className="players-grid">
          <div className="player-card player-card-interactive">
            <span className="pc-av">🌍</span>
            <div className="pc-lbl">Player 1</div>
            <input className="pc-inp" value={p1} onChange={e => setP1(e.target.value)} maxLength={18} placeholder="Enter name…" />
          </div>
          <div className="player-card player-card-interactive">
            <span className="pc-av">🏆</span>
            <div className="pc-lbl">Player 2</div>
            <input className="pc-inp" value={p2} onChange={e => setP2(e.target.value)} maxLength={18} placeholder="Enter name…" />
          </div>
        </div>
        <div className="rules-box">
          <div className="rules-title">Rules</div>
          <ul>
            {[
              'Same question for both — one at a time',
              'Correct answer + fastest time = winner',
              'After the reveal: press GENERATE AI DASHBOARD for market analysis'
            ].map(r => <li key={r}>{r}</li>)}
          </ul>
        </div>
        <button className="btn-gold btn-interactive" onClick={() => onLaunch(p1 || 'Player 1', p2 || 'Player 2')}>LAUNCH MATCH</button>
      </div>
    </div>
  );
}

function ReadScreen({ question, playerName, roundNum, onStart, isPlayer1 }) {
  return (
    <div className="screen read-screen">
      <div className="game-wrap">
        <div className="now-playing">
          <span className="np-dot" />
          <span className="np-label">NOW ANSWERING:</span>
          <span className="np-name">{playerName.toUpperCase()}</span>
        </div>

        {isPlayer1 && (
          <div className="q-card q-card-interactive">
            <div className="q-topic"><span className="q-flag">{question.flag}</span>{question.prod}</div>
            <div className="q-text">{question.q}</div>
          </div>
        )}

        <p className="read-sub">Read carefully. Press START when ready to answer.</p>
        <button className="btn-gold btn-interactive" onClick={onStart}>START ⚔</button>
      </div>
    </div>
  );
}

function GameScreen({ question, playerName, roundNum, p1Score, p2Score, p1Name, p2Name, onSubmit }) {
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TMAX);
  const startTime = useRef(Date.now());
  const timerRef = useRef(null);
  const CIRC = 2 * Math.PI * 21;

  useEffect(() => {
    startTime.current = Date.now();
    setTimeLeft(TMAX);
    setSelected(null);
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          onSubmit(-1, TMAX);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [question]);

  function handleSubmit() {
    if (selected === null) return;
    clearInterval(timerRef.current);
    const elapsed = (Date.now() - startTime.current) / 1000;
    onSubmit(selected, elapsed);
  }

  const pct = timeLeft / TMAX;
  const offset = CIRC * (1 - pct);
  const col = timeLeft <= 5 ? '#ff3d71' : timeLeft <= 10 ? '#ff9100' : '#00d4ff';

  return (
    <div className="screen game-screen">
      <div className="game-wrap">
        <div className="scoreboard">
          <div className="sb-player">
            <div className="sb-name">{p1Name}</div>
            <div className="sb-score">{p1Score}</div>
          </div>
          <div className="sb-mid">
            <div className="sb-round-lbl">ROUND</div>
            <div className="sb-round-num">{roundNum}/{TOTAL_ROUNDS}</div>
          </div>
          <div className="sb-player">
            <div className="sb-name">{p2Name}</div>
            <div className="sb-score">{p2Score}</div>
          </div>
        </div>

        <div className="now-playing">
          <span className="np-dot" />
          <span className="np-label">NOW ANSWERING:</span>
          <span className="np-name">{playerName.toUpperCase()}</span>
        </div>

        <div className="timer-row">
          <div className="timer-track">
            <div className="timer-fill" style={{
              width: `${pct * 100}%`,
              background: col
            }} />
          </div>
          <div className="timer-ring">
            <svg viewBox="0 0 48 48" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="24" cy="24" r="21" fill="none" stroke="#1a1a1a" strokeWidth="4" />
              <circle cx="24" cy="24" r="21" fill="none" stroke={col} strokeWidth="4"
                strokeLinecap="round" strokeDasharray={CIRC} strokeDashoffset={offset}
                style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s' }} />
            </svg>
            <div className="timer-num" style={{ color: col }}>{timeLeft}</div>
          </div>
        </div>

        <div className="q-card q-card-interactive">
          <div className="q-topic"><span className="q-flag">{question.flag}</span>{question.prod}</div>
          <div className="q-text">{question.q}</div>
        </div>

        <div className="opts-grid">
          {question.opts.map((o, i) => (
            <button key={i} className={`opt opt-interactive ${selected === i ? 'sel' : ''}`} onClick={() => setSelected(i)}>
              <span className="opt-l">{o.l}</span>
              <span className="opt-txt">{o.t}</span>
            </button>
          ))}
        </div>

        <button className="btn-gold btn-submit btn-interactive" onClick={handleSubmit} disabled={selected === null}>
          {selected === null ? 'SELECT AN ANSWER FIRST' : 'LOCK IN ANSWER →'}
        </button>
      </div>
    </div>
  );
}

function WaitingScreen({ p1Name, p2Name, onNext }) {
  return (
    <div className="screen waiting-screen">
      <div className="wait-icon">🔒</div>
      <div className="wait-title">ANSWER LOCKED</div>
      <div className="wait-sub">
        <strong>{p1Name}</strong> has answered.<br />
        Now it's <strong>{p2Name}</strong>'s turn.<br />
        Hand the device over without showing the screen.
      </div>
      <button className="btn-gold btn-interactive" onClick={onNext}>HAND IT OVER →</button>
    </div>
  );
}

function RevealScreen({
  question, roundNum,
  p1Name, p2Name,
  p1Answer, p1Time, p1Correct,
  p2Answer, p2Time, p2Correct,
  p1Score, p2Score,
  onContinue, groqKey, isTiebreaker,
  handleRunAI, dashboardData, showDashboard, chartLoading
}) {
  const p1opt = p1Answer >= 0 ? question.opts[p1Answer] : null;
  const p2opt = p2Answer >= 0 ? question.opts[p2Answer] : null;
  const correctOpt = question.opts[question.correct];

  let roundWinner = null;
  if (p1Correct && p2Correct) {
    const diff = Math.abs(p1Time - p2Time);
    roundWinner = diff < 0.3 ? 'tie' : p1Time < p2Time ? 'p1' : 'p2';
  } else if (p1Correct) { roundWinner = 'p1'; }
  else if (p2Correct) { roundWinner = 'p2'; }
  else { roundWinner = 'none'; }

  const isLastRound = roundNum >= TOTAL_ROUNDS && !isTiebreaker;
  const continueLabel = isTiebreaker
    ? 'START TIEBREAKER →'
    : isLastRound
    ? 'SEE FINAL RESULTS →'
    : `ROUND ${roundNum + 1} →`;

  return (
    <div className="screen reveal-screen">
      <div className="reveal-wrap">
        <div className="reveal-title">REVEAL</div>
        <div className="reveal-sub">Round {roundNum} of {TOTAL_ROUNDS}</div>

        {isTiebreaker && (
          <div className="tiebreaker-banner">
            <div className="tb-title">🔥 TIEBREAKER</div>
            <div className="tb-sub">Both answered correctly at the same time!</div>
          </div>
        )}

        <div className="score-banner">
          <div className="sb2-player">
            <span className="sb2-name">{p1Name}</span>
            <span className="sb2-score">{p1Score}</span>
          </div>
          <span className="sb2-sep">pts</span>
          <div className="sb2-player right">
            <span className="sb2-score">{p2Score}</span>
            <span className="sb2-name">{p2Name}</span>
          </div>
        </div>

        <div className="reveal-grid">
          {[
            { name: p1Name, opt: p1opt, time: p1Time, correct: p1Correct, isWinner: roundWinner === 'p1' },
            { name: p2Name, opt: p2opt, time: p2Time, correct: p2Correct, isWinner: roundWinner === 'p2' }
          ].map(({ name, opt, time, correct, isWinner }) => (
            <div key={name} className={`reveal-card reveal-card-interactive ${isWinner ? 'winner' : roundWinner === 'none' ? '' : 'loser'} ${roundWinner === 'tie' ? 'tied' : ''}`}>
              <div className="rc-name">{name}</div>
              <div className="rc-answer">{opt ? opt.t : '⏰ No answer'}</div>
              <div className="rc-time">{time ? time.toFixed(2) : '—'}<span className="rc-time-unit">s</span></div>
              <div className="rc-time-lbl">Response Time</div>
              <div className="rc-result">{correct ? '✅' : '❌'}</div>
              <div className={`rc-pts ${isWinner ? 'win' : ''}`}>
                {isWinner ? '🏆 +1 POINT' : roundWinner === 'tie' ? '🤝 TIE' : correct ? '✓ Correct' : '✗ Wrong'}
              </div>
            </div>
          ))}
        </div>

        <div className="correct-box">
          <span className="correct-ico">🎯</span>
          <div>
            <div className="correct-lbl">Correct Answer</div>
            <div className="correct-txt">{correctOpt.t}</div>
            <div className="correct-why">{correctOpt.explanation}</div>
          </div>
        </div>

        {!showDashboard ? (
          <button 
            className="btn-run-ai btn-interactive" 
            onClick={handleRunAI}
            disabled={chartLoading}
          >
            {chartLoading ? '⚙️ GENERATING DASHBOARD...' : '🤖 GENERATE AI DASHBOARD'}
          </button>
        ) : dashboardData ? (
          <DashboardView data={dashboardData} />
        ) : null}

        <button className="btn-gold btn-continue btn-interactive" onClick={() => onContinue(roundWinner)}>
          {continueLabel}
        </button>
      </div>
    </div>
  );
}

function FinalResults({ p1Name, p2Name, p1Score, p2Score, rounds, lb, onReplay, onHome }) {
  const p1w = p1Score > p2Score;
  const p2w = p2Score > p1Score;
  const tie = p1Score === p2Score;
  const winnerName = p1w ? p1Name : p2w ? p2Name : null;

  return (
    <div className="screen results-screen">
      <div className="results-wrap">
        <div className="results-crown">{tie ? '🤝' : '👑'}</div>
        <div className="results-title">{tie ? 'IT\'S A TIE' : 'WINNER'}</div>
        {winnerName && <div className="results-winner-name">{winnerName.toUpperCase()}</div>}
        <div className="results-sub">{p1Name} vs {p2Name} · Global Trade Challenge 2026</div>

        <div className="res-vs">
          {[
            { name: p1Name, score: p1Score, isWinner: p1w },
            { name: p2Name, score: p2Score, isWinner: p2w }
          ].map(({ name, score, isWinner }) => (
            <div key={name} className={`rv-card rv-card-interactive ${isWinner ? 'winner' : tie ? '' : 'loser'}`}>
              <span className="rv-trophy">{isWinner ? '🏆' : tie ? '🤝' : '📊'}</span>
              <div className="rv-name">{name}</div>
              <div className="rv-final-score">{score}</div>
              <div className="rv-lbl">points</div>
              {isWinner && <div className="rv-winner-lbl">WINNER</div>}
            </div>
          ))}
        </div>

        <div className="breakdown-box">
          <div className="breakdown-title">Round Breakdown</div>
          {rounds.map((r, i) => (
            <div key={i} className="breakdown-row">
              <span className="br-round">Round {i + 1}</span>
              <span className="br-q">{r.q}</span>
              <span className={`br-p1 ${r.p1Correct ? 'correct' : 'wrong'}`}>{r.p1Correct ? `✓ ${r.p1Time.toFixed(2)}s` : '✗'}</span>
              <span className="br-vs">vs</span>
              <span className={`br-p2 ${r.p2Correct ? 'correct' : 'wrong'}`}>{r.p2Correct ? `✓ ${r.p2Time.toFixed(2)}s` : '✗'}</span>
            </div>
          ))}
        </div>

        <div className="res-btns">
          <button className="btn-outline btn-interactive" onClick={onHome}>← Home</button>
          <button className="btn-gold btn-interactive" onClick={onReplay}>🔄 New Match</button>
        </div>
      </div>
    </div>
  );
}

// ── MAIN APP ──
export default function App() {
  const [screen, setScreen] = useState('splash');
  const [p1Name, setP1Name] = useState('Player 1');
  const [p2Name, setP2Name] = useState('Player 2');
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [roundNum, setRoundNum] = useState(1);
  const [question, setQuestion] = useState(null);
  const [usedIds, setUsedIds] = useState([]);
  const [p1Answer, setP1Answer] = useState(null);
  const [p1Time, setP1Time] = useState(null);
  const [p1Correct, setP1Correct] = useState(false);
  const [p2Answer, setP2Answer] = useState(null);
  const [p2Time, setP2Time] = useState(null);
  const [p2Correct, setP2Correct] = useState(false);
  const [isTiebreaker, setIsTiebreaker] = useState(false);
  const [rounds, setRounds] = useState([]);
  const [lb, setLb] = useState(() => {
    try { return JSON.parse(localStorage.getItem('tiq_lb2') || '[]'); } catch { return []; }
  });

  const [dashboardData, setDashboardData] = useState(null);
  const [chartLoading, setChartLoading] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

const groqKey = import.meta.env.VITE_GROQ_API_KEY;

  async function handleRunAI() {
    setChartLoading(true);
    const dashboard = await fetchDashboardFromGroq(question, groqKey);

    if (dashboard) {
      setDashboardData(dashboard);
      setShowDashboard(true);
    }
    setChartLoading(false);
  }

  function pickQuestion(exclude = []) {
    const pool = shuffle(QUESTIONS.filter(q => !exclude.includes(q.id)));
    return pool[0];
  }

  function launch(p1, p2) {
    setP1Name(p1); setP2Name(p2);
    setP1Score(0); setP2Score(0);
    setRoundNum(1); setUsedIds([]);
    setIsTiebreaker(false); setRounds([]);
    setP1Answer(null); setP1Time(null); setP1Correct(false);
    setP2Answer(null); setP2Time(null); setP2Correct(false);
    setDashboardData(null); setShowDashboard(false); setChartLoading(false);
    const q = pickQuestion();
    setQuestion(q); setUsedIds([q.id]);
    setScreen('turn1');
  }

  function p1Submit(answer, time) {
    setP1Answer(answer);
    setP1Time(time);
    setP1Correct(answer === question.correct);
    setScreen('waiting');
  }

  function p2Submit(answer, time) {
    setP2Answer(answer);
    setP2Time(time);
    setP2Correct(answer === question.correct);
    setScreen('reveal');
  }

  function handleContinue(roundWinner) {
    const newP1 = p1Score + (roundWinner === 'p1' ? 1 : 0);
    const newP2 = p2Score + (roundWinner === 'p2' ? 1 : 0);
    setP1Score(newP1);
    setP2Score(newP2);

    const newRounds = [...rounds, {
      q: question.q.substring(0, 48) + '…',
      p1Correct, p1Time: p1Time || TMAX,
      p2Correct, p2Time: p2Time || TMAX,
      winner: roundWinner
    }];
    setRounds(newRounds);

    if (roundWinner === 'tie') {
      setIsTiebreaker(true);
      const newQ = pickQuestion(usedIds);
      setQuestion(newQ);
      setUsedIds(prev => [...prev, newQ.id]);
      setP1Answer(null); setP1Time(null); setP1Correct(false);
      setP2Answer(null); setP2Time(null); setP2Correct(false);
      setDashboardData(null); setShowDashboard(false); setChartLoading(false);
      setScreen('turn1');
    } else if (roundNum >= TOTAL_ROUNDS && !isTiebreaker) {
      const finalP1 = newP1;
      const finalP2 = newP2;
      const winnerName = finalP1 > finalP2 ? p1Name : finalP2 > finalP1 ? p2Name : null;
      if (winnerName) {
        const winnerScore = Math.max(finalP1, finalP2);
        const newLb = [...lb, { name: winnerName, score: winnerScore }]
          .sort((a, b) => b.score - a.score)
          .slice(0, 10);
        setLb(newLb);
        try { localStorage.setItem('tiq_lb2', JSON.stringify(newLb)); } catch {}
      }
      setScreen('final');
    } else {
      setRoundNum(r => r + 1);
      setIsTiebreaker(false);
      const newQ = pickQuestion(usedIds);
      setQuestion(newQ);
      setUsedIds(prev => [...prev, newQ.id]);
      setP1Answer(null); setP1Time(null); setP1Correct(false);
      setP2Answer(null); setP2Time(null); setP2Correct(false);
      setDashboardData(null); setShowDashboard(false); setChartLoading(false);
      setScreen('turn1');
    }
  }

  return (
    <div className="app">
      <div className="ticker-bar">
        <div className="ticker-inner">
          {[...Array(2)].flatMap(() =>
            ['CACAO/MT +2.1%', 'SHRIMP FOB/KG +0.6%', 'BANANA/MT +2.8%', 'ARABICA/MT +50.7%',
              'LITHIUM/KG +17%', 'SOYBEAN/MT -17%', 'USD/EUR 1.085', 'BALTIC DRY +2.1%',
              'CONTAINER RATE -1.9%', 'PALM OIL/MT -3.2%', 'GLOBAL TRADE +3.2%', 'AI MARKET +34%']
          ).map((t, i) => <span key={i} className="tick">{t}</span>)}
        </div>
      </div>

      {screen === 'splash' && <Splash onStart={() => setScreen('setup')} />}
      {screen === 'setup' && <Setup onLaunch={launch} />}
      {screen === 'turn1' && <ReadScreen question={question} playerName={p1Name} roundNum={roundNum} isPlayer1={true} onStart={() => setScreen('game1')} />}
      {screen === 'game1' && question && (
        <GameScreen question={question} playerName={p1Name} roundNum={roundNum}
          p1Score={p1Score} p2Score={p2Score} p1Name={p1Name} p2Name={p2Name}
          onSubmit={p1Submit} />
      )}
      {screen === 'waiting' && <WaitingScreen p1Name={p1Name} p2Name={p2Name} onNext={() => setScreen('turn2')} />}
      {screen === 'turn2' && <ReadScreen question={question} playerName={p2Name} roundNum={roundNum} isPlayer1={false} onStart={() => setScreen('game2')} />}
      {screen === 'game2' && question && (
        <GameScreen question={question} playerName={p2Name} roundNum={roundNum}
          p1Score={p1Score} p2Score={p2Score} p1Name={p1Name} p2Name={p2Name}
          onSubmit={p2Submit} />
      )}
      {screen === 'reveal' && question && (
        <RevealScreen
          question={question} roundNum={roundNum}
          p1Name={p1Name} p2Name={p2Name}
          p1Answer={p1Answer} p1Time={p1Time} p1Correct={p1Correct}
          p2Answer={p2Answer} p2Time={p2Time} p2Correct={p2Correct}
          p1Score={p1Score} p2Score={p2Score}
          onContinue={handleContinue} groqKey={groqKey} isTiebreaker={isTiebreaker}
          handleRunAI={handleRunAI} dashboardData={dashboardData} showDashboard={showDashboard} chartLoading={chartLoading}
        />
      )}
      {screen === 'final' && (
        <FinalResults
          p1Name={p1Name} p2Name={p2Name}
          p1Score={p1Score} p2Score={p2Score}
          rounds={rounds} lb={lb}
          onReplay={() => setScreen('setup')}
          onHome={() => setScreen('splash')}
        />
      )}
    </div>
  );
}