import JobDesc from "../components/JobDesc/JobDesc";
import RecommendedJobs from "../components/JobDesc/RecommendedJobs";

const JobDescPage = () => {
  return (
    <div className="container mx-auto mt-10 px-4 md:px-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <JobDesc />
        </div>
        <div className="w-full md:w-1/3">
          <RecommendedJobs />
        </div>
      </div>
    </div>
  );
};

export default JobDescPage;