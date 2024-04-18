// Complete the Index page component for Saga Solar internal employees project tracking
import { Box, Flex, Text, Button, VStack, HStack, Input, useColorMode, useColorModeValue, IconButton, Image } from "@chakra-ui/react";
import { FaSun, FaMoon, FaSearch, FaPlus } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bgColor} minH="100vh" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color={textColor}>
          Saga Solar Projects
        </Text>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="outline" aria-label="Toggle color mode" />
      </Flex>
      <VStack spacing={4}>
        <HStack width="100%">
          <Input placeholder="Search projects" />
          <IconButton icon={<FaSearch />} aria-label="Search" />
        </HStack>
        <Button leftIcon={<FaPlus />} colorScheme="blue">
          Add New Project
        </Button>
        <Flex direction="column" width="100%" mt={4}>
          <Text mb={2} fontSize="lg" fontWeight="semibold" color={textColor}>
            Recent Projects
          </Text>
          {/* Example project card */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold" color={textColor}>
                Project Solaris
              </Text>
              <Button colorScheme="teal">View Details</Button>
            </Flex>
            <Text mt={2} color={textColor}>
              Status: In Progress
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;
