import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { HomeV2 } from './pages/HomeV2';
import { HomeV3 } from './pages/HomeV3';
import { FunilPage } from './pages/FunilPage';
import ThankYouPage from './pages/ThankYouPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v2" element={<HomeV2 />} />
        <Route path="/v3" element={<HomeV3 />} />
        <Route path="/funil" element={<FunilPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
