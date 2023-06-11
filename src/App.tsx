import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from './components/ui/layout/Layout';

import './styles/main/App.scss';
import Home from './components/screens/Home';

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
