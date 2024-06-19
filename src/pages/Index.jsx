import { Container, Text, VStack, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl">What do you want to build?</Text>
        <Text fontSize="2xl">recreate this website...</Text>
        <Button size="md" alignSelf="flex-end">Configure</Button>
      </VStack>
    </Container>
  );
};

export default Index;