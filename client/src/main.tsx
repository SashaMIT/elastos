import VisionPage from './components/VisionPage';
import WhitepaperPage from './pages/WhitepaperPage'; 
import Explorer from './pages/Explorer'; 
import Dao from './pages/Dao'; // Added import for Dao page
import Supply from './pages/Supply'; // Import Supply component
import Ambassadors from './pages/Ambassadors'; // Import Ambassadors component
import SocialChannelsPage from './pages/SocialChannelsPage';
import MediaKit from './pages/MediaKit'; // Import MediaKit component
import Bridge from './pages/Bridge'; // Import Bridge component
import AnnouncementsPage from './pages/AnnouncementsPage'; // Import AnnouncementsPage component
import AmbassadorsPage from './pages/AmbassadorsPage'; // Import AmbassadorsPage component
import TeamFoundationPage from './pages/TeamFoundationPage'; // Import TeamFoundationPage component

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router as WouterRouter, Switch, Route } from "wouter";
import '@fontsource/inter'
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import { preloadCriticalImages } from "@/lib/preload"; // Import preload utility
import { ErrorBoundary } from "./components/ErrorBoundary";

// Import LandingPage directly to prevent issues with the NewsSection carousel in production
import LandingPage from "./pages/LandingPage";

// Lazy load other pages
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
const Wallet = lazy(() => import("./pages/Wallet"));

// Import the ScrollToTop component
import { ScrollToTop } from "./components/ScrollToTop";

function AppRouter() {
  return (
    <ErrorBoundary>
      <Layout>
        {/* Add ScrollToTop to ensure pages load at the top */}
        <ScrollToTop />
        <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><Spinner size="lg" /></div>}>
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route path="/stats" component={HomePage} />
            <Route path="/security" component={SecurityPage} />
            <Route path="/value-calc" component={ValueCalcPage} />
            <Route path="/supply" component={Supply} />
            <Route path="/buy-ela" component={BuyElaPage} />
            <Route path="/ecosystem" component={EcosystemPage} />
            <Route path="/faq" component={FaqPage} />
            <Route path="/roadmap" component={RoadmapPage} />
            <Route path="/vision" component={VisionPage} />
            <Route path="/ela-utility" component={ElaUtilityPage} />
            <Route path="/use-cases" component={UseCasesPage} /> 
            <Route path="/wallet" component={Wallet} /> 
            <Route path="/whitepaper" component={WhitepaperPage} /> 
            <Route path="/explorer" component={Explorer} /> 
            <Route path="/dao" component={Dao} /> {/* Added Dao route */}
            <Route path="/social-channels" component={SocialChannelsPage} />
            <Route path="/media-kit" component={MediaKit} /> {/* Added MediaKit route */}
            <Route path="/bridge" component={Bridge} /> {/* Added Bridge route */}
            <Route path="/ambassadors" component={Ambassadors} /> {/* Added Ambassadors route */}
            <Route path="/announcements" component={AnnouncementsPage} /> {/* Added Announcements route */}
            <Route path="/ambassador-program" component={AmbassadorsPage} /> {/* Added Ambassadors route */}
            <Route path="/team-foundation" component={TeamFoundationPage} /> {/* Added Team Foundation route */}
            <Route>404 Page Not Found</Route>
          </Switch>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

import { monitorConnection } from "./lib/utils";

monitorConnection();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WouterRouter>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <Toaster />
      </QueryClientProvider>
    </WouterRouter>
  </StrictMode>,
);