import { jobList } from "../../data/JobsData"
import JobCard from "../FindJobs/JobCard"

const CompanyJobs = () => {
  return (
    <div className="mt-10 flex md:flex-row flex-col gap-5 flex-wrap">
    {jobList.map((job, index) => (
      <JobCard key={index} {...job} />
    ))}
  </div>
  )
}

export default CompanyJobs