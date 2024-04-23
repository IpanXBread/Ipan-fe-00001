import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useMenu } from '../logic/MenuContext';

export default function ResultsRF() {
    const { selectedMenuItem } = useMenu(); // Use the useMenu hook to access the selectedMenuItem value

    // Define the content based on the selectedMenuItem value
    let content;
    switch (selectedMenuItem) {
        case 'Home':
            content = (
                <>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="200px" bg="blue" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="200px" bg="blue" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="200px" bg="blue" />
                    </GridItem>
                </>
            );
            break;
        case 'Theatre':
            content = (
                <>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="200px" bg="red" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="200px" bg="red" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="200px" bg="red" />
                    </GridItem>
                </>
            );
            break;
        case 'Timeslot':
            content = (
                <>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="200px" bg="yellow" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="200px" bg="yellow" />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box h="200px" bg="yellow" />
                    </GridItem>
                </>
            );
            break;
        default:
            content = null;
    }

    return (
        <Grid
            templateColumns="2fr 2fr 2fr" // 3 columns
            gap={8} // Gap between grid items
        >
            {content} {/* Render the content based on the selectedMenuItem value */}
        </Grid>
    );
}
