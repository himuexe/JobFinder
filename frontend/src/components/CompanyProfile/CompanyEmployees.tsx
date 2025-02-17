import { talents } from "../../data/TalentData"
import TalentCard from "../FindTalent/TalentCard"


const CompanyEmployees = () => {
  return (
    <div className="mt-10 flex md:flex-row flex-col gap-10 flex-wrap">
        {
            talents.map((talent, index) => index<6 && (
                <TalentCard key={index} {...talent} />
            ))
        }
      </div>
  )
}

export default CompanyEmployees