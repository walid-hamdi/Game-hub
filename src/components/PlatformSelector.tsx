import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms, { Platform } from "./usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform?: Platform;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  const currentPlatform = data.find(
    (item) => item.name === selectedPlatform?.name
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {currentPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
