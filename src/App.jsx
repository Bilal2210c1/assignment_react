import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Login from './Pages/Login';
import Userreg from './Pages/Userreg';
import Home from './Pages/Home';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <> 
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
              <Route path="Userreg" element={<Userreg />} />
              <Route path="Login" element={<Login/>} />
            
          
        </Routes>
    </Router>
        </>
  );
};

export default App;
