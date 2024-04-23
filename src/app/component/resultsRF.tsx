import React, { useState } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useMenu } from '../logic/MenuContext';

export default function ResultsRF() {
    const { selectedMenuItem } = useMenu();

    let content;
    switch (selectedMenuItem) {
        case 'Home':
            content = (
                <>
                    <GridItem colSpan={2} rowSpan={1}>
                        <Box h="400px" mb="7" bg="blue" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="400px" mb="7" bg="blue" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="400px" mb="7" bg="blue" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="400px" mb="7" bg="blue" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="400px" mb="7" bg="blue" />
                    </GridItem>
                </>
            );
            break;
        case 'Theatre':
            content = (
                <>
                    <GridItem colSpan={2} rowSpan={1}>
                        <Box h="400px" mb="7" bg="red" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="400px" mb="7" bg="red" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="400px" mb="7" bg="red" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="400px" mb="7" bg="red" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="400px" mb="7" bg="red" />
                    </GridItem>
                </>
            );
            break;
        case 'Timeslot':
            content = (
                <>
                    <GridItem colSpan={2} rowSpan={1}>
                        <Box h="400px" mb="7" bg="yellow" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="400px" mb="7" bg="yellow" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="400px" mb="7" bg="yellow" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="400px" mb="7" bg="yellow" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="400px" mb="7" bg="yellow" />
                    </GridItem>
                </>
            );
            break;
        default:
            content = null;
    }

    return (
        <Grid
            templateColumns="2fr 2fr 2fr"
            gap={8}
            ml="6"
            mr="6"
        >
            {content}
        </Grid>
    );
}
