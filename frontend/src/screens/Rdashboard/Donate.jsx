import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodDonationForm = () => {
  const [formData, setFormData] = useState({
    foodType: '',
    foodName: '',
    quantity: '',
    cookingDate: '',
    cookingTime: '',
    expiryDate: '',
    expiryTime: '',
    address: '',
    phone: '',
    message: '',
  });

  // Retrieve donorID from localStorage
  const donorID = localStorage.getItem('userId');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   const handleSubmit = async () => {
//   try {
//     // Add donorID to the form data
//     const formDataWithDonorID = { ...formData, donorID };

//     // Check if cooking date is before expiry date
//     const cookingDate = new Date(formDataWithDonorID.cookingDate + 'T' + formDataWithDonorID.cookingTime);
//     const expiryDate = new Date(formDataWithDonorID.expiryDate + 'T' + formDataWithDonorID.expiryTime);

//     if (cookingDate >= expiryDate) {
//       console.error('Cooking date must be before expiry date');
//       // You can display an error message to the user or handle it as needed
//       return;
//     }

//     // Adjust the API endpoint based on your backend setup
//     const response = await axios.post('http://localhost:5001/donate', formDataWithDonorID);

//     if (response.status === 201) {
//       console.log('Food donation submitted successfully');
//       // Optionally, you can redirect to a thank you page or show a success message
//     }
//   } catch (error) {
//     console.error('Error submitting food donation:', error);
//     // Handle the error (show a message to the user, log it, etc.)
//   }
// };

const handleSubmit = async () => {
  try {
    // Add donorID to the form data
    const formDataWithDonorID = { ...formData, donorID };

    // Check if cooking date is before expiry date
    const cookingDateTime = moment(`${formDataWithDonorID.cookingDate} ${formDataWithDonorID.cookingTime}`);
    const expiryDateTime = moment(`${formDataWithDonorID.expiryDate} ${formDataWithDonorID.expiryTime}`);

    if (cookingDateTime.isSameOrAfter(expiryDateTime)) {
      console.error('Cooking date must be before expiry date');
      // You can display an error message to the user or handle it as needed
      return;
    }

    // Adjust the API endpoint based on your backend setup
    const response = await axios.post('http://localhost:5001/donate', formDataWithDonorID);

    if (response.status === 201) {
      console.log('Food donation submitted successfully');
      toast.success(" food Successfully added for Donation", {
        position: toast.POSITION.TOP_RIGHT,
      });
      window.location.href="/rdashboard";
      // Optionally, you can redirect to a thank you page or show a success message
    }
  } catch (error) {
    console.error('Error submitting food donation:', error);
    // Handle the error (show a message to the user, log it, etc.)
    toast.error("Error Submitting food Donation", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
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
              <label htmlFor="foodName" className="block text-sm font-medium text-gray-600">
                Food Name
              </label>
              <input
                type="text"
                id="foodName"
                name="foodName"
                value={formData.foodName}
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
              <label htmlFor="cookingDate" className="block text-sm font-medium text-gray-600">
                Cooking Date
              </label>
              <input
                type="date"
                id="cookingDate"
                name="cookingDate"
                value={formData.cookingDate}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cookingTime" className="block text-sm font-medium text-gray-600">
                Cooking Time
              </label>
              <input
                type="time"
                id="cookingTime"
                name="cookingTime"
                value={formData.cookingTime}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">
                Expiry Date
              </label>
              <input
                type="date"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiryTime" className="block text-sm font-medium text-gray-600">
                Expiry Time
              </label>
              <input
                type="time"
                id="expiryTime"
                name="expiryTime"
                value={formData.expiryTime}
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
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
              style={{ color: 'white' }}
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

export default FoodDonationForm;
