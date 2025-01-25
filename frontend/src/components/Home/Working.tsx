import { Avatar } from "@mantine/core";
import { work } from "../../data/Data";

const Working = () => {
  return (
    <div className="mt-20 pb-5">
      {/* Heading Section */}
      <div className="text-3xl md:text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        How it<span className="text-clairt-400"> works</span>
      </div>
      <div className="text-base md:text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-full md:w-1/2 px-4">
        Effortlessly find, apply and get hired with our easy-to-use platform.
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 justify-between items-center">
        {/* Image Section */}
        <div className="relative w-full lg:w-auto">
          <img
            className="w-full lg:w-[30rem]"
            src="/working/Girl.png"
            alt="girl"
          />
          {/* Profile Completion Card */}
          <div className="w-36 flex absolute top-[15%] right-0 lg:right-[-10%] flex-col items-center gap-1 border border-clairt-400 rounded-xl py-3 px-1 backdrop-blur-md">
            <Avatar
              className="!h-16 !w-16"
              src="https://avatars.githubusercontent.com/u/39"
              radius="xl"
            />
            <div className="text-sm font-semibold text-mine-shaft-200 text-center">
              Complete your Profile
            </div>
            <div className="text-xs text-mine-shaft-300">70% completed</div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col gap-10 w-full lg:w-auto mt-10 lg:mt-0">
          {work.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-2.5 bg-clairt-300 rounded-full">
                <img
                  className="h-12 w-12"
                  src={`/working/${item.name}.png`}
                  alt={item.name}
                />
              </div>
              <div>
                <div className="text-mine-shaft-200 text-xl font-semibold">
                  {item.name}
                </div>
                <div className="text-mine-shaft-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;