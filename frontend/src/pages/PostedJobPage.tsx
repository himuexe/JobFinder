import { Divider } from "@mantine/core";
import PostedJob from "../components/PostedJobs/PostedJob";
import PostedJobDesc from "../components/PostedJobs/PostedJobDesc";

const PostedJobPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <Divider size="xs" />
      <div className="flex flex-col md:flex-row gap-8 mt-5">
        <PostedJob />
        <PostedJobDesc />
      </div>
    </div>
  );
};

export default PostedJobPage;