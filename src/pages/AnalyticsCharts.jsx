
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const barData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Hours Present',
      data: [8, 6, 7, 5, 9, 8],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }
  ]
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Attendance Trends Over Time' }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const pieData = {
  labels: ['On Time', 'Late', 'Early Exit', 'Absent'],
  datasets: [
    {
      label: 'Status Breakdown',
      data: [12, 4, 3, 2],
      backgroundColor: ['#4ade80', '#facc15', '#60a5fa', '#f87171'],
      hoverOffset: 4
    }
  ]
};

const pieOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Attendance Status Breakdown'
    }
  }
};

const AnalyticsCharts = () => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="h-[300px] bg-white rounded-lg shadow p-4">
        <Bar data={barData} options={barOptions} />
      </div>
      <div className="h-[300px] bg-white rounded-lg px-[150px] shadow pt-5">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default AnalyticsCharts;
