import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

const FilterCard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await axios.get('http://localhost:8080/rest/restaurants');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    }
    fetchRestaurants();
  }, []);

  useEffect(() => {
    let filteredResults = restaurants;

    if (selectedLocation) {
      filteredResults = filteredResults.filter(restaurant => restaurant.locality === selectedLocation);
    }

    if (selectedCuisine) {
      filteredResults = filteredResults.filter(restaurant => restaurant.cuisine.some(c => c.name === selectedCuisine));
    }

    if (minPrice) {
      filteredResults = filteredResults.filter(restaurant => restaurant.min_price >= minPrice);
    }

    if (sortBy === 'rating') {
      filteredResults.sort((a, b) => b.aggregate_rating - a.aggregate_rating);
    } else if (sortBy === 'price') {
      filteredResults.sort((a, b) => a.min_price - b.min_price);
    }

    setFilteredRestaurants(filteredResults);
  }, [restaurants, selectedLocation, selectedCuisine, minPrice, sortBy]);

  // Get unique values for location and cuisine
  const uniqueLocations = [...new Set(restaurants.map(restaurant => restaurant.locality))];
  const uniqueCuisines = [...new Set(restaurants.flatMap(restaurant => restaurant.cuisine.map(c => c.name)))];

  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Filter Restaurants</h1>
      <div className="flex flex-wrap mb-4">
        <label className="w-full md:w-1/4 mb-2 md:mb-0">
          Select Location:
          <select className="block w-full bg-white border border-gray-300 p-2 rounded" value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
            <option value="">All Locations</option>
            {uniqueLocations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </label>
        <label className="w-full md:w-1/4 mb-2 md:mb-0">
          Select Cuisine:
          <select className="block w-full bg-white border border-gray-300 p-2 rounded" value={selectedCuisine} onChange={e => setSelectedCuisine(e.target.value)}>
            <option value="">All Cuisines</option>
            {uniqueCuisines.map((cuisine, index) => (
              <option key={index} value={cuisine}>{cuisine}</option>
            ))}
          </select>
        </label>
        <label className="w-full md:w-1/4 mb-2 md:mb-0">
          Minimum Price:
          <input className="block w-full bg-white border border-gray-300 p-2 rounded" type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
        </label>
        <label className="w-full md:w-1/4 mb-2 md:mb-0">
          Sort By:
          <select className="block w-full bg-white border border-gray-300 p-2 rounded" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="rating">Rating</option>
            <option value="price">Price</option>
          </select>
        </label>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Filtered Restaurants</h2>
        <ul className=''>
          {filteredRestaurants.map(restaurant => (
            <div key={restaurant._id} className='flex h-52 w-[50%] border border-gray-300 justify-between items-center'>
            <li  className=" p-4 mb-4 rounded">
              <p className="font-bold">Name: {restaurant.name}</p>
              <p>City: {restaurant.city}</p>
              <p>Locality: {restaurant.locality}</p>
              <p>Rating: {restaurant.aggregate_rating}</p>
              <p>Min Price: {restaurant.min_price}</p>
              <p>Contact Number: {restaurant.contact_number}</p>
              <p>Cuisine: {restaurant.cuisine.map(c => c.name).join(', ')}</p>
            </li>
            <li>
                <img src={restaurant.image} className='h-44' alt="" />
            </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default FilterCard