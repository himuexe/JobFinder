import { similar } from "../../data/Company"
import CompanyCard from "./CompanyCard"



const SimilarCompanies = () => {
  return (
    <div className="">
        <div className="text-cl font-semibold mb-5">Similar Companies</div>
   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
    {similar.map((comapnies,index)=><CompanyCard key={index} {...comapnies} />)}    
  </div>
  </div>
  )
}

export default SimilarCompanies