import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../../data/Data";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-3xl md:text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        Browse <span className="text-clairt-400">Job</span> Category
      </div>
      <div className="text-base md:text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-full md:w-1/2 px-4">
        Explore diverse job opportunities tailored to your preferences. Start
        your career journey today!
      </div>
      <Carousel
        slideSize={{ base: "100%", sm: "50%", md: "33%", lg: "22%" }} 
        slideGap="xs"
        loop
        align="start"
        styles={{
          control: {
            backgroundColor: "purple", 
            color: "#ffffff",
            border: "none",
          },
        }}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-64 gap-2 border border-clairt-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_rgba(0,0,0,0.2)] my-5 transition duration-300 ease-in-out mx-auto">
              <div className="p-2 bg-clairt-300 rounded-full">
                <img
                  className="h-8 w-8"
                  src={`/category/${category.name}.png`}
                  alt={category.name}
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold text-center">
                {category.name}
              </div>
              <div className="text-sm text-center text-mine-shaft-300">
                {category.desc}
              </div>
              <div className="text-clairt-300 text-lg">
                {category.jobs}+ new job posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;