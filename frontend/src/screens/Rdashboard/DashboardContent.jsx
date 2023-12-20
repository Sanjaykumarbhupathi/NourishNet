// // src/components/DashboardContent.jsx
// import React from 'react';

// const DashboardContent = () => {
//   return (
//     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//       {/* Donors Card */}
//       <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
//         <h3 className="text-lg font-medium text-white">donations by you</h3>
//         <p className="text-2xl font-semibold text-white">120</p>
//       </div>

//       {/* Volunteers Card */}
//       <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
//         <h3 className="text-lg font-medium text-white">donation requests not processed yet</h3>
//         <p className="text-2xl font-semibold text-white">75</p>
//       </div>

//       <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
//         <h3 className="text-lg font-medium text-white">donations accepted and to be assigned to agent</h3>
//         <p className="text-2xl font-semibold text-white">120</p>
//       </div>

//       <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
//         <h3 className="text-lg font-medium text-white">donations not collected yet</h3>
//         <p className="text-2xl font-semibold text-white">120</p>
//       </div>
//     </div>
//   );
// };

// export default DashboardContent;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardContent = () => {
  const [donationsByUser, setDonationsByUser] = useState(0);
  const [unprocessedDonations, setUnprocessedDonations] = useState(0);
  const [donationsToAssign, setDonationsToAssign] = useState(0);
  const [uncollectedDonations, setUncollectedDonations] = useState(0);

  useEffect(() => {
    // Fetch counts from the backend when the component mounts
    const fetchData = async () => {
      try {
        const donationsByUserResponse = await axios.get('http://localhost:5001/donate/count/byUser');
        const unprocessedDonationsResponse = await axios.get('http://localhost:5001/donate/count/unprocessedbyUser');
        const donationsToAssignResponse = await axios.get('http://localhost:5001/donate/count/toAssignbyUser');
        const uncollectedDonationsResponse = await axios.get('http://localhost:5001/donate/count/uncollectedbyUser');

        setDonationsByUser(donationsByUserResponse.data.count);
        setUnprocessedDonations(unprocessedDonationsResponse.data.count);
        setDonationsToAssign(donationsToAssignResponse.data.count);
        setUncollectedDonations(uncollectedDonationsResponse.data.count);
      } catch (error) {
        console.error('Error fetching donation counts:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-white">Donations by You</h3>
        <p className="text-2xl font-semibold text-white">{donationsByUser}</p>
      </div>
      <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-white">Unprocessed Donation Requests</h3>
        <p className="text-2xl font-semibold text-white">{unprocessedDonations}</p>
      </div>

      <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-white">Donations Accepted, To Be Assigned</h3>
        <p className="text-2xl font-semibold text-white">{donationsToAssign}</p>
      </div>

      <div className="bg-coffee overflow-hidden shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-white">Donations Assigned Not Collected Yet</h3>
        <p className="text-2xl font-semibold text-white">{uncollectedDonations}</p>
      </div>
    </div>
  );
};

export default DashboardContent;
