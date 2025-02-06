import { jobList } from "../../data/JobsData"
import JobCard from "../FindJobs/JobCard"

const RecommendedJobs = () => {
  return (
    <div>
      <div className="text-cl font-semibold mb-5">Recommended Jobs</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
        {jobList.map((job: any, index: any) => index < 6 && <JobCard key={index} {...job} />)}
      </div>
    </div>
  )
}

export default RecommendedJobs