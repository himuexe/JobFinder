import { Avatar, Indicator } from "@mantine/core";
import { IconAsset, IconBell, IconSettings } from "@tabler/icons-react";
import AvatarImg from "../../assets/avatar.png";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 h-20 text-white flex justify-between px-6 items-center sticky top-0 z-50">
      <div className="flex gap-1 items-center text-clairt-400">
        <IconAsset className="h-8 w-8" stroke={1.5} />
        <div className="text-3xl font-semibold">JobFinder</div>
      </div>
      <NavLinks />
      <div className="flex gap-3 items-center">
        <div className="hidden md:flex items-center gap-2">
          <div className="">Himanshu</div>
          <Avatar src={AvatarImg} size="sm" />
        </div>
        <div className="bg-mine-shaft-900 p-2 rounded-full">
          <IconSettings className="h-5 w-5" />
        </div>
        <div className="bg-mine-shaft-900 p-2 rounded-full">
          <Indicator color="clairt.5" size={8} processing offset={6}>
            <IconBell className="h-5 w-5" />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;