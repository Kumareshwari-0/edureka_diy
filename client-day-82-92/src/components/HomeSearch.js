import React from 'react';
import DropDownSearch from './DropDownSearch';
import SearchBar from './SearchBar';
import Logo from './Logo';

const HomeSearch = () => {
  return (
    <div className='flex-col control-center'>
        <Logo/>
      <h1 className='font-bold font-sans text-xl py-2'>Find the best restaurants</h1>
      <div className='flex w-max gap-2'>
       <DropDownSearch/>
       <SearchBar/>
      </div>
    </div>
  );
}

export default HomeSearch;
