import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RejectedDonations = () => {
  const [rejectedDonations, setRejectedDonations] = useState([]);

  const fetchRejectedDonations = async () => {
    try {
      const response = await axios.get('http://localhost:5001/donate/rejecteddonations');
      setRejectedDonations(response.data); // Assuming the response data is an array
    } catch (error) {
      console.error('Error fetching rejected donations:', error);
    }
  };

  useEffect(() => {
    fetchRejectedDonations();
  }, []);

  const handleCancel = async (donationId) => {
    try {
      const response = await axios.put(`http://localhost:5001/donate/returnpending/${donationId}`);
      const updatedDonation = response.data;
      // Update the state to reflect the new status
      setRejectedDonations((prevDonations) =>
        prevDonations.map((donation) =>
          donation._id === updatedDonation._id ? updatedDonation : donation
        )
      );
    } catch (error) {
      console.error('Error canceling donation:', error);
    }
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-md shadow-md">
        {/* Table to display rejected donations data */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Donor ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Food Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rejectedDonations.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.donorID}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.foodType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleCancel(item._id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
                    style={{ color: 'white' }}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RejectedDonations;
