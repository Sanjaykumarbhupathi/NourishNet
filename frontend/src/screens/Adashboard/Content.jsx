import React from 'react';
import DashboardContent from './DashboardContent';
import Profile from './Profile';
import Donate from './Donate';
import PendingDonations from './PendingDonations';
import PreviousDonations from './PreviousDonations';
import ManageVolunteer from './ManageVolunteers';
import ManageDonor from './ManageDonors';
import ManageAdmin from './ManageAdmins';
import RejectedDonations from './RejectedDonations';

const Content = ({ page = 'Dashboard' }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{page}</h2>
      <div className="bg-white p-6 rounded-md shadow-md overflow-x-scroll">
        {/* Render different content based on the selected page */}
        {page === 'Dashboard' && <DashboardContent />}
        {page === 'Donate' && <Donate />}
        {page === 'Pending Donations' && <PendingDonations />}
        {page === 'Rejected Donations' && <RejectedDonations />}
        {page === 'Previous Donations' && <PreviousDonations />}
        {page === 'Manage Volunteers' && <ManageVolunteer />}
        {page === 'Manage Donors' && <ManageDonor />}
        {page === 'Manage Admins' && <ManageAdmin />}
        {page === 'Profile' && <Profile />}
      </div>
    </div>
  );
};

export default Content;
