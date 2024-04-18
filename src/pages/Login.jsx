import React from "react";
import { Box, Button, Center, Input, VStack } from "@chakra-ui/react";
import { FaBolt } from "react-icons/fa";

function Login() {
  return (
    <Center height="100vh">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <VStack spacing={4}>
          <Input placeholder="Username" />
          <Input placeholder="Password" type="password" />
          <Button colorScheme="purple" leftIcon={<FaBolt />}>
            Login
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
