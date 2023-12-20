// // src/components/UserProfile.jsx
// import React, { useState } from 'react';

// const Profile = () => {
//   // Placeholder user data (replace this with data from your backend)
//   const initialUserData = {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     phoneNumber: '555-1234',
//   };

//   const [userData, setUserData] = useState(initialUserData);
//   const [isEditing, setEditing] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleUpdateProfile = () => {
//     // Implement your update profile logic here
//     // For demonstration purposes, we'll just log the updated data to the console
//     console.log('Updated user data:', userData);
//     setEditing(false);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Profile</h2>
//       <div className="bg-white p-6 rounded-md shadow-md">
//         <form>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="mb-4">
//               <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={userData.firstName}
//                 onChange={handleInputChange}
//                 readOnly={!isEditing}
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={userData.lastName}
//                 onChange={handleInputChange}
//                 readOnly={!isEditing}
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-600">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={userData.email}
//                 onChange={handleInputChange}
//                 readOnly={!isEditing}
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={userData.phoneNumber}
//                 onChange={handleInputChange}
//                 readOnly={!isEditing}
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               />
//             </div>
//           </div>
//           {isEditing ? (
//             <div className="mt-4">
//               <button
//                 type="button"
//                 onClick={handleUpdateProfile}
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
//                 style={{ color: 'white' }}
//               >
//                 Update Profile
//               </button>
//             </div>
//           ) : (
//             <div className="mt-4">
//               <button
//                 type="button"
//                 onClick={() => setEditing(true)}
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
//                 style={{ color: 'white' }}
//               >
//                 Edit Profile
//               </button>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// // src/components/UserProfile.jsx

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const UserProfile = () => {
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     password: '', // Add the password field
//   });

//   useEffect(() => {
//     // Fetch user data when the component mounts
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       // Use the user ID stored in localStorage to fetch user data
//       const userId = localStorage.getItem('userId');
//       const response = await axios.get(`http://localhost:5001/users/${userId}`);

//       setUserData(response.data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleUpdateProfile = async () => {
//     try {
//       // Use the user ID stored in localStorage to update user data
//       const userId = localStorage.getItem('userId');
//       await axios.put(`http://localhost:5001/users/${userId}`, userData);

//       toast.success('Profile updated successfully');
//       // Optionally, you can refetch the user data to ensure it's up to date
//       fetchUserData();
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       toast.error('An error occurred while updating the profile. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Profile</h2>
//       <div className="bg-white p-6 rounded-md shadow-md">
//         <form>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-600">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={userData.name}
//               onChange={handleInputChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={userData.email}
//               onChange={handleInputChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-600">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={userData.password}
//               onChange={handleInputChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div className="mt-4">
//             <button
//               type="button"
//               onClick={handleUpdateProfile}
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
//               style={{ color: 'white' }}
//             >
//               Update Profile
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '', // Add the phoneNumber field
  });

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Use the user ID stored in localStorage to fetch user data
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`http://localhost:5001/users/${userId}`);

      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdateProfile = async () => {
    try {
      // Use the user ID stored in localStorage to update user data
      const userId = localStorage.getItem('userId');
      await axios.put(`http://localhost:5001/users/${userId}`, userData);

      toast.success('Profile updated successfully');
      // Optionally, you can refetch the user data to ensure it's up to date
      fetchUserData();
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('An error occurred while updating the profile. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Profile</h2>
      <div className="bg-white p-6 rounded-md shadow-md">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={handleUpdateProfile}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
              style={{ color: 'white' }}
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;