import { Divider } from "@mantine/core";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-mine-shaft-950 min-h-screen font-['Poppins'] flex flex-col">
      <Header />
      <Divider 
        size="xs" 
        className="mx-0 md:mx-4 opacity-20" 
      />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;