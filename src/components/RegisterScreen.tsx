import React, { useState } from 'react';
import axios from 'axios';

interface RegisterScreenProps {
  isRegisterScreenOpen: boolean;
  registerRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ isRegisterScreenOpen, registerRef, onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const registerData = {
      email,
      password,
      username,
      "isAdmin": false
    };

    const apiUrl = 'http://localhost:3000'; // Hard-coded API URL

    try {
      const response = await axios.post(`${apiUrl}/auth/register`, registerData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        // Handle successful registration
        console.log('Registration successful');
        onClose();
      } else {
        // Handle registration failure
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      ref={registerRef}
      className={`fixed inset-0 flex items-center justify-center z-20 transform ${
        isRegisterScreenOpen ? 'translate-x-0' : 'translate-x-full'
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
        <h2 className="text-black text-3xl mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="text-black block text-lg font-medium mb-2" htmlFor="register-username">
              Username:
            </label>
            <input
              type="text"
              id="register-username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="text-black block text-lg font-medium mb-2" htmlFor="register-email">
              Email:
            </label>
            <input
              type="email"
              id="register-email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="text-black block text-lg font-medium mb-2" htmlFor="register-password">
              Password:
            </label>
            <input
              type="password"
              id="register-password"
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
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button
              className="text-blue-600 hover:underline"
              onClick={onSwitchToLogin}
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
