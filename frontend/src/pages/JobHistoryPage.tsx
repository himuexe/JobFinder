import { Divider } from "@mantine/core";
import JobHistory from "../components/Job History/JobHistory";

const JobHistoryPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <Divider size="xs" />
      <div className="my-5">
        <JobHistory />
      </div>
    </div>
  );
};

export default JobHistoryPage;