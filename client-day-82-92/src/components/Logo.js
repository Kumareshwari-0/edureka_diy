import React from 'react';

const Logo = ({ loggedIn }) => {
  return (
    <>
      {!loggedIn ? (
        <div className='h-10 w-10 mt-2 bg-white flex justify-center items-center rounded-full text-lg'>
          e!
        </div>
      ) : null}
    </>
  );
}

export default Logo;
