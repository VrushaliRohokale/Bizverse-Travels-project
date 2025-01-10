import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill out all fields.');
    } else {
      alert(`Welcome, ${email}`);
      setError('');
    }
  };

  return (
    <>
      <style>
        {`
          .login-container {
            max-width: 400px;
            margin: 100px auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
          }
          .form-control {
            width: 100%;
            margin-bottom: 15px;
            padding: 10px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #ddd;
          }
          .btn {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            color: white;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .btn:hover {
            background-color: #0056b3;
          }
          .error {
            color: red;
            margin-bottom: 15px;
          }
          h2 {
            margin-bottom: 20px;
            font-family: Arial, sans-serif;
          }
          .login-links {
            margin-top: 15px;
            font-size: 14px;
          }
          .login-links a {
            color: #007bff;
            text-decoration: none;
          }
          .login-links a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="login-container">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" onClick={handleLogin}>Login</button>
        <div className="login-links">
          <p>
            <a href="#">Forgot Password?</a>
          </p>
          <p>
            Already have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
