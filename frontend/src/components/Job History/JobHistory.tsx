import { Tabs } from "@mantine/core";
import { jobList } from "../../data/JobsData";
import Card from "./Card";

const JobHistory = () => {
  return (
    <div>
      <div className="text-2xl font-semibold mb-5">Job History</div>
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="applied">
          <Tabs.List className="[&_button]:!text-lg mb-5 font-semibold [&_button[data-active=true]]:!text-clairt-400">
            <Tabs.Tab value="applied">Applied</Tabs.Tab>
            <Tabs.Tab value="saved">Saved</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="applied">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobList.map((job, index) => (
                <Card key={index} {...job} applied />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="saved">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobList.map((job, index) => (
                <Card key={index} {...job} saved />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="offered">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobList.map((job, index) => (
                <Card key={index} {...job} offered />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="interviewing">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobList.map((job, index) => (
                <Card key={index} {...job} interviewing />
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default JobHistory;