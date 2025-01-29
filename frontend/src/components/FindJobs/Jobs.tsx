import { jobList } from "../../data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        <Sort />
      </div>
      <div className="mt-10 flex md:flex-row flex-col gap-5 flex-wrap">
        {jobList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;