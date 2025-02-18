import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../../data/Data";

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4 text-mine-shaft-100">
        What <span className="text-clairt-400">Users</span> say about us?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {testimonials.map((testimony, index) => (
          <div
            key={index}
            className="border border-clairt-400 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <Avatar
                src={`https://avatars.githubusercontent.com/u/${index}`}
                radius="xl"
                size="xl"
              />
              <div>
                <h3 className="text-lg text-mine-shaft-100 font-semibold mb-1">
                  {testimony.name}
                </h3>
                <Rating value={testimony.rating} readOnly fractions={2} size="sm" />
              </div>
            </div>
            
            <p className="text-sm text-mine-shaft-300 mt-4 leading-relaxed">
              {testimony.testimonial}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;