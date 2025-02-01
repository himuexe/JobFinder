
import { talents } from "../../data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talents = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort />
      </div>
      <div className="mt-10 flex md:flex-row flex-col gap-5 flex-wrap">
        {
            talents.map((talent, index) => (
                <TalentCard key={index} {...talent} />
            ))
        }
      </div>
    </div>
  );
};

export default Talents;