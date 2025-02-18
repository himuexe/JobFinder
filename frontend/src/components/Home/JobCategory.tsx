import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../../data/Data";

const JobCategory = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4 text-mine-shaft-100">
        Browse <span className="text-clairt-400">Job</span> Category
      </h2>
      
      <p className="text-base md:text-lg mb-12 text-mine-shaft-300 text-center max-w-2xl mx-auto">
        Explore diverse job opportunities tailored to your preferences. Start
        your career journey today!
      </p>
      
      <Carousel
        slideSize={{ base: "100%", sm: "50%", md: "33%", lg: "25%" }}
        slideGap="md"
        loop
        align="start"
        styles={{
          control: {
            backgroundColor: "#7C3AED",
            color: "#ffffff",
            border: "none",
            '&:hover': {
              backgroundColor: "#6D28D9"
            }
          }
        }}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center mx-auto w-64 p-6 gap-4 border border-clairt-400 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-clairt-300 rounded-full">
                <img
                  className="h-10 w-10"
                  src={`/category/${category.name}.png`}
                  alt={category.name}
                />
              </div>
              
              <h3 className="text-mine-shaft-100 text-xl font-semibold text-center">
                {category.name}
              </h3>
              
              <p className="text-sm text-center text-mine-shaft-300">
                {category.desc}
              </p>
              
              <p className="text-clairt-300 text-lg font-medium">
                {category.jobs}+ new jobs posted
              </p>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
};

export default JobCategory;