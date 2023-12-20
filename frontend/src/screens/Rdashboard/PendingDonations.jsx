// src/components/PendingDonations.jsx
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PendingDonations = () => {
  // Placeholder data (replace this with data from your backend)
  const [pendingDonations, setPendingDonations] = useState([]);

  const handleCancelClick = async (donationId) => {
    try {
      // Make an API call to delete the donation by ID
      const response = await axios.delete(`http://localhost:5001/donate/${donationId}`);

      if (response.status === 200) {
        console.log('Donation deleted successfully');
        toast.success("Donation deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // You may want to update the local state or fetch the data again to reflect the changes
      }
    } catch (error) {
      console.error('Error deleting donation:', error);
      toast.error("Error deleting donation", {
        position: toast.POSITION.TOP_RIGHT,
      });
      // Handle the error (show a message to the user, log it, etc.)
    }
  };

  useEffect(() => {
    // Fetch pending donations when the component mounts
    const fetchPendingDonations = async () => {
      try {
        const response = await axios.get('http://localhost:5001/donate/pendingdonationsbyUser');
        setPendingDonations(response.data.pendingDonations);
      } catch (error) {
        console.error('Error fetching pending donations:', error);
      }
    };

    fetchPendingDonations();
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <div className="bg-white p-6 rounded-md">
        {/* Table to display pending donations data */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Food Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Cooking DateTime
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Expiry Date Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Agent Assigned
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pendingDonations.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.foodType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.cookingDateTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.expiryDateTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.assignedTo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {/* Add actions buttons here (e.g., collect, cancel, etc.) */}
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
              style={{ color: 'white' }}onClick={() => handleCancelClick(item._id)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer autoClose={8000} />
      </div>
    </div>
  );
};

export default PendingDonations;
