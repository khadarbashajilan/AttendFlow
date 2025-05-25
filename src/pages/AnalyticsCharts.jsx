import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const lineData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Hours Present',
      data: [8, 6, 7, 5, 9, 8],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.4,
      fill: false
    }
  ]
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Attendance Trends Over Time' }
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
    <div className="h-[60%] mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-4">
        <Line data={lineData} options={lineOptions} />
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default AnalyticsCharts;
