import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearch } from "react-icons/bi";

interface Props {
  onSearch: (term: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch((ref.current as HTMLInputElement).value);
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
