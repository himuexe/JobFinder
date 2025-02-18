import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {
  return (
    <div className="w-full md:w-3/4">
      <div className="relative">
        <img className="rounded-t-2xl w-full" src="/Banner.jpg" alt="" />
        <img
          className="rounded-3xl w-32 h-32 md:w-48 md:h-48 -bottom-0.5 absolute left-3 border-mine-shaft-950 border-8 bg-mine-shaft-700"
          src="/Icons/Google.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-12">
        <div className="text-2xl md:text-3xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar size="xs" src="https://avatars.githubusercontent.com/u/1" />
            <Avatar size="xs" src="https://avatars.githubusercontent.com/u/2" />
            <Avatar size="xs" src="https://avatars.githubusercontent.com/u/3" />
            <Avatar>+10k</Avatar>
          </Avatar.Group>
        </div>
        <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          Mumbai
        </div>
      </div>
      <Divider my="xl" />
      <div>
        <Tabs variant="outline" radius="lg" defaultValue={"about"}>
          <Tabs.List className="[&_button]:!text-lg mb-5 font-semibold [&_button[data-active=true]]:!text-clairt-400">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about"><AboutComp /></Tabs.Panel>
          <Tabs.Panel value="jobs"><CompanyJobs /></Tabs.Panel>
          <Tabs.Panel value="employees"><CompanyEmployees /></Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Company;