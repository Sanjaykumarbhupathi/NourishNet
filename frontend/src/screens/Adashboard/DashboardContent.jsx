import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardContent = () => {
  const [adminsCount, setAdminsCount] = useState(0);
  const [donorsCount, setDonorsCount] = useState(0);
  const [volunteersCount, setVolunteersCount] = useState(0);
  const [unprocessedCount, setunprocessedCount] = useState(0);
  const [uncollectedCount, setuncollectedCount] = useState(0);
  const [collectedCount, setcollectedCount] = useState(0);

  const apiUrl = process.env.API_URL || 'http://localhost:5001';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminsResponse = await axios.get(`${apiUrl}/admins/count`);
        const donorsResponse = await axios.get(`${apiUrl}/donors/count`);
        const volunteersResponse = await axios.get(`${apiUrl}/volunteers/count`);
        const unprocessedResponse = await axios.get(`${apiUrl}/donate/count/unprocessed`);
        const uncollectedResponse = await axios.get(`${apiUrl}/donate/count/uncollected`);
        const collectedResponse = await axios.get(`${apiUrl}/donate/count/collected`);

        setAdminsCount(adminsResponse.data.count);
        setDonorsCount(donorsResponse.data.count);
        setVolunteersCount(volunteersResponse.data.count);
        setunprocessedCount(unprocessedResponse.data.count);
        setuncollectedCount(uncollectedResponse.data.count);
        setcollectedCount(collectedResponse.data.count);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Admins Card */}
      <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-white">Admins</h3>
        <p className="text-2xl font-semibold text-white">{adminsCount}</p>
      </div>

      {/* Donors Card */}
      <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-white">Donors</h3>
        <p className="text-2xl font-semibold text-white">{donorsCount}</p>
      </div>

      {/* Volunteers Card */}
      <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-white">Volunteers</h3>
        <p className="text-2xl font-semibold text-white">{volunteersCount}</p>
      </div>

      {/* ... Other cards ... */}
      <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-white">New Donation Requests</h3>
        <p className="text-2xl font-semibold text-white">{unprocessedCount}</p>
      </div>

      <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-white">Donations to be assigned to Agent</h3>
        <p className="text-2xl font-semibold text-white">{uncollectedCount}</p>
      </div>
      <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-white">Donations Collected</h3>
        <p className="text-2xl font-semibold text-white">{collectedCount}</p>
      </div>
      
    </div>
  );
};

export default DashboardContent;
