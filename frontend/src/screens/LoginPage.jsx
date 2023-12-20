import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(null);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/login', {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success('Login Successful');

        const { user,role,token } = response.data;

        if (role === 'restaurant') {
          localStorage.setItem('userId', user._id);
          localStorage.setItem('token', token);
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("userRole", "restaurant");
          window.location.href = '/rdashboard';
        } else if (role === 'volunteer') {
          localStorage.setItem('userId', user._id);
          localStorage.setItem('token', token);
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("userRole", "volunteer");
          window.location.href = '/vdashboard';
        } else if (role === 'admin') {
          localStorage.setItem('userId', user._id);
          localStorage.setItem('token', token);
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("userRole","admin");
          window.location.href = '/adashboard';
        }

      } else {
        if(response.status===401){
          setError('Login failed. Please check your email and password.');
          toast.error("Login failed. Please check your email and password.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
       
        console.log('Login failed. Please check your email and password.');
        toast.error("Login failed. Please check your email and password", {
          position: toast.POSITION.TOP_RIGHT,
        });

      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error("Login error", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <><Helmet>
      <title>Login | NourishNet</title>
    </Helmet>
    <Navbar/>
       <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold text-coffee text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-coffee-dark font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-coffee focus:border-coffee-dark"
              placeholder="Enter your email"
              value={email}
              required
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-coffee-dark font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-coffee focus:border-coffee-dark"
              placeholder="Enter your password"
              value={password}
              required
              onChange={handlePasswordChange}
            />
          </div>
          {error && (
              <span className="text-coffee text-sm mb-4 block">
                {error}
              </span>
            )}
          <button
            type="submit"
            className="w-full bg-coffee text-white py-3 text-lg font-semibold rounded-md hover:bg-coffee-darker focus:outline-none transform hover:scale-105 transition-transform"
           style={{color:'white'}}>
            Login
          </button>
        </form>
        <ToastContainer autoClose={8000} />
      </div>
    </div>
    <Footer/></>
  );
};

export default LoginPage;
