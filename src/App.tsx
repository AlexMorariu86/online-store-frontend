// src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Apparel from './pages/Apparel';
import Skate from './pages/Skate';
import Accessories from './pages/Accessories';
import ShoppingCart from './pages/ShoppingCart';
import NoPage from './pages/NoPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/skate" element={<Skate />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;