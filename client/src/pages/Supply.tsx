import { lazy, Suspense } from 'react';
import { Dots_v2 } from "@/components/ui/spinner";
import { Helmet } from "react-helmet";
import { SEO } from "@/components/SEO";
import { WebPageStructuredData } from "@/components/StructuredData";

const SupplyPage = lazy(() => import("@/pages/SupplyPage"));

const Supply = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen"><Dots_v2 /></div>}>
      <SupplyPage />
    </Suspense>
  );
};

export default Supply;