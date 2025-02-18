import { IconAsset } from "@tabler/icons-react";
import Login from "../components/SignUp/Login";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 font-['Poppins'] overflow-hidden flex items-center justify-center">
      <div className="w-full md:w-[90vw] lg:w-[80vw] xl:w-[70vw] h-[90vh] flex flex-col md:flex-row bg-mine-shaft-900 rounded-lg overflow-hidden shadow-2xl">
        {/* Left Section (Login Form) */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-6">
          <Login />
        </div>

        {/* Right Section (Branding) */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center flex-col gap-5 p-6 bg-mine-shaft-800">
          <div className="flex items-center gap-2 text-clairt-400">
            <IconAsset className="h-12 w-12 md:h-16 md:w-16" stroke={1.5} />
            <span className="text-2xl md:text-4xl lg:text-5xl font-semibold">
              JobFinder
            </span>
          </div>
          <div className="text-lg md:text-xl lg:text-2xl text-mine-shaft-200 font-semibold text-center">
            Find the job made for you
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;