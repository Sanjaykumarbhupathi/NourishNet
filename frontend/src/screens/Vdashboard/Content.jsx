// src/components/Content.js
import React from 'react';
import DashboardContent from './DashboardContent';
import PendingCollections from './PendingCollections';
import PreviousCollections from './PreviousCollections';
import Profile from './Profile';

const Content = ({ page }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{page || 'Dashboard'}</h2>
      <div className="bg-white p-6 rounded-md shadow-md overflow-x-scroll">
        {/* Render different content based on the selected page */}
        {page === 'Dashboard' && <DashboardContent />}
        {page === 'Pending Collections' && <PendingCollections/>}
        {page === 'Previous Collections' && <PreviousCollections/>}
        {page === 'Profile' && <Profile/>}
      </div>
    </div>
  );
};

export default Content;
