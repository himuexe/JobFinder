import Company from "../components/CompanyProfile/Company";
import SimilarCompanies from "../components/CompanyProfile/SimilarCompanies";

const CompanyPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8">
      <Company />
      <SimilarCompanies />
    </div>
  );
};

export default CompanyPage;