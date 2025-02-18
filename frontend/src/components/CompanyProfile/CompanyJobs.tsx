import { jobList } from "../../data/JobsData";
import JobCard from "../FindJobs/JobCard";

const CompanyJobs = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {jobList.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default CompanyJobs;