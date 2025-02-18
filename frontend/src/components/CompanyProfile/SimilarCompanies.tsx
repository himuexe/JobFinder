import { similar } from "../../data/Company";
import CompanyCard from "./CompanyCard";

const SimilarCompanies = () => {
  return (
    <div className="w-full md:w-1/4">
      <div className="text-cl font-semibold mb-5">Similar Companies</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
        {similar.map((companies, index) => <CompanyCard key={index} {...companies} />)}
      </div>
    </div>
  );
};

export default SimilarCompanies;