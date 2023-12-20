import './App.css';
import Home from './screens';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './screens/About';
import Services from './screens/services';
import Contact from './screens/contact';
import LoginPage from './screens/LoginPage';
import RegistrationPage from './screens/RegistrationPage';
import ADashboard from './screens/Adashboard/Adashboard';
import VDashboard from './screens/Vdashboard/Vdashboard';
import RDashboard from './screens/Rdashboard/Rdashboard';

function App() {
  
   
  return (
    <>
    <Router>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<RegistrationPage/>}/>
        <Route path='/adashboard' element={<ADashboard/>}/>
        <Route path='/vdashboard' element={<VDashboard/>}/>
        <Route path='/Rdashboard' element={<RDashboard/>}/>
      </Routes>
    </Router>
    </>
  );
}
export default App;
// import React, { useState } from 'react';
// import './App.css';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import Home from './screens';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import About from './screens/About';
// import Services from './screens/services';
// import Contact from './screens/contact';
// import LoginPage from './screens/LoginPage';
// import RegistrationPage from './screens/RegistrationPage';
// import ADashboard from './screens/Adashboard/Adashboard';
// import Vdashboard from './screens/Vdashboard/Vdashboard';
// import RDashboard from './screens/Rdashboard/RDashboard';


// function App() {
//   function PrivateRoute({ element, ...rest }) {
//     return isAuthenticated ? element : <Navigate to="/login" />;
//   }
//   return (
//     <><Navbar /><Router>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/services' element={<Services />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/login' element={<LoginPage />} />
//         <Route path='/signup' element={<RegistrationPage />} />
//         <Route path='/Adashboard' element={<PrivateRoute element={<ADashboard />} />} />
//         <Route path='/Vdashboard' element={<PrivateRoute element={<Vdashboard />} />} />
//         <Route path='/Rdashboard' element={<PrivateRoute element={<RDashboard />} />} />
//       </Routes>
//     </Router><Footer /></>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './screens';
// import About from './screens/About';
// import Services from './screens/services';
// import Contact from './screens/contact';
// import LoginPage from './screens/LoginPage';
// import RegistrationPage from './screens/RegistrationPage';
// import ADashboard from './screens/Adashboard/Adashboard';
// import Rdashboard from './screens/Rdashboard/Rdashvoard';
// import Vdashboard from './screens/Vdashboard/Vdashboard';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleAuthentication = (authenticated) => {
//     setIsAuthenticated(authenticated);
//   };

//   return (
//     <>
//       <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
//       <Router>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/services' element={<Services />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/login' element={<LoginPage onAuthenticate={handleAuthentication} />} />
//           <Route path='/signup' element={<RegistrationPage />} />
//           <Route path='/Adashboard' element={<PrivateRoute element={<ADashboard />} />} />
//           <Route path='/Vdashboard' element={<PrivateRoute element={<Vdashboard />} />} />
//           <Route path='/Rdashboard' element={<PrivateRoute element={<Rdashboard />} />} />
//         </Routes>
//       </Router>
//       <Footer/>
//     </>
//   );
// }

// // Custom PrivateRoute component
// function PrivateRoute({ element, ...rest }) {
//   return isAuthenticated ? element : <Navigate to="/login" />;
// }

// export default App;
