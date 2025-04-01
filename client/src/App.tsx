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
import SocialChannelsPage from './pages/SocialChannelsPage'; // Added import


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
      <Route path="/social-channels" element={<SocialChannelsPage />} /> {/* Added route */}
    </Routes>
  );
}

export default App;

// pages/SocialChannelsPage.tsx
import React from 'react';

const SocialChannelsPage = () => {
  return (
    <div>
      <h1>Social Channels</h1>
      <ul>
        <li>
          <a href="https://x.com/ElastosInfo" target="_blank" rel="noopener noreferrer">
            X Account
          </a>
        </li>
        <li>
          <a href="https://t.me/elastosgroup" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </li>
        <li>
          <a href="https://discord.com/invite/elastos" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/r/Elastos/" target="_blank" rel="noopener noreferrer">
            Reddit
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCy5AjgpQIQq3bv8oy_L5WTQ" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/elastosorg/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialChannelsPage;