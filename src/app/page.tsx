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

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/genre?genre=comedy');
        setData(response.data);
        console.log("API: ", response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <MenuProvider>
      <HeaderRF />
      <SearchContext />

      <ResultRF />
      <FooterRF />
    </MenuProvider>
  );
}
