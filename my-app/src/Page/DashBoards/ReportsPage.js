import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell, BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
  {name: 'January', Sales: 4000, Expenses: 2400, amt: 2400},
  {name: 'February', Sales: 3000, Expenses: 1398, amt: 2210},
  {name: 'March', Sales: 2000, Expenses: 9800, amt: 2290},
  {name: 'April', Sales: 2780, Expenses: 3908, amt: 2000},
  {name: 'May', Sales: 1890, Expenses: 4800, amt: 2181},
  {name: 'June', Sales: 2390, Expenses: 3800, amt: 2500},
  {name: 'July', Sales: 3490, Expenses: 4300, amt: 2100},
];

function ReportsPage() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Expenses" stroke="#82ca9d" />
        </LineChart>
        <PieChart>
          <Pie dataKey="Sales" data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
        </PieChart>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sales" fill="#8884d8" />
          <Bar dataKey="Expenses" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ReportsPage;
