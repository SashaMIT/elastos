import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Page imports
import LandingPage from './pages/LandingPage';
import SecurityPage from './pages/SecurityPage';
import VisionPage from './pages/VisionPage';
import ValueCalcPage from './pages/ValueCalcPage';
import BuyElaPage from './pages/BuyElaPage';
import ElaUtilityPage from './pages/ElaUtilityPage';
import UseCasesPage from './pages/UseCasesPage';
import WhitepaperPage from './pages/WhitepaperPage'; 
import EcosystemPage from './pages/EcosystemPage'; 
import NewsPage from './pages/NewsPage'; 
import FaqPage from './pages/FaqPage'; 
import SocialChannelsPage from './pages/SocialChannelsPage';
import MediaKit from './pages/MediaKit'; // Import MediaKit wrapper component
import Bridge from './pages/Bridge'; // Added import for Bridge page
import AnnouncementsPage from './pages/AnnouncementsPage'; // Added import for AnnouncementsPage


function App() {
  return (
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
      <Route path="/bridge" element={<Bridge />} /> {/* Added Bridge route */}
      <Route path="/announcements" element={<AnnouncementsPage />} /> {/* Added Announcements route */}
    </Routes>
  );
}

export default App;