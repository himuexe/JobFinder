import { Divider } from "@mantine/core";
import Profile from "../components/TalentProfile/Profile";
import { profile } from "../data/TalentData";
import RecomTalent from "../components/TalentProfile/RecomTalent";

const TalentProfile = () => {
  return (
    <div className="container mx-auto">
      <Divider size="xs" mx={{ base: 0, md: "md" }} />
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-2/3">
          <Profile {...profile} />
        </div>
        <div className="w-full md:w-1/3">
          <RecomTalent />
        </div>
      </div>
    </div>
  );
};

export default TalentProfile;