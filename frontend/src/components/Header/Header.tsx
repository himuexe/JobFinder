import { Avatar } from "@mantine/core";
import {IconAsset, IconBell, IconSettings} from "@tabler/icons-react";
const Header = () => {
  return (
    <div className="w-full bg-black h-28 text-white flex justify-between px-6 items-center">
      <div className="flex gap-3 items-center">
        <IconAsset className="h-10 w-10" stroke={1.25}/>
        <div className="text-3xl font-semibold">JobFinder</div>
        </div>
      <div className="flex gap-3">
        <a href="">Find Job</a>
        <a href="">Find Talent</a>
        <a href="">Upload Jobs</a>
        <a href="">About Us</a>
      </div>
      <div className="flex gap-5 items-center">
        <IconBell/>
        <div className="flex items-center gap-2">
            <div className="">Himanshu</div>
            <Avatar/>
        </div>
        <IconSettings/>
      </div>
    </div>
  );
};

export default Header;
