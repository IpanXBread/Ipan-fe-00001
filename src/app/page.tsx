'use client'
// Basic React
import React, { createContext, useState } from 'react';

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

  return (
    <MenuProvider>
      <HeaderRF />

      < SearchContext/>

      <ResultRF />
      <FooterRF />
    </MenuProvider>
  );
}

// gotta make it into function to make it able to read useMenu() context before reading the Main Page else, error
