// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PreviousCollections = () => {
//   const [previousCollectionsData, setPreviousCollectionsData] = useState([]);

//   useEffect(() => {
//     const fetchPreviousCollections = async () => {
//       try {
//         const response = await axios.get('http://localhost:5001/donate/previousCollectionsForVolunteer');
//         setPreviousCollectionsData(response.data);
//       } catch (error) {
//         console.error('Error fetching previous collections:', error);
//       }
//     };

//     fetchPreviousCollections();
//   }, []);

//   return (
//     <div>
//       <div className="bg-white p-6 rounded-md">
//         {/* Table to display previous collections data */}
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Donor Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Food Type
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Food Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Quantity
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Cooking Date Time
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Expiry Date Time
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Address
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Phone
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-coffee uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {previousCollectionsData.map((item, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.donorName}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.foodType}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.foodName}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.cookingDateTime}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.expiryDateTime}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PreviousCollections;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PreviousCollections = () => {
  const [previousCollectionsData, setPreviousCollectionsData] = useState([]);

  useEffect(() => {
    const fetchPreviousCollections = async () => {
      try {
        const response = await axios.get('http://localhost:5001/donate/previousCollectionsForVolunteer');
        setPreviousCollectionsData(response.data);
      } catch (error) {
        console.error('Error fetching previous collections:', error);
      }
    };

    fetchPreviousCollections();
  }, []);

  const handleDistribute = async (donationId) => {
    try {
      await axios.put(`http://localhost:5001/distributeDonation/${donationId}`);
      
      // Update the state to reflect the change
      setPreviousCollectionsData(prevData => prevData.map(item => {
        if (item._id === donationId) {
          return { ...item, status: 'distributed' };
        }
        return item;
      }));
    } catch (error) {
      console.error('Error distributing donation:', error);
    }
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-md">
        {/* Table to display previous collections data */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Donor Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Food Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Food Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cooking Date Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Expiry Date Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-coffee uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {previousCollectionsData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.donorName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.foodType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.foodName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.cookingDateTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.expiryDateTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.status !== 'distributed' && (
                    <button
                      className="text-white bg-coffee hover:bg-coffee focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                      style={{ color: 'white' }}
                      onClick={() => handleDistribute(item._id)}
                    >
                      Distribute
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviousCollections;
