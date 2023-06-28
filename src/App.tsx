import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './components/screens/Home';
import Layout from './components/ui/layout/Layout';
import About from './components/screens/About';
import Stack from './components/screens/Stack';
import Projects from './components/screens/Projects';
import Contacts from './components/screens/Contacts';

import './styles/main/App.scss';

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech-stack" element={<Stack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
