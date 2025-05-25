import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // Optional: for additional styling if needed

export default function Login() {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!employeeId || !password) {
      setError('Please enter Employee ID and Password.');
      return;
    }

    setError('');
    if( employeeId !== '123' || password !== 'password@123') {
      setError('Invalid Employee ID or Password.');
      return;
    }
    navigate('/dashboard');
  };

  return (
        <div className="login-container">
      <div className="login-inner">
        <h1 className="login-title">Employee Login</h1>

        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="employeeId" className="login-label">Employee ID</label>
            <input
              id="employeeId"
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              className="login-input"
            />
          </div>
<br />
          <div>
            <label htmlFor="password" className="login-label">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>

  );
}
