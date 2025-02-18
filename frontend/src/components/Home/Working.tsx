import { Avatar } from "@mantine/core";
import { work } from "../../data/Data";

const Working = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4 text-mine-shaft-100">
        How it <span className="text-clairt-400">works</span>
      </h2>
      
      <p className="text-base md:text-lg mb-12 text-mine-shaft-300 text-center max-w-2xl mx-auto">
        Effortlessly find, apply and get hired with our easy-to-use platform.
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="relative w-full lg:w-1/2">
          <img
            className="w-full max-w-xl mx-auto"
            src="/working/Girl.png"
            alt="Process illustration"
          />
          
          <div className="absolute top-1/4 right-0 lg:-right-8 bg-mine-shaft-950/80 border border-clairt-400 rounded-xl p-4 backdrop-blur-sm w-44">
            <div className="flex flex-col items-center gap-2">
              <Avatar
                src="https://avatars.githubusercontent.com/u/39"
                radius="xl"
                size="xl"
              />
              <h3 className="text-sm font-semibold text-mine-shaft-200 text-center">
                Complete your Profile
              </h3>
              <p className="text-xs text-mine-shaft-300">70% completed</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          {work.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="p-3 bg-clairt-300 rounded-full shrink-0">
                <img
                  className="h-12 w-12"
                  src={`/working/${item.name}.png`}
                  alt={item.name}
                />
              </div>
              <div>
                <h3 className="text-xl text-mine-shaft-200 font-semibold mb-2">
                  {item.name}
                </h3>
                <p className="text-mine-shaft-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Working;