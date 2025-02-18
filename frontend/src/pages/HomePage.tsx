import Companies from "../components/Home/Companies";
import DreamJob from "../components/Home/DreamJob";
import JobCategory from "../components/Home/JobCategory";
import Subscribe from "../components/Home/Subscribe";
import Testimonials from "../components/Home/Testimonials";
import Working from "../components/Home/Working";

const HomePage = () => {
  return (
    <div className="space-y-24">
      <DreamJob />
      <Companies />
      <JobCategory />
      <Working />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default HomePage;