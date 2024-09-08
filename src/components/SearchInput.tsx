import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import useGameQueryStore from "../store/store";

const SearchInput = () => {
  const setSearch = useGameQueryStore((store) => store.setSearch);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearch((ref.current as HTMLInputElement).value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BiSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Searching games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
