// src/components/Dashboard.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

const RDashboard = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onPageClick={handlePageClick} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <Content page={selectedPage} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default RDashboard;
