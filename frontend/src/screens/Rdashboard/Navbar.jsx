// src/components/Navbar.js
import React from 'react';
import { HomeIcon, ChartBarIcon, CogIcon } from '@heroicons/react/solid';

const Navbar = () => {
  return (
    <header className="bg-coffee shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-white"style={{color:'white'}}>Donor Dashboard</span>
          <div className="flex space-x-4 ">
            <a href='/'><HomeIcon className="h-6 w-6 text-white "style={{color:'white'}} /></a>
            <ChartBarIcon className="h-6 w-6 text-white"style={{color:'white'}} />
            <CogIcon className="h-6 w-6 text-white" style={{color:'white'}}/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
