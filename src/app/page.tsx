'use client'
// Basic React
import React, { createContext, useState } from 'react';

// Chakra UI
import { Link } from '@chakra-ui/next-js'

// components
import HeaderRF from './component/headerRF';
import FooterRF from './component/footerRF';
import ResultRF from './component/resultsRF';
import Searchbynone from './component/searchbynone';
import Searchbytheatre from './component/searchbytheatre';
import Searchbytimeslot from './component/searchbytimeslot';

// logic
import { ThemeSwitcher } from './logic/ThemeSwitcher';
import { MenuProvider, useMenu } from './logic/MenuContext';

export default function MainPage() {

  return (
    <MenuProvider>
      <HeaderRF />

      <InnerComponents />

      <ResultRF />
      <FooterRF />
    </MenuProvider>
  );
}

// gotta make it into function to make it able to read useMenu() context before reading the Main Page else, error
function InnerComponents() {
  const { selectedMenuItem } = useMenu();

  return (
    <>
      {selectedMenuItem === 'Home' && <Searchbynone />}
      {selectedMenuItem === 'Theatre' && <Searchbytheatre />}
      {selectedMenuItem === 'Timeslot' && <Searchbytimeslot />}
      <ResultRF />
    </>
  );
}