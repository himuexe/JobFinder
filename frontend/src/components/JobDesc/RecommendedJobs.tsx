import { jobList } from "../../data/JobsData";
import JobCard from "../FindJobs/JobCard";

const RecommendedJobs = () => {
  return (
    <div className="space-y-6">
      <div className="text-xl font-semibold">Recommended Jobs</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {jobList.map(
          (job: any, index: any) =>
            index < 6 && (
              <div key={index} className="w-full">
                <JobCard {...job} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default RecommendedJobs;