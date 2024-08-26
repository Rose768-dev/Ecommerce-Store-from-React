import React from 'react';
import { PieChart, Pie, Sector, Cell, BarChart, Bar, XAxis, YAxis,
CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataPie = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 300 },
  { name: "Category D", value: 200 },
];

const dataBar = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 500 },
  { month: "Apr", sales: 200 },
  { month: "May", sales: 300 },
  { month: "Jun", sales: 450 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function DashboardCharts() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', height: '400px' }}>

      <ResponsiveContainer width="50%" height="100%">
        <PieChart>
          <Pie
            data={dataPie}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {dataPie.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="50%" height="100%">
        <BarChart data={dataBar}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardCharts;
