import React, { useEffect, useState } from 'react';
import '../styles/attendanceLogs.css'; // Assuming you have a CSS file for styles
const AttendanceLogs = () => {
  const [month, setMonth] = useState('');
  const [status, setStatus] = useState('');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const now = new Date();
    const mockLogs = Array.from({ length: 15 }, (_, i) => {
      const date = new Date();
      date.setDate(now.getDate() - i);

      const checkInHour = 8 + Math.floor(Math.random() * 3);
      const checkOutHour = 17 + Math.floor(Math.random() * 2);
      const totalHours = checkOutHour - checkInHour;

      let status = 'On Time';
      if (checkInHour < 9) status = 'Early';
      else if (checkInHour > 9) status = 'Late';

      return {
        date: date.toDateString(),
        checkIn: `${checkInHour}:00`,
        checkOut: `${checkOutHour}:00`,
        totalHours: `${totalHours} hrs`,
        status,
      };
    });

    setLogs(mockLogs);
  }, []);

  const filteredLogs = logs.filter(log => {
    const matchesStatus = status ? log.status === status : true;
    const matchesMonth = month
      ? new Date(log.date).toLocaleString('default', { month: 'long' }) === month
      : true;
    return matchesStatus && matchesMonth;
  });

  return (
    <div className="outer-container">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Attendance Logs</h2>
        <div className="flex gap-4">
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="border rounded px-3 py-1"
          >
            <option value="">Select Month</option>
            {Array.from({ length: 12 }, (_, i) =>
              new Date(0, i).toLocaleString('default', { month: 'long' })
            ).map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded px-3 py-1"
          >
            <option value="">Select Status</option>
            <option value="Early">Early</option>
            <option value="On Time">On Time</option>
            <option value="Late">Late</option>
          </select>
        </div>
      </div>

      <div className="h-[450px] overflow-y-auto  ">
        <table className="min-w-full table-auto border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Check-In</th>
              <th className="border px-4 py-2 text-left">Check-Out</th>
              <th className="border px-4 py-2 text-left">Total Hours</th>
              <th className="border px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{log.date}</td>
                <td className="border px-4 py-2">{log.checkIn}</td>
                <td className="border px-4 py-2">{log.checkOut}</td>
                <td className="border px-4 py-2">{log.totalHours}</td>
                <td className="border px-4 py-2">{log.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceLogs;
