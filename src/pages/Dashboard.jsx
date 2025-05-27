import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';
import { useState, useEffect } from 'react';

export default function Dashboard() { const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [status, setStatus] = useState('');
  const [history, setHistory] = useState([]);

  const now = new Date();
  const today = now.toDateString();

  useEffect(() => {
    // Mock attendance for last 6 days
    const mockHistory = Array.from({ length: 6 }, (_, i) => {
      const day = new Date();
      day.setDate(now.getDate() - i - 1);
      const checkInHour = 8 + Math.floor(Math.random() * 3); // between 8AM-10AM
      let status = '';
      if (checkInHour < 9) status = 'Early';
      else if (checkInHour === 9) status = 'On Time';
      else status = 'Late';
      return {
        date: day.toDateString(),
        status,
      };
    });
    setHistory(mockHistory);
  }, []);

  const handleCheckIn = () => {
    const time = new Date();
    setCheckInTime(time);
    const hour = time.getHours();
    if (hour < 9) setStatus('Early');
    else if (hour === 9) setStatus('On Time');
    else setStatus('Late');
  };

  const handleCheckOut = () => {
    const time = new Date();
    setCheckOutTime(time);
  };

  return (
    <div className="outer-container">
      <h1 className="text-2xl font-bold text-center mb-6">Attendance Tracker</h1><br />

      <div className="flex justify-between items-center mb-4">
        <button onClick={handleCheckIn} className="bg-blue-500 text-white px-4 py-2 rounded">Check In</button>
        <button onClick={handleCheckOut} className="bg-green-500 text-white px-4 py-2 rounded">Check Out</button>
      </div>

      <div className="mb-6">
        <p className="text-gray-700">Date: {today}</p>
        <p className="text-gray-700">Check-In Time: {checkInTime ? checkInTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) : '--'}</p>
        <p className="text-gray-700">Check-Out Time: {checkOutTime ? checkOutTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) : '--'}</p>
       {checkInTime && (
          <p className={`text-lg font-semibold mt-2 ${status === 'Late' ? 'text-red-500' : status === 'Early' ? 'text-green-500' : 'text-yellow-500'}`}>Status: {status}</p>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-2">Attendance History (Last 6 Days)</h2><br />
      <div className="flex overflow-x-scroll space-x-4 pb-2">
        {history.map((entry, idx) => (
          <div key={idx} className="min-w-[230px] h-[85px] bg-gray-100 p-3 rounded ">
            <p className="font-medium mb-2">{entry.date}</p>
            <p className={`text-sm font-semibold ${entry.status === 'Late' ? 'text-red-500' : entry.status === 'Early' ? 'text-green-500' : 'text-yellow-500'}`}>Status: {entry.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}