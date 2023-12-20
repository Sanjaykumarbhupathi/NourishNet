// src/components/Content.js
import React from 'react';
import DashboardContent from './DashboardContent';
import Profile from './Profile';
import Donate from './Donate';
import PendingDonations from './PendingDonations';
import PreviousDonations from './PreviousDonations';

const Content = ({ page }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{page || 'Dashboard'}</h2>
      <div className="bg-white p-6 rounded-md shadow-md overflow-x-scroll">
        {/* Render different content based on the selected page */}
        {page === 'Dashboard' && <DashboardContent/>}
        {page === 'Donate' && <Donate/>}
        {page === 'My Pending Donations' && <PendingDonations/>}
        {page === 'My Previous Donations' && <PreviousDonations/>}
        {page === 'Profile' && <Profile/>}
      </div>
    </div>
  );
};

export default Content;
