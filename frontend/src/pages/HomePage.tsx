import Header from "../components/Header/Header"
import Companies from "../components/Home/Companies"
import DreamJob from "../components/Home/DreamJob"
import JobCategory from "../components/Home/JobCategory"

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
        <Header />
        <DreamJob />
        <Companies />
        <JobCategory/>
    </div>
  )
}

export default HomePage