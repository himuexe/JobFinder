import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Upload Jobs", url: "/upload-jobs" },
    { name: "About Us", url: "/about" },
  ];

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex gap-5 h-full items-center text-mine-shaft-300">
        {links.map((link, index) => (
          <div
            key={index}
            className={`border-t-[3px] h-full flex items-center ${
              location.pathname === link.url
                ? "border-clairt-400 text-clairt-400"
                : "border-transparent"
            }`}
          >
            <Link to={link.url}>{link.name}</Link>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <IconMenu2 className="h-6 w-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <div className="absolute top-20 right-6 bg-mine-shaft-900 p-4 rounded-lg flex flex-col gap-3">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className={`text-mine-shaft-100 ${
                  location.pathname === link.url ? "text-clairt-400" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavLinks;