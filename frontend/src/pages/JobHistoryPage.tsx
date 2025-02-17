import { Divider } from "@mantine/core"
import JobHistory from "../components/Job History/JobHistory"


const JobHistoryPage = () => {
  return (
    <div className="">
        <Divider size={"xs"} />
        <div className=" gap-5 my-5">
            <JobHistory/>
        </div>
    </div>
  )
}

export default JobHistoryPage