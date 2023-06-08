import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/App.scss';
import Layout from './components/ui/layout/Layout';

const App = () => {
  return (
    <div className="app">
      <Layout>test</Layout>
    </div>
  );
};

export default App;
