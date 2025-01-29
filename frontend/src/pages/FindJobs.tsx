import { Divider } from "@mantine/core";
import SearchBar from "../components/FindJobs/SearchBar";
import Jobs from "../components/FindJobs/Jobs";

const FindJobs = () => {
  return (
    <div>
      <Divider size="xs" mx={{ base: 0, md: "md" }} />
      <SearchBar />
      <Divider size="xs" mx={{ base: 0, md: "md" }} />
      <Jobs />
    </div>
  );
};

export default FindJobs;