import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from '@/components/ui/spinner';
import { OrganizationStructuredData } from './components/StructuredData';

// Use lazy loading for page components
const LandingPage = lazy(() => import('./pages/LandingPage'));
const SecurityPage = lazy(() => import('./pages/SecurityPage'));
const VisionPage = lazy(() => import('./pages/VisionPage'));
const ValueCalcPage = lazy(() => import('./pages/ValueCalcPage'));
const BuyElaPage = lazy(() => import('./pages/BuyElaPage'));
const ElaUtilityPage = lazy(() => import('./pages/ElaUtilityPage'));
const UseCasesPage = lazy(() => import('./pages/UseCasesPage'));
const WhitepaperPage = lazy(() => import('./pages/WhitepaperPage'));
const EcosystemPage = lazy(() => import('./pages/EcosystemPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const SocialChannelsPage = lazy(() => import('./pages/SocialChannelsPage'));
const MediaKit = lazy(() => import('./pages/MediaKit'));
const Bridge = lazy(() => import('./pages/Bridge'));
const AnnouncementsPage = lazy(() => import('./pages/AnnouncementsPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <Spinner className="h-10 w-10" />
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <OrganizationStructuredData />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/value-calculator" element={<ValueCalcPage />} />
        <Route path="/buy-ela" element={<BuyElaPage />} />
        <Route path="/ela-utility" element={<ElaUtilityPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/ecosystem" element={<EcosystemPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/whitepaper" element={<WhitepaperPage />} />
        <Route path="/social-channels" element={<SocialChannelsPage />} />
        <Route path="/media-kit" element={<MediaKit />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;