import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  onSort: (item: string) => void;
  sort?: string;
}

const SortSelector = ({ onSort, sort }: Props) => {
  const sortObject = [
    { label: "Relevant", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "-rating" },
  ];

  const currentSortObject = sortObject.find(
    (sortItem) => sortItem.value === sort
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order by : {currentSortObject?.label || "Relevant"}
      </MenuButton>
      <MenuList>
        {sortObject.map((item) => (
          <MenuItem key={item.value} onClick={() => onSort(item.value)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
