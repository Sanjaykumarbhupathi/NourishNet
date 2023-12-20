import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/contact', {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        toast.success('Message sent successfully');
      } else {
        console.log('Message sending failed. Please try again.');
        toast.error('Message sending failed. Please try again.');
      }
    } catch (error) {
      console.error('Message sending error:', error);
    }
  };

  return (
    <><Navbar /><div className="min-h-screen flex justify-center items-center">
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-2/3 p-4 bg-white border-coffee rounded-lg shadow-xl flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          {/* Your image goes here */}
          <img
            src="/images/contact.jpg"
            alt="Contact Image"
            className="w-full h-auto rounded-xl" />
        </div>
        <div className="w-full md:w-1/2 p-12">
          <h2 className="text-2xl font-semibold mb-4">Request For Food</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-coffee-dark font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-coffee-dark"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-coffee-dark font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus-border-coffee-dark"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange} />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-coffee-dark font-semibold mb-2">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-coffee-dark"
                placeholder="Enter your message"
                value={message}
                onChange={handleMessageChange} />
            </div>
            <button
              type="submit"
              className="w-full bg-coffee text-white py-2 rounded-md hover-bg-coffee focus:outline-none focus-bg-coffee"
              style={{ color: 'white' }}>
              Request For Food
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div><Footer/></>
  );
};

export default Contact;
