import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { HomeV2 } from './pages/HomeV2';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v2" element={<HomeV2 />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
