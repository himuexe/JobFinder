import { Divider } from "@mantine/core"
import PostedJob from "../components/PostedJobs/PostedJob"
import PostedJobDesc from "../components/PostedJobs/PostedJobDesc"

const PostedJobPage = () => {
  return (
    <div className="">
      <Divider size={"xs"} />
      <div className="flex gap-5 ">
        <PostedJob/>
        <PostedJobDesc/>
      </div>
    </div>
  )
}

export default PostedJobPage