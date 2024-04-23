import { Box, Flex, Text, Image } from '@chakra-ui/react';

export default function serchbynone() {
    return (
        <Flex
            justify="center"
            align="center"
            height="100vh"
            bg="gray.900"
            flexDirection="row"
            p="150px"
        >
            {/* Image on the left */}
            <Box width="30%" marginRight="2%">
                <Image src="..\favicon.ico" alt="Image" w="70%" />
            </Box>

            {/* Text in the center */}
            <Box width="60%">
                <Text fontSize="7xl" fontWeight="bold" marginBottom="4">
                    Find your movies here!
                </Text>
                <Text fontSize="lg">
                    Explore our gallery full of exciting films from all around the globe for your entertainment. No hidden charges or disturbing ads.
                </Text>
            </Box>
        </Flex>
    );
}
