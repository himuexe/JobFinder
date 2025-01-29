import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-mine-shaft-950 min-h-screen font-['poppins']  flex flex-col">
      <Header />
      <div className="flex-1"> {children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
