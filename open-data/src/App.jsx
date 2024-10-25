// src/BreweryList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BreweryList = () => {
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      axios.get(`https://api.openbrewerydb.org/breweries?by_name=${search}`)
        .then(response => {
          setBreweries(response.data);
        })
        .catch(error => {
          console.error('Error getting data', error);
        });
    } else {
      setBreweries([]);
    }
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search breweries..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {breweries.map(brewery => (
          <li key={brewery.id}>
            {brewery.name} - {brewery.city}, {brewery.state}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreweryList;
