import Company from "../components/CompanyProfile/Company"
import SimilarCompanies from "../components/CompanyProfile/SimilarCompanies"


const CompanyPage = () => {
  return (
    <div className="flex justify-between">
     <Company/>
     <SimilarCompanies/>
    </div>
  )
}

export default CompanyPage