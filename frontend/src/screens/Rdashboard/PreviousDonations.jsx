import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PreviousDonations = () => {
  const [previousDonations, setPreviousDonations] = useState([]);

  useEffect(() => {
    const fetchPreviousDonations = async () => {
      try {
        const response = await axios.get('http://localhost:5001/donate/previousdonations');
        setPreviousDonations(response.data);
      } catch (error) {
        console.error('Error fetching previous donations:', error);
      }
    };

    fetchPreviousDonations();
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <div className="bg-white p-6 rounded-md shadow-md">
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
                Expiry DateTime
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Agent Assigned
              </th>

              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {previousDonations.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.foodType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.cookingDateTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.expiryDateTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.assignedTo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviousDonations;
