import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const BreweryList = () => {
  const [breweries, setBreweries] = useState([]);
  const [search,setSearch] = useState('');

useEffect(() => {
  axios.get('https://api.openbrewerydb.org/breweries')
  .then(response => {
    setBreweries(response.data);
  })
  .catch(error => {
    console.error('Cannot load data', error);
  });
}, [])

const filteredBreweries = breweries.filter(brewery =>
  brewery.name.toLowerCase().includes(search.toLocaleLowerCase())
);

return (
  <div>
    <input
    type="text"
    placeholder='Search for breweries..'
    value={search}
    onChange={e => setSearch(e.target.value)}
    />
    <ul>
      {filteredBreweries.map(brewery => (
        <li key={brewery.id}>
          {brewery.name} - {brewery.city}, {brewery.state}
        </li>
      ))}
    </ul>
  </div>
)

}


export default BreweryList;
