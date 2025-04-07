
import React from "react";
import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Map routes to readable names
  const routeNames: Record<string, string> = {
    "vision": "Vision",
    "security": "Security",
    "ecosystem": "Ecosystem",
    "faq": "FAQ",
    "buy-ela": "Buy ELA",
    "use-cases": "Use Cases",
    "whitepaper": "Whitepaper",
    "social-channels": "Social Channels",
    "media-kit": "Media Kit",
    "bridge": "Bridge",
    "announcements": "Announcements",
    "ela-utility": "ELA Utility",
    "value-calculator": "Value Calculator",
  };

  return (
    <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 px-4 md:px-0">
      <Link 
        to="/" 
        className="flex items-center hover:text-black dark:hover:text-white transition-colors"
      >
        <Home className="h-4 w-4 mr-1" />
        <span>Home</span>
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const displayName = routeNames[name] || name.charAt(0).toUpperCase() + name.slice(1);
        
        return (
          <React.Fragment key={name}>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            {isLast ? (
              <span className="font-medium text-black dark:text-white">
                {displayName}
              </span>
            ) : (
              <Link
                to={routeTo}
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
