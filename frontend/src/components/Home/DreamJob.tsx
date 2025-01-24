import { Avatar, TextInput } from "@mantine/core";
import HomeImg from "../../assets/home.png";
import { IconSearch } from "@tabler/icons-react";
import GoogleImg from "../../assets/google.png";

const DreamJob = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 md:px-16 py-8 gap-8">
      <div className="flex flex-col w-full md:w-[45%] gap-3">
        <div className="text-4xl md:text-6xl font-bold text-mine-shaft-100 leading-tight [&>span]:text-clairt-400">
          Find your <span>Dream </span> <span>Job</span> with us !
        </div>
        <div className="text-lg text-mine-shaft-200">
          Good life begins with a good company. Start exploring thousands of jobs
          in one place.
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-5">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 w-full"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 w-full"
            variant="unstyled"
            label="Job Type"
            placeholder="Full Time"
          />
          <div className="flex items-center justify-center h-12 w-full md:w-20 bg-clairt-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-clairt-500 cursor-pointer">
            <IconSearch className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[55%] flex items-center justify-center">
        <div className="w-full max-w-[50rem] relative">
          <img src={HomeImg} alt="" className="w-full h-auto" />
          <div className="absolute -right-2 md:-right-10 w-fit top-[50%] border-clairt-400 border rounded-lg p-2 backdrop-blur-md">
            <div className="text-center mb-1 text-sm text-mine-shaft-100">
              10k+ got jobs
            </div>
            <Avatar.Group>
              <Avatar
                src="https://avatars.githubusercontent.com/u/1027843?v=4"
                radius="xl"
              />
              <Avatar
                src="https://avatars.githubusercontent.com/u/1027843?v=4"
                radius="xl"
              />
              <Avatar
                src="https://avatars.githubusercontent.com/u/1027843?v=4"
                radius="xl"
              />
              <Avatar>+9k</Avatar>
            </Avatar.Group>
          </div>
          <div className="absolute -left-2 md:-left-5 w-fit top-[28%] border-clairt-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col">
            <div className="flex gap-2 items-center ">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                <img src={GoogleImg} alt="google svg" />
              </div>
              <div className="text-sm text-mine-shaft-100">
                <div className="">Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">Chennai</div>
              </div>
            </div>
            <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;