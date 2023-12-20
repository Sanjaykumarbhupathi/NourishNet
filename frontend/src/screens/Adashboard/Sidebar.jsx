// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ onPageClick }) => {
  const pages = ['Dashboard','Pending Donations','Rejected Donations','Previous Donations','Manage Volunteers','Manage Donors','Manage Admins','Profile',];
  const handleLogout = () => {
    // Add your logout functionality here
    localStorage.removeItem("isAuthenticated");
    window.location.href = '/login';
  };

  return (
    <aside className="bg-gray-800 h-screen w-64">
      <div className="flex items-center justify-center mt-10 h-24 w-24">
        <img src="./logo-bg.png" alt="logo" />
      </div>
      <nav className="mt-10">
        {pages.map((page) => (
          <p
            key={page}
            onClick={() => onPageClick(page)}
            className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4"
          >
            {page}
          </p>
        ))}
      </nav>
      <button
          onClick={handleLogout}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
          style={{ color: 'white' }}
        >
          Logout
        </button>
    </aside>
  );
};

export default Sidebar;
