import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Layout from '@/views/Layout'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>

        <Layout />
      </BrowserRouter>

    </div>

  );
}

export default App;

