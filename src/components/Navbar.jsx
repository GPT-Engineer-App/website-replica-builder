import { Box, Flex, Link, Spacer, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="lg" fontWeight="bold">Logo</Text>
        <Spacer />
        <Link href="/docs" mx={2}>Docs</Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            User Profile
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;