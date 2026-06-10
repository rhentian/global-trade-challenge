import React from 'react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function RadarChartComponent({ labels, data, title }) {
  if (!labels || !data) return <p>No data available</p>;

  // Convertir datos al formato que necesita Recharts
  const chartData = labels.map((label, i) => ({
    subject: label,
    EU: data.EU?.[i] || 0,
    'Middle East': data['Middle East']?.[i] || 0,
    'Asia': data.Asia?.[i] || 0,
    'Americas': data.Americas?.[i] || 0
  }));

  const colors = {
    'EU': '#4caf50',
    'Middle East': '#c9a84c',
    'Asia': '#e53935',
    'Americas': '#8a7a5a'
  };

  return (
    <div style={{ width: '100%', marginBottom: '1.5rem' }}>
      <div style={{
        fontSize: '0.62rem',
        fontWeight: '700',
        color: '#c9a84c',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom: '1rem'
      }}>
        {title}
      </div>

      <div style={{
        background: '#1a1a1a',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '8px',
        padding: '1rem',
        minHeight: 350
      }}>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={chartData}>
            <PolarGrid stroke="rgba(201,168,76,0.1)" />
            
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#8a7a5a', fontSize: 11 }}
            />
            
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 10]}
              tick={{ fill: '#8a7a5a', fontSize: 10 }}
            />

            <Radar 
              name="EU" 
              dataKey="EU" 
              stroke={colors.EU} 
              fill={colors.EU} 
              fillOpacity={0.15}
            />
            <Radar 
              name="Middle East" 
              dataKey="Middle East" 
              stroke={colors['Middle East']} 
              fill={colors['Middle East']} 
              fillOpacity={0.15}
            />
            <Radar 
              name="Asia" 
              dataKey="Asia" 
              stroke={colors.Asia} 
              fill={colors.Asia} 
              fillOpacity={0.15}
            />
            <Radar 
              name="Americas" 
              dataKey="Americas" 
              stroke={colors.Americas} 
              fill={colors.Americas} 
              fillOpacity={0.15}
            />

            <Tooltip
              contentStyle={{
                background: '#111111',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '6px',
                color: '#f5f0e8'
              }}
            />

            <Legend 
              wrapperStyle={{ paddingTop: '1rem' }}
              iconType="line"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div style={{
        fontSize: '0.7rem',
        color: '#8a7a5a',
        marginTop: '0.8rem',
        textAlign: 'center'
      }}>
        Scale: 1-10 (higher = higher risk)
      </div>
    </div>
  );
}
