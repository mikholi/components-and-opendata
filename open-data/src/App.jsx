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
  }),
}, [])

}


export default App;
