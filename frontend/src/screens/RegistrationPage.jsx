import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('restaurant'); // Default role is "Restaurant"
  const [phoneNumber, setPhoneNumber] = useState(''); // New state for phone number
  const [error, setError] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check for empty fields
      if (!name || !email || !password || !role || !phoneNumber) {
        setError('Please fill in all fields.');
        return;
      }

      const response = await axios.post('http://localhost:5001/signup', {
        name,
        email,
        password,
        role,
        phoneNumber, // Include the phone number in the registration data
      });

      // Check for a successful registration response
      if (response.status === 201) {
        // Redirect to the login page or another page on successful registration
        toast.success('Registration Success. Please Login.');
        window.location.href = '/login';
      } else {
        // Handle registration failure, display an error message, etc.
        setError('Registration failed. Please try again.');
        toast.error('Registration failed. Please try again later.');
      }
    } catch (error) {
      // Handle Axios error
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Registration | Nourish Net</title>
      </Helmet>
      <Navbar/>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-3xl font-bold text-coffee text-center mb-6">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-coffee-dark font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-coffee focus:border-coffee-dark"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
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
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-coffee-dark font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-coffee focus:border-coffee-dark"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-coffee-dark font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-coffee focus:border-coffee-dark"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-coffee-dark font-semibold mb-2">Role</label>
              <div className="flex items-center">
                <label className="mr-4">
                  <input
                    type="radio"
                    value="restaurant"
                    checked={role === 'restaurant'}
                    onChange={handleRoleChange}
                    className="mr-1"
                  />
                  Donor
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="volunteer"
                    checked={role === 'volunteer'}
                    onChange={handleRoleChange}
                    className="mr-1"
                  />
                  Volunteer
                </label>
                <label>
                  <input
                    type="radio"
                    value="admin"
                    checked={role === 'admin'}
                    onChange={handleRoleChange}
                    className="mr-1"
                  />
                  Admin
                </label>
              </div>
            </div>
            {error && (
              <p className="text-red-500 mb-4 text-center font-semibold">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-coffee text-white py-3 text-lg font-semibold rounded-md hover:bg-coffee-darker focus:outline-none transform hover:scale-105 transition-transform"
              style={{ color: 'white' }}>
              Register
            </button>
          </form>
          <ToastContainer autoClose={8000} />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default RegistrationPage;
