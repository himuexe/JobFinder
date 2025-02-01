import { Divider } from "@mantine/core"
import SearchBar from "../components/FindTalent/SearchBar"
import Talents from "../components/FindTalent/Talents"


const FindTalent = () => {
  return (
    <div>
        <Divider size="xs" mx={{ base: 0, md: "md" }} />
        <SearchBar />
        <Divider size="xs" mx={{ base: 0, md: "md" }} />
        <Talents/>
    </div>
  )
}

export default FindTalent