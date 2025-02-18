import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import HomeImg from "../../assets/home.png";
import GoogleImg from "../../assets/google.png";

const DreamJob = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-1/2 gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mine-shaft-100 leading-tight">
            Find your <span className="text-clairt-400">Dream Job</span> with us!
          </h1>
          
          <p className="text-lg text-mine-shaft-200">
            Good life begins with a good company. Start exploring thousands of jobs
            in one place.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <TextInput
              className="flex-1 bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
              variant="unstyled"
              label="Job Title"
              placeholder="Software Engineer"
            />
            <TextInput
              className="flex-1 bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
              variant="unstyled"
              label="Job Type"
              placeholder="Full Time"
            />
            <button className="h-12 md:w-16 bg-clairt-400 text-mine-shaft-100 rounded-lg flex items-center justify-center hover:bg-clairt-500 transition-colors">
              <IconSearch className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <div className="relative max-w-2xl mx-auto">
            <img src={HomeImg} alt="Job search illustration" className="w-full h-auto" />
            
            {/* Job Stats Card */}
            <div className="absolute -right-2 md:-right-8 top-1/2 transform -translate-y-1/2 bg-mine-shaft-950/80 border-clairt-400 border rounded-lg p-4 backdrop-blur-sm">
              <p className="text-center mb-2 text-sm text-mine-shaft-100">
                10k+ got jobs
              </p>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((id) => (
                  <img
                    key={id}
                    className="w-8 h-8 rounded-full border-2 border-mine-shaft-950"
                    src={`https://avatars.githubusercontent.com/u/${id}`}
                    alt={`User ${id}`}
                  />
                ))}
                <span className="w-8 h-8 rounded-full bg-mine-shaft-800 text-mine-shaft-100 flex items-center justify-center text-xs border-2 border-mine-shaft-950">
                  +9k
                </span>
              </div>
            </div>

            {/* Job Post Card */}
            <div className="absolute -left-2 md:-left-8 top-1/4 bg-mine-shaft-950/80 border-clairt-400 border rounded-lg p-4 backdrop-blur-sm">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 p-2 bg-mine-shaft-900 rounded-lg flex items-center justify-center">
                  <img src={GoogleImg} alt="Google" className="w-full h-auto" />
                </div>
                <div>
                  <h3 className="text-mine-shaft-100 font-medium">Software Engineer</h3>
                  <p className="text-mine-shaft-200 text-sm">Chennai</p>
                </div>
              </div>
              <div className="flex justify-between mt-3 text-mine-shaft-200 text-xs">
                <span>1 day ago</span>
                <span>120 Applicants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamJob;
