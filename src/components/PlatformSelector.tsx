import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store/store";

const PlatformSelector = () => {
  const platformId = useGameQueryStore((store) => store.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((store) => store.setPlatformId);

  const { data, error } = usePlatforms();

  if (error) return null;

  const currentPlatform = data?.results.find((item) => item.id === platformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {currentPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
