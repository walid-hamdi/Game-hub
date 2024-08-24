import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order by : Relevant
      </MenuButton>
      <MenuList>
        <MenuItem>Relevant</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
