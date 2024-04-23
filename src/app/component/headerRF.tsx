import React from 'react';
import { ThemeSwitcher } from '../logic/ThemeSwitcher';
import { useMenu } from '../logic/MenuContext';

import { Flex, Heading, Image, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSearch, FaSun } from 'react-icons/fa';

export default function headerRF() {

    const { selectMenuItem } = useMenu();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Flex
                as="header"
                align="center"
                justify="space-between"
                p="4"
                bg="gray.900"
                color="white"
            >
                {/* Left section */}
                <Flex align="center">
                    <Image src="/path/to/your/image.png" alt="Logo" boxSize="40px" mr="4" /> {/* just use fake image for now */}
                    <Heading fontFamily="times-new-roman" mr="4" onClick={() => selectMenuItem('Home')}>Home</Heading>
                    <Heading fontFamily="times-new-roman" mr="4" onClick={() => selectMenuItem('Theatre')}>Theatre</Heading>
                    <Heading fontFamily="times-new-roman" onClick={() => selectMenuItem('Timeslot')}>Timeslot</Heading>
                </Flex>

                {/* Right section */}
                <Flex align="center">
                    <IconButton
                        aria-label="Search"
                        icon={<FaSearch />}
                        mr="4"
                        onClick={() => { }}
                    />
                    <ThemeSwitcher /> { /* later change to account name */}
                    <IconButton
                        ml="4"
                        aria-label={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                        onClick={toggleColorMode}
                    />
                </Flex>

            </Flex>
        </>
    );
};



{/* <Heading fontFamily="times-new-roman">About</Heading>
<ThemeSwitcher/> */}