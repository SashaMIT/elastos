import Vision from './pages/Vision';
import WhitepaperPage from './pages/WhitepaperPage'; // Added import
import Explorer from './pages/Explorer'; // Added Explorer import

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import '@fontsource/inter'
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const SecurityPage = lazy(() => import("./pages/SecurityPage"));
const ValueCalcPage = lazy(() => import("./pages/ValueCalcPage"));
const SupplyPage = lazy(() => import("./pages/SupplyPage"));
const BuyElaPage = lazy(() => import("./pages/BuyElaPage"));
const EcosystemPage = lazy(() => import("./pages/EcosystemPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const RoadmapPage = lazy(() => import("./pages/RoadmapPage"));
const ElaUtilityPage = lazy(() => import("./pages/ElaUtilityPage"));
const UseCasesPage = lazy(() => import("./pages/UseCasesPage")); 


function Router() {
  return (
    <Layout>
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><Spinner size="lg" color="blue" /></div>}>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/stats" component={HomePage} />
          <Route path="/security" component={SecurityPage} />
          <Route path="/value-calc" component={ValueCalcPage} />
          <Route path="/supply" component={SupplyPage} />
          <Route path="/buy-ela" component={BuyElaPage} />
          <Route path="/ecosystem" component={EcosystemPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/roadmap" component={RoadmapPage} />
          <Route path="/vision" component={Vision} />
          <Route path="/ela-utility" component={ElaUtilityPage} />
          <Route path="/use-cases" component={UseCasesPage} /> 
          <Route path="/whitepaper" component={WhitepaperPage} /> {/* Added WhitepaperPage route */}
          <Route path="/explorer" component={Explorer} /> {/* Added Explorer route */}
          <Route>404 Page Not Found</Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

import { monitorConnection } from "./lib/utils";

monitorConnection();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>,
);