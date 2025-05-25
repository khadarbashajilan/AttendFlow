// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AttendanceLogs from './pages/AttendanceLogs';
import Analytics from './pages/Analytics';
import Layout from './components/Layout';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';


function App() {
  return (
    <>
     <Router>
      <Routes>
        {/* Public route - Login */}
        <Route path="/" element={<Login />} />

        {/* Protected routes - wrapped with Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logs" element={<AttendanceLogs />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
