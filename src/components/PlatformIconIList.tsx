import { HStack, Icon } from "@chakra-ui/react";

import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import { IconType } from "react-icons";
import { Platform } from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconIList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    max: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    iso: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
      ;
    </HStack>
  );
};

export default PlatformIconIList;
