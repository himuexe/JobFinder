import { talents } from "../../data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talents = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {talents.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default Talents;