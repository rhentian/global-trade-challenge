import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function BarChartComponent({ data, title, dataKey = 'value', color = '#c9a84c', horizontal = false }) {
  // Validar que data sea un array
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div style={{ padding: '20px', color: '#999', textAlign: 'center' }}>No data available</div>;
  }

  const ChartType = horizontal ? BarChart : BarChart;
  const layout = horizontal ? 'vertical' : 'horizontal';

  return (
    <div style={{ marginBottom: '2rem' }}>
      {title && <h4 style={{ color: '#c9a84c', marginBottom: '1rem' }}>{title}</h4>}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout={layout}
          margin={{ top: 20, right: 30, left: horizontal ? 100 : 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,76,0.1)" />
          <XAxis dataKey={horizontal ? 'name' : 'name'} angle={horizontal ? 0 : -45} textAnchor={horizontal ? 'end' : 'end'} height={horizontal ? 0 : 80} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey} fill={color} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}