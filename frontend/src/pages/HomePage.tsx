import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Companies from "../components/Home/Companies"
import DreamJob from "../components/Home/DreamJob"
import JobCategory from "../components/Home/JobCategory"
import Subscribe from "../components/Home/Subscribe"
import Testimonials from "../components/Home/Testimonials"
import Working from "../components/Home/Working"

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
        <Header />
        <DreamJob />
        <Companies />
        <JobCategory/>
        <Working/>
        <Testimonials/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default HomePage