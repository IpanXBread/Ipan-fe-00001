import { Box, Text, Flex } from '@chakra-ui/react';

export default function footerRF() {

    return (
        <>
            <Flex
                height="350px"
            >
                {/* Left container */}
                <Box width="35%" backgroundColor="gray" height="100%">
                    foot
                </Box>

                {/* Right container */}
                <Box width="65%" backgroundColor="darkgray" height="100%">
                    er
                </Box>
            </Flex>
        </>
    );
}