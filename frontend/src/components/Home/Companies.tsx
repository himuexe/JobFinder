import Marquee from "react-fast-marquee";
import { companies } from "../../data/Data";

const Companies = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12 text-mine-shaft-100">
        Trusted by <span className="text-clairt-400">1000+</span> Companies
      </h2>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-mine-shaft-950 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-mine-shaft-950 to-transparent z-10"></div>
        
        <Marquee pauseOnHover speed={50}>
          <div className="flex items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="mx-6 px-6 py-2 hover:bg-mine-shaft-900 rounded-xl transition-colors"
              >
                <img
                  className="h-16 md:h-20"
                  src={`/companies/${company}.png`}
                  alt={company}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Companies;