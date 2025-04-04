import React, { useState, useEffect } from "react";
import FaqComponent from "@/components/FaqComponent";
import { CenteredSpinner } from "@/components/ui/centered-spinner";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const FaqPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <CenteredSpinner />}
      <div className="w-full h-full bg-white dark:bg-[#171717] px-4 py-0 md:px-8 lg:px-16 xl:px-52 2xl:px-52">
        <FaqComponent />
        <StackedCircularFooter />
      </div>
    </>
  );
};

export default FaqPage;