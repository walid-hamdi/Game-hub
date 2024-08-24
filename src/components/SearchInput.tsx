import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BiSearch />} />
      <Input
        borderRadius={20}
        placeholder="Searching games..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
