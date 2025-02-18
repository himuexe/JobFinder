import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Jobs", url: "/post-jobs" },
    { name: "Posted Jobs", url: "/posted-jobs" },
    { name: "Job History", url: "/job-history" },
  ];

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="flex items-center">
      <div className="hidden md:flex h-full items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.url}
            to={link.url}
            className={`h-full flex items-center border-t-[3px] px-2 transition-colors
              ${location.pathname === link.url 
                ? "border-clairt-400 text-clairt-400" 
                : "border-transparent text-mine-shaft-300 hover:text-mine-shaft-100"
              }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-mine-shaft-100 hover:text-clairt-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <IconX className="h-6 w-6" />
          ) : (
            <IconMenu2 className="h-6 w-6" />
          )}
        </button>

        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-mine-shaft-900 py-4 px-6 shadow-lg">
            <div className="container mx-auto flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.url}
                  to={link.url}
                  className={`py-2 px-4 rounded-lg transition-colors
                    ${location.pathname === link.url
                      ? "bg-mine-shaft-800 text-clairt-400"
                      : "text-mine-shaft-100 hover:bg-mine-shaft-800"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavLinks;