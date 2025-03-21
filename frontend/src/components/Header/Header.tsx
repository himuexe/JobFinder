import { Indicator } from "@mantine/core";
import { IconAsset, IconBell, IconSettings } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  return (
    <header className="w-full bg-mine-shaft-950 h-20 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/">
          <div className="flex items-center gap-2 text-clairt-400">
            <IconAsset className="h-8 w-8" stroke={1.5} />
            <span className="text-2xl md:text-3xl font-semibold">JobFinder</span>
          </div>
          </Link>
          
          <NavLinks />
          
          <div className="flex items-center gap-4">
            <ProfileMenu/>            
            <button className="bg-mine-shaft-900 p-2.5 rounded-full hover:bg-mine-shaft-800 transition-colors">
              <IconSettings className="h-5 w-5 text-mine-shaft-100" />
            </button>
            
            <button className="bg-mine-shaft-900 p-2.5 rounded-full hover:bg-mine-shaft-800 transition-colors">
              <Indicator color="clairt.5" size={8} processing offset={6}>
                <IconBell className="h-5 w-5 text-mine-shaft-100" />
              </Indicator>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;