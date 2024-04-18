import React from "react";
import { Avatar, Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react";
import { FaBolt } from "react-icons/fa";

function Login() {
  return (
    <Center height="100vh">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <VStack spacing={4}>
          <Avatar size="xl" name="User" src="" />
          <Text fontSize="2xl" fontWeight="bold">
            My Saga
          </Text>
          <Input placeholder="Username" />
          <Input placeholder="Password" type="password" />
          <Button colorScheme="purple" leftIcon={<FaBolt />}>
            Login
          </Button>
        </VStack>
        <Button position="absolute" bottom="4" right="4" colorScheme="teal">
          Forgot Password?
        </Button>
      </Box>
    </Center>
  );
}

export default Login;
