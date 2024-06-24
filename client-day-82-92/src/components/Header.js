import React, { useState } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import Authentication from './Authentication';


const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
   
      <div className="header justify-around p-2 bg-red-500 flex  items-center">
        <Logo loggedIn={loggedIn} />
        <NavBar />
        <Authentication 
          isLogin={isLogin} 
          loggedIn={loggedIn} 
          setLoggedIn={setLoggedIn} 
          setIsLogin={setIsLogin} 
        />
      </div>
   
  );
}

export default Header;
    