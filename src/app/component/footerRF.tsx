import { Box, Text, Flex, Heading, Grid, GridItem } from '@chakra-ui/react';
import { FaArrowRight, FaAddressBook, FaMailBulk, FaPhone } from 'react-icons/fa';

export default function footerRF() {

    return (
        <>
            <Flex
                height="350px"
            >
                {/* Left container */}
                <Box width="35%" backgroundColor="gray.600" height="100%" p="30px 50px 50px 50px">
                    <Heading mr="10">PcariMovie</Heading>
                    <Text mt="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisi vitae purus efficitur fringilla id vel ipsum.</Text>
                    <Text mt="20px" fontWeight="bold">Join Newsletter</Text>
                    <Box mt="20px" backgroundColor="gray.400" w="250px" h="50px" rounded="md" display="flex" alignItems="center" justifyContent="space-between" px={4}>
                        <Text>Insert your email here</Text>
                        <Box bg="gold" p="10px" color="black" rounded="9px">
                            <FaArrowRight />
                        </Box>
                    </Box>
                </Box>

                {/* Right container */}
                <Box width="65%" backgroundColor="gray.700" height="100%">
                    <Box height="60%" ml="10">
                        <Grid
                            templateColumns="1fr 1fr 1fr"
                            gap={5}
                            ml="8"
                            mr="25"
                            mt="70"
                        >
                            <GridItem colSpan={1} rowSpan={1} fontWeight="bold">
                                Product
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} fontWeight="bold">
                                Media Group
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} fontWeight="bold">
                                Sitemap
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                Movies
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                Nice Studio
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                About
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                TV Show
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                Nice news
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                Careers
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                Videos
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                Nice TV
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1}>
                                Press
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center" m="0px 50px 0px 50px">
                        <FaAddressBook />
                        <Text m="0px 10px 0px 10px">
                            8819 Ohio St. South Gate, California 90280
                        </Text>
                        <FaMailBulk />
                        <Text m="0px 10px 0px 10px">
                            ourstudio@hello.com
                        </Text>
                        <FaPhone />
                        <Text m="0px 10px 0px 10px">
                            +271 386-647-3637
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </>
    );
}



