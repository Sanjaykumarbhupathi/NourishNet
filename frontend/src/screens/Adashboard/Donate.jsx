// src/components/FoodDonationForm.jsx
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Donate = () => {
  const [formData, setFormData] = useState({
    foodType: '',
    enterFood: '',
    quantity: '',
    timeOfCooking: '',
    expiryDate: '',
    address: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Implement your form submission logic here
    // For demonstration purposes, we'll just log the form data to the console
    console.log('Submitted form data:', formData);
    toast.success('Login Successful');
    window.location.href = '/adashboard';

  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Food Donation Form</h2>
      <div className="bg-white p-6 rounded-md shadow-md">
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="foodType" className="block text-sm font-medium text-gray-600">
                Food Type
              </label>
              <input
                type="text"
                id="foodType"
                name="foodType"
                value={formData.foodType}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="enterFood" className="block text-sm font-medium text-gray-600">
                Enter Food
              </label>
              <input
                type="text"
                id="enterFood"
                name="enterFood"
                value={formData.enterFood}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">
                Quantity
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="timeOfCooking" className="block text-sm font-medium text-gray-600">
                Time of Cooking
              </label>
              <input
                type="datetime-local"
                id="timeOfCooking"
                name="timeOfCooking"
                value={formData.timeOfCooking}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">
                Expiry Date
              </label>
              <input
                type="datetime-local"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                Address to Collect
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Want to write some message?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer autoClose={8000} />
      </div>
    </div>
  );
};

export default Donate;
