//   // src/components/ManageVolunteer.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const ManageVolunteer = () => {
//   const [volunteers, setVolunteers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch volunteers from the backend when the component mounts
//     const fetchVolunteers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5001/volunteers'); // Replace with your backend URL
//         setVolunteers(response.data);
//       } catch (error) {
//         console.error('Error fetching volunteers:', error);
//       }
//     };

//     fetchVolunteers();
//   }, []);

//   // const handleDeleteVolunteer = async (id) => {
//   //   try {
//   //     // Implement your delete volunteer logic here
//   //     // For demonstration purposes, we'll send a request to the backend to delete the volunteer
//   //     await axios.delete(`http://localhost:5001/volunteers/${id}`); // Replace with your backend URL
//   //     setVolunteers((prevVolunteers) => prevVolunteers.filter((volunteer) => volunteer.id !== id));
//   //   } catch (error) {
//   //     console.error('Error deleting volunteer:', error);
//   //   }
//   // };
//   const handleDeleteVolunteer = async (id) => {
//     try {
//       // Updated the DELETE request URL to include the volunteer ID
//       await axios.delete(`http://localhost:5001/volunteers/${id}`);
  
//       // Updated the state update to use the correct property for filtering (changed from 'volunteer.id' to 'volunteer._id')
//       setVolunteers((prevVolunteers) => prevVolunteers.filter((volunteer) => volunteer._id !== id));
//     } catch (error) {
//       console.error('Error deleting volunteer:', error);
//     }
//   };
  

//   const filteredVolunteers = volunteers.filter((volunteer) =>
//     volunteer.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <div className="bg-white p-6 rounded-md shadow-md">
//         {/* Search input and button */}
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md mr-2"
//           />
//           <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Search</button>
//         </div>

//         {/* Table to display volunteer data */}
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {filteredVolunteers.map((volunteer) => (
//               <tr key={volunteer._id}>
//                 <td className="px-6 py-4 whitespace-nowrap">{volunteer.name}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{volunteer.email}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {/* Delete button for each row */}
//                   <button
//                     className="text-red-500"
//                     onClick={() => handleDeleteVolunteer(volunteer._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageVolunteer;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/volunteers');
        setVolunteers(response.data);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
    };

    fetchVolunteers();
  }, []);

  const handleDeleteVolunteer = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/volunteers/${id}`);
      setVolunteers((prevVolunteers) => prevVolunteers.filter((volunteer) => volunteer._id !== id));
    } catch (error) {
      console.error('Error deleting volunteer:', error);
    }
  };

  const filteredVolunteers = volunteers.filter((volunteer) =>
    volunteer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mr-2"
          />
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
          style={{ color: 'white' }}>Search</button>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredVolunteers.map((volunteer) => (
              <tr key={volunteer._id}>
                <td className="px-6 py-4 whitespace-nowrap">{volunteer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{volunteer.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
                    style={{ color: 'white' }}
                    onClick={() => handleDeleteVolunteer(volunteer._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageVolunteer;

