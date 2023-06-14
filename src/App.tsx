import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './components/screens/Home';
import Layout from './components/ui/layout/Layout';
import About from './components/screens/About';

import './styles/main/App.scss';

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
