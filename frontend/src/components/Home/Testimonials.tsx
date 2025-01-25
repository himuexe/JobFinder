import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../../data/Data";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5 px-4 sm:px-8">
      {/* Heading Section */}
      <div className="text-3xl md:text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        What <span className="text-clairt-400">Users</span> says about us?
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-4 xl:gap-6 mt-10">
        {testimonials.map((testimony, index) => (
          <div
            key={index}
            className="w-full lg:w-[23%] border border-clairt-400 p-3 rounded-xl"
          >
            {/* User Info and Rating */}
            <div className="flex gap-2 items-center">
              <Avatar
                className="!h-16 !w-16"
                src={`https://avatars.githubusercontent.com/u/${index}`}
                radius="xl"
              />
              <div>
                <div className="text-lg text-mine-shaft-100 font-semibold">
                  {testimony.name}
                </div>
                <Rating value={testimony.rating} readOnly fractions={2} />
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="text-xs text-mine-shaft-300 mt-3">
              {testimony.testimonial}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;