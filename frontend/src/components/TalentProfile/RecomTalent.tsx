import { talents } from "../../data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecomTalent = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommended Talent</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
        {talents.map((talent: any, index: any) => index < 4 && <TalentCard key={index} {...talent} />)}
      </div>
    </div>
  );
};

export default RecomTalent;