      import React, { useState } from 'react';
   
      import QuickSearch from './QuickSearch';
import Logo from './Logo';
import NavBar from './NavBar';
import Authentication from './Authentication';
import HomeSearch from './HomeSearch';
      // import RestaurantDetails from './RestaurantDetails';



      const Home = () => {
          return (
              <div>
                  <WallPaper />
                  <QuickSearch/>
              </div>
          );
      }

      export default Home;

      function WallPaper() {
          const [isLogin, setIsLogin] = useState(false);
          const [loggedIn, setLoggedIn] = useState(false);
          return (
              <div className='bg-wall'>
                  <div className="header justify-around p-2 bg-red-500 flex">
                      <Logo loggedIn={loggedIn} />
                      <NavBar />
                      <Authentication isLogin={isLogin} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setIsLogin={setIsLogin} />
                  </div>
                  <HomeSearch>
                
                  </HomeSearch>
              </div>
          );
      }



      





    

     