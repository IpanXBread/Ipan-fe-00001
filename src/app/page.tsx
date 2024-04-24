'use client'
// Basic
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Chakra UI
import { Link } from '@chakra-ui/next-js'

// components
import HeaderRF from './component/headerRF';
import FooterRF from './component/footerRF';
import ResultRF from './component/resultsRF';

// logic
import { MenuProvider, useMenu } from './logic/MenuContext';
import SearchContext from './logic/SearchContext';


export default function MainPage() {

  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    fetch('https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setPrayerTimes(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log('Current state of prayerTimes:', prayerTimes);

  return (
    <MenuProvider>
      <HeaderRF />
      <SearchContext />

      <ResultRF />
      <FooterRF />
    </MenuProvider>
  );
}
