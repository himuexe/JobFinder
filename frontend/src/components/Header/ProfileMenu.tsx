import { Menu,  Avatar } from '@mantine/core';
import AvatarImg from "../../assets/avatar.png";
import {
  IconMessageCircle,
  IconUserCircle,
  IconFileText,
  IconLogout2,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const ProfileMenu = ()=> {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
      <div className="hidden cursor-pointer md:flex items-center gap-3">
              <span className="text-mine-shaft-100">Himanshu</span>
              <Avatar src={AvatarImg} size="md" radius="xl" />
            </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Link to="/profile">
        <Menu.Item leftSection={<IconUserCircle size={14} />}>
          Profile
        </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText size={14} />}>
          Resume
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={<IconLogout2 size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default ProfileMenu;