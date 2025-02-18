import { Divider } from "@mantine/core";
import SearchBar from "../components/FindTalent/SearchBar";
import Talents from "../components/FindTalent/Talents";

const FindTalent = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <SearchBar />
      <Divider size="xs" mx={{ base: 0, md: "md" }} />
      <Talents />
    </div>
  );
};

export default FindTalent;