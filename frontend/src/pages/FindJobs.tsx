import { Divider } from "@mantine/core";
import SearchBar from "../components/FindJobs/SearchBar";
import Jobs from "../components/FindJobs/Jobs";

const FindJobs = () => {
  return (
    <div className="container mx-auto">
      <SearchBar />
      <Divider className="opacity-20" size="xs" />
      <Jobs />
    </div>
  );
};

export default FindJobs;