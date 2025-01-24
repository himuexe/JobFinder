import Marquee from "react-fast-marquee";
import { companies } from "../../data/Data";

const Companies = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-3xl md:text-4xl text-center font-semibold mb-10 text-mine-shaft-100">
        Trusted by <span className="text-clairt-400">1000+</span> Companies
      </div>
      <div className="relative">
        {/* Gradient overlay for marquee */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-mine-shaft-950 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-mine-shaft-950 to-transparent z-10"></div>
        <Marquee pauseOnHover={true} speed={50}>
          {companies.map((company, index) => (
            <div
              key={index}
              className="mx-4 md:mx-8 px-4 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer transition duration-300 ease-in-out"
            >
              <img
                className="h-16 md:h-24"
                src={`/companies/${company}.png`}
                alt={company}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Companies;