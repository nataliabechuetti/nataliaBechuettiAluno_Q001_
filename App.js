import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const salesData = [
  { month: 'Janeiro', sales: 1200, year: 2022 },
  { month: 'Fevereiro', sales: 1500, year: 2022 },
  { month: 'Março', sales: 1800, year: 2022 },
  { month: 'Abril', sales: 900, year: 2022 },
  { month: 'Maio', sales: 2000, year: 2022 },
  { month: 'Junho', sales: 2400, year: 2022 },
  { month: 'Julho', sales: 1900, year: 2022 },
  { month: 'Agosto', sales: 1700, year: 2022 },
  { month: 'Setembro', sales: 2200, year: 2022 },
  { month: 'Outubro', sales: 2500, year: 2022 },
  { month: 'Novembro', sales: 2800, year: 2022 },
  { month: 'Dezembro', sales: 3000, year: 2022 },
  { month: 'Janeiro', sales: 2800, year: 2023 },
  { month: 'Fevereiro', sales: 3200, year: 2023 },
  { month: 'Março', sales: 3800, year: 2023 },
];

const Dashboard = () => {
  // Dados de vendas mensais acumuladas
  const monthlySalesData = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: 'Vendas Mensais Acumuladas',
        data: salesData.map((data, index) =>
          salesData.slice(0, index + 1).reduce((total, d) => total + d.sales, 0)
        ),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  // Dados de vendas comparativas entre ano atual e ano anterior
  const currentYear = new Date().getFullYear();
  const previousYear = currentYear - 1;

  const currentYearSales = salesData
    .filter((data) => data.year === currentYear)
    .map((data) => data.sales);
  const previousYearSales = salesData
    .filter((data) => data.year === previousYear)
    .map((data) => data.sales);

  const salesComparisonData = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
