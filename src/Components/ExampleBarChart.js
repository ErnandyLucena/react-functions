import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

// Dados para o gráfico
const data = [
  {
    name: 'Segunda', exercises: 5,
  },
  {
    name: 'Terça', exercises: 8,
  },
  {
    name: 'Quarta', exercises: 6,
  },
  {
    name: 'Quinta', exercises: 7,
  },
  {
    name: 'Sexta', exercises: 4,
  },
  {
    name: 'Sábado', exercises: 9,
  },
  {
    name: 'Domingo', exercises: 2,
  },
];

const ExampleBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="exercises" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExampleBarChart;
