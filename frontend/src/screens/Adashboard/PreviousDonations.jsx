import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PreviousDonations = () => {
  const [previousDonations, setPreviousDonations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [volunteers, setVolunteers] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const fetchPreviousDonations = async () => {
    try {
      const response = await axios.get('http://localhost:5001/donate/previousdonationsforadmin');
      setPreviousDonations(response.data);
    } catch (error) {
      console.error('Error fetching previous donations for admin:', error);
    }
  };

  const fetchVolunteers = async () => {
    try {
      const response = await axios.get('http://localhost:5001/user/volunteers');
      const volunteerData = response.data.map(volunteer => ({
        id: volunteer._id,
        name: volunteer.name
      }));
      console.log(volunteerData);
      setVolunteers(volunteerData);
    } catch (error) {
      console.error('Error fetching volunteers:', error);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, [])


  const handleAssignClick = (donation) => {
    setSelectedDonation(donation);
    setShowModal(true);
  };

  const handleVolunteerSelect = async () => {
    console.log(selectedValue);
    try {
      await axios.put(`http://localhost:5001/donate/assignagent/${selectedDonation._id}`, {
        assignedTo: selectedValue,
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error assigning agent:', error);
    }
  };

  useEffect(() => {
    fetchPreviousDonations();
  }, []);

  return (
    <div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Donor ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Food Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Assigned Agent
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {previousDonations.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.donorID}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.foodType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.assignedTo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleAssignClick(item)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
                    style={{ color: 'white' }}
                  >
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
            <div className="relative bg-white shadow-md backdrop-grayscale backdrop-blur-md rounded-lg p-6 mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-32 my-8 w-full max-w-md" style={{backgroundColor:"white"}}>
              <div className="text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Assign Agent</h3>
                <p className="text-sm text-gray-500 mb-4">Select a volunteer to assign as an agent.</p>
                <div className="mt-2">
                  <select
                    onChange={(e) => setSelectedValue(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-coffee"
                    style={{ color: "#000" }}
                  >
                    <option value="" defaultValue>
                      Select Volunteer
                    </option>
                    {volunteers.map(({index, id, name }) => (
                      <option key={index} value={id}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleVolunteerSelect()}
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-coffee border border-transparent rounded-md shadow-sm hover:bg-coffee-dark focus:outline-none focus:ring focus:border-coffee" style={{color:"white"}}
                >
                  Save
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-coffee border border-transparent rounded-md shadow-sm hover:bg-coffee-dark focus:outline-none focus:ring focus:border-coffee"style={{color:"white"}}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PreviousDonations;
