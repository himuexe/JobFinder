import { Divider } from "@mantine/core"
import Profile from "../components/Profile/Profile"
import { profile } from "../data/TalentData"

const ProfilePage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
        <Divider mx={"md"} mb="xl" />
        <div className="flex flex-col md:flex-row gap-8 mt-5">
            <Profile {...profile} />
      </div>
    </div>
  )
}

export default ProfilePage