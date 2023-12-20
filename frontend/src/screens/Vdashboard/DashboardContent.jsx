import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardContent = () => {
  const [unprocessedDonations, setUnprocessedDonations] = useState(0);
  const [processedDonations, setProcessedDonations] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const unprocessedDonationsResponse = await axios.get('http://localhost:5001/donate/count/unprocessedbyUser');
        setUnprocessedDonations(unprocessedDonationsResponse.data.count);

        const processedDonationsResponse = await axios.get('http://localhost:5001/donate/count/processedbyUser');
        setProcessedDonations(processedDonationsResponse.data.count);
      } catch (error) {
        console.error('Error fetching donation counts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Donors Card */}
      <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-white">Pending Donations</h3>
        <p className="text-2xl font-semibold text-white">{unprocessedDonations}</p>
      </div>

      {/* Volunteers Card */}
      <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-white">Collected Donations</h3>
        <p className="text-2xl font-semibold text-white">{processedDonations}</p>
      </div>
    </div>
  );
};

export default DashboardContent;
