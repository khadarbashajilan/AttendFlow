import React, { useState } from 'react';
import AnalyticsCharts from './AnalyticsCharts';

const AnalyticsDashboard = () => {
  const [lateCount, setLateCount] = useState(5);
  const [earlyExitCount, setEarlyExitCount] = useState(3);
  const [halfDays, setHalfDays] = useState(2);
  const [presentDays, setPresentDays] = useState(20);

  return (
    <div className="outer-container">
      <h1 className="text-2xl font-bold text-center mb-6">Analytics</h1>

      <div className="flex justify-between mb-8">
        <div className="bg-blue-100 p-4 rounded shadow w-1/4 text-center">
          <p className="text-lg font-semibold">Total Late Entries</p>
          <p className="text-xl font-bold text-blue-600">{lateCount}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow w-1/4 text-center">
          <p className="text-lg font-semibold">Total Early Exits</p>
          <p className="text-xl font-bold text-yellow-600">{earlyExitCount}</p>
        </div>
        <div className="bg-indigo-100 p-4 rounded shadow w-1/4 text-center">
          <p className="text-lg font-semibold">Total Half Days</p>
          <p className="text-xl font-bold text-indigo-600">{halfDays}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow w-1/4 text-center">
          <p className="text-lg font-semibold">Total Present Days</p>
          <p className="text-xl font-bold text-green-600">{presentDays}</p>
        </div>
      </div>
      
      <AnalyticsCharts />
    </div>
  );
};

export default AnalyticsDashboard;
