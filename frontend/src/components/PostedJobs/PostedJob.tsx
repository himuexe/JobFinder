import { Tabs } from "@mantine/core";
import { activeJobs } from "../../data/PostedJob";
import PostedJobcard from "./PostedJobcard";

const PostedJob = () => {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 mt-5">
      <div className="text-2xl font-semibold mb-5">Jobs</div>
      <div>
        <Tabs autoContrast variant="pills" defaultValue="active">
          <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
            <Tabs.Tab value="active">Active [4]</Tabs.Tab>
            <Tabs.Tab value="draft">Drafts [1]</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="active" className="mt-5">
            <div className="flex flex-col gap-5">
              {activeJobs.map((item, index) => (
                <PostedJobcard key={index} {...item} />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="draft">Second panel</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJob;