import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../../data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-3/4 mt-5">
      <div className="text-2xl font-semibold flex items-center">
        Software Engineer
        <Badge variant="light" size="sm" ml="sm" color="clairt.4">
          Active
        </Badge>
      </div>
      <div className="font-medium text-mine-shaft-300 mb-5">NY, US</div>
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="overview">
          <Tabs.List className="[&_button]:!text-lg mb-5 font-semibold [&_button[data-active=true]]:!text-clairt-400">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview">
            <JobDesc edit />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {talents.map(
                (talent, index) =>
                  index < 6 && (
                    <TalentCard key={index} {...talent} posted />
                  )
              )}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {talents.map(
                (talent, index) =>
                  index < 6 && (
                    <TalentCard key={index} {...talent} invited />
                  )
              )}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobDesc;