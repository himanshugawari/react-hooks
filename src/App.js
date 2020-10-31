import React, { useReducer } from 'react';
import './App.css';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';

function App() {
  return (
    <div className='App'>
      <DataFetchingTwo />
      <DataFetchingOne />
    </div>
  );
}

export default App;
