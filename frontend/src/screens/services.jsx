import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <><Navbar /><div className="bg-gray-100">
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Admin Section */}
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Admins</h2>
          <img
            src="/Images/Admin.png"
            alt="Admins"
            className="w-48 h-48 object-cover rounded-md mx-auto mb-4"
          />
          <p>They control all the activities and accept/reject donations and select agents.</p>
          <ul className="list-disc pl-5">
            <li>Receive and review donation requests from donors.</li>
            <li>Accept or reject donation requests.</li>
            <li>Assign agents to collect donations.</li>
            <li>View pending donations and received donations.</li>
            <li>Manage user profiles.</li>
          </ul>
        </div>

        {/* Donor Section */}
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Donors</h2>
          <img
            src="/Images/donation.png"
            alt="Donors"
            className="w-48 h-48 object-cover rounded-md mx-auto mb-4"
          />
          <p>They are the driving users of the application who donate food.</p>
          <ul className="list-disc pl-5">
            <li>Make donation requests with basic details.</li>
            <li>Track the status of their donation requests.</li>
            <li>View incomplete and past donations.</li>
            <li>Update their profile.</li>
          </ul>
        </div>
        {/* Agent Section */}
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Volunteer</h2>
          <img
            src="/Images/volunteer.png"
            alt="Agents"
            className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
          />
          <p>They are responsible for collecting food from homes of food donors.</p>
          <ul className="list-disc pl-5">
            <li>Receive notifications to collect food.</li>
            <li>Mark collections upon pickup.</li>
            <li>View collected donations.</li>
            <li>Update their profile.</li>
          </ul>
        </div>
      </div>
    </div>
  </div><Footer/></>
  )
}

export default Services