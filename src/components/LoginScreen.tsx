import React, { useState } from 'react';
import axios from 'axios';

interface LoginScreenProps {
  isLoginScreenOpen: boolean;
  loginRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ isLoginScreenOpen, loginRef, onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
      "isAdmin": false
    };

    const apiUrl = 'http://localhost:3000'; // Hard-coded API URL

    try {
      console.log("intra in try");
      const response = await axios.post(`${apiUrl}/auth/login`, loginData, {
        
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      if (response.status === 201) {
        // Handle successful login
        console.log('Login successful');
        onClose();
      } else {
        // Handle login failure
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      ref={loginRef}
      className={`fixed inset-0 flex items-center justify-center z-20 transform ${
        isLoginScreenOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ transition: 'transform 0.3s ease' }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-white p-12 rounded-lg shadow-lg w-96" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-black text-3xl mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="text-black block text-lg font-medium mb-2" htmlFor="login-email">
              Email:
            </label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="text-black block text-lg font-medium mb-2" htmlFor="login-password">
              Password:
            </label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button
              className="text-blue-600 hover:underline"
              onClick={onSwitchToRegister}
            >
              Register here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
