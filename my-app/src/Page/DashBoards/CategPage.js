import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
   PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const categoriesData = [
  { category: 'Category A', A: 120, B: 110, fullMark: 150 },
  { category: 'Category B', A: 98, B: 130, fullMark: 150 },
  { category: 'Category C', A: 86, B: 130, fullMark: 150 },
  { category: 'Category D', A: 99, B: 100, fullMark: 150 },
  { category: 'Category E', A: 85, B: 90, fullMark: 150 },
  { category: 'Category F', A: 65, B: 85, fullMark: 150 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

function CategoriesPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', height: '100%' }}>
      <ResponsiveContainer width="50%" height="100%">
        <RadarChart outerRadius={90} data={categoriesData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Category A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Category B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="50%" height="100%">
        <PieChart>
          <Pie
            data={categoriesData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="A"
          >
            {categoriesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoriesPage;
