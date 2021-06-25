import './App.css';
import React from 'react';
import Index from './screens/Index';
import CategoriesProvider from './context/provider';

const App: React.FC = () => {
  return (
    <CategoriesProvider>
      <div className="App">
        <Index />
      </div>
    </CategoriesProvider>
  );
};

export default App;
