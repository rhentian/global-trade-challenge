import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function LineChartComponent({ data, title, dataKey = 'value', color = '#06ffa5', xKey = 'year' }) {
  if (!data || data.length === 0) return <p>No data available</p>;

  const maxValue = Math.max(...data.map(d => typeof d[dataKey] === 'number' ? d[dataKey] : 0));

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
        minHeight: 300
      }}>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(201,168,76,0.1)"
            />
            
            <XAxis 
              dataKey={xKey} 
              tick={{ fill: '#8a7a5a', fontSize: 11 }}
            />
            
            <YAxis 
              tick={{ fill: '#8a7a5a', fontSize: 11 }}
              label={{ value: 'Value', angle: -90, position: 'insideLeft' }}
            />

            <Tooltip
              contentStyle={{
                background: '#111111',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '6px',
                color: '#f5f0e8'
              }}
              formatter={(value) => 
                typeof value === 'number' ? value.toLocaleString() : value
              }
              labelStyle={{ color: '#c9a84c' }}
            />

            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={2}
              dot={{ fill: color, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
