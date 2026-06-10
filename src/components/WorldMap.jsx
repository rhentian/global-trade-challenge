import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function WorldMap({ data }) {
  // Si data es array, renderizar como BarChart
  if (Array.isArray(data) && data.length > 0) {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end" 
            height={80}
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" name="Imports" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>No map data available</div>;
}