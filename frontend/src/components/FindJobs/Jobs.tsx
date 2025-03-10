import { jobList } from "../../data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
  return (
    <div className="px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-2xl font-semibold text-mine-shaft-100">
          Recommended Jobs
        </h1>
        <Sort />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobList.map((job, index) => (
          <JobCard
            key={index}
            {...job}
            applicants={job.applicants.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
