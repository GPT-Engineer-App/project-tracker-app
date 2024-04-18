import React from "react";
import { Avatar, Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react";
import { FaBolt } from "react-icons/fa";

function Login() {
  return (
    <Center height="100vh">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <VStack spacing={4}>
          <Avatar
            size="xl"
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.06 11H19L10 22L8.94 13H3L12 2Z" />
              </svg>
            }
          />
          <Text fontSize="2xl" fontWeight="bold">
            My Saga
          </Text>
          <Input placeholder="Username" />
          <Input placeholder="Password" type="password" />
          <Button colorScheme="purple" leftIcon={<FaBolt />}>
            Login
          </Button>
        </VStack>
        <Button size="sm" fontWeight="light" colorScheme="teal">
          Forgot Password?
        </Button>
      </Box>
    </Center>
  );
}

export default Login;
