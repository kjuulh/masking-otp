import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  );
};

export default App;
