import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PendingCollections = () => {
  const [pendingCollectionsData, setPendingCollectionsData] = useState([]);

  useEffect(() => {
    const fetchPendingCollections = async () => {
      try {
        const response = await axios.get('http://localhost:5001/donate/pendingCollectionsForVolunteer');
        const userId = localStorage.getItem('userId');
        const filteredData = response.data.filter(item => item.assignedTo === userId);
        setPendingCollectionsData(filteredData);
      } catch (error) {
        console.error('Error fetching pending collections:', error);
      }
    };

    fetchPendingCollections();
  }, []);

  const handleCollect = async (donationId) => {
    try {
      await axios.put(`http://localhost:5001/donate/collectDonation/${donationId}`);
      
      // Update the state to reflect the change
      setPendingCollectionsData(prevData => prevData.map(item => {
        if (item._id === donationId) {
          return { ...item, status: 'collected' };
        }
        return item;
      }));
    } catch (error) {
      console.error('Error collecting donation:', error);
    }
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-md shadow-md">
        {/* Table to display pending collections data */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-coffee uppercase tracking-wider">
                Donor Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-coffee uppercase tracking-wider">
                Food Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-coffee uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-coffee uppercase tracking-wider">
                Cooking Date Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-coffee uppercase tracking-wider">
                Expiry Date Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-coffee uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-coffee uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-coffee uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pendingCollectionsData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.donorID}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.foodName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.cookingDateTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.expiryDateTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-white bg-coffee hover:bg-coffee focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                    style={{ color: 'white' }}
                    onClick={() => handleCollect(item._id)}
                  >
                    Collect
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

export default PendingCollections;

